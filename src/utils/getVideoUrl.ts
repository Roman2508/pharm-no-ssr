export const getVideoUrl = (url: string) => {
  let videoUrl = ''

  if (url) {
    videoUrl = url.replace('https://www.youtube.com/', 'https://www.youtube.com/embed/')
    videoUrl = videoUrl.replace('watch?v=', '')
    videoUrl = videoUrl.split('&t=')[0]
  }

  return videoUrl
}
