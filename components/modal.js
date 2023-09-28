import { useRef, useState } from "react";
import Image from "next/image";

export default function ModalContent({ onClose, onTitleEdit, title }) {
    const form = useRef(null)
    const [newTitle, setNewTitle] = useState(title); // Inicializa el estado con el título actual

    function handleSubmit(event) {
        event.preventDefault();
    
        const formData = new FormData(form.current);
        const newTitle = formData.get("newTitle");
    
        onTitleEdit(newTitle); // Envía el nuevo título al padre
        onClose();
      }

    // Manejador de cambios en el input para actualizar el estado newTitle
    const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
    };


    return (
        <div className="fixed inset-0 z-10 modal-container backdrop-blur-md">
            <div className="fixed p-4 bg-white rounded-md w-80 text-end modal top-1/2 left-1/2">
                <button onClick={onClose} className="text-end">
                    <Image src="/close.svg" alt="" width="24" height="24" />
                </button>
                <form className="flex flex-col gap-4" ref={form} action="" onSubmit={handleSubmit}>
                    <h2 className="text-lg font-bold text-center underline decoration-double text-cyan-900">{newTitle}</h2>
                    <input className="px-1 text-black bg-gray-200" autoComplete="off" type="text" name="newTitle" placeholder="Editar titulo" onChange={handleTitleChange}/>
                    <button className="p-2 text-white rounded bg-sky-600">Actualizar</button>
                </form>
            </div>
        </div>
    );
  }