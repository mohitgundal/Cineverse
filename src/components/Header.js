// import React, { useEffect, useState } from 'react'
// import logo from '../assets/logo.png'
// import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
// import userIcon from '../assets/user.png'
// import { IoSearchOutline } from "react-icons/io5";
// import { navigation } from '../contants/navigation';

// const Header = () => {
//     const location = useLocation()
//     const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
//     const [searchInput,setSearchInput] = useState(removeSpace)
//     const navigate = useNavigate()

//     useEffect(()=>{
//         if(searchInput){
//             navigate(`/search?q=${searchInput}`)
//         }
//     },[searchInput])

//     const handleSubmit = (e)=>{
//         e.preventDefault()
//     }

//   return (
//     <header className='fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40'>
//             <div className='container mx-auto px-3 flex items-center h-full'>
//                 <Link to={"/"}>
//                     <img
//                         src={logo}
//                         alt='logo'
//                         width={120}
//                     />
//                 </Link>

//                 <nav className='hidden lg:flex items-center gap-1 ml-5'>
//                     {/* {
//                         navigation.map((nav,index)=>{
//                             return(
//                                 <div>
//                                     <NavLink key={nav.label+"header"+index} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
//                                         {nav.label}
//                                     </NavLink>
//                                 </div>
//                             )
//                         })
//                     } */}

//                   {
//     navigation.map((nav, index) => (
//         <NavLink
//             key={nav.label + "header" + index}
//             to={nav.href}
//             className={({isActive}) => `px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}
//         >
//             {nav.label}
//         </NavLink>
//     ))
// }

//                 </nav>

//                 <div className='ml-auto flex items-center gap-5'>
//                     <form className='flex items-center gap-2' onSubmit={handleSubmit}>
//                         <input
//                             type='text'
//                             placeholder='Search here...'
//                             className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
//                             onChange={(e)=>setSearchInput(e.target.value)}
//                             value={searchInput}
//                         />
//                         <button className='text-2xl text-white'>
//                                 <IoSearchOutline/>
//                         </button>
//                     </form>
//                     <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
//                         <img
//                             src={userIcon}
//                             width='w-ful h-full'
//                         />
//                     </div>
//                 </div>
//             </div>
//     </header>
//   )
// }

// export default Header

// import React, { useEffect, useState } from "react";
// import useTheme from "../hooks/useTheme";
// import { FaMoon, FaSun } from "react-icons/fa";
// import logo from "../assets/logo.png";
// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import userIcon from "../assets/user.png";
// import { IoSearchOutline } from "react-icons/io5";
// import { navigation } from "../contants/navigation";

// const Header = () => {
//   const [theme, setTheme] = useTheme();

//   <button
//     onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//     className="ml-4 p-2 rounded bg-neutral-200 dark:bg-neutral-800 text-xl"
//     aria-label="Toggle dark/light mode"
//   >
//     {theme === "dark" ? <FaSun /> : <FaMoon />}
//   </button>;

//   const location = useLocation();
//   const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
//   const [searchInput, setSearchInput] = useState(removeSpace);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (searchInput) {
//       navigate(`/search?q=${searchInput}`);
//     }
//   }, [searchInput]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
//       <div className="container mx-auto px-3 flex items-center h-full">
//         <Link to={"/"}>
//           <img src={logo} alt="Movieo logo" width={120} />
//         </Link>

//         <nav
//           className="hidden lg:flex items-center gap-1 ml-5"
//           aria-label="Main navigation"
//         >
//           {navigation.map((nav, index) => (
//             <NavLink
//               key={nav.label + "header" + index}
//               to={nav.href}
//               className={({ isActive }) =>
//                 `px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`
//               }
//             >
//               {nav.label}
//             </NavLink>
//           ))}
//         </nav>

//         <div className="ml-auto flex items-center gap-5">
//           <form className="flex items-center gap-2" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Search here..."
//               className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
//               onChange={(e) => setSearchInput(e.target.value)}
//               value={searchInput}
//               aria-label="Search movies or TV shows"
//             />
//             <button className="text-2xl text-white" aria-label="Search">
//               <IoSearchOutline />
//             </button>
//           </form>
//           <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
//             <img src={userIcon} alt="User avatar" className="w-full h-full" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useEffect, useState } from "react";
// import useTheme from "../hooks/useTheme";
// import { FaMoon, FaSun } from "react-icons/fa";
// import logo from "../assets/logo.png";
// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import userIcon from "../assets/user.png";
// import { IoSearchOutline } from "react-icons/io5";
// import { navigation } from "../contants/navigation";

