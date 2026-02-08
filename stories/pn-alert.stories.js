import '@parthi033/ui-foundation/dist/components/pn-alert';

export default {
  title: 'UI Foundation/pn-alert',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
An alert component for displaying contextual feedback messages.

## Usage

\`\`\`html
<pn-alert type="success" alert-title="Success!">Operation completed.</pn-alert>
\`\`\`

## Features

- Four severity types: success, error, warning, info
- Optional title
- Dismissible alerts
- Optional icon display
        `
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
      description: 'Alert severity type',
      table: {
        type: { summary: "'success' | 'error' | 'warning' | 'info'" },
        defaultValue: { summary: "'info'" }
      }
    },
    alertTitle: {
      control: 'text',
      description: 'Optional title displayed at the top of the alert',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    dismissible: {
      control: 'boolean',
      description: 'Allow the alert to be dismissed',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    icon: {
      control: 'boolean',
      description: 'Show an icon in the alert',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    }
  }
};

const Template = ({ type, alertTitle, dismissible, icon, content }) =>
  `<pn-alert 
    type="${type || 'info'}"
    ${alertTitle ? `alert-title="${alertTitle}"` : ''}
    ${dismissible ? 'dismissible="true"' : ''}
    ${icon === false ? 'icon="false"' : ''}
  >${content || 'This is an alert message.'}</pn-alert>`;

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  alertTitle: 'Information',
  content: 'This is an informational alert with helpful details.'
};
Info.parameters = {
  docs: {
    description: {
      story: 'Informational alert for general messages.'
    }
  }
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  alertTitle: 'Success!',
  content: 'Your changes have been saved successfully.'
};
Success.parameters = {
  docs: {
    description: {
      story: 'Success alert indicating a completed operation.'
    }
  }
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  alertTitle: 'Warning',
  content: 'Please review your input before continuing.'
};
Warning.parameters = {
  docs: {
    description: {
      story: 'Warning alert for cautionary messages.'
    }
  }
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  alertTitle: 'Error',
  content: 'An error occurred while processing your request.'
};
Error.parameters = {
  docs: {
    description: {
      story: 'Error alert for failure messages.'
    }
  }
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  type: 'info',
  alertTitle: 'Dismissible Alert',
  dismissible: true,
  content: 'Click the close button to dismiss this alert.'
};
Dismissible.parameters = {
  docs: {
    description: {
      story: 'Alert with a dismiss button to close it.'
    }
  }
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  type: 'info',
  alertTitle: 'No Icon',
  icon: false,
  content: 'This alert has no icon displayed.'
};
NoIcon.parameters = {
  docs: {
    description: {
      story: 'Alert without an icon for a simpler appearance.'
    }
  }
};

export const AllTypes = () => `
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <pn-alert type="info" alert-title="Info">Informational message.</pn-alert>
    <pn-alert type="success" alert-title="Success">Operation completed successfully.</pn-alert>
    <pn-alert type="warning" alert-title="Warning">Proceed with caution.</pn-alert>
    <pn-alert type="error" alert-title="Error">Something went wrong.</pn-alert>
  </div>
`;
AllTypes.parameters = {
  docs: {
    description: {
      story: 'All alert types displayed together for comparison.'
    }
  }
};
