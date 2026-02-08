import '@parthi033/ui-foundation/dist/components/pn-pagination';

export default {
  title: 'UI Foundation/pn-pagination',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A pagination component for navigating through pages of content.

## Usage

\`\`\`html
<pn-pagination current-page="1" total-pages="10"></pn-pagination>
\`\`\`

## Features

- First/last page buttons
- Previous/next navigation
- Configurable sibling count
- Compact mode
- Three sizes
        `
      }
    }
  },
  argTypes: {
    currentPage: {
      control: 'number',
      description: 'Current active page',
      table: { type: { summary: 'number' }, defaultValue: { summary: '1' } }
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages',
      table: { type: { summary: 'number' }, defaultValue: { summary: '1' } }
    },
    siblingCount: {
      control: 'number',
      description: 'Number of sibling pages shown on each side of the current page',
      table: { type: { summary: 'number' }, defaultValue: { summary: '1' } }
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Show first/last page buttons',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } }
    },
    showPrevNext: {
      control: 'boolean',
      description: 'Show previous/next buttons',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } }
    },
    compact: {
      control: 'boolean',
      description: 'Use compact pagination style',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Pagination size',
      table: { type: { summary: "'small' | 'medium' | 'large'" }, defaultValue: { summary: "'medium'" } }
    }
  }
};

const Template = ({ currentPage, totalPages, siblingCount, showFirstLast, showPrevNext, compact, size }) =>
  `<pn-pagination 
    current-page="${currentPage || 1}"
    total-pages="${totalPages || 10}"
    ${siblingCount !== undefined ? `sibling-count="${siblingCount}"` : ''}
    ${showFirstLast === false ? 'show-first-last="false"' : ''}
    ${showPrevNext === false ? 'show-prev-next="false"' : ''}
    ${compact ? 'compact="true"' : ''}
    size="${size || 'medium'}"
  ></pn-pagination>`;

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 10
};

export const MiddlePage = Template.bind({});
MiddlePage.args = {
  currentPage: 5,
  totalPages: 10
};
MiddlePage.parameters = {
  docs: {
    description: {
      story: 'Pagination with the current page in the middle, showing ellipsis.'
    }
  }
};

export const ManyPages = Template.bind({});
ManyPages.args = {
  currentPage: 25,
  totalPages: 100
};

export const Compact = Template.bind({});
Compact.args = {
  currentPage: 3,
  totalPages: 10,
  compact: true
};

export const Small = Template.bind({});
Small.args = {
  currentPage: 1,
  totalPages: 10,
  size: 'small'
};

export const Large = Template.bind({});
Large.args = {
  currentPage: 1,
  totalPages: 10,
  size: 'large'
};

export const NoFirstLast = Template.bind({});
NoFirstLast.args = {
  currentPage: 5,
  totalPages: 10,
  showFirstLast: false
};
NoFirstLast.parameters = {
  docs: {
    description: {
      story: 'Pagination without first/last page buttons.'
    }
  }
};

export const FewPages = Template.bind({});
FewPages.args = {
  currentPage: 1,
  totalPages: 3
};
FewPages.parameters = {
  docs: {
    description: {
      story: 'Pagination with only a few pages — no ellipsis needed.'
    }
  }
};

export const AllSizes = () => `
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <strong>Small:</strong>
      <pn-pagination current-page="3" total-pages="10" size="small"></pn-pagination>
    </div>
    <div>
      <strong>Medium:</strong>
      <pn-pagination current-page="3" total-pages="10" size="medium"></pn-pagination>
    </div>
    <div>
      <strong>Large:</strong>
      <pn-pagination current-page="3" total-pages="10" size="large"></pn-pagination>
    </div>
  </div>
`;
AllSizes.parameters = {
  docs: {
    description: {
      story: 'All pagination sizes compared.'
    }
  }
};
