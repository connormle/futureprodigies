const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      uninvoke: true
    }
  }
})
