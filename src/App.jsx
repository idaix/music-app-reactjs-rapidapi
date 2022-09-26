import { Route, Routes } from "react-router-dom"
import { Navbar, Sidebar } from "./components"
import { AroundYou, Discover, TopArtists, TopCharts } from "./pages"

function App() {
  

  return (
    <div className="relative flex">
      <Sidebar />
      <main className="md:ml-60 lg:ml-64 xl:ml-72 pt-1 w-full h-screen">
        <Navbar />
        <div className="p-1 container mx-auto">
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/around-you" element={<AroundYou />} />
            <Route path="/top-artists" element={<TopArtists />} />
            <Route path="/top-charts" element={<TopCharts />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
