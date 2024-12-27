import Link from "next/link";
import { client } from "@/sanity/lib/client";


export default async function Home() {
  const url = await fetch('https://jsonplaceholder.typicode.com/users')
  const res = await url.json();
   console.log("Response is this :", res);
    
   const query = '*[ _type == "todo"]';
   const todo =  await client.fetch(query);
   console.log(todo);
   
  return(
    <main>
            <h2 className="text-green-500 flex justify-center items-center text-4xl mt-12">Fetch Json PlaceHolder API route</h2>
           <div className="w-full h-[610px] flex justify-center items-center px-2 sm:px-8 md:px-12 lg:px-28">
            <div className="h-[450px] w-[full]">
              <ul className="space-y-3">
               <li className="w-full h-16 flex justify-between items-center px-2 rounded bg-[#d5d555]"><span className="text-2xl font-semibold text-center">albums</span>{""}
               <Link href={"/albums"}>
               <span className="text-2xl cursor-pointer">see</span>
               </Link>
               </li>
               <li className="w-full h-16 flex justify-between items-center px-2 rounded bg-[#d5d555]"><span className="text-2xl font-semibold text-center">photos</span>{""}
               <Link href={"/photos"}>
               <span className="text-2xl cursor-pointer">see</span>
               </Link>
               </li>
               <li className="w-full h-16 flex justify-between items-center px-2 rounded bg-[#d5d555]"><span className="text-2xl font-semibold text-center">post</span>{""}
               <Link href={"/post"}>
               <span className="text-2xl cursor-pointer">see</span>
               </Link>
               </li>
               <li className="w-full h-16 flex justify-between items-center px-2 rounded bg-[#d5d555]"><span className="text-2xl font-semibold text-center">todos</span>{""}
               <Link href={"/todos"}>
               <span className="text-2xl cursor-pointer">see</span>
               </Link>
               </li>
               <li className="w-full h-16 flex justify-between items-center px-2 rounded bg-[#d5d555]"><span className="text-2xl font-semibold text-center">comments</span>{""}
               <Link href={"/comments"}>
               <span className="text-2xl cursor-pointer">see</span>
               </Link>
               </li>
               <li className="w-full h-16 flex justify-between items-center px-2 rounded bg-[#d5d555]"><span className="text-2xl font-semibold text-center">users</span>{""}
               <Link href={"/users"}>
               <span className="text-2xl cursor-pointer">see</span>
               </Link>
               </li>
              </ul>
            </div>
           </div>
    </main>
  );
}
