import { env } from './env.mjs'

const scopes = ['https://www.googleapis.com/auth/youtube']

export function getGoogleOAuthURL() {
  const rootURL = 'https://accounts.google.com/o/oauth2/v2/auth'

  const options = {
    redirect_uri: env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL,
    client_id: env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: scopes.join(' '),
  }

  const qs = new URLSearchParams(options)

  return `${rootURL}?${qs.toString()}`
}
