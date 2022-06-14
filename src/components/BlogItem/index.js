import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, topic, imageUrl, avatarUrl, author} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="link-blogs">
      <div className="list-item">
        <div className="list-item-content">
          <img src={imageUrl} alt={id} className="blog-item-image" />
          <div className="blog-item-content">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="avatar-container">
              <img src={avatarUrl} alt={id} className="avatar-image" />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
