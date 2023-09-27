import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { PizzaAPI } from "../../types/menu";

function Menu() {
  const menu = useLoaderData() as PizzaAPI[];

  return (
    <ul>
      {menu.map((pizza: PizzaAPI) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
