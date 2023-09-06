// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateThumb} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const updateImage = () => {
    updateThumb(id)
  }
  return (
    <li className="list-container">
      <button className="btn" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumb-image"
          onClick={updateImage}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
