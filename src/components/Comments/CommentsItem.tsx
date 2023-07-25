import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type Comment } from "@prisma/client";
import { Dot } from "lucide-react";

const СommentsItem: React.FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <div className="mb-4 flex  flex-col">
      <div className="flex flex-shrink-0 items-center gap-4">
        <Avatar>
          <AvatarImage
            width={40}
            height={40}
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-wrap gap-1 items-center text-sm font-medium text-gray-900">
          <div className="font-semibold"> {comment.userName} </div>

          <div className="flex items-center text-slate-400 font-normal">
          <div className="text-slate-400"> added a comment </div>
            <Dot /> 
            <div >27 days ago</div>
          </div>
        </div>
      </div>
      <div>
        <div className="ml-11 mt-1 max-w-[352px] text-sm text-slate-900">
          {comment.content}
        </div>
      </div>
    </div>
  );
};

export default СommentsItem;
