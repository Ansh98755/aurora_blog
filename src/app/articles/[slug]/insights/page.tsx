import { notFound } from "next/navigation";
import { samplePosts } from "@/lib/posts";
import { ArticleInsightsClient } from "@/components/articles/ArticleInsightsClient";
import { use } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function ArticleInsightsPage({ params }: Props) {
  const { slug } = use(params);
  const post = samplePosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <ArticleInsightsClient post={post} />;
}

