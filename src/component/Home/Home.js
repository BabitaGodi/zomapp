import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';
import Header from '../../Header';

const Home = (props) => {
    console.log(">>>porps in home>>",props)
    return(
        <div>
            <Header/>
            <Search/>
            <QuickSearch/>
        </div>
    )
}

export default Home;