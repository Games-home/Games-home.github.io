// import React from 'react';
// import PropTypes from 'prop-types';
export default function Navbar (){
    return(
        <>
        <nav id="navbar">
        <div id="logo">
            <img src="resources\Sumit-Salunkhe-15-08-2024.png" alt="LOGO HERE"/>
        </div>
        <div id="ul">

            <ul>
                <li className="item"><a href="/index.html">|Home|</a></li>
                <li className="item"><a href="/src/games/games.html">|Games|</a></li>
                <li className="item"><a href="/src/pages/contact/index.html">|Contact Us|</a></li>
                <li className="item"><a href="/src/pages/github-repo/index.html">|Github-repo|</a></li>
            </ul>
        </div>
        </nav> 
        </>
    )
}
// Navbar.propType = {
//     title:  PropTypes.string.isrequired
// }

