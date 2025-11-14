"use client";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Badge, { badgeClasses } from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

import { paths } from "src/routes/paths";

import { useOffSetTop } from "src/hooks/use-off-set-top";
import { useResponsive } from "src/hooks/use-responsive";

import { bgBlur } from "src/theme/css";

// import Logo from 'src/components/logo';
import Label from "src/components/label";
import Iconify from "src/components/iconify";
import FavoriteIcon from "@mui/icons-material/Favorite";

import NavMobile from "./nav/mobile";
import NavDesktop from "./nav/desktop";
import { HEADER } from "../config-layout";
import { navConfig } from "./config-navigation";
import LoginButton from "../common/login-button";
import HeaderShadow from "../common/header-shadow";
import SettingsButton from "../common/settings-button";
import { useAuthContext } from "src/auth/hooks";
import { useCheckoutContext } from "src/sections/checkout/context";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import SubHeader from "./sub-header";

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive("up", "md");

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  const { user = {} } = useAuthContext()?.user || {};

  // Get cart data from checkout context
  const checkout = useCheckoutContext();
  const cartItems = checkout?.totalItems || 0;

  // Cart drawer state
  const [openCartDrawer, setOpenCartDrawer] = useState(false);

  const handleOpenCartDrawer = () => {
    setOpenCartDrawer(true);
  };

  const handleCloseCartDrawer = () => {
    setOpenCartDrawer(false);
  };

  return (
    <>
      <AppBar sx={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F3E5F5 50%, #E8F5E9 100%)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}>
        {/* <SubHeader /> */}
        <Toolbar
          disableGutters
          sx={{
            height: {
              xs: HEADER.H_MOBILE,
              md: HEADER.H_DESKTOP,
            },
            transition: theme.transitions.create(["height"], {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.shorter,
            }),
            ...(offsetTop && {
              ...bgBlur({
                color: '#FFFFFF',
              }),
              height: {
                md: HEADER.H_DESKTOP_OFFSET,
              },
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }),
          }}>
          <Container
            maxWidth="xl"
            sx={{
              height: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Stack direction="row" alignItems="center">
              {/* <Logo />  */}
              <Link href="/">
                <img
                  src="/assets/logo.webp"
                  alt="logo"
                  width="190px"
                  height="29px"
                  style={{ marginRight: "24px" }}
                />
              </Link>
            </Stack>
            {mdUp && <NavDesktop data={navConfig} />}

            <Stack alignItems="center" direction="row" spacing={2}>
              {/* Shopping Cart */}
              <Badge
                badgeContent={cartItems}
                showZero
                color="error"
                sx={{
                  [`& .${badgeClasses.badge}`]: {
                    background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: "12px",
                    minWidth: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}>
                <IconButton
                  onClick={handleOpenCartDrawer}
                  sx={{
                    color: "#1F2937",
                    background: "linear-gradient(135deg, #F3E5F5 0%, #E8F5E9 100%)",
                    borderRadius: "12px",
                    width: "45px",
                    height: "45px",
                    border: "2px solid #10B981",
                    "&:hover": {
                      background: "linear-gradient(135deg, #9333EA 0%, #10B981 100%)",
                      color: "#FFFFFF",
                      transform: "scale(1.08)",
                    },
                  }}>
                  <Iconify
                    icon="eva:shopping-cart-fill"
                    sx={{ fontSize: "22px" }}
                  />
                </IconButton>
              </Badge>

              {mdUp && !Object.keys(user).length > 0 && (
                <>
                  <LoginButton />
                  <MoveTo
                    sx={{
                      color: "#1F2937",
                      background: "linear-gradient(135deg, #9333EA 0%, #7E22CE 100%)",
                      color: "#FFFFFF",
                      borderRadius: "10px",
                      whiteSpace: "nowrap",
                      fontWeight: 600,
                      px: 3,
                      "&:hover": {
                        background: "linear-gradient(135deg, #7E22CE 0%, #6B21A8 100%)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 12px rgba(147, 51, 234, 0.3)",
                      },
                    }}
                    title="Post Your Ad"
                    path={paths.dashboard.cars.my.add}
                  />
                </>
                 )}
              {mdUp && Object.keys(user).length > 0 && (
                <>
                <MoveTo
                  sx={{
                    color: "#1F2937",
                    borderColor: "#10B981",
                    border: "2px solid",
                    borderRadius: "10px",
                    whiteSpace: "nowrap",
                    fontWeight: 600,
                    px: 3,
                    "&:hover": {
                      background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                      color: "#FFFFFF",
                      borderColor: "#10B981",
                      transform: "translateY(-2px)",
                    },
                  }}
                  title="Dashboard"
                  path={paths.dashboard.root}
                />
                <MoveTo
                  sx={{
                    background: "linear-gradient(135deg, #9333EA 0%, #7E22CE 100%)",
                    color: "#FFFFFF",
                    borderRadius: "10px",
                    whiteSpace: "nowrap",
                    fontWeight: 600,
                    px: 3,
                    "&:hover": {
                      background: "linear-gradient(135deg, #7E22CE 0%, #6B21A8 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(147, 51, 234, 0.3)",
                    },
                  }}
                  title="Post Your Ad"
                  path={paths.dashboard.cars.my.add}
                />
                </>
              )}
              {mdUp && Object.keys(user).length > 0 && (
                <IconButton
                  component={Link}
                  href={paths.user.favourites}
                  sx={{
                    color: "#9333EA",
                    border: "2px solid #9333EA",
                    borderRadius: "12px",
                    width: "45px",
                    height: "45px",
                    "&:hover": {
                      background: "linear-gradient(135deg, #9333EA 0%, #7E22CE 100%)",
                      color: "#FFFFFF",
                      transform: "scale(1.08)",
                    },
                  }}>
                  <FavoriteIcon />
                </IconButton>
              )}

              {mdUp && (
                <Link
                  href="tel:+92363330222"
                  style={{ textDecoration: "none" }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    p="12px"
                    sx={{
                      cursor: "pointer",
                      background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                      borderRadius: "12px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
                        transform: "scale(1.08)",
                        boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                      },
                    }}>
                    <Iconify
                      icon="solar:phone-calling-bold"
                      sx={{ color: "#FFFFFF", width: 22, height: 22 }}
                    />
                  </Stack>
                </Link>
              )}

              {!mdUp && <NavMobile data={navConfig} />}
            </Stack>
          </Container>
        </Toolbar>

        {/* Cart Drawer */}
        <CartDrawer
          open={openCartDrawer}
          onClose={handleCloseCartDrawer}
          checkout={checkout}
        />
      </AppBar>
    </>
  );
}

// Cart Drawer Component
function CartDrawer({ open, onClose, checkout }) {
  const theme = useTheme();
  const router = useRouter();

  const handleBuyNow = () => {
    // If there's only one item, use Buy Now flow
    if (checkout?.items?.length === 1) {
      const item = checkout.items[0];
      checkout.onBuyNow(item);
    }
    onClose();
    // Small delay to ensure smooth transition
    setTimeout(() => {
      router.push(paths.product.checkout);
    }, 100);
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <Box
          onClick={onClose}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1299,
          }}
        />
      )}

      {/* Cart Drawer */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          width: { xs: "100%", sm: 400 },
          height: "100vh",
          zIndex: 1300,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
          backgroundColor: "background.paper",
          boxShadow: "-4px 0 20px rgba(0,0,0,0.1)",
        }}>
        {/* Header */}
        <Box
          sx={{
            p: 2,
            borderBottom: "1px solid",
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Iconify icon="eva:shopping-cart-fill" />
            <Typography variant="h6">
              Cart ({checkout?.items?.length || 0})
            </Typography>
          </Box>
          <IconButton onClick={onClose}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Box>

        {/* Cart Content */}
        <Box sx={{ height: "calc(100vh - 140px)", overflow: "auto" }}>
          {checkout?.items?.length > 0 ? (
            <Box sx={{ p: 2, overflow: "auto", height: "100vh" }}>
              {checkout.items.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  onDelete={checkout.onDeleteCart}
                  onIncreaseQuantity={checkout.onIncreaseQuantity}
                  onDecreaseQuantity={checkout.onDecreaseQuantity}
                />
              ))}
            </Box>
          ) : (
            <Box sx={{ p: 4, textAlign: "center" }}>
              <Iconify
                icon="eva:shopping-cart-outline"
                sx={{ fontSize: 64, color: "text.disabled", mb: 2 }}
              />
              <Typography variant="h6" sx={{ mb: 1 }}>
                Your cart is empty
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Add some items to get started
              </Typography>
            </Box>
          )}
        </Box>

        {/* Footer */}
        {checkout?.items?.length > 0 && (
          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              p: 3,
              borderTop: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
              boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.1)",
              zIndex: 1400,
              width: { xs: "100%", sm: 400 },
            }}>
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}>
                <Typography variant="body2">Subtotal:</Typography>
                <Typography variant="body2" fontWeight="bold">
                  PKR {checkout?.subTotal?.toLocaleString() || 0}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2">Total:</Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ 
                    background: "linear-gradient(135deg, #10B981 0%, #9333EA 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                  PKR {checkout?.total?.toLocaleString() || 0}
                </Typography>
              </Box>
            </Box>
            <Stack direction="row" spacing={2}>
              <Button
                fullWidth
                variant="outlined"
                size="large"
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    router.push(paths.product.checkout);
                  }, 100);
                }}
                sx={{
                  borderColor: "#10B981",
                  color: "#10B981",
                  height: 48,
                  borderWidth: 2,
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: "#059669",
                    backgroundColor: "rgba(16, 185, 129, 0.08)",
                    borderWidth: 2,
                  },
                }}>
                View Cart
              </Button>

              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    router.push(paths.product.checkout);
                  }, 100);
                }}
                sx={{
                  background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                  height: 48,
                  fontWeight: 600,
                  "&:hover": {
                    background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
                    boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                  },
                }}>
                Checkout
              </Button>
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
}

