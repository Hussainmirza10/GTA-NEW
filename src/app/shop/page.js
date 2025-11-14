import { Box } from "@mui/material";
import { ProductShopView } from "src/sections/product/view";
import CustomLayout from "../custom-layout";
import MainLayout from "src/layouts/main";

// ----------------------------------------------------------------------

export const metadata = {
  title: "Shop by Garage Tuned Autos",
};

export default function ShopPage() {
  return (
    <CustomLayout>
      <MainLayout hideFooter>
        <Box sx={{ pt: 0, mt: { xs: -8, md: -10 }, pb: { xs: 10, md: 14 } }}>
          <ProductShopView />
        </Box>
      </MainLayout>
    </CustomLayout>
  );
}
