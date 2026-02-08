import '@parthi033/ui-foundation/dist/components/pn-breadcrumb';

export default {
  title: 'UI Foundation/pn-breadcrumb',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A breadcrumb navigation component for showing the current page location.

## Usage

\`\`\`html
<pn-breadcrumb items='[{"label":"Home","href":"/"},{"label":"Products","href":"/products"},{"label":"Details"}]'></pn-breadcrumb>
\`\`\`

## Features

- Customizable separator character
- Max items with collapse support
- Optional icons per item
- Accessible navigation
        `
      }
    }
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items with label, href, and optional icon',
      table: {
        type: { summary: 'BreadcrumbItem[]' },
        defaultValue: { summary: '[]' }
      }
    },
    separator: {
      control: 'text',
      description: 'Separator character between breadcrumb items',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'/' " }
      }
    },
    maxItems: {
      control: 'number',
      description: 'Maximum items to display before collapsing (0 = no limit)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    collapseLabel: {
      control: 'text',
      description: 'Text shown for collapsed items',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'...'" }
      }
    }
  }
};

const sampleItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Smartphones' }
];

const Template = (args) => {
  const el = document.createElement('pn-breadcrumb');
  el.items = args.items || sampleItems;
  if (args.separator) el.setAttribute('separator', args.separator);
  if (args.maxItems) el.setAttribute('max-items', args.maxItems);
  if (args.collapseLabel) el.setAttribute('collapse-label', args.collapseLabel);
  return el;
};

export const Default = Template.bind({});
Default.args = {
  items: sampleItems
};
Default.parameters = {
  docs: {
    description: {
      story: 'Default breadcrumb with slash separator.'
    }
  }
};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  items: sampleItems,
  separator: '>'
};
CustomSeparator.parameters = {
  docs: {
    description: {
      story: 'Breadcrumb with a custom separator character.'
    }
  }
};

export const WithMaxItems = Template.bind({});
WithMaxItems.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Category', href: '/category' },
    { label: 'Subcategory', href: '/category/sub' },
    { label: 'Products', href: '/category/sub/products' },
    { label: 'Item Details' }
  ],
  maxItems: 3
};
WithMaxItems.parameters = {
  docs: {
    description: {
      story: 'Breadcrumb with collapsed middle items when exceeding maxItems.'
    }
  }
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  items: [
    { label: 'Home', href: '/', icon: 'fas fa-home' },
    { label: 'Settings', href: '/settings', icon: 'fas fa-cog' },
    { label: 'Profile' }
  ]
};
WithIcons.parameters = {
  docs: {
    description: {
      story: 'Breadcrumb items with icons.'
    }
  }
};

export const Simple = Template.bind({});
Simple.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'About' }
  ]
};
Simple.parameters = {
  docs: {
    description: {
      story: 'Simple two-level breadcrumb.'
    }
  }
};
