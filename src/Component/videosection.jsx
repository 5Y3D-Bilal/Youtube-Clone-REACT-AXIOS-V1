// import { useEffect, useState } from "react";

// function Videosection() {
//   const API_KEY = "AIzaSyDM0TBqHnxMNultqtr69bhKwMT2SXTfzQ8";
//   const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&random&maxResults=100`;
//   const [nextPageToken, setNextPageToken] = useState("");
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     async function news() {
//       const res1 = await fetch(API_URL);
//       const data1 = await res1.json();
//       console.log(data1.items);
//       setData(data1.items);
//     }
//     news();
//   }, []);

//   return (
//     <>
    //   <div className="pl-48 pt-28 flex flex-wrap">
    //     {data.map((item) => {
    //       return (
    //         <>
    //           <div className="flex flex-col flex-wrap w-[50%] top-16 left-28 bg-red-200 overflow-hidden">
    //             <img src={item.snippet.thumbnails.high.url} alt="" className="w-[50%] border-gray-400 border rounded-md h-48 object-cover" />
    //             <p className="w-96 text-xl">{item.snippet.title} </p>
    //             <h2>{item.snippet.channelTitle} </h2>
    //           </div>
    //         </>
    //       );
    //     })}
    //   </div>
//     </>
//   );
// }

// export default Videosection;




import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyDM0TBqHnxMNultqtr69bhKwMT2SXTfzQ8';
const API_URL = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDM0TBqHnxMNultqtr69bhKwMT2SXTfzQ8&part=snippet&random&maxResults=10`;

function App() {
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchVideos('');
    }, []);

    const fetchVideos = (pageToken) => {
        setLoading(true);
        axios
            .get(API_URL, {
                params: {
                    key: API_KEY,
                    q: 'Your search query', // Replace with your search query
                    type: 'video',
                    part: 'snippet',
                    maxResults: 100000, // Adjust as needed
                    pageToken: pageToken,
                },
            })
            .then((response) => {
                setVideos([...videos, ...response.data.items]);
                setNextPageToken(response.data.nextPageToken);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data from YouTube API:', error);
                setLoading(false);
            });
    };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            if (nextPageToken) {
                fetchVideos(nextPageToken);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [nextPageToken]);

    return (
        <div className="App">
            <h1>YouTube Video List</h1>
            <ul>
                {videos.map((video) => (
                    <li key={video.id.videoId}>
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                        <h3>{video.snippet.title}</h3>
                    </li>
                ))}
            </ul>
            {loading && <p>Loading...</p>}
        </div>
    );
}

export default App;




