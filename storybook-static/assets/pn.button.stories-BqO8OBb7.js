import"./iframe-BZscOS2i.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"UI Foundation/pn-button",tags:["autodocs"],parameters:{docs:{description:{component:`
The pn-button component is a custom web component from the UI Foundation library. 
It provides a consistent button interface with multiple types and states.

## Usage

\`\`\`html
<pn-button type="primary" label="Click me"></pn-button>
\`\`\`

## Properties

- **type**: Controls the button style (primary, secondary, disabled)
- **label**: The text displayed on the button
        `}}},argTypes:{type:{control:{type:"select"},options:["primary","secondary","disabled"],description:"The button type that determines its appearance",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},label:{control:"text",description:"The text content displayed on the button",table:{type:{summary:"string"},defaultValue:{summary:"Button"}}}}},r=({type:o,label:s})=>`<pn-button type="${o}" label="${s}"></pn-button>`,t=r.bind({});t.args={type:"primary",label:"Primary Button"};t.parameters={docs:{description:{story:"The primary button is used for main actions in your interface."}}};const e=r.bind({});e.args={type:"secondary",label:"Secondary Button"};e.parameters={docs:{description:{story:"The secondary button is used for less important actions."}}};const a=r.bind({});a.args={type:"disabled",label:"Disabled Button"};a.parameters={docs:{description:{story:"The disabled button shows when an action is not available."}}};const n=()=>`
  <div style="display: flex; gap: 16px; align-items: center;">
    <pn-button type="primary" label="Primary"></pn-button>
    <pn-button type="secondary" label="Secondary"></pn-button>
    <pn-button type="disabled" label="Disabled"></pn-button>
  </div>
`;n.parameters={docs:{description:{story:"All button variants displayed together for comparison."}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:'({\n  type,\n  label\n}) => `<pn-button type="${type}" label="${label}"></pn-button>`',...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:'({\n  type,\n  label\n}) => `<pn-button type="${type}" label="${label}"></pn-button>`',...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'({\n  type,\n  label\n}) => `<pn-button type="${type}" label="${label}"></pn-button>`',...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
  <div style="display: flex; gap: 16px; align-items: center;">
    <pn-button type="primary" label="Primary"></pn-button>
    <pn-button type="secondary" label="Secondary"></pn-button>
    <pn-button type="disabled" label="Disabled"></pn-button>
  </div>
\``,...n.parameters?.docs?.source}}};const d=["Primary","Secondary","Disabled","AllVariants"];export{n as AllVariants,a as Disabled,t as Primary,e as Secondary,d as __namedExportsOrder,i as default};
