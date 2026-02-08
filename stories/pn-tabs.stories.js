import '@parthi033/ui-foundation/dist/components/pn-tabs';

export default {
  title: 'UI Foundation/pn-tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A tabs component for organizing content into switchable panels.

## Usage

\`\`\`html
<pn-tabs tabs='[{"id":"tab1","label":"Tab 1"},{"id":"tab2","label":"Tab 2"}]' active-tab="tab1"></pn-tabs>
\`\`\`

## Features

- Three variants: default, pills, underline
- Full-width mode
- Compact spacing
- Optional icons per tab
- Disabled tabs
- Tab change events
        `
      }
    }
  },
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Array of tab items',
      table: { type: { summary: 'TabItem[]' }, defaultValue: { summary: '[]' } }
    },
    activeTab: {
      control: 'text',
      description: 'ID of the active tab',
      table: { type: { summary: 'string' }, defaultValue: { summary: "''" } }
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'pills', 'underline'],
      description: 'Tab style variant',
      table: { type: { summary: "'default' | 'pills' | 'underline'" }, defaultValue: { summary: "'default'" } }
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretch tabs to full width',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    compact: {
      control: 'boolean',
      description: 'Use compact spacing',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    }
  }
};

const sampleTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'reviews', label: 'Reviews' }
];

const Template = (args) => {
  const el = document.createElement('pn-tabs');
  el.tabs = args.tabs || sampleTabs;
  if (args.activeTab) el.setAttribute('active-tab', args.activeTab);
  if (args.variant) el.setAttribute('variant', args.variant);
  if (args.fullWidth) el.setAttribute('full-width', 'true');
  if (args.compact) el.setAttribute('compact', 'true');
  return el;
};

export const Default = Template.bind({});
Default.args = {
  tabs: sampleTabs,
  activeTab: 'overview',
  variant: 'default'
};

export const Pills = Template.bind({});
Pills.args = {
  tabs: sampleTabs,
  activeTab: 'overview',
  variant: 'pills'
};

export const Underline = Template.bind({});
Underline.args = {
  tabs: sampleTabs,
  activeTab: 'overview',
  variant: 'underline'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  tabs: sampleTabs,
  activeTab: 'overview',
  fullWidth: true
};
FullWidth.parameters = {
  docs: {
    description: {
      story: 'Tabs stretched to fill the full width.'
    }
  }
};

export const Compact = Template.bind({});
Compact.args = {
  tabs: sampleTabs,
  activeTab: 'overview',
  compact: true
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  tabs: [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'profile', label: 'Profile', icon: 'fas fa-user' },
    { id: 'settings', label: 'Settings', icon: 'fas fa-cog' },
    { id: 'notifications', label: 'Notifications', icon: 'fas fa-bell' }
  ],
  activeTab: 'home'
};

export const WithDisabledTab = Template.bind({});
WithDisabledTab.args = {
  tabs: [
    { id: 'active1', label: 'Active Tab' },
    { id: 'active2', label: 'Another Tab' },
    { id: 'disabled', label: 'Disabled Tab', disabled: true },
    { id: 'active3', label: 'Last Tab' }
  ],
  activeTab: 'active1'
};
WithDisabledTab.parameters = {
  docs: {
    description: {
      story: 'Tab group with a disabled tab that cannot be selected.'
    }
  }
};

export const AllVariants = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '24px';

  const variants = ['default', 'pills', 'underline'];
  variants.forEach(variant => {
    const wrapper = document.createElement('div');
    const label = document.createElement('strong');
    label.textContent = variant.charAt(0).toUpperCase() + variant.slice(1) + ':';
    wrapper.appendChild(label);

    const tabs = document.createElement('pn-tabs');
    tabs.tabs = sampleTabs;
    tabs.setAttribute('active-tab', 'overview');
    tabs.setAttribute('variant', variant);
    wrapper.appendChild(tabs);
    container.appendChild(wrapper);
  });

  return container;
};
AllVariants.parameters = {
  docs: {
    description: {
      story: 'All tab variants displayed together for comparison.'
    }
  }
};
