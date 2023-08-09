import { useDispatch } from "react-redux";
import { CartItemInteface } from "../../Interface";
import { removeCartFromStorage } from "../../app/api/cartSlice";
import { useAppSelector } from "../../app/store"
import { GoTrash } from "react-icons/go";
import { removeCart } from "../../app/reducer/cartReducer";
import totalCartItemFinder from "../../helper/totalCartItemsFinder";
import totalPriceFinder from "../../helper/totalPriceFinder";


function Page() {

  const { cart } = useAppSelector((state) => state.Cart);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col w-[100%] justify-center md:gap-5  xs:gap-4 gap-3 md:px-[5%] px-[3%] sm:py-[30px] py-[15px] bg-background">
      <h2 className='text-md font-sb text-text-500 mt-3'>Shopping Cart</h2>
      <div className="flex sm:flex-row flex-col-reverse w-[100%] gap-5 min-h-[465px] items-start">
        <table className="bg-white sm:w-[70%] xs:w-[100%] w-[95%] sm:border-spacing-[20px] border-spacing-[15px] border-separate rounded-[5px] shadow-md">
          <thead>
            <tr>
              <th className="sm:w-[5%] w-[3%] sm:text-2xs text-3xs font-sb text-text-500 text-start">S.N</th>
              <th className="w-[50%] sm:text-2xs text-3xs font-sb text-text-500 text-start">Product Detail</th>
              <th className="w-[10%] sm:text-2xs text-3xs font-sb text-text-500 text-start">Price</th>
              <th className="w-[10%] sm:text-2xs text-3xs font-sb text-text-500 text-start">Quantity</th>
              <th className="w-[10%] sm:text-2xs text-3xs font-sb text-text-500 text-start"></th>
            </tr>
          </thead>
          <tbody>
            {
              cart?.map((curr: CartItemInteface | null, indx: number) => (
                <tr>
                  <td>
                    {indx + 1}
                  </td>
                  <td className="flex md:flex-row flex-col gap-3">
                    <img src={curr?.image} className="md:w-[15%] w-[50%] aspect-[1/1.2] object-contain" />
                    <h3 className="text-3xs font-mb leading-[120%] text-text-500">{curr?.title}
                      <br />
                      <span className="text-3xs font-r leading-[150%] text-text-300 md:block hidden ">{curr?.description}</span>
                    </h3>

                  </td>
                  <td className="text-3xs font-mb leading-[120%] text-text-500">$ {Number(curr?.price) * curr?.quantity!}</td>
                  <td className="text-3xs font-mb leading-[120%] text-text-500">{curr?.quantity}</td>
                  <td><button onClick={() => {
                    dispatch(removeCart(curr!));
                    removeCartFromStorage(curr!);
                  }}><GoTrash className="text-sm font-mb leading-[120%] text-text-500" /></button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className="flex flex-col bg-white sm:w-[30%] xs:w-[100%] w-[95%]  min-h-[200px] border-spacing-[20px] border-separate rounded-[5px] gap-2 shadow-md px-4 py-2">
          <h2 className='text-md font-sb text-text-500 mt-3 leading-[120%]'>Cart Total</h2>
          <table className="w-[100%]">
            <tbody>
              <tr>
                <td>Total</td>
                <td>{totalCartItemFinder(cart)}</td>
              </tr>
              <tr >
                <td className="w-[100%] h-[1px] bg-text-200 opacity-1"></td>
              </tr>
              <tr>
                <td>Sub Total</td>
                <td>${totalPriceFinder(cart)}</td>
              </tr>
              <tr>
                <td>Delivery Charge</td>
                <td>$50</td>
              </tr>
              <tr >
                <td className="w-[100%] h-[1px] bg-text-200 opacity-1"></td>
              </tr>
              <tr>
                <td>Total</td>
                <td>${totalPriceFinder(cart) + 50}</td>
              </tr>
            </tbody>
          </table>
          <button className="bg-text-300 hover:bg-text-400 text-light-400 text-3xs font-mb py-2 rounded-sm shadow-md" onClick={() => {
            alert("This Feature is not yet added.😅");
          }}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Page
