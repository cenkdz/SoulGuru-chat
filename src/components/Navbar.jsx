import React from "react";
import { UserAuth } from "../context/AuthContext";


const Navbar = () => {
  const { currentUser, signOutWithGoogle } = UserAuth();

  const handleSignOut = async () => {
    try {
      await signOutWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar fixed z-10 bg-primary text-primary-content">
      <div className="containerWrap flex justify-between">
      
        <a className="btn btn-ghost normal-case text-xl"><img className="" src="../../img/soulIcon.svg" width="30" height="30"/>SoulGuru.ai</a>
        
        {currentUser ? <button onClick={handleSignOut}>Logout</button> : ""}
      </div>
    </div>
  );
};

export default Navbar;
