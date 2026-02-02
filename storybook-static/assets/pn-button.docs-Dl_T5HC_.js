import{j as n,M as r}from"./blocks-eh8LoiXR.js";import{useMDXComponents as t}from"./index-IVtJ16EL.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BZscOS2i.js";function s(i){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"UI Foundation/pn-button/Documentation"}),`
`,n.jsx(e.h1,{id:"pn-button-component",children:"pn-button Component"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"pn-button"})," is a versatile web component from the UI Foundation library that provides a consistent button interface across your application."]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"This component offers different button types to support various use cases in your UI:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Primary"}),": For main actions and calls-to-action"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Secondary"}),": For supporting actions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Disabled"}),": For unavailable actions"]}),`
`]}),`
`,n.jsx(e.h2,{id:"api-reference",children:"API Reference"}),`
`,n.jsx(e.h3,{id:"properties",children:"Properties"}),`
`,n.jsxs(e.p,{children:[`| Property | Type   | Default     | Description                                    |
|----------|--------|-------------|------------------------------------------------|
| `,n.jsx(e.code,{children:"type"}),"   | string | ",n.jsx(e.code,{children:'"primary"'}),` | The button style (primary, secondary, disabled) |
| `,n.jsx(e.code,{children:"label"}),"  | string | ",n.jsx(e.code,{children:'""'}),"        | The text content displayed on the button      |"]}),`
`,n.jsx(e.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,n.jsx(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<pn-button type="primary" label="Click me"></pn-button>
`})}),`
`,n.jsx(e.h3,{id:"different-types",children:"Different Types"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- Primary button for main actions -->
<pn-button type="primary" label="Save Changes"></pn-button>

<!-- Secondary button for supporting actions -->
<pn-button type="secondary" label="Cancel"></pn-button>

<!-- Disabled button for unavailable actions -->
<pn-button type="disabled" label="Processing..."></pn-button>
`})}),`
`,n.jsx(e.h2,{id:"button-types",children:"Button Types"}),`
`,n.jsx(e.h3,{id:"primary-button",children:"Primary Button"}),`
`,n.jsx(e.p,{children:"Primary buttons are used for the most important actions in your interface, such as:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Submit forms"}),`
`,n.jsx(e.li,{children:"Confirm actions"}),`
`,n.jsx(e.li,{children:"Primary navigation"}),`
`]}),`
`,n.jsx(e.h3,{id:"secondary-button",children:"Secondary Button"}),`
`,n.jsx(e.p,{children:"Secondary buttons are used for less critical actions:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Cancel operations"}),`
`,n.jsx(e.li,{children:"Secondary navigation"}),`
`,n.jsx(e.li,{children:"Alternative actions"}),`
`]}),`
`,n.jsx(e.h3,{id:"disabled-button",children:"Disabled Button"}),`
`,n.jsx(e.p,{children:"Disabled buttons indicate that an action is temporarily unavailable:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Form validation pending"}),`
`,n.jsx(e.li,{children:"Processing states"}),`
`,n.jsx(e.li,{children:"Insufficient permissions"}),`
`]}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsx(e.h3,{id:"dos-",children:"Do's ✅"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use primary buttons for the most important action on a page"}),`
`,n.jsx(e.li,{children:"Use secondary buttons for supporting actions"}),`
`,n.jsx(e.li,{children:"Keep button labels clear and concise"}),`
`,n.jsx(e.li,{children:"Use disabled state to prevent invalid actions"}),`
`]}),`
`,n.jsx(e.h3,{id:"donts-",children:"Don'ts ❌"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Don't use multiple primary buttons in the same context"}),`
`,n.jsx(e.li,{children:`Don't use vague labels like "Click here" or "Submit"`}),`
`,n.jsx(e.li,{children:"Don't rely solely on color to convey meaning"}),`
`,n.jsx(e.li,{children:"Don't make buttons too small for touch targets"}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"pn-button"})," component includes built-in accessibility features:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Keyboard navigation"}),": Supports focus and activation via keyboard"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Screen reader support"}),": Proper labeling and role attributes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Focus indicators"}),": Clear visual focus states"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Touch targets"}),": Adequate size for touch interaction"]}),`
`]}),`
`,n.jsx(e.h2,{id:"integration",children:"Integration"}),`
`,n.jsx(e.p,{children:"To use this component in your project:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Install the UI Foundation library"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @parthi033/ui-foundation
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Import the component"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import '@parthi033/ui-foundation/dist/components/pn-button';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Use in your HTML"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<pn-button type="primary" label="Get Started"></pn-button>
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"browser-support",children:"Browser Support"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"pn-button"})," component supports all modern browsers that support Custom Elements:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Chrome 54+"}),`
`,n.jsx(e.li,{children:"Firefox 63+"}),`
`,n.jsx(e.li,{children:"Safari 10.1+"}),`
`,n.jsx(e.li,{children:"Edge 79+"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.p,{children:n.jsxs(e.em,{children:["For more information about the UI Foundation library, visit the ",n.jsx(e.a,{href:"https://github.com/parthi033/ui-foundation",rel:"nofollow",children:"project repository"}),"."]})})]})}function h(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{h as default};
