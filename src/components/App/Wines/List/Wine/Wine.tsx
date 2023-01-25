import { WineType } from "@/typings";
import axios from "axios";
import { useState } from "react";
import { AiFillEdit, AiFillEye, AiFillSave } from "react-icons/ai";
import useStore from "../../../../state/store";
import styles from "./styles.module.css";

export const Wine = ({ wine }: { wine: WineType }) => {
  const { setWine } = useStore((state: any) => state);
  const { setWines } = useStore((state: any) => state);

  const { id, name, year, price, quantity } = wine;
  const { edit } = styles;

  const [editMode, setEditMode] = useState(false);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const selectedWine: WineType = useStore((state: any) => state.wine);

  const updateQuantity = async () => {
    await axios.post("http://localhost:3000/api/updatequantity", {
      id: id,
      quantity: newQuantity,
    });
    const { data } = await axios.get("http://localhost:3000/api/getwines");
    setWines(data.wines);
  };

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{year}</td>
      <td>${price}</td>
      <td>
        <div className={edit}>
          {newQuantity !== quantity ? (
            <AiFillSave onClick={() => updateQuantity()} />
          ) : (
            <AiFillEdit onClick={() => setEditMode(true)} />
          )}

          <input
            disabled={!editMode}
            onChange={(e) => setNewQuantity(parseInt(e.target.value))}
            type="number"
            value={newQuantity}
          />
        </div>
      </td>
      <td>
        <AiFillEye
          onClick={() => setWine(wine)}
          color={selectedWine.id === id ? "black" : "gray"}
        />
      </td>
    </tr>
  );
};
