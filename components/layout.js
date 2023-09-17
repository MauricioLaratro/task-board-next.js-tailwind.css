function Layout({ children }) {
    return (
      <div className="flex flex-col h-screen bg-cyan-900">
        {children}
      </div>
    )
  }
  
  export default Layout