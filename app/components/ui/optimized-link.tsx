"use client";
import React from "react";
import { LinkPreview } from "./link-preview";

interface OptimizedLinkProps {
  children: React.ReactNode;
  url: string;
  className?: string;
  isStatic?: boolean;
}

export const OptimizedLink = ({
  children,
  url,
  className,
  isStatic = false,
}: OptimizedLinkProps) => {
  return (
    <LinkPreview
      url={url}
      className={className}
      isStatic={isStatic}
    >
      {children}
    </LinkPreview>
  );
};
