import { useBreakpoint } from "@chakra-ui/react";
import { breakpointsAliasesMap } from "@/utils/constants/breakpoints-map";

const useBreakpoints = () => {
  const currentBreakpoint = useBreakpoint({ ssr: true });
  const { mobile, tablet, desktop, largeDesktop } = breakpointsAliasesMap;

  const isMobile = mobile.includes(currentBreakpoint);
  const isTablet = tablet.includes(currentBreakpoint);
  const isDesktop = desktop.includes(currentBreakpoint);
  const isLargeDesktop = largeDesktop.includes(currentBreakpoint);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    currentBreakpoint,
  };
};

export default useBreakpoints;
