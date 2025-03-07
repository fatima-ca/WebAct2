interface UserInfoProps {
  name: string;
  last: string;
  email: string;
  picture: string;
  birthday: string;
  stNum:string;
  stName:string;
  phone:string;
  password:string;

}

export default function Userinfobox({name, last, email, picture, birthday, stNum,stName, phone, password}:UserInfoProps) {
  return (
    <main className="">

        <div className="flex flex-col justify-center items-center gap-2 relative w-170 h-80 bg-gray-300 flex items-center justify-center rounded-xl shadow-lg">

          <div>
          <img src={picture} 
          alt="User" 
          className="rounded-full w-16 h-16 mb-2" />
          </div>

          <h4 className="text-lg font-bold">Hi, My name is</h4>
          <p className="text-sm text-gray-700">{name} {last}</p>
         

          <h4 className="text-lg font-bold">My email address is</h4>
          <p className="text-sm text-gray-700">{email}</p>

          <h4 className="text-lg font-bold">My birthday is</h4>
          <p className="text-sm text-gray-700">{birthday}</p>

          <h4 className="text-lg font-bold">My adress is</h4>
          <p className="text-sm text-gray-700">{stNum} {stName}</p>

          <h4 className="text-lg font-bold">My phone is</h4>
          <p className="text-sm text-gray-700">{phone}</p>

          <h4 className="text-lg font-bold">My password is</h4>
          <p className="text-sm text-gray-700">{password}</p>


          
        </div>
        
    </main>
  );
}