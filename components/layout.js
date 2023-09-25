import Head from "next/head"

function Layout({ children }) {
    return (
      <div className="flex flex-col h-screen bg-cyan-900">
        <Head>
          <title>Task Board</title>
          <meta name="description" content="App de tareas para equipos de trabajo (Trello clone)." />
          <link rel="icon" href="/favicon.png" />
        </Head>
        {children}
      </div>
    )
  }
  
  export default Layout