import { Link } from "react-router-dom";
import { SiOpensea } from "react-icons/si";
import { MdOutlineWallet } from "react-icons/md";

const Header = ({ account, setAccount }) => {
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="max-w-screen-xl mx-auto p-4 flex justify-between font-bold">
      <Link to="/">
        <div className="flex items-center">
          <div className=" text-blue-500">
            <SiOpensea size={28} />
          </div>
          <div className="ml-1 text-xl text-black-500">Openchess</div>
        </div>{" "}
      </Link>
      <div className="flex items-center">
        {account ? (
          <div className="flex items-center p-2 bg-white rounded-md ml-4">
            <div className=" w-6 h-6 rounded-full flex justify-center items-center">
              <MdOutlineWallet />
            </div>
            <div className="ml-1">
              {account.substring(0, 4)}...
              {account.substring(account.length - 4)}
            </div>
          </div>
        ) : (
          <button
            className="p-2 flex bg-white rounded-md ml-1 text-black"
            onClick={onClickAccount}
          >
            <div className=" w-6 h-6 rounded-full flex justify-center items-center">
              <MdOutlineWallet />
            </div>
            <div className="ml-1">Connect</div>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
