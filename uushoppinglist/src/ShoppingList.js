import React, { useState } from "react";
import { useParams } from "react-router-dom";

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

  const [userName, setUserName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleRemove = (index) => {
    const newItems = [...shoppingList.Items];
    newItems.splice(index, 1);
    setShoppingList({
      ...shoppingList,
      Items: newItems,
    });
  };


  const handleRemoveMember = (index) => {
    const newMembers = [...shoppingList.Members];
    newMembers.splice(index, 1);
    setShoppingList({
      ...shoppingList,
      Members: newMembers,
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

  const handleMarkItemAsDone = (index) => {
    const newItems = shoppingList.Items.map((item, i) => {
      if (i === index) {
        console.log("item done:" + item.name)
        return { ...item, isCompleted: true };

      }

      return item;
    });
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
      Archived: false,
    });
    console.log(shoppingList);
  };

  const addUser = (userName) => {
    const newMembers = [...shoppingList.Members, { name: userName }];
    setShoppingList({
      ...shoppingList,
      Members: newMembers,
    });
    console.log(shoppingList.Members);
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
                <button style={{marginRight: '10px'}} className="btn btn-success" onClick={() => handleMarkItemAsDone(index)}>
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
          <button
            type="button"
            className="btn btn-success"
            onClick={handleMarkAsDone}
            style={{marginLeft: '10px'}}
          >
            Označit jako hotové
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleArchive}
            style={{marginLeft: '10px'}}
          >
            Archivovat
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDeleteList}
            style={{marginLeft: '10px'}}
          >
            Smazat položky
          </button>
        </div>



    </div>

      </div>


  );
};

export default ShoppingList;
