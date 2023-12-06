import React, { useState } from 'react';
import {useTranslation} from "react-i18next";

const NewListModal = ({ showModal, onClose, createNewList }) => {
  const [listName, setListName] = useState('');
  const [items, setItems] = useState([{ name: '', quantity: 1 }]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { t } = useTranslation();

  const handleItemChange = (index, event) => {
    const newItems = items.map((item, i) =>
      i === index ? { ...item, [event.target.name]: event.target.value } : item
    );
    setItems(newItems);
  };

  const handleAddItem = () => {
    setItems([...items, { name: '', quantity: 1 }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    setTimeout(() => {
      try {
        createNewList({ id: Date.now().toString(), Name: listName, Items: items, Archived: false, Done: false });
        onClose();
        // Clearing the input fields
        setListName('');
        setItems([{ name: '', quantity: 1 }]);
      } catch (err) {
        setError('Chyba při vytváření seznamu');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  if (!showModal) {
    return null;
  }



  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{t('create_new_list')}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                {/* <label htmlFor="listName">{t('shopping_list_name')}</label> */}
                <input
                  type="text"
                  className="form-control"
                  style={{marginBottom: "20px"}}
                  placeholder={t('shopping_list_name')}
                  id="listName"
                  value={listName}
                  onChange={(e) => setListName(e.target.value)}
                />
              </div>
              {items.map((item, index) => (
                <div key={index} className="form-group">
                  <input
                    type="text"
                    className="form-control mb-2"
                    name="name"
                    placeholder={t('item_name') + " " + (index+1)}
                    value={item.name}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                  <input
                    type="number"
                    className="form-control"
                    name="quantity"
                    placeholder={t('amount')}
                    style={{marginBottom: "10px"}}
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                </div>

              ))}
              <button type="button" className="btn btn-primary" onClick={handleAddItem}>
                {t('add_item')}
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>{t('close')}</button>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>{t('save')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewListModal;
