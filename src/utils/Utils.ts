import { OrderType, WineType } from "@/typings";

export class Utils {
  // Funcion to order the wines based on the selected Order Type.
  orderWines = (wines: WineType[], orderType: OrderType) => {
    let sorted: WineType[] = wines;
    switch (orderType) {
      case OrderType.name:
        // Sort by name
        sorted = wines.sort(function (a: WineType, b: WineType) {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        break;

      case OrderType.year:
        // Sort by year
        sorted = wines.sort((a: WineType, b: WineType) => a.year - b.year);
        break;

      case OrderType.quantity:
        // Sort by Quantity
        sorted = wines.sort(
          (a: WineType, b: WineType) => a.quantity - b.quantity
        );
        break;

      case OrderType.price:
        // Sort by Price
        sorted = wines.sort((a: WineType, b: WineType) => a.price - b.price);
        break;
    }

    // Return the sorted data based on the selected order Type.
    return sorted;
  };

  // Converts a string to a Type
  convertStringToType = (value: string) => {
    let orderType: OrderType = OrderType.name;
    switch (value) {
      case "name":
        orderType = OrderType.name;
        break;

      case "year":
        orderType = OrderType.year;
        break;

      case "price":
        orderType = OrderType.price;
        break;

      case "quantity":
        orderType = OrderType.quantity;
        break;

      default:
        return orderType;
    }

    return orderType;
  };
}
