import type { NextPage } from 'next';
import { useState } from 'react';
import { io } from 'socket.io-client';


const socket = io('http://localhost:8000', { transports: ['websocket'] })
const Home: NextPage = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);

  const handlePost = (e) => {
    socket.emit("teste", { post: name })
  }
  socket.on("escuta", (data) => {
    setList([...list, data])
  })

  return (
    <>
      <div>
        Message: <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={handlePost}>Post</button>
      </div>
      <div>
        {list.map((msg) => (
          <li key="msg.post">{msg.post}</li>
        ))}
      </div>
    </>
  )
}

export default Home
