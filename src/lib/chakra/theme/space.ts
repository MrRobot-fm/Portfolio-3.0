import { toRem } from "@/utils/functions/to-rem";

export const space = Object.fromEntries(
  Array.from({ length: 150 }, (_, i) => i + 1).map((value) => [
    value,
    toRem(value),
  ])
);
