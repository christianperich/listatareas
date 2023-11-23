import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import './TareasForm.css'

export function TareasForm({onSubmit}){

    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const nuevaTarea = {
            id: uuidv4(),
            tarea: input,
            completada: false
        }
    
    onSubmit(nuevaTarea);
    setInput('')
    };


    return (
        <>
           <h1 className="titulo">Lista de Tareas</h1>
            <form className="formulario" onSubmit={handleSubmit}>
                <input 
                    name="tareas-form" 
                    placeholder="Ingresa una nueva tarea" 
                    onChange={handleChange}
                    value={input}
                    required />
                <button>Agregar tarea</button>
            </form> 
        </>

        
    )
}