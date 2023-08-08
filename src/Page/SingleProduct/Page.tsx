import { FC ,useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useGetSingleProductMutation } from '../../app/api/singleProductApiSlice';
import { ProductInteface } from '../../Interface';

let SingleProduct: FC<{}> = ({ }) => {

    const { id } = useParams();
    const [getSingleProduct, { isLoading }] = useGetSingleProductMutation();
    const [productData, setProductData] = useState<ProductInteface | null>(null);
    const [count, setCount] = useState<number>(1);

    useEffect(() => {
        const fetchSingleProduct = async () => {
            try {
                const res = await getSingleProduct(id).unwrap();
                setProductData(res)
            } catch (e) {
                console.log(e);
            }
        }
        fetchSingleProduct();
    }, [id]);

    return (
        <>
        </>
    )
}

export default SingleProduct;