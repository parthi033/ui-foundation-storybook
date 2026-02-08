import '@parthi033/ui-foundation/dist/components/pn-input';

export default {
  title: 'UI Foundation/pn-input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A text input component with validation, icons, and multiple input types.

## Usage

\`\`\`html
<pn-input label="Email" type="email" placeholder="you@example.com" required="true"></pn-input>
\`\`\`

## Features

- Multiple input types (text, email, password, number, tel, url, search)
- Left and right icon support
- Validation states (error, required)
- Read-only and disabled states
- Min/max/step for number inputs
        `
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Input label',
      table: { type: { summary: 'string' } }
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "''" } }
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Input type',
      table: { type: { summary: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'" }, defaultValue: { summary: "'text'" } }
    },
    value: {
      control: 'text',
      description: 'Input value',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: "''" } }
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    readonly: {
      control: 'boolean',
      description: 'Make input read-only',
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
      table: { type: { summary: 'string' }, defaultValue: { summary: "''" } }
    },
    iconLeft: {
      control: 'text',
      description: 'Left icon class',
      table: { type: { summary: 'string' } }
    },
    iconRight: {
      control: 'text',
      description: 'Right icon class',
      table: { type: { summary: 'string' } }
    },
    maxlength: {
      control: 'number',
      description: 'Maximum character length',
      table: { type: { summary: 'number' } }
    }
  }
};

const Template = ({ label, placeholder, type, value, disabled, readonly, required, error, errorMessage, iconLeft, iconRight, maxlength }) =>
  `<pn-input 
    ${label ? `label="${label}"` : ''}
    ${placeholder ? `placeholder="${placeholder}"` : ''}
    type="${type || 'text'}"
    ${value ? `value="${value}"` : ''}
    ${disabled ? 'disabled="true"' : ''}
    ${readonly ? 'readonly="true"' : ''}
    ${required ? 'required="true"' : ''}
    ${error ? 'error="true"' : ''}
    ${errorMessage ? `error-message="${errorMessage}"` : ''}
    ${iconLeft ? `icon-left="${iconLeft}"` : ''}
    ${iconRight ? `icon-right="${iconRight}"` : ''}
    ${maxlength ? `maxlength="${maxlength}"` : ''}
  ></pn-input>`;

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  placeholder: 'Enter your username',
  type: 'text'
};

export const Email = Template.bind({});
Email.args = {
  label: 'Email',
  placeholder: 'you@example.com',
  type: 'email',
  required: true,
  iconLeft: 'fas fa-envelope'
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  placeholder: 'Enter password',
  type: 'password',
  required: true,
  iconLeft: 'fas fa-lock'
};

export const Search = Template.bind({});
Search.args = {
  label: 'Search',
  placeholder: 'Search...',
  type: 'search',
  iconLeft: 'fas fa-search'
};

export const Number = Template.bind({});
Number.args = {
  label: 'Quantity',
  placeholder: '0',
  type: 'number',
  value: '1'
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  label: 'Website',
  placeholder: 'https://example.com',
  type: 'url',
  iconLeft: 'fas fa-globe',
  iconRight: 'fas fa-external-link-alt'
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Email',
  placeholder: 'you@example.com',
  type: 'email',
  value: 'invalid-email',
  error: true,
  errorMessage: 'Please enter a valid email address'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Input',
  placeholder: 'Cannot edit',
  disabled: true
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Read Only',
  value: 'This value is read-only',
  readonly: true
};

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  label: 'Short Bio',
  placeholder: 'Brief description...',
  maxlength: 100
};

export const AllTypes = () => `
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <pn-input label="Text" placeholder="Text input" type="text"></pn-input>
    <pn-input label="Email" placeholder="Email input" type="email" icon-left="fas fa-envelope"></pn-input>
    <pn-input label="Password" placeholder="Password input" type="password" icon-left="fas fa-lock"></pn-input>
    <pn-input label="Number" placeholder="Number input" type="number"></pn-input>
    <pn-input label="Tel" placeholder="Phone number" type="tel" icon-left="fas fa-phone"></pn-input>
    <pn-input label="URL" placeholder="https://..." type="url" icon-left="fas fa-globe"></pn-input>
    <pn-input label="Search" placeholder="Search..." type="search" icon-left="fas fa-search"></pn-input>
  </div>
`;
AllTypes.parameters = {
  docs: {
    description: {
      story: 'All input types displayed together.'
    }
  }
};
