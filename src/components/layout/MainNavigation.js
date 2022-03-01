import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css'

function MainNavigation() {
    return <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>  {/*Prevents browser default of sending a http request and loading a new page */}
                </li>
                <li>
                    <Link to='/new-meetup'>New Meetup</Link>  {/*Prevents browser default of sending a http request and loading a new page */}
                </li>
                <li>
                    <Link to='/favorites'>Favorites</Link>  {/*Prevents browser default of sending a http request and loading a new page */}
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;