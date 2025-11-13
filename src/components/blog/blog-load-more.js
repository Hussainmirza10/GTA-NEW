import { Box, Button } from "@mui/material";

// ----------------------------------------------------------------------

const BlogLoadMore = ({ onLoadMore, disabled = false }) => {
  return (
    <Box sx={{ textAlign: "center", mt: 6 }}>
      <Button
        variant="contained"
        size="large"
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: "999px",
          fontWeight: 700,
          background:
            "linear-gradient(135deg, rgba(59,130,246,1) 0%, rgba(16,185,129,1) 100%)",
          boxShadow: "0 16px 40px rgba(59, 130, 246, 0.35)",
          "&:hover": {
            background:
              "linear-gradient(135deg, rgba(37,99,235,1) 0%, rgba(5,150,105,1) 100%)",
            boxShadow: "0 24px 60px rgba(16, 185, 129, 0.35)",
          },
        }}
        onClick={onLoadMore}
        disabled={disabled}>
        Load More Posts
      </Button>
    </Box>
  );
};

export default BlogLoadMore;
