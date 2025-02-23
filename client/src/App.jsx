import { Navbar, Welcome, Footer, SuccessStories, Transactions, NGOs } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Transactions />
   <NGOs/>
    <SuccessStories/>
    <Footer />
  </div>
);

export default App;
