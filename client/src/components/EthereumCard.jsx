import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Input, Loader } from ".";

const EthereumCard = () => {
  const { currentAccount, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 min-h-screen gradient-bg-welcome">
      <h1 className="text-3xl sm:text-4xl text-gradient text-center mb-6">Send Ethereum Donations</h1>

      {/* Ethereum Card */}
      <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism">
        <div className="flex justify-between flex-col w-full h-full">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-full border-2 flex justify-center items-center">
              <SiEthereum fontSize={21} color="#000" />
            </div>
            <BsInfoCircle fontSize={17} color="#000" />
          </div>
          <div>
            <p className="text-white font-light text-sm">
              {shortenAddress(currentAccount)}
            </p>
            <p className="text-black font-semibold text-lg mt-1">Ethereum</p>
          </div>
        </div>
      </div>

      {/* Transaction Form */}
      <div className="p-5 sm:w-96 text-black w-full flex flex-col justify-start items-center blue-glassmorphism">
        <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
        <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
        <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

        <div className="h-[1px] w-full bg-gray-400 my-2" />

        {isLoading ? <Loader /> : (
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white w-full bg-black mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            Send now
          </button>
        )}
      </div>
    </div>
  );
};

export default EthereumCard;