const { Compilation, sources } = require('webpack')

// Projects bundling this library with webpack 4 rewrite `require("vue")` inside it to
// `__webpack_require__(<their module id>)`, which then resolves to this bundle's own
// `__webpack_require__` and fails with "__webpack_modules__[moduleId] is not a function".
// Renaming the bundle's runtime (same length, so source maps stay valid) avoids the clash.
const RUNTIME_NAME = '__webpack_require__'
const RENAMED_RUNTIME_NAME = '__tselect_require__'

class RenameWebpackRuntimePlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap('RenameWebpackRuntimePlugin', compilation => {
      compilation.hooks.processAssets.tap(
        { name: 'RenameWebpackRuntimePlugin', stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE },
        assets => {
          Object.keys(assets).filter(name => name.endsWith('.js')).forEach(name => {
            const original = assets[name]
            const code = original.source().toString()
            const renamed = new sources.ReplaceSource(original)
            let index = code.indexOf(RUNTIME_NAME)
            while (index !== -1) {
              renamed.replace(index, index + RUNTIME_NAME.length - 1, RENAMED_RUNTIME_NAME)
              index = code.indexOf(RUNTIME_NAME, index + RUNTIME_NAME.length)
            }
            compilation.updateAsset(name, renamed)
          })
        },
      )
    })
  }
}

module.exports = {
    css: {
        extract: true
   },
   configureWebpack: {
        plugins: [ new RenameWebpackRuntimePlugin() ],
   },
};
