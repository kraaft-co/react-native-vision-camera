import { CameraRuntimeError } from '../CameraError';
function filtersToFilterMap(filters) {
  return filters.reduce((map, curr, index) => {
    for (const key in curr) {
      // @ts-expect-error keys are untyped
      map[key] = {
        // @ts-expect-error keys are untyped
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        target: curr[key],
        priority: filters.length - index
      };
    }
    return map;
  }, {});
}

/**
 * Get the best matching Camera format for the given device that satisfies your requirements using a sorting filter. By default, formats are sorted by highest to lowest resolution.
 * @param device The Camera Device you're currently using
 * @param filters The filter you want to use. The format that matches your filter the closest will be returned. The filter is ranked by priority, descending.
 * @returns The format that matches your filter the closest.
 */
export function getCameraFormat(device, filters) {
  // Combine filters into a single filter map for constant-time lookup
  const filter = filtersToFilterMap(filters);

  // Sort list because we will pick first element
  // TODO: Use reduce instead of sort?
  const copy = [...device.formats];
  const sortedFormats = copy.sort((left, right) => {
    let leftPoints = 0;
    let rightPoints = 0;
    const leftVideoResolution = left.videoWidth * left.videoHeight;
    const rightVideoResolution = right.videoWidth * right.videoHeight;
    if (filter.videoResolution != null) {
      // Find video resolution closest to the filter (ignoring orientation)
      const targetResolution = filter.videoResolution.target.width * filter.videoResolution.target.height;
      const leftDiff = Math.abs(leftVideoResolution - targetResolution);
      const rightDiff = Math.abs(rightVideoResolution - targetResolution);
      if (leftDiff < rightDiff) leftPoints += filter.videoResolution.priority;else if (rightDiff < leftDiff) rightPoints += filter.videoResolution.priority;
    } else {
      // No filter is set, so just prefer higher resolutions
      if (leftVideoResolution > rightVideoResolution) leftPoints++;else if (rightVideoResolution > leftVideoResolution) rightPoints++;
    }
    const leftPhotoResolution = left.photoWidth * left.photoHeight;
    const rightPhotoResolution = right.photoWidth * right.photoHeight;
    if (filter.photoResolution != null) {
      // Find closest photo resolution to the filter (ignoring orientation)
      const targetResolution = filter.photoResolution.target.width * filter.photoResolution.target.height;
      const leftDiff = Math.abs(leftPhotoResolution - targetResolution);
      const rightDiff = Math.abs(rightPhotoResolution - targetResolution);
      if (leftDiff < rightDiff) leftPoints += filter.photoResolution.priority;else if (rightDiff < leftDiff) rightPoints += filter.photoResolution.priority;
    } else {
      // No filter is set, so just prefer higher resolutions
      if (leftPhotoResolution > rightPhotoResolution) leftPoints++;else if (rightPhotoResolution > leftPhotoResolution) rightPoints++;
    }

    // Find closest aspect ratio (video)
    if (filter.videoAspectRatio != null) {
      const leftAspect = left.videoWidth / right.videoHeight;
      const rightAspect = right.videoWidth / right.videoHeight;
      const leftDiff = Math.abs(leftAspect - filter.videoAspectRatio.target);
      const rightDiff = Math.abs(rightAspect - filter.videoAspectRatio.target);
      if (leftDiff < rightDiff) leftPoints += filter.videoAspectRatio.priority;else if (rightDiff < leftDiff) rightPoints += filter.videoAspectRatio.priority;
    }

    // Find closest aspect ratio (photo)
    if (filter.photoAspectRatio != null) {
      const leftAspect = left.photoWidth / right.photoHeight;
      const rightAspect = right.photoWidth / right.photoHeight;
      const leftDiff = Math.abs(leftAspect - filter.photoAspectRatio.target);
      const rightDiff = Math.abs(rightAspect - filter.photoAspectRatio.target);
      if (leftDiff < rightDiff) leftPoints += filter.photoAspectRatio.priority;else if (rightDiff < leftDiff) rightPoints += filter.photoAspectRatio.priority;
    }

    // Find closest max FPS
    if (filter.fps != null) {
      const leftDiff = Math.abs(left.maxFps - filter.fps.target);
      const rightDiff = Math.abs(right.maxFps - filter.fps.target);
      if (leftDiff < rightDiff) leftPoints += filter.fps.priority;else if (rightDiff < leftDiff) rightPoints += filter.fps.priority;
    }

    // Find video stabilization mode
    if (filter.videoStabilizationMode != null) {
      if (left.videoStabilizationModes.includes(filter.videoStabilizationMode.target)) leftPoints++;
      if (right.videoStabilizationModes.includes(filter.videoStabilizationMode.target)) rightPoints++;
    }

    // Find pixel format
    if (filter.pixelFormat != null) {
      if (left.pixelFormats.includes(filter.pixelFormat.target)) leftPoints++;
      if (right.pixelFormats.includes(filter.pixelFormat.target)) rightPoints++;
    }
    return rightPoints - leftPoints;
  });
  const format = sortedFormats[0];
  if (format == null) throw new CameraRuntimeError('device/invalid-device', `The given Camera Device (${device.id}) does not have any formats!`);
  return format;
}
//# sourceMappingURL=getCameraFormat.js.map