import SignIn from "../sign-in";
import Form from "../form";
import Messages from "../messages";
import PaginationControls from "@/components/PaginationControls";

type GuestSlotProps = {
  user: any;
  entries: any[];
  start: number;
  end: number;
  messagesLength: number;
  showPagination: boolean;
};

const GuestSlot = ({
  user,
  entries,
  start,
  end,
  messagesLength,
  showPagination,
}: GuestSlotProps) => {
  return (
    <div>
      {!user && <SignIn />}
      {user && <Form user={user} />}
      {entries.map((message) => (
        <Messages
          key={message.id}
          body={message.body}
          created_at={message.created_at}
          created_by={message.created_by}
          image={message.image}
        />
      ))}
      {showPagination && (
        <div className="flex justify-center mt-6">
          <PaginationControls
            hasNextPage={end < messagesLength}
            hasPrevPage={start > 0}
          />
        </div>
      )}
    </div>
  );
};

export default GuestSlot;
