import '@parthi033/ui-foundation/dist/components/pn-sidebar';

export default {
  title: 'UI Foundation/pn-sidebar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A sidebar navigation component with collapsible sections and nested items.

## Usage

\`\`\`html
<pn-sidebar header="Navigation" items='[{"id":"home","label":"Home","href":"/"}]'></pn-sidebar>
\`\`\`

## Features

- Nested sub-items
- Collapsible sidebar
- Active item highlighting
- Badge support on items
- Dividers and section headers
- Icons per item
- Configurable width
        `
      }
    }
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Sidebar navigation items',
      table: { type: { summary: 'SidebarItem[]' }, defaultValue: { summary: '[]' } }
    },
    activeItem: {
      control: 'text',
      description: 'ID of the currently active item',
      table: { type: { summary: 'string' }, defaultValue: { summary: "''" } }
    },
    collapsed: {
      control: 'boolean',
      description: 'Collapse the sidebar',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    header: {
      control: 'text',
      description: 'Sidebar header text',
      table: { type: { summary: 'string' } }
    },
    collapsible: {
      control: 'boolean',
      description: 'Allow sidebar to be collapsed',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } }
    },
    width: {
      control: 'text',
      description: 'Sidebar width in CSS units',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'260px'" } }
    }
  }
};

const sampleItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-home', href: '/dashboard' },
  { id: 'analytics', label: 'Analytics', icon: 'fas fa-chart-bar', href: '/analytics', badge: '3' },
  { id: 'users', label: 'Users', icon: 'fas fa-users', children: [
    { id: 'users-list', label: 'All Users', href: '/users' },
    { id: 'users-add', label: 'Add User', href: '/users/add' },
    { id: 'users-roles', label: 'Roles', href: '/users/roles' }
  ]},
  { id: 'divider-1', label: '', divider: true },
  { id: 'settings', label: 'Settings', icon: 'fas fa-cog', href: '/settings', section: 'Admin' },
  { id: 'help', label: 'Help & Support', icon: 'fas fa-question-circle', href: '/help' },
  { id: 'disabled-item', label: 'Coming Soon', icon: 'fas fa-lock', disabled: true }
];

const Template = (args) => {
  const container = document.createElement('div');
  container.style.height = '500px';
  container.style.border = '1px solid #e0e0e0';
  container.style.borderRadius = '8px';
  container.style.overflow = 'hidden';

  const el = document.createElement('pn-sidebar');
  el.items = args.items || sampleItems;
  if (args.activeItem) el.setAttribute('active-item', args.activeItem);
  if (args.collapsed) el.setAttribute('collapsed', 'true');
  if (args.header) el.setAttribute('header', args.header);
  if (args.collapsible === false) el.setAttribute('collapsible', 'false');
  if (args.width) el.setAttribute('width', args.width);

  container.appendChild(el);
  return container;
};

export const Default = Template.bind({});
Default.args = {
  header: 'My App',
  items: sampleItems,
  activeItem: 'dashboard'
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  header: 'My App',
  items: sampleItems,
  collapsed: true
};
Collapsed.parameters = {
  docs: {
    description: {
      story: 'Sidebar in collapsed state showing only icons.'
    }
  }
};

export const NotCollapsible = Template.bind({});
NotCollapsible.args = {
  header: 'My App',
  items: sampleItems,
  collapsible: false,
  activeItem: 'analytics'
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  header: 'Wide Sidebar',
  items: sampleItems,
  width: '320px'
};

export const SimpleMenu = Template.bind({});
SimpleMenu.args = {
  header: 'Menu',
  items: [
    { id: 'home', label: 'Home', icon: 'fas fa-home', href: '/' },
    { id: 'about', label: 'About', icon: 'fas fa-info-circle', href: '/about' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope', href: '/contact' }
  ],
  activeItem: 'home'
};
SimpleMenu.parameters = {
  docs: {
    description: {
      story: 'Simple sidebar with basic navigation items.'
    }
  }
};
