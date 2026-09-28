export function clamp01(v: number): number {
  if (v < 0) return 0
  if (v > 1) return 1
  return v
}

export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function phoneScale(viewportW: number, viewportH: number): number {
  if (viewportW < 900) return (0.9 * viewportW) / 390
  return Math.min((0.8 * viewportH) / 844, (0.62 * viewportW) / 390)
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

export interface CameraPose {
  focusX: number
  focusY: number
  rotX: number
  rotY: number
  rotZ: number
  zoom: number
}

export function interpolateCamera(
  from: CameraPose,
  to: CameraPose,
  t: number
): CameraPose {
  const e = easeInOutCubic(t)
  return {
    focusX: lerp(from.focusX, to.focusX, e),
    focusY: lerp(from.focusY, to.focusY, e),
    rotX: lerp(from.rotX, to.rotX, e),
    rotY: lerp(from.rotY, to.rotY, e),
    rotZ: lerp(from.rotZ, to.rotZ, e),
    zoom: lerp(from.zoom, to.zoom, e),
  }
}

export function cameraTransform(pose: CameraPose): string {
  const tx = (pose.focusX - 0.5) * 390
  const ty = (pose.focusY - 0.5) * 844
  return [
    'perspective(1400px)',
    `rotateX(${pose.rotX.toFixed(3)}deg)`,
    `rotateY(${pose.rotY.toFixed(3)}deg)`,
    `rotateZ(${pose.rotZ.toFixed(3)}deg)`,
    `scale(${pose.zoom.toFixed(5)})`,
    `translate(${(-tx).toFixed(1)}px, ${(-ty).toFixed(1)}px)`,
  ].join(' ')
}

export function copyTranslate(
  t: number,
  viewportW: number,
  viewportH: number,
  copyBottom: number,
  scale: number
): string {
  const phoneW = 390 * scale
  const pos =
    viewportW < 900
      ? { x: 0, y: Math.max(0, viewportH / 2 - phoneW / 2) }
      : {
          x: Math.min(
            0.22 * viewportW,
            Math.max(0, viewportW / 2 + 0.2 * phoneW - phoneW / 2)
          ),
          y: 0,
        }
  return `translate(${pos.x * t}px, ${pos.y * t}px) scale(${scale.toFixed(5)})`
}
