import { FaChessRook } from "react-icons/fa";

const NftCard = ({ tokenId, metadata }) => {
  return (
    <div className="rounded-2xl">
      <img className="rounded-t-2xl" src={metadata.image} alt={metadata.name} />
      <div className="mt-4 text-xl font-bold flex items-center px-4 text-gray-300">
        Da Den Bu
        <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center ml-2 text-gray-950">
          <FaChessRook size={16} />
        </div>
      </div>
    </div>
  );
};

export default NftCard;
