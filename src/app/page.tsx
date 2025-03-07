'use client';
import React from "react";
import Fetchuser from "./hooks/Fetchuser";

export default function Home() {

  return(
    <main className="flex flex-col justify-center items-center h-screen">
      <div>
        <Fetchuser/>
      </div>
    </main>
  )
  
}