import React,{useState,useEffect,useRef} from "react"

function App() {
  const[tasks,setTasks]=useState([])
  const[cursor,setCursor]=useState(null)
  const [loading,setLoading]=useState(false)
  const [hasMore,setHasMore]=useState(true)

  const fetchTasks=async()=>{
    if(loading|| !hasMore) return
    setLoading(true)

    let url=`https://paginatoin.onrender.com/api/gettasks`
    if(cursor!==null) url+=`/?cursor=${cursor}`

    const response=await fetch(url)
    const data=await response.json()

    if(data?.data.length){
      setTasks((prev)=>[...prev,...data.data])
      setCursor(data.nextCursor||null)
      setHasMore(!!data.nextCursor)
  }else{
    setHasMore(false)
  }
    setLoading(false)
  };

  const handleSubmit=async()=>{
    if (!hasMore || loading) return;
    fetchTasks()
  }
  useEffect(()=>{
    const handleScroll=()=>{
      if (loading || !hasMore) return;
      const bottom=
      window.innerHeight+document.documentElement.scrollTop>=
      document.documentElement.offsetHeight-10

      if(bottom && cursor){
        fetchTasks()
      }
    }
    if (cursor) {
      window.addEventListener("scroll", handleScroll);
    }
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[hasMore,cursor,loading])
  return (
   <div>
    <h1>Task list</h1>
    {tasks.map((task)=>(
      <div key={task.id}>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <h5>{task.status?"Done":"Pending"}</h5>
      
      </div>
    ))}
   { !loading && hasMore && <button onClick={handleSubmit}>Fetch</button>}
    {loading &&!hasMore&& <p>Loading.. </p>}
    
   </div>
  )
}

export default App
