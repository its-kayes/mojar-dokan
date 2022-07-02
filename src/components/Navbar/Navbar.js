import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import UserNav from './UserNav';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Loading> </Loading>
    }

    return (
        <div>
            <div>
                {/* <h1> Hello </h1> */}
                <div class="navbar bg-base-100 border border-sky-200 rounded-lg mb-8">
                    <div class="navbar-start">
                        {
                            user ?
                                <div class="dropdown">
                                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Item 1</a></li>
                                        <li tabindex="0">
                                            <a class="justify-between">
                                                Parent
                                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                            </a>
                                            <ul class="p-2">
                                                <li><a>Submenu 1</a></li>
                                                <li><a>Submenu 2</a></li>
                                            </ul>
                                        </li>
                                        <li><a>Item 3</a></li>
                                    </ul>
                                </div>
                                :
                                <p></p>
                        }
                        {/* <Link to='home' class="btn btn-ghost normal-case text-xl">Mojar Shop </Link> */}
                        <Link to='/' href="https://flowbite.com" class="flex items-center">
                            <img src="mojar_dokan.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Mojar Dokan </span>
                        </Link>
                    </div>
                    {
                        user ?
                            <div class="navbar-center hidden lg:flex">
                                <ul class="menu menu-horizontal p-0">
                                    <Link to='/'> Food Part </Link>
                                    <Link to='/'> Vegetable Part </Link>

                                    {/* <li tabindex="0">
                                        <a>
                                            Parent
                                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul class="p-2">
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                    </li> */}
                                    <Link to='/'> Membership </Link>
                                </ul>
                            </div>
                            :
                            <p></p>

                    }
                    <div className='navbar-end flex'>
                        <UserNav> </UserNav>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;