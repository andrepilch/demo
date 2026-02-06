import { type ElementType, type ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'
import * as styles from './Button.css'

// ============================================
// Type Definitions
// ============================================

type ButtonVariant = 'primary' | 'secondary' | 'outlined'
type ButtonSize = 'sm' | 'md'

interface ButtonProps<T extends ElementType> {
  as?: T
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children?: React.ReactNode
}

// Variant to style mapping
const variantStyleMap: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  outlined: styles.outlined,
}

// ============================================
// Button Component
// ============================================

export function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const Component = as || 'button'

  const classNames = [
    variantStyleMap[variant],
    styles.sizeVariants[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  )
}

// ============================================
// Button Group Component
// ============================================

interface ButtonGroupProps<T extends ElementType> {
  as?: T
  center?: boolean
  className?: string
  children?: React.ReactNode
}

export function ButtonGroup<T extends ElementType = 'div'>({
  as,
  center = false,
  className,
  children,
  ...props
}: ButtonGroupProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonGroupProps<T>>) {
  const Component = as || 'div'

  const classNames = [
    center ? styles.buttonGroupCenter : styles.buttonGroup,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  )
}

// ============================================
// Convenience Components
// ============================================

type ConvenienceProps<T extends ElementType> = Omit<ButtonProps<T>, 'variant'> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>

export function PrimaryButton<T extends ElementType = 'button'>(
  props: ConvenienceProps<T>
) {
  return <Button variant='primary' {...props} />
}

export function SecondaryButton<T extends ElementType = 'button'>(
  props: ConvenienceProps<T>
) {
  return <Button variant='secondary' {...props} />
}

export function OutlinedButton<T extends ElementType = 'button'>(
  props: ConvenienceProps<T>
) {
  return <Button variant='outlined' {...props} />
}

// ============================================
// LinkButton Component
// ============================================

type LinkButtonProps = Omit<ButtonProps<typeof Link>, 'as'> &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof ButtonProps<typeof Link>>

export function LinkButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  style,
  ...props
}: LinkButtonProps) {
  const classNames = [
    variantStyleMap[variant],
    styles.sizeVariants[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Link className={classNames} style={style} {...props}>
      {children}
    </Link>
  )
}

// ============================================
// Icon exports for convenience
// ============================================

export { iconSm, iconMd } from './Button.css'
