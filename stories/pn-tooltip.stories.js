import '@parthi033/ui-foundation/dist/components/pn-tooltip';
import '@parthi033/ui-foundation/dist/components/pn-button';

export default {
  title: 'UI Foundation/pn-tooltip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A tooltip component that displays contextual information on hover.

## Usage

\`\`\`html
<pn-tooltip text="Helpful tip" position="top">
  <pn-button label="Hover me"></pn-button>
</pn-tooltip>
\`\`\`

## Features

- Four positions: top, bottom, left, right
- Configurable show delay
- Wraps any element via slot
        `
      }
    }
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Tooltip text content',
      table: { type: { summary: 'string' } }
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Tooltip position',
      table: { type: { summary: "'top' | 'bottom' | 'left' | 'right'" }, defaultValue: { summary: "'top'" } }
    },
    delay: {
      control: 'number',
      description: 'Delay before showing tooltip (ms)',
      table: { type: { summary: 'number' }, defaultValue: { summary: '200' } }
    }
  }
};

const Template = ({ text, position, delay }) =>
  `<div style="padding: 60px; display: flex; justify-content: center;">
    <pn-tooltip 
      text="${text || 'Tooltip text'}"
      position="${position || 'top'}"
      ${delay !== undefined ? `delay="${delay}"` : ''}
    >
      <pn-button label="Hover me" type="primary"></pn-button>
    </pn-tooltip>
  </div>`;

export const Top = Template.bind({});
Top.args = {
  text: 'Tooltip on top',
  position: 'top'
};

export const Bottom = Template.bind({});
Bottom.args = {
  text: 'Tooltip on bottom',
  position: 'bottom'
};

export const Left = Template.bind({});
Left.args = {
  text: 'Tooltip on left',
  position: 'left'
};

export const Right = Template.bind({});
Right.args = {
  text: 'Tooltip on right',
  position: 'right'
};

export const NoDelay = Template.bind({});
NoDelay.args = {
  text: 'Instant tooltip',
  position: 'top',
  delay: 0
};
NoDelay.parameters = {
  docs: {
    description: {
      story: 'Tooltip with no delay — appears immediately on hover.'
    }
  }
};

export const LongDelay = Template.bind({});
LongDelay.args = {
  text: 'Delayed tooltip',
  position: 'top',
  delay: 1000
};

export const AllPositions = () => `
  <div style="display: flex; gap: 40px; padding: 80px; justify-content: center; flex-wrap: wrap;">
    <pn-tooltip text="Top tooltip" position="top">
      <pn-button label="Top" type="secondary"></pn-button>
    </pn-tooltip>
    <pn-tooltip text="Bottom tooltip" position="bottom">
      <pn-button label="Bottom" type="secondary"></pn-button>
    </pn-tooltip>
    <pn-tooltip text="Left tooltip" position="left">
      <pn-button label="Left" type="secondary"></pn-button>
    </pn-tooltip>
    <pn-tooltip text="Right tooltip" position="right">
      <pn-button label="Right" type="secondary"></pn-button>
    </pn-tooltip>
  </div>
`;
AllPositions.parameters = {
  docs: {
    description: {
      story: 'All tooltip positions displayed together. Hover over each button to see the tooltip.'
    }
  }
};

export const WithIconButton = () => `
  <div style="padding: 60px; display: flex; gap: 16px; justify-content: center;">
    <pn-tooltip text="Save document" position="bottom">
      <pn-button type="primary" icon-left="fas fa-save" icon-only="true"></pn-button>
    </pn-tooltip>
    <pn-tooltip text="Delete item" position="bottom">
      <pn-button type="primary" icon-left="fas fa-trash" icon-only="true"></pn-button>
    </pn-tooltip>
    <pn-tooltip text="Edit content" position="bottom">
      <pn-button type="primary" icon-left="fas fa-edit" icon-only="true"></pn-button>
    </pn-tooltip>
  </div>
`;
WithIconButton.parameters = {
  docs: {
    description: {
      story: 'Tooltips on icon-only buttons to provide context.'
    }
  }
};
