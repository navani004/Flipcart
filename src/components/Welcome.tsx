import banner1 from'../images/banner1.jpg'
import banner2 from'../images/banner2.jpg'
import banner3 from'../images/banner3.jpg'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const Welcome = () => {
  return (
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div className='h-70'>
                    <img src={banner1}  className='h-70'/>
                </div>
                <div  className='h-70'>
                    <img src={banner2}  className='h-70' />
                </div>
                <div  className='h-70' >
                    <img src={banner3}  className='h-70' />
                </div>
            </Carousel>  )
}

export default Welcome