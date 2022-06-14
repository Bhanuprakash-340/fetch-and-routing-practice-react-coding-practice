import {Component} from 'react'

import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    // console.log(data)
    const formattedData = data.map(eachBlog => ({
      id: eachBlog.id,
      author: eachBlog.author,
      title: eachBlog.title,
      topic: eachBlog.topic,
      imageUrl: eachBlog.image_url,
      avatarUrl: eachBlog.avatar_url,
    }))
    this.setState({blogList: formattedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    // console.log(blogList)

    return isLoading ? (
      <div testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="blog-list-container">
        {blogList.map(each => (
          <BlogItem blogDetails={each} key={each.id} />
        ))}
      </div>
    )

    //   <div className="blog-list-container">
    //     {blogList.map(each => (
    //       <BlogItem blogDetails={each} key={each.id} />
    //     ))}
    //   </div>
  }
}

export default BlogList
