import{R as e}from"./index-f1f749bf.js";import{s as t}from"./styled-components.browser.esm-192005cd.js";import"./_commonjsHelpers-042e6b4d.js";const x=t.input.attrs({type:"checkbox"})`
  width: 20px;
  height: 20px;
  border: 1px solid #c6cbd7;
  border-radius: 4px;
  cursor: pointer;

  &:checked {
    background-color: #051a5f;
    opacity: 1;
  }

  &:hover {
    background: #e2e5eb;
    border: 1px solid #c6cbd7;
  }
`,d=t.div`
  display: flex;
  align-items: ${r=>r.isSubtext?"start":"center"};

  gap: 4px;
`,u=t.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #0d0f13;
`,b=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,m=t.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  letter-spacing: 0.01em;

  /* Light Mode/Text/Tertiary */

  color: #5a647c;
`,h=({label:r,isSubtext:n,subText:c,onChange:i,checked:p})=>(console.log(c,"boolean"),e.createElement(d,{isSubtext:n},e.createElement(x,{onChange:i,checked:p}),e.createElement(b,null,e.createElement(u,null,r),n?e.createElement(m,null,c):null))),y={title:"Components/Inputs/Checkbox",component:h,tags:["autodocs"]},o={args:{label:"Option",isSubtext:!0,subText:"Subtext",checked:!0}};var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: "Option",
    isSubtext: true,
    subText: "Subtext",
    checked: true
  }
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const S=["Subtext"];export{o as Subtext,S as __namedExportsOrder,y as default};
//# sourceMappingURL=Checkbox.stories-b9d7f921.js.map
