import React, { useState } from 'react';
import './App.css';
import Form from './components/form'
import Todolist from './components/todolist';

function App() {

      const [alldata, setAlldata] = useState([]);


      const add = (singledatafromform) => {
        
        const newdata = [...alldata, singledatafromform];

        setAlldata(newdata)
        
      } 


      const clear = () =>{

              setAlldata([]);
      };

      
      
      const deleteit = id =>{

            const remainingdata = [...alldata].filter(value => value.id !== id )

            setAlldata(remainingdata)
        };

      
      
        const edit = (id, newvalue) =>{

          setAlldata(prev => prev.map(item =>(

              item.id === id ? newvalue : item
          )))
      }


  return (
    <div className="App">

      <h1>
         Make a schedule for you...
      </h1>

      <Form  getdata={add}/>

      <Todolist  
        data={alldata}
        remove={deleteit}
        clear={clear}
        edit={edit}
      />
      
    
    </div>
  );
}

export default App;
