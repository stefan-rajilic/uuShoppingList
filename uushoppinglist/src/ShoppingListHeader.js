import React from 'react';
import { useTranslation } from 'react-i18next';


const ShoppingListHeader = ({ name }) => {
    return (
      <input
        type="text"
        defaultValue={name}
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          border: "1px solid grey",
          borderRadius: "100px",
          marginTop: "30px",
          outline: "none",
          backgroundColor: "transparent",
          textAlign: "center",
        }}
      />
    );
  };

  export default ShoppingListHeader;
