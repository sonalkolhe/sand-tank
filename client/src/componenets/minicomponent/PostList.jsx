/*
 * @format
 */

import PropTypes from "prop-types";

/** @format */
import { DrawerWithForm } from "./../login/Drawer.jsx";

function PostList({ post, toggleFormVisibility, type }) {
  if (!post) {
    return null;
  }

  return (
    <tr>
      <td
        className={`whitespace-nowrap px-4 py-2 font-bold text-xs text-gray-900 uppercase`}>
        {post.postType || "POST"}
      </td>
      <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
        {post?.author || "N/A"}
      </td>
      <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
        {new Intl.DateTimeFormat("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }).format(new Date(post.date).getTime()) || "N/A"}
      </td>
      <td className='px-4 py-2 text-gray-700 w-52 text-center'>
        {post.title && post.title.length > 30
          ? post.title.slice(0, 60) + "..."
          : post.title || "N/A"}
      </td>
      <td className='whitespace-nowrap px-4 py-2 text-gray-700'>http://...</td>
      <td className='whitespace-nowrap px-4 py-2'>
        <button
          data-post={JSON.stringify(post)}
          onClick={toggleFormVisibility}
          className='inline-block roundedpx-4 py-2 text-xs font-medium text-white '>
          <DrawerWithForm
            post={post}
            type={type}
            close={toggleFormVisibility}
          />
        </button>
      </td>
    </tr>
  );
}

// Define propTypes for your component
PostList.propTypes = {
  post: PropTypes.shape({
    postType: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
  }),
  toggleFormVisibility: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default PostList;
