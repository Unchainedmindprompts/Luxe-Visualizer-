/**
 * Lightweight className merger — joins truthy values with a space.
 * Drop-in for clsx without the dependency.
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
