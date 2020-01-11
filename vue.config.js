const path = require('path');
// gzip
const CompressionWebpackPlugin = require('compression-webpack-plugin');

// 打包文件名
const outputDir = 'NginxPath';

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? `/${outputDir}/` : '/', // 设置output.publicPath，区分生产环境和开发环境
	outputDir: outputDir, // 生成的生产环境构建文件的目录,默认dist文件名
	assetsDir: 'static', // 配置静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
	productionSourceMap: false, // 生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
	devServer: {
		// 配置 webpack-dev-server 行为。
		open: process.env.NODE_ENV === 'development',
		host: 'localhost',
		port: 8888,
		https: false,
		hot: true,
		hotOnly: true,
		proxy: {
			// change xxx-api/login => mock/login
			// detail: https://cli.vuejs.org/config/#devserver-proxy
			[process.env.VUE_APP_BASE_API]: {
				target: `http://127.0.0.1:${process.env.VUE_APP_BASE_API_PORT}/api`,
				changeOrigin: true,
				pathRewrite: {
					['^' + process.env.VUE_APP_BASE_API]: ''
				}
			}
		}, // string | Object
		before: (app) => {}
	},
	css: {
		// 是否使用css分离插件 ExtractTextPlugin
		extract: !!process.env.NODE_ENV === 'production',
		// 开启 CSS source maps?
		sourceMap: false
	},
	parallel: false,
	chainWebpack: (config) => {
		// 新增别名
		config.resolve.alias.set('@$', resolve('src')).set('@assets', resolve('src/assets'));

		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
		types.forEach((type) => addStyleResource(config.module.rule('scss').oneOf(type)));

		if (process.env.NODE_ENV === 'production') {
			// 1、压缩html中的css
			config.plugin('html').tap((args) => {
				args[0].minify.minifyCSS = true;
				return args;
			});
			// 2、去除console.log 、debugger
			config.optimization.minimizer('terser').tap((args) => {
				args[0].terserOptions.compress.drop_console = true;
				args[0].terserOptions.compress.drop_debugger = true;
				return args;
			});

			// 3、gzip需要nginx进行配合
			config
				.plugin('compression')
				.use(CompressionWebpackPlugin)
				.tap(() => [
					{
						algorithm: 'gzip',
						minRatio: 0.8,
						test: /\.js$|\.html$|\.css/, // 匹配文件名
						threshold: 10240, // 超过10k进行压缩
						deleteOriginalAssets: true // 是否删除源文件
					}
				]);
		}
	}
};

function addStyleResource(rule) {
	rule.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [
				path.resolve(__dirname, 'src/assets/scss/scss-mixins.scss') // 需要全局导入的less
			]
		});
}

function resolve(dir) {
	return path.join(__dirname, dir);
}
