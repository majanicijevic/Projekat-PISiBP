import { Sidebar } from 'flowbite-react';
import { HiOutlineUserCircle, HiOutlineLogout, HiUserGroup, HiAnnotation } from 'react-icons/hi';
import { HiDocumentText } from "react-icons/hi2";
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function DashSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
      <Sidebar.ItemGroup className='flex flex-col gap-1'>
          <Link to='/kontrolna-tabla?tab=profile'>
            <Sidebar.Item
              active={tab === 'profile'}
              icon={HiOutlineUserCircle}
              label={currentUser.isNovinar ? 'Novinar' : 'Korisnik'}
              labelColor='dark'
              as='div'
            >
              Profil
            </Sidebar.Item>
          </Link>
          {currentUser.isNovinar && (
            <Link to='/kontrolna-tabla?tab=posts'>
              <Sidebar.Item
                active={tab === 'posts'}
                icon={HiDocumentText}
                as='div'
              >
                Arhiva vesti
              </Sidebar.Item>
            </Link>
          )}
          {currentUser.isNovinar && (
            <>
            <Link to='/kontrolna-tabla?tab=users'>
              <Sidebar.Item
                active={tab === 'users'}
                icon={HiUserGroup}
                as='div'
              >
                Korisnici
              </Sidebar.Item>
            </Link>
            <Link to='/kontrolna-tabla?tab=comments'>
              <Sidebar.Item
                active={tab === 'comments'}
                icon={HiAnnotation}
                as='div'
              >
                Komentari
              </Sidebar.Item>
            </Link>
          </>
          )}
          <Sidebar.Item
            icon={HiOutlineLogout}
            className='cursor-pointer'
            onClick={handleSignout}
          >
            Odjavite se
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}