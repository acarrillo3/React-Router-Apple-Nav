import React from 'react';
import { Link } from 'react-router-dom';


function Nav(props) {
    console.log(props);
    const items = ['Apple, Inc', 'Mac', 'iPad', 'Watch', 'TV', 'Music', 'Support']; /*an array to map tru to optain our nav titles*/

    return (
        <ul>
            {items.map((item, index) => (
                <li>
                    <Link key={index} to={`/${item}`}>{item}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Nav;