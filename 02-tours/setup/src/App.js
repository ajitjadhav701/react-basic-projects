import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour=(id)=>{
    const newTours=tours.filter((tour)=>tour.id !==id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      //console.log(response)
      const tours = await response.json(); //convert response in json format
      console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        {" "}
        <Loading />
      </main>
    );
  }

  if(tours.length===0){
    return <main>
          <div className="title">
            <h2>no tours available</h2>
            <button className="btn" onClick={()=>fetchTours()}>Refresh </button>
          </div>
          
    </main>
  }
  return (
    <main>
      <Tours removeTour={removeTour}  tours={tours}/>
    </main>
  );
}

export default App;

/**
 * 
 * What is await used for?
The await operator is used to wait for a Promise . 
It can only be used inside an async function within regular JavaScript code;
 however it can be used on its own with JavaScript modules.
 */
