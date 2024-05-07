import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Maximilian" body="React.js is awesome!" />
        <Post author="Manuel" body="React.js is awesome." />
      </ul>
    </>
  );
}

export default PostsList;