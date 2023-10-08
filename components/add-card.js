import Image from "next/image"
import { useId } from "react"

function AddCard({ setNewCard, setIsCreateOpen, setError }) {
  let id = useId()
  
  function handleSubmit(e){
    e.preventDefault()
    let form = new FormData(e.target)
    setNewCard({active: false, data: {title: form.get('title'), id, user: {
      name: 'Nicolas',
      avatar: '/avatar.png',
    }}})
  }

  function handleCloseClick(){
    setIsCreateOpen(false)
    setError("")
  }


  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col flex-1 w-full gap-5 overflow-hidden">
      <div className="flex gap-1 p-2 bg-white rounded" >
        <input name="title" className="flex-1 bg-white outline-none" type="text" placeholder="Introduzca un título para esta tarjeta..." />
      </div>
      <div className="flex items-center justify-center gap-4">
        <button className="p-2 text-white rounded bg-sky-600">Añadir Tarjeta</button>
        <button className="h-6 cursor-pointer" onClick={(handleCloseClick)}>
          <Image src="/close.svg" alt="" width="24" height="24" />
        </button>
      </div>
    </form>
    
  )
}

export default AddCard