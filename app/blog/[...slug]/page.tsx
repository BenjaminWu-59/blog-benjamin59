import { posts } from "#site/content";
import { notFound } from "next/navigation";
import MDXContent from "@/components/blogs/MdxContent";
import "@/styles/mdx.css";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }


  return (
      <MDXContent post={post} />
  );
};

export default PostPage;