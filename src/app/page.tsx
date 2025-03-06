'use client';
import React from "react";
import Fetchuser from "./hooks/Fetchuser";
import Userinfobox from "./componentes/Userinfobox";

const App = () => {
  const { user, loading, error } = Fetchuser();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error TnT {error}</p>;

  return (
    <div>
      
      <p>Hi, My name is {user.name}</p>
      <p>{user.name}</p>

      <p>My email address is</p>
      <p>{user.email}</p>

      <p>My birthday is</p>
      <p>{user.birthday}</p>

      <p>My address is</p>
      <p>{user.address}</p>

      <p>My password is</p>
      <p>{user.password}</p>

      <Userinfobox/>

    </div>
  );
};

export default App;
