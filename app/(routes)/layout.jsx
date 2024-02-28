import { Box } from "@/components/box";
import { Header } from "@/components/header";

const SiteLayout = ({ children }) => {
  return (
    <Box className="h-full p-0 overflow-y-scroll">
      <div className="h-full bg-gradient-to-b from-orange-800/30 to-[20rem] relative">
        <Header />
        <div className="p-4">{children}</div>
      </div>
    </Box>
  );
};

export default SiteLayout;
