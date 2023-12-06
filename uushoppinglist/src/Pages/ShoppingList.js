import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShoppingListHeader from '../Components/ShoppingListHeader';
import ShoppingListItem from '../Components/ShoppingListItem';
import ShoppingListActions from '../Components/ShoppingListAction';
import UserModal from '../Components/UserModal';
import "../Styles/Responsivity.css";
import {useTranslation} from "react-i18next";


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
    Done: false
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();


  useEffect(() => {
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
    return <div>{t('loading')}</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleRemove = (index) => {
    const newItems = [...shoppingList.Items];
    newItems.splice(index, 1);
    setShoppingList({ ...shoppingList, Items: newItems });
  };

  const handleRemoveMember = (index) => {
    const newMembers = [...shoppingList.Members];
    newMembers.splice(index, 1);
    setShoppingList({ ...shoppingList, Members: newMembers });
  };

  const handleAddItem = () => {
    const newItems = [...shoppingList.Items, { name: "", quantity: 1 }];
    setShoppingList({ ...shoppingList, Items: newItems });
  };

  const handleMarkItemAsDone = (index) => {
    const newItems = shoppingList.Items.map((item, i) => {
      return i === index ? { ...item, isCompleted: true } : item;
    });
    setShoppingList({ ...shoppingList, Items: newItems });
  };

  const handleArchive = () => {
    setShoppingList({ ...shoppingList, Archived: true });
  };

  const handleMarkAsDone = () => {
    setShoppingList({ ...shoppingList, Done: true });
  };

  const handleDeleteList = () => {
    setShoppingList({
      id: "",
      Name: "",
      Owner: "",
      Members: [],
      Items: [],
      Archived: false,
      Done: false
    });
  };

  const addUserToList = (userName) => {
    const newMembers = [...shoppingList.Members, { name: userName }];
    setShoppingList({ ...shoppingList, Members: newMembers });
  };

  return (
    <div className="shopping-list">
      <div className="text-center">
        <div className="shopping-list-header">
          <ShoppingListHeader name={shoppingList.Name} />
        </div>
        <div className="container mt-5">
          <div className="list-items">
            {shoppingList.Items.map((item, index) => (
              <ShoppingListItem
                key={index}
                item={item}
                onMarkAsDone={() => handleMarkItemAsDone(index)}
                onRemove={() => handleRemove(index)}
              />
            ))}
          </div>
        </div>
        <div className="actions">
          <ShoppingListActions
            onAddItem={handleAddItem}
            onShowModal={() => setShowModal(true)}
            onMarkAsDone={handleMarkAsDone}
            onArchive={handleArchive}
            onDelete={handleDeleteList}
          />
        </div>

        <UserModal
          show={showModal}
          onClose={() => setShowModal(false)}
          addUser={addUserToList}
        />
      </div>
    </div>
  );
};

export default ShoppingList;
