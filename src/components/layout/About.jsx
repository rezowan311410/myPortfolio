import React, { useEffect, useState } from 'react'
import axios from 'axios'
const About = () => {
    let[tittle,settittle] = useState("");
    let[subtittle,setSubtittle] = useState("");
    let[details,setdetails] = useState("");
    let[butt,setbutt] = useState("");
    let[link,setlink] = useState(""); 
    let [aboutDetails,setAboutDetails] = useState([])
    useEffect(()=>{
        async function about(){
            const aboutPart = await axios.get("http://localhost:1337/api/about-sections?populate=*");
            settittle(aboutPart.data.data[0].attributes.tittle
                )
                setSubtittle(aboutPart.data.data[0].attributes.sub_tittle)
                setdetails(aboutPart.data.data[0].attributes.details);
                setbutt(aboutPart.data.data[0].attributes.button[0].button_text)
                setlink(aboutPart.data.data[0].attributes.button[0].button_link)
                setAboutDetails(aboutPart.data.data[0].attributes.About_Details)
        }
        about()
    },[])
  return (
    <section className='mt-[100px] mb-[100px]'>
       <div className='max-w-container mx-auto'>
       <div className='flex justify-center'>
            <h2 className='font-mont  font-bold text-[#494949] text-2xl'>{tittle}</h2>
        </div>
        <div className='flex justify-center relative mt-3'>
            <div className="after:absolute after:content-[''] after:w-[44px] after:h-[2px] after:bg-[#D9D9D9]
            before:absolute before:content-[''] before:w-[77px] before:h-[2px]  before:bg-[#D9D9D9]
            after:left-[48%]  after:top-0 before:left-[46.5%]  before:top-[5px]"></div>
        </div>
        <div className='flex'>
            <div className='w-[48%]'>
                 <div className='flex justify-center flex-wrap'>
                   <h3 className='mt-12 font-mont font-semibold text-[22px] text-[#4F4F4F]'>{subtittle}</h3>
                   <p className='w-[512px] font-pop font-normal text-base text-[#767676] leading-7 mt-[6px]'>
                    {details}
                   </p>
                   <div>
               
                        <a className='py-2.5 px-5 rounded-md mt-8 block bg-[#414141] text-[#FFFFFF] font-mont
                        font-normal text-base' href={link}>{butt}</a>
                 
                   </div>
                 </div>
            </div>
            <div className='w-[48%] mt-8 ml-[104px]'>
              {aboutDetails.map((item)=>(
                <div className='flex  relative'>
                  <h2 className=' ml-[50px]  py-0.5 px-5 bg-[#979797] mt-6 after:h-[1px]
                  after:absolute after:content-[" "]  after:w-[270px] after:bg-[#979797]
                  after:left-[100px] after:top-[55px] font-mont text-sm font-normal text-[#FFFFFF]'>{item.Left_side}</h2>
                  <h3 className=' ml-[180px] mt-5 font-pop font-normal text-base text-[#767676]'>{item.Right_Side}</h3>
                </div>
              ))}
            </div>
        </div>
       </div>
    </section>
  )
}

export default About