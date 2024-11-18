import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../../../shared/api/apiRestaurant";
import Button from "../../../../shared/ui/Button";

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
}
