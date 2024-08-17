/* This is a component for the routes of the post articles */
import { posts } from "#site/content";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { notFound } from "next/navigation";


interface PostPageProps {
  params: {
    slug: string[];
  }
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}


const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostFromParams(params)

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{post.title}</h1>

    </article>
  )
}


export default PostPage