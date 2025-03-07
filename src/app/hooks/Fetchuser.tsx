'use client';

import { useState, useEffect } from "react";
import Userinfobox from "../componentes/Userinfobox";

export default function Fetchuser() {
  const[user, setUser]=useState(null);
  const[loading, setLoading]=useState(true);

  useEffect(()=>{
    fetch("https://randomuser.me/api/")
    .then(res=>res.json())
    .then(data=>{
      console.log(data);

      const userData={
        name: data.results[0].name.first,
        last: data.results[0].name.last,
        email: data.results[0].email,
        picture: data.results[0].picture.thumbnail,
        birthday: data.results[0].dob.date,
        stNum: data.results[0].location.street.number,
        stName: data.results[0].location.street.name,
        phone: data.results[0].phone,
        password: data.results[0].login.password,

      };


      setUser(userData);
      setLoading(false);
    });

  },[]);


  return(
    <main>
      {loading && <p>LOADING DATA...</p>}
      {user && <Userinfobox {...user} />}
    </main>

  )
  

  
}
