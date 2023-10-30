import Script from 'next/script'
import React from 'react'


const Analytics = () => {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <Script
      async
      data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      src={`${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
    />
  )
}

export default Analytics
