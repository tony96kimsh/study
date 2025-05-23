import "../App.css"
import { Carousel } from "react-bootstrap"

const MyCarousel = () => {
    return (
        <>
            <Carousel className="shadow-lg pt-5 pb-5 bg-secondary">
                <Carousel.Item>
                    <img                    
                    className="d-block mx-auto rounded carousel-img"
                    src="src/assets/1.jpeg"
                    alt="첫 번째 이미지"
                    />                    
                </Carousel.Item>

                <Carousel.Item>
                    <img                    
                    className="d-block mx-auto rounded carousel-img"
                    src="src/assets/2.jpeg"
                    alt="첫 번째 이미지"
                    />                    
                </Carousel.Item>

                <Carousel.Item>
                    <img                    
                    className="d-block mx-auto rounded carousel-img"
                    src="src/assets/3.jpeg"
                    alt="첫 번째 이미지"
                    />                    
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default MyCarousel