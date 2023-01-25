import styles from "./styles.module.css";
import useStore from "../../state/store";
import { OrderType, WineType } from "@/typings";
import { useEffect } from "react";
import { Utils } from "@/utils/Utils";

export const Filters = () => {
  const { container, orderContainer } = styles;
  const utils = new Utils();
  const { orderType, setOrderType, wines, setWines } = useStore(
    (state: any) => ({
      orderType: state.orderType,
      setOrderType: state.setOrderType,
      wines: state.wines,
      setWines: state.setWines,
    })
  );

  useEffect(() => {
    const sorted: WineType[] = utils.orderWines(wines, orderType);
    setWines(sorted);
  }, [orderType, setWines, wines]);

  const handleOrder = (value: string) => {
    const orderType: OrderType = utils.convertStringToType(value);
    setOrderType(orderType);

    const sorted: WineType[] = utils.orderWines(wines, orderType);
    setWines(sorted);
  };
  return (
    <div className={container}>
      <div className={orderContainer}>
        <h1>Order by :</h1>
        <select
          onChange={(e) => handleOrder(e.target.value)}
          name="filter"
          defaultValue={orderType}
          id="filter"
        >
          <option value="name">Name</option>
          <option value="year">Year</option>
          <option value="price">Price</option>
          <option value="quantity">Quantity</option>
        </select>
      </div>
    </div>
  );
};
