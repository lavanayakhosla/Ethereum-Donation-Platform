import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer, Transactions, Welcome,SuccessStories } from "./components";
import NGOs from "./pages/NGOs";
import EthereumCard from "./components/EthereumCard"; 
import Login from "./components/login"
import SignUp from "./components/signup"
import SchedulePickup from "./components/scheduleAPickUp.jsx";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          {/* ✅ Ensure Home Page Includes Welcome, Services, and Transactions */}
          <Route path="/" element={
            <>
              <Welcome />
              <Transactions />
              <SuccessStories/>
            </>
          } />
          <Route path="/ngos" element={<NGOs />} />
          <Route path="/ethereum-donation" element={<EthereumCard />} />
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/signup" element={<SignUp/>}/>
          <Route path = "/scheduleapickup" element={<SchedulePickup/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;