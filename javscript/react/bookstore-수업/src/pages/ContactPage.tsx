import { Button, Container, Form } from "react-bootstrap";

const ContactPage = () =>{
    return (
        <Container className="text-center">
            <h1>Business Container</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label className="text-start w-100">이름</Form.Label>
                    <Form.Control type = "text" placeholder="이름 입력" ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label className="text-start w-100">이메일</Form.Label>
                    <Form.Control type = "text" placeholder="이메일 입력" ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContant">
                    <Form.Label className="text-start w-100">내용</Form.Label>
                    <Form.Control as="textarea" rows={10} placeholder="내용 입력" ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="warning"
                    className="w-100"
                    style={{height: '60px'}}
                >접수하기</Button> 
            </Form>
        </Container>
    )
}

export default ContactPage;