import Image from "next/image";
import type { Mention as MentionType } from "@/types";

interface MentionProps {
  mention: MentionType;
}

export const Mention = ({ mention }: MentionProps) => {
  const formattedDate = new Date(mention.published).toLocaleTimeString(
    "default",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    },
  );

  return (
    <div className="flex gap-4">
      <Image
        src={mention.author.photo}
        alt={mention.author.name}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col gap-1">
        <div
          dangerouslySetInnerHTML={{ __html: mention.content.html }}
          className="lg:max-w-[60ch] md:text-lg !leading-normal [&_a]:underline [&_a]:hover:no-underline"
        />
        <time
          dateTime={mention.published}
          className="block text-neutral-500 font-sans"
        >
          {formattedDate}
        </time>
      </div>
    </div>
  );
};
