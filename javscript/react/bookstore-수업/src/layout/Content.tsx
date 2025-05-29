import { Button, Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import MyCarousel from "../components/Carousel";
import bookdata, { Book } from "../data/Bookdata";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import BookItem from "../components/BookItem";
import AboutPage from "../pages/AboutPage";
import ListPage from "../pages/ListPage";
import ContactPage from "../pages/ContactPage";
import CartPage from "../pages/CartPage";
import DetailPage from "../pages/DetailPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import DetailPage2 from "../pages/DetailPage2";
import { BasketFill, PersonFill } from "react-bootstrap-icons";

const Content : React.FC = ()=>{
    const [books, setBooks] = useState<Book[]>(bookdata);

    console.log(books);

    return(
        <div>
            <Navbar style={{backgroundColor : '#4169E1'}} data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/"><h1>BookStore</h1></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/list">Product</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                        <Nav.Link href="/login" className="d-flex align-item-center me-2">
                            <PersonFill size={25} className="me-2" /> Login
                        </Nav.Link>
                        <Nav.Link href="/cart" className="d-flex align-item-center">                        
                            <BasketFill size={25} className="me-2" /> cart
                        </Nav.Link>
                </Container>
            </Navbar>           
            <Routes>
                <Route path = "/" element={<HomePage></HomePage>}></Route>
                <Route path = "/about" element={<AboutPage></AboutPage>}></Route>
                <Route path = "/list" element={<ListPage></ListPage>}></Route>
                <Route path = "/contact" element={<ContactPage></ContactPage>}></Route>
                <Route path = "/cart" element={<CartPage></CartPage>}></Route>
                <Route path = "/detail/:id" element={<DetailPage></DetailPage>}></Route>
                <Route path = "/login" element={<LoginPage></LoginPage>}></Route>
                <Route path = "*" element={"페이지가 존재하지 않습니다. 확인해주세요."}></Route>
            </Routes>    

        </div>
    )
}

export default Content;