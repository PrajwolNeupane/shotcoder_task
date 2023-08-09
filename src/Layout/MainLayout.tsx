import { FC, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import { useAppDispatch } from '../app/store';
import { useGetProductsMutation } from '../app/api/productsApiSlice';
import { setProducts } from '../app/reducer/productsReducer';
import { getCartFromStorage } from '../app/api/cartSlice';
import { setCart } from '../app/reducer/cartReducer';

interface Props {

}

let MainLayout: FC<Props> = ({ }) => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        // dispatch(setSearch(false));
    }, [pathname]);

    const [getProducts] = useGetProductsMutation();
    const dispatch = useAppDispatch();

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const res = await getProducts("").unwrap();
                dispatch(setProducts(res));
            } catch (e) {
                console.log(e);
            }

        }
        fetchProducts();
        dispatch(setCart(getCartFromStorage()));
    }, []);


    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}
export default MainLayout;