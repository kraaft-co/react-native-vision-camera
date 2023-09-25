import { CameraDevice, CameraPosition } from '../CameraDevice';
import { DeviceFilter } from '../devices/getCameraDevice';
/**
 * Get the best matching Camera device that best satisfies your requirements using a sorting filter.
 * @param position The position of the Camera device relative to the phone.
 * @param filter The filter you want to use. The Camera device that matches your filter the closest will be returned
 * @returns The Camera device that matches your filter the closest.
 * @example
 * ```ts
 * const [position, setPosition] = useState<CameraPosition>('back')
 * const device = useCameraDevice(position, {
 *    physicalDevices: ['wide-angle-camera']
 * })
 * ```
 */
export declare function useCameraDevice(position: CameraPosition, filter?: DeviceFilter): CameraDevice | undefined;
//# sourceMappingURL=useCameraDevice.d.ts.map