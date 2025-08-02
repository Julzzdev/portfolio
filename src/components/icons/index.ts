import Zap from "./Zap.astro";
import Portfolio from "./Portfolio.astro";

export const icons = {
  Zap,
  Portfolio
} as const;

export type IconName = keyof typeof icons;