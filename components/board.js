import React, { useState } from 'react';
import List from './list';
import Card from './card';
import { todoList, inProgressList, doneList } from "./data"

function Board() {
  const [dragged, setDragged] = useState(null);
  const [listOfLists, setListOfLists] = useState({
    todoList,
    inProgressList,
    doneList
  });

    // Función para actualizar el título de la tarjeta en el estado global
    const updateCardTitle = (listId, cardId, newTitle) => {
    const updatedLists = { ...listOfLists };
    const targetList = updatedLists[listId];
    const targetCard = targetList.find((card) => card.id === cardId);

    if (targetCard) {
      targetCard.title = newTitle;
      setListOfLists(updatedLists);
    }
  };


  function handleDrop(event) {
    const list = event.currentTarget.dataset.id;
    const listOfListsClone = { ...listOfLists };

    // Encuentra la lista de origen y destino
    const sourceList = dragged.list;
    const destinationList = list;

    // Encuentra la tarjeta que se está moviendo
    const cardToMove = listOfListsClone[sourceList].find(
      (item) => item.id === dragged.data.id
    );

    // Filtra la tarjeta de la lista de origen
    listOfListsClone[sourceList] = listOfListsClone[sourceList].filter(
      (item) => item.id !== dragged.data.id
    );

    // Agrega la tarjeta a la lista de destino
    listOfListsClone[destinationList].push(cardToMove);

    setListOfLists(listOfListsClone);
  }

  return (
    <div className="flex flex-col flex-1 gap-4 p-4 ">
      <div>
        <h1 className="text-2xl font-bold">Development</h1>
      </div>
      <main className="flex flex-1 gap-6">
        <List title="TODO" handleDrop={handleDrop} setListOfLists={setListOfLists} id="todoList">
          {listOfLists.todoList.map((item) => (
            <Card
              {...item}
              key={item.id}
              setDragged={setDragged}
              listId="todoList"
              // setListOfLists={setListOfLists}
              // listOfLists={listOfLists}
              cardId={item.id} // Asegúrate de pasar cardId
              updateCardTitle={updateCardTitle} // Asegúrate de pasar updateCardTitle
            />
          ))}
        </List>
        <List title="In Progress" handleDrop={handleDrop} setListOfLists={setListOfLists} id="inProgressList">
          {listOfLists.inProgressList.map((item) => (
            <Card
              {...item}
              key={item.id}
              setDragged={setDragged}
              listId="inProgressList"
              // setListOfLists={setListOfLists}
              // listOfLists={listOfLists}
              cardId={item.id} // Asegúrate de pasar cardId
              updateCardTitle={updateCardTitle} // Asegúrate de pasar updateCardTitle
            />
          ))}
        </List>
        <List title="Done" handleDrop={handleDrop} setListOfLists={setListOfLists} id="doneList">
          {listOfLists.doneList.map((item) => (
            <Card
              {...item}
              key={item.id}
              setDragged={setDragged}
              listId="doneList"
              // setListOfLists={setListOfLists}
              // listOfLists={listOfLists}
              cardId={item.id} // Asegúrate de pasar cardId
              updateCardTitle={updateCardTitle} // Asegúrate de pasar updateCardTitle
            />
          ))}
        </List>
      </main>
    </div>
  );
}

export default Board;
