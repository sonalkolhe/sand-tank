/** @format */
import { Link } from "react-router-dom";

function post({ post }) {
  const date = post
    ? new Intl.DateTimeFormat("en-in", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(Date.parse(post.date))
    : "";
  return (
    <div>
      <article className='overflow-hidden rounded-lg shadow transition bg-white hover:shadow-lg'>
        <img
          alt='Office'
          src={post.coverImage}
          className='h-56 w-full object-contain'
        />

        <div className='bg-white p-4 sm:p-6'>
          {post && post.date && (
            <time dateTime='2022-10-10' className='block text-xs text-gray-500'>
              {date}
            </time>
          )}

          <Link to={`/works/${post.slug}`}>
            <h3 className='mt-0.5 text-lg text-gray-900'>{post.title}</h3>
          </Link>

          {post.assignedDate && (
            <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
              Scheduled on 📅 {post.assignedDate}
            </p>
          )}

          <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
            {post.content}
          </p>
        </div>
      </article>
    </div>
  );
}

export default post;
