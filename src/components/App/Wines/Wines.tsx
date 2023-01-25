import { Filters } from "../Filters/Filters";
import { WineList } from "./List/WineList";
import styles from "./styles.module.css";
export const Wines = () => {
  const { container } = styles;
  return (
    <section className={container}>
      <Filters />
      <WineList />
    </section>
  );
};
