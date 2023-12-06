import React, { useState } from 'react';

const NewListModal = ({ showModal, onClose, createNewList }) => {
  const [listName, setListName] = useState('');
  const [items, setItems] = useState([{ name: '', quantity: 1 }]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

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
            <h5 className="modal-title">Vytvořit nový seznam</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="listName">Název seznamu:</label>
                <input
                  type="text"
                  className="form-control"
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
                    placeholder="Název položky"
                    value={item.name}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                  <input
                    type="number"
                    className="form-control"
                    name="quantity"
                    placeholder="Množství"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                </div>

              ))}
              <button type="button" className="btn btn-primary" onClick={handleAddItem}>
                Přidat položku
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Zavřít</button>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Uložit seznam</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewListModal;
