// import type { NextPageContext } from 'next'
// import { getGoogleOAuthTokens } from '~/getGoogleOAuthTokens'
// import { serialize } from 'cookie'
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

// export const getServerSideProps = async (context: NextPageContext) => {
//   // const isProduction = process.env.NODE_ENV === 'production'
//   // const code = context.query.code as string
//   // const API_URL = isProduction ? URLs.getTokens.prod : URLs.getTokens.dev
//   // await fetch(API_URL + code, {
//   //   credentials: 'include',
//   // })

//   const code = context.query.code as string

//   try {
//     const tokens = await getGoogleOAuthTokens(code)
//     console.log(tokens)

//     if (!tokens) {
//       throw new Error('Failed to get Google OAuth tokens')
//     }

//     const accessTokenOptions = {
//       httpOnly: true,
//       // maxAge: tokens.expires_in - 200,
//       path: '/api',
//       secure: true,
//     }

//     const refreshTokenOptions = {
//       httpOnly: true,
//       maxAge: 60 * 60 * 24 * 30,
//       path: '/api',
//       secure: true,
//     }

//     if (context.res) {
//       // context.res.setHeader(
//       //   'Set-Cookie',
//       //   serialize('access_token', tokens.access_token, accessTokenOptions)
//       // )
//       // context.res.setHeader(
//       //   'Set-Cookie',
//       //   serialize('refresh_token', tokens.refresh_token, refreshTokenOptions)
//       // )
//       context.res.setHeader(
//         'Set-Cookie',
//         serialize('access_token', tokens.access_token, accessTokenOptions)
//       )
//       // .setHeader('Set-Cookie', serialize('refresh_token', 'kkt'))
//     }
//   } catch (error) {
//     console.error(error)
//   }

//   return { props: {} }
// }
