/** @type { import('@storybook/web-components-vite').Preview } */
import '@parthi033/ui-foundation/dist/components/pn-button';


const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Light or Dark theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
};

export const decorators = [
  (Story, context) => {
    document.documentElement.className = context.globals.theme;
    return Story();
  },
];

export default preview;