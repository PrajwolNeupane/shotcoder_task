import { setSearch } from "../../app/reducer/searchReducer";
import { useAppDispatch, useAppSelector } from "../../app/store"
import { useEffect, useState } from "react";


function SearchModal() {

    const dispatch = useAppDispatch();
    const { openSearch } = useAppSelector((state) => state.Search);
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        if (openSearch) {
            document.documentElement.style.overflow = 'hidden'
        } else {
            document.documentElement.style.overflow = 'auto'
        }
    }, [openSearch]);

    if (openSearch) {
        return (
            <div className="fixed top-0 z-[999] w-[100vw] h-[100vw] bg-[#302f2fc5]" id="modal" onClick={(e: any) => {
                if (e.target.id == 'modal') {
                    dispatch(setSearch(false))
                }
            }}>
                <div className="flex flex-col gap-2 absolute mx-[30vw] mt-[95px] px-5 py-3 w-[40vw] bg-[white] rounded-[5px] shadow-md">
                    <div className="flex flex-row px-3 py-1 gap-2 border-[2px] items-center border-brand-600 rounded-[5px]">
                        <i className="uil uil-search text-sm text-500 cursor-pointer"></i>
                        <input placeholder="Search on Store" className="w-[100%] text-2xs font-mb text-text-400 placeholder:text-text-100 outline-none" value={searchText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSearchText(e.target.value)
                        }} />
                        <i className="uil uil-backspace text-md text-500 cursor-pointer" onClick={() => {
                            setSearchText("");
                        }}></i>
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <div className="flex flex-row items-center gap-1">
                            <span className='shortcut-key'>
                                <i className="uil uil-arrow-up text-sm text-text-300"></i>
                            </span>
                            <span className='shortcut-key'>
                                <i className="uil uil-arrow-down text-sm text-text-300"></i>
                            </span>
                            <p className="font-mb text-3xs text-text-300">to navigate</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <span className='shortcut-key'>
                                <i className="uil uil-enter text-sm text-text-300"></i>
                            </span>
                            <p className="shortcut-key">ENTER</p>
                            <p className="font-mb text-3xs text-text-300">to select</p>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <p className="shortcut-key">ESC</p>
                            <p className="font-mb text-3xs text-text-300">to close</p>
                        </div>
                    </div>
                    <div className="group flex flex-col bg-light-600 p-2 w-[100%] rounded-[5px] cursor-pointer hover:bg-text-400">
                        <h2 className="text-2xs font-mb text-text-500 group-hover:text-light-400">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
                        <h4 className="text-3xs font-mb text-text-300 group-hover:text-light-600">men's cloting</h4>
                        <p className="text-3xs font-mb text-brand-700 group-hover:text-light-600">$109.95</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default SearchModal
