
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router';
import MyCarousel from '../component/Carousel';

const Contents = () => {
    return(
        <>
        <Container className='mt-4'>
                <Routes>
                    <Route path="/" element={<div>홈</div>} />
                    <Route path="/about" element={<div>소개페이지</div>} />
                    <Route path="/product" element={<div>제품페이지</div>} />
                    <Route path="/contact" element={<div>연락처</div>} />      
                </Routes>        
        </Container> 
        </>
    )
}

export default Contents
