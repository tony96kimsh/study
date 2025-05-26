import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutPage = () =>{
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('show');
                }else {
                    entry.target.classList.remove('show');
                }
            })
        })
        const elements = document.querySelectorAll('.hidden');
        elements.forEach((el) => {observer.observe(el)})
    }, [])

    return (
        <div>
            <Container>
                <Row className="text-center">
                    {/* 소개 섹션 */}
                    <Col md={6} className="header_left hidden">
                        <p className="header_left_introduce">안녕하세요 <br /> 김성훈입니다.</p>
                        <div className=".header_left_introduce_body">
                            건강합니다. 감사합니다.
                        </div>

                        {/* 버튼 섹션 */}
                        <div className="btn_header_container">
                            <a href="https://velog.io/@tonyisback">
                                <button className="btn_header">블로그</button>
                            </a>
                            <a href="https://github.com/tony96kimsh">
                                <button className="btn_header">깃허브</button>
                            </a>
                        </div>
                    </Col>


                    {/* 이미지 섹션 */}
                    <Col>
                        <img src="./image/chill.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutPage;