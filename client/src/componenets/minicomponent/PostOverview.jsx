/** @format */
import PropTypes from "prop-types";

function PostOverview({ post }) {
  const date = post
    ? new Intl.DateTimeFormat("en-in", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(Date.parse(post.date))
    : "";
  return (
    <div className='p-5  mx-auto sm:p-10 md:p-16  text-gray-700'>
      <div className='flex bg-gray-100 flex-col max-w-3xl mx-auto overflow-hidden rounded'>
        <img
          src={post.coverImage}
          alt=''
          className='w-full h-60 sm:h-96 bg-gray-500 object-cover'
        />
        <div className='p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded bg-gray-200'>
          <div className='space-y-2'>
            <a
              rel='noopener noreferrer'
              href='#'
              className='inline-block text-2xl font-semibold sm:text-3xl'>
              {post.title}
            </a>
            <div className='flex justify-between'>
              <p className='text-xs text-gray-800'>By {post.author}</p>
              <p className='text-xs text-gray-800'>By {date}</p>
            </div>
          </div>
          <div className='text-gray-600'>
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

PostOverview.propTypes = {
  post: PropTypes.object,
};

export default PostOverview;
