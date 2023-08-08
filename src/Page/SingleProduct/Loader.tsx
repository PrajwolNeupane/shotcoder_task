import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SingleProductLoader = () => {
    return (
        <div className='flex sm:flex-row flex-col sm:items-start items-center bg-white w-[100%] px-[10%] py-5 gap-[50px] shadow-md rounded-[5px]'>
            <Skeleton style={{ width: "25vw", height: '300px' }}/>
            <div className='flex flex-col gap-2 items-start'>
                <Skeleton style={{ width: "45vw", height: "50px" }} />
                <Skeleton style={{ width: "45vw", height: "120px" }} />
                <Skeleton style={{ width: "45vw", height: "30px" }} />
                <Skeleton style={{ width: "45vw", height: "30px" }} />
                <Skeleton style={{ width: "45vw", height: "30px" }} />
            </div>

        </div>
    )
}

export const SimilarProductLoader = () => {
    return (
        <>
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
        </>
    )
}