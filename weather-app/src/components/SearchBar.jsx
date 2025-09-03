import React from 'react'
import { Search } from 'lucide-react' // or your icon source

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-2xl">
      <form className="relative">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5 group-focus-within:text-white transition-all" />
          <input
            type="text"
            placeholder="Enter location..."
            className="z-10 w-full pl-12 pr-24 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300 hover:bg-white/15"
          />
        </div>
      </form>
    </div>
  )
}
