const presetEnv = require("postcss-preset-env");
const flexbugsFixes = require("postcss-flexbugs-fixes");
const pxToRem = require("postcss-pxtorem");

module.exports = {
  plugins: [
    flexbugsFixes,
    presetEnv({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    }),
    pxToRem({ replace: true, propList: ["*", "!border-radius"], mediaQuery: true }),
  ],
};
