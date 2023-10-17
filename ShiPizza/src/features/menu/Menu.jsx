import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
// import { getMenu } from "../../services/apiRestaurant";
import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  const menu = useLoaderData();
  return (
    <>
      <h1 className="my-8 text-center text-3xl uppercase ">Menu</h1>

      <div className="mx-8 my-8 flex flex-wrap items-center justify-center ">
        {menu.map((pizza, i) => (
          <MenuItem pizza={pizza} key={i} />
        ))}
      </div>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
