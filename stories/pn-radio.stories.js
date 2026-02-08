import '@parthi033/ui-foundation/dist/components/pn-radio';

export default {
  title: 'UI Foundation/pn-radio',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A radio button group component for selecting one option from a list.

## Usage

\`\`\`html
<pn-radio label="Choose a plan" name="plan" options='[{"label":"Free","value":"free"},{"label":"Pro","value":"pro"}]'></pn-radio>
\`\`\`

## Features

- Label and grouped options
- Inline or stacked layout
- Disabled individual options
- Error validation
- Change events
        `
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Group label',
      table: { type: { summary: 'string' } }
    },
    name: {
      control: 'text',
      description: 'Form field name',
      table: { type: { summary: 'string' } }
    },
    value: {
      control: 'text',
      description: 'Currently selected value',
      table: { type: { summary: 'string' }, defaultValue: { summary: "''" } }
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all options',
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
    inline: {
      control: 'boolean',
      description: 'Display options inline (horizontal)',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    options: {
      control: 'object',
      description: 'Array of radio options',
      table: { type: { summary: 'Array<{ label: string; value: string; disabled?: boolean }>' }, defaultValue: { summary: '[]' } }
    }
  }
};

const planOptions = [
  { label: 'Free', value: 'free' },
  { label: 'Basic - $9/mo', value: 'basic' },
  { label: 'Pro - $29/mo', value: 'pro' },
  { label: 'Enterprise - Custom', value: 'enterprise' }
];

const Template = (args) => {
  const el = document.createElement('pn-radio');
  el.options = args.options || planOptions;
  if (args.label) el.setAttribute('label', args.label);
  if (args.name) el.setAttribute('name', args.name);
  if (args.value) el.setAttribute('value', args.value);
  if (args.disabled) el.setAttribute('disabled', 'true');
  if (args.required) el.setAttribute('required', 'true');
  if (args.error) el.setAttribute('error', 'true');
  if (args.errorMessage) el.setAttribute('error-message', args.errorMessage);
  if (args.inline) el.setAttribute('inline', 'true');
  return el;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Choose a Plan',
  name: 'plan',
  options: planOptions
};

export const WithPreselected = Template.bind({});
WithPreselected.args = {
  label: 'Choose a Plan',
  name: 'plan',
  options: planOptions,
  value: 'pro'
};

export const Inline = Template.bind({});
Inline.args = {
  label: 'Size',
  name: 'size',
  options: [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' }
  ],
  inline: true
};
Inline.parameters = {
  docs: {
    description: {
      story: 'Radio buttons displayed horizontally.'
    }
  }
};

export const Required = Template.bind({});
Required.args = {
  label: 'Payment Method',
  name: 'payment',
  required: true,
  options: [
    { label: 'Credit Card', value: 'card' },
    { label: 'PayPal', value: 'paypal' },
    { label: 'Bank Transfer', value: 'bank' }
  ]
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Shipping Method',
  name: 'shipping',
  error: true,
  errorMessage: 'Please select a shipping method',
  options: [
    { label: 'Standard', value: 'standard' },
    { label: 'Express', value: 'express' },
    { label: 'Overnight', value: 'overnight' }
  ]
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Unavailable Options',
  name: 'unavailable',
  disabled: true,
  options: planOptions
};

export const WithDisabledOption = Template.bind({});
WithDisabledOption.args = {
  label: 'Choose a Plan',
  name: 'plan-disabled',
  options: [
    { label: 'Free', value: 'free' },
    { label: 'Basic - $9/mo', value: 'basic' },
    { label: 'Pro - $29/mo (Sold Out)', value: 'pro', disabled: true },
    { label: 'Enterprise', value: 'enterprise' }
  ]
};
WithDisabledOption.parameters = {
  docs: {
    description: {
      story: 'Radio group with one individually disabled option.'
    }
  }
};
