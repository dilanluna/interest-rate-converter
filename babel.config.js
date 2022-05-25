module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            types: './src/types',
            '@consts': './src/consts',
            '@screens': './src/screens',
            '@features': './src/features',
            '@components': './src/components',
          },
          extensions: ['.ts', '.tsx'],
        },
      ],
    ],
  };
};
