import { useCallback, useEffect, useState } from "react";

export const useScrollBehavior = () => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  const scrollTop =
    isRendered && (window.scrollX || document.documentElement.scrollTop);
  const scrollLeft =
    isRendered && (window.scrollX || document.documentElement.scrollLeft);

  const disableScroll = useCallback(() => {
    window.onscroll = () => {
      window.scrollTo(scrollLeft as number, scrollTop as number);
    };
  }, [scrollLeft, scrollTop]);

  const enableScroll = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    window.onscroll = () => {};
  }, []);

  return { disableScroll, enableScroll };
};
