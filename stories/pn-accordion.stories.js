import '@parthi033/ui-foundation/dist/components/pn-accordion';

export default {
  title: 'UI Foundation/pn-accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
An accordion component for expandable/collapsible content sections.

## Usage

\`\`\`html
<pn-accordion items='[{"id":"1","title":"Section 1","content":"Content 1"}]'></pn-accordion>
\`\`\`

## Features

- Single or multiple panels open at once
- Bordered and compact variants
- Disabled individual items
- Emits toggle events
        `
      }
    }
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of accordion items with id, title, content, and optional disabled flag',
      table: {
        type: { summary: 'AccordionItem[]' },
        defaultValue: { summary: '[]' }
      }
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple panels to be open simultaneously',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    bordered: {
      control: 'boolean',
      description: 'Show borders around accordion items',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    compact: {
      control: 'boolean',
      description: 'Use compact spacing',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  }
};

const sampleItems = [
  { id: '1', title: 'What is UI Foundation?', content: 'UI Foundation is a framework-agnostic web component library built with Stencil.' },
  { id: '2', title: 'How do I install it?', content: 'Run npm install @parthi033/ui-foundation to add it to your project.' },
  { id: '3', title: 'Browser Support', content: 'Supports all modern browsers including Chrome 54+, Firefox 63+, Safari 10.1+, and Edge 79+.' }
];

const Template = (args) => {
  const el = document.createElement('pn-accordion');
  el.items = args.items || sampleItems;
  if (args.multiple) el.setAttribute('multiple', 'true');
  if (args.bordered === false) el.setAttribute('bordered', 'false');
  if (args.compact) el.setAttribute('compact', 'true');
  return el;
};

export const Default = Template.bind({});
Default.args = {
  items: sampleItems,
  bordered: true
};
Default.parameters = {
  docs: {
    description: {
      story: 'Default accordion with bordered style. Only one panel can be open at a time.'
    }
  }
};

export const Multiple = Template.bind({});
Multiple.args = {
  items: sampleItems,
  multiple: true
};
Multiple.parameters = {
  docs: {
    description: {
      story: 'Accordion allowing multiple panels to be open simultaneously.'
    }
  }
};

export const NoBorder = Template.bind({});
NoBorder.args = {
  items: sampleItems,
  bordered: false
};
NoBorder.parameters = {
  docs: {
    description: {
      story: 'Accordion without borders for a cleaner look.'
    }
  }
};

export const Compact = Template.bind({});
Compact.args = {
  items: sampleItems,
  compact: true
};
Compact.parameters = {
  docs: {
    description: {
      story: 'Compact accordion with reduced spacing.'
    }
  }
};

export const WithDisabledItem = Template.bind({});
WithDisabledItem.args = {
  items: [
    { id: '1', title: 'Active Section', content: 'This section can be toggled.' },
    { id: '2', title: 'Disabled Section', content: 'This section is disabled.', disabled: true },
    { id: '3', title: 'Another Active Section', content: 'This section can also be toggled.' }
  ]
};
WithDisabledItem.parameters = {
  docs: {
    description: {
      story: 'Accordion with a disabled item that cannot be toggled.'
    }
  }
};
