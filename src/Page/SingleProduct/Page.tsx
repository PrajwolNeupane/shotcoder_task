import { FC, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useGetSingleProductMutation } from '../../app/api/singleProductApiSlice';
import { ProductInteface } from '../../Interface';
import StarBox from '../../Components/StarBox';
import { FiPlus, FiMinus } from "react-icons/fi";

let SingleProduct: FC<{}> = ({ }) => {

    const { id } = useParams();
    const [getSingleProduct, { isLoading }] = useGetSingleProductMutation();
    const [productData, setProductData] = useState<ProductInteface | null>(null);
    const [count, setCount] = useState<number>(1);

    useEffect(() => {
        const fetchSingleProduct = async () => {
            try {
                const res = await getSingleProduct(id).unwrap();
                setProductData(res)
            } catch (e) {
                console.log(e);
            }
        }
        fetchSingleProduct();
    }, [id]);

    return (
        <div className='flex flex-row w-[100%] flex-wrap items-stretch content-stretch justify-center md:gap-5  xs:gap-4 gap-3 md:px-[5%] px-[3%] py-[30px] bg-background'>
            {
                isLoading ? <></> : <div className='flex bg-white w-[100%] px-[10%] py-5 gap-[50px] shadow-md rounded-[5px]'>
                    <img src={productData?.image} className='w-[22%] object-contain' />
                    <div className='flex flex-col gap-2 items-start'>
                        <h2 className='text-md font-sb text-text-500'>{productData?.title}</h2>
                        <h3 className='text-xs font-mb text-text-300'>{productData?.category}</h3>
                        <p className='text-2xs font-mb text-text-200'>{productData?.description}</p>
                        <StarBox rating={Number(productData?.rating.rate)} />
                        <h2 className='text-md font-sb text-brand-700'>$ {productData?.price}</h2>
                        <div className='flex flex-row items-center gap-5'>
                            <button onClick={() => { setCount(count - 1) }} disabled={count == 1}>
                                <FiMinus className="text-lg text-text-500" />
                            </button>
                            <h3 className='text-lg font-sb text-text-500'>{count}</h3>
                            <button onClick={() => { setCount(count + 1) }} >
                                <FiPlus className="text-lg text-text-500" />
                            </button>
                        </div>
                        <button className='px-[8%] py-2 text-white bg-text-300 hover:bg-text-400 shadow-md rounded-[5px]'>Add to Cart</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default SingleProduct;