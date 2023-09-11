import React, { useEffect, useState } from 'react'
import Container from './Container';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../.././App.css";
import Image from './Image';
const Testimonial = () => {
    let [tittle,setTittle] = useState("");
    let [testimonia,setTestimonia] = useState([]);

    useEffect(()=>{
         async function testimonial(){
            const data = await axios.get("http://localhost:1337/api/testimonials?populate[comment][populate]=*")
            setTittle(data.data.data[0].attributes.tittle);
            setTestimonia(data.data.data[0].attributes.comment)
            
            
         }
         testimonial()
    },[])

    const settings = {
        dots: true,
        infinite: true,
       
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        centerMode: false,
        
        
        appendDots: dots => (
          <div
            style={{
              
            }}
          >
            <ul style={{ margin: "20px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              width: "30px",
              
              border: "2px #5C5C5C solid"
            }}
          >
            {}
          </div>
        )
      };

   

  return (
    <section className='mb-[100px]'>
        <Container>
           <div>
                <div className='flex justify-center'>
                    <h2 className='font-mont  font-bold text-[#494949] text-2xl'>{tittle}</h2>
                </div>
                <div className='flex justify-center relative mt-3'>
                    <div className="after:absolute after:content-[''] after:w-[44px] after:h-[2px] after:bg-[#D9D9D9]
                    before:absolute before:content-[''] before:w-[77px] before:h-[2px]  before:bg-[#D9D9D9]
                    after:left-[48%]  after:top-0 before:left-[46.5%]  before:top-[5px]"></div>
                </div>
           </div>
           
           <div className='mt-[118px] bg-[#f5f5f5] overflow-visible '>
           
             <Slider {...settings}>
           
            
             {testimonia.map((item)=>(
             
              <div>
                  <div className='flex justify-center overflow-visible'>
                    <div className='flex justify-center flex-col relative'>
                    <Image className="w-[100px] h-[100px] z-40 absolute top-0 left-[50%] transform -translate-y-1/2 -translate-x-1/2" imgsrc={`http://localhost:1337${item.img.data.attributes.url}`} />
                    <h3 className='m-auto pt-[68px] text-[#5C5C5C] font-mont font-bold text-lg'>{item.name}</h3>
                    <h4 className='m-auto text-[#838383] font-mont font-bold text-sm mt-3'>{item.designation}</h4>
                    <p className='w-[605px] text-center pb-14 font-pop font-normal text-sm text-[#888888] mt-5'>{item.details}</p>
                    </div>
                    
               
                </div>
                
               </div>
           
            
             ))}
            
           
           </Slider>
           
      </div>
     
        </Container>
    </section>
  )
}

export default Testimonial