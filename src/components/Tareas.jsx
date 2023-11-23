import './Tareas.css'
import { MdDeleteForever } from "react-icons/md";

export function Tareas({tareas, eliminarTarea}){

    const handleDelete = (id) => {
        eliminarTarea(id)
    }

    return (
        <>
            <ul className='tareas'>
                {tareas.map((tarea) => 
                    <li key={tarea.id} className="tarea">
                        {tarea.tarea}
                        <MdDeleteForever className='tarea-btn' onClick={()=>handleDelete(tarea.id)}/>
                    </li>
                )}
            </ul>
        </>
        
    )
}