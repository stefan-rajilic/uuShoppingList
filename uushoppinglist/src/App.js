import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ShoppingList from './ShoppingList';
import { shoppingListData } from './ShoppingListsData';

function App() {
  const [shoppingLists, setShoppingLists] = useState(shoppingListData);

  const onDeleteList = (id, owner) => {
    //if (owner === 'Aktuální uživatel') {
    if (true) {
      const updatedLists = shoppingLists.filter((list) => list.id !== id);
      setShoppingLists(updatedLists);
    } else {
      alert('Nemáte oprávnění smazat tento seznam.');
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home  shoppingLists={shoppingLists}
                           setShoppingLists={setShoppingLists} onDeleteList={onDeleteList} />}
          />
          <Route
            path="/shoppinglist/:id"
            element={<ShoppingList shoppingLists={shoppingLists} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
