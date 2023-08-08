import { FC, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';

interface Props {

}

let MainLayout: FC<Props> = ({ }) => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        // dispatch(setSearch(false));
    }, [pathname]);


    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}
export default MainLayout;