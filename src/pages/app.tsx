import { Button } from '~/components/ui/button'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { URLs } from '~/url'
import type { VideoItem } from '~/types'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [syncData, setSyncData] = useState<VideoItem[]>([])

  type Data = {
    videos: {
      items: VideoItem[]
    }
  }

  async function getVideos() {
    const isProduction = process.env.NODE_ENV === 'production'
    const API_URL = isProduction ? URLs.videos.prod : URLs.videos.dev
    const response: Response = await fetch(API_URL, {
      method: 'GET',
      credentials: 'include',
    })
    if (response.ok) {
      const data = (await response.json()) as Data
      console.log(data)
      setSyncData(data.videos.items)
    }
  }

  type video = {
    etag: string
    snippet: {
      title: string
    }
  }

  return (
    <div>
      <div className="m-8 border bg-card shadow-sm  rounded-lg">
        <div className="p-4">
          {!isLoading && (
            <Button
              onClick={() => {
                setIsLoading(true)

                getVideos()
                  .then(() => {
                    setIsLoading(false)
                  })
                  .catch((error) => {
                    console.error('Error:', error)
                    setIsLoading(false)
                  })
              }}
            >
              get youtube videos
            </Button>
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
