"use client";

import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import { useRouter } from "src/routes/hooks";
import { paths } from "src/routes/paths";

// Services
import BlogService from "src/services/blog/blog.service";

// Components
import {
  BlogHeader,
  BlogGrid,
  BlogLoadMore,
  BlogEmptyState,
  BlogErrorState,
  BlogLoadingState,
} from "./components";

// ----------------------------------------------------------------------

const Blog = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await BlogService.getAll();
        const allPosts = response?.data?.data || [];
        setPosts(allPosts);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleViewDetails = (post) => {
    // Navigate to blog detail page
    const titleSlug = post.title.toLowerCase().replace(/\s+/g, "-");
    router.push(paths.blog.details(titleSlug));
  };

  const handleLoadMore = () => {
    // TODO: Implement pagination logic
    console.log("Load more posts");
  };

  const uniqueCategories = Array.from(
    new Set(
      posts.map((post) => {
        if (typeof post.category === "string") return post.category;
        if (post.category?.label) return post.category.label;
        if (post.category?.name) return post.category.name;
        return "Stories";
      })
    )
  );

  const uniqueTags = Array.from(
    new Set(posts.flatMap((post) => post.tags || []))
  );

  const featuredTags = uniqueTags.slice(0, 6);

  if (loading) {
    return <BlogLoadingState />;
  }

  if (error) {
    return <BlogErrorState error={error} />;
  }

  if (posts.length === 0) {
    return <BlogEmptyState />;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #020617 0%, #0f172a 65%, #020617 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.25), transparent 55%), radial-gradient(circle at 80% 15%, rgba(16,185,129,0.2), transparent 60%)",
          opacity: 0.8,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <BlogHeader
          postCount={posts.length}
          categoryCount={uniqueCategories.length}
          featuredTags={featuredTags}
        />

        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            borderRadius: { xs: 4, md: 6 },
            px: { xs: 2, md: 5 },
            py: { xs: 3, md: 6 },
            background: "rgba(15, 23, 42, 0.78)",
            boxShadow: "0 45px 120px rgba(2, 6, 23, 0.55)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(148, 163, 184, 0.12)",
          }}
        >
          <BlogGrid posts={posts} onViewDetails={handleViewDetails} />

          {posts.length >= 6 && (
            <BlogLoadMore onLoadMore={handleLoadMore} />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
