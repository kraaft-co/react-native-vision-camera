import { CameraRuntimeError } from '../CameraError';
/**
 * Get the best matching Camera device that satisfies your requirements using a sorting filter.
 * @param devices All available Camera Devices this function will use for filtering. To get devices, use `Camera.getAvailableCameraDevices()`.
 * @param filter The filter you want to use. The device that matches your filter the closest will be returned.
 * @returns The device that matches your filter the closest.
 */
export function getCameraDevice(devices, position) {
  let filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const filtered = devices.filter(d => d.position === position);
  const sortedDevices = filtered.sort((left, right) => {
    let leftPoints = 0;
    let rightPoints = 0;

    // prefer higher hardware-level
    if (left.hardwareLevel === 'full') leftPoints += 4;
    if (right.hardwareLevel === 'full') rightPoints += 4;

    // compare devices. two possible scenarios:
    // 1. user wants all cameras ([ultra-wide, wide, tele]) to zoom. prefer those devices that have all 3 cameras.
    // 2. user wants only one ([wide]) for faster performance. prefer those devices that only have one camera, if they have more, we rank them lower.
    if (filter.physicalDevices != null) {
      for (const device of left.physicalDevices) {
        if (filter.physicalDevices.includes(device)) leftPoints += 1;else leftPoints -= 1;
      }
      for (const device of right.physicalDevices) {
        if (filter.physicalDevices.includes(device)) rightPoints += 1;else rightPoints -= 1;
      }
    }
    return leftPoints - rightPoints;
  });
  const device = sortedDevices[0];
  if (device == null) throw new CameraRuntimeError('device/invalid-device', 'No Camera Device could be found!');
  return device;
}
//# sourceMappingURL=getCameraDevice.js.map