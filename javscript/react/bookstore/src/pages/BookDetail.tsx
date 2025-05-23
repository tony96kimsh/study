import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Bookdata from "../data/Bookdata";
import { useParams } from "react-router";

const BookDetail = () => {    
    const { id } = useParams();
    const book = Bookdata.find((b) => b.id === Number(id));

    if (!book) return <div> 책 정보를 찾을 수 없습니다.</div>

    return (
    <Row className="mt-4">
        <Col md={6}>
            <img src={`/image/${book.id}.jpeg`} alt={book.title}  style={{width : '100%'}} />
        </Col>
        <Col md={6}>
            <Card>
                <Card.Body>
                    <Card.Title>제목 : {book.title}</Card.Title>
                    <Card.Text>작가 :{book.author}</Card.Text>
                    <Card.Text>가격 :{book.price}</Card.Text> 
                </Card.Body>
            </Card>
        </Col>
    </Row>
    )
}

export default BookDetail;