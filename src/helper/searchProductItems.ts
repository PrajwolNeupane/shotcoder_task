import { ProductInteface } from "../Interface";

const searchProducts = (
  title: string,
  products: Array<ProductInteface | null>
): Array<ProductInteface | null> => {
  const res = products.filter((curr: ProductInteface | null) => {
    if (title == "") {
    } else if (curr?.title.toLowerCase().includes(title.toLowerCase())) {
      return curr;
    }
  });
  if (res.length > 5) {
    return res.slice(0, 5);
  } else {
    return res;
  }
};

export default searchProducts;
