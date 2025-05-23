import { Button, Card, Col } from "react-bootstrap";
import { Book } from "../data/Bookdata";
import { Link } from "react-router-dom";

interface BookItemProps{
    book : Book;
}

const BookItem : React.FC<BookItemProps> = ({book}) =>{
    return(
        <Col className="box p-4" key={book.id} sm={6} md={4}>
            <Card style={{ width: '300px', height : '500px'}} className="border rounded shadow-sm p-3">
                <Card.Body>
                    <Card.Img variant="top" src={`/image/${book.id + 1}.jpg`} 
                        style={{height : '240px', width : '173px', objectFit : 'cover'}} 
                        alt = {book.title}
                    />
                    <Card.Title className="title">{book.title}</Card.Title>
                    <Card.Text>
                        <span>작가 : {book.author}</span><p></p>
                        <span>별점 : {book.star}</span><p></p>
                    </Card.Text>
                    <div className = "linkTo">
                        <Link to = {`/detail/${book.id}`} state={{book}}>
                            <Button variant="primary">자세히 보기</Button>
                        </Link>
                    </div>                 
                </Card.Body>
            </Card>                      
        </Col>
    )
}

export default BookItem;