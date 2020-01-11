/*
 * @Author: wangyiyang
 * @desc: 全局注册组件、过滤器、指令...
 * @Date: 2020-01-07 20:12:20 
 * @Last Modified time: 2020-01-07 20:13:10
 */
import Vue from 'vue';
// 1、filter
import * as filters from './filter/index';
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

// 2、vant
import {
    Button,
    Field,
    Cell,
    CellGroup,
    Grid,
    GridItem
} from 'vant';

Vue.use(Button).use(Field).use(Cell).use(CellGroup).use(Grid).use(GridItem);