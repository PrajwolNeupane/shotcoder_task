import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';

interface Props {

}

let MainLayout: FC<Props> = ({ }) => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}
export default MainLayout;