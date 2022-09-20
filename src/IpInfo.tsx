interface InfoDetails {
  title: string
  value: string
}
interface Details {
  ip: string | number | undefined
  country: string | undefined
  city: string | undefined
  timezone: string | undefined
  isp: string | undefined
}
const IpInfo: React.FC<Details> = ({ ip, isp, timezone, city, country }) => {
  return (
    <div className="w-full max-w-[69.375rem] min-h-[13.75rem] md:h-[10.3125rem] mx-auto rounded-xl bg-white shadow-xl py-6 md:py-0 md:px-7 xl:px-10 flex items-center flex-col gap-6 md:flex-row md:gap-10 lg:gap-14 ">
      <IpInfoDetails title="IP Address" value={`${ip}`} />
      <span className=" hidden md:block  w-[1px] h-20 bg-darkGray "></span>
      <IpInfoDetails title="Location" value={`${city}, ${country}`} />
      <span className=" hidden md:block  w-[1px] h-20 bg-darkGray "></span>
      <IpInfoDetails title="Timezone" value={`UTC - ${timezone}`} />
      <span className=" hidden md:block  w-[1px] h-20 bg-darkGray "></span>
      <IpInfoDetails title="ISP" value={`${isp}`} />
    </div>
  )
}

export default IpInfo

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
