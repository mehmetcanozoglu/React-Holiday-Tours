import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';


function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  let removeTour = (id) => {
    let newtours = tours.filter((tour) => tour.id !== id)
    setTours(newtours)
  }

 let fetchTours = async ()=> {
  setLoading(true)
  try {
    let response = await fetch(url)
    let tours = await response.json()
    setLoading(false)
    setTours(tours)
    console.log(tours);
  } catch (error) {
    setLoading(false)
    console.log(error);
  }
 }

 useEffect(() => {
  fetchTours()
 },[])

 if(loading){
  return(
    <Loading/>
  )
 }
 if(tours.length === 0){
  return(
    <main>
     <h4>No tours</h4>
     <button onClick={() => fetchTours()}>Refresh</button>
    </main>
  )
 }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;