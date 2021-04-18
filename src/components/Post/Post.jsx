import  "./Post.css";

function Post (props) {

  return (
    <>
      <div> id: { props.post.id } </div>
      <div> media_type: { props.post.media_type } </div>
      <div> timestamp: { props.post.timestamp } </div>
      <div> <img src={ props.post.media_url } alt=""/> </div>
      <div> { props.post.caption } </div>
    </>
  )
}

export default Post;