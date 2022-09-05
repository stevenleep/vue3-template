module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue({ file }) {
        return file.indexOf("vant") !== -1 ? 37.5 : 75;
      },
      propList: ["*"],
    },
    autoprefixer: {
      overrideBrowserslist: [
        "> 1%",
        "last 3 versions",
        "not ie <= 8",
        "chrome >= 14",
        "safari >= 3",
        "ios >= 8",
        "android >= 4.0",
      ],
    },
  },
};
