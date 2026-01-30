import { type ElementType, type ComponentPropsWithoutRef } from "react";
import * as styles from "./Section.css";

// ============================================
// Type Definitions
// ============================================

// ============================================
// Section Gap Enum
// ============================================

export enum SectionGap {
  none = "none",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

enum GapSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

interface BaseProps<T extends ElementType> {
  as?: T;
  className?: string;
  children?: React.ReactNode;
}

// ============================================
// PageWrapper - Main page layout container
// ============================================

export function PageWrapper<T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: BaseProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof BaseProps<T>>) {
  const Component = as || "div";
  const classNames = [styles.pageWrapper, className].filter(Boolean).join(" ");

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}

// ============================================
// SectionsWrapper - Groups multiple sections
// ============================================

export function SectionsWrapper<T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: BaseProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof BaseProps<T>>) {
  const Component = as || "div";
  const classNames = [styles.sectionsWrapper, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}

// ============================================
// Section - Semantic section element with positioning, centering, maxWidth, and gap
// ============================================

interface SectionProps<T extends ElementType> extends BaseProps<T> {
  gap?: SectionGap;
}

export function Section<T extends ElementType = "section">({
  as,
  gap = SectionGap.none,
  className,
  children,
  ...props
}: SectionProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof SectionProps<T>>) {
  const Component = as || "section";
  const classNames = [
    styles.sectionGapVariants[gap],
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
// Container - Centered content container
// ============================================

interface ContainerProps<T extends ElementType> extends BaseProps<T> {
  size?: "default" | "large";
}

export function Container<T extends ElementType = "div">({
  as,
  size = "default",
  className,
  children,
  ...props
}: ContainerProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
  const Component = as || "div";
  const containerStyle =
    size === "large" ? styles.containerLarge : styles.container;
  const classNames = [containerStyle, className].filter(Boolean).join(" ");

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}

// ============================================
// SectionContent - Flex column layout
// ============================================

interface SectionContentProps<T extends ElementType> extends BaseProps<T> {
  gap?: GapSize;
}

export function SectionContent<T extends ElementType = "div">({
  as,
  gap,
  className,
  children,
  ...props
}: SectionContentProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof SectionContentProps<T>>) {
  const Component = as || "div";
  const classNames = [
    styles.sectionContent,
    gap && styles.gapVariants[gap],
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
// SectionHeader - Header area for sections
// ============================================

interface SectionHeaderProps<T extends ElementType> extends BaseProps<T> {
  align?: "center" | "left" | "flex";
}

export function SectionHeader<T extends ElementType = "div">({
  as,
  align = "left",
  className,
  children,
  ...props
}: SectionHeaderProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof SectionHeaderProps<T>>) {
  const Component = as || "div";

  const headerStyle =
    align === "left"
      ? styles.sectionHeaderLeft
      : align === "flex"
        ? styles.sectionHeaderFlex
        : styles.sectionHeader;

  const classNames = [headerStyle, className].filter(Boolean).join(" ");

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}

// ============================================
// Grid Components
// ============================================

interface GridProps<T extends ElementType> extends BaseProps<T> {
  cols?: 2 | 3;
}

export function Grid<T extends ElementType = "div">({
  as,
  cols = 2,
  className,
  children,
  ...props
}: GridProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof GridProps<T>>) {
  const Component = as || "div";
  const gridStyle = cols === 3 ? styles.gridThree : styles.gridTwo;
  const classNames = [gridStyle, className].filter(Boolean).join(" ");

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}
