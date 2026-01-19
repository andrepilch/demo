import { type ElementType, type ComponentPropsWithoutRef } from "react";
import * as styles from "./Text.css";

// ============================================
// Type Definitions
// ============================================

type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "bodyLarge"
  | "body"
  | "bodySmall"
  | "eyebrow"
  | "stat"
  | "ribbon";

type TextColor =
  | "primary"
  | "secondary"
  | "muted"
  | "accent"
  | "onAccent"
  | "inherit";

type TextWeight = "normal" | "medium" | "semibold" | "bold";

type TextAlign = "left" | "center" | "right";

interface TextProps<T extends ElementType> {
  as?: T;
  variant?: TextVariant;
  color?: TextColor;
  weight?: TextWeight;
  align?: TextAlign;
  gradient?: "accent";
  className?: string;
  children?: React.ReactNode;
}

// Default element mapping for variants
const variantElementMap: Record<TextVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  bodyLarge: "p",
  body: "p",
  bodySmall: "p",
  eyebrow: "span",
  stat: "span",
  ribbon: "span",
};

// Style mapping for variants
const variantStyleMap: Record<TextVariant, string> = {
  h1: styles.heading1,
  h2: styles.heading2,
  h3: styles.heading3,
  bodyLarge: styles.bodyLarge,
  body: styles.body,
  bodySmall: styles.bodySmall,
  eyebrow: styles.eyebrow,
  stat: styles.statNumber,
  ribbon: styles.ribbonNumber,
};

// ============================================
// Text Component
// ============================================

export function Text<T extends ElementType = "span">({
  as,
  variant = "body",
  color,
  weight,
  align,
  gradient,
  className,
  children,
  ...props
}: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>) {
  const Component = as || variantElementMap[variant];

  const classNames = [
    variantStyleMap[variant],
    color && styles.colorVariants[color],
    weight && styles.weightVariants[weight],
    align && styles.alignVariants[align],
    gradient === "accent" && styles.accentGradient,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}

// ============================================
// Convenience Components
// ============================================

type ConvenienceProps<T extends ElementType> = Omit<TextProps<T>, "variant"> &
  Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>;

export function H1<T extends ElementType = "h1">(props: ConvenienceProps<T>) {
  return <Text variant="h1" {...props} />;
}

export function H2<T extends ElementType = "h2">(props: ConvenienceProps<T>) {
  return <Text variant="h2" {...props} />;
}

export function H3<T extends ElementType = "h3">(props: ConvenienceProps<T>) {
  return <Text variant="h3" {...props} />;
}

export function BodyLarge<T extends ElementType = "p">(
  props: ConvenienceProps<T>
) {
  return <Text variant="bodyLarge" {...props} />;
}

export function Body<T extends ElementType = "p">(props: ConvenienceProps<T>) {
  return <Text variant="body" {...props} />;
}

export function BodySmall<T extends ElementType = "p">(
  props: ConvenienceProps<T>
) {
  return <Text variant="bodySmall" {...props} />;
}

export function Eyebrow<T extends ElementType = "span">(
  props: ConvenienceProps<T>
) {
  return <Text variant="eyebrow" {...props} />;
}

export function StatNumber<T extends ElementType = "span">(
  props: ConvenienceProps<T>
) {
  return <Text variant="stat" {...props} />;
}

export function RibbonNumber<T extends ElementType = "span">(
  props: ConvenienceProps<T>
) {
  return <Text variant="ribbon" {...props} />;
}
