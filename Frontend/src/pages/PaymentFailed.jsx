import React from "react";
import {useHistory , Link} from "react-router-dom";
export function PaymentFailed() {
  const history = useHistory();
  return (
      <div className="payment-failed-page">
        <h3>הפעולה נכשלה</h3>
        <Link className="link-to-pay" onClick={() => history.goBack()}>⬅ לחץ כאן כדי לנסות שוב</Link>
      </div>
  );
}
