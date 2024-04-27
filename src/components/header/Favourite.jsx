import favIcon from "./../../assets/heart.svg";

export default function Favourite({ onShow }) {
  return (
    <div className="p-2 text-gray-300 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={favIcon} alt="" />
      <span onClick={onShow}>Favourite Locations</span>
    </div>
  );
}
