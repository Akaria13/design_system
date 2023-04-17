import{R as r}from"./index-f1f749bf.js";import{s as n}from"./styled-components.browser.esm-192005cd.js";import{I as E}from"./IconList-18846c32.js";import"./_commonjsHelpers-042e6b4d.js";const h=n.textarea`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: "Manrope";
  width: 380px;
  gap: 10px;
  height: 40px;
  background: #fdfdfe;
  border: 1px solid #c6cbd7;
  border-radius: 8px;
  ${e=>e.isError?`
      border: 1px solid #DC393C;
  :focus {
    background: #FDFDFE;
    border: 1px solid #DC393C;
    box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #FBC3B0;
    border-radius: 8px;
     outline: none;
  }
  `:e.isSuccess?`
      background: #FDFDFE;
      border: 1px solid #22A21F;
      box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #BCF5A6;
       border-radius: 8px;
       outline: none;
      `:`
  :focus {
    border: 1px solid #1b60c7;
    box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #a3d0f9;
    border-radius: 8px;
    outline: none;
  }
  `}

  :hover {
    background: #e2e5eb;
    border: 1px solid #c6cbd7;
  }
`,y=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,S=n.span`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0125em;
  font-family: "Manrope";
  color: #5a647c;
`,F=n.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-family: "Manrope";
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${e=>e.isError?"#BD2939":e.isSuccess?"#0F731E":" #383f4e"};
`,T=({label:e,helperText:p,isError:t,isSuccess:l})=>r.createElement(y,null,r.createElement(S,null,e),r.createElement(h,{isError:t,isSuccess:l}),p&&r.createElement(F,{isError:t,isSuccess:l},r.createElement(E,{isError:t,isSuccess:l})," ",p)),k={title:"Components/Inputs/TextArea",component:T,tags:["autodocs"]},o={args:{label:"Enter your name",helperText:"your basic information",isError:!1,isSuccess:!1}},a={args:{label:"Enter your name",helperText:"fill name",isError:!0,isSuccess:!1}},s={args:{label:"Enter your name",helperText:"fill name",isError:!1,isSuccess:!0}};var c,i,x;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Enter your name",
    helperText: "your basic information",
    isError: false,
    isSuccess: false
  }
}`,...(x=(i=o.parameters)==null?void 0:i.docs)==null?void 0:x.source}}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Enter your name",
    helperText: "fill name",
    isError: true,
    isSuccess: false
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,b,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Enter your name",
    helperText: "fill name",
    isError: false,
    isSuccess: true
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const B=["Default","Error","Success"];export{o as Default,a as Error,s as Success,B as __namedExportsOrder,k as default};
//# sourceMappingURL=TextArea.stories-3d752d6c.js.map
