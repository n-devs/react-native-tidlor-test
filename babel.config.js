// const { NODE_ENV, BABEL_ENV } = process.env

// const cjs = BABEL_ENV === 'cjs' || NODE_ENV === 'test'

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // plugins: ['babel-plugin-redux-saga', cjs && '@babel/plugin-transform-modules-commonjs'].filter(Boolean),

  }
};
