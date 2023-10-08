import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, title, BlogCoverImage, AuthorName, AuthorImage, PublishDate, ReadTime } = blog;
    return (
        <div className='mb-5 border-4 rounded-xl mt-1 pb-4 px-10 bg-gray-400 space-y-4'>
            <div className='w-96  m-5 mx-auto'>
            <img className='pb-0 border-2 rounded-xl' src={BlogCoverImage} alt={`Cover picture of the title ${title}`} />
            </div>
            <div className='flex justify-between mb-4 px-10'>
                <div className='flex'>
                    <img className='w-14 rounded-xl' src={AuthorImage} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl text-green-800'>{AuthorName}</h3>
                        <p className='text-green-700'>{PublishDate}</p>
                    </div>
                </div>
                <div >
                    <span className='text-green-700'>{ReadTime} min read</span>
                    <button 
                        onClick={() => handleAddToBookmark(blog)}
                        className='ml-4 text-3xl  pt-3  text-green-800'
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <hr />
            <div className='flex justify-between mb-4 px-10'>
            <h2 className="text-4xl font-semibold text-green-700">{title}</h2>
            
            <button
                onClick={() => handleMarkAsRead(id, ReadTime)}
                className='text-green-800 font-bold text-xl '
            >Mark As Read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;