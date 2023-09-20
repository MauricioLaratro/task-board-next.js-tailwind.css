import Image from "next/image"
import { useEffect, useState } from "react"
import AddCard from "./add-card"


function List({ title, children, handleDrop, id, listOfLists, setListOfLists }) {
    let cardId = Math.random()

    function handleDragOver(event) {
        event.preventDefault()
    }
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [newCard, setNewCard] = useState('')

    function handleClick(){
        setIsCreateOpen(true)
    }

     useEffect(() => {
        if(newCard){
            setListOfLists((prevLists) => ({
                ...prevLists,
                [id]: [...prevLists[id], { title: newCard.data.title, id: cardId }],
            }));
            setIsCreateOpen(false)
        }
     }, [newCard])
     console.log(listOfLists)

    return (
        <div data-id={id} className="relative flex-1" onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className="absolute inset-0 flex flex-col flex-1 gap-4 p-4 text-gray-900 rounded bg-slate-400">
                <div>
                    <h2 className="font-bold">{title}</h2>
                </div>
                <div className="flex flex-col flex-1 gap-4 overflow-auto card-container">
                    {children}
                </div>
                <div className="flex items-center justify-center gap-2 duration-200 rounded-lg cursor-pointer hover:bg-slate-300">
                    <span className="max-h-[24px]">
                       <Image src="/plus.svg" width={24} height={24}/>
                    </span>
                    {isCreateOpen ? <AddCard setNewCard={setNewCard} setIsCreateOpen={setIsCreateOpen}></AddCard> :
                    <button className="" onClick={handleClick}>
                        Añadir otra tarjeta
                    </button>}

                </div>
            </div>
        </div>
    )
}

export default List