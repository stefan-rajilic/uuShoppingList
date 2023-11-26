import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
const UserModal = ({ show, onClose, addUser }) => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(userName);
    onClose();
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
              />
              <button type="submit" className="btn btn-primary mt-2">Přidat</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShoppingList = ({ shoppingLists }) => {
  const { id } = useParams();
  const selectedList = shoppingLists.find((list) => list.id === id);

  const [shoppingList, setShoppingList] = useState(selectedList || {
    id: "",
    Name: "",
    Owner: "",
    Members: [],
    Items: [],
    Archived: false,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const [userName, setUserName] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Simulace načítání seznamu nákupů
    setTimeout(() => {
      const selectedList = shoppingLists.find((list) => list.id === id);
      if (selectedList) {
        setShoppingList(selectedList);
      } else {
        setError('Seznam nenalezen');
      }
      setIsLoading(false);
    }, 1000);
  }, [id, shoppingLists]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleRemove = (index) => {
    try {
      setTimeout(() => {
        const newItems = [...shoppingList.Items];
        newItems.splice(index, 1);
        setShoppingList({
          ...shoppingList,
          Items: newItems,
        });
      }, 1000);
    } catch (error) {
      console.error('Chyba při mazání položky:', error);
    }
  };
  
  const handleRemoveMember = (index) => {
    try {
      setTimeout(() => {
        const newMembers = [...shoppingList.Members];
        newMembers.splice(index, 1);
        setShoppingList({
          ...shoppingList,
          Members: newMembers,
        });
      }, 1000);
    } catch (error) {
      console.error('Chyba při mazání člena:', error);
    }
  };
  
  const handleCreateList = () => {
    try {
      setTimeout(() => {
        console.log('Seznam vytvořen:', shoppingList);
      }, 1000);
    } catch (error) {
      console.error('Chyba při vytváření seznamu:', error);
    }
  };
  
  const handleAddItem = () => {
    try {
      setTimeout(() => {
        const newItems = [...shoppingList.Items, { name: "", quantity: 1 }];
        setShoppingList({
          ...shoppingList,
          Items: newItems,
        });
      }, 1000);
    } catch (error) {
      console.error('Chyba při přidávání položky:', error);
    }
  };
  
  const handleMarkItemAsDone = (index) => {
    try {
      setTimeout(() => {
        const newItems = shoppingList.Items.map((item, i) => {
          if (i === index) {
            return { ...item, isCompleted: true };
          }
          return item;
        });
        setShoppingList({
          ...shoppingList,
          Items: newItems,
        });
      }, 1000);
    } catch (error) {
      console.error('Chyba při označování položky jako hotové:', error);
    }
  };
  
  const handleArchive = () => {
    try {
      setTimeout(() => {
        setShoppingList({
          ...shoppingList,
          Archived: true,
        });
      }, 1000);
    } catch (error) {
      console.error('Chyba při archivování seznamu:', error);
    }
  };
  
  const handleMarkAsDone = () => {
    try {
      setTimeout(() => {
        setShoppingList({
          ...shoppingList,
          Done: true,
        });
      }, 1000);
    } catch (error) {
      console.error('Chyba při označování seznamu jako hotové:', error);
    }
  };
  
  const handleDeleteList = () => {
    try {
      setTimeout(() => {
        setShoppingList({
          id: "",
          Name: "",
          Owner: "",
          Members: [],
          Items: [],
          Archived: false,
        });
      }, 1000);
    } catch (error) {
      console.error('Chyba při mazání seznamu:', error);
    }
  };
  
  // Přidání nového uživatele
  const addUserToList = (newUserName) => {
    const newMembers = [...shoppingList.Members, { name: newUserName }];
    setShoppingList({
      ...shoppingList,
      Members: newMembers,
    });
    setShowModal(false);
  };

  
  return (
    <div className="shopping-list">
      <div className="text-center">
        <input
          type="text"
          defaultValue={shoppingList.Name}
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
        <div className="container mt-5">
          <div className="list-items">
            {shoppingList.Items.map((item, index) => (
              <div className="list-item mb-3 d-flex align-items-center" key={index}>
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
                  />)}
                <span style={{ marginRight: "10px" }} className="mr-2">
                  ks
                </span>
                <button style={{ marginRight: '10px' }} className="btn btn-success" onClick={() => handleMarkItemAsDone(index)}>
                  Hotovo
                </button>
                <button className="btn btn-danger" onClick={() => handleRemove(index)}>
                  Odebrat
                </button>
              </div>
            ))}
          </div>
          <button style={{ marginBottom: "10px" }} className="btn btn-primary mt-3" onClick={handleAddItem}>
            Přidat položku
          </button>
        </div>

        <div className="actions d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Přidat uživatele
          </button>
          <UserModal
        show={showModal}
        onClose={() => setShowModal(false)}
        addUser={addUserToList}
      />
          <button
            type="button"
            className="btn btn-success"
            onClick={handleMarkAsDone}
            style={{ marginLeft: '10px' }}
          >
            Označit jako hotové
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleArchive}
            style={{ marginLeft: '10px' }}
          >
            Archivovat
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDeleteList}
            style={{ marginLeft: '10px' }}
          >
            Smazat položky
          </button>
        </div>



      </div>

    </div>


  );
};

export default ShoppingList;
