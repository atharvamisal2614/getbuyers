"use client";
import { useEffect, useState } from "react";
import Flag from "react-world-flags";
export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMounted, setIsMounted] = useState(false)

useEffect(()=>{
  setIsMounted(true)
  const fetchData = async () =>{
    try{
      const response = await fetch('/data/countries.json');
      const data = await response.json();
      setCountries(data);
    } catch {
      console.error('Error fetching data');
    }
  }
  fetchData();
},[])

if(!isMounted) {
  return null
}

const filteredSearch = countries.filter((country)=>{
return country.name.toLowerCase().includes(searchTerm.toLowerCase())
})
  return (
    <section className="pb-4 py-24 bg-cyan-50">
      <div className="max-w-full px-5 py-6 mx-auto lg:px-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-8 italic">
          <span className="text-black">Data </span>According{" "}
          <span className="text-black">Countries</span>
        </h2>
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search countries..."
            className="md:w-1/2 w-full p-2 border-2 focus:border-blue-500 focus:ring-1  rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-full mx-auto">
          {countries.length === 0 ? (
            [...Array(32)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-white p-4 animate-pulse"
              >
                <div className="w-20 h-14 bg-gray-300 rounded"></div>
                <p className="mt-2 text-lg font-medium text-gray-400">Loading...</p>
              </div>
            ))
          ) : filteredSearch.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 text-lg font-semibold">
              Sorry, No results found
            </p>
          ) : (
            filteredSearch.map((country) => (
              <div key={country.code} className="flex flex-col items-center rounded-lg">
                <Flag code={country.code} className="w-20 h-14 object-cover rounded" />
                <p className="mt-2 text-lg font-medium">{country.name}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}








// "use client";
// import { useEffect, useState } from "react";
// import Flag from "react-world-flags";

// export default function Countries() {
//   const [countries, setCountries] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isMounted, setIsMounted] = useState(false); // Track if the component has mounted

//   useEffect(() => {
//     setIsMounted(true); // Mark component as mounted

//     const fetchData = async () => {
//       try {
//         const response = await fetch("/data/countries.json");
//         const data = await response.json();
//         setCountries(data);
//       } catch (error) {
//         console.error("Error fetching countries:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!isMounted) {
//     return null; // Prevent mismatch by delaying rendering until mounted
//   }

//   const filteredSearch = countries.filter((country) =>
//     country.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <section className="pb-4 py-24 bg-cyan-50">
//       <div className="max-w-full px-5 py-6 mx-auto lg:px-24">
//         <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-8 italic">
//           <span className="text-black">Data </span>According{" "}
//           <span className="text-black">Countries</span>
//         </h2>
//         <div className="mb-8 flex justify-center">
//           <input
//             type="text"
//             placeholder="Search countries..."
//             className="w-1/2 p-2 border-2 focus:border-blue-500 focus:ring-1 rounded-lg"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-full mx-auto">
//           {countries.length === 0 ? (
//             [...Array(32)].map((_, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center rounded-lg bg-white p-4 animate-pulse"
//               >
//                 <div className="w-20 h-14 bg-gray-300 rounded"></div>
//                 <p className="mt-2 text-lg font-medium text-gray-400">Loading...</p>
//               </div>
//             ))
//           ) : filteredSearch.length === 0 ? (
//             <p className="col-span-full text-center text-gray-500 text-lg font-semibold">
//               Sorry, No results found
//             </p>
//           ) : (
//             filteredSearch.map((country) => (
//               <div key={country.code} className="flex flex-col items-center rounded-lg">
//                 <Flag code={country.code} className="w-20 h-14 object-cover rounded" />
//                 <p className="mt-2 text-lg font-medium">{country.name}</p>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
