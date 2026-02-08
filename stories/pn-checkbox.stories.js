import '@parthi033/ui-foundation/dist/components/pn-checkbox';

export default {
  title: 'UI Foundation/pn-checkbox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A checkbox component for toggling boolean values.

## Usage

\`\`\`html
<pn-checkbox label="Accept terms" name="terms"></pn-checkbox>
\`\`\`

## Features

- Checked, unchecked, and indeterminate states
- Disabled and required states
- Error validation with custom message
- Emits change events
        `
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Checkbox label text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    name: {
      control: 'text',
      description: 'Form field name',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    indeterminate: {
      control: 'boolean',
      description: 'Show indeterminate state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    required: {
      control: 'boolean',
      description: 'Mark as required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    error: {
      control: 'boolean',
      description: 'Show error state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    value: {
      control: 'text',
      description: 'Checkbox value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    }
  }
};

const Template = ({ label, name, checked, indeterminate, disabled, required, error, errorMessage, value }) =>
  `<pn-checkbox 
    ${label ? `label="${label}"` : ''}
    ${name ? `name="${name}"` : ''}
    ${checked ? 'checked="true"' : ''}
    ${indeterminate ? 'indeterminate="true"' : ''}
    ${disabled ? 'disabled="true"' : ''}
    ${required ? 'required="true"' : ''}
    ${error ? 'error="true"' : ''}
    ${errorMessage ? `error-message="${errorMessage}"` : ''}
    ${value ? `value="${value}"` : ''}
  ></pn-checkbox>`;

export const Default = Template.bind({});
Default.args = {
  label: 'Accept terms and conditions',
  name: 'terms'
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Remember me',
  checked: true
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  label: 'Select all',
  indeterminate: true
};
Indeterminate.parameters = {
  docs: {
    description: {
      story: 'Indeterminate state, typically used for "select all" when only some items are selected.'
    }
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled option',
  disabled: true
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  label: 'Disabled checked',
  disabled: true,
  checked: true
};

export const Required = Template.bind({});
Required.args = {
  label: 'I agree to the privacy policy',
  required: true
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Accept terms',
  error: true,
  errorMessage: 'You must accept the terms to continue'
};

export const CheckboxGroup = () => `
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <pn-checkbox label="Option A" name="group" value="a"></pn-checkbox>
    <pn-checkbox label="Option B" name="group" value="b" checked="true"></pn-checkbox>
    <pn-checkbox label="Option C" name="group" value="c"></pn-checkbox>
    <pn-checkbox label="Option D (disabled)" name="group" value="d" disabled="true"></pn-checkbox>
  </div>
`;
CheckboxGroup.parameters = {
  docs: {
    description: {
      story: 'Multiple checkboxes used as a group.'
    }
  }
};
