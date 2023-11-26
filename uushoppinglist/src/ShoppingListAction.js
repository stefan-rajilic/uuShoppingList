import React from 'react';


const ShoppingListActions = ({ onAddItem, onShowModal, onMarkAsDone, onArchive, onDelete }) => {
    return (
      <div className="actions d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={onShowModal}
        >
          Přidat uživatele
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={onMarkAsDone}
          style={{ marginLeft: '10px' }}
        >
          Označit jako hotové
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={onArchive}
          style={{ marginLeft: '10px' }}
        >
          Archivovat
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={onDelete}
          style={{ marginLeft: '10px' }}
        >
          Smazat položky
        </button>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={onAddItem}
          style={{ marginBottom: "10px" }}
        >
          Přidat položku
        </button>
      </div>
    );
  };
  
  export default ShoppingListActions;
  