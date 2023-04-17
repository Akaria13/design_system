import{R as e}from"./index-f1f749bf.js";import{s as n}from"./styled-components.browser.esm-192005cd.js";import{I as y}from"./IconList-18846c32.js";import"./_commonjsHelpers-042e6b4d.js";const a=n.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Manrope";
  
  width: 40px;
  height: 40px;
  gap: 10px;
  height: 35px;
  background: #fdfdfe;
  border: 1px solid #c6cbd7;
  border-radius: 8px;
  text-align: center;
  ${o=>o.isError?`
      border: 1px solid #DC393C;
  :focus {
    background: #FDFDFE;
    border: 1px solid #DC393C;
    box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #FBC3B0;
    border-radius: 8px;
     outline: none;
  }
  `:o.isSuccess?`
         border: 1px solid #22A21F;
         :focus {background: #FDFDFE;
          border: 1px solid #22A21F;
          box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #BCF5A6;
          border-radius: 8px;
          outline: none;} `:`
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
`,E=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,w=n.span`
  font-style: normal;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0125em;
  color: #5a647c;
`,P=n.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-family: "Manrope";
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${o=>o.isError?"#BD2939":o.isSuccess?"#0F731E":" #383f4e"};
`,F=n.div`
  display: flex;
  aling-items: center;
  gap: 15px;
`,D=({label:o,helperText:c,isError:r,isSuccess:t})=>e.createElement(E,null,e.createElement(w,null,o),e.createElement(F,null,e.createElement(a,{type:"text",isError:r,isSuccess:t,maxLength:1}),e.createElement(a,{type:"text",isError:r,isSuccess:t,maxLength:1}),e.createElement(a,{type:"text",isError:r,isSuccess:t,maxLength:1}),e.createElement(a,{type:"text",isError:r,isSuccess:t,maxLength:1}),e.createElement(a,{type:"text",isError:r,isSuccess:t,maxLength:1}),e.createElement(a,{type:"text",isError:r,isSuccess:t,maxLength:1})),c&&e.createElement(P,{isError:r,isSuccess:t},e.createElement(y,{isError:r,isSuccess:t})," ",c)),T={title:"Components/Inputs/InputPin",component:D,tags:["autodocs"]},s={args:{label:"Enter your Password",helperText:"your basic information",isError:!1,isSuccess:!1}},p={args:{label:"Enter your Password",helperText:"fill Password",isError:!0,isSuccess:!1}},l={args:{label:"Enter your Password",helperText:"fill Password",isError:!1,isSuccess:!0}};var i,x,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Enter your Password",
    helperText: "your basic information",
    isError: false,
    isSuccess: false
  }
}`,...(d=(x=s.parameters)==null?void 0:x.docs)==null?void 0:d.source}}};var u,m,f;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Enter your Password",
    helperText: "fill Password",
    isError: true,
    isSuccess: false
  }
}`,...(f=(m=p.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,b,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Enter your Password",
    helperText: "fill Password",
    isError: false,
    isSuccess: true
  }
}`,...(h=(b=l.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const k=["Default","Error","Success"];export{s as Default,p as Error,l as Success,k as __namedExportsOrder,T as default};
//# sourceMappingURL=InputPin.stories-5494b082.js.map
