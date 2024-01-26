"use client";

import { chakra, forwardRef, useMultiStyleConfig } from "@chakra-ui/react";
import Link from "next/link";
import { checkIsExternal } from "@/utils/functions/is-external";
import { Icon } from "@/components/atoms/Icon/Icon";
import { ButtonProps } from "./Button.props";

export const Button = forwardRef<ButtonProps, "button">(
  function Button(props, ref) {
    const {
      url: href,
      label,
      colorScheme,
      variant,
      icon,
      children,
      size,
      ...rest
    } = props || {};

    const { name, size: iconSize = "sm", ...restIconProps } = icon || {};

    const isExternal = checkIsExternal(href);
    const external = isExternal ? { target: "_blank", rel: "noopener" } : {};

    const styles = useMultiStyleConfig("Button", {
      colorScheme,
      size,
      variant,
    });

    if (href) {
      return (
        <Link legacyBehavior passHref {...{ href }}>
          <chakra.a {...external}>
            <chakra.button ref={ref} role="group" __css={styles.root} {...rest}>
              {label || typeof children === "string" ? (
                <chakra.span __css={styles.label}>{label}</chakra.span>
              ) : (
                children
              )}
              {!!name && (
                <Icon
                  __css={styles.icon}
                  {...{ name, iconSize, ...restIconProps }}
                />
              )}
            </chakra.button>
          </chakra.a>
        </Link>
      );
    }

    return (
      <chakra.button ref={ref} role="group" __css={styles.root} {...rest}>
        {label || typeof children === "string" ? (
          <chakra.span as="span" __css={styles.label}>
            {label}
          </chakra.span>
        ) : (
          children
        )}
        {!!name && (
          <Icon __css={styles.icon} {...{ name, iconSize, ...restIconProps }} />
        )}
      </chakra.button>
    );
  }
);
