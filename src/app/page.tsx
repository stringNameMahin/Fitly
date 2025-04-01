import ImageCarousel from "@/components/image-carousel"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <Navbar />
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Introducing <span className="text-primary">Fitly</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}


