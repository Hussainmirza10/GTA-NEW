import { Box, Typography, Stack, Chip } from "@mui/material";

const ForumHeader = ({
  totalTopics = 0,
  categoryCount = 0,
  activeMembers = 0,
  trendingTags = [],
}) => {
  return (
    <Box
      sx={{
        borderRadius: { xs: 4, md: 6 },
        px: { xs: 3, md: 6 },
        py: { xs: 6, md: 8 },
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, rgba(15, 118, 110, 0.88) 0%, rgba(79, 70, 229, 0.82) 60%, rgba(30, 64, 175, 0.85) 100%)",
        color: "#f8fafc",
        boxShadow: "0 45px 120px rgba(8, 15, 40, 0.45)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(255,255,255,0.22) 0%, transparent 55%), radial-gradient(circle at bottom left, rgba(56,189,248,0.28) 0%, transparent 50%)",
        }}
      />

      <Stack spacing={3} sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={1.5} maxWidth={{ xs: "100%", md: "60%" }}>
          <Chip
            label="Join the conversation"
            sx={{
              alignSelf: "flex-start",
              bgcolor: "rgba(15, 23, 42, 0.35)",
              color: "#f1f5f9",
              textTransform: "uppercase",
              fontWeight: 700,
              letterSpacing: 1.5,
              px: 2,
            }}
          />

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.4rem", md: "3.4rem" },
              lineHeight: 1.1,
            }}
          >
            Community Forum
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(226, 232, 240, 0.85)",
              maxWidth: 520,
              lineHeight: 1.65,
            }}
          >
            Swap builds, troubleshoot gremlins, and drop inspiration with the
            GTA crew. Every topic keeps the culture moving forward.
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          flexWrap="wrap"
        >
          <StatBlock label="Threads Live" value={totalTopics} />
          <StatBlock label="Categories" value={categoryCount} />
          <StatBlock label="Members Active" value={activeMembers} />
        </Stack>

        {!!trendingTags.length && (
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            sx={{ pt: 1 }}
          >
            {trendingTags.map((tag) => (
              <Chip
                key={tag}
                label={`#${tag}`}
                sx={{
                  bgcolor: "rgba(15, 23, 42, 0.28)",
                  color: "#e2e8f0",
                  border: "1px solid rgba(226, 232, 240, 0.25)",
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

const StatBlock = ({ label, value }) => (
  <Stack
    spacing={0.5}
    sx={{
      px: 3,
      py: 2.5,
      borderRadius: 3,
      bgcolor: "rgba(15, 23, 42, 0.35)",
      border: "1px solid rgba(226, 232, 240, 0.2)",
      minWidth: { xs: "auto", sm: 180 },
      boxShadow: "0 24px 65px rgba(15, 23, 42, 0.28)",
    }}
  >
    <Typography
      variant="h4"
      sx={{ fontWeight: 800, color: "#f8fafc" }}
    >
      {value}
    </Typography>
    <Typography
      variant="body2"
      sx={{ color: "rgba(226, 232, 240, 0.75)", fontWeight: 600 }}
    >
      {label}
    </Typography>
  </Stack>
);

export default ForumHeader;
