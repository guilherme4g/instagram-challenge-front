import Post from "../../components/Post/Post";

import './Profile.css'

function Profile(props) {

  const user = props.location.state.user;
  const posts = user.media.map(post => {
    return <Post key={post.id}  post={post} />
  });

  return (
    <>
    <div className="wrapper-profile">
    <h1 class="ui header"> { user.profile.username } </h1>
      <div> Quantidade de postagens: { user.profile.media_count } </div>
      <br/>
      {posts}
    </div>
    </>
  );
}

export default Profile;
