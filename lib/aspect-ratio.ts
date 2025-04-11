/**
 * Calculates CSS padding-top value based on aspect ratio
 * @param aspectRatio Aspect ratio in format "width:height" (e.g., "16:9", "4:3", "9:16")
 * @returns CSS padding-top value as a percentage string
 */
export function calculateAspectRatioPadding(aspectRatio = "16:9"): string {
  // Default to 16:9 if no aspect ratio is provided
  const [width, height] = aspectRatio.split(":").map(Number)

  if (!width || !height) {
    // Fallback to 16:9 (56.25%) if invalid format
    return "56.25%"
  }

  // Calculate padding-top as (height / width) * 100%
  const paddingTop = (height / width) * 100
  return `${paddingTop}%`
}

/**
 * Determines if an aspect ratio is portrait orientation
 * @param aspectRatio Aspect ratio in format "width:height"
 * @returns Boolean indicating if the aspect ratio is portrait
 */
export function isPortraitAspectRatio(aspectRatio = "16:9"): boolean {
  const [width, height] = aspectRatio.split(":").map(Number)

  if (!width || !height) {
    return false // Default to landscape
  }

  return height > width
}
