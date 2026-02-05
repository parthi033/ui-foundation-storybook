import '@parthi033/ui-foundation/dist/components/pn-button';

export default {
  title: 'UI Foundation/pn-button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A versatile button component with icon support and multiple variations.

## Usage

\`\`\`html
<pn-button label="Click me" type="primary"></pn-button>
\`\`\`

## Features

- Multiple button types (primary, secondary, tertiary, transparent, disabled)
- Icon support (left, right, or icon-only)
- Rounded corners and shadow effects
- Works with any CSS icon library (Font Awesome, Heroicons, etc.)
- Framework-agnostic web component
        `
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Text displayed on the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'transparent', 'disabled'],
      description: 'Button style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    rounded: {
      control: 'boolean',
      description: 'Apply rounded corners',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    shadow: {
      control: 'boolean',
      description: 'Add shadow effect',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    iconLeft: {
      control: 'text',
      description: 'Icon class for left-side icon (e.g., "fas fa-save")',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    iconRight: {
      control: 'text',
      description: 'Icon class for right-side icon (e.g., "fas fa-arrow-right")',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    iconOnly: {
      control: 'boolean',
      description: 'Display only icon without text',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  }
};

const Template = ({ label, type, rounded, shadow, iconLeft, iconRight, iconOnly }) =>
  `<pn-button 
    label="${label || ''}"
    type="${type || 'primary'}"
    ${rounded ? 'rounded="true"' : ''}
    ${shadow ? 'shadow="true"' : ''}
    ${iconLeft ? `icon-left="${iconLeft}"` : ''}
    ${iconRight ? `icon-right="${iconRight}"` : ''}
    ${iconOnly ? 'icon-only="true"' : ''}
  ></pn-button>`;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  type: 'primary'
};
Primary.parameters = {
  docs: {
    description: {
      story: 'The primary button is used for main actions in your interface.'
    }
  },
  percy: {
    additionalSnapshots: [
      { suffix: ' – Dark', args: { theme: 'dark' } }
    ]
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  type: 'secondary'
};
Secondary.parameters = {
  docs: {
    description: {
      story: 'The secondary button is used for less important actions.'
    }
  },
  percy: {
    additionalSnapshots: [
      { suffix: ' – Dark', args: { theme: 'dark' } }
    ]
  }
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary Button',
  type: 'tertiary'
};
Tertiary.parameters = {
  docs: {
    description: {
      story: 'The tertiary button provides a subtle alternative for secondary actions.'
    }
  },
  percy: {
    additionalSnapshots: [
      { suffix: ' – Dark', args: { theme: 'dark' } }
    ]
  }
};

export const Transparent = Template.bind({});
Transparent.args = {
  label: 'Transparent Button',
  type: 'transparent'
};
Transparent.parameters = {
  docs: {
    description: {
      story: 'The transparent button works well over images or colored backgrounds.'
    }
  },
  percy: {
    additionalSnapshots: [
      { suffix: ' – Dark', args: { theme: 'dark' } }
    ]
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  type: 'disabled'
};
Disabled.parameters = {
  docs: {
    description: {
      story: 'The disabled button shows when an action is not available.'
    }
  },
  percy: {
    additionalSnapshots: [
      { suffix: ' – Dark', args: { theme: 'dark' } }
    ]
  }
};

// Icon variations
export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  label: 'Save Document',
  type: 'primary',
  iconLeft: 'fas fa-save'
};
WithIconLeft.parameters = {
  docs: {
    description: {
      story: 'Button with an icon on the left side. Requires Font Awesome or similar icon library.'
    }
  }
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  label: 'Continue',
  type: 'secondary',
  iconRight: 'fas fa-arrow-right'
};
WithIconRight.parameters = {
  docs: {
    description: {
      story: 'Button with an icon on the right side, commonly used for navigation.'
    }
  }
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  type: 'primary',
  iconLeft: 'fas fa-heart',
  iconOnly: true
};
IconOnly.parameters = {
  docs: {
    description: {
      story: 'Icon-only button for compact interfaces where space is limited.'
    }
  }
};

// Style variations
export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Rounded Button',
  type: 'primary',
  rounded: true
};
Rounded.parameters = {
  docs: {
    description: {
      story: 'Button with rounded corners for a softer appearance.'
    }
  }
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  label: 'Shadow Button',
  type: 'primary',
  shadow: true
};
WithShadow.parameters = {
  docs: {
    description: {
      story: 'Button with shadow effect for enhanced visual depth.'
    }
  }
};

export const Combined = Template.bind({});
Combined.args = {
  label: 'Enhanced Button',
  type: 'primary',
  rounded: true,
  shadow: true,
  iconLeft: 'fas fa-star'
};
Combined.parameters = {
  docs: {
    description: {
      story: 'Button combining multiple features: icon, rounded corners, and shadow.'
    }
  }
};

// Showcase all types
export const AllTypes = () => `
  <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
    <pn-button label="Primary" type="primary"></pn-button>
    <pn-button label="Secondary" type="secondary"></pn-button>
    <pn-button label="Tertiary" type="tertiary"></pn-button>
    <pn-button label="Transparent" type="transparent"></pn-button>
    <pn-button label="Disabled" type="disabled"></pn-button>
  </div>
`;
AllTypes.parameters = {
  docs: {
    description: {
      story: 'All button types displayed together for comparison.'
    }
  }
};

// Icon showcase
export const IconShowcase = () => `
  <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
    <pn-button label="Save" type="primary" icon-left="fas fa-save"></pn-button>
    <pn-button label="Continue" type="secondary" icon-right="fas fa-arrow-right"></pn-button>
    <pn-button type="primary" icon-left="fas fa-heart" icon-only="true"></pn-button>
    <pn-button type="secondary" icon-left="fas fa-download" icon-only="true"></pn-button>
  </div>
  
  <!-- Debug: Show Font Awesome icons directly -->
  <div style="margin-top: 20px; padding: 10px; background: #f5f5f5; border-radius: 4px;">
    <strong>Font Awesome Test:</strong>
    <i class="fas fa-save"></i> Save
    <i class="fas fa-heart"></i> Heart  
    <i class="fas fa-arrow-right"></i> Arrow
    <i class="fas fa-download"></i> Download
  </div>
`;
IconShowcase.parameters = {
  docs: {
    description: {
      story: 'Various icon configurations including left, right, and icon-only buttons. Includes Font Awesome test icons for debugging.'
    }
  }
};

// Style variations showcase
export const StyleVariations = () => `
  <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
    <pn-button label="Default" type="primary"></pn-button>
    <pn-button label="Rounded" type="primary" rounded="true"></pn-button>
    <pn-button label="Shadow" type="primary" shadow="true"></pn-button>
    <pn-button label="Combined" type="primary" rounded="true" shadow="true"></pn-button>
  </div>
`;
StyleVariations.parameters = {
  docs: {
    description: {
      story: 'Different style variations including rounded corners and shadow effects.'
    }
  }
};