import Image from "next/image";
import { global } from "styled-jsx/css";

function Card({ title, user, comments = [], id, setDragged, listId }) {
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
    console.log(event.target.closest('[data-id]').dataset.id)
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

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={`shadow flex flex-col gap-4 p-2 text-gray-900 bg-white rounded-sm card ${shadowClass}`}
    >
      <div className="flex justify-between">
        <p>
          {title}
        </p>
        <span>
          <Image src="/edit.svg" width={20} height={20} />
        </span>
      </div>
      <div className="flex justify-between">
        <span className="flex gap-1 commentsss">
          <Image src="/comment.svg" width={20} height={20} />
          {comments.length > 0 ? comments.length : null}
        </span>
        <span>
          <Image src={user.avatar} width={20} height={20} />
        </span>
      </div>
    </div>
  );
}

export default Card;
