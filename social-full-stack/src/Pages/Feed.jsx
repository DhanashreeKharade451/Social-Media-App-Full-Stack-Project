import { useEffect } from "react";
import { postClient } from "../client/api";
import Post from "../components/post";

function Feed() {
const [posts, setPosts] = useState([])

const [title, setTitle] =useState("")
const[body,setBody] = useState("")

  useEffect(() => {
    async function getData() {
      try {

        //get our post from database
        const {data} = await postClient.get("/");
       
        // save that in component's state
        setPosts(data)
        //save that in components state
      } catch (err) {
        console.log(err.response.data);
      }
    }
    getData();
  }, []);


  const handleSubmit = async (e) => {
    e.preventdefault()

    try{
      //make a post request to create the post (based off the state: title and body)
      const {data} = await postClient.post('/',{title,body})
      console.log(data)

      //add new post to our state
      setPosts([...posts,data])

      //reset the form
      setTitle('')
      setBody('')

    }catch(err){

    }
  }
  return(
    <div>
      <form>
        <h2>Leave a post here</h2>
        <label htmlFor = "title">Title</label>
        <input
        type="text"
        id="title"
        required={true}
         value={title}
         onChange={(e) => setTitle(e.target.value)}
        />
        <br/>
        <label htmlFor = "body">Body</label>
        <input
        type="body"
        id="body"
         value={body}
         onChange={(e) => setBody(e.target.value)}
        />
        <br/>

        <button>Submit</button>
      </form>

      <h1>Feed age</h1>
      {posts.map(post => <Post post = {post}/>)}
    </div>
  )
}

export default Feed;
