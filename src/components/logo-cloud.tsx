import Image from "next/image"

export function LogoCloud() {
  const logos = [
    { src: "/placeholder.svg?height=40&width=100", alt: "Avast" },
    { src: "/placeholder.svg?height=40&width=100", alt: "BuzzFeed" },
    { src: "/placeholder.svg?height=40&width=100", alt: "Booking.com" },
    { src: "/placeholder.svg?height=40&width=100", alt: "Expedia" },
    { src: "/placeholder.svg?height=40&width=100", alt: "Dispatch" },
  ]

  return (
    <div className="py-12">
      <div className="flex flex-wrap justify-center gap-8 items-center grayscale opacity-70">
        {logos.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={100}
            height={40}
            className="h-10 object-contain"
          />
        ))}
      </div>
    </div>
  )
}

