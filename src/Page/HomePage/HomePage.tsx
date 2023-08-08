import { FC, useEffect } from 'react';
import Header from '../../Components/Header';
import StarBox from '../../Components/StarBox';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { ProductInteface } from '../../Interface';
import { useGetProductsMutation } from '../../app/api/productsApiSlice';
import { setProducts } from '../../app/reducer/productsReducer';
import ProductLoader from './ProductLoader';

interface Props {

}

let HomePage: FC<Props> = ({ }) => {

    const { products } = useAppSelector((state) => state.Products);
    const [getProducts, { isLoading }] = useGetProductsMutation();
    const dispatch = useAppDispatch();

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const res = await getProducts("").unwrap();
                dispatch(setProducts(res));
            } catch (e) {
                console.log(e);
            }

        }

        fetchProducts();
    }, []);

    return (
        <>
            <Header />
            {
                isLoading ? <ProductLoader /> : <div className='flex flex-row w-[100%] flex-wrap items-stretch content-stretch justify-center md:gap-5  xs:gap-4 gap-3 md:px-[5%] px-[3%] py-[30px] bg-background'>
                    {
                        products?.map((curr: ProductInteface | null, indx: number) => (
                            <div className='flex flex-col gap-1 md:w-[220px] xs:w-[200px] w-[170px] bg-white p-4 shadow-md rounded-[5px]' key={indx}>
                                <img src={curr?.image} className='mx-[auto] w-[90%] aspect-[1/1.2] object-contain' loading='lazy' />
                                <h4 className='font-sb text-3xs text-text-500 mt-3 leading-[120%]'>{curr?.title}</h4>
                                <StarBox rating={Number(curr?.rating.rate)} />
                                <h5 className='font-mb text-3xs text-text-200 '>{curr?.category}</h5>
                                <h3 className='text-brand-700 text-2xs font-sb'>${curr?.price}</h3>
                            </div>
                        ))
                    }

                </div>
            }
        </>
    )
}

export default HomePage;