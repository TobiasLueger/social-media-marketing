import Image from "next/image"

export function FeaturesSection() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-6">Features</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
        tincidunt ut laoreet dolore magna aliquam erat volutpat. ut wisi enim
      </p>
      <div className="flex justify-center">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Features illustration"
          width={800}
          height={400}
          className="max-w-3xl w-full"
        />
      </div>
    </section>
  )
}

