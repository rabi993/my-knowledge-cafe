
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'
import './Bookmarks.css';

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    
        
    <div  className="md:w-1/4  ml-4 mt-2 pt-4 bookM border-2">
            <div>
                <h3 className="text-4xl text-center pb-2">Read Time: {readingTime}</h3>
            </div>
            <hr className=' py-1 bg-slate-50'/>
            <div className='pt-10 text-center'>
            <h2 className="text-3xl text-center ">Bookmarked : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark  key={idx} bookmark={bookmark}></Bookmark> )
            }
            </div>
        </div>
    
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks