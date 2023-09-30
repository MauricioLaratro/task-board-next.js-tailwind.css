import { useRef, useState } from "react";
import Image from "next/image";
import Comments from "./comments";

export default function ModalContent({ onClose, onTitleEdit, title, addComment, comments }) {
    const form = useRef(null)
    const formComments = useRef(null)
    const [newTitle, setNewTitle] = useState(title); // Inicializa el estado con el título actual
    const [newComment, setNewComment] = useState("");
    const [titleError, setTitleError] = useState("");
    const [currentTitle, setCurrentTitle] = useState(title);


    function handleSubmit(event) {
        event.preventDefault();
      
        const formData = new FormData(form.current);
        const newTitle = formData.get("newTitle");
      
        if (newTitle.trim() === "") {
          setTitleError("El título no puede estar vacío.");
        } else {
          setTitleError(""); // Borra cualquier mensaje de error existente.
          onTitleEdit(newTitle); // Envía el nuevo título al padre
          onClose();
        }
      }


    function handlePushComment(event) {
        event.preventDefault();

        const formCommentsData = new FormData(formComments.current);
        const newComment = formCommentsData.get('newComment')

        const trimmedNewComment = newComment.trim()
        if (trimmedNewComment !== "") {
            const comment = {
                text: newComment,
                user: {
                avatar: "/avatar.png",
                name: "Mauricio"
                },
            }
            addComment(comment);
            setNewComment("");
        }

    }

    // Manejador de cambios en el input para actualizar el estado newTitle
    const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value); // Actualiza el estado del texto del comentario
    };


    return (
        <div className="fixed inset-0 z-10 modal-container backdrop-blur-md">
            <div className="fixed w-4/6 p-4 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md text-end modal top-1/2 left-1/2">
                <button onClick={onClose} className="text-end">
                    <Image src="/close.svg" alt="" width="24" height="24" />
                </button>
                <form className="flex flex-col gap-4" ref={form} action="" onSubmit={handleSubmit}>
                    <h2 className="text-lg font-bold text-center underline decoration-double text-cyan-900">{newTitle}</h2>
                    {titleError && <p className="text-left text-red-500">{titleError}</p>}
                    <input className="px-1 text-black bg-gray-200" autoComplete="off" type="text" name="newTitle" placeholder="Editar titulo" onChange={handleTitleChange}/>
                    <button className="w-32 p-2 text-white transition-colors rounded hover:bg-sky-800 bg-sky-600">Actualizar</button>
                </form>
                <section>
                <Comments comments={comments} />
                </section>
                <form className="flex flex-col gap-4" ref={formComments} action="" onSubmit={handlePushComment}>
                    <h2 className="text-lg font-bold text-center underline decoration-double text-cyan-900"></h2>
                    <input className="px-1 text-black bg-gray-200" autoComplete="off" type="text" name="newComment" placeholder="Añadir comentario" value={newComment} onChange={handleCommentChange}/>
                    <button className="w-32 p-2 text-white transition-colors rounded hover:bg-sky-800 bg-sky-600">Comentar</button>
                </form>
            </div>
        </div>
    );
  }