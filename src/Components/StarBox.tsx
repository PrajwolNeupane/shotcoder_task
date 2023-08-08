import { FaStar, FaStarHalfStroke } from "react-icons/fa6"

function StarBox({ rating }: { rating: number }) {

    if (rating >= 5) {
        return (
            <div className="flex flex-row gap-1">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
            </div>
        )
    }
    else if (rating >= 4.5) {
        return (
            <div className="flex flex-row gap-1">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStarHalfStroke className="star" />
            </div>
        )
    }


}

export default StarBox
