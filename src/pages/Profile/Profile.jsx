import Post from "../../components/Post/Post";

function Profile(props) {

  const user = props.location.state.user;
  const posts = user.media.data.map(post => {
    return <Post key={post.id}  post={post} />
  });

  return (
    <>
      <div> Id: { user.profile.id } </div>
      <div> username: { user.profile.username } </div>
      <div> account_type: { user.profile.account_type } </div>
      <div> media_count: { user.profile.media_count } </div>
      <br/>
      {posts}
    </>
  );
}

export default Profile;
