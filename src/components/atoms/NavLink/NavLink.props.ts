import type { ButtonProps } from "@/components/atoms/Button/Button.props";

export interface NavLinkProps extends ButtonProps {
  isOpen?: boolean;
  close?: () => void;
  index?: number;
  isFooterLink?: boolean;
}
