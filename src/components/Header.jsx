import React from "react";
import Navigation from "./Navigation";
import Search from "./Search";
import Tweet from "./Tweet";

function Header() {
  return(
    <div>
      <Navigation />
      <Search />
      <Tweet />      
    </div>
  );
}

export default Header
