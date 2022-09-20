import { FormEvent, useEffect, useState } from "react"
import axios from "axios"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

// type Data = {
//   location: {
//     city: string
//     country: string
//     lat: number | undefined
//     lng: number | undefined
//     timezone: string
//   }
//   isp: string
// }
interface InfoDetails {
  title: string
  value: string
}

function App() {
  const [ipAddess, setIpAddess] = useState("")
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [timezone, setTimezone] = useState("")
  const [isp, setIsp] = useState("")

  const BaseUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${
    import.meta.env.VITE_GEO_API_KEY
  }&ipAddress=${ipAddess}`

  const fetchData = async () => {
    const res = await fetch(BaseUrl)
    const data = await res.json().catch((error) => {
      console.log(error)
    })
    const { city, country, timezone, lat, lng } = data.location
    setIpAddess(data.ip)
    setCity(city)
    setCountry(country)
    setTimezone(timezone)
    setLat(lat)
    setLng(lng)
    setIsp(data.isp)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    fetchData()
  }

  console.log(lat, lng)
  return (
    <main className="w-full h-full relative before:absolute before:top-0 before:left-0 before:h-[18.75rem] lg:h-[17.5rem] before:w-screen before:bg-[url('/images/pattern-bg.png')] before:bg-no-repeat before:bg-cover before:bg-center before:z-[999]">
      <div className="container md:pt-8 px-6 md:px-10 lg:px-12 xl:px-0 relative">
        <header className="py-7 text-center relative z-[999]">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-bold">
            IP Address Tracker
          </h1>
        </header>

        <section className="input relative z-[999]">
          <h2 className="sr-only">Search for any IP address or domain </h2>
          <form
            className="w-full h-14 rounded-2xl relative overflow-hidden mb-6 md:mb-10 max-w-[34.6875rem] mx-auto border-none"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="ip"
              className=" w-full h-full outline none px-5 font-medium placeholder:text-darkGray text-veryDarkGray text-lg placeholder:text-sm md:placeholder:text-base placeholder:font-normal"
              placeholder="Search for any IP address or domain "
              aria-label="Search for any IP address or domain "
              value={ipAddess}
              onChange={(e) => setIpAddess(e.target.value)}
            />
            <button
              className="absolute top-0 right-0 w-[3.625rem] h-full bg-veryDarkGray grid place-items-center hover:bg-veryDarkGray/[0.85] cursor-pointer border-none outline-none"
              aria-label="click to track ip provided"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="3"
                  d="M2 1l6 6-6 6"
                />
              </svg>
            </button>
          </form>
        </section>

        <section className="ip-info absolute left-1/2 -translate-x-1/2 z-[999]">
          <h3 className="sr-only">
            information about the IP Address you provided
          </h3>
          <div className="w-full max-w-[69.375rem] min-h-[13.75rem] md:h-[10.3125rem] mx-auto rounded-xl bg-white shadow-xl py-6 md:py-0 md:px-7 xl:px-10 flex items-center flex-col gap-6 md:flex-row md:gap-10 lg:gap-14 ">
            <IpInfoDetails title="IP Address" value={`${ipAddess}`} />
            <span className=" hidden md:block  w-[1px] h-20 bg-darkGray "></span>
            <IpInfoDetails title="Location" value={`${city}, ${country}`} />
            <span className=" hidden md:block  w-[1px] h-20 bg-darkGray "></span>
            <IpInfoDetails title="Timezone" value={`UTC - ${timezone}`} />
            <span className=" hidden md:block  w-[1px] h-20 bg-darkGray "></span>
            <IpInfoDetails title="ISP" value={`${isp}`} />
          </div>
        </section>
      </div>
      {lat == undefined || lng == undefined ? (
        <div className="loader"></div>
      ) : (
        <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[lat, lng]}>
            <Popup>{`${city}, ${country}`}</Popup>
          </Marker>
        </MapContainer>
      )}
    </main>
  )
}

export default App

const IpInfoDetails = ({ title, value }: InfoDetails) => {
  return (
    <div className="text-center md:text-left block md:w-1/4">
      <p className="text-xs md:text-sm text-darkGray uppercase font-medium md:mb-3">
        {title}
      </p>
      <p className="font-bold text-veryDarkGray text-lg md:text-xl lg:text-2xl">
        {value}
      </p>
    </div>
  )
}
