import { useEffect, useState } from "react";
import { postClient } from "../client/api";
import Post from "../components/post";


function Feed() {

  const [posts, setPosts] = useState([]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
 // console.log(posts,"posts");

  useEffect(() => {
    async function getData() {
      try {
        //get our post from database
        const { data } = await postClient.get("/");

        // save that in component's state
        setPosts(data);
        //save that in components state
      } catch (err) {
        console.log(err.response.data);
      }
    }
    getData();
  }, []);

  async function handleSubmit(e){
    e.preventDefault();
console.log(title,body)

    try {
      //make a post request to create the post (based off the state: title and body)
      const { data } = await postClient.post("/", { title, body });
      console.log(data);

      //add new post to our state
      setPosts([data, ...posts]);

      //reset the form
      setTitle('');
      setBody('');

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Feed Page</h1>
      
      <form onSubmit={handleSubmit}>
        <h2>Leave a post here</h2>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          required={true}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="body">Body</label>
        <textarea
          type="text"
          required={true}
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />

        <button>Submit</button>
      </form>

      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Feed;
