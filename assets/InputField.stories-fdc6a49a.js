import{R as e}from"./index-f1f749bf.js";import{I as w,P as C,E as H}from"./IconList-18846c32.js";import{s as t}from"./styled-components.browser.esm-192005cd.js";import"./_commonjsHelpers-042e6b4d.js";const v=t.input`
  display: flex;
  flex-direction: row;
  align-items: center;
 font-size:16px;
  width: 380px;
  font-style: normal;
  font-weight: 400; 
  letter-spacing: 0.01em;
  color: #0D0F13;
  gap: 10px;
  height: 40px;
  background: #fdfdfe;
  border: 1px solid #c6cbd7;
  font-family: "Manrope";
  border-radius: 8px;
  padding-left:${r=>r.startIcon?"42px;":"5px;"}
  ${r=>r.isError?`
      border: 1px solid #DC393C;
  :focus {
    background: #FDFDFE;
    border: 1px solid #DC393C;
    box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #FBC3B0;
    border-radius: 8px;
     outline: none;
  }
  `:r.isSuccess?`
      border: 1px solid #22A21F;
     :focus{
        background: #FDFDFE;
        border: 1px solid #22A21F;
        box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #BCF5A6;
         border-radius: 8px;
         outline: none;
     }
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
`,T=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 427px;
`,W=t.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.0125em;
  font-family: "Manrope";
  color: #5a647c;
`,k=t.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  font-family: "Manrope";
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${r=>r.isError?"#BD2939":r.isSuccess?"#0F731E":" #383f4e"};
`,B=t.div`
  position: absolute;
  /* top: 35px; */
  left: 8px;
  display: flex;
  align-items: center;
`,z=t.div`
  position: absolute;
  /* top: 35px; */
  right: 8px;
  display: flex;
  align-items: center;
`,A=t.div`
  position: relative;
  /* top: 0; */
  display: flex;
  align-items: center;
`,D=({label:r,helperText:i,isError:l,isSuccess:p,startIcon:c,endIcon:x})=>e.createElement(T,null,e.createElement(W,null,r),e.createElement(A,null,e.createElement(v,{type:"text",isError:l,isSuccess:p,startIcon:c}),c&&e.createElement(B,null,c),x&&e.createElement(z,null,x)),i&&e.createElement(k,{isError:l,isSuccess:p},e.createElement(w,{isError:l,isSuccess:p})," ",i)),_={title:"Components/Inputs/InputField",component:D,tags:["autodocs"]},n={args:{label:"Enter your name",helperText:"Hint text",isError:!1,isSuccess:!1}},o={args:{label:"Enter your name",helperText:"Hint text",isError:!0,isSuccess:!1}},s={args:{label:"Enter your name",helperText:"Hint text",isError:!1,isSuccess:!0}},a=()=>e.createElement(D,{label:"Enter user name",startIcon:e.createElement(C,null),endIcon:e.createElement(H,null)});var d,u,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Enter your name",
    helperText: "Hint text",
    isError: false,
    isSuccess: false
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,g,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Enter your name",
    helperText: "Hint text",
    isError: true,
    isSuccess: false
  }
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var E,h,y;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Enter your name",
    helperText: "Hint text",
    isError: false,
    isSuccess: true
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var I,F,S;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:'() => <InputField label="Enter user name" startIcon={<ProfileIcon />} endIcon={<EyeIcon />} />',...(S=(F=a.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const L=["Default","Error","Success","InputWithIcon"];export{n as Default,o as Error,a as InputWithIcon,s as Success,L as __namedExportsOrder,_ as default};
//# sourceMappingURL=InputField.stories-fdc6a49a.js.map
