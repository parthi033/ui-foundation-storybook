import '@parthi033/ui-foundation/dist/components/pn-avatar';

export default {
  title: 'UI Foundation/pn-avatar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
An avatar component for displaying user profile images or initials.

## Usage

\`\`\`html
<pn-avatar name="John Doe" size="medium" shape="circle"></pn-avatar>
\`\`\`

## Features

- Image or initials-based display
- Five size options (xsmall to xlarge)
- Circle or square shapes
- Online status indicator
- Optional border
        `
      }
    }
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Image URL for the avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    name: {
      control: 'text',
      description: 'Name used to generate initials when no image is provided',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    size: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      description: 'Size of the avatar',
      table: {
        type: { summary: "'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'" },
        defaultValue: { summary: "'medium'" }
      }
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square'],
      description: 'Shape of the avatar',
      table: {
        type: { summary: "'circle' | 'square'" },
        defaultValue: { summary: "'circle'" }
      }
    },
    status: {
      control: { type: 'select' },
      options: ['', 'online', 'offline', 'busy', 'away'],
      description: 'Online status indicator',
      table: {
        type: { summary: "'online' | 'offline' | 'busy' | 'away' | ''" },
        defaultValue: { summary: "''" }
      }
    },
    border: {
      control: 'boolean',
      description: 'Show border around the avatar',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  }
};

const Template = ({ src, alt, name, size, shape, status, border }) =>
  `<pn-avatar 
    ${src ? `src="${src}"` : ''}
    ${alt ? `alt="${alt}"` : ''}
    ${name ? `name="${name}"` : ''}
    size="${size || 'medium'}"
    shape="${shape || 'circle'}"
    ${status ? `status="${status}"` : ''}
    ${border ? 'border="true"' : ''}
  ></pn-avatar>`;

export const WithInitials = Template.bind({});
WithInitials.args = {
  name: 'John Doe',
  size: 'medium',
  shape: 'circle'
};
WithInitials.parameters = {
  docs: {
    description: {
      story: 'Avatar displaying initials generated from the name prop.'
    }
  }
};

export const WithImage = Template.bind({});
WithImage.args = {
  src: 'https://i.pravatar.cc/150?img=3',
  alt: 'User avatar',
  size: 'medium',
  shape: 'circle'
};
WithImage.parameters = {
  docs: {
    description: {
      story: 'Avatar with a profile image.'
    }
  }
};

export const Square = Template.bind({});
Square.args = {
  name: 'Jane Smith',
  size: 'medium',
  shape: 'square'
};
Square.parameters = {
  docs: {
    description: {
      story: 'Square-shaped avatar.'
    }
  }
};

export const WithStatus = Template.bind({});
WithStatus.args = {
  name: 'Alice Johnson',
  size: 'medium',
  status: 'online'
};
WithStatus.parameters = {
  docs: {
    description: {
      story: 'Avatar with online status indicator.'
    }
  }
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  name: 'Bob Wilson',
  size: 'medium',
  border: true
};
WithBorder.parameters = {
  docs: {
    description: {
      story: 'Avatar with a border.'
    }
  }
};

export const AllSizes = () => `
  <div style="display: flex; gap: 12px; align-items: center;">
    <pn-avatar name="XS" size="xsmall"></pn-avatar>
    <pn-avatar name="SM" size="small"></pn-avatar>
    <pn-avatar name="MD" size="medium"></pn-avatar>
    <pn-avatar name="LG" size="large"></pn-avatar>
    <pn-avatar name="XL" size="xlarge"></pn-avatar>
  </div>
`;
AllSizes.parameters = {
  docs: {
    description: {
      story: 'All avatar sizes displayed together for comparison.'
    }
  }
};

export const StatusVariants = () => `
  <div style="display: flex; gap: 16px; align-items: center;">
    <pn-avatar name="Online" size="large" status="online"></pn-avatar>
    <pn-avatar name="Offline" size="large" status="offline"></pn-avatar>
    <pn-avatar name="Busy" size="large" status="busy"></pn-avatar>
    <pn-avatar name="Away" size="large" status="away"></pn-avatar>
  </div>
`;
StatusVariants.parameters = {
  docs: {
    description: {
      story: 'All status variants displayed together.'
    }
  }
};
