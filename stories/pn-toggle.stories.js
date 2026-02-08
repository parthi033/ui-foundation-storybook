import '@parthi033/ui-foundation/dist/components/pn-toggle';

export default {
  title: 'UI Foundation/pn-toggle',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A toggle/switch component for boolean settings.

## Usage

\`\`\`html
<pn-toggle label="Dark Mode" name="darkMode"></pn-toggle>
\`\`\`

## Features

- Three sizes: small, medium, large
- Label with left or right positioning
- Disabled state
- Change events
        `
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Toggle label text',
      table: { type: { summary: 'string' } }
    },
    name: {
      control: 'text',
      description: 'Form field name',
      table: { type: { summary: 'string' } }
    },
    checked: {
      control: 'boolean',
      description: 'Whether the toggle is on',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the toggle',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Toggle size',
      table: { type: { summary: "'small' | 'medium' | 'large'" }, defaultValue: { summary: "'medium'" } }
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Label position relative to toggle',
      table: { type: { summary: "'left' | 'right'" }, defaultValue: { summary: "'right'" } }
    }
  }
};

const Template = ({ label, name, checked, disabled, size, labelPosition }) =>
  `<pn-toggle 
    ${label ? `label="${label}"` : ''}
    ${name ? `name="${name}"` : ''}
    ${checked ? 'checked="true"' : ''}
    ${disabled ? 'disabled="true"' : ''}
    size="${size || 'medium'}"
    ${labelPosition ? `label-position="${labelPosition}"` : ''}
  ></pn-toggle>`;

export const Default = Template.bind({});
Default.args = {
  label: 'Enable notifications',
  size: 'medium'
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Dark mode',
  checked: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled toggle',
  disabled: true
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  label: 'Disabled (on)',
  disabled: true,
  checked: true
};

export const LabelLeft = Template.bind({});
LabelLeft.args = {
  label: 'Auto-save',
  labelPosition: 'left'
};
LabelLeft.parameters = {
  docs: {
    description: {
      story: 'Toggle with label positioned on the left side.'
    }
  }
};

export const AllSizes = () => `
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <pn-toggle label="Small toggle" size="small"></pn-toggle>
    <pn-toggle label="Medium toggle" size="medium"></pn-toggle>
    <pn-toggle label="Large toggle" size="large"></pn-toggle>
  </div>
`;
AllSizes.parameters = {
  docs: {
    description: {
      story: 'All toggle sizes compared.'
    }
  }
};

export const SettingsExample = () => `
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <h3 style="margin: 0;">Settings</h3>
    <pn-toggle label="Enable notifications" checked="true"></pn-toggle>
    <pn-toggle label="Dark mode"></pn-toggle>
    <pn-toggle label="Auto-save drafts" checked="true"></pn-toggle>
    <pn-toggle label="Show online status"></pn-toggle>
    <pn-toggle label="Two-factor authentication" disabled="true"></pn-toggle>
  </div>
`;
SettingsExample.parameters = {
  docs: {
    description: {
      story: 'Real-world settings panel using multiple toggles.'
    }
  }
};
