import { Metadata } from "@/components/Metadata/Metadata";
import { App } from "@/components/App/Index/App";
import { useQuery } from "react-query";
import axios from "axios";
import { useEffect } from "react";
import useStore from "../components/state/store";

export default function Home() {
  const { setWines, setWine } = useStore((state: any) => state);
  const { data, status } = useQuery("wineData", async () => {
    const { data } = await axios.get("http://localhost:3000/api/getwines");
    return data.wines;
  });

  useEffect(() => {
    if (data) {
      setWines(data);
      setWine(data[0]);
    }
  }, [data, setWine, setWines]);

  if (status === "loading") <p>Loading...</p>;
  if (status === "error") <p>An error occurred</p>;
  return (
    <>
      <Metadata />
      <App />
    </>
  );
}
