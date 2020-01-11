export default function (name) {
    const reg = new RegExp('[?|&]' + name + '=([^&;]+?)(&|#|;|$)');
    const res = reg.exec(location.href) || ['', ''];
    return res[1].replace(/\+/g, '%20') || null;
}