export const moveRightAndShow = ({
  state,
  index,
}: {
  state: boolean;
  index: number;
}) => {
  return {
    transition: "transform 0.3s, opacity 0.7s ease",
    transform: state ? "translateX(0)" : "translateX(100%)",
    transitionDelay: state ? `calc(0.2s*${(index as number) + 1})` : "",
    opacity: state ? 1 : 0,
  };
};
