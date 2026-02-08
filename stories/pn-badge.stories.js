import '@parthi033/ui-foundation/dist/components/pn-badge';

export default {
  title: 'UI Foundation/pn-badge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A badge component for labeling and categorization.

## Usage

\`\`\`html
<pn-badge text="New" type="primary" variant="solid"></pn-badge>
\`\`\`

## Features

- Seven color types (primary, secondary, success, error, warning, info, neutral)
- Three variants (solid, outline, soft)
- Three sizes (small, medium, large)
- Rounded pill style
- Dot indicator mode
- Optional icon support
        `
      }
    }
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Badge text content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info', 'neutral'],
      description: 'Badge color type',
      table: {
        type: { summary: "'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'neutral'" },
        defaultValue: { summary: "'primary'" }
      }
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Badge size',
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: "'medium'" }
      }
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline', 'soft'],
      description: 'Badge style variant',
      table: {
        type: { summary: "'solid' | 'outline' | 'soft'" },
        defaultValue: { summary: "'solid'" }
      }
    },
    rounded: {
      control: 'boolean',
      description: 'Use pill/rounded shape',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    dot: {
      control: 'boolean',
      description: 'Show as a dot indicator',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    icon: {
      control: 'text',
      description: 'Icon class (e.g., "fas fa-check")',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  }
};

const Template = ({ text, type, size, variant, rounded, dot, icon }) =>
  `<pn-badge 
    ${text ? `text="${text}"` : ''}
    type="${type || 'primary'}"
    size="${size || 'medium'}"
    variant="${variant || 'solid'}"
    ${rounded ? 'rounded="true"' : ''}
    ${dot ? 'dot="true"' : ''}
    ${icon ? `icon="${icon}"` : ''}
  ></pn-badge>`;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary',
  type: 'primary'
};

export const Success = Template.bind({});
Success.args = {
  text: 'Success',
  type: 'success'
};

export const ErrorBadge = Template.bind({});
ErrorBadge.args = {
  text: 'Error',
  type: 'error'
};

export const WarningBadge = Template.bind({});
WarningBadge.args = {
  text: 'Warning',
  type: 'warning'
};

export const Outline = Template.bind({});
Outline.args = {
  text: 'Outline',
  type: 'primary',
  variant: 'outline'
};

export const Soft = Template.bind({});
Soft.args = {
  text: 'Soft',
  type: 'primary',
  variant: 'soft'
};

export const Rounded = Template.bind({});
Rounded.args = {
  text: 'Rounded',
  type: 'primary',
  rounded: true
};

export const Dot = Template.bind({});
Dot.args = {
  text: 'Online',
  type: 'success',
  dot: true
};
Dot.parameters = {
  docs: {
    description: {
      story: 'Badge with dot indicator, useful for status.'
    }
  }
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'Verified',
  type: 'success',
  icon: 'fas fa-check'
};

export const AllTypes = () => `
  <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
    <pn-badge text="Primary" type="primary"></pn-badge>
    <pn-badge text="Secondary" type="secondary"></pn-badge>
    <pn-badge text="Success" type="success"></pn-badge>
    <pn-badge text="Error" type="error"></pn-badge>
    <pn-badge text="Warning" type="warning"></pn-badge>
    <pn-badge text="Info" type="info"></pn-badge>
    <pn-badge text="Neutral" type="neutral"></pn-badge>
  </div>
`;
AllTypes.parameters = {
  docs: {
    description: {
      story: 'All badge types displayed together.'
    }
  }
};

export const AllVariants = () => `
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <div style="display: flex; gap: 8px; align-items: center;">
      <strong style="width: 60px;">Solid:</strong>
      <pn-badge text="Primary" type="primary" variant="solid"></pn-badge>
      <pn-badge text="Success" type="success" variant="solid"></pn-badge>
      <pn-badge text="Error" type="error" variant="solid"></pn-badge>
    </div>
    <div style="display: flex; gap: 8px; align-items: center;">
      <strong style="width: 60px;">Outline:</strong>
      <pn-badge text="Primary" type="primary" variant="outline"></pn-badge>
      <pn-badge text="Success" type="success" variant="outline"></pn-badge>
      <pn-badge text="Error" type="error" variant="outline"></pn-badge>
    </div>
    <div style="display: flex; gap: 8px; align-items: center;">
      <strong style="width: 60px;">Soft:</strong>
      <pn-badge text="Primary" type="primary" variant="soft"></pn-badge>
      <pn-badge text="Success" type="success" variant="soft"></pn-badge>
      <pn-badge text="Error" type="error" variant="soft"></pn-badge>
    </div>
  </div>
`;
AllVariants.parameters = {
  docs: {
    description: {
      story: 'All badge variants (solid, outline, soft) compared.'
    }
  }
};

export const AllSizes = () => `
  <div style="display: flex; gap: 8px; align-items: center;">
    <pn-badge text="Small" type="primary" size="small"></pn-badge>
    <pn-badge text="Medium" type="primary" size="medium"></pn-badge>
    <pn-badge text="Large" type="primary" size="large"></pn-badge>
  </div>
`;
AllSizes.parameters = {
  docs: {
    description: {
      story: 'All badge sizes displayed together.'
    }
  }
};
