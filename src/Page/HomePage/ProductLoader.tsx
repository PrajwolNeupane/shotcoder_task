import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ProductLoader() {
    return (
        <div className='flex flex-row w-[100%] h-[100vh] flex-wrap items-start justify-center md:gap-5  xs:gap-4 gap-3 md:px-[5%] px-[3%] py-[30px] bg-background'>
            <div className='flex flex-col gap-1 md:w-[220px] xs:w-[200px] w-[170px] bg-white p-4 shadow-md rounded-[5px]'>
                <Skeleton style={{ width: "100%", aspectRatio: "1/1.2" }} />
                <Skeleton count={3} />
            </div>
            <div className='flex flex-col gap-1 md:w-[220px] xs:w-[200px] w-[170px] bg-white p-4 shadow-md rounded-[5px]'>
                <Skeleton style={{ width: "100%", aspectRatio: "1/1.2" }} />
                <Skeleton count={3} />
            </div>
            <div className='flex flex-col gap-1 md:w-[220px] xs:w-[200px] w-[170px] bg-white p-4 shadow-md rounded-[5px]'>
                <Skeleton style={{ width: "100%", aspectRatio: "1/1.2" }} />
                <Skeleton count={3} />
            </div>
            <div className='flex flex-col gap-1 md:w-[220px] xs:w-[200px] w-[170px] bg-white p-4 shadow-md rounded-[5px]'>
                <Skeleton style={{ width: "100%", aspectRatio: "1/1.2" }} />
                <Skeleton count={3} />
            </div>
            <div className='flex flex-col gap-1 md:w-[220px] xs:w-[200px] w-[170px] bg-white p-4 shadow-md rounded-[5px]'>
                <Skeleton style={{ width: "100%", aspectRatio: "1/1.2" }} />
                <Skeleton count={3} />
            </div>
        </div>
    )
}

export default ProductLoader
