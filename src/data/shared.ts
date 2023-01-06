import type { GetStaticPaths, MDXInstance, Page, MDXLayoutProps } from "astro";

interface BaseFrontmatter {
	slug: string;
	url: URL;
  draft: boolean;
}

interface IElement {
	readonly as?: keyof HTMLElementTagNameMap;
}

interface PaginationLink {
	url: string;
	text?: string;
	srLabel?: string;
}

export type {
	BaseFrontmatter,
	Page,
	GetStaticPaths,
	MDXInstance,
	MDXLayoutProps,
	IElement,
	PaginationLink,
};
