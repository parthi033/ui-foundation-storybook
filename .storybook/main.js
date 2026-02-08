

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/web-components-vite",
  "managerHead": (head) => `
    ${head}
    <script>
      // Redirect default Storybook landing to pn-button docs
      if (window.location.search.includes('configure-your-project--docs')) {
        window.location.replace(window.location.origin + window.location.pathname + '?path=/docs/ui-foundation-pn-button--docs');
      }
    </script>
  `
};
export default config;