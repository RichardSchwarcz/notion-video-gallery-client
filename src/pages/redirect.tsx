import { Button } from '~/components/ui/button'
import { URLs } from '~/url'

function Redirect() {
  async function getTestcookie() {
    const isProduction = process.env.NODE_ENV === 'production'
    const API_URL = isProduction ? URLs.getTokens.prod : URLs.getTokens.dev
    await fetch(API_URL + window.location.search, {
      credentials: 'include',
      mode: 'no-cors',
      headers: {
        'Content-type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  }
  return (
    <div>
      <Button
        onClick={() => {
          getTestcookie()
            .then(() => {
              console.log('cookie set')
            })
            .catch((e) => {
              console.error(e)
            })
        }}
      >
        getCookies
      </Button>
    </div>
  )
}

export default Redirect
