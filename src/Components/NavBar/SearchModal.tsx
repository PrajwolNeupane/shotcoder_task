import { setSearch } from "../../app/reducer/searchReducer";
import { useAppDispatch, useAppSelector } from "../../app/store"
import { useEffect } from "react";


function SearchModal() {

    const dispatch = useAppDispatch();
    const { openSearch } = useAppSelector((state) => state.Search);

    useEffect(() => {
        if (openSearch) {
            document.documentElement.style.overflow = 'hidden'
        } else {
            document.documentElement.style.overflow = 'auto'
        }
    }, [openSearch]);

    if (openSearch) {
        return (
            <div className="fixed top-0 z-[999] w-[100vw] h-[100vw] bg-[#302f2f85]" id="modal" onClick={(e: any) => {
                if (e.target.id == 'modal') {
                    dispatch(setSearch(false))
                }
            }}>
                <div className="flex flex-col absolute mx-[30vw] mt-[95px] px-5 py-3 w-[40vw] bg-[white] rounded-[5px]">
                    <div className="flex flex-row px-3 py-1 gap-2 border-[2px] items-center border-brand-600 rounded-[5px]">
                        <i className="uil uil-search text-sm text-500 cursor-pointer"></i>
                        <input placeholder="Search on Store" className="w-[100%] text-2xs font-mb text-text-400 placeholder:text-text-100 outline-none" />
                        <i className="uil uil-bars text-md text-500 cursor-pointer"></i>
                        <i className="uil uil-backspace text-md text-500 cursor-pointer"></i>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default SearchModal
