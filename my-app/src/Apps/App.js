import React from 'react';
import Card from '../Components/Card';
import Nin2 from '../Components/Card2';
import Data from '../Data.json';
import Rendering from '../conditonalRendering/Index';
import EventHandler from '../EventHandler/Index';


function App() {

  return <div>
          <h1 className="headingStyle">Congratultions to my first react apps.</h1>
          {Data.map((item, index) => <Card key = {index} htxt={item.title} dtxt={item.desc} />)}
          <Nin2 />
          <Rendering />
          <EventHandler />
          
        </div>
}
export default App;