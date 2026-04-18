import './App.css'
import { useState } from 'react';   // ✅ FIX 1
import {Post,Ppost} from './post';
import Toggle from './dynamic';
import Clock from './clock';
import {Botton,Todos} from './button'


function App() {
  const [post, setpost] = useState([]);

  function add() {
    setpost([
      ...post,
      {
        name: "Aditya",
        followers: 100,
        time: "2hr ago",
        content: "This is my first post",
        image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
      }
    ]);
  }

  return (
    <div style={{ backgroundColor: '#CEDBE0', height: '100vh', padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>

          <button onClick={add}>Add Post</button>

          <br /><br />

          {post.map((item, index) => (
            <Post
              key={index}
              name={item.name}
              folwers={item.followers}
              time={item.time}
              content={item.content}
              image={item.image}
            />
          ))}

        {/* <Clock /> */}
        <Ppost>
          Hello, World!
        </Ppost>
        <Ppost>
          <div>
            <input type="text" />
            <button>Submit</button>
          </div>
        </Ppost>
        <Todos key={1} tittle="My Todo" done={true} />
        <Todos key={2} tittle="Another Todo" done={false} />
        <Botton/>
        </div>
      </div>
    </div>
  )
}

export default App;