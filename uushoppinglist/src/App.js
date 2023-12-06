import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ShoppingList from './ShoppingList';
import { shoppingListData } from './ShoppingListsData';
import useLocalStorage from "use-local-storage";
import { Toggle } from "../src/Toggle";
import LanguageSwitcher from "./LanguageSwitcher";
import i18n from './I18nConfig';


function App() {
  const [shoppingLists, setShoppingLists] = useState(shoppingListData);
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

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
        <LanguageSwitcher />
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        <Routes>
          <Route
            path="/"
            element={



              <Home
                shoppingLists={shoppingLists}
                setShoppingLists={setShoppingLists}
                onDeleteList={onDeleteList}
              />
            }
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
