import Image from "next/image";
import { useState } from "react";

interface UserInfoProps {
  name: string;
  last: string;
  email: string;
  picture: string;
  birthday: string;
  phone: string;
  stNum:string;
  stName:string;
  password: string;
}

export default function Userinfobox({ name, last, email, picture, birthday, phone, stNum,stName,password }: UserInfoProps) {
  
  const [data, setData] = useState("name");

  const getDesc = () => {
    switch (data) {
      case "name":
        return "Hi, My name is";
      case "email":
        return "My email is";
      case "birthday":
        return "My birthday is";
      case "address":
        return "My address is";
      case "phone":
        return "My phone is";
      case "password":
        return "My password is";
      default:
        return "";
    }
  };

  const getData = () => {
    switch (data) {
      case "name":
        return `${name} ${last}`;
      case "email":
        return email;
      case "birthday":
        return birthday;
      case "address":
        return `${stNum} ${stName}`;
      case "phone":
        return phone;
      case "password":
        return password;
      default:
        return "";
    }
  };

  return (
    <main className="">
      <div className="flex flex-col justify-center items-center gap-4 relative w-170 h-96 bg-gray-300 rounded-xl shadow-lg p-4">
        <Image src={picture} alt="User" className="rounded-full w-25 h-25 mb-2" width={70}
      height={70}/>

        <h1 className="text-sm text-gray-700">{getDesc()}</h1>
        <h5 className="text-lg font-bold">{getData()}</h5>

        <div className="flex gap-8 items-center">
          
          <button className="text-white" onMouseEnter={() => setData("name")}> 
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
            </svg>
            Name
          </button>

          <button className="text-white" onMouseEnter={() => setData("email")}> 
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
            </svg>
            Email
          </button>

          <button className="text-white" onMouseEnter={() => setData("birthday")}> 
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"></path>
            </svg>
            Birthday
          </button>


          <button className="text-white" onMouseEnter={() => setData("address")}> 
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"></path>
            </svg>
            Address
          </button>

          <button className="text-white" onMouseEnter={() => setData("phone")}> 
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
            </svg>
            Phone
          </button>

          <button className="text-white" onMouseEnter={() => setData("password")}> 
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"></path>
          </svg>
            Password
          </button>

        </div>

      </div>
    </main>
  );
}