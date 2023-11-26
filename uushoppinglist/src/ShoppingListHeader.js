import React from 'react';

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
  