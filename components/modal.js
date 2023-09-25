import { useRef } from "react";
import Image from "next/image";

export default function ModalContent({ onClose, onTitleEdit  }) {
    const form = useRef(null)

    function handleSubmit(event) {
        event.preventDefault();
    
        const formData = new FormData(form.current);
        const newTitle = formData.get("newTitle");
    
        onTitleEdit(newTitle); // Envía el nuevo título al padre
        onClose();
      }

    return (
        <div className="fixed inset-0 z-10 modal-container backdrop-blur-md">
            <div className="fixed p-4 bg-white rounded-md w-80 text-end modal top-1/2 left-1/2">
                <button onClick={onClose} className="text-end">
                    <Image src="/close.svg" alt="" width="24" height="24" />
                </button>
                <form className="flex flex-col gap-4" ref={form} action="" onSubmit={handleSubmit}>
                    <input className="px-1 text-black bg-gray-200" type="text" name="newTitle" placeholder="Editar titulo"/>
                    <button className="p-2 text-white rounded bg-sky-600">Actualizar</button>
                </form>
            </div>
        </div>
    );
  }