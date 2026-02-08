import '@parthi033/ui-foundation/dist/components/pn-form-field';
import '@parthi033/ui-foundation/dist/components/pn-input';

export default {
  title: 'UI Foundation/pn-form-field',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A form field wrapper component that provides label, hint, and error display for form controls.

## Usage

\`\`\`html
<pn-form-field label="Email" hint="Enter your work email" required="true">
  <pn-input type="email" placeholder="you@company.com"></pn-input>
</pn-form-field>
\`\`\`

## Features

- Label with required indicator
- Hint text
- Error state with message
- Inline layout option
- Works with any slotted form control
        `
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Field label',
      table: { type: { summary: 'string' } }
    },
    required: {
      control: 'boolean',
      description: 'Show required indicator',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    error: {
      control: 'boolean',
      description: 'Show error state',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
      table: { type: { summary: 'string' } }
    },
    hint: {
      control: 'text',
      description: 'Hint text below the field',
      table: { type: { summary: 'string' } }
    },
    inline: {
      control: 'boolean',
      description: 'Display label and field inline',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    }
  }
};

const Template = ({ label, required, error, errorMessage, hint, inline }) =>
  `<pn-form-field 
    ${label ? `label="${label}"` : ''}
    ${required ? 'required="true"' : ''}
    ${error ? 'error="true"' : ''}
    ${errorMessage ? `error-message="${errorMessage}"` : ''}
    ${hint ? `hint="${hint}"` : ''}
    ${inline ? 'inline="true"' : ''}
  >
    <pn-input placeholder="Enter value..."></pn-input>
  </pn-form-field>`;

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  hint: 'Choose a unique username'
};

export const Required = Template.bind({});
Required.args = {
  label: 'Email Address',
  required: true,
  hint: 'We will never share your email'
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Password',
  required: true,
  error: true,
  errorMessage: 'Password must be at least 8 characters'
};

export const Inline = Template.bind({});
Inline.args = {
  label: 'Search',
  inline: true
};
Inline.parameters = {
  docs: {
    description: {
      story: 'Form field with inline layout where label and input are side by side.'
    }
  }
};

export const FormExample = () => `
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <pn-form-field label="Full Name" required="true">
      <pn-input placeholder="John Doe"></pn-input>
    </pn-form-field>
    <pn-form-field label="Email" required="true" hint="We'll send a confirmation email">
      <pn-input type="email" placeholder="john@example.com"></pn-input>
    </pn-form-field>
    <pn-form-field label="Password" required="true" error="true" error-message="Password is too short">
      <pn-input type="password" placeholder="Enter password"></pn-input>
    </pn-form-field>
    <pn-form-field label="Bio" hint="Optional">
      <pn-input placeholder="Tell us about yourself"></pn-input>
    </pn-form-field>
  </div>
`;
FormExample.parameters = {
  docs: {
    description: {
      story: 'Complete form example using multiple form fields.'
    }
  }
};
