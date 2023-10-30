import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { message } = await req.json()
  try {
    const session = await getServerSession(authOptions)
    const user = session?.user

    if (!user) {
      return NextResponse.json('Unauthorized', { status: 401 })
    }

    // create a  new message in prisma db

    const result = await prisma.guestbook.create({
      data: {
        body: message as string,
        created_by: user?.name as string,
        created_at: new Date(),
        email: user?.email as string,
        image: user?.image as string,
        updated_at: new Date()
      }
    })

    return NextResponse.json(result)
  } catch (error) {
    console.log(error)
    return NextResponse.json(error, { status: 500 })
  }
}
