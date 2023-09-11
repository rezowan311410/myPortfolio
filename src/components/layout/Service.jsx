import  Container  from './Container'
import React, { useEffect, useState } from 'react'
import Image from './Image'
import axios from 'axios'
import Flex from './Flex';

const Service = () => {
   
  let [tittle,setTittle] = useState("")
  let [icon,seticon] = useState([])
  let [img,setimg] = useState('')

  useEffect(()=>{
    async function service_part(){
        let service = await axios.get("http://localhost:1337/api/service-sections?populate[Service][populate]=*");
        setTittle(service.data.data[0].attributes.tittle)
        seticon(service.data.data[0].attributes.Service)
        // seticon(service.data.data[0].attributes.Service[0].Service_Icon.data.attributes.url
        //   )
        
      }
      service_part()
  },[])
  return (
    
      <section className='mb-[100px] mt-[100px] bg-[#f5f5f5] py-[100px]'>
        <Container>
        <div className='flex justify-center'>
            <h2 className='font-mont  font-bold text-[#494949] text-2xl'>{tittle}</h2>
        </div>
        <div className='flex justify-center relative mt-3'>
            <div className="after:absolute after:content-[''] after:w-[44px] after:h-[2px] after:bg-[#D9D9D9]
            before:absolute before:content-[''] before:w-[77px] before:h-[2px]  before:bg-[#D9D9D9]
            after:left-[48%]  after:top-0 before:left-[46.5%]  before:top-[5px]"></div>
        </div>
         <div>
            <Flex>
              {icon.map((item)=>(
               <div className='shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] mt-[65px] hover:bg-red-500'>
                   <div className='w-[270px] hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:transition ease-in duration-300 flex  flex-col justify-center relative px-4 pt-10 pb-[74px] bg-[#F5F5F5] text-center group cursor-default'>
               <Image className="w-9 h-9 m-auto group-hover:bg-[#494949]
               group-hover:rounded-full" imgsrc={`http://localhost:1337${item.Service_Icon.data.attributes.url}`}/>
                <h2 className='m-auto after:absolute after:content-[""] after:w-[50px] after:h-[2px] after:bg-[#DBDBDB]
                after:left-[41%]  after:top-[99px] mt-[42px] font-mont font-bold text-sm text-[#757575]'>{item.Sub_tittle}</h2>
                <p className='m-auto mt-6 font-pop font-normal font-sm text-[#979797] leading-6'>{item.details}</p>
               </div>
               </div>
              ))}
              </Flex>
            </div>
         
        
       </Container>
      </section>
   
  )
}

export default Service