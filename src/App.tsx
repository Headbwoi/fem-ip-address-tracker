import { useState } from "react"
import IpInfo from "./IpInfo"

interface Details {
  ip: string
  location: string
  timezone: string
  isp: string
}

function App() {
  return (
    <main className="w-full h-full relative before:absolute before:top-0 before:left-0 before:h-[18.75rem] lg:h-[17.5rem] before:w-screen before:bg-[url('/images/pattern-bg.png')] before:bg-no-repeat before:bg-cover before:bg-center">
      <div className="container md:pt-8 px-6 md:px-10 lg:px-12 xl:px-0 relative">
        <header className="py-7 text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-bold">
            IP Address Tracker
          </h1>
        </header>

        <section className="input">
          <h2 className="sr-only">Search for any IP address or domain </h2>
          <div className="w-full h-14 rounded-2xl relative overflow-hidden mb-6 md:mb-10 max-w-[34.6875rem] mx-auto border-none">
            <input
              type="text"
              name="ip"
              className=" w-full h-full outline none px-5 font-medium placeholder:text-darkGray text-veryDarkGray text-lg placeholder:text-sm md:placeholder:text-base placeholder:font-normal"
              placeholder="Search for any IP address or domain "
              aria-label="Search for any IP address or domain "
            />
            <button
              className="absolute top-0 right-0 w-[3.625rem] h-full bg-veryDarkGray grid place-items-center hover:bg-veryDarkGray/[0.85] cursor-pointer border-none outline-none"
              aria-label="click to track ip provided"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                <path
                  fill="none"
                  stroke="#FFF"
                  stroke-width="3"
                  d="M2 1l6 6-6 6"
                />
              </svg>
            </button>
          </div>
        </section>

        <section className="ip-info absolute left-1/2 -translate-x-1/2">
          <h3 className="sr-only">
            information about the IP Address you provided
          </h3>
          <IpInfo />
        </section>
      </div>

      <section className="bg-veryDarkGray w-screen min-h-full">
        <div className="map min-h-[15rem]" id="map"></div>
      </section>
    </main>
  )
}

export default App
