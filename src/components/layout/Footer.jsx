import React, { useEffect, useState } from 'react'
import Container from './Container'
import axios from 'axios'
const Footer = () => {
   let[copy,setcopy] = useState("");
   let[media,setmedia] = useState([]);
    
   useEffect(()=>{
    async function copyright(){
         let data = await axios.get("http://localhost:1337/api/footers?populate[social_media][populate]=*");
         setcopy(data.data.data[0].attributes.copy_right);
         setmedia(data.data.data[0].attributes.social_media)
     }
     copyright()
   },[])
  return (
    <footer className='bg-[#F5F5F5]'>
        <Container>
            <div className='flex'>
                <div className='w-[50%]'>
                    <h3 className='font-pop font-light text-sm text-[#929292] py-[22px]'>{copy}</h3>
                </div>
                <div className='w-[50%] flex justify-end'>
                    {media.map((item)=>(
                       <div>
                         <h2 className='font-mont font-normal text-sm text-[#919191] ml-[30px] py-[22px]'>{item.social_media}</h2>
                       </div>
                    ))}
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer