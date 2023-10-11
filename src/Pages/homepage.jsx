import Nav from "../Component/nav";
import Sidebar from "../Component/sidebar";
import Toptrending from "../Component/toptrending";
import Application from "../Component/mainyoutubepage";
import './../App.css'

function Homepage() {
  return (
    <>
      <div className="w-full">
        <Nav />
        <Sidebar />
        <Toptrending />
      </div>
      <div className="w-full overflow-hidden">
      <Application />
      </div>
    </>
  );
}

export default Homepage;
