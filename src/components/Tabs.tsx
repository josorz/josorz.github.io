import PortfolioGrid from "./PortfolioGrid";

export default function Tabs() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex border-b-2 border-black">
        <button className="px-6 py-3 cursor-pointer font-semibold text-sm bg-[#ffdd00] border-r-2 border-black">
          Portfolio
        </button>
        {/* <button className="px-6 py-3 cursor-pointer text-sm text-gray-400 border-r border-black hover:bg-black/5 transition-colors">
          About
        </button>
        <button className="px-6 py-3 cursor-pointer text-sm text-gray-400 hover:bg-black/5 transition-colors">
          Contact
        </button> */}
      </div>
      <PortfolioGrid />
    </div>
  );
}
