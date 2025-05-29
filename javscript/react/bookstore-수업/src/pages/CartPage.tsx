import { useMemo, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CartItem, CartArray, changeName, increase, PlusCount, MinusCount, resetCart } from "../data/store";

interface CartState {
  cart: CartArray;
  user: {id: number, name: string, job: string};
}


const CartPage: React.FC = () => {
  const cartState = useSelector((state : CartState) => state);


  const getTotalAmount = useMemo(() => {
    return cartState.cart.cart.reduce((total, item) => total + item.quantity * item.price, 0) 
  }, [cartState.cart])

  

  const dispatch = useDispatch();
  return (
    <Container>
      <h2>장바구니</h2>
      <Table bordered>
        <thead>
          <tr>
            <th>상품정보</th>
            <th>수량</th>
            <th>상품금액</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {
            cartState.cart.cart.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                  <Button className="btn-warning"
                    style={{marginRight: '10px'}}
                    onClick={() => {
                      dispatch(PlusCount(item.id))
                    }}
                  >+</Button>
                  <Button className="btn-warning"
                    style={{marginRight: '10px'}}
                    onClick={() => {
                      dispatch(MinusCount(item.id))
                    }}
                  >-</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
        <Row>
          <Col>
            <h5>총 상품금액 : {getTotalAmount}원</h5>
          </Col>
          <Col>
            <Button>주문하기</Button>
            <Button variant="danger"
              onClick={() => dispatch(resetCart())}
            >카트 비우기</Button>
          </Col>
        </Row>
      </Table>
    </Container>
  );
};

export default CartPage;
