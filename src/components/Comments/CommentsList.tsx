import { ScrollArea } from "@/components/ui/scroll-area";
import СommentsItem from "./CommentsItem";
import { api } from "@/utils/api";
import { AddCommentsForm } from "./AddCommentsForm";

const CommentsList = () => {
  const { data, isLoading } = api.comment.getAll.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="rounded-md border border-slate-200 px-2 h-[416px] w-full flex flex-col justify-between">
      <ScrollArea className="w-full max-h-full">
        {data.length === 0 ? (
          <p className="flex items-center justify-center">No comments...</p>
        ) : (
          data?.map((comment) => (
            <СommentsItem key={comment.id} comment={comment} />
          ))
        )}
      </ScrollArea>
      <AddCommentsForm />
    </div>
  );
};

export default CommentsList;
