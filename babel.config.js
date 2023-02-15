module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@interfaces": "./src/interfaces",
            "@api": "./src/api",
            "@assets": "./assets",
          },
        },
      ],
    ],
  };
};
