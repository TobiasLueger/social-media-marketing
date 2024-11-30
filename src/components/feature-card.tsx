import Image from "next/image"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex gap-4 shadow-sm">
      <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center">
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
        />
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

