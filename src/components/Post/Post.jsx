import  "./Post.css";

function Post (props) {

  return (
    <>
    <div className="card wrapper-post">
      <div className="image"> 
        <img src={ props.post.media_url } alt=""/> 
      </div>
      <div className="content">
        <div className="meta" > { new Date(props.post.timestamp).toLocaleDateString() } </div>
        <div className="description" > { props.post.caption } </div>
      </div>
    </div>
    </>
  )
}

export default Post;