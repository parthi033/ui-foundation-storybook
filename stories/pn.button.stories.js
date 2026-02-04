import '@parthi033/ui-foundation/dist/components/pn-button';

export default {
  title: 'UI Foundation/pn-button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The pn-button component is a custom web component from the UI Foundation library. 
It provides a consistent button interface with multiple types and states.

## Usage

\`\`\`html
<pn-button type="primary" label="Click me"></pn-button>
\`\`\`

## Properties

- **type**: Controls the button style (primary, secondary, disabled)
- **label**: The text displayed on the button
        `
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'disabled'],
      description: 'The button type that determines its appearance',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    label: {
      control: 'text',
      description: 'The text content displayed on the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' }
      }
    }
  }
};

const Template = ({ type, label }) =>
  `<pn-button type="${type}" label="${label}"></pn-button>`;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Primary Button'
};
Primary.parameters = {
  docs: {
    description: {
      story: 'The primary button is used for main actions in your interface.'
    }
  },
  percy: {
    additionalSnapshots: [
      { suffix: ' – Dark', args: { theme: 'dark' } }
    ]
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Secondary Button'
};
Secondary.parameters = {
  docs: {
    description: {
      story: 'The secondary button is used for less important actions.'
    }
  },
  percy: {
    additionalSnapshots: [
      { suffix: ' – Dark', args: { theme: 'dark' } }
    ]
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'disabled',
  label: 'Disabled Button'
};
Disabled.parameters = {
  docs: {
    description: {
      story: 'The disabled button shows when an action is not available.'
    }
  },
  percy: {
    additionalSnapshots: [
      { suffix: ' – Dark', args: { theme: 'dark' } }
    ]
  }
};

// Additional stories for better documentation
export const AllVariants = () => `
  <div style="display: flex; gap: 16px; align-items: center;">
    <pn-button type="primary" label="Primary"></pn-button>
    <pn-button type="secondary" label="Secondary"></pn-button>
    <pn-button type="disabled" label="Disabled"></pn-button>
  </div>
`;
AllVariants.parameters = {
  docs: {
    description: {
      story: 'All button variants displayed together for comparison.'
    }
  }
};