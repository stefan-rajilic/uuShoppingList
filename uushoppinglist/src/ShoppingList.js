import React, { useState } from "react";

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState({
    id: "1",
    Name: "Rodinný nákup",
    Owner: "Marek Proche",
    Members: [
      { name: "Petr" },
      { name: "Filip" },
    ],
    Items: [
      { name: "Mléko", quantity: 2 },
      { name: "Chléb", quantity: 1 },
      { name: "Jablká", quantity: 5 },
      { name: "Cukr", quantity: 1 },
      { name: "Vajíčka", quantity: 12 },
    ],
    Archived: false,
    Done: false,
  });

  const handleRemove = (index) => {
    const newItems = [...shoppingList.Items];
    newItems.splice(index, 1);
    setShoppingList({
      ...shoppingList,
      Items: newItems,
    });
  };

  const handleRemoveMember = (index) => {
    const newItems = [...shoppingList.Members];
    newItems.splice(index, 1);
    setShoppingList({
      ...shoppingList,
      Members: newItems,
    });
  };

  const handleCreateList = () => {
    console.log(shoppingList)
  }

  const handleAddItem = () => {
    const newItems = [...shoppingList.Items, { name: "", quantity: 1 }];
    setShoppingList({
      ...shoppingList,
      Items: newItems,
    });
  };

  const handleArchive = () => {
    setShoppingList({
      ...shoppingList,
      Archived: true,
    });
    console.log(shoppingList.Archived);
  };

  const handleMarkAsDone = () => {
    setShoppingList({
        ...shoppingList,
        Done: true,
      });
      console.log(shoppingList.Done);
  };

  const handleDeleteList = () => {
    console.log("List deleted.");
    setShoppingList({
      id: "",
      Name: "",
      Owner: "",
      Members: [],
      Items: [],
      Archived: false
    });
    console.log(shoppingList);
};

const [userName, setUserName] = useState("");



  const addUser = (userName) => {
    const newMembers = [...shoppingList.Members, { name: userName}];
    setShoppingList({
      ...shoppingList,
      Members: newMembers,
    });
    console.log(shoppingList.Members)
  }

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="shopping-list">
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
              <input
                type="number"
                defaultValue={item.quantity}
                style={{ marginRight: "3px" }}
                className="form-control w-25 mr-2"
              />
              <span style={{ marginRight: "10px" }} className="mr-2">
                ks
              </span>
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

      
      <div className="actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          Přidat uživatele
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleMarkAsDone}
        >
          Označit jako hotové
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleArchive}
        >
          Archivovat
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDeleteList}
        >
          Smazat List
        </button>
        <button
          className="create-list btn"
          style={{ backgroundColor: "green", color: "white" }}
          onClick={handleCreateList}
        >
          Vytvořit seznam
        </button>
        {/* Modální okno pro přidání uživatele */}
        {showModal && (
          <div className="modal show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Přidat uživatele</h5>
                </div>
                <div className="modal-body">
  <input
    type="text"
    className="form-control"
    placeholder="Jméno uživatele"
    value={userName}
    onChange={(e) => setUserName(e.target.value)}
  />
  <div className="mt-3">
    {shoppingList.Members.map((member, index) => (
      <div className="d-flex align-items-center mb-2" key={index}>
        <span className="mr-3">{member.name}</span>
        <button className="btn btn-danger btn-sm" onClick={() => handleRemoveMember(index)}>
          Odebrat
        </button>
      </div>
    ))}
  </div>
                  {/* Můžete přidat další formulářové prvky podle potřeby */}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    
                    onClick={() => setShowModal(false)}
                  >
                    Zavřít
                  </button>
                  <button type="button" className="btn btn-primary" onClick={() => addUser(userName)}>
                    Přidat
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    
  );
};

export default ShoppingList;
