import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { orderService } from "../services/order.service.js";

export function PaymentSuccess() {
  const { orderId } = useParams();
  const [selectedOrder, setSelectedOrder] = useState();

  useEffect(() => {
    getSelectedOrder();
  }, []);
  useEffect(() => {
    if (selectedOrder) {
      getPaymentDetails();
    }
  }, [selectedOrder]);

  async function getSelectedOrder() {
    setSelectedOrder(await orderService.getOrderById(orderId));
  }
  async function getPaymentDetails() {
    const paymentDetails = await orderService.getPaymentDetails(
      selectedOrder.lowProfileCode
    );
    orderService.updateOrder({ orderId, paymentDetails });
  }
  return (
    <Fragment>
      <div className="payment-success-page">
      <h3>תודה שקניתם ספלינג</h3>
      <h4>{orderId} :מספר ההזמנה שלכם הוא</h4>
      <h5>הספלינג שלכם ישלח אליכם לכתובת שציינתם בהזמנה</h5>
      <h3>♡</h3>
      </div>
    </Fragment>
  );
}
