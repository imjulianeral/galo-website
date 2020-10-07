export default function useMobile() {
  let mobile
  if (
    typeof navigator !== 'undefined' &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    mobile = true
  } else {
    mobile = false
  }

  return mobile
}
