import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function _error() {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])

  return <div />
}
