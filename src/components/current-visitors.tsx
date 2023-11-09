'use client'

const CurrentVisitors = () => {
  // const { data } = useSWR<Analytics>('/api/analytics', fetcher, {
  //   refreshInterval: 30_000 // refresh every 30 seconds
  // })

  return (
    <a
      href={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_SHARE_URL}
      className='flex items-center justify-center gap-2'
      rel='noopener noreferrer'
      target='_blank'
      aria-label='Current visitors'
    >

      <>
        <span className='relative flex h-3 w-3'>
          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
          <span className='relative inline-flex h-3 w-3 rounded-full bg-green-500' />
        </span>
        I'm watching you
      </>

    </a>
  )
}

export default CurrentVisitors
