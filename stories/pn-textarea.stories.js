import '@parthi033/ui-foundation/dist/components/pn-textarea';

export default {
  title: 'UI Foundation/pn-textarea',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A textarea component for multi-line text input.

## Usage

\`\`\`html
<pn-textarea label="Description" placeholder="Enter description..." rows="4"></pn-textarea>
\`\`\`

## Features

- Configurable rows
- Character count display
- Resize control (none, vertical, horizontal, both)
- Validation with error messages
- Max length support
        `
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Textarea label',
      table: { type: { summary: 'string' } }
    },
    name: {
      control: 'text',
      description: 'Form field name',
      table: { type: { summary: 'string' } }
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: { type: { summary: 'string' } }
    },
    value: {
      control: 'text',
      description: 'Current value',
      table: { type: { summary: 'string' }, defaultValue: { summary: "''" } }
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the textarea',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    readonly: {
      control: 'boolean',
      description: 'Read-only mode',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    required: {
      control: 'boolean',
      description: 'Mark as required',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    error: {
      control: 'boolean',
      description: 'Show error state',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    errorMessage: {
      control: 'text',
      description: 'Error message',
      table: { type: { summary: 'string' } }
    },
    rows: {
      control: 'number',
      description: 'Number of visible text rows',
      table: { type: { summary: 'number' }, defaultValue: { summary: '4' } }
    },
    maxlength: {
      control: 'number',
      description: 'Maximum character length',
      table: { type: { summary: 'number' } }
    },
    resize: {
      control: { type: 'select' },
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Resize behavior',
      table: { type: { summary: "'none' | 'vertical' | 'horizontal' | 'both'" }, defaultValue: { summary: "'vertical'" } }
    },
    showCount: {
      control: 'boolean',
      description: 'Show character count',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    }
  }
};

const Template = ({ label, name, placeholder, value, disabled, readonly, required, error, errorMessage, rows, maxlength, resize, showCount }) =>
  `<pn-textarea 
    ${label ? `label="${label}"` : ''}
    ${name ? `name="${name}"` : ''}
    ${placeholder ? `placeholder="${placeholder}"` : ''}
    ${value ? `value="${value}"` : ''}
    ${disabled ? 'disabled="true"' : ''}
    ${readonly ? 'readonly="true"' : ''}
    ${required ? 'required="true"' : ''}
    ${error ? 'error="true"' : ''}
    ${errorMessage ? `error-message="${errorMessage}"` : ''}
    ${rows ? `rows="${rows}"` : ''}
    ${maxlength ? `maxlength="${maxlength}"` : ''}
    ${resize ? `resize="${resize}"` : ''}
    ${showCount ? 'show-count="true"' : ''}
  ></pn-textarea>`;

export const Default = Template.bind({});
Default.args = {
  label: 'Description',
  placeholder: 'Enter a description...',
  rows: 4
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Bio',
  value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  rows: 4
};

export const WithCharacterCount = Template.bind({});
WithCharacterCount.args = {
  label: 'Message',
  placeholder: 'Type your message...',
  maxlength: 200,
  showCount: true,
  rows: 4
};
WithCharacterCount.parameters = {
  docs: {
    description: {
      story: 'Textarea with character count display and max length.'
    }
  }
};

export const Required = Template.bind({});
Required.args = {
  label: 'Comments',
  placeholder: 'Required field...',
  required: true,
  rows: 3
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Feedback',
  error: true,
  errorMessage: 'Feedback is required',
  rows: 3
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  value: 'This textarea is disabled',
  disabled: true,
  rows: 3
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Read Only',
  value: 'This content cannot be edited.',
  readonly: true,
  rows: 3
};

export const NoResize = Template.bind({});
NoResize.args = {
  label: 'Fixed Size',
  placeholder: 'Cannot be resized',
  resize: 'none',
  rows: 4
};

export const ResizeBoth = Template.bind({});
ResizeBoth.args = {
  label: 'Resizable',
  placeholder: 'Resize in any direction',
  resize: 'both',
  rows: 4
};
