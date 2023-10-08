import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, title, BlogCoverImage, AuthorName, AuthorImage, PublishDate, ReadTime } = blog;
    return (
        <div className='mb-5 border-4 rounded pb-4 px-10 bg-gray-400 space-y-4'>
            <div className='w-96  m-5 mx-auto'>
            <img className='pb-0' src={BlogCoverImage} alt={`Cover picture of the title ${title}`} />
            </div>
            <div className='flex justify-between mb-4 px-10'>
                <div className='flex'>
                    <img className='w-14' src={AuthorImage} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{AuthorName}</h3>
                        <p>{PublishDate}</p>
                    </div>
                </div>
                <div>
                    <span>{ReadTime} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className='ml-2 text-2xl text-red-600'
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            
            <button
                onClick={() => handleMarkAsRead(id, ReadTime)}
                className='text-purple-800 font-bold underline border-1'
            >Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;