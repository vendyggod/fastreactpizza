import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../../../shared/api/apiRestaurant";
import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  clearCart,
  getTotalCartPrice,
} from "../../../cart/model/cartSlice";
import { fetchAddress } from "../../../user/model/userSlice";
import { formatCurrency } from "../../../../shared/utils/helpers";
import Button from "../../../../shared/ui/Button";
import LinkButton from "../../../../shared/ui/LinkButton";
import EmptyCart from "../../../../shared/ui/EmptyCart";
import store from "../../../../app/stores/store";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const navigation = useNavigation();
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const formErrors = useActionData();
  const [withPriority, setWithPriority] = useState(false);

  const isLoadingAddress = addressStatus === "loading";
  const isSubmitting = navigation.state === "submitting";
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  function handleGetPosition(e) {
    e.preventDefault();
    dispatch(fetchAddress());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <div className="mb-5 mt-3 flex flex-col gap-5">
        <LinkButton to="/cart">&larr; Back to cart</LinkButton>
        <h2 className="mb-8 text-xl font-semibold">
          Ready to order? Let&apos;s go!
        </h2>
      </div>

      <Form method="POST">
        <div className="mb-5 flex flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-36">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={username}
            className="input grow"
            required
          />
        </div>

        <div className="sm: mb-5 flex flex-col sm:flex-row sm:items-center">
          <label className="shrink-0 sm:basis-36">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" className="input w-full" required />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 px-2 py-1 text-xs text-red-500">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="sm: relative mb-5 flex flex-col sm:flex-row sm:items-center">
          <label className="shrink-0 sm:basis-36">Address</label>
          <div className="grow">
            <input
              type="text"
              disabled={isLoadingAddress}
              name="address"
              defaultValue={address}
              className="input w-full"
              required
            />
            {addressStatus === "error" && (
              <p className="mt-2 rounded-md bg-red-100 px-2 py-1 text-xs text-red-500">
                {errorAddress}
              </p>
            )}
          </div>
          {!position.latitude && !position.longitude && (
            <span className="absolute right-[3px] top-[27px] z-50 sm:right-[3px] sm:top-[3px] md:right-[5px] md:top-[5px]">
              <Button
                type="small"
                disabled={isLoadingAddress}
                onClick={handleGetPosition}
              >
                Get position
              </Button>
            </span>
          )}
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="userGeolocation"
            value={
              position.latitude && position.longitude
                ? `${(position.latitude, position.longitude)}`
                : "User`s geolocation was not recognized."
            }
          />

          <Button disabled={isSubmitting || isLoadingAddress} type="primary">
            {isSubmitting
              ? "Placing order..."
              : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please, give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
