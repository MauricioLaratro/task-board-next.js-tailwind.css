

function List({ title, children }) {
    return (
        <div className="relative flex-1">
            <div className="absolute inset-0 flex flex-col flex-1 gap-4 p-4 text-gray-900 rounded bg-slate-400">
                <div>
                    <h2 className="font-bold">{title}</h2>
                </div>
                <div className="flex flex-col flex-1 gap-4 overflow-auto card-container">
                    {children}
                </div>
                <div>
                    Añadir otra tarjeta
                </div>
            </div>
        </div>
    )
}

export default List
