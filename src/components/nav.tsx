import Link from "next/link"
import Image from "next/image"

export function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Marketing Logo"
            width={24}
            height={24}
            className="text-white"
          />
        </div>
        <span className="font-semibold text-xl">Marketing</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <Link href="#" className="text-gray-600 hover:text-gray-900">About</Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">Service</Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">Product</Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">Blog</Link>
      </div>
      <button className="bg-white text-red-500 hover:bg-gray-50 shadow-sm px-4 py-2 rounded-md font-medium">
        Contact Us
      </button>
    </nav>
  )
}

