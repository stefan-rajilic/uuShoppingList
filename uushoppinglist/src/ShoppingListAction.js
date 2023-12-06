import React from 'react';
import {useTranslation} from "react-i18next";


const ShoppingListActions = ({ onAddItem, onShowModal, onMarkAsDone, onArchive, onDelete }) => {
  const { t } = useTranslation();

  return (
      <div style={{display: "flex", justifyContent: "Center", flexDirection: "column"}}>
        <div style={{display: "flex", justifyContent: "Center"}}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onAddItem}
            style={{ marginBottom: "10px" }}
          >
            {t('add_item')}
          </button>
        </div>


        <div className="actions d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onShowModal}
          >
            {t('mark_as_done')}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={onMarkAsDone}
            style={{ marginLeft: '10px' }}
          >
            {t('mark_as_done')}
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={onArchive}
            style={{ marginLeft: '10px' }}
          >
            {t('archive')}
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={onDelete}
            style={{ marginLeft: '10px' }}
          >
            {t('delete_items')}
          </button>

        </div>
      </div>
    );
  };

  export default ShoppingListActions;
