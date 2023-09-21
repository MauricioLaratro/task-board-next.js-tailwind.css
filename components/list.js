import Image from "next/image"
import { useEffect, useState } from "react"
import AddCard from "./add-card"


function List({ title, children, handleDrop, id, setListOfLists }) {
    let cardId = Math.random()

    function handleDragOver(event) {
        event.preventDefault()
    }
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [newCard, setNewCard] = useState('')
    const [error, setError] = useState("");

    function handleClick(){
        setIsCreateOpen(true)
    }

    useEffect(() => {
        if (newCard) {
            const trimmedTitle = newCard.data.title.trim();
            if (trimmedTitle.length > 0) {
                setListOfLists((prevLists) => ({
                    ...prevLists,
                    [id]: [...prevLists[id], { title: trimmedTitle, id: cardId }],
                }));
                setIsCreateOpen(false);
                setError(""); // Borra cualquier mensaje de error existente.
            } else {
                setError("El título de la tarjeta no puede estar vacío.");
            }
        }
    }, [newCard]);
    
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
                    {isCreateOpen ? (
                    <div className="w-full flex flex-col gap-2 items-center">
                        {error && <p className="text-white bg-red-500 px-1 rounded">{error}</p>}
                        <AddCard setNewCard={setNewCard} setIsCreateOpen={setIsCreateOpen} setError={setError}></AddCard>
                    </div>
                    ) : (
                        <button className="flex gap-1 items-center" onClick={handleClick}>
                        <Image src="/plus.svg" width={24} height={24} alt="Icono de añadir tarjeta"/>
                            Añadir otra tarjeta
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default List