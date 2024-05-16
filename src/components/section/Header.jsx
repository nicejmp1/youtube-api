import React from 'react'

import { headerMenus } from "../../data/header";
import { searchKeyword } from "../../data/header";
import { snsLink } from "../../data/header";

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href="/">
                    <em></em>
                    <span>musicmatch <br /><i>Youtube</i></span>
                </a>
            </h1>
            <nav className='header__menu'>
                <ul className='menu'>
                    {headerMenus.map((menu, key) => (
                        <li key={key}>
                            <Link to={menu.src}>
                                {menu.icon}<span>{menu.title}</span>
                            </Link>
                        </li>
                    ))}
                    {/* <li className='active'><a href="/"><span>Top100</span></a></li> */}
                </ul>
                <ul className='keyword'>
                    {searchKeyword.map((keyword, key) => (
                        <li key={key}>
                            <Link to={keyword.src}>{keyword.title}

                            </Link>
                        </li>
                    ))}
                    {/* <li className='active'><a href="/search/nicejpm">잔잔한</a></li> */}
                </ul>
            </nav>
            <div className='header__sns'>
                <ul>
                    {snsLink.map((sns, key) => (
                        <li key={key} >
                            <a href={sns.url} target='_blank' rel='noopener noreferrer' aria-label={sns.title}>
                                {sns.icon}
                            </a>
                        </li>
                    ))}
                    {/* <li><a href="/"></a></li> */}

                </ul>
            </div>
        </header >
    )
}

export default Header