// const Header = () => {
//   const [theme, setTheme] = useTheme();

//   const location = useLocation();
//   const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
//   const [searchInput, setSearchInput] = useState(removeSpace);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (searchInput) {
//       navigate(`/search?q=${searchInput}`);
//     }
//   }, [searchInput, navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
//       <div className="container mx-auto px-3 flex items-center h-full">
//         <Link to={"/"}>
//           <img src={logo} alt="Movieo logo" width={120} />
//         </Link>

//         <nav
//           className="hidden lg:flex items-center gap-1 ml-5"
//           aria-label="Main navigation"
//         >
//           {navigation.map((nav, index) => (
//             <NavLink
//               key={nav.label + "header" + index}
//               to={nav.href}
//               className={({ isActive }) =>
//                 `px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`
//               }
//             >
//               {nav.label}
//             </NavLink>
//           ))}
//         </nav>

//         <div className="ml-auto flex items-center gap-5">
//           {/* THEME TOGGLE BUTTON */}
//           <button
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//             className="ml-2 p-2 rounded bg-neutral-200 dark:bg-neutral-800 text-xl transition-colors duration-300"
//             aria-label="Toggle dark/light mode"
//           >
//             {theme === "dark" ? <FaSun /> : <FaMoon />}
//           </button>

//           {/* <form className="flex items-center gap-2" onSubmit={handleSubmit}> */}
//           <form
//             className="bg-white text-black
//   dark:bg-neutral-800 dark:text-white
//   border border-neutral-300 dark:border-neutral-700
//   rounded px-4 py-1
//   outline-none
//   focus:ring-2 focus:ring-orange-500
//   transition-colors duration-300
//   hidden lg:block"
//             onSubmit={handleSubmit}
//           >
//             <input
//               type="text"
//               placeholder="Search here..."
//               className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
//               onChange={(e) => setSearchInput(e.target.value)}
//               value={searchInput}
//               aria-label="Search movies or TV shows"
//             />
//             <button className="text-2xl text-white" aria-label="Search">
//               <IoSearchOutline />
//             </button>
//           </form>
//           <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
//             <img src={userIcon} alt="User avatar" className="w-full h-full" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useEffect, useState } from "react";
// import useTheme from "../hooks/useTheme";
// import { FaMoon, FaSun } from "react-icons/fa";
// import logo from "../assets/logo.png";
// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import userIcon from "../assets/user.png";
// import { IoSearchOutline } from "react-icons/io5";
// import { navigation } from "../contants/navigation";

// const Header = () => {
//   const [theme, setTheme] = useTheme();

//   const location = useLocation();
//   const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
//   const [searchInput, setSearchInput] = useState(removeSpace);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (searchInput) {
//       navigate(`/search?q=${searchInput}`);
//     }
//   }, [searchInput, navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
//       <div className="container mx-auto px-3 flex items-center h-full">
//         <Link to={"/"}>
//           <img src={logo} alt="Movieo logo" width={120} />
//         </Link>

//         <nav
//           className="hidden lg:flex items-center gap-1 ml-5"
//           aria-label="Main navigation"
//         >
//           {navigation.map((nav, index) => (
//             <NavLink
//               key={nav.label + "header" + index}
//               to={nav.href}
//               className={({ isActive }) =>
//                 `px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`
//               }
//             >
//               {nav.label}
//             </NavLink>
//           ))}
//         </nav>

//         <div className="ml-auto flex items-center gap-5">
//           {/* THEME TOGGLE BUTTON */}
//           <button
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//             className="ml-2 p-2 rounded bg-neutral-200 dark:bg-neutral-800 text-xl text-black dark:text-white transition-colors duration-300"
//             aria-label="Toggle dark/light mode"
//           >
//             {theme === "dark" ? <FaSun /> : <FaMoon />}
//           </button>

//           {/* SEARCH FORM */}
//           <form
//             className="hidden md:flex items-center gap-2 lg:flex"
//             onSubmit={handleSubmit}
//           >
//             <input
//               type="text"
//               placeholder="Search here..."
//               className="
//                 bg-white text-black
//                 dark:bg-neutral-800 dark:text-white
//                 border border-neutral-300 dark:border-neutral-700
//                 rounded px-4 py-1
//                 focus:outline-none focus:ring-2 focus:ring-orange-500
//                 transition-colors duration-300
//               "
//               onChange={(e) => setSearchInput(e.target.value)}
//               value={searchInput}
//               aria-label="Search movies or TV shows"
//             />
//             <button
//               className="text-2xl text-black dark:text-white transition-colors duration-300"
//               aria-label="Search"
//               type="submit"
//             >
//               <IoSearchOutline />
//             </button>
//           </form>
//           <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
//             <img src={userIcon} alt="User avatar" className="w-full h-full" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




