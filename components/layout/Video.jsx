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
      src="./video.mp4"
    />
  )
}
