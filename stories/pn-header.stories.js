import '@parthi033/ui-foundation/dist/components/pn-header';

export default {
  title: 'UI Foundation/pn-header',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A responsive header/navigation component with multiple layout variants.

## Usage

\`\`\`html
<pn-header company="My App" variant="default"></pn-header>
\`\`\`

## Features

- Eight layout variants (default, centered, mega-menu, sticky, transparent, split, sidebar, command-palette)
- Navigation with dropdowns
- Action buttons
- Search functionality
- Utility links
- Logo support
        `
      }
    }
  },
  argTypes: {
    company: {
      control: 'text',
      description: 'Company/brand name',
      table: { type: { summary: 'string' } }
    },
    logo: {
      control: 'text',
      description: 'Logo image URL',
      table: { type: { summary: 'string' } }
    },
    logoAltText: {
      control: 'text',
      description: 'Alt text for the logo',
      table: { type: { summary: 'string' } }
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'centered', 'mega-menu', 'sticky', 'transparent', 'split', 'sidebar', 'command-palette'],
      description: 'Header layout variant',
      table: {
        type: { summary: "'default' | 'centered' | 'mega-menu' | 'sticky' | 'transparent' | 'split' | 'sidebar' | 'command-palette'" },
        defaultValue: { summary: "'default'" }
      }
    },
    showSearch: {
      control: 'boolean',
      description: 'Show search functionality',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    navigation: {
      control: 'object',
      description: 'Navigation items array',
      table: { type: { summary: 'NavigationItem[]' }, defaultValue: { summary: '[]' } }
    },
    actions: {
      control: 'object',
      description: 'Action buttons array',
      table: { type: { summary: 'ActionButton[]' }, defaultValue: { summary: '[]' } }
    }
  }
};

const sampleNavigation = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products', children: [
    { label: 'Software', href: '/products/software' },
    { label: 'Hardware', href: '/products/hardware' },
    { label: 'Services', href: '/products/services' }
  ]},
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

const sampleActions = [
  { label: 'Sign In', type: 'secondary', href: '/login' },
  { label: 'Get Started', type: 'primary', href: '/signup', rounded: true }
];

const Template = (args) => {
  const el = document.createElement('pn-header');
  if (args.company) el.setAttribute('company', args.company);
  if (args.logo) el.setAttribute('logo', args.logo);
  if (args.logoAltText) el.setAttribute('logo-alt-text', args.logoAltText);
  if (args.variant) el.setAttribute('variant', args.variant);
  if (args.showSearch) el.setAttribute('show-search', 'true');
  el.navigation = args.navigation || sampleNavigation;
  el.actions = args.actions || sampleActions;
  if (args.utilityLinks) el.utilityLinks = args.utilityLinks;
  return el;
};

export const Default = Template.bind({});
Default.args = {
  company: 'UI Foundation',
  variant: 'default',
  navigation: sampleNavigation,
  actions: sampleActions
};

export const Centered = Template.bind({});
Centered.args = {
  company: 'UI Foundation',
  variant: 'centered',
  navigation: sampleNavigation,
  actions: sampleActions
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  company: 'UI Foundation',
  variant: 'default',
  showSearch: true,
  navigation: sampleNavigation,
  actions: sampleActions
};

export const Sticky = Template.bind({});
Sticky.args = {
  company: 'UI Foundation',
  variant: 'sticky',
  navigation: sampleNavigation,
  actions: sampleActions
};
Sticky.parameters = {
  docs: {
    description: {
      story: 'Sticky header that remains fixed at the top during scroll.'
    }
  }
};

export const Transparent = Template.bind({});
Transparent.args = {
  company: 'UI Foundation',
  variant: 'transparent',
  navigation: sampleNavigation,
  actions: sampleActions
};

export const Split = Template.bind({});
Split.args = {
  company: 'UI Foundation',
  variant: 'split',
  navigation: sampleNavigation,
  actions: sampleActions
};

export const SimpleNav = Template.bind({});
SimpleNav.args = {
  company: 'Simple App',
  variant: 'default',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ],
  actions: [
    { label: 'Login', type: 'primary' }
  ]
};
SimpleNav.parameters = {
  docs: {
    description: {
      story: 'Simple header with minimal navigation and a single action.'
    }
  }
};
