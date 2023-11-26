import React from 'react';

const ShoppingListItem = ({ item, onMarkAsDone, onRemove }) => {
    return (
      <div className="list-item mb-3 d-flex align-items-center">
        <input
          type="text"
          style={{ marginRight: "10px" }}
          defaultValue={item.name}
          className="form-control mr-2"
        />
  
        {item.isCompleted ? (
          <div style={{ backgroundColor: 'green', color: 'white', padding: '5px', borderRadius: '4px', minWidth: "227px" }}>
            HOTOVO
          </div>
        ) : (
          <input
            type="number"
            defaultValue={item.quantity}
            style={{ marginRight: "3px" }}
            className="form-control w-25 mr-2"
          />
        )}
        <span style={{ marginRight: "10px" }}>ks</span>
        <button style={{ marginRight: '10px' }} className="btn btn-success" onClick={onMarkAsDone}>
          Hotovo
        </button>
        <button className="btn btn-danger" onClick={onRemove}>
          Odebrat
        </button>
      </div>
    );
  };
  
  export default ShoppingListItem;
  