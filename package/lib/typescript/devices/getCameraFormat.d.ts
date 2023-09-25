import type { CameraDevice, CameraDeviceFormat, VideoStabilizationMode } from '../CameraDevice';
import { PixelFormat } from '../PixelFormat';
interface Size {
    width: number;
    height: number;
}
export interface FormatFilter {
    /**
     * The target resolution of the video (and frame processor) output pipeline.
     * If no format supports the given resolution, the format closest to this value will be used.
     */
    videoResolution?: Size;
    /**
     * The target resolution of the photo output pipeline.
     * If no format supports the given resolution, the format closest to this value will be used.
     */
    photoResolution?: Size;
    /**
     * The target aspect ratio of the video (and preview) output, expressed as a factor: `width / height`.
     *
     * In most cases, you want this to be as close to the screen's aspect ratio as possible (usually ~9:16).
     *
     * @example
     * ```ts
     * const screen = Dimensions.get('screen')
     * targetVideoAspectRatio: screen.width / screen.height
     * ```
     */
    videoAspectRatio?: number;
    /**
     * The target aspect ratio of the photo output, expressed as a factor: `width / height`.
     *
     * In most cases, you want this to be the same as `targetVideoAspectRatio`, which you often want
     * to be as close to the screen's aspect ratio as possible (usually ~9:16)
     *
     * @example
     * ```ts
     * const screen = Dimensions.get('screen')
     * targetPhotoAspectRatio: screen.width / screen.height
     * ```
     */
    photoAspectRatio?: number;
    /**
     * The target FPS you want to record video at.
     * If the FPS requirements can not be met, the format closest to this value will be used.
     */
    fps?: number;
    /**
     * The target video stabilization mode you want to use.
     * If no format supports the target video stabilization mode, the best other matching format will be used.
     */
    videoStabilizationMode?: VideoStabilizationMode;
    /**
     * The target pixel format you want to use.
     * If no format supports the target pixel format, the best other matching format will be used.
     */
    pixelFormat?: PixelFormat;
}
/**
 * Get the best matching Camera format for the given device that satisfies your requirements using a sorting filter. By default, formats are sorted by highest to lowest resolution.
 * @param device The Camera Device you're currently using
 * @param filters The filter you want to use. The format that matches your filter the closest will be returned. The filter is ranked by priority, descending.
 * @returns The format that matches your filter the closest.
 */
export declare function getCameraFormat(device: CameraDevice, filters: FormatFilter[]): CameraDeviceFormat;
export {};
//# sourceMappingURL=getCameraFormat.d.ts.map