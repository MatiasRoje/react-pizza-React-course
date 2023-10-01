import { useFetcher } from "react-router-dom";
import { Order } from "../../types/order";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

type UpdateOrderProps = {
  order: Order;
};

function UpdateOrder({ order }: UpdateOrderProps) {
  const fetcher = useFetcher();

  console.log(order);

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params }: { params: { orderId: number } }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
}
