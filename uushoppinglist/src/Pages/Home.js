import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewListModal from '../Components/NewListModal';
import { shoppingListData } from '../MockData/ShoppingListsData';
import useLocalStorage from "use-local-storage";
import { useTranslation } from 'react-i18next';


const Home = () => {
  const [shoppingLists, setShoppingLists] = useState([]);
  const [showArchived, setShowArchived] = useState(false);
  const [showCreateListModal, setShowCreateListModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [newListName, setNewListName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);


  const { t } = useTranslation();

  useEffect(() => {
    setIsLoading(true);
    // Simulace načítání dat ze serveru
    setTimeout(() => {
      // Přidání simulace potenciální chyby
      if (Math.random() > 0.8) { // 20% šance na chybu
        setError('Chyba při načítání dat');
        setIsLoading(false);
      } else {
        setShoppingLists(shoppingListData);
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  const onDeleteList = (listId) => {
    // Předpokládám, že mazání proběhlo úspěšně
    setTimeout(() => {
      try {
        // Předpokládejme, že se vytvoření seznamu podařilo
        setShoppingLists(shoppingLists.filter(list => list.id !== listId));
      } catch (err) {
        setError('Chyba při vytváření seznamu');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  const createNewList = (newList) => {
    newList.id = Date.now().toString();
    setShoppingLists([...shoppingLists, newList]);
    setShowCreateListModal(false);
  };

  const openCreateListModal = () => {
    setShowCreateListModal(true);
  };

  const closeCreateListModal = () => {
    setShowCreateListModal(false);
    setNewListName('');
  };

  const handleToggleArchived = () => setShowArchived(!showArchived);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredLists = showArchived ? shoppingLists : shoppingLists.filter(list => !list.Archived);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
    <div className="container mt-4 text-center" style={{ backgroundColor: "var(--background-color)", color:  "var(--primary-text-color)"}}>
      <h1 className="mb-4" style={{marginRight: "50px"}}>{t('dashboard')}</h1>
      <div className="row justify-content-center">
        <div className="col-md-12 mb-4">
          <button
            className={`btn btn-${showArchived ? 'secondary' : 'primary'} mb-2`}
            onClick={handleToggleArchived}
          >
            {showArchived ? t('show_archived') : t('show_all')}
          </button>

          {error && <div className="alert alert-danger">{error}</div>}
          {isSubmitting && <div className="text-center"><p>{t('loading')}</p></div>}

          <button style={{ marginLeft: '10px' }} className="btn btn-success mb-2 ml-2" onClick={openCreateListModal}>
            {t('create_new_list')}
          </button>
        </div>
        {filteredLists.map((list) => (
          <div key={list.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{list.Name}</h5>
                <Link style={{ marginRight: '10px', marginBottom: "10px" }} to={`/shoppinglist/${list.id}`} className="btn btn-primary">
                  {t('view_shopping_list')}
                </Link>
                <button
                  style={{ marginBottom: "10px" }}
                  className="btn btn-danger ml-2"
                  onClick={() => onDeleteList(list.id, list.Owner)}
                >
                  {t('delete')}
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
    </div>
  );
};

export default Home;
