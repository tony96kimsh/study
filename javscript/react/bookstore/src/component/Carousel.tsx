import "../App.css"
import { Carousel } from "react-bootstrap"

const MyCarousel = () => {
    return (
        <>
            <Carousel className="shadow-lg pt-5 pb-5 bg-secondary mb-5 mt-5">
                <Carousel.Item>
                    <img                    
                    className="d-block mx-auto rounded carousel-img"
                    src="public/image/1.jpeg"
                    alt="첫 번째 이미지"
                    />                    
                </Carousel.Item>

                <Carousel.Item>
                    <img                    
                    className="d-block mx-auto rounded carousel-img"
                    src="public/image/2.jpeg"
                    alt="첫 번째 이미지"
                    />                    
                </Carousel.Item>

                <Carousel.Item>
                    <img                    
                    className="d-block mx-auto rounded carousel-img"
                    src="public/image/3.jpeg"
                    alt="첫 번째 이미지"
                    />                    
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default MyCarousel