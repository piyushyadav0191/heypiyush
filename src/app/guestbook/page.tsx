// page.tsx
import type { Metadata, ResolvingMetadata } from "next";
import { headers } from "next/headers";
import PageTitle from "@/components/page-title";
import site from "@/config/site";
import Pinned from "./pinned";
import GuestSlot from "./_global/guestslot";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

const title = "Guestbook";
const description = "Sign my guestbook and share your idea.";

type GuestbookPageProps = {
  params: Record<string, never>;
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async (
  _: GuestbookPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph ?? {};
  const previousTwitter = (await parent)?.twitter ?? {};

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/guestbook`,
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/guestbook`,
      title,
      description,
    },
    twitter: {
      ...previousTwitter,
      title,
      description,
    },
  };
};

export const dynamic = "force-dynamic";

const GuestbookPage = async ({ searchParams }: GuestbookPageProps) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const messages = await prisma.guestbook.findMany({
    orderBy: {
      created_at: "desc",
    },
    select: {
      body: true,
      created_at: true,
      created_by: true,
      image: true,
      id: true,
    },
  });

  const headersList = await headers();
  const pathname =
    headersList.get("x-pathname") || headersList.get("x-invoke-path") || "";
  const isGuestbookPage = pathname === "/guestbook";

  let entries = messages;
  let start = 0;
  let end = messages.length;

  // Only apply pagination if we're on the guestbook page
  if (isGuestbookPage) {
    const page = searchParams["page"] ?? "1";
    const per_page = searchParams["per_page"] ?? "5";
    start = (Number(page) - 1) * Number(per_page);
    end = start + Number(per_page);
    entries = messages.slice(start, end);
  }

  return (
    <>
      <PageTitle
        title="Guestbook"
        description="You can tell me anything here!"
      />
      <div className="mx-auto max-w-lg">
        <Pinned />
        <GuestSlot
          user={user}
          entries={entries}
          start={start}
          end={end}
          messagesLength={messages.length}
          showPagination={isGuestbookPage}
        />
      </div>
    </>
  );
};

export default GuestbookPage;
