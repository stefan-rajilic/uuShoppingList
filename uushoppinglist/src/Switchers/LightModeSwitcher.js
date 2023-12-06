import "../Styles/LightModeSwitcher.css";
import React from 'react';

export const LightModeSwitcher = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Dark Mode</label>

    </div>
  );
};
