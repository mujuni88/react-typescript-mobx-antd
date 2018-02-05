const { compose, getLoader } = require('react-app-rewired')
const tsImportPluginFactory = require('ts-import-plugin')

const rewireLess = require('react-app-rewire-less')
const rewireMobX = require('react-app-rewire-mobx')
const rewireLodash = require('react-app-rewire-lodash')
const rewireStyledComponents = require('react-app-rewire-styled-components')

const lessOptions = {
  modifyVars: {
    '@primary-color': '#FF5722'
  }
}

module.exports = function override (config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule =>
    rule.loader &&
    typeof rule.loader === 'string' &&
    rule.loader.includes('ts-loader')
  )

  if (!tsLoader) {
    console.log(`could not find ts-loader node`)
    return
  }

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [ tsImportPluginFactory({
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: true
      }) ]
    })
  }

  const rewires = compose(
    rewireLess.withLoaderOptions(lessOptions),
    rewireMobX,
    rewireLodash,
    rewireStyledComponents
  )

  return rewires(config, env)
}
