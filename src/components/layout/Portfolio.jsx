import React, { useEffect, useState } from 'react'
import Container from './Container'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios'
import Image from './Image';
const Portfolio = () => {
    let [title,settitle] = useState("");
    let [barname,setbarname] = useState([]);
    let [img,setimg]    = useState([])
    useEffect(()=>{
        async function tab(){
            const data = await axios.get("http://localhost:1337/api/portfolios?populate=deep")
            settitle(data.data.data[0].attributes.title);
            setbarname(data.data.data[0].attributes.tab)
            setimg(data.data.data[0].attributes.tab)
            
         }
         tab()
      },[])
  return (
    <section>
        <Container>
            <div className='mb-10'>
                <div className='flex justify-center'>
                    <h2 className='font-mont  font-bold text-[#494949] text-2xl'>{title}</h2>
                </div>
                <div className='flex justify-center relative mt-3'>
                    <div className="after:absolute after:content-[''] after:w-[44px] after:h-[2px] after:bg-[#D9D9D9]
                    before:absolute before:content-[''] before:w-[77px] before:h-[2px]  before:bg-[#D9D9D9]
                    after:left-[48%]  after:top-0 before:left-[46.5%]  before:top-[5px]"></div>
                </div>
           </div>
                <div>
                    <Tabs>
                        <div className=''>
                            
                         <div className='flex justify-center relative'>
                           {barname.map((item)=>(
                            <Tab>
                                <div className='text-[#777777] font-mont font-normal text-sm
                                after:absolute after:content-[""] after:w-[0%] after:h-[2px] after:bg-[#000000]
                                after:top-[15px] after:right-[50%] after:hover:w-[47%]
                                hover:transition after:duration-300
                                
                                before:absolute before:content-[""] before:w-[0%] before:h-[2px] before:bg-[#000000]
                                before:top-[15px] before:left-[50%] before:hover:w-[47%] before:duration-300'>{item.itemname}
                                </div>
                            </Tab>
                           ))}
                         </div>
                    
                        </div>
                

                    
                   
                      
                           
                           <div className='mt-[70px]'>
                              {
                                 img.map((item)=>(
                                    <TabPanel>
                                 <div>
                                    <div className='flex justify-between'>{item.tab_img.map((item2)=>(
                                    <div className=''>
                                        <Image className='w-[95%]' imgsrc={`http://localhost:1337${item2.tab_img.data[0].attributes.url}`}/>
                                    </div>
                                 ))}</div>
                                 </div>
                                 </TabPanel>
                                 ))
                              }
                           </div>
                          
                           
                            
                  
                  
                </Tabs>
            </div>
        </Container>
    </section>
  )
}

export default Portfolio