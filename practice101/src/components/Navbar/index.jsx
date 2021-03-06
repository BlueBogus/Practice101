import React from 'react';
import styles from './index.module.scss';
import {
    Link
} from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { shoppingCart } from 'react-icons-kit/fa/shoppingCart';

const links = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Store",
        href: "/catalog"
    },
    {
        title: "Sign In",
        href: "/login"
    }
]

const Navbar = () => {
    const LinksView = links.map(link =>
        <li key={link.title.toLowerCase()}>
            <div className={styles.linkBackground}>
                <Link to={link.href} className={styles.navLink}>{link.title}</Link>
            </div>        
        </li>
    )

    return (
        <div className={styles.Navbar}>
            <div className={styles.navLeft}>
                <div className={styles.logoText}>
                    <p>Islewalk</p>
                </div>
                <ul>
                    {LinksView}
                </ul>
            </div>
            <div className={styles.navCart}>
                <Link to="/cart"><Icon size={30} icon={shoppingCart} /></Link>
                <span className={styles.itemCount}>3</span>
            </div>
        </div>
    )
}

export default Navbar;
