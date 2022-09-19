import { useState } from "react"

function App() {
  return (
    <main className="w-full h-full relative before:absolute before:top-0 before:left-0 before:h-[18.75rem] lg:h-[17.5rem] before:w-screen before:bg-[url('./images/pattern-bg.png')]">
      <div className="container md:pt-8 px-6 md:px-10 lg:px-12 xl:px-0 relative">
        <header className="py-7 text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-white">
            IP Address Tracker
          </h1>
        </header>
      </div>
    </main>
  )
}

export default App
