import Carousel from 'react-bootstrap/Carousel';

const MyCarousel : React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='carousel-item-custom'>
            <img src = "/image/5.jpg" className='fixed-size-img'></img>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='carousel-item-custom'>
            <img src = "/image/6.jpg" className='fixed-size-img'></img>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='carousel-item-custom'>
            <img src = "/image/7.jpg" className='fixed-size-img'></img>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;