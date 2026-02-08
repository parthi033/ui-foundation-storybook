import '@parthi033/ui-foundation/dist/components/pn-card';

export default {
  title: 'UI Foundation/pn-card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A card component for displaying content in a contained format.

## Usage

\`\`\`html
<pn-card card-title="Card Title" subtitle="Subtitle" variant="default">
  <p>Card content goes here.</p>
</pn-card>
\`\`\`

## Features

- Three variants: default, outlined, elevated
- Optional image with alt text
- Hoverable and clickable states
- Compact mode
- Slot-based content
        `
      }
    }
  },
  argTypes: {
    cardTitle: {
      control: 'text',
      description: 'Card title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    subtitle: {
      control: 'text',
      description: 'Card subtitle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    image: {
      control: 'text',
      description: 'Image URL for the card header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    imageAlt: {
      control: 'text',
      description: 'Alt text for the card image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'elevated'],
      description: 'Card style variant',
      table: {
        type: { summary: "'default' | 'outlined' | 'elevated'" },
        defaultValue: { summary: "'default'" }
      }
    },
    hoverable: {
      control: 'boolean',
      description: 'Add hover effect',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    compact: {
      control: 'boolean',
      description: 'Use compact padding',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    clickable: {
      control: 'boolean',
      description: 'Make the entire card clickable',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    href: {
      control: 'text',
      description: 'URL to navigate to when card is clicked',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  }
};

const Template = ({ cardTitle, subtitle, image, imageAlt, variant, hoverable, compact, clickable, href }) =>
  `<pn-card 
    ${cardTitle ? `card-title="${cardTitle}"` : ''}
    ${subtitle ? `subtitle="${subtitle}"` : ''}
    ${image ? `image="${image}"` : ''}
    ${imageAlt ? `image-alt="${imageAlt}"` : ''}
    variant="${variant || 'default'}"
    ${hoverable ? 'hoverable="true"' : ''}
    ${compact ? 'compact="true"' : ''}
    ${clickable ? 'clickable="true"' : ''}
    ${href ? `href="${href}"` : ''}
  >
    <p>This is the card content. You can place any HTML content inside the card using the default slot.</p>
  </pn-card>`;

export const Default = Template.bind({});
Default.args = {
  cardTitle: 'Card Title',
  subtitle: 'Card subtitle text',
  variant: 'default'
};
Default.parameters = {
  docs: {
    description: {
      story: 'Default card with title and subtitle.'
    }
  }
};

export const Outlined = Template.bind({});
Outlined.args = {
  cardTitle: 'Outlined Card',
  subtitle: 'With border outline',
  variant: 'outlined'
};

export const Elevated = Template.bind({});
Elevated.args = {
  cardTitle: 'Elevated Card',
  subtitle: 'With shadow elevation',
  variant: 'elevated'
};

export const WithImage = Template.bind({});
WithImage.args = {
  cardTitle: 'Mountain View',
  subtitle: 'Beautiful landscape',
  image: 'https://picsum.photos/400/200',
  imageAlt: 'Mountain landscape',
  variant: 'default'
};
WithImage.parameters = {
  docs: {
    description: {
      story: 'Card with a header image.'
    }
  }
};

export const Hoverable = Template.bind({});
Hoverable.args = {
  cardTitle: 'Hover Me',
  subtitle: 'Interactive card',
  variant: 'elevated',
  hoverable: true
};

export const Compact = Template.bind({});
Compact.args = {
  cardTitle: 'Compact Card',
  subtitle: 'Less padding',
  variant: 'outlined',
  compact: true
};

export const Clickable = Template.bind({});
Clickable.args = {
  cardTitle: 'Clickable Card',
  subtitle: 'Click to navigate',
  variant: 'elevated',
  clickable: true,
  hoverable: true,
  href: '#'
};

export const AllVariants = () => `
  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
    <pn-card card-title="Default" subtitle="Default variant" variant="default" style="width: 280px;">
      <p>Default card content.</p>
    </pn-card>
    <pn-card card-title="Outlined" subtitle="Outlined variant" variant="outlined" style="width: 280px;">
      <p>Outlined card content.</p>
    </pn-card>
    <pn-card card-title="Elevated" subtitle="Elevated variant" variant="elevated" style="width: 280px;">
      <p>Elevated card content.</p>
    </pn-card>
  </div>
`;
AllVariants.parameters = {
  docs: {
    description: {
      story: 'All card variants displayed together.'
    }
  }
};
