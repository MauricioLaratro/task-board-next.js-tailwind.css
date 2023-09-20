import Image from "next/image"
import { useId } from "react"

function AddCard({ setNewCard, setIsCreateOpen }) {
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
  }


  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex gap-1 p-2 bg-white rounded" >
        <input name="title" className="flex-1 bg-white outline-none" type="text" placeholder="Introduzca un título para esta tarjeta..." />
        <Image src="/edit.svg" alt="" width="24" height="24" />
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-white rounded bg-sky-600">Añada Tarjeta</button>
        <button className="h-6 cursor-pointer" onClick={(handleCloseClick)}>
          <Image src="/close.svg" alt="" width="24" height="24" />
        </button>
      </div>
    </form>
    
  )
}

export default AddCard