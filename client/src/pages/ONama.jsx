import PostCard from '../components/PostCard';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ONama() {
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div className='min-h-screen flex'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            O Nama
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Dobrodosli na nasu stranicu "Elektronske novine". 
            Elektronske novine predstavljaju most izmedju tradicionalnog novinarstva i savremenog doba, 
            gde se svakodnevno posvecujemo istrazivanju, informisanju i povezivanju sa nasom citalackom zajednicom.
            </p>

            <p>
            Naša misija je pruziti vam svez, relevantan i temeljan uvid u svet oko nas. 
            Svesni smo brzine kojom se desavaju dogadjaji, i stoga, nas tim novinara radi 
            neumorno kako bi vam obezbedio najnovije vesti iz oblasti politike, kulture, 
            tehnologije i mnogih drugih tema.
            </p>

            <p>
            Hvala vam sto ste deo nase elektronske novinarske avanture. 
            Nastavite pratiti sa nama, jer obecavamo da cemo i dalje donositi intrigantne price, 
            analize i osvetljavati razlicite aspekte sveta oko nas.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center mb-5 mt-5'>
          <h1 className='text-xl mt-5'>Procitaj najnovije vesti</h1>
          <div className='flex gap-5 mt-5 justify-center'>
            {recentPosts &&
              recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
          </div>
      </div>
      </div>
    </div>
  );
}
