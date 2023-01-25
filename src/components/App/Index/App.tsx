import useStore from "@/components/state/store";
import { Details } from "../Details/Details";
import { Wines } from "../Wines/Wines";
import styles from "./styles.module.css";
export const App = () => {
  const { wine } = useStore((state: any) => state);

  const { container } = styles;
  return (
    <main className={container}>
      <Details wine={wine} />
      <Wines />
    </main>
  );
};
