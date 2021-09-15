import { Home } from "./pages/Home.jsx";
import { Order } from "./pages/Order.jsx";
import { CompleteOrder } from "./pages/CompleteOrder.jsx";
import { Payment } from "./pages/Payment.jsx";
import { PaymentSuccess } from "./pages/PaymentSuccess.jsx";

export const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/order",
    component: Order,
  },
  {
    path: "/completeorder",
    component: CompleteOrder,
  },
  {
    path: "/payment/success/:orderId",
    component: PaymentSuccess,
  },
  {
    path: "/payment",
    component: Payment,
  },
];
