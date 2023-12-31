import Image from "next/image";
import PortalExample from "./portal"
import { useState, useEffect } from "react";
import Edit from "./icon/edit";
import Comment from "./icon/comment";

function Card({ title, user, comments: initialComments = [], id, cardId, setDragged, listId, updateCardTitle }) {
  // Determina la clase de sombra en función del listId
  let shadowClass = '';

  switch (listId) {
    case 'todoList':
      shadowClass = 'todo-shadow'; // Aplica la clase de sombra para la lista "TODO"
      break;
    case 'inProgressList':
      shadowClass = 'inprogress-shadow'; // Aplica la clase de sombra para la lista "In Progress"
      break;
    case 'doneList':
      shadowClass = 'done-shadow'; // Aplica la clase de sombra para la lista "Done"
      break;
    default:
      break;
  }

  function handleDragStart(event) {
    setDragged({
      data: {
        title,
        user,
        comments,
        id,
      },
      list: listId
    });
  }

  const [editedTitle, setEditedTitle] = useState(title)
  

  // Función para manejar la edición del título
  const handleTitleEdit = (newTitle) => {
    setEditedTitle(newTitle);
  };

  // Cuando se actualiza el título editado, llama a la función para actualizar el título en el estado global
  useEffect(() => {
    updateCardTitle(listId, cardId, editedTitle);
  }, [editedTitle]);


  const [comments, setComments] = useState(initialComments);
  const addComment = (comment) => {
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={`shadow flex flex-col gap-4 p-2 text-gray-900 bg-white rounded-sm card ${shadowClass}`}
    >
      <div className="flex justify-between">
        <p className="font-semibold underline">
          {editedTitle}
        </p>
        <span>
          <PortalExample onTitleEdit={handleTitleEdit} title={title} addComment={addComment} comments={comments} icon={<Edit size={20}/>}/>
        </span>
      </div>
      <div className="flex justify-between">
        <span className="flex gap-1 commentsss">
          <PortalExample onTitleEdit={handleTitleEdit} title={title} addComment={addComment} comments={comments} icon={<Comment size={20}/>}/>
          {comments.length > 0 ? comments.length : null}
        </span>
        <span>
          <Image src="/avatar.png" width={20} height={20} />
        </span>
      </div>
    </div>
  );
}

export default Card;