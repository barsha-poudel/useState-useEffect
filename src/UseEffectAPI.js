import { useEffect, useState } from "react";
// import UseEffectChild  from './UseEffectChild';
const useEffectAPI = () => {
  const [posts, setDatas] = useState();
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const data = await response.json()
    // console.log(data);
    // setDatas(data);
    return response.json();
  };
  useEffect(() => {
    fetchData()
      .then((data) => {
        setDatas(data) ;
      })
  }, []);
  console.log(posts);
  return (
    <div className="App">
      {posts && (
        posts.map (post =>(
        <div>
          <h1>
            {post.id} </h1>
            <h2>
            {post.title}</h2>
          <p>{post.body}</p>
        </div>
        ))
      )}
    </div>
  );
};
export default useEffectAPI;
