import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer, Transactions, Welcome,SuccessStories } from "./components";
import NGOs from "./pages/NGOs";
import EthereumCard from "./components/EthereumCard"; 


const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          
          <Route path="/" element={
            <>
              <Welcome />
           
             
            </>
          } />
          <Route path="/ngos" element={<NGOs />} />
          <Route path="/ethereum-donation" element={<EthereumCard />} />
          <Route path="/successStories" element={<SuccessStories />} />
          <Route path="/transactions" element={<Transactions />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;