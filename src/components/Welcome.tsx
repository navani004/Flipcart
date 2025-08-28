import banner1 from'../images/banner1.jpg'
import banner2 from'../images/banner2.jpg'
import banner3 from'../images/banner3.jpg'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const Welcome = () => {
  return (
    <div className=' px-11 '>   
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
              
                <div className=' w-378 object-contain'>
                    <img src={banner1}  className='h-100'/>
                </div>
                <div  className=' w-378 object-contain'>
                    <img src={banner2}  className='h-100' />
                </div>
                <div  className='w-378 object-contain' >
                    <img src={banner3}  className='h-100' />
                </div>
            </Carousel> 
            </div>
   )
}

export default Welcome

