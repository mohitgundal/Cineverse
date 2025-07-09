// // import React from 'react'
// // import { Link } from 'react-router-dom'

// // const Footer = () => {
// //   return (
// //     <footer className='text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2'>
// //         <div className='flex items-center justify-center gap-4'>
// //           <Link to="/" >About</Link>
// //           <Link to="/">Contact</Link>
// //         </div>
// //         <p className='text-sm'>Created By Dynamic Coding with Amit</p>
// //     </footer>
// //   )
// // }

// // export default Footer


// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <footer
//       className='text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2'
//       aria-label="Footer"
//     >
//       <div className='flex items-center justify-center gap-4'>
//         <Link to="/" aria-label="About page">About</Link>
//         <Link to="/" aria-label="Contact page">Contact</Link>
//       </div>
//       <p className='text-sm'>Created By MohitBuilds</p>
//     </footer>
//   )
// }

// export default Footer



import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="text-center bg-neutral-900 text-neutral-300 py-4 border-t border-neutral-700" aria-label="Footer">
      {/* <div className="flex items-center justify-center gap-6 mb-2">
        <Link to="/" aria-label="About page" className="hover:text-white transition-colors">About</Link>
        <Link to="/" aria-label="Contact page" className="hover:text-white transition-colors">Contact</Link>
      </div> */}
      <p className="text-sm text-neutral-100">Created By MohitBuilds</p>
    </footer>
  )
}

export default Footer
