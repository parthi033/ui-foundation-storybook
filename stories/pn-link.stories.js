import '@parthi033/ui-foundation/dist/components/pn-link';

export default {
  title: 'UI Foundation/pn-link',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A link component for navigation with optional new tab support.

## Usage

\`\`\`html
<pn-link text="Visit website" href="https://example.com" new-tab="true"></pn-link>
\`\`\`

## Features

- Customizable link text
- Open in new tab option
- Accessible anchor element
        `
      }
    }
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Link text',
      table: { type: { summary: 'string' } }
    },
    href: {
      control: 'text',
      description: 'URL to navigate to',
      table: { type: { summary: 'string' } }
    },
    newTab: {
      control: 'boolean',
      description: 'Open link in a new tab',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    }
  }
};

const Template = ({ text, href, newTab }) =>
  `<pn-link 
    ${text ? `text="${text}"` : ''}
    ${href ? `href="${href}"` : ''}
    ${newTab ? 'new-tab="true"' : ''}
  ></pn-link>`;

export const Default = Template.bind({});
Default.args = {
  text: 'Click here',
  href: 'https://example.com'
};

export const NewTab = Template.bind({});
NewTab.args = {
  text: 'Open in new tab',
  href: 'https://example.com',
  newTab: true
};
NewTab.parameters = {
  docs: {
    description: {
      story: 'Link that opens in a new browser tab.'
    }
  }
};

export const InlineUsage = () => `
  <p>
    Check out our <pn-link text="documentation" href="https://example.com/docs"></pn-link> 
    for more information, or visit the 
    <pn-link text="GitHub repository" href="https://github.com" new-tab="true"></pn-link>.
  </p>
`;
InlineUsage.parameters = {
  docs: {
    description: {
      story: 'Links used inline within text content.'
    }
  }
};
