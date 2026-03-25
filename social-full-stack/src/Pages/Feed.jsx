import { useEffect } from "react";
import { postClient } from "../client/api";

function Feed() {
  useEffect(() => {
    async function getData() {
      try {

        //get our post from database
        const response = await postClient.get("/");
        console.log(response.data);
        //save that in components state
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  return <div>feed page</div>;
}

export default Feed;
