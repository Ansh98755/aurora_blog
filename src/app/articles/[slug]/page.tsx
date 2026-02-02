import { notFound } from "next/navigation";
import { samplePosts } from "@/lib/posts";
import { ArticlePageClient } from "@/components/articles/ArticlePageClient";
import { use } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function ArticlePage({ params }: Props) {
  const { slug } = use(params);
  const post = samplePosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <ArticlePageClient post={post} />;
}

