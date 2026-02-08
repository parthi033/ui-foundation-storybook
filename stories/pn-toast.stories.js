import '@parthi033/ui-foundation/dist/components/pn-toast';
import '@parthi033/ui-foundation/dist/components/pn-button';

export default {
  title: 'UI Foundation/pn-toast',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A toast notification component for temporary feedback messages.

## Usage

\`\`\`js
const toaster = document.querySelector('pn-toast');
toaster.addToast({ message: 'Item saved!', type: 'success' });
\`\`\`

## Features

- Four types: success, error, warning, info
- Six position options
- Auto-dismiss with configurable duration
- Dismissible toasts
- Maximum toast limit
- Programmatic API (addToast, removeToast, clearAll)
        `
      }
    }
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'],
      description: 'Toast position on screen',
      table: {
        type: { summary: "'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'" },
        defaultValue: { summary: "'top-right'" }
      }
    },
    maxToasts: {
      control: 'number',
      description: 'Maximum number of toasts visible at once',
      table: { type: { summary: 'number' }, defaultValue: { summary: '5' } }
    }
  }
};

const addToast = (type) => `document.querySelector('#demo-toast').addToast({ message: '${type.charAt(0).toUpperCase() + type.slice(1)} toast notification!', type: '${type}', duration: 5000, dismissible: true })`;

export const Default = ({ position, maxToasts }) => `
  <pn-toast id="demo-toast" position="${position || 'top-right'}" ${maxToasts ? `max-toasts="${maxToasts}"` : ''}></pn-toast>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <pn-button label="Success Toast" type="primary" onclick="${addToast('success')}"></pn-button>
    <pn-button label="Error Toast" type="primary" onclick="${addToast('error')}"></pn-button>
    <pn-button label="Warning Toast" type="primary" onclick="${addToast('warning')}"></pn-button>
    <pn-button label="Info Toast" type="primary" onclick="${addToast('info')}"></pn-button>
    <pn-button label="Clear All" type="secondary" onclick="document.querySelector('#demo-toast').clearAll()"></pn-button>
  </div>
`;
Default.args = {
  position: 'top-right',
  maxToasts: 5
};
Default.parameters = {
  docs: {
    description: {
      story: 'Click the buttons to trigger toast notifications of different types.'
    }
  }
};

export const TopLeft = () => `
  <pn-toast id="toast-tl" position="top-left"></pn-toast>
  <pn-button label="Show Toast (Top Left)" type="primary" onclick="document.querySelector('#toast-tl').addToast({ message: 'Toast in top-left corner', type: 'info', duration: 3000 })"></pn-button>
`;

export const BottomCenter = () => `
  <pn-toast id="toast-bc" position="bottom-center"></pn-toast>
  <pn-button label="Show Toast (Bottom Center)" type="primary" onclick="document.querySelector('#toast-bc').addToast({ message: 'Toast at bottom-center', type: 'success', duration: 3000 })"></pn-button>
`;

export const NonDismissible = () => `
  <pn-toast id="toast-nd" position="top-right"></pn-toast>
  <pn-button label="Show Non-Dismissible Toast" type="primary" onclick="document.querySelector('#toast-nd').addToast({ message: 'This toast auto-dismisses after 3 seconds', type: 'warning', duration: 3000, dismissible: false })"></pn-button>
`;
NonDismissible.parameters = {
  docs: {
    description: {
      story: 'Toast without a dismiss button — automatically disappears after duration.'
    }
  }
};

export const LongDuration = () => `
  <pn-toast id="toast-long" position="top-right"></pn-toast>
  <pn-button label="Show Long Toast (10s)" type="primary" onclick="document.querySelector('#toast-long').addToast({ message: 'This toast stays for 10 seconds', type: 'info', duration: 10000, dismissible: true })"></pn-button>
`;
