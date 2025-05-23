import { Container, Row } from "react-bootstrap";
import MyCarousel from "../components/Carousel";
import bookdata, { Book } from "../data/Bookdata";
import { useState } from "react";
import BookItem from "../components/BookItem";

const HomePage = () =>{
    const [books, setBooks] = useState<Book[]>(bookdata);

    return (
        <div>
            <MyCarousel></MyCarousel>

            <Container>
                <div className="project_header_container">
                    <h1 className="project_header">베스트셀러</h1>
                    <div className="hr"></div>
                </div>

                <Row className="text-center">
                    {
                    books.map((book)=>(
                        <BookItem book={book} key={book.id}></BookItem>
                    )) 
                    }

                </Row>
            </Container>

        </div>
    )
}

export default HomePage;