import type { Metadata, ResolvingMetadata } from 'next'

import PageTitle from '@/components/page-title'
import site from '@/config/site'

import Form from './form'
import Messages from './messages'
import Pinned from './pinned'
import SignIn from './sign-in'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import prisma from '@/lib/prisma'
import PaginationControls from '@/components/PaginationControls'

const title = 'Guestbook'
const description = 'Sign my guestbook and share your idea.'

/**
 * The props of {@link GuestbookPage}.
 */
type GuestbookPageProps = {
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
  _: GuestbookPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {}
  const previousTwitter = (await parent)?.twitter ?? {}

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/guestbook`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/guestbook`,
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

export const dynamic = 'force-dynamic'

const GuestbookPage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '5'

  const start = (Number(page) - 1) * Number(per_page) // 0 5 10..
  const end = start + Number(per_page) // 5 10 15..

  const session = await getServerSession(authOptions)
  const user = session?.user
  const messages = await prisma.guestbook.findMany({
    orderBy: {
      created_at: 'desc'
    },
    select: {
      body: true,
      created_at: true,
      created_by: true,
      image: true,
      id: true
    }
  })

  const entries = messages.slice(start, end)


  return (
    <>
      <PageTitle
        title='Guestbook'
        description='You can tell me anything here!'
      />
      <div className='mx-auto max-w-lg'>
        <Pinned />
        {!user && <SignIn />} 
        {user && <Form user={user} />} 
        {entries.map((message: any) => {
          return (
            <Messages
              key={message.id}
              body={message.body}
              created_at={message.created_at}
              created_by={message.created_by}
              image={message.image}
            />
          )
        })}
        <div className='flex justify-center mt-6'>

          <PaginationControls hasNextPage={end < messages.length} hasPrevPage={start > 0} />
        </div>
      </div>
    </>
  )
}

export default GuestbookPage
