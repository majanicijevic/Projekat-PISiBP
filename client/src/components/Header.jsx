import { Avatar, Dropdown, Button, Navbar, NavbarToggle, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';

import React from 'react'

export default function Header() {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const { theme } = useSelector((state) => state.theme);
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-purple-500 to-sky-500
             rounded-lg text-white'>Elektronske novine</span>
        </Link>
        <form>
            <TextInput
                type='text'
                placeholder='Pretrazi...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
            <Button
                className='w-12 h-10 hidden sm:inline'
                color='gray'
                pill
                onClick={() => dispatch(toggleTheme())}>
                {theme === 'light' ? <FaSun /> : <FaMoon />}
            </Button>
            {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm font-medium truncate'>@{currentUser.username}</span>
            </Dropdown.Header>
            <Link to={'/kontrolna-tabla?tab=profile'}>
              <Dropdown.Item>Profil</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Odjavite se</Dropdown.Item>
          </Dropdown>
        ) : (
            <Link to='/sign-in'>
            <Button color='gray' pill>
                Prijavite se
            </Button>
        </Link>
        )}
            <NavbarToggle />
        </div>
        <Navbar.Collapse>
                <Navbar.Link active={path === '/'} as={'div'}>
                    <Link to='/'>
                        Pocetna strana
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/o-nama'} as={'div'}>
                    <Link to='/o-nama'>
                        O Nama
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
    </Navbar>
  )
}
