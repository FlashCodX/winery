import styles from "./styles.module.css";
import useStore from "../../../state/store";
import { OrderType, WineType } from "@/typings";
import { Wine } from "./Wine/Wine";

export const WineList = () => {
  const { wines }: { wines: WineType[] } = useStore((state: any) => state);

  const { container, header } = styles;

  return (
    <div className={container}>
      <table>
        <tbody>
          <tr className={header}>
            <th>Name</th>
            <th>Year</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Details</th>
          </tr>
          {wines.map((wine: WineType) => (
            <Wine key={wine.id} wine={wine} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
