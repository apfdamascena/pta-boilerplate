module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current'} }],
      '@babel/preset-typescript'
    ],
    plugins: [
      ['module-resolver', {
        "root": ".",
         alias: {
            "@controllers": "./src/controllers",
            "@models": "./src/models"
        }
      }],
      "babel-plugin-transform-typescript-metadata",
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      "@babel/plugin-syntax-dynamic-import"
    ],
  }