import '@parthi033/ui-foundation/dist/components/pn-dropdown';

export default {
  title: 'UI Foundation/pn-dropdown',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A dropdown/select component with typeahead support.

## Usage

\`\`\`html
<pn-dropdown label="Country" placeholder="Select a country" options='[{"label":"USA","value":"us"}]'></pn-dropdown>
\`\`\`

## Features

- Typeahead/search filtering
- Grouped options
- Clearable selection
- Error validation
- Icon support
- Disabled options
        `
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Dropdown label',
      table: { type: { summary: 'string' } }
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Select an option'" } }
    },
    options: {
      control: 'object',
      description: 'Array of dropdown options',
      table: { type: { summary: 'DropdownOption[]' }, defaultValue: { summary: '[]' } }
    },
    value: {
      control: 'text',
      description: 'Currently selected value',
      table: { type: { summary: 'string' }, defaultValue: { summary: "''" } }
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the dropdown',
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
    typeahead: {
      control: 'boolean',
      description: 'Enable typeahead/search filtering',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    clearable: {
      control: 'boolean',
      description: 'Allow clearing the selection',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    iconLeft: {
      control: 'text',
      description: 'Icon class for left side',
      table: { type: { summary: 'string' } }
    }
  }
};

const countryOptions = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Japan', value: 'jp' },
  { label: 'India', value: 'in' }
];

const Template = (args) => {
  const el = document.createElement('pn-dropdown');
  el.options = args.options || countryOptions;
  if (args.label) el.setAttribute('label', args.label);
  if (args.placeholder) el.setAttribute('placeholder', args.placeholder);
  if (args.value) el.setAttribute('value', args.value);
  if (args.disabled) el.setAttribute('disabled', 'true');
  if (args.required) el.setAttribute('required', 'true');
  if (args.error) el.setAttribute('error', 'true');
  if (args.errorMessage) el.setAttribute('error-message', args.errorMessage);
  if (args.typeahead) el.setAttribute('typeahead', 'true');
  if (args.clearable) el.setAttribute('clearable', 'true');
  if (args.iconLeft) el.setAttribute('icon-left', args.iconLeft);
  return el;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Country',
  placeholder: 'Select a country',
  options: countryOptions
};

export const WithTypeahead = Template.bind({});
WithTypeahead.args = {
  label: 'Search Country',
  placeholder: 'Type to search...',
  options: countryOptions,
  typeahead: true
};
WithTypeahead.parameters = {
  docs: {
    description: {
      story: 'Dropdown with typeahead/search enabled for filtering options.'
    }
  }
};

export const Clearable = Template.bind({});
Clearable.args = {
  label: 'Country',
  options: countryOptions,
  value: 'us',
  clearable: true
};

export const WithPreselected = Template.bind({});
WithPreselected.args = {
  label: 'Country',
  options: countryOptions,
  value: 'uk'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Country',
  options: countryOptions,
  disabled: true
};

export const Required = Template.bind({});
Required.args = {
  label: 'Country',
  options: countryOptions,
  required: true
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Country',
  options: countryOptions,
  error: true,
  errorMessage: 'Please select a country'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Country',
  options: countryOptions,
  iconLeft: 'fas fa-globe'
};

export const WithDisabledOptions = Template.bind({});
WithDisabledOptions.args = {
  label: 'Status',
  options: [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
    { label: 'Archived (unavailable)', value: 'archived', disabled: true },
    { label: 'Deleted (unavailable)', value: 'deleted', disabled: true }
  ]
};
WithDisabledOptions.parameters = {
  docs: {
    description: {
      story: 'Dropdown with some options disabled.'
    }
  }
};

export const WithGroupedOptions = Template.bind({});
WithGroupedOptions.args = {
  label: 'Location',
  options: [
    { label: 'New York', value: 'ny', group: 'North America' },
    { label: 'Los Angeles', value: 'la', group: 'North America' },
    { label: 'London', value: 'london', group: 'Europe' },
    { label: 'Paris', value: 'paris', group: 'Europe' },
    { label: 'Tokyo', value: 'tokyo', group: 'Asia' },
    { label: 'Mumbai', value: 'mumbai', group: 'Asia' }
  ]
};
WithGroupedOptions.parameters = {
  docs: {
    description: {
      story: 'Dropdown with options organized into groups.'
    }
  }
};
