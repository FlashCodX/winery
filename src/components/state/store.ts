import { create } from "zustand";
import { OrderType, WineType } from "@/typings";

// Store Object used to store and mutate state on the application.
const useStore = create((set) => ({
  // Variable for all the wines from the database
  wines: [],
  // Function to update the wines variable
  setWines: (state: WineType[]) => set(() => ({ wines: state })),

  // Represents the selected wine
  wine: {},
  // Function to update the selected wine
  setWine: (state: WineType) => set(() => ({ wine: state })),

  // Represents the selected ordering type, (name,quantity,year,price).
  orderType: OrderType.name,
  // Function to update the selected type.
  setOrderType: (state: OrderType) => set(() => ({ orderType: state })),
}));

export default useStore;
