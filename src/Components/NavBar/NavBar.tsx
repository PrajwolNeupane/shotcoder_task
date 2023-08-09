import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/store';

interface Props {

}

let NavBar: FC<Props> = ({ }) => {

    const {cart} = useAppSelector((state) => state.Cart);

    return (
        <div className='flex flex-col md:flex-row md:justify-between  gap-2  items-center py-5 px-[5%] bg-background sticky top-0 z-[4]'>
            <h2 className='font-b text-lg leading-[90%] text-brand-500'>
                SHOT<br /><span className='text-text-500'>SHOP</span>
            </h2>
            <div className='flex flex-row items-center py-2 px-4 gap-3 w-[100%] md:w-[35%]  md:ml-[5%] bg-light-500 rounded-[5px] shadow-md'>
                <i className="uil uil-search text-xs text-500"></i>
                <input placeholder='Search in Store' className='bg-[transparent] w-[100%] outline-none text-text-500 text-2xs font-r placeholder:font-r placeholder:text-2xs placeholder:text-text-500' />
                <span className='shortcut-key'>CTRL</span>
                <span className='shortcut-key'>K</span>
            </div>
            <div className='flex flex-row items-center lg:gap-[60px] md:gap-[30px] sm:gap-[60px] gap-[30px]'>
                <Link to={'/'}><h4 className='font-mb text-2xs text-text-500 hover:text-brand-500'>Home</h4></Link>
                <Link to={'https://www.prajwolneupane.com.np/'} target='blank'><h4 className='font-mb text-2xs text-text-500 hover:text-brand-500'>About Us</h4></Link>
                <Link to={'https://www.prajwolneupane.com.np/'} target='blank'> <h4 className='font-mb text-2xs text-text-500 hover:text-brand-500'>Contact</h4></Link>
                <Link to={'/cart'} className='relative inline-block'>
                    <i className="uil uil-shopping-cart text-text-500 text-lg hover:text-brand-500 cursor-pointer"></i>
                    <div className='badge'>
                        <p className='text-3xs text-background'>{cart.length}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;