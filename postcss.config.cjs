module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-preset-env")({
      stage   : 1,
      browsers: ["last 2 versions", "not ie <= 8"],
    }),
    require("postcss-custom-media"),
  ],
}
