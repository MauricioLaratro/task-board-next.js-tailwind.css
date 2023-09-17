import Image from "next/image"


function List({ title, children, handleDrop, id }) {

    function handleDragOver(event) {
        event.preventDefault()
    }

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
                    <p className="">
                        Añadir otra tarjeta
                    </p>
                </div>
            </div>
        </div>
    )
}

export default List
