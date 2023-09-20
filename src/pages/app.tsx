import { Button } from '~/components/ui/button'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [syncData, setSyncData] = useState([])

  async function getVideos() {
    setIsLoading(true)
    const response = await fetch('http://localhost:8000/api/youtube/videos', {
      credentials: 'include',
    })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json()
    console.log(data)
    setSyncData(data.videos.items)
    setIsLoading(false)
  }
  type video = {
    etag: string
    snippet: {
      title: string
    }
  }

  console.log(syncData)
  return (
    <div>
      <div className="m-8 border bg-card shadow-sm  rounded-lg">
        <div className="p-4">
          {!isLoading && (
            <Button onClick={getVideos}>get youtube videos</Button>
          )}
          {isLoading && (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          )}
        </div>
      </div>
      <div className="m-8 border bg-card shadow-sm  rounded-lg">
        <p className="p-4 text-lg font-bold">Videos</p>
        {syncData.map((video: video) => {
          return (
            <li key={video.etag} className="p-2">
              {video.snippet.title}
            </li>
          )
        })}
      </div>
    </div>
  )
}

export default App
