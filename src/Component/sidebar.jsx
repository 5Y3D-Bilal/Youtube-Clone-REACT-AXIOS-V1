import "./../App.css";
function Sidebar() {
  return (
    <>
      <div className="fixed top-14 w-33 sideBar">
        <div className=" h-auto ">
          <div className="cursor-pointer w-full flex  items-center ml-[12px]  h-14 ">
            <a
              href=""
              className="bg-gray-100 px-12 py-2 rounded-md space-x-2 text-sm"
            >
              <i className="fa-solid fa-house"></i>
              <span className="">Home</span>
            </a>
          </div>
          <div className="cursor-pointer w-full flex  items-center ml-[12px]  h-14 ">
            <a
              href=""
              className=" px-12 py-2 rounded-md space-x-2 text-sm text-gray-600"
            >
              <i className="bi bi-file-play-fill"></i>
              <span className="">Shorts</span>
            </a>
          </div>
          <div className="cursor-pointer w-full flex items-center ml-[32px]  h-14 ">
            <a href="" className=" px-7 py-2 rounded-md  text-sm text-gray-600">
            <i className="bi bi-collection-play"></i>
              <span className="mx-2">Subscription</span>
            </a>
          </div>
          <hr />
          {/* Utils */}
          <div className="cursor-pointer w-full flex  items-center ml-[11px]  h-14 ">
            <a
              href=""
              className=" text-gray-600 px-12 py-2 rounded-md space-x-2 text-sm"
            >
              <i className="bi bi-play-btn"></i>
              <span className="">Library</span>
            </a>
          </div>
          <div className="cursor-pointer w-full flex   items-center ml-[17px]  h-14 ">
            <a
              href=""
              className=" px-10 py-2 rounded-md space-x-2 text-sm text-gray-600"
            >
              <i className="bi bi-clock-history"></i>
              <span className="">History</span>
            </a>
          </div>
          <div className="cursor-pointer w-full flex  items-center justify-center  h-14 ">
            <a href="" className=" py-2 rounded-md  text-sm text-gray-600">
              <i className="fa-solid fa-scissors "></i>
              <span className="mx-2">Your Clips</span>
            </a>
          </div>
          <div className="cursor-pointer w-full flex mr-[17px] items-center justify-center  h-14 ">
            <a href="" className=" py-2 rounded-md  text-sm text-gray-600">
              <i className="bi bi-clock"></i>
              <span className="mx-2">Watch later</span>
            </a>
          </div>
          <div className="cursor-pointer w-full flex mr-[17px] items-center justify-center  h-14 ">
            <select name="playbackRate" className="player-speed">
              <option value="1" selected>
                Show More
              </option>
              <option value="1.5">Playlist 1</option>
              <option value="1.5">Playlist 2</option>
              <option value="1.5">Playlist 3</option>
              <option value="2">Playlist 4</option>
            </select>
          </div>
          <hr />
          {/* Subscriptions */}
          <h2 className="py-2 font-medium px-14">Subscriptions</h2>
          <div className="cursor-pointer w-full flex mr-[17px] items-center justify-center  h-14 ">
            <a href="" className=" px-6 py-2 rounded-md  text-sm text-gray-600">
              <i className="bi bi-play"></i>
              <span className="mx-2">Your Videos</span>
            </a>
          </div>
          <div className="cursor-pointer w-full flex mr-[17px] items-center justify-center  h-14 ">
            <a href="" className=" px-6 py-2 rounded-md  text-sm text-gray-600">
              <i className="bi bi-play"></i>
              <span className="mx-2">Your Videos</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
