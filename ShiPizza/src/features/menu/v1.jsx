import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li
      className={`m-2 flex h-72 w-60  flex-col gap-4 rounded-lg shadow-lg  ${
        soldOut ? "blur-[0.75px]" : ""
      }`}
    >
      <img
        src={imageUrl}
        alt={name}
        className={`h-3/5 rounded-t-lg ${
          soldOut ? "opacity-70 grayscale" : ""
        }`}
      />
      <div className="px-2 pb-1 pt-0.5">
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
