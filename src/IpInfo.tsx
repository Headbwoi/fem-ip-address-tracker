import React from "react"

const IpInfo = () => {
  return (
    <div className="w-full max-w-[69.375rem] h-[13.75rem] md:h-[10.3125rem] mx-auto rounded-xl bg-white shadow-xl py-6 md:py-0 md:px-7 flex items-center flex-col md:flex-row ">
      <div className="text-center md:text-left block">
        <p className="text-xs md:text-sm text-darkGray uppercase font-medium">
          IP Address
        </p>
        <p className="font-bold text-veryDarkGray text-lg">192.212.174.101</p>
      </div>
    </div>
  )
}

export default IpInfo
