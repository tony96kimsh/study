
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router';
import BookDetail from '../pages/BookDetail';

const Contents = () => {
    return(
        <>
        <Container className='mt-4'>
                <Routes>
                    <Route path="/" element={<div>홈</div>} />
                    <Route path="/about" element={<div>소개페이지</div>} />
                    <Route path="/product" element={<div>제품페이지</div>} />
                    <Route path="/contact" element={<div>연락처</div>} />      
                    <Route path="/detail/:id" element={<BookDetail />} />      
                </Routes>        
        </Container> 
        </>
    )
}

export default Contents
