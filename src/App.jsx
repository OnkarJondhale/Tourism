import { useState } from 'react'
import './App.css'
import DataObject from './data.js'
import Card from './Components/Card.jsx'
import Refresh from './Components/Refresh.jsx'

function App() {

  const [data,setData] = useState(DataObject); 
  
  
  function removeCard(id)
  {
      const newTours = data.filter((it)=>{
        return (it.id!==id)
      });
      setData(newTours)
  }


  function Bookmark(name)
  {
   const X = window.scrollX;
   const Y = window.scrollY;

    let div = document.createElement('div');
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    let h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(`${name}`));
    h1.style.marginRight = "0.5rem";
    div.appendChild(h1);
    h1.style.fontSize = "1.5rem";
    h1.style.color = "red";
    div.appendChild(document.createTextNode("is added to Favourites"));
    div.style.position = "absolute";
    div.style.top = "5rem";
    div.style.right = "5rem";
    div.style.color = "white";
    div.style.padding = "1rem";
    div.style.border = "2px solid white";
    document.body.appendChild(div);
    setTimeout(()=>{
      document.body.removeChild(div);
    },2000);
  }
  
  return (
    <>
    <div className='h-[300vh] w-full bg-gray-800'>

      <header className='h-[10rem] w-full flex justify-center items-center'>

        <nav className='h-2/3 w-[20rem] border-white border-2 border-dashed text-center content-center text-3xl font-bold text-white'>
          Plan With Love ❤️
        </nav>

      </header>

      <main className='h-2/3 w-full flex justify-center flex-wrap mt-10'>

      { 
          (data.length===0)
          ?
          <Refresh> </Refresh>
          :
          data.map((tour)=>{
            return <Card key={tour.id}  {...tour} removeCard = {removeCard} Bookmark = {Bookmark}></Card>
          })
      }

      </main>

    </div>
    </>
  )
}

export default App
