import React from 'react'
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import Image from "./Image";
import List from "./List";
import Flex from "./Flex";
import LIstItem from "./LIstItem";
const Navbar = () => {
    const [url,seturl] = useState("")
    const [menuItem,setmenuItem] = useState([]);
    const [menuIcon,setMenuIcon] = useState("");
 useEffect(()=>{
     async function menu(){
       const data = await axios.get("http://localhost:1337/api/menus?populate=*");
       seturl(data.data.data[1].attributes.logo.data.attributes.url)
         setmenuItem(data.data.data[1].attributes.Menu_Item)
         setMenuIcon(data.data.data[1].attributes.Menu_I.data[0].attributes.url)
     }
     menu()
 },[])
  return (
    <nav className="absolute top-0 left-0 w-full pt-12">
    <div className="max-w-container mx-auto"> 
     <div className="flex">
     <div className="w-3/12 w-44 h-12">
      <Image className="w-full h-full" imgsrc={`http://localhost:1337${url}`}/>
    </div>
    <div className="ml-auto">
    <List className='flex'>
      {menuItem.map((item)=>(
         <div className='relative group'>
             <LIstItem className='mx-3.5 mt-3.5 font-mont group-hover:text-[#afafaf] text-sm text-[#777777] font-normal
             cursor-pointer' itemName={item.Item}/>
              <div className='h-[2px]  w-[0%] group-hover:w-[80%]
                bg-[#afafaf] hover:transition duration-300  absolute top-[67%] left-[10%]
              '></div>
         </div>
          ))}
     </List>
    </div>
    <div className="w-14 h-10" >
      <Image className=" mt-5 ml-auto" imgsrc={`http://localhost:1337${menuIcon}`}/>
    </div>
     </div>
    </div>
    </nav>
  )
}

export default Navbar