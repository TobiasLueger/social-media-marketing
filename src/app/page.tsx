import Image from "next/image"
import { Nav } from "@/components/nav"
import { FeatureCard } from "@/components/feature-card"
import { LogoCloud } from "@/components/logo-cloud"
import { FeaturesSection } from "@/components/features-section"

export default function Home() {
  const features = [
    {
      icon: "/placeholder.svg?height=24&width=24",
      title: "Sales",
      description: "Lorem ipsum is simply dummy text of the",
    },
    {
      icon: "/placeholder.svg?height=24&width=24",
      title: "Marketing",
      description: "Lorem ipsum is simply dummy text of the",
    },
    {
      icon: "/placeholder.svg?height=24&width=24",
      title: "Idia",
      description: "Lorem ipsum is simply dummy text of the",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-mint-50">
      <Nav />
      <main className="max-w-7xl mx-auto px-4">
        <div className="py-12 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Social Media Marketing
            </h1>
            <div className="space-y-4 max-w-lg">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Marketing illustration"
              width={600}
              height={600}
              className="w-full"
            />
          </div>
        </div>
        <LogoCloud />
        <FeaturesSection />
      </main>
    </div>
  )
}

