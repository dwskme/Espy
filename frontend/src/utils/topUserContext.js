import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const TopUserContext = createContext();

export const TopUserProvider = (props) => {
    const [topusers, setTopUsers] = useState();
    const [topRater, setTopRater] = useState();
    const [topWatcher, setTopWatcher] = useState();

    useEffect(() => {
        axios.get('/api/v1/admin/users').then(function (result) {
            const users = result.data.users
            var topRater = users[0]
            var topWatcher = users[0]
            users.map((val, index) => {
                if (topRater.ratedList.length < val.ratedList.length) {
                    topRater = val
                }
                if (topWatcher.watchList.length < val.watchList.length) {
                    topWatcher = val
                }
            })
            setTopRater(topRater)
            setTopWatcher(topWatcher)
        })
    }, [])

    return (
        <TopUserContext.Provider value={{ topRater: [topRater, setTopRater], topWatcher: [topWatcher, setTopWatcher] }}>
            {props.children}
        </TopUserContext.Provider>
    )
}