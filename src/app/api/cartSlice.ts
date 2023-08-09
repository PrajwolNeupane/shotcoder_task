import { CartItemInteface } from "../../Interface";

export const setCartToStorage = (item: CartItemInteface) => {
  var cartItems: string | null = localStorage.getItem("shot_shop-cart");
  if (cartItems) {
    var parsedItem: Array<any> = JSON.parse(cartItems);
    parsedItem.push(item);
    localStorage.setItem("shot_shop-cart", JSON.stringify(parsedItem));
  } else {
    localStorage.setItem("shot_shop-cart", JSON.stringify([item]));
  }
};

export const getCartFromStorage = (): Array<CartItemInteface> => {
  var rawItems: string | null = localStorage.getItem("shot_shop-cart");
  if (rawItems) {
    var parsedItem: Array<CartItemInteface> = JSON.parse(rawItems);
    return parsedItem;
  } else {
    return [];
  }
};

export const removeCartFromStorage = (item: CartItemInteface) => {
  var rawItems: string = localStorage.getItem("shot_shop-cart")!;
  var parsedItems: Array<CartItemInteface> = JSON.parse(rawItems);
  var index: number = parsedItems.findIndex((curr: CartItemInteface) => {
    return curr?.id == item.id;
  });
  if (index != -1) {
    if (parsedItems[index].quantity != 1) {
      parsedItems[index].quantity = parsedItems[index].quantity - 1;
    } else {
      parsedItems.splice(index, 1);
    }
  }
  localStorage.setItem("shot_shop-cart", JSON.stringify(parsedItems));
};
