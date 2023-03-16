module.exports = {
  "stories": [
    "../projects/ui/src/lib/**/*.stories.mdx",
    "../projects/ui/src/lib/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    "storybook-dark-mode"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
