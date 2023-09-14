import Image from "next/image"

function Card({ title, user, comments = [] }) {
    return (
        <div className="flex flex-col gap-4 p-2 text-gray-900 bg-white rounded-sm">
            <div className="card-element">
                <p>
                    {title}
                </p>
                <span>
                    <Image src="/edit.svg" width={20} height={20} alt="Boton para editar"/>
                </span>
            </div>
            <div className="card-element">
                <span className="flex gap-1">
                    <Image src="/comment.svg" width={20} height={20} alt="Boton para comentar"/>
                    {comments.length > 0 ? comments.length : null}
                </span>
                <span>
                    <Image src="/avatar.png" width={40} height={40} alt="Avatar del usuario"/>
                </span>
            </div>
        </div>
    )
}

export default Card
