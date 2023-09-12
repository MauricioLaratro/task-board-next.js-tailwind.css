import RootLayout from './layout'
import Header from './components/header'
import Board from './components/board'

export default function Home() {
  return (
    <RootLayout className='bg-green-900'>
      <Header />
      <Board />
    </RootLayout>
  )
}
