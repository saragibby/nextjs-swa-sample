/**
 * Dynamic page route
 */
import { useRouter } from 'next/router'

export default function Username () {
  const router = useRouter()
  const { username } = router.query

  return(
    <>
    <h1>Dynamic user route (pages/users/[username].js)</h1>
      <h2>Username gives: {username}</h2>
    </>
  )
}