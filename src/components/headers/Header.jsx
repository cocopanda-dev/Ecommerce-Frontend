import React from "react";
import ActionBar from "./ActionBar.jsx"
import MobileNavbar from "./MobileNavbar.jsx"
import NavBar from "./NavBar.jsx"
import PromoteBar from "./PromoteBar.jsx"

const Header = () => {

  return (
    <div className="header">
      <PromoteBar/>
      <ActionBar/>
      <MobileNavbar/>
      <NavBar/>
    </div>
  )
}
export default Header