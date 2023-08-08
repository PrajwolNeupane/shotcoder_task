import { FC } from 'react';
import Header from '../../Components/Header';
import StarBox from '../../Components/StarBox';
import { useAppSelector } from '../../app/store';
import { ProductInteface } from '../../Interface';

interface Props {

}

let HomePage: FC<Props> = ({ }) => {

    const { products } = useAppSelector((state) => state.Products);

    return (
        <>
            <Header />
            <div className='flex flex-row flex-wrap items-stretch content-stretch justify-center gap-5 px-[5%] py-[30px] bg-background'>
                {
                    products?.map((curr: ProductInteface | null, indx: number) => (
                        <div className='flex flex-col gap-1 w-[220px] bg-white p-4 shadow-md rounded-[5px]' key={indx}>
                            <img src={curr?.image} className='mx-[auto] w-[160px] h-[180px] object-contain' loading='lazy'/>
                            <h4 className='font-sb text-3xs text-text-500 mt-3 leading-[120%]'>{curr?.title}</h4>
                            <StarBox rating={5} />
                            <h5 className='font-mb text-3xs text-text-200 '>{curr?.category}</h5>
                            <h3 className='text-brand-700 text-2xs font-sb'>$109.5</h3>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default HomePage;