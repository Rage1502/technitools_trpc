import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { api } from "@/utils/api";
import { Paperclip, Send } from "lucide-react";
import { type SubmitHandler, useForm } from "react-hook-form";

interface Form {
  content: string;
}

export const AddCommentsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      content: "",
    },
  });
  const utils = api.useContext();

  const { mutate: addComment } = api.comment.create.useMutation();

  const submit: SubmitHandler<Form> =  (data) => {
    const newComment = {
      ...data,
      userName: "Diana Berezina",
    };

    addComment(newComment, {
      async onSuccess() {
        await utils.comment.getAll.invalidate();
        reset();
      },
    });

  };

  return (
    <div className="flex gap-3 pt-1">
      <Avatar>
        <AvatarImage
          width={40}
          height={40}
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex grow items-center justify-between rounded-md border border-slate-200">
        <form className="grow" onSubmit={handleSubmit(submit)}>
          <div className="relative">
            <Input
              {...register("content", {
                required: "This is required field",
              })}
              placeholder="Add a comment..."
              className="border-none pr-20 shadow-none placeholder:text-slate-400 focus-visible:ring-1"
            />

            <div className="absolute right-3 top-0 flex translate-y-[35%] transform gap-3">
              <Paperclip className="cursor-pointer text-slate-400" />
                {isValid &&  <button type="submit"><Send className="cursor-pointer text-slate-400" /></button>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
