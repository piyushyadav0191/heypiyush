import type { Metadata, ResolvingMetadata } from 'next'

import PageTitle from '@/components/page-title'
import site from '@/config/site'
import { CardStackDemo } from './_components/card-stack'

// export const runtime = 'edge'
const title = 'Goals'
const description =
  'These are the goals which I have decided to complete them in my free time'

/**
 * The props of {@link GoalsPage}.
 */
type GoalsPageProps = {
  /**
   * The params of the URL.
   */
  params: Record<string, never>
  /**
   * The search params of the URL.
   */
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: GoalsPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/goals`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/goals`,
      title,
      description
    },
    twitter: {
      ...previousTwitter,
      title,
      description
    }
  }
}

const GoalsPage = () => {

  return (
    <>
      <PageTitle
        title='Goals'
        description='These are the goals I have decided to complete in my free time.'
      />
        <CardStackDemo />
    </>
  )
}

export default GoalsPage
