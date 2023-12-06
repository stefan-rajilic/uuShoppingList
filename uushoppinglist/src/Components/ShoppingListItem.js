import React from 'react';
import {useTranslation} from "react-i18next";

const ShoppingListItem = ({ item, onMarkAsDone, onRemove }) => {

  const { t } = useTranslation();

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
            {t('done')}
          </div>
        ) : (
          <input
            type="number"
            defaultValue={item.quantity}
            style={{ marginRight: "3px" }}
            className="form-control w-25 mr-2"
          />
        )}
        <span style={{ marginRight: "10px" }}>{t('pieces')}</span>
        <button style={{ marginRight: '10px' }} className="btn btn-success" onClick={onMarkAsDone}>
          {t('completed')}
        </button>
        <button className="btn btn-danger" onClick={onRemove}>
          {t('remove')}
        </button>
      </div>
    );
  };

  export default ShoppingListItem;
