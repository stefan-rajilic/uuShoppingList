import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import NewListModal from './NewListModal'; // Importujte komponentu NewListModal



const Home = ({ shoppingLists, onDeleteList, setShoppingLists }) => {
  const [showArchived, setShowArchived] = useState(false);
  const [showCreateListModal, setShowCreateListModal] = useState(false); // State pro otevření modálního okna
  const [newListName, setNewListName] = useState(''); // State pro název nového seznamu

  const handleToggleArchived = () => {
    setShowArchived(!showArchived);
  };

  const filteredLists = showArchived
    ? shoppingLists
    : shoppingLists.filter((list) => !list.Archived);

  // Funkce pro otevření modálního okna na vytvoření seznamu
  const openCreateListModal = () => {
    setShowCreateListModal(true);
  };

  const createNewList = (newList) => {
    setShoppingLists([...shoppingLists, { ...newList, id: Date.now().toString() }]);
    closeCreateListModal();
  };

  // Funkce pro zavření modálního okna na vytvoření seznamu
  const closeCreateListModal = () => {
    setShowCreateListModal(false);
    setNewListName(''); // Resetování názvu nového seznamu
  };

  return (
    <div className="container mt-4 text-center">
      <h1 className="mb-4">Dashboard</h1>
      <div className="row justify-content-center">
        <div className="col-md-12 mb-4">
          <button
            className={`btn btn-${showArchived ? 'secondary' : 'primary'} mb-2`}
            onClick={handleToggleArchived}
          >
            {showArchived ? 'Zobrazit ne-archivované' : 'Zobrazit všechny'}
          </button>

          <button style={{marginLeft: '10px'}} className="btn btn-success mb-2 ml-2" onClick={openCreateListModal}>
            Vytvořit nový seznam
          </button>
        </div>
        {filteredLists.map((list) => (
          <div key={list.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{list.Name}</h5>
                <Link  style={{marginBottom: '10px'}} to={`/shoppinglist/${list.id}`} className="btn btn-primary">
                  Zobrazit nákupní seznam
                </Link>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => onDeleteList(list.id, list.Owner)}
                >
                  Smazat
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <NewListModal
        showModal={showCreateListModal}
        onClose={closeCreateListModal}
        createNewList={(newList) => {
          createNewList(newList);
        }}
      />
    </div>
  );
};

export default Home;
