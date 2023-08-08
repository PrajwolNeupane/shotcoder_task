import { FC } from 'react';

interface Props {

}

let NavBar: FC<Props> = ({ }) => {
    return (
        <div className='flex flex-row justify-between items-center py-5 px-[5%] bg-background'>
            <h2 className='font-b text-lg leading-[90%] text-brand-500'>
                SHOT<br /><span className='text-text-500'>SHOP</span>
            </h2>
            <div className='flex flex-row items-center py-2 px-4 gap-3 w-[35%] ml-[5%] bg-light-500 rounded-[5px]'>
                <i className="uil uil-search text-sm text-500"></i>
                <input placeholder='Search in Store' className='bg-[transparent] w-[100%] outline-none text-2xs font-r placeholder:font-r placeholder:text-2xs'/>
                <span className='shortcut-key'>CTRL</span>
                <span className='shortcut-key'>K</span>
            </div>
            <div className='flex flex-row items-center gap-[60px]'>
                <h4 className='font-mb text-2xs text-text-500'>Home</h4>
                <h4 className='font-mb text-2xs text-text-500'>About Us</h4>
                <h4 className='font-mb text-2xs text-text-500'>Contact</h4>
                <i className="uil uil-shopping-cart text-text-500 text-lg"></i>
                <div className='badge'>
                    <p className='text-3xs text-background'>1</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar;