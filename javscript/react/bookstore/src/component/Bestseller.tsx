import { useState } from "react";
import Bookdata from "../data/Bookdata";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router";

const Bestseller = () => {
    const [books, setBooks] = useState(Bookdata);
    return(
        <>
            <Row className="justify-content-center mb-5 mt-5">
            {books.map((book) => (
                <Col key={book.id} md={4} className="mb-4 w-25">
                    <Card>
                        <Card.Img variant="top"
                            src={`public/image/${book.id}.jpeg`}/>
                        <Card.Body>
                            <Card.Title>제목 : {book.title}</Card.Title>
                            <Card.Text>작가 : {book.author}</Card.Text>
                            <Card.Text>가격 : {book.price}</Card.Text> 
                            <Button 
                                as={Link}
                                state={{book : book}}
                                to={`/detail/${book.id}`}
                                variant="primary"
                            > 자세히보기</Button>                         
                        </Card.Body>
                    </Card>                
                </Col>
            ))}
            </Row>
        </>
    )   
}

export default Bestseller;