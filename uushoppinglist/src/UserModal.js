import React, { useState } from 'react';

const UserModal = ({ show, onClose, addUser }) => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(userName);
    setUserName(''); // Reset input field after adding user
    onClose(); // Close modal after adding user
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Přidat uživatele</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                className="form-control" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
                placeholder="Jméno uživatele"
                required 
              />
              <button type="submit" className="btn btn-primary mt-2">Přidat</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
