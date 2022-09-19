interface InfoDetails {
  title: string
  value: string
}
const IpInfo = () => {
  return (
    <div className="w-full max-w-[69.375rem] h-[13.75rem] md:h-[10.3125rem] mx-auto rounded-xl bg-white shadow-xl py-6 md:py-0 md:px-7 flex items-center flex-col md:flex-row ">
      <IpInfoDetails title="IP Address" value="192.212.174.101" />
    </div>
  )
}

export default IpInfo

const IpInfoDetails = ({ title, value }: InfoDetails) => {
  return (
    <div className="text-center md:text-left block">
      <p className="text-xs md:text-sm text-darkGray uppercase font-medium md:mb-3">
        {title}
      </p>
      <p className="font-bold text-veryDarkGray text-lg md:text-2xl">{value}</p>
    </div>
  )
}
