// import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { buttonVariants } from '~/components/ui/button'
import { getGoogleOAuthURL } from '~/getGoogleOAuthURL'
import { cn } from '~/lib/utils'

// import { URLs } from '~/url'

export default function AuthenticationPage() {
  // const { isLoading, error, data } = useQuery<{ googleOAuthURL: string }>({
  //   queryKey: ['authLink'],
  //   queryFn: async () => {
  //     const isProduction = process.env.NODE_ENV === 'production'
  //     const API_URL = isProduction ? URLs.auth.prod : URLs.auth.dev
  //     return fetch(API_URL).then((res) => res.json())
  //   },
  // })

  // console.log(data)

  return (
    <>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
            </div>
            {/* 
            {data && (
              <Link
                href={data?.googleOAuthURL}
                className={cn(buttonVariants({ variant: 'default' }))}
              >
                Sign in with Google
              </Link>
            )} */}

            <Link
              href={getGoogleOAuthURL()}
              className={cn(buttonVariants({ variant: 'default' }))}
            >
              Sign in with Google
            </Link>

            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
