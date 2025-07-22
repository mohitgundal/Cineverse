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
