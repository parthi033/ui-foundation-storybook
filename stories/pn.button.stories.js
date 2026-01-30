import '@parthi033/ui-foundation/dist/components/pn-button';

export default {
  title: 'components/pn-button',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'disabled']
    },
    label: { control: 'text' }
  }
};

const Template = ({ type, label }) =>
  `<pn-button type="${type}" label="${label}"></pn-button>`;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Primary Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Secondary Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'disabled',
  label: 'Disabled Button'
};