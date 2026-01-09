import type { Metadata } from "next";
import { buildMetadataForPost, getPostBySlug } from "@/lib/blog/posts";

export const generateMetadata = (): Metadata => {
  const post = getPostBySlug("ux-design-experience-utilisateur");
  return buildMetadataForPost(post);
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
