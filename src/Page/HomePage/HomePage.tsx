import { FC } from 'react';
import Header from '../../Components/Header';
import StarBox from '../../Components/StarBox';

interface Props {

}

let HomePage: FC<Props> = ({ }) => {
    return (
        <>
            <Header />
            <div className='flex flex-row flex-wrap items-start h-[500px] px-[5%] py-[30px] bg-background'>
                <div className='flex flex-col gap-1 w-[220px] bg-white p-4 shadow-md rounded-[5px]'>
                    <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' className='mx-[auto] w-[160px] h-[180px] object-contain' />
                    <h4 className='font-sb text-3xs text-text-500 mt-3 leading-[120%]'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
                    <StarBox rating={5}/>
                    <h5 className='font-mb text-3xs text-text-200 '>men's clothing</h5>
                    <h3 className='text-brand-700 text-2xs font-sb'>$109.5</h3>
                </div>
            </div>
        </>
    )
}

export default HomePage;