import  { useEffect, useState } from 'react'
import axios from 'axios'
import Flex from './Flex';
import Image from './Image';
const Banner = () => {
    let[hello,setHello] = useState('')
    let[name,setName] = useState('')
    let[namepara,setNamepara] = useState('');
    let[bannerImage,setbannerImage] = useState([]);
    let[bannerBt,setbannerBt] = useState([]);
    useEffect(()=>{
        async function banner(){
            const data = await axios.get("http://localhost:1337/api/banners?populate=*");
            setHello(data.data.data[0].attributes.greting)
            setName(data.data.data[0].attributes.Header_title)
            setNamepara(data.data.data[0].attributes.details);
            setbannerBt(data.data.data[0].attributes.button)
            setbannerImage(data.data.data[0].attributes.Banner_img.data[0].attributes.url
              )
        }
        banner()
    },[])
  return (
    <section className='bg-bg_color'>
        
        <div className='flex max-w-container mx-auto '>
            <div className='w-6/12 pt-96'>
                <h2 className='font-mont text-base font-bold text-[#919191]'>{hello}</h2>
                <h1 className='font-mont text-[44px] text-[#414141] font-bold'>{name}</h1>
                <p className='font-pop font-normal text-base text-[#6A6A6A] mt-2'>{namepara}</p>
                <div>
                  {bannerBt.map((item)=>(
                       <button className='font-mont text-[#ffffff] py-5 mt-[44px] px-12 bg-[#414141] rounded-md
                       text-sm font-bold'>{item.Item}</button>
                  ))}
                </div>
               
            </div>    
            <div className='w-6/12'>
            <div className='mt-[141px] ml-[156px]'>
                
                <Image  imgsrc={`http://localhost:1337${bannerImage}`}/>
            
           </div>
              </div>    
        </div>
     
    </section>
  )
}

export default Banner