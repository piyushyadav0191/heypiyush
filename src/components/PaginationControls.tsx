"use client"

import { FC } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { IconChevronDownLeft, IconChevronDownRight, IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PaginationControls: FC<PaginationControlsProps> = ({ hasNextPage, hasPrevPage }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get("page") ?? "1"
  const per_page = searchParams.get("per_page") ?? "5"
  return (
    <div className="text-center flex">
      <div className="flex gap-2 shadow-md rounded-lg p-4">
        {hasPrevPage ? (
          <button className="bg-blue-500 text-white p-1 rounded"
            disabled={!hasPrevPage}
            onClick={() => {
              router.push(`/guestbook/?page=${Number(page) - 1}&per_page=${per_page}`)
            }}
          ><IconChevronLeft /></button>
        ) : (
          <button className="bg-black text-white p-1 rounded"
            disabled

          ><IconChevronLeft /></button>
        )}

        {hasNextPage ? (
          <button className="bg-blue-500 text-white p-1 rounded"
            disabled={!hasNextPage}
            onClick={() => {
              router.push(`/guestbook/?page=${Number(page) + 1}&per_page=${per_page}`)
            }}
          >
            <IconChevronRight />
          </button>

        ) : (
          <button className="bg-black text-white p-1 rounded"
            disabled
          >
            <IconChevronRight />
          </button>
        )}
      </div>
    </div>
  )
}

export default PaginationControls
