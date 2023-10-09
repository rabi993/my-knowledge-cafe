
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'
import './Bookmarks.css';

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    
        
    <div  className="md:w-1/4  ml-4 mt-2 pt-4 bookM border-2 rounded-xl ">
            <div>
                <h3 className="text-4xl text-center pb-5 text-green-700"> Spent Time: <span className='text-green-800 font-semibold bg-gray-300 rounded-3xl px-2'>{readingTime}</span></h3>
            </div>
            <hr className=' py-1 bg-slate-50'/>
            
            <div className='pt-4 text-center'>
            <h2 className="text-3xl text-center  text-green-700">Bookmarked : <span className='text-green-800 font-semibold bg-gray-300 rounded-3xl px-2'>{bookmarks.length}</span></h2>
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