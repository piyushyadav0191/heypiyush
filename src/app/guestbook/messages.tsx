'use client'

import dayjs from 'dayjs'
import React from 'react'

import { Avatar, AvatarFallback, AvatarImage, Skeleton } from '@/components/ui'

/**
 * The props of {@link Messages}.
 */
type MessagesProps = {
  body: string
  created_at: Date
  created_by: String
  image: string
}

/**
 * The props of {@link UpdatedDate}.
 */
type UpdatedDateProps = {
  /**
   * The date of the message to format.
   */
  date: Date
}

const UpdatedDate = (props: UpdatedDateProps) => {
  const { date } = props
  const [formattedDate, setFormattedDate] = React.useState('')

  React.useEffect(() => {
    setFormattedDate(dayjs(date).format('YYYY-MM-DD HH:mm'))
  }, [date])

  if (!formattedDate) return <Skeleton className='h-4 w-24 rounded-md' />

  return <div className='text-xs text-muted-foreground'>{formattedDate}</div>
}

const Messages = ({ body, created_at, created_by, image }: MessagesProps) => {
  console.log(body)
  return (
    <div className='mt-10 flex flex-col gap-4'>
      <div className='rounded-lg border p-4'>
        <div className='mb-3 flex gap-3'>
          <Avatar>
            <AvatarImage
              src={image}
              width={40}
              height={40}
              className='h-10 w-10 rounded-full'
              alt={created_by}
            />
            <AvatarFallback className='bg-transparent'>
              <Skeleton className='h-10 w-10 rounded-full' />
            </AvatarFallback>
          </Avatar>
          <div className='flex flex-col justify-center gap-px text-sm'>
            <div>{created_by}</div>
            <UpdatedDate date={created_at} />
          </div>
        </div>
        <div className='break-words pl-[52px]'>{body}</div>
      </div>
    </div>
  )
}

export default Messages
