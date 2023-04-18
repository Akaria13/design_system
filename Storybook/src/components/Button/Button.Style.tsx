import styled from "styled-components";

export const DappsButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 12px;
  width: 120px;
  height: 40px;
  background: #051a5f;
  border-radius: 8px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0125em;
  border: 1px solid #051a5f;
  color: #fdfdfe;
  :hover {
    cursor: pointer;
    background: #0d378f;
  }
  :active {
    box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #a3d0f9;
  }
  :disabled {
    background: #c6cbd7;
    border: unset;
    :active {
      box-shadow: unset;
    }
    :hover {
      cursor: not-allowed;
    }
  }
`;
export const SecondaryButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 12px;
  font-family: "Manrope";
  gap: 4px;
  width: 120px;
  height: 40px;
  background: #fdfdfe;
  border: 1px solid #c6cbd7;
  border-radius: 8px;
  font-family: "Manrope";
  :hover {
    cursor: pointer;
    background: #e2e5eb;
  }
  :active {
    box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #a3d0f9;
  }
  :disabled {
    background: #c6cbd7;
    border: unset;
    :active {
      box-shadow: unset;
    }
    :hover {
      cursor: not-allowed;
    }
  }
`;
export const TertiaryButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 12px;
  gap: 4px;
  font-family: "Manrope";
  /* Light Mode/Interaction/Secondary-Base */
  width: 120px;
  height: 40px;
  background: #fdfdfe;
  border-radius: 8px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  width: 120px;
  height: 40px;
  letter-spacing: 0.0125em;

  /* Light Mode/Text/Interaction-Secondary */
  border: unset;
  color: #051a5f;
  :hover {
    cursor: pointer;
    background: #e2e5eb;
  }
  :active {
    box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #a3d0f9;
  }
  :disabled {
    background: #c6cbd7;
    border: unset;
    :active {
      box-shadow: unset;
    }
    :hover {
      cursor: not-allowed;
    }
  }
`;

// icon buttons
export const DappsIconButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  width: 40px;
height: 40px;
  background: #051a5f;
  border-radius: 8px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0125em;
  border: 1px solid #051a5f;
  color: #fdfdfe;
  :hover {
    cursor: pointer;
    background: #0d378f;
  }
  :active {
    box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #a3d0f9;
  }
  :disabled {
    background: #c6cbd7;
    border: unset;
    :active {
      box-shadow: unset;
    }
    :hover {
      cursor: not-allowed;
    }
  }
`;
export const SecondaryIconButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: "Manrope";
  gap: 4px;
  width: 40px;
  height: 40px;
  background: #fdfdfe;
  border: 1px solid #c6cbd7;
  border-radius: 8px;
  font-family: "Manrope";
  :hover {
    cursor: pointer;
    background: #e2e5eb;
  }
  :active {
    box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #a3d0f9;
  }
  :disabled {
    background: #c6cbd7;
    border: unset;
    :active {
      box-shadow: unset;
    }
    :hover {
      cursor: not-allowed;
    }
  }
`;
export const TertiaryIconButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 4px;
  font-family: "Manrope";
  /* Light Mode/Interaction/Secondary-Base */
  width: 40px;
height: 40px;
  background: #fdfdfe;
  border-radius: 8px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  
  letter-spacing: 0.0125em;

  /* Light Mode/Text/Interaction-Secondary */
  border: unset;
  color: #051a5f;
  :hover {
    cursor: pointer;
    background: #e2e5eb;
  }
  :active {
    box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #a3d0f9;
  }
  :disabled {
    background: #c6cbd7;
    border: unset;
    :active {
      box-shadow: unset;
    }
    :hover {
      cursor: not-allowed;
    }
  }
`;

