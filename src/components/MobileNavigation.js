// import React from 'react'
// import { mobileNavigation } from '../contants/navigation'
// import { NavLink } from 'react-router-dom'

// const MobileNavigation = () => {
//   return (
//     <section className='lg:hidden h-14 bg-black bg-opacity-70 backdrop-blur-2xl fixed bottom-0 w-full z-40'>
//         <div className='flex items-center justify-between h-full text-neutral-400'>
//             {
//                 mobileNavigation.map((nav,index)=>{
//                     return(
//                         <NavLink
//                             key={nav.label+"mobilenavigation"}
//                             to={nav.href}
//                             className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`}
//                         >
//                             <div className='text-2xl'>
//                                 {nav.icon}
//                             </div>
//                             <p className='text-sm'>{nav.label}</p>
//                         </NavLink>
//                     )
//                 })
//             }
//         </div>
//     </section>
//   )
// }

// export default MobileNavigation



// import React from 'react'
// import { mobileNavigation } from '../contants/navigation'
// import { NavLink } from 'react-router-dom'

// const MobileNavigation = () => {
//   return (
//     <nav
//       className='lg:hidden h-14 bg-black bg-opacity-70 backdrop-blur-2xl fixed bottom-0 w-full z-40'
//       aria-label="Mobile navigation"
//     >
//       <div className='flex items-center justify-between h-full text-neutral-400'>
//         {
//           mobileNavigation.map((nav, index) => (
//             <NavLink
//               key={nav.label + "mobilenavigation"}
//               to={nav.href}
//               className={({ isActive }) =>
//                 `px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`
//               }
//               aria-label={nav.label}
//             >
//               <div className='text-2xl'>
//                 {nav.icon}
//               </div>
//               <p className='text-sm'>{nav.label}</p>
//             </NavLink>
//           ))
//         }
//       </div>
//     </nav>
//   )
// }

// export default MobileNavigation



import React from 'react'
import { mobileNavigation } from '../contants/navigation'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <nav
      className="lg:hidden h-14 bg-black/70 backdrop-blur-2xl fixed bottom-0 w-full z-40"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-between h-full">
        {mobileNavigation.map((nav, index) => (
          <NavLink
            key={nav.label + "mobilenavigation"}
            to={nav.href}
            className={({ isActive }) =>
              `px-3 flex h-full items-center flex-col justify-center transition-colors duration-300 ${
                isActive ? "text-white" : "text-neutral-400 hover:text-white"
              }`
            }
            aria-label={nav.label}
          >
            <div className="text-xl">{nav.icon}</div>
            <p className="text-xs">{nav.label}</p>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default MobileNavigation
