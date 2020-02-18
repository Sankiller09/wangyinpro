const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 75   //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
})
module.exports = {
    lintOnSave:false,//关闭enlint语法的检查,后期需要检查时要记得打开
    css: { // 添加postcss配置
        loaderOptions: {
          postcss: {
            plugins: [
              postcss
            ]
          }
        }
    },
}