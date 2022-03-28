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
                <div>
                    <div className='container px-5'>
                        {
                            <>
                                <RatedList type={'Your Ratings'} data={ratedList}></RatedList>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default RatedMovies