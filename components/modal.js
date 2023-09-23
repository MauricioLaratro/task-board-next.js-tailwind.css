import { useRef } from "react";

export default function ModalContent({ onClose }) {
    const form = useRef(null)
    console.log({ form })

    function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(form.current)
        console.log(formData.get('newTitle'))
    }

    return (
        <div className="fixed inset-0 z-10 modal-container backdrop-blur-md">
            <div className="fixed modal top-1/2 left-1/2">
                <form ref={form} action="" onSubmit={handleSubmit}>
                    <input type="text" name="newTitle" placeholder="Editar titulo"/>
                    <button className="p-2 text-white rounded bg-sky-600">Actualizar</button>
                </form>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
  }