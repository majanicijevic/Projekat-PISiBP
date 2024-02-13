import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className='group relative w-full border border-gray-300 hover:border-2 h-[380px] overflow-hidden rounded-lg sm:w-[360px]'>
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[260px] w-full  object-cover group-hover:h-[210px]'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
        <span className='italic text-sm'>{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          className='font-bold z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white text-center py-2 rounded-md m-2'
        >
          Procitaj vest
        </Link>
      </div>
    </div>
  );
}