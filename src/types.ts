export type VideoItem = {
  etag: string
  id: string
  kind: string
  snippet: {
    channelId: string
    channelTitle: string
    description: string
    playlistId: string
    position: number
    publishedAt: string
    resourceId: {
      kind: string
      videoId: string
    }
    thumbnails: {
      default: { url: string; width: number; height: number }
    }
    title: string
    videoOwnerChannelId: string
    videoOwnerChannelTitle: string
  }
}
