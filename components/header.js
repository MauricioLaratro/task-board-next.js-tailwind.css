import Image from 'next/image'

function Header() {
    return (
        <header className='header'>
            <Image src="/logo.png" width={40} height={40} alt="Logotipo de la aplicación" />
            <p className="uppercase text-logo">
                Task Board
            </p>
        </header>
    )
}

export default Header
