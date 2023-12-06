import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShoppingList from './Pages/ShoppingList';
import { shoppingListData } from './MockData/ShoppingListsData';
import useLocalStorage from "use-local-storage";
import { LightModeSwitcher } from "./Switchers/LightModeSwitcher";
import LanguageSwitcher from "./Switchers/LanguageSwitcher";
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
        <LightModeSwitcher isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
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
