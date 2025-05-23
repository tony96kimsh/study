import axios from "axios";
import bookdata from "../data/Bookdata";
import { useEffect, useState } from "react";
import BookItem from "../components/BookItem";
import { Container, Row } from "react-bootstrap";

const ListPage = () =>{
    const [books, setBooks] = useState(bookdata);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        if(!loaded){ 
            axios.get('https://jamsuham75.github.io/image/data2.json')
            .then((result)=>{
                console.log(result.data);
                console.log(books);
                let copy = [...books, ...result.data]
                setBooks(copy);
                console.log(copy);
                setLoaded(true);
            })
            .catch(()=>{
                console.log('fail');
            });
        }
    }, [loaded, books]);

    return (
        <div>
           <Container>
                <div className="project_header_container">
                    <h1 className="project_header">도서 리스트</h1>
                    <div className="hr"></div>
                </div>
                <div>
                    <Row className = "text-center">
                        {
                            books.map((item, i)=>{
                                return <BookItem key = {i} book={item}></BookItem>
                            })
                        }
                    </Row>
                </div>
           </Container>
        </div>
    )
}

export default ListPage;