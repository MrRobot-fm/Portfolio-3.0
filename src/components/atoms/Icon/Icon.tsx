"use client";

import { chakra, useStyleConfig } from "@chakra-ui/react";
import { cx } from "@chakra-ui/utils";
import v from "voca";
import { IconProps } from "@/components/atoms/Icon/Icon.props";
import { Icons } from "@/assets/icons/icon-list";

export const Icon = (props: IconProps) => {
  const { colorScheme, size, variant, name, className: cn, ...rest } = props;

  const styles = useStyleConfig("Icon", { colorScheme, size, variant });
  const className = cx("chakra-icon", cn);
  const shared = { __css: styles, className, ...rest };

  const obj = Object.keys(Icons).reduce(
    (result, key) => ({
      ...result,
      [v.camelCase(key)]: Icons[key as keyof typeof Icons],
    }),
    {} as IconProps
  );

  const Element = name ? obj[name as keyof typeof obj] : <></>;

  if (!Element) return <></>;

  return (
    <chakra.div {...shared}>
      {<Element w="auto" h="auto" fontSize="unset" />}
    </chakra.div>
  );
};

Icon.displayName = "Icon";
