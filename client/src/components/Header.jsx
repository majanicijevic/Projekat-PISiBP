import { Button, Navbar, NavbarToggle, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa';

import React from 'react'

export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-blue-500 via-cyan-400
             to-green-500 rounded-lg text-black'>Elektronske novine</span>
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
            <Button className='w-12 h-10 sm:inline' color='gray' pill>
                <FaMoon />
            </Button>
            <Link to='/sign-in'>
                <Button color='gray' pill>
                    Prijavite se
                </Button>
            </Link>
            <NavbarToggle />
        </div>
        <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to='/'>
                        Pocetna strana
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/o-nama"} as={'div'}>
                    <Link to='/o-nama'>
                        O Nama
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
    </Navbar>
  )
}
