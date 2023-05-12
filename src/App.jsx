import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div> 
  );
};

export default App;