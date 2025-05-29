import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addItem } from "../data/store";
import { useDispatch } from "react-redux";

interface LocationState{
    book : Book;
}

const DetailPage = () =>{
    const {id} = useParams<{id : string}>();
    console.log(id);

    const location = useLocation();
    const {state} = location as {state : LocationState}
    const book  = state?.book;
    console.log(state);
    console.log(book);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect(() => {
    //     // 팝업 생성
    //     const pwin = window.open('', '','width=400, height=300');

    //     if(pwin) {
    //         pwin.document.write(`
    //             <html>
    //                 <head>
    //                     <title>특가할인</title>
    //                 </head>
    //                 <body style="display: flex;
    //                     align-items: center; 
    //                     justify-content: center;
    //                     height: 100vh;
    //                     margin:0;
    //                     background-color: #4169E1;
    //                     color: white;
    //                     flex-direction: column;"
    //                 >
    //                 <h1 style="margin : 0;">전 도서 50% 할인!!</h1>
    //                 <h3 style = "margin-top: 10px;">완전 럭키비키잖아</h3>
    //                 </body>
    //             </html>                
    //         `)
    //         pwin.document.close();
    //     }
    //     return (()=> {
    //         //클린업
    //         if(pwin)
    //             pwin.close();
    //     })
        
    // }, [])

    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col md={6}>
                        <Card className = "border-0">
                            <Card.Img
                                variant = "top" 
                                src = {'/image/' + (book.id + 1) + '.jpg'}
                                style={{ borderRadius : '8px'}}
                            ></Card.Img>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className = "border-0 text-center">
                            <Card.Body>
                                <Card.Title as="h3" className="mb-4">{book.title}</Card.Title>
                                <Card.Text className="text-muted mb-4">{book.content}</Card.Text>
                                <Card.Text as="h4" className="text-primary mb-4">{book.price}원</Card.Text>
                                <Button variant = "primary"
                                    onClick = {()=>{
                                        dispatch(addItem(
                                            {
                                                id: book.id,
                                                name: book.title,
                                                price: book.price
                                            }))
                                            navigate('/cart')
                                    }}
                                >카트에 담기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailPage;