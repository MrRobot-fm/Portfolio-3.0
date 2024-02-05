import { Icon, IconProps } from "@chakra-ui/react";

export const Hamburger = (props: IconProps) => (
  <Icon viewBox="0 0 40 20" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 4h40V0H0v4Zm0 16h40v-4H0v4Z"
      fill="currentColor"
    />
  </Icon>
);

export const Close = (props: IconProps) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="none"
      d="m4 4 32 32M4 36 36 4"
      stroke="currentColor"
      strokeWidth="4"
    />
  </Icon>
);

export const Arrow = (props: IconProps) => (
  <Icon viewBox="0 0 16 16" {...props}>
    <path
      d="M 13.667 1.583 L 4 1.583 C 3.586 1.583 3.25 1.919 3.25 2.333 C 3.25 2.747 3.586 3.083 4 3.083 L 11.856 3.083 L 1.803 13.136 C 1.51 13.429 1.51 13.904 1.803 14.197 C 2.096 14.49 2.571 14.49 2.864 14.197 L 12.917 4.144 L 12.917 12 C 12.917 12.414 13.252 12.75 13.667 12.75 C 14.081 12.75 14.417 12.414 14.417 12 L 14.417 2.333 C 14.417 1.919 14.081 1.583 13.667 1.583 Z"
      fill="currentColor"
    />
  </Icon>
);

export const ArrowDown = (props: IconProps) => (
  <Icon viewBox="0 0 32 32" {...props}>
    <path
      d="M 16.569 31.016 L 28.349 19.235 C 28.74 18.845 28.74 18.212 28.349 17.821 C 27.959 17.431 27.325 17.431 26.935 17.821 L 16.861 27.895 L 16.861 2.805 C 16.861 2.253 16.414 1.805 15.861 1.805 C 15.309 1.805 14.861 2.253 14.861 2.805 L 14.861 27.894 L 4.788 17.821 C 4.398 17.431 3.764 17.431 3.374 17.821 C 2.983 18.212 2.983 18.845 3.374 19.235 L 15.154 31.016 C 15.545 31.406 16.178 31.406 16.569 31.016 Z"
      fill="currentColor"
    ></path>
  </Icon>
);

export const AppLogo = (props: IconProps) => (
  <Icon
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_1_831"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="26"
      height="26"
    >
      <path
        d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_1_831)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 17.9808L13.5359 13.3397L6 18L21 17.9808Z"
        fill="#662D91"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5383 4L13.5359 13.3397L21 17.9808L13.5383 4Z"
        fill="#9E1F63"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 18L13.5359 13.3397L13.5383 4L6 18Z"
        fill="#FF5000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5206 9.66571L10.4393 15.2547H16.6158L13.5206 9.66571Z"
        fill="white"
        stroke="#FF5000"
        strokeWidth="0.5"
      />
    </g>
  </Icon>
);

export const Icons = {
  Hamburger,
  Close,
  Arrow,
  ArrowDown,
  AppLogo,
};
