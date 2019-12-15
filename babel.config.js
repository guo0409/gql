module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['component',{
      "libraryName":"mint-ui", //z针对mint-ui库实现按需引入打包
      "style":true //自动打包对应的css
    }]
  ]
}
