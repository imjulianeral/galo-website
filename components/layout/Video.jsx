export default function Video() {
  return (
    <video
      autoPlay
      loop
      muted
      style={{
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-1',
      }}
      src={require('assets/video/video.mp4')}
    />
  )
}
