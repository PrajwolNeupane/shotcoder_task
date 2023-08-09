import { CartItemInteface } from "../Interface";

const totalCartItemFinder = (items: Array<CartItemInteface | null>):number => {
  var total = 0;

  items.forEach((curr: CartItemInteface | null) => {
    total = total + curr?.quantity!;
  });

  return total;
};

export default totalCartItemFinder;
