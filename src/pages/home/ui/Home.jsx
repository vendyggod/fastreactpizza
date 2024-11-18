import { useSelector } from "react-redux";
import CreateUser from "../../../features/user/create-user/ui/CreateUser";
import Button from "../../../shared/ui/Button";

export function HomePage() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 text-center sm:my-14">
      <h1 className="md:3xl mb-8 px-4 text-2xl font-semibold sm:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!username ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Back to menu
        </Button>
      )}
    </div>
  );
}
