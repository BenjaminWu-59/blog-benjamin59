import Link from "next/link";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
}

const PostItem = ({
  slug,
  title,
  description,
  date,
  tags,
}: PostItemProps) => {
  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
    </article>
  ); 
}

export default PostItem
