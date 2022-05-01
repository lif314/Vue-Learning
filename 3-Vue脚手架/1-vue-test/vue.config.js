const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false   // 关闭语法检查 命名规范 StudentName   student-name
})

// 调整脚手架的运行规则