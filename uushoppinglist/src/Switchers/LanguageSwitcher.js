import React from 'react';
import i18n from "i18next";

function LanguageSwitcher() {
  i18n.init()
  const changeLanguage = (language) => {


    i18n.changeLanguage(language)
      .then(() => {
        console.log(`Language changed to ${language}`);
      })
      .catch((error) => {
        console.error("Error changing language", error);
      });
  };

  return (
    <div style={{margin: "20px"}}>
      <button onClick={() => changeLanguage('en')} style={{ border: 'none', background: 'none', padding: 0, marginRight: "5px"}}>
        <img style={{ borderRadius: "10px" }} src="https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png" alt="Čeština" width="50" height="33"/>
      </button>
      <button onClick={() => changeLanguage('cs')} style={{ border: 'none', background: 'none', padding: 0}}>
        <img style={{ borderRadius: "10px" }} src="https://cdn.countryflags.com/thumbs/czech-republic/flag-400.png" alt="Čeština" width="50" height="auto"/>
      </button>
    </div>
  );
}

export default LanguageSwitcher;
