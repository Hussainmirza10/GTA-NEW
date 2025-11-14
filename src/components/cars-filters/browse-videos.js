import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  Modal,
  CircularProgress,
} from "@mui/material";
import Iconify from "../iconify";
import { VideoService } from "src/services";
import { useSnackbar } from "src/components/snackbar";
import { useQuery } from "@tanstack/react-query";

const getYoutubeId = (url) => {
  if (!url) return null;
  try {
    // Handle different YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/,
      /^[a-zA-Z0-9_-]{11}$/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    console.warn("Could not extract YouTube ID from URL:", url);
    return null;
  } catch (error) {
    console.error("Error extracting YouTube ID:", error);
    return null;
  }
};

const getThumbnailUrl = (videoUrl) => {
  const videoId = getYoutubeId(videoUrl);
  if (!videoId)
    return "https://via.placeholder.com/480x360.png?text=Video+Unavailable";
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

export default function BrowseVideosSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  // React Query hook for fetching videos
  const {
    data: videos = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["videos", "all"],
    queryFn: async () => {
      const response = await VideoService.getAll();
      if (response?.status === 200) {
        return response.data || [];
      }
      throw new Error("Failed to fetch videos");
    },
    staleTime: Infinity, // Data will never become stale automatically
    cacheTime: 30 * 60 * 1000, // Keep in cache for 30 minutes
    refetchOnWindowFocus: false, // Disable refetch on window focus
    refetchOnMount: false, // Disable refetch on mount
    retry: 1, // Only retry once
    onError: (error) => {
      enqueueSnackbar(
        error?.response?.data?.message || "Failed to fetch videos",
        { variant: "error" }
      );
    },
  });

  // Only show loading state on initial load
  if (isLoading && !videos.length) {
    return (
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background: "linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)",
          minHeight: "600px",
        }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "400px",
            }}>
            <CircularProgress sx={{ color: "#10B981", mb: 3 }} size={60} />
            <Typography variant="h5" sx={{ color: "#6B7280", fontWeight: 600 }}>
              Loading videos...
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  // Error state
  if (error) {
    return (
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background: "linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)",
          minHeight: "600px",
        }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "400px",
              bgcolor: "#FEF2F2",
              borderRadius: 3,
              p: 4,
            }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                bgcolor: "#FEE2E2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              }}>
              <Iconify
                icon="eva:alert-circle-outline"
                sx={{ fontSize: 40, color: "#EF4444" }}
              />
            </Box>
            <Typography variant="h5" sx={{ color: "#DC2626", fontWeight: 600, mb: 1 }}>
              Error Loading Videos
            </Typography>
            <Typography variant="body1" sx={{ color: "#6B7280", textAlign: "center" }}>
              Please try again later
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  // Empty state
  if (!videos || videos.length === 0) {
    return (
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background: "linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)",
          minHeight: "600px",
        }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "400px",
              bgcolor: "#F9FAFB",
              borderRadius: 3,
              p: 4,
            }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                bgcolor: "#E5E7EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
              }}>
              <Iconify
                icon="eva:video-outline"
                sx={{ fontSize: 40, color: "#9CA3AF" }}
              />
            </Box>
            <Typography variant="h5" sx={{ color: "#6B7280", fontWeight: 600, mb: 1 }}>
              No Videos Available
            </Typography>
            <Typography variant="body1" sx={{ color: "#9CA3AF", textAlign: "center" }}>
              Check back soon for new content
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  const handleVideoClick = (videoUrl) => {
    console.log("Video URL:", videoUrl); // Debug log
    const videoId = getYoutubeId(videoUrl);
    console.log("Video ID:", videoId); // Debug log
    if (videoId) {
      setActiveId(videoId);
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveId(null);
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: "linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
      <Container maxWidth="xl">
        {/* Decorative Elements */}
        <Box
          sx={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Section Header */}
        <Box
          sx={{
            mb: 6,
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3rem" },
              mb: 2,
              background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
            }}>
            Browse Our Videos
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#6B7280",
              maxWidth: 700,
              mx: "auto",
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.1rem" },
              mb: 3,
            }}>
            Explore our collection of automotive content and reviews
          </Typography>
          <Box
            component="a"
            href="/videos"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 3,
              py: 1.5,
              borderRadius: 2,
              bgcolor: "white",
              color: "#10B981",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
              border: "2px solid #10B981",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#10B981",
                color: "white",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
              },
            }}>
            View All Videos
            <Iconify icon="eva:arrow-forward-fill" sx={{ fontSize: 20 }} />
          </Box>
        </Box>

        {/* Videos Grid */}
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={3}>
            {/* Large Video - Left Column */}
            {videos.length > 0 && (
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    height: "450px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 4,
                    boxShadow: "0 10px 40px rgba(16, 185, 129, 0.15)",
                    cursor: "pointer",
                    border: "2px solid rgba(16, 185, 129, 0.1)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 60px rgba(16, 185, 129, 0.25)",
                      borderColor: "#10B981",
                    },
                  }}
                  onClick={() => handleVideoClick(videos[0].videoUrl)}>
                  <Box
                    sx={{
                      position: "relative",
                      height: "100%",
                      background: `url(${getThumbnailUrl(videos[0].videoUrl)})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": {
                        "& .play-button": {
                          transform: "translate(-50%, -50%) scale(1.15)",
                          background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                          boxShadow: "0 8px 25px rgba(16, 185, 129, 0.4)",
                        },
                        "& .overlay": {
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                        },
                      },
                    }}>
                    {/* Dark overlay */}
                    <Box
                      className="overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.35)",
                        transition: "all 0.3s ease",
                      }}
                    />
                    
                    {/* Featured Badge */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        px: 2,
                        py: 0.75,
                        borderRadius: 2,
                        bgcolor: "rgba(16, 185, 129, 0.95)",
                        backdropFilter: "blur(10px)",
                        zIndex: 2,
                      }}>
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: 1,
                        }}>
                        Featured
                      </Typography>
                    </Box>

                    {/* Play Button Overlay */}
                    <Box
                      className="play-button"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: { xs: "70px", md: "90px" },
                        height: { xs: "70px", md: "90px" },
                        background: "rgba(255, 255, 255, 0.95)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        cursor: "pointer",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                      }}>
                      <Iconify
                        icon="mdi:play"
                        sx={{
                          color: "#10B981",
                          fontSize: { xs: "36px", md: "52px" },
                          ml: "5px",
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Video Title */}
                  <CardContent
                    sx={{
                      p: 3,
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)",
                    }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: { xs: "1.1rem", md: "1.3rem" },
                        lineHeight: 1.4,
                      }}>
                      {videos[0].title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}

          {/* Smaller Videos - Right Column */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2.5}>
              {videos.slice(1, 5).map((video) => (
                <Grid item xs={6} key={video._id}>
                  <Card
                    sx={{
                      height: "210px",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: 3,
                      boxShadow: "0 8px 30px rgba(16, 185, 129, 0.1)",
                      cursor: "pointer",
                      border: "2px solid rgba(16, 185, 129, 0.08)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 15px 45px rgba(16, 185, 129, 0.2)",
                        borderColor: "#10B981",
                      },
                    }}
                    onClick={() => handleVideoClick(video.videoUrl)}>
                    <Box
                      sx={{
                        position: "relative",
                        height: "100%",
                        background: `url(${getThumbnailUrl(video.videoUrl)})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": {
                          "& .play-button": {
                            transform: "translate(-50%, -50%) scale(1.15)",
                            background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                            boxShadow: "0 6px 20px rgba(16, 185, 129, 0.4)",
                          },
                          "& .overlay": {
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                          },
                        },
                      }}>
                      {/* Dark overlay */}
                      <Box
                        className="overlay"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: "rgba(0, 0, 0, 0.35)",
                          transition: "all 0.3s ease",
                        }}
                      />
                      
                      {/* Play Button Overlay */}
                      <Box
                        className="play-button"
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: { xs: "50px", sm: "60px" },
                          height: { xs: "50px", sm: "60px" },
                          background: "rgba(255, 255, 255, 0.95)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          cursor: "pointer",
                          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                        }}>
                        <Iconify
                          icon="mdi:play"
                          sx={{
                            color: "#10B981",
                            fontSize: { xs: "28px", sm: "36px" },
                            ml: "3px",
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Video Title */}
                    <CardContent
                      sx={{
                        p: 2,
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)",
                      }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#ffffff",
                          fontWeight: 600,
                          fontSize: { xs: "0.8rem", sm: "0.9rem" },
                          lineHeight: 1.4,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}>
                        {video.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        </Box>
      </Container>

      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="video-modal"
        aria-describedby="youtube-video-player"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1300,
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
          "& .MuiBox-root": {
            outline: "none",
          },
        }}
        disableAutoFocus>
        <Box
          sx={{
            position: "relative",
            width: "90%",
            maxWidth: "800px",
            bgcolor: "transparent",
            outline: "none",
            border: "none",
            boxShadow: "none",
            overflow: "hidden",
          }}>
          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%",
              width: "100%",
              backgroundColor: "transparent",
              outline: "none",
            }}>
            {activeId && (
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  outline: "none",
                }}
                src={`https://www.youtube.com/embed/${activeId}?autoplay=1&rel=0`}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
