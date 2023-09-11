import React, { useEffect, useState } from 'react'
import Container from './Container'
import axios from 'axios'
import Image from './Image';
const Contact = () => {
   let [title,settitle] = useState("");
   let [subtitle,setsubtitle] = useState("");
   let [communication,setcommunication] = useState([]);
   let [sms,setsms] = useState([]);
   let [btn,setbtn] = useState([]);

    useEffect(()=>{
      async function contact(){
          const data = await axios.get("http://localhost:1337/api/contact-parts?populate[communication][populate]=*")
          settitle(data.data.data[0].attributes.title)
          setsubtitle(data.data.data[0].attributes.sub_tittle)
          setcommunication(data.data.data[0].attributes.communication)
          
          const message = await axios.get("http://localhost:1337/api/contact-parts?populate[message][populate]=*")
          setsms(message.data.data[0].attributes.message)
          
          const button = await axios.get("http://localhost:1337/api/contact-parts?populate=*")
          setbtn(button.data.data[0].attributes.button)

          
       }
       contact()
    },[])
    
  return (
    <section className='mb-[100px]'>
        <Container>
            <div className=''>
            <div className=''>
                    <h2 className='font-mont  font-bold text-[#494949] text-2xl'>{title}</h2>
                </div>
                <div className='relative mt-3'>
                    <div className="after:absolute after:content-[''] after:w-[44px] after:h-[2px] after:bg-[#D9D9D9]
                    before:absolute before:content-[''] before:w-[77px] before:h-[2px]  before:bg-[#D9D9D9]
                    after:left-0  after:top-0 before:left-0  before:top-[6px]"></div>
                </div>
            </div>
            <div className='pt-6 pb-1'>
                <p className='font-pop font-normal text-sm text-[#888888] w-[323px] leading-6'>{subtitle}</p>
            </div>
           <div className='flex'>
           <div className='w-[50%]'>
                {communication.map((item)=>(
                   <div className='flex mt-6'>
                    <Image imgsrc={`http://localhost:1337${item.icon.data.attributes.url}`}/>
                    <div className='ml-3'>
                        <h2 className='font-mont font-normal text-[#7B7B7B] text-lg'>{item.adname}</h2>
                        <h4 className='font-mont font-normal text-sm text-[#979797]'>{item.address}</h4>
                    </div>
                   </div>
                ))}
            </div>
        
            <div  className='w-[50%] flex flex-wrap justify-evenly mt-[-90px]'>
                {sms.map((item)=>(
                    <div className=''>
                       
                       <input type={item.input_type}  className=" px-3 py-2 w-[240px] border-[1px]  border-transparent border-b-[#D9D9D9] bg-white border shadow-sm  placeholder-slate-400 focus:outline-none focus:ring-b-sky-500  rounded-md sm:text-sm
                        placeholder:font-pop  placeholder:text-sm  placeholder:text-[#B3B3B3" placeholder={item.placeholder}/>
                          
                      
                    </div>
                ))}
               <div>
               <div>
                <textarea class="resize mt-[50px] rounded-md w-[510px]  border-[1px] h-[148px] border-[#D9D9D9] bg-white border shadow-sm  placeholder-slate-400 focus:outline-none focus:ring-b-sky-500  rounded-md sm:text-sm  placeholder:font-pop  placeholder:text-sm  placeholder:text-[#B3B3B3] placeholder:p-4" placeholder='Your Message' type="message"></textarea>
                </div>
                <div className='mt-[-12px]'>
                    <button className='font-pop text-[#FFFFFF] py-5 mt-[44px] px-12 bg-[#393939] rounded-md
                    text-sm font-light'>{btn}</button>
                </div>
               </div>
            </div>
         </div>
        </Container>
      
    </section>
  )
}

export default Contact

{/* <input type={item.input_type}  className="mt-1 px-3 py-2 w-[48%] ml-[400px]   border-transparent border-b-[#000] bg-white border shadow-sm  placeholder-slate-400 focus:outline-none focus:border-b-sky-500 focus:ring-b-sky-500  rounded-md sm:text-sm" placeholder={item.placeholder}/> */}