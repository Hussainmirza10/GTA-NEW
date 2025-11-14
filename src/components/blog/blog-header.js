import { Box, Typography, Stack, Chip } from "@mui/material";

// ----------------------------------------------------------------------

const BlogHeader = ({
  postCount = 0,
  categoryCount = 0,
  featuredTags = [],
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: { xs: 4, md: 6 },
        px: { xs: 3, md: 6 },
        py: { xs: 6, md: 8 },
        background:
          "linear-gradient(135deg, rgba(29, 78, 216, 0.85) 0%, rgba(15, 118, 110, 0.85) 45%, rgba(16, 185, 129, 0.8) 100%)",
        color: "#0B1120",
        boxShadow: "0 45px 120px rgba(15, 23, 42, 0.35)",
        mb: { xs: 6, md: 8 },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top left, rgba(255,255,255,0.25) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(14,165,233,0.18) 0%, transparent 55%)",
        },
      }}
    >
      <Stack spacing={3} sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={1.5} maxWidth={{ xs: "100%", md: "60%" }}>
          <Chip
            label="Stories from the Garage"
            sx={{
              alignSelf: "flex-start",
              textTransform: "uppercase",
              letterSpacing: 1.6,
              fontWeight: 700,
              bgcolor: "rgba(255,255,255,0.18)",
              color: "#0B1120",
              px: 2.5,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.4rem", md: "3.6rem" },
              lineHeight: 1.1,
            }}
          >
            Insight, innovation, and builds we can’t stop talking about.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(14, 23, 42, 0.82)",
              maxWidth: 520,
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            Follow the projects, people, and performance breakthroughs shaping
            Garage Tuned Autos. Fresh drops land every week—tune in and stay
            inspired.
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          flexWrap="wrap"
        >
          <StatPill label="Published Stories" value={postCount} />
          <StatPill label="Categories" value={categoryCount} />
          <StatPill
            label="Featured Garage Tags"
            value={featuredTags.length}
          />
        </Stack>

        {!!featuredTags.length && (
          <Stack
            direction="row"
            spacing={1.5}
            flexWrap="wrap"
            sx={{ pt: 2 }}
          >
            {featuredTags.map((tag) => (
              <Chip
                key={tag}
                label={`#${tag}`}
                sx={{
                  bgcolor: "rgba(255,255,255,0.22)",
                  color: "#0B1120",
                  fontWeight: 600,
                  borderRadius: "999px",
                  px: 1.5,
                }}
              />
            ))}
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

const StatPill = ({ label, value }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 2,
      px: 3,
      py: 2,
      borderRadius: 3,
      bgcolor: "rgba(255,255,255,0.2)",
      border: "1px solid rgba(255,255,255,0.3)",
      minWidth: { xs: "auto", sm: 200 },
      boxShadow: "0 20px 50px rgba(14, 23, 42, 0.18)",
    }}
  >
    <Typography
      variant="h4"
      sx={{ fontWeight: 800, color: "#0B1120", minWidth: 56 }}
    >
      {value}
    </Typography>
    <Typography
      variant="body2"
      sx={{ color: "rgba(14, 23, 42, 0.75)", fontWeight: 600 }}
    >
      {label}
    </Typography>
  </Box>
);

export default BlogHeader;
