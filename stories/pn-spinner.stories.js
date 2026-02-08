import '@parthi033/ui-foundation/dist/components/pn-spinner';

export default {
  title: 'UI Foundation/pn-spinner',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A loading indicator component with multiple animation styles.

## Usage

\`\`\`html
<pn-spinner size="medium" type="spinner" label="Loading..."></pn-spinner>
\`\`\`

## Features

- Three animation types: spinner, dots, skeleton
- Three sizes: small, medium, large
- Custom color
- Overlay mode
- Skeleton loader with configurable dimensions
        `
      }
    }
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Spinner size',
      table: { type: { summary: "'small' | 'medium' | 'large'" }, defaultValue: { summary: "'medium'" } }
    },
    type: {
      control: { type: 'select' },
      options: ['spinner', 'dots', 'skeleton'],
      description: 'Loading indicator type',
      table: { type: { summary: "'spinner' | 'dots' | 'skeleton'" }, defaultValue: { summary: "'spinner'" } }
    },
    label: {
      control: 'text',
      description: 'Accessible label text',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Loading'" } }
    },
    color: {
      control: 'color',
      description: 'Custom spinner color',
      table: { type: { summary: 'string' } }
    },
    overlay: {
      control: 'boolean',
      description: 'Show with overlay background',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    skeletonWidth: {
      control: 'text',
      description: 'Width for skeleton type',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'100%'" } }
    },
    skeletonHeight: {
      control: 'text',
      description: 'Height for skeleton type',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'1rem'" } }
    },
    skeletonRadius: {
      control: 'text',
      description: 'Border radius for skeleton type',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'4px'" } }
    },
    skeletonLines: {
      control: 'number',
      description: 'Number of skeleton lines',
      table: { type: { summary: 'number' }, defaultValue: { summary: '1' } }
    }
  }
};

const Template = ({ size, type, label, color, overlay, skeletonWidth, skeletonHeight, skeletonRadius, skeletonLines }) =>
  `<pn-spinner 
    size="${size || 'medium'}"
    type="${type || 'spinner'}"
    ${label ? `label="${label}"` : ''}
    ${color ? `color="${color}"` : ''}
    ${overlay ? 'overlay="true"' : ''}
    ${skeletonWidth ? `skeleton-width="${skeletonWidth}"` : ''}
    ${skeletonHeight ? `skeleton-height="${skeletonHeight}"` : ''}
    ${skeletonRadius ? `skeleton-radius="${skeletonRadius}"` : ''}
    ${skeletonLines ? `skeleton-lines="${skeletonLines}"` : ''}
  ></pn-spinner>`;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  type: 'spinner'
};

export const Dots = Template.bind({});
Dots.args = {
  size: 'medium',
  type: 'dots'
};

export const Skeleton = Template.bind({});
Skeleton.args = {
  type: 'skeleton',
  skeletonWidth: '100%',
  skeletonHeight: '1rem',
  skeletonLines: 3
};
Skeleton.parameters = {
  docs: {
    description: {
      story: 'Skeleton loader for content placeholder.'
    }
  }
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  size: 'large',
  type: 'spinner',
  color: '#7009d1'
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  size: 'medium',
  type: 'spinner',
  label: 'Please wait...'
};

export const SkeletonCard = () => `
  <div style="max-width: 300px; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
    <pn-spinner type="skeleton" skeleton-width="100%" skeleton-height="150px" skeleton-radius="8px"></pn-spinner>
    <div style="margin-top: 12px;">
      <pn-spinner type="skeleton" skeleton-width="70%" skeleton-height="1.2rem" skeleton-radius="4px"></pn-spinner>
    </div>
    <div style="margin-top: 8px;">
      <pn-spinner type="skeleton" skeleton-width="100%" skeleton-height="0.9rem" skeleton-lines="3" skeleton-radius="4px"></pn-spinner>
    </div>
  </div>
`;
SkeletonCard.parameters = {
  docs: {
    description: {
      story: 'Skeleton loader simulating a card placeholder.'
    }
  }
};

export const AllSizes = () => `
  <div style="display: flex; gap: 24px; align-items: center;">
    <div style="text-align: center;">
      <pn-spinner size="small" type="spinner"></pn-spinner>
      <p>Small</p>
    </div>
    <div style="text-align: center;">
      <pn-spinner size="medium" type="spinner"></pn-spinner>
      <p>Medium</p>
    </div>
    <div style="text-align: center;">
      <pn-spinner size="large" type="spinner"></pn-spinner>
      <p>Large</p>
    </div>
  </div>
`;
AllSizes.parameters = {
  docs: {
    description: {
      story: 'All spinner sizes compared.'
    }
  }
};

export const AllTypes = () => `
  <div style="display: flex; gap: 40px; align-items: flex-start;">
    <div style="text-align: center;">
      <pn-spinner size="medium" type="spinner"></pn-spinner>
      <p>Spinner</p>
    </div>
    <div style="text-align: center;">
      <pn-spinner size="medium" type="dots"></pn-spinner>
      <p>Dots</p>
    </div>
    <div style="text-align: center; width: 200px;">
      <pn-spinner type="skeleton" skeleton-lines="3"></pn-spinner>
      <p>Skeleton</p>
    </div>
  </div>
`;
AllTypes.parameters = {
  docs: {
    description: {
      story: 'All loading indicator types compared.'
    }
  }
};
