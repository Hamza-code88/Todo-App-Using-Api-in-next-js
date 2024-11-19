
"use client"
import React, {  useState, useEffect }  from "react";

const App = () => {
 
  const [mytodo, setMyTodo] = useState([])
  const [newTodo, setNewTodo] = useState("")


  useEffect(() => {
    const getTodo = async () =>{
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const todoData = await response.json()
      setMyTodo(todoData);
      
    }
    getTodo();

  }, [])


  const handleDelete = (id) => {
    const updateTodos = mytodo.filter((todo) => todo.id !== id);
    setMyTodo(updateTodos);
  }

const handleInput = (e) =>{
  setNewTodo(e.target.value)
}

const handleAddTodo = () =>{
  if (newTodo.trim() !== "") {
    const newtod = {
      id: mytodo.length + 1,
      title: newTodo,
     
    }
    setMyTodo([newtod, ...mytodo])
    setNewTodo("")
  }
}
  

  return (
   
    
    <>
    <main className='w-full bg-zinc-800  flex flex-col items-center justify-between  '>
    <div className='w-full m-10 text-center'>
      <input className='w-6/12 h-10 outline-none p-2 rounded text-xl  font-bold' type="text" value={newTodo} onChange={handleInput} />
      <button className='px-6 py-2 bg-white m-5 rounded' onClick={handleAddTodo}>Add New</button>
    </div>
    <div className='w-full  flex justify-evenly items-center flex-col text-left'>
    {
      mytodo.map((e) => (
        <div className='bg-zinc-300 w-6/12 m-5 flex justify-around items-center p-5 text-lg rounded' key={e.id}>
          <h3>{e.title}</h3>
          <button className='bg-white px-6 py-2 rounded font-bold ' onClick={() => handleDelete(e.id)}>Delete</button>
        </div>
      ))
    }
    </div>
    </main>
    
    
    
    </>
  );
};

export default App;

