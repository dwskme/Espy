import React, { useContext } from 'react';
import { UserContext } from '../utils/userContext';
import WatchList from '../components/layout/WatchList';
import NavBar from '../components/layout/NavBar';
import SideBar from '../components/layout/SideBar';


const WatchLater = () => {

    const [user, setUser] = useContext(UserContext);

    const watchList = user?.watchList;

    return (
        <>
            <NavBar></NavBar>
            <div className='d-flex'>
                <div className='nav-wrapper'>
                    <SideBar tab="later"></SideBar>
                </div>



                <div className='container-fluid'>
                    {
                        <>
                            <WatchList type={'My Lists'} data={watchList}></WatchList>
                        </>
                    }

                </div>


            </div>

        </>
    )
}

export default WatchLater