import { FC, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import { useGetProductsMutation } from '../app/api/productsApiSlice';
import { useAppDispatch } from '../app/store';
import { setProducts } from '../app/reducer/productsReducer';

interface Props {

}

let MainLayout: FC<Props> = ({ }) => {

    const dispatch = useAppDispatch();
    const [getProducts, { isLoading }] = useGetProductsMutation();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        // dispatch(setSearch(false));
    }, [pathname]);

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
    }, []);

    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}
export default MainLayout;