// import React, { useEffect, useState } from "react";
// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";
// import userIcon from "../assets/user.png";
// import { IoSearchOutline } from "react-icons/io5";
// import { navigation } from "../contants/navigation";

// const Header = () => {
//   const location = useLocation();
//   const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
//   const [searchInput, setSearchInput] = useState(removeSpace);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (searchInput) {
//       navigate(`/search?q=${searchInput}`);
//     }
//   }, [searchInput, navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     // <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
//     <header className="fixed top-0 w-full h-16 bg-black/70 backdrop-blur-md z-40">
//       <div className="container mx-auto px-3 flex items-center h-full">
//         {/* <Link to={"/"}>
//           <img src={logo} alt="Movieo logo" width={120} />
//         </Link> */}

//         {/* <Link
//           to="/"
//           className="text-2xl font-bold text-white hover:text-orange-500 transition-colors"
//         >
//           Cineverse
//         </Link> */}

//         <Link
//           to="/"
//           className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500
// hover:from-pink-500 hover:to-purple-500 transition-colors"
//         >
//           CINEVERSE
//         </Link>

//         <nav
//           className="hidden lg:flex items-center gap-1 ml-5"
//           aria-label="Main navigation"
//         >
//           {navigation.map((nav, index) => (
//             <NavLink
//               key={nav.label + "header" + index}
//               to={nav.href}
//               className={({ isActive }) =>
//                 `px-2 hover:text-white ${
//                   isActive ? "text-white" : "text-gray-400"
//                 }`
//               }
//             >
//               {nav.label}
//             </NavLink>
//           ))}
//         </nav>

//         <div className="ml-auto flex items-center gap-5">
//           {/* SEARCH FORM */}
//           <form
//             className="hidden md:flex items-center gap-2 lg:flex"
//             onSubmit={handleSubmit}
//           >
//             <input
//               type="text"
//               placeholder="Search here..."
//               className="
//                 bg-gray-800 text-white
//                 border border-gray-600
//                 rounded px-4 py-1
//                 focus:outline-none focus:ring-2 focus:ring-orange-500
//                 transition-colors duration-300
//               "
//               onChange={(e) => setSearchInput(e.target.value)}
//               value={searchInput}
//               aria-label="Search movies or TV shows"
//             />
//             <button
//               className="text-2xl text-white transition-colors duration-300"
//               aria-label="Search"
//               type="submit"
//             >
//               <IoSearchOutline />
//             </button>
//           </form>
//           {/* <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all"> */}
//           <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer hover:scale-105 active:scale-95 transition-all">
//             <img src={userIcon} alt="User avatar" className="w-full h-full" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;







import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../contants/navigation";

const Header = () => {
  const location = useLocation();
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
  const [searchInput, setSearchInput] = useState(removeSpace || "");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-black/70 backdrop-blur-md z-40">
      <div className="container mx-auto px-3 flex items-center h-full">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500
hover:from-pink-500 hover:to-purple-500 transition-colors"
        >
          CINEVERSE
        </Link>

        <nav
          className="hidden lg:flex items-center gap-1 ml-5"
          aria-label="Main navigation"
        >
          {navigation.map((nav, index) => (
            <NavLink
              key={nav.label + "header" + index}
              to={nav.href}
              className={({ isActive }) =>
                `px-2 hover:text-white ${
                  isActive ? "text-white" : "text-gray-400"
                }`
              }
            >
              {nav.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-5">
          {/* SEARCH FORM */}
          <form
            className="hidden md:flex items-center gap-2 lg:flex"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Search here..."
              className="
                bg-gray-800 text-white
                border border-gray-600
                rounded px-4 py-1
                focus:outline-none focus:ring-2 focus:ring-orange-500
                transition-colors duration-300
              "
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              aria-label="Search movies or TV shows"
            />
            <button
              className="text-2xl text-white transition-colors duration-300"
              aria-label="Search"
              type="submit"
            >
              <IoSearchOutline />
            </button>
          </form>

          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer hover:scale-105 active:scale-95 transition-all">
            <img src={userIcon} alt="User avatar" className="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
