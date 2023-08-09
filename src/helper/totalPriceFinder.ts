import { CartItemInteface } from "../Interface";

const totalPriceFinder = (items: Array<CartItemInteface | null>):number => {

  var total = 0;
  items.forEach((curr: CartItemInteface | null) => {
    var itemTotal = curr?.price! * curr?.quantity!;
    total = total + itemTotal;
  });

  return total;
};

export default totalPriceFinder;
