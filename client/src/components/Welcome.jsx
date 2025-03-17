import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { TransactionContext } from "../context/TransactionContext";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);
  const navigate = useNavigate(); // ✅ Navigation Hook

  return (
    <div className="flex w-full justify-center items-center gradient-bg-welcome min-h-screen">
      <div className="flex flex-col items-center justify-center py-20 px-4">
        {/* New Header Section */}
        <h1 className="text-4xl sm:text-5xl py-2 text-gradient text-center">
          TranspareNC, The Ethereum Powered Donation Platform
        </h1>
        <p className="text-left my-4 text-black font-light sm:w-8/12 w-11/12 text-base text-center">
          We provide a secure and transparent way to donate to NGOs directly using Ethereum.
        </p>

        {/* Platform Advantages Section */}
        <div className="flex flex-col sm:flex-row justify-around items-center mt-10">
          <div className="p-5 bg-white shadow-lg rounded-lg text-center mx-4 mb-4">
            <h3 className="font-semibold text-xl">Transparent Transactions</h3>
            <p className="mt-2">Track all donations on the blockchain for complete transparency.</p>
          </div>
          <div className="p-5 bg-white shadow-lg rounded-lg text-center mx-4 mb-4">
            <h3 className="font-semibold text-xl">Secure Donations</h3>
            <p className="mt-2">Your donations are secure with Ethereum, ensuring privacy and integrity.</p>
          </div>
          <div className="p-5 bg-white shadow-lg rounded-lg text-center mx-4 mb-4">
            <h3 className="font-semibold text-xl">Global Reach</h3>
            <p className="mt-2">Donate to NGOs across the world, directly through the Ethereum blockchain.</p>
          </div>
        </div>

        {/* Connect Wallet Button */}
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
