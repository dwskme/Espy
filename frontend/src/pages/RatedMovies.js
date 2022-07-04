import React, { useContext } from 'react';
import { UserContext } from '../utils/userContext';
import WatchList from '../components/layout/WatchList';
import NavBar from '../components/layout/NavBar';
import RatedList from '../components/layout/RatedList';
import SideBar from '../components/layout/SideBar';

const RatedMovies = () => {

    const [user, setUser] = useContext(UserContext);

    const ratedList = user?.ratedList;

    console.log(ratedList)

    return (
        <>
            <NavBar></NavBar>
            <div className='d-flex'>
                <div className='nav-wrapper'>
                    <SideBar tab='rated'></SideBar>
                </div>
                <div className='container-fluid'>
                    {
                        <>
                            <RatedList type={'Your Ratings'} data={ratedList}></RatedList>
                        </>
                    }

                </div>
            </div>
        </>
    )
}

export default RatedMovies