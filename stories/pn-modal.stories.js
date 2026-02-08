import '@parthi033/ui-foundation/dist/components/pn-modal';
import '@parthi033/ui-foundation/dist/components/pn-button';

export default {
  title: 'UI Foundation/pn-modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A modal dialog component for overlay content.

## Usage

\`\`\`html
<pn-modal modal-title="Confirm Action" size="medium" open="true">
  <p>Are you sure you want to proceed?</p>
</pn-modal>
\`\`\`

## Features

- Four sizes: small, medium, large, fullscreen
- Close on overlay click or Escape key
- Show/hide close button
- Programmatic open/close methods
- Open and close events
        `
      }
    }
  },
  argTypes: {
    modalTitle: {
      control: 'text',
      description: 'Modal title',
      table: { type: { summary: 'string' } }
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'fullscreen'],
      description: 'Modal size',
      table: { type: { summary: "'small' | 'medium' | 'large' | 'fullscreen'" }, defaultValue: { summary: "'medium'" } }
    },
    open: {
      control: 'boolean',
      description: 'Whether the modal is open',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } }
    },
    closeOnOverlay: {
      control: 'boolean',
      description: 'Close when clicking the overlay',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } }
    },
    closeOnEsc: {
      control: 'boolean',
      description: 'Close when pressing Escape',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } }
    },
    showClose: {
      control: 'boolean',
      description: 'Show close button',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } }
    }
  }
};

const openModal = (id) => `document.querySelector('#${id}').show()`;

const Template = ({ modalTitle, size, open, closeOnOverlay, closeOnEsc, showClose }) => `
  <pn-button label="Open Modal" type="primary" onclick="${openModal('demo-modal')}"></pn-button>
  <pn-modal 
    id="demo-modal"
    ${modalTitle ? `modal-title="${modalTitle}"` : ''}
    size="${size || 'medium'}"
    ${open ? 'open="true"' : ''}
    ${closeOnOverlay === false ? 'close-on-overlay="false"' : ''}
    ${closeOnEsc === false ? 'close-on-esc="false"' : ''}
    ${showClose === false ? 'show-close="false"' : ''}
  >
    <p>This is the modal content. You can place any HTML content inside the modal.</p>
    <p>Click the close button, press Escape, or click outside to close.</p>
  </pn-modal>
`;

export const Default = Template.bind({});
Default.args = {
  modalTitle: 'Default Modal',
  size: 'medium'
};
Default.parameters = {
  docs: {
    description: {
      story: 'Click the button to open a medium-sized modal.'
    }
  }
};

export const Small = Template.bind({});
Small.args = {
  modalTitle: 'Small Modal',
  size: 'small'
};

export const Large = Template.bind({});
Large.args = {
  modalTitle: 'Large Modal',
  size: 'large'
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  modalTitle: 'Fullscreen Modal',
  size: 'fullscreen'
};

export const NoCloseButton = Template.bind({});
NoCloseButton.args = {
  modalTitle: 'No Close Button',
  showClose: false
};
NoCloseButton.parameters = {
  docs: {
    description: {
      story: 'Modal without a close button — can still be closed via overlay click or Escape.'
    }
  }
};

export const PersistentModal = Template.bind({});
PersistentModal.args = {
  modalTitle: 'Persistent Modal',
  closeOnOverlay: false,
  closeOnEsc: false
};
PersistentModal.parameters = {
  docs: {
    description: {
      story: 'Modal that cannot be closed by clicking overlay or pressing Escape — only via the close button.'
    }
  }
};

export const ConfirmDialog = () => `
  <pn-button label="Delete Item" type="primary" onclick="${openModal('confirm-modal')}"></pn-button>
  <pn-modal id="confirm-modal" modal-title="Confirm Delete" size="small">
    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 16px;">
      <pn-button label="Cancel" type="secondary" onclick="document.querySelector('#confirm-modal').close()"></pn-button>
      <pn-button label="Delete" type="primary" onclick="document.querySelector('#confirm-modal').close()"></pn-button>
    </div>
  </pn-modal>
`;
ConfirmDialog.parameters = {
  docs: {
    description: {
      story: 'Confirmation dialog pattern with action buttons.'
    }
  }
};
