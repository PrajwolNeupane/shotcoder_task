import { FC } from 'react';
import Header from '../../Components/Header';
import StarBox from '../../Components/StarBox';
import { useAppSelector } from '../../app/store';
import { ProductInteface } from '../../Interface';

import ProductLoader from './ProductLoader';
import { Link } from 'react-router-dom';

interface Props {

}

let HomePage: FC<Props> = ({ }) => {

    const { products } = useAppSelector((state) => state.Products);


    return (
        <>
            <Header />
            {
                products.length == 0 ? <ProductLoader /> : <div className='flex flex-row w-[100%] flex-wrap items-stretch content-stretch justify-start md:gap-5  xs:gap-4 gap-3 md:px-[5%] px-[3%] py-[30px] bg-background'>
                    {
                        products?.map((curr: ProductInteface | null, indx: number) => (
                            <Link to={`product/${curr?.id}`} className='flex flex-col gap-1 md:w-[220px] xs:w-[200px] w-[170px] bg-white p-4 shadow-md rounded-[5px]' key={indx}>
                                <img src={curr?.image} className='mx-[auto] w-[90%] aspect-[1/1.2] object-contain' loading='lazy' />
                                <h4 className='font-sb text-3xs text-text-500 mt-3 leading-[120%]'>{curr?.title}</h4>
                                <StarBox rating={Number(curr?.rating.rate)} />
                                <h5 className='font-mb text-3xs text-text-200 '>{curr?.category}</h5>
                                <h3 className='text-brand-700 text-2xs font-sb'>${curr?.price}</h3>
                            </Link>
                        ))
                    }

                </div>
            }
        </>
    )
}

export default HomePage;