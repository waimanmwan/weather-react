import './Search.css';
import React from "react";

export default function Search() {
  return (
    <div>
      <form className="Search">
        <input className="searchBar" type="search" placeholder="Enter a City..." />
        <input className="searchButton" type="submit" value="SEARCH" />
        <input className="currentButton" type="submit" value="CURRENT" />
      </form>
    </div>);
}