// Cart Item Component
function CartItem({ item, onDelete, onIncreaseQuantity, onDecreaseQuantity }) {
  return (
    <Box
      sx={{
        p: 2,
        mb: 2,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 1,
      }}>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Box
          component="img"
          src={item.coverUrl || item.image?.[0]}
          alt={item.name}
          sx={{
            width: 60,
            height: 60,
            borderRadius: 1,
            objectFit: "cover",
          }}
        />

        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Qty: { item.quantity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            PKR: {item.price * item.quantity}
          </Typography>

          {/* Show car details if available */}
          {/* {item.carDetails && (
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mt: 0.5 }}>
              {item.carDetails.make} {item.carDetails.model} •{" "}
              {item.carDetails.yearOfManufacture}
            </Typography>
          )} */}
        </Box>

        <IconButton
          size="small"
          onClick={() => onDelete(item.id)}
          sx={{
            color: "error.main",
            border: "1px solid",
            borderColor: "error.main",
            width: 32,
            height: 32,
            "&:hover": {
              bgcolor: "error.lighter",
            },
          }}>
          <Iconify icon="eva:trash-2-fill" width={16} height={16} />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          p: 1,
          bgcolor: "grey.50",
          borderRadius: 1,
        }}>
        <IconButton
          size="small"
          onClick={() => onDecreaseQuantity(item.id)}
          disabled={item.quantity <= 1}
          sx={{
            border: "1px solid",
            borderColor: "divider",
            width: 32,
            height: 32,
            "&:hover": { bgcolor: "rgba(16, 185, 129, 0.08)" },
          }}>
          <Iconify
            icon="eva:minus-fill"
            sx={{ color: "#10B981", width: 16, height: 16 }}
          />
        </IconButton>

        <Typography
          variant="body2"
          sx={{
            minWidth: 40,
            textAlign: "center",
            fontWeight: 600,
          }}>
          {item.quantity}
        </Typography>

          <IconButton
            size="small"
            onClick={() => onIncreaseQuantity(item.id)}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              width: 32,
              height: 32,
              "&:hover": { bgcolor: "rgba(16, 185, 129, 0.08)" },
            }}>
            <Iconify
              icon="eva:plus-fill"
              sx={{ color: "#10B981", width: 16, height: 16 }}
            />
          </IconButton>
      </Box>
    </Box>
  );
}

function MoveTo({ sx, title, path }) {
  return (
    <Button
      component={Link}
      href={path}
      sx={{
        transition: "all 0.3s ease",
        ...sx,
      }}
      variant="outlined">
      {title}
    </Button>
  );
}
