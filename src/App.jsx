import { Route, Routes } from "react-router-dom"
import { Navbar, Sidebar, TopPlay } from "./components"
import { AroundYou, Artists, Discover, Songs, TopArtists, TopCharts } from "./pages"

function App() {
  

  return (
    <div className="relative flex">
      <Sidebar />
      <main className="md:ml-60 lg:ml-64 xl:ml-72 pt-1 w-full h-screen">
        <Navbar />
        <div className="p-1 container mx-auto">
          <div className="h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit pb-40">
              <Routes>
                <Route path="/" element={<Discover />} />
                <Route path="/around-you" element={<AroundYou />} />
                <Route path="/top-artists" element={<TopArtists />} />
                <Route path="/top-charts" element={<TopCharts />} />
                <Route path="/songs/:id" element={<Songs />} />
                <Route path="/artists/:id" element={<Artists />} />
              </Routes>
            </div>
            <div className="xl:sticky relative top-0 h-fit">
              <TopPlay />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
