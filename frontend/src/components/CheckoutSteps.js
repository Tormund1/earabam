import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>Giriş-Yap</Col>
      <Col className={props.step2 ? 'active' : ''}>Teslimat</Col>
      <Col className={props.step3 ? 'active' : ''}>Ödeme</Col>
      <Col className={props.step4 ? 'active' : ''}>Sipariş Ver</Col>
    </Row>
  );
}
