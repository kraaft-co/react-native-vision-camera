import { CameraDevice, CameraPosition, PhysicalCameraDeviceType } from '../CameraDevice';
export interface DeviceFilter {
    /**
     * The desired physical devices your camera device should have.
     *
     * Many modern phones have multiple Camera devices on one side and can combine those physical camera devices to one logical camera device.
     * For example, the iPhone 11 has two physical camera devices, the `ultra-wide-angle-camera` ("fish-eye") and the normal `wide-angle-camera`. You can either use one of those devices individually, or use a combined logical camera device which can smoothly switch over between the two physical cameras depending on the current `zoom` level.
     * When the user is at 0.5x-1x zoom, the `ultra-wide-angle-camera` can be used to offer a fish-eye zoom-out effect, and anything above 1x will smoothly switch over to the `wide-angle-camera`.
     *
     * **Note:** Devices with less phyiscal devices (`['wide-angle-camera']`) are usually faster to start-up than more complex
     * devices (`['ultra-wide-angle-camera', 'wide-angle-camera', 'telephoto-camera']`), but don't offer zoom switch-over capabilities.
     *
     * @example
     * ```ts
     * // This device is simpler, so it starts up faster.
     * getCameraDevice({ physicalDevices: ['wide-angle-camera'] })
     * // This device is more complex, so it starts up slower, but you can switch between devices on 0.5x, 1x and 2x zoom.
     * getCameraDevice({ physicalDevices: ['ultra-wide-angle-camera', 'wide-angle-camera', 'telephoto-camera'] })
     * ```
     */
    physicalDevices?: PhysicalCameraDeviceType[];
}
/**
 * Get the best matching Camera device that satisfies your requirements using a sorting filter.
 * @param devices All available Camera Devices this function will use for filtering. To get devices, use `Camera.getAvailableCameraDevices()`.
 * @param filter The filter you want to use. The device that matches your filter the closest will be returned.
 * @returns The device that matches your filter the closest.
 */
export declare function getCameraDevice(devices: CameraDevice[], position: CameraPosition, filter?: DeviceFilter): CameraDevice;
//# sourceMappingURL=getCameraDevice.d.ts.map