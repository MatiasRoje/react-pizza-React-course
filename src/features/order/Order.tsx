// Test ID: IIDSAT

import { LoaderFunction, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { Order } from "../../types/order";

function Order() {
  const order: Order = useLoaderData() as Order;
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const { status, priority, priorityPrice, orderPrice, estimatedDelivery } =
    order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

type LoaderParams = {
  orderId: string;
};

export const loader: LoaderFunction<LoaderParams> = async ({
  params,
}): Promise<Order | undefined> => {
  if (params && params.orderId) {
    const order = await getOrder(params.orderId);
    return order;
  } else {
    return undefined;
  }
};

export default Order;
