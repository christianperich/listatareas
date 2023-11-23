import './App.css'
import { TareasForm } from './components/TareasForm'
import { Tareas } from './components/Tareas'
import { useState, useEffect } from 'react'


function App() {

  const storedTareas = JSON.parse(localStorage.getItem('tareas')) || []; 
  const [tareas, setTareas] = useState(storedTareas);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (nuevaTarea) => {
    setTareas([nuevaTarea, ...tareas])
  }

  const eliminarTarea = (id) => {
    const tareasTemp = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasTemp)
  }

  return (
    <>
      
      <TareasForm onSubmit={agregarTarea}/>
      <Tareas 
        tareas={tareas}
        eliminarTarea={eliminarTarea} />
      
      
    </>
  )
}

export default App
