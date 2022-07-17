import React, { useState } from 'react';
import './App.css';


interface Task{
  name:string;
  description:string;
  status:number
}


function App() {
  const [tareas,setTareas] = useState<Task[]>([])
  const [tareasDone,setTareasDone] = useState<Task[]>([])
  const [titleTarea,setTitleTarea] = useState("");
  const [descriptionTarea,setDescriptionTarea] = useState("");


  const nuevaTarea = () =>{
    setTareas([...tareas,{name:titleTarea, description:descriptionTarea, status:0} as Task])
    setTitleTarea("")
    setDescriptionTarea("")
  }
  return (
    <div className="App">
      <header className="App-header">

      </header>
        <h5>Agregar Tarea</h5>
        <div>
        <input placeholder='titulo' onChange={t=>setTitleTarea(t.target.value)} value={titleTarea}></input>
        <input placeholder='descripcion' onChange={t=>setDescriptionTarea(t.target.value)} value={descriptionTarea}></input>
        <button onClick={()=>{ nuevaTarea()}}>Agregar</button>
        </div>
        <h2>Tareas</h2>
        <div>
          { tareas.map ( (t,k) =>
          <div className='tareas-card' key={k}>
            <h4  className='tareas-title'>{t.name}</h4>
            <p>{t.description}</p>
            <p>{t.status?"PENDIENTE":"COMPLETA"}</p>
            <button onClick={()=>{
              setTareas(tareas.filter(nt=>nt!=t))
              setTareasDone([...tareasDone,t]);
              }}>Completar</button>
          </div>)}
        </div>
        <h2>Tareas Completas</h2>
        <div>
          
          {tareasDone.map( (t, k)=><div>
            <div className='tareas-card' key={k} >
            <h4  className='tareas-title'>{t.name}</h4>
            <p>{t.description}</p>
            <p >{t.status?"PENDIENTE":"COMPLETA"}</p>
          </div>
          </div>)}
        </div>


    </div>
  );
}

export default App;
