import Layout from '../components/layout'
import Header from '../components/header'
import Board from '../components/board'
import NewNode from '../components/new-node'

export default function Home() {
  return (
    <Layout>
      <Header />
      <Board />
      <NewNode />
    </Layout>
  )

}