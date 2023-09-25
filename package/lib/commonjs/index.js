"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Frame: true
};
Object.defineProperty(exports, "Frame", {
  enumerable: true,
  get: function () {
    return _Frame.Frame;
  }
});
var _Camera = require("./Camera");
Object.keys(_Camera).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Camera[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Camera[key];
    }
  });
});
var _CameraDevice = require("./CameraDevice");
Object.keys(_CameraDevice).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CameraDevice[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CameraDevice[key];
    }
  });
});
var _CameraError = require("./CameraError");
Object.keys(_CameraError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CameraError[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CameraError[key];
    }
  });
});
var _CameraProps = require("./CameraProps");
Object.keys(_CameraProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CameraProps[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _CameraProps[key];
    }
  });
});
var _Frame = require("./Frame");
var _FrameProcessorPlugins = require("./FrameProcessorPlugins");
Object.keys(_FrameProcessorPlugins).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _FrameProcessorPlugins[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _FrameProcessorPlugins[key];
    }
  });
});
var _Orientation = require("./Orientation");
Object.keys(_Orientation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Orientation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Orientation[key];
    }
  });
});
var _PhotoFile = require("./PhotoFile");
Object.keys(_PhotoFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _PhotoFile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PhotoFile[key];
    }
  });
});
var _PixelFormat = require("./PixelFormat");
Object.keys(_PixelFormat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _PixelFormat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _PixelFormat[key];
    }
  });
});
var _Point = require("./Point");
Object.keys(_Point).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Point[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Point[key];
    }
  });
});
var _VideoFile = require("./VideoFile");
Object.keys(_VideoFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _VideoFile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _VideoFile[key];
    }
  });
});
var _getCameraFormat = require("./devices/getCameraFormat");
Object.keys(_getCameraFormat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _getCameraFormat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getCameraFormat[key];
    }
  });
});
var _getCameraDevice = require("./devices/getCameraDevice");
Object.keys(_getCameraDevice).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _getCameraDevice[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getCameraDevice[key];
    }
  });
});
var _useCameraDevice = require("./hooks/useCameraDevice");
Object.keys(_useCameraDevice).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useCameraDevice[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useCameraDevice[key];
    }
  });
});
var _useCameraDevices = require("./hooks/useCameraDevices");
Object.keys(_useCameraDevices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useCameraDevices[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useCameraDevices[key];
    }
  });
});
var _useCameraFormat = require("./hooks/useCameraFormat");
Object.keys(_useCameraFormat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useCameraFormat[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useCameraFormat[key];
    }
  });
});
var _useCameraPermission = require("./hooks/useCameraPermission");
Object.keys(_useCameraPermission).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useCameraPermission[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useCameraPermission[key];
    }
  });
});
var _useFrameProcessor = require("./hooks/useFrameProcessor");
Object.keys(_useFrameProcessor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useFrameProcessor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _useFrameProcessor[key];
    }
  });
});
//# sourceMappingURL=index.js.map