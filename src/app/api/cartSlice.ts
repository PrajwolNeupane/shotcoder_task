export const setCartToStorage = (item: any) => {
  var cartItems: string | null = localStorage.getItem("shot_shop-cart");
  if (cartItems) {
    var parsedItem: Array<any> = JSON.parse(cartItems);
    parsedItem.push(item);
    localStorage.setItem("shot_shop-cart", JSON.stringify(parsedItem));
  } else {
    localStorage.setItem("shot_shop-cart", JSON.stringify([item]));
  }
};

export const getCartFromStorage = ():Array<any> => {
  var rawItems: string | null = localStorage.getItem("shot_shop-cart");
  if (rawItems) {
    var parsedItem: Array<any> = JSON.parse(rawItems);
    return parsedItem;
  } else {
    return [];
  }
};
