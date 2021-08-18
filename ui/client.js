/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire (path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var buffer = {};

var base64Js = {};

base64Js.byteLength = byteLength;
base64Js.toByteArray = toByteArray;
base64Js.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens (b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4);

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));

  var curByte = 0;

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen;

  var i;
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = (tmp >> 16) & 0xFF;
    arr[curByte++] = (tmp >> 8) & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4);
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2);
    arr[curByte++] = (tmp >> 8) & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    );
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    );
  }

  return parts.join('')
}

var ieee754 = {};

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */

ieee754.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = (nBytes * 8) - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
};

ieee754.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = (nBytes * 8) - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

(function (exports) {

const base64 = base64Js;
const ieee754$1 = ieee754;
const customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null;

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;

const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  );
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1);
    const proto = { foo: function () { return 42 } };
    Object.setPrototypeOf(proto, Uint8Array.prototype);
    Object.setPrototypeOf(arr, proto);
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
});

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
});

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length);
  Object.setPrototypeOf(buf, Buffer.prototype);
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192; // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  const valueOf = value.valueOf && value.valueOf();
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  const b = fromObject(value);
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
};

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
};

function allocUnsafe (size) {
  assertSize(size);
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
};

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  const length = byteLength(string, encoding) | 0;
  let buf = createBuffer(length);

  const actual = buf.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
  }

  return buf
}

function fromArrayLike (array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0;
  const buf = createBuffer(length);
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255;
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView);
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  let buf;
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array);
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype);

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0;
    const buf = createBuffer(len);

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len);
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
};

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  let x = a.length;
  let y = b.length;

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
};

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  let i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  const buffer = Buffer.allocUnsafe(length);
  let pos = 0;
  for (i = 0; i < list.length; ++i) {
    let buf = list[i];
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
        buf.copy(buffer, pos);
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        );
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos);
    }
    pos += buf.length;
  }
  return buffer
};

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  const len = string.length;
  const mustMatch = (arguments.length > 2 && arguments[2] === true);
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  let loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString (encoding, start, end) {
  let loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;

function swap (b, n, m) {
  const i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16 () {
  const len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this
};

Buffer.prototype.swap32 = function swap32 () {
  const len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this
};

Buffer.prototype.swap64 = function swap64 () {
  const len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this
};

Buffer.prototype.toString = function toString () {
  const length = this.length;
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
};

Buffer.prototype.toLocaleString = Buffer.prototype.toString;

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
};

Buffer.prototype.inspect = function inspect () {
  let str = '';
  const max = exports.INSPECT_MAX_BYTES;
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
  if (this.length > max) str += ' ... ';
  return '<Buffer ' + str + '>'
};
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength);
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0

  let x = thisEnd - thisStart;
  let y = end - start;
  const len = Math.min(x, y);

  const thisCopy = this.slice(thisStart, thisEnd);
  const targetCopy = target.slice(start, end);

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1);
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  let indexSize = 1;
  let arrLength = arr.length;
  let valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  let i;
  if (dir) {
    let foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      let found = true;
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
};

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
};

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
};

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0;
  const remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  const strLen = string.length;

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  let i;
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16);
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed;
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0;
    if (isFinite(length)) {
      length = length >>> 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  const remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8';

  let loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
};

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end);
  const res = [];

  let i = start;
  while (i < end) {
    const firstByte = buf[i];
    let codePoint = null;
    let bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1;

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray (codePoints) {
  const len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = '';
  let i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  }
  return res
}

function asciiSlice (buf, start, end) {
  let ret = '';
  end = Math.min(buf.length, end);

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret
}

function latin1Slice (buf, start, end) {
  let ret = '';
  end = Math.min(buf.length, end);

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret
}

function hexSlice (buf, start, end) {
  const len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  let out = '';
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]];
  }
  return out
}

function utf16leSlice (buf, start, end) {
  const bytes = buf.slice(start, end);
  let res = '';
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256));
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  const len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  const newBuf = this.subarray(start, end);
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype);

  return newBuf
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  let val = this[offset];
  let mul = 1;
  let i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val
};

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  let val = this[offset + --byteLength];
  let mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val
};

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset]
};

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | (this[offset + 1] << 8)
};

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return (this[offset] << 8) | this[offset + 1]
};

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
};

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
};

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
  offset = offset >>> 0;
  validateNumber(offset, 'offset');
  const first = this[offset];
  const last = this[offset + 7];
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }

  const lo = first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24;

  const hi = this[++offset] +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    last * 2 ** 24;

  return BigInt(lo) + (BigInt(hi) << BigInt(32))
});

Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
  offset = offset >>> 0;
  validateNumber(offset, 'offset');
  const first = this[offset];
  const last = this[offset + 7];
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }

  const hi = first * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset];

  const lo = this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last;

  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
});

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  let val = this[offset];
  let mul = 1;
  let i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  let i = byteLength;
  let mul = 1;
  let val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
};

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  const val = this[offset] | (this[offset + 1] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  const val = this[offset + 1] | (this[offset] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
};

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
};

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
  offset = offset >>> 0;
  validateNumber(offset, 'offset');
  const first = this[offset];
  const last = this[offset + 7];
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }

  const val = this[offset + 4] +
    this[offset + 5] * 2 ** 8 +
    this[offset + 6] * 2 ** 16 +
    (last << 24); // Overflow

  return (BigInt(val) << BigInt(32)) +
    BigInt(first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24)
});

Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
  offset = offset >>> 0;
  validateNumber(offset, 'offset');
  const first = this[offset];
  const last = this[offset + 7];
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }

  const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset];

  return (BigInt(val) << BigInt(32)) +
    BigInt(this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last)
});

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754$1.read(this, offset, true, 23, 4)
};

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754$1.read(this, offset, false, 23, 4)
};

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754$1.read(this, offset, true, 52, 8)
};

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754$1.read(this, offset, false, 52, 8)
};

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  let mul = 1;
  let i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  let i = byteLength - 1;
  let mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  this[offset] = (value & 0xff);
  return offset + 1
};

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = (value & 0xff);
  this[offset + 1] = (value >>> 8);
  return offset + 2
};

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = (value >>> 8);
  this[offset + 1] = (value & 0xff);
  return offset + 2
};

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset + 3] = (value >>> 24);
  this[offset + 2] = (value >>> 16);
  this[offset + 1] = (value >>> 8);
  this[offset] = (value & 0xff);
  return offset + 4
};

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset] = (value >>> 24);
  this[offset + 1] = (value >>> 16);
  this[offset + 2] = (value >>> 8);
  this[offset + 3] = (value & 0xff);
  return offset + 4
};

function wrtBigUInt64LE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7);

  let lo = Number(value & BigInt(0xffffffff));
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  return offset
}

function wrtBigUInt64BE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7);

  let lo = Number(value & BigInt(0xffffffff));
  buf[offset + 7] = lo;
  lo = lo >> 8;
  buf[offset + 6] = lo;
  lo = lo >> 8;
  buf[offset + 5] = lo;
  lo = lo >> 8;
  buf[offset + 4] = lo;
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
  buf[offset + 3] = hi;
  hi = hi >> 8;
  buf[offset + 2] = hi;
  hi = hi >> 8;
  buf[offset + 1] = hi;
  hi = hi >> 8;
  buf[offset] = hi;
  return offset + 8
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
});

Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
});

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  let i = 0;
  let mul = 1;
  let sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  let i = byteLength - 1;
  let mul = 1;
  let sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = (value & 0xff);
  return offset + 1
};

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = (value & 0xff);
  this[offset + 1] = (value >>> 8);
  return offset + 2
};

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = (value >>> 8);
  this[offset + 1] = (value & 0xff);
  return offset + 2
};

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  this[offset] = (value & 0xff);
  this[offset + 1] = (value >>> 8);
  this[offset + 2] = (value >>> 16);
  this[offset + 3] = (value >>> 24);
  return offset + 4
};

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  this[offset] = (value >>> 24);
  this[offset + 1] = (value >>> 16);
  this[offset + 2] = (value >>> 8);
  this[offset + 3] = (value & 0xff);
  return offset + 4
};

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
});

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
});

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  ieee754$1.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
};

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
};

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  ieee754$1.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  const len = end - start;

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    );
  }

  return len
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0);
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code;
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } else if (typeof val === 'boolean') {
    val = Number(val);
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  let i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    const bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding);
    const len = bytes.length;
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this
};

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E (sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor () {
      super();

      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      });

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`;
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack; // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name;
    }

    get code () {
      return sym
    }

    set code (value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      });
    }

    toString () {
      return `${this.name} [${sym}]: ${this.message}`
    }
  };
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
  function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`
    }

    return 'Attempt to access memory outside buffer bounds'
  }, RangeError);
E('ERR_INVALID_ARG_TYPE',
  function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
  }, TypeError);
E('ERR_OUT_OF_RANGE',
  function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input));
    } else if (typeof input === 'bigint') {
      received = String(input);
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received);
      }
      received += 'n';
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg
  }, RangeError);

function addNumericalSeparator (val) {
  let res = '';
  let i = val.length;
  const start = val[0] === '-' ? 1 : 0;
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`;
  }
  return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds (buf, offset, byteLength) {
  validateNumber(offset, 'offset');
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1));
  }
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : '';
    let range;
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                `${(byteLength + 1) * 8 - 1}${n}`;
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`;
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength);
}

function validateNumber (value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
  }
}

function boundsError (value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type);
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                    `>= ${type ? 1 : 0} and <= ${length}`,
                                    value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0];
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity;
  let codePoint;
  const length = string.length;
  let leadSurrogate = null;
  const bytes = [];

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        }

        // valid lead
        leadSurrogate = codePoint;

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  const byteArray = [];
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  let c, hi, lo;
  const byteArray = [];
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  let i;
  for (i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i];
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
  const alphabet = '0123456789abcdef';
  const table = new Array(256);
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16;
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j];
    }
  }
  return table
})();

// Return not function with Error if BigInt not supported
function defineBigIntMethod (fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined () {
  throw new Error('BigInt not supported')
}
}(buffer));

var global$1 = (typeof global !== "undefined" ? global :
  typeof self !== "undefined" ? self :
  typeof window !== "undefined" ? window : {});

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = global$1.performance || {};
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var browser$1 = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

var belter$1 = {exports: {}};

(function (module, exports) {
!function(root, factory) {
    module.exports = factory() ;
}("undefined" != typeof self ? self : commonjsGlobal, (function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = !0;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                enumerable: !0,
                get: getter
            });
        };
        __webpack_require__.r = function(exports) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
        };
        __webpack_require__.t = function(value, mode) {
            1 & mode && (value = __webpack_require__(value));
            if (8 & mode) return value;
            if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", {
                enumerable: !0,
                value: value
            });
            if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return {}.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 0);
    }([ function(module, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "getUserAgent", (function() {
            return getUserAgent;
        }));
        __webpack_require__.d(__webpack_exports__, "isDevice", (function() {
            return isDevice;
        }));
        __webpack_require__.d(__webpack_exports__, "isWebView", (function() {
            return isWebView;
        }));
        __webpack_require__.d(__webpack_exports__, "isStandAlone", (function() {
            return isStandAlone;
        }));
        __webpack_require__.d(__webpack_exports__, "isFacebookWebView", (function() {
            return isFacebookWebView;
        }));
        __webpack_require__.d(__webpack_exports__, "isFirefox", (function() {
            return isFirefox;
        }));
        __webpack_require__.d(__webpack_exports__, "isFirefoxIOS", (function() {
            return isFirefoxIOS;
        }));
        __webpack_require__.d(__webpack_exports__, "isEdgeIOS", (function() {
            return isEdgeIOS;
        }));
        __webpack_require__.d(__webpack_exports__, "isOperaMini", (function() {
            return isOperaMini;
        }));
        __webpack_require__.d(__webpack_exports__, "isAndroid", (function() {
            return isAndroid;
        }));
        __webpack_require__.d(__webpack_exports__, "isIos", (function() {
            return isIos;
        }));
        __webpack_require__.d(__webpack_exports__, "isGoogleSearchApp", (function() {
            return isGoogleSearchApp;
        }));
        __webpack_require__.d(__webpack_exports__, "isQQBrowser", (function() {
            return isQQBrowser;
        }));
        __webpack_require__.d(__webpack_exports__, "isIosWebview", (function() {
            return isIosWebview;
        }));
        __webpack_require__.d(__webpack_exports__, "isSFVC", (function() {
            return isSFVC;
        }));
        __webpack_require__.d(__webpack_exports__, "isSFVCorSafari", (function() {
            return isSFVCorSafari;
        }));
        __webpack_require__.d(__webpack_exports__, "isAndroidWebview", (function() {
            return isAndroidWebview;
        }));
        __webpack_require__.d(__webpack_exports__, "isIE", (function() {
            return device_isIE;
        }));
        __webpack_require__.d(__webpack_exports__, "isIECompHeader", (function() {
            return isIECompHeader;
        }));
        __webpack_require__.d(__webpack_exports__, "isElectron", (function() {
            return isElectron;
        }));
        __webpack_require__.d(__webpack_exports__, "isIEIntranet", (function() {
            return isIEIntranet;
        }));
        __webpack_require__.d(__webpack_exports__, "isMacOsCna", (function() {
            return isMacOsCna;
        }));
        __webpack_require__.d(__webpack_exports__, "supportsPopups", (function() {
            return supportsPopups;
        }));
        __webpack_require__.d(__webpack_exports__, "isChrome", (function() {
            return isChrome;
        }));
        __webpack_require__.d(__webpack_exports__, "isSafari", (function() {
            return isSafari;
        }));
        __webpack_require__.d(__webpack_exports__, "isApplePaySupported", (function() {
            return isApplePaySupported;
        }));
        __webpack_require__.d(__webpack_exports__, "getBody", (function() {
            return getBody;
        }));
        __webpack_require__.d(__webpack_exports__, "isDocumentReady", (function() {
            return isDocumentReady;
        }));
        __webpack_require__.d(__webpack_exports__, "isDocumentInteractive", (function() {
            return isDocumentInteractive;
        }));
        __webpack_require__.d(__webpack_exports__, "urlEncode", (function() {
            return urlEncode;
        }));
        __webpack_require__.d(__webpack_exports__, "waitForWindowReady", (function() {
            return waitForWindowReady;
        }));
        __webpack_require__.d(__webpack_exports__, "waitForDocumentReady", (function() {
            return waitForDocumentReady;
        }));
        __webpack_require__.d(__webpack_exports__, "waitForDocumentBody", (function() {
            return waitForDocumentBody;
        }));
        __webpack_require__.d(__webpack_exports__, "parseQuery", (function() {
            return parseQuery;
        }));
        __webpack_require__.d(__webpack_exports__, "getQueryParam", (function() {
            return getQueryParam;
        }));
        __webpack_require__.d(__webpack_exports__, "urlWillRedirectPage", (function() {
            return urlWillRedirectPage;
        }));
        __webpack_require__.d(__webpack_exports__, "formatQuery", (function() {
            return formatQuery;
        }));
        __webpack_require__.d(__webpack_exports__, "extendQuery", (function() {
            return extendQuery;
        }));
        __webpack_require__.d(__webpack_exports__, "extendUrl", (function() {
            return extendUrl;
        }));
        __webpack_require__.d(__webpack_exports__, "redirect", (function() {
            return redirect;
        }));
        __webpack_require__.d(__webpack_exports__, "hasMetaViewPort", (function() {
            return hasMetaViewPort;
        }));
        __webpack_require__.d(__webpack_exports__, "isElementVisible", (function() {
            return isElementVisible;
        }));
        __webpack_require__.d(__webpack_exports__, "getPerformance", (function() {
            return getPerformance;
        }));
        __webpack_require__.d(__webpack_exports__, "enablePerformance", (function() {
            return enablePerformance;
        }));
        __webpack_require__.d(__webpack_exports__, "getPageRenderTime", (function() {
            return getPageRenderTime;
        }));
        __webpack_require__.d(__webpack_exports__, "htmlEncode", (function() {
            return htmlEncode;
        }));
        __webpack_require__.d(__webpack_exports__, "isBrowser", (function() {
            return dom_isBrowser;
        }));
        __webpack_require__.d(__webpack_exports__, "querySelectorAll", (function() {
            return querySelectorAll;
        }));
        __webpack_require__.d(__webpack_exports__, "onClick", (function() {
            return onClick;
        }));
        __webpack_require__.d(__webpack_exports__, "getScript", (function() {
            return getScript;
        }));
        __webpack_require__.d(__webpack_exports__, "isLocalStorageEnabled", (function() {
            return isLocalStorageEnabled;
        }));
        __webpack_require__.d(__webpack_exports__, "getBrowserLocales", (function() {
            return getBrowserLocales;
        }));
        __webpack_require__.d(__webpack_exports__, "appendChild", (function() {
            return appendChild;
        }));
        __webpack_require__.d(__webpack_exports__, "isElement", (function() {
            return isElement;
        }));
        __webpack_require__.d(__webpack_exports__, "getElementSafe", (function() {
            return getElementSafe;
        }));
        __webpack_require__.d(__webpack_exports__, "getElement", (function() {
            return getElement;
        }));
        __webpack_require__.d(__webpack_exports__, "elementReady", (function() {
            return elementReady;
        }));
        __webpack_require__.d(__webpack_exports__, "PopupOpenError", (function() {
            return dom_PopupOpenError;
        }));
        __webpack_require__.d(__webpack_exports__, "popup", (function() {
            return popup;
        }));
        __webpack_require__.d(__webpack_exports__, "writeToWindow", (function() {
            return writeToWindow;
        }));
        __webpack_require__.d(__webpack_exports__, "writeElementToWindow", (function() {
            return writeElementToWindow;
        }));
        __webpack_require__.d(__webpack_exports__, "setStyle", (function() {
            return setStyle;
        }));
        __webpack_require__.d(__webpack_exports__, "awaitFrameLoad", (function() {
            return awaitFrameLoad;
        }));
        __webpack_require__.d(__webpack_exports__, "awaitFrameWindow", (function() {
            return awaitFrameWindow;
        }));
        __webpack_require__.d(__webpack_exports__, "createElement", (function() {
            return createElement;
        }));
        __webpack_require__.d(__webpack_exports__, "iframe", (function() {
            return iframe;
        }));
        __webpack_require__.d(__webpack_exports__, "addEventListener", (function() {
            return addEventListener;
        }));
        __webpack_require__.d(__webpack_exports__, "bindEvents", (function() {
            return bindEvents;
        }));
        __webpack_require__.d(__webpack_exports__, "setVendorCSS", (function() {
            return setVendorCSS;
        }));
        __webpack_require__.d(__webpack_exports__, "animate", (function() {
            return animate;
        }));
        __webpack_require__.d(__webpack_exports__, "makeElementVisible", (function() {
            return makeElementVisible;
        }));
        __webpack_require__.d(__webpack_exports__, "makeElementInvisible", (function() {
            return makeElementInvisible;
        }));
        __webpack_require__.d(__webpack_exports__, "showElement", (function() {
            return showElement;
        }));
        __webpack_require__.d(__webpack_exports__, "hideElement", (function() {
            return hideElement;
        }));
        __webpack_require__.d(__webpack_exports__, "destroyElement", (function() {
            return destroyElement;
        }));
        __webpack_require__.d(__webpack_exports__, "showAndAnimate", (function() {
            return showAndAnimate;
        }));
        __webpack_require__.d(__webpack_exports__, "animateAndHide", (function() {
            return animateAndHide;
        }));
        __webpack_require__.d(__webpack_exports__, "addClass", (function() {
            return addClass;
        }));
        __webpack_require__.d(__webpack_exports__, "removeClass", (function() {
            return removeClass;
        }));
        __webpack_require__.d(__webpack_exports__, "isElementClosed", (function() {
            return isElementClosed;
        }));
        __webpack_require__.d(__webpack_exports__, "watchElementForClose", (function() {
            return watchElementForClose;
        }));
        __webpack_require__.d(__webpack_exports__, "fixScripts", (function() {
            return fixScripts;
        }));
        __webpack_require__.d(__webpack_exports__, "onResize", (function() {
            return onResize;
        }));
        __webpack_require__.d(__webpack_exports__, "getResourceLoadTime", (function() {
            return getResourceLoadTime;
        }));
        __webpack_require__.d(__webpack_exports__, "isShadowElement", (function() {
            return isShadowElement;
        }));
        __webpack_require__.d(__webpack_exports__, "getShadowRoot", (function() {
            return getShadowRoot;
        }));
        __webpack_require__.d(__webpack_exports__, "getShadowHost", (function() {
            return getShadowHost;
        }));
        __webpack_require__.d(__webpack_exports__, "insertShadowSlot", (function() {
            return insertShadowSlot;
        }));
        __webpack_require__.d(__webpack_exports__, "preventClickFocus", (function() {
            return preventClickFocus;
        }));
        __webpack_require__.d(__webpack_exports__, "getStackTrace", (function() {
            return getStackTrace;
        }));
        __webpack_require__.d(__webpack_exports__, "getCurrentScript", (function() {
            return getCurrentScript;
        }));
        __webpack_require__.d(__webpack_exports__, "getCurrentScriptUID", (function() {
            return getCurrentScriptUID;
        }));
        __webpack_require__.d(__webpack_exports__, "submitForm", (function() {
            return submitForm;
        }));
        __webpack_require__.d(__webpack_exports__, "experiment", (function() {
            return experiment;
        }));
        __webpack_require__.d(__webpack_exports__, "getGlobalNameSpace", (function() {
            return getGlobalNameSpace;
        }));
        __webpack_require__.d(__webpack_exports__, "getStorage", (function() {
            return getStorage;
        }));
        __webpack_require__.d(__webpack_exports__, "getFunctionName", (function() {
            return getFunctionName;
        }));
        __webpack_require__.d(__webpack_exports__, "setFunctionName", (function() {
            return setFunctionName;
        }));
        __webpack_require__.d(__webpack_exports__, "base64encode", (function() {
            return base64encode;
        }));
        __webpack_require__.d(__webpack_exports__, "base64decode", (function() {
            return base64decode;
        }));
        __webpack_require__.d(__webpack_exports__, "uniqueID", (function() {
            return uniqueID;
        }));
        __webpack_require__.d(__webpack_exports__, "getGlobal", (function() {
            return getGlobal;
        }));
        __webpack_require__.d(__webpack_exports__, "getObjectID", (function() {
            return getObjectID;
        }));
        __webpack_require__.d(__webpack_exports__, "getEmptyObject", (function() {
            return getEmptyObject;
        }));
        __webpack_require__.d(__webpack_exports__, "memoize", (function() {
            return memoize;
        }));
        __webpack_require__.d(__webpack_exports__, "promiseIdentity", (function() {
            return promiseIdentity;
        }));
        __webpack_require__.d(__webpack_exports__, "memoizePromise", (function() {
            return memoizePromise;
        }));
        __webpack_require__.d(__webpack_exports__, "promisify", (function() {
            return promisify;
        }));
        __webpack_require__.d(__webpack_exports__, "inlineMemoize", (function() {
            return inlineMemoize;
        }));
        __webpack_require__.d(__webpack_exports__, "noop", (function() {
            return src_util_noop;
        }));
        __webpack_require__.d(__webpack_exports__, "once", (function() {
            return once;
        }));
        __webpack_require__.d(__webpack_exports__, "hashStr", (function() {
            return hashStr;
        }));
        __webpack_require__.d(__webpack_exports__, "strHashStr", (function() {
            return strHashStr;
        }));
        __webpack_require__.d(__webpack_exports__, "match", (function() {
            return match;
        }));
        __webpack_require__.d(__webpack_exports__, "awaitKey", (function() {
            return awaitKey;
        }));
        __webpack_require__.d(__webpack_exports__, "stringifyError", (function() {
            return stringifyError;
        }));
        __webpack_require__.d(__webpack_exports__, "stringifyErrorMessage", (function() {
            return stringifyErrorMessage;
        }));
        __webpack_require__.d(__webpack_exports__, "stringify", (function() {
            return stringify;
        }));
        __webpack_require__.d(__webpack_exports__, "domainMatches", (function() {
            return domainMatches;
        }));
        __webpack_require__.d(__webpack_exports__, "patchMethod", (function() {
            return patchMethod;
        }));
        __webpack_require__.d(__webpack_exports__, "extend", (function() {
            return extend;
        }));
        __webpack_require__.d(__webpack_exports__, "values", (function() {
            return util_values;
        }));
        __webpack_require__.d(__webpack_exports__, "memoizedValues", (function() {
            return memoizedValues;
        }));
        __webpack_require__.d(__webpack_exports__, "perc", (function() {
            return perc;
        }));
        __webpack_require__.d(__webpack_exports__, "min", (function() {
            return min;
        }));
        __webpack_require__.d(__webpack_exports__, "max", (function() {
            return max;
        }));
        __webpack_require__.d(__webpack_exports__, "roundUp", (function() {
            return roundUp;
        }));
        __webpack_require__.d(__webpack_exports__, "regexMap", (function() {
            return regexMap;
        }));
        __webpack_require__.d(__webpack_exports__, "svgToBase64", (function() {
            return svgToBase64;
        }));
        __webpack_require__.d(__webpack_exports__, "objFilter", (function() {
            return objFilter;
        }));
        __webpack_require__.d(__webpack_exports__, "identity", (function() {
            return identity;
        }));
        __webpack_require__.d(__webpack_exports__, "regexTokenize", (function() {
            return regexTokenize;
        }));
        __webpack_require__.d(__webpack_exports__, "promiseDebounce", (function() {
            return promiseDebounce;
        }));
        __webpack_require__.d(__webpack_exports__, "safeInterval", (function() {
            return safeInterval;
        }));
        __webpack_require__.d(__webpack_exports__, "isInteger", (function() {
            return isInteger;
        }));
        __webpack_require__.d(__webpack_exports__, "isFloat", (function() {
            return isFloat;
        }));
        __webpack_require__.d(__webpack_exports__, "serializePrimitive", (function() {
            return serializePrimitive;
        }));
        __webpack_require__.d(__webpack_exports__, "deserializePrimitive", (function() {
            return deserializePrimitive;
        }));
        __webpack_require__.d(__webpack_exports__, "dotify", (function() {
            return dotify;
        }));
        __webpack_require__.d(__webpack_exports__, "undotify", (function() {
            return undotify;
        }));
        __webpack_require__.d(__webpack_exports__, "eventEmitter", (function() {
            return eventEmitter;
        }));
        __webpack_require__.d(__webpack_exports__, "camelToDasherize", (function() {
            return camelToDasherize;
        }));
        __webpack_require__.d(__webpack_exports__, "dasherizeToCamel", (function() {
            return dasherizeToCamel;
        }));
        __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", (function() {
            return capitalizeFirstLetter;
        }));
        __webpack_require__.d(__webpack_exports__, "get", (function() {
            return util_get;
        }));
        __webpack_require__.d(__webpack_exports__, "safeTimeout", (function() {
            return safeTimeout;
        }));
        __webpack_require__.d(__webpack_exports__, "defineLazyProp", (function() {
            return defineLazyProp;
        }));
        __webpack_require__.d(__webpack_exports__, "arrayFrom", (function() {
            return arrayFrom;
        }));
        __webpack_require__.d(__webpack_exports__, "isObject", (function() {
            return isObject;
        }));
        __webpack_require__.d(__webpack_exports__, "isObjectObject", (function() {
            return isObjectObject;
        }));
        __webpack_require__.d(__webpack_exports__, "isPlainObject", (function() {
            return isPlainObject;
        }));
        __webpack_require__.d(__webpack_exports__, "replaceObject", (function() {
            return replaceObject;
        }));
        __webpack_require__.d(__webpack_exports__, "copyProp", (function() {
            return copyProp;
        }));
        __webpack_require__.d(__webpack_exports__, "regex", (function() {
            return regex;
        }));
        __webpack_require__.d(__webpack_exports__, "regexAll", (function() {
            return regexAll;
        }));
        __webpack_require__.d(__webpack_exports__, "isDefined", (function() {
            return isDefined;
        }));
        __webpack_require__.d(__webpack_exports__, "cycle", (function() {
            return cycle;
        }));
        __webpack_require__.d(__webpack_exports__, "debounce", (function() {
            return debounce;
        }));
        __webpack_require__.d(__webpack_exports__, "isRegex", (function() {
            return util_isRegex;
        }));
        __webpack_require__.d(__webpack_exports__, "weakMapMemoize", (function() {
            return util_weakMapMemoize;
        }));
        __webpack_require__.d(__webpack_exports__, "weakMapMemoizePromise", (function() {
            return util_weakMapMemoizePromise;
        }));
        __webpack_require__.d(__webpack_exports__, "getOrSet", (function() {
            return getOrSet;
        }));
        __webpack_require__.d(__webpack_exports__, "cleanup", (function() {
            return cleanup;
        }));
        __webpack_require__.d(__webpack_exports__, "tryCatch", (function() {
            return tryCatch;
        }));
        __webpack_require__.d(__webpack_exports__, "removeFromArray", (function() {
            return removeFromArray;
        }));
        __webpack_require__.d(__webpack_exports__, "assertExists", (function() {
            return assertExists;
        }));
        __webpack_require__.d(__webpack_exports__, "unique", (function() {
            return unique;
        }));
        __webpack_require__.d(__webpack_exports__, "constHas", (function() {
            return constHas;
        }));
        __webpack_require__.d(__webpack_exports__, "dedupeErrors", (function() {
            return dedupeErrors;
        }));
        __webpack_require__.d(__webpack_exports__, "ExtendableError", (function() {
            return util_ExtendableError;
        }));
        __webpack_require__.d(__webpack_exports__, "request", (function() {
            return request;
        }));
        __webpack_require__.d(__webpack_exports__, "addHeaderBuilder", (function() {
            return addHeaderBuilder;
        }));
        __webpack_require__.d(__webpack_exports__, "TYPES", (function() {
            return types_TYPES;
        }));
        __webpack_require__.d(__webpack_exports__, "memoized", (function() {
            return memoized;
        }));
        __webpack_require__.d(__webpack_exports__, "promise", (function() {
            return decorators_promise;
        }));
        __webpack_require__.d(__webpack_exports__, "isPerc", (function() {
            return isPerc;
        }));
        __webpack_require__.d(__webpack_exports__, "isPx", (function() {
            return isPx;
        }));
        __webpack_require__.d(__webpack_exports__, "toNum", (function() {
            return toNum;
        }));
        __webpack_require__.d(__webpack_exports__, "toPx", (function() {
            return toPx;
        }));
        __webpack_require__.d(__webpack_exports__, "toCSS", (function() {
            return toCSS;
        }));
        __webpack_require__.d(__webpack_exports__, "percOf", (function() {
            return percOf;
        }));
        __webpack_require__.d(__webpack_exports__, "normalizeDimension", (function() {
            return normalizeDimension;
        }));
        __webpack_require__.d(__webpack_exports__, "wrapPromise", (function() {
            return wrapPromise;
        }));
        __webpack_require__.d(__webpack_exports__, "KEY_CODES", (function() {
            return KEY_CODES;
        }));
        __webpack_require__.d(__webpack_exports__, "ATTRIBUTES", (function() {
            return ATTRIBUTES;
        }));
        __webpack_require__.d(__webpack_exports__, "UID_HASH_LENGTH", (function() {
            return UID_HASH_LENGTH;
        }));
        __webpack_require__.d(__webpack_exports__, "iPhoneScreenHeightMatrix", (function() {
            return iPhoneScreenHeightMatrix;
        }));
        var iPhoneScreenHeightMatrix = {
            926: {
                device: "iPhone 12 Pro Max",
                textSizeHeights: [ 752, 748, 744, 738 ],
                zoomHeight: {
                    1.15: [ 752, 747, 744, 738 ],
                    1.25: [ 753, 748, 744, 738 ],
                    1.5: [ 752, 749, 744, 738 ],
                    1.75: [ 753, 747, 744, 739 ],
                    2: [ 752, 748, 744 ],
                    2.5: [ 753, 748 ],
                    3: [ 753, 744 ]
                },
                maybeSafari: {
                    2: [ 738 ],
                    2.5: [ 745, 738 ],
                    3: [ 747, 738 ]
                }
            },
            896: {
                device: "iPhone XS Max, iPhone 11 Pro Max, iPhone XR, iPhone 11",
                textSizeHeights: [ 721, 717, 713, 707 ],
                zoomHeight: {
                    1.15: [ 721, 716, 713, 707 ],
                    1.25: [ 721, 718, 713, 708 ],
                    1.5: [ 722, 717, 713 ],
                    1.75: [ 721, 718, 712, 707 ],
                    2: [ 722, 718, 714, 708 ],
                    2.5: [ 720, 718, 713, 708 ],
                    3: [ 720, 717, 708 ]
                },
                maybeSafari: {
                    1.5: [ 707 ],
                    3: [ 714 ]
                }
            },
            844: {
                device: "iPhone 12, iPhone 12 Pro",
                textSizeHeights: [ 670, 666, 662, 656 ],
                zoomHeight: {
                    1.15: [ 670, 666, 662 ],
                    1.25: [ 670, 666, 663, 656 ],
                    1.5: [ 671, 666, 662 ],
                    1.75: [ 670, 667, 662, 656 ],
                    2: [ 670, 666, 662 ],
                    2.5: [ 670, 663 ],
                    3: [ 669, 666, 663, 657 ]
                },
                maybeSafari: {
                    1.15: [ 656 ],
                    1.5: [ 656 ],
                    2: [ 656 ],
                    2.5: [ 665, 655 ],
                    3: [ 663 ]
                }
            },
            812: {
                device: "iPhone X, iPhone XS, iPhone 11 Pro, iPhone 12 Mini",
                textSizeHeights: [ 641, 637, 633, 627 ],
                zoomHeight: {
                    1.15: [ 641, 637, 633, 627 ],
                    1.25: [ 641, 638, 633, 628 ],
                    1.5: [ 641, 638, 633, 627 ],
                    1.75: [ 641, 637, 634 ],
                    2: [ 642, 638, 634, 628 ],
                    2.5: [ 640, 638, 633, 628 ],
                    3: [ 642, 633 ]
                },
                maybeSafari: {
                    1.75: [ 627 ],
                    3: [ 636, 627 ]
                }
            },
            736: {
                device: "iPhone 6 Plus, iPhone 6S Plus, iPhone 7 Plus, iPhone 8 Plus",
                textSizeHeights: [ 628, 624, 620, 614 ],
                zoomHeight: {
                    1.15: [ 628, 624, 620, 614 ],
                    1.25: [ 628, 624, 620, 614 ],
                    1.5: [ 629, 624, 620 ],
                    1.75: [ 628, 625, 620, 614 ],
                    2: [ 628, 624, 620 ],
                    2.5: [ 628, 625, 620, 615 ],
                    3: [ 627, 624, 615 ]
                },
                maybeSafari: {
                    1.5: [ 614 ],
                    2: [ 614 ],
                    3: [ 621 ]
                }
            },
            667: {
                device: "iPhone 6, iPhone 6S, iPhone 7, iPhone 8,  iPhone SE2",
                textSizeHeights: [ 559, 555, 551, 545 ],
                zoomHeight: {
                    1.15: [ 559, 555, 551, 545 ],
                    1.25: [ 559, 555, 551, 545 ],
                    1.5: [ 560, 555, 551 ],
                    1.75: [ 558, 555, 551 ],
                    2: [ 560, 556, 552, 546 ],
                    2.5: [ 560, 555, 550 ],
                    3: [ 558, 555, 546 ]
                },
                maybeSafari: {
                    1.5: [ 545 ],
                    1.75: [ 544 ],
                    2.5: [ 545 ],
                    3: [ 552 ]
                }
            }
        };
        function getUserAgent() {
            return window.navigator.mockUserAgent || window.navigator.userAgent;
        }
        function isDevice(userAgent) {
            void 0 === userAgent && (userAgent = getUserAgent());
            return !!userAgent.match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i);
        }
        function isWebView() {
            var userAgent = getUserAgent();
            return /(iPhone|iPod|iPad|Macintosh).*AppleWebKit(?!.*Safari)|.*WKWebView/i.test(userAgent) || /\bwv\b/.test(userAgent) || /Android.*Version\/(\d)\.(\d)/i.test(userAgent);
        }
        function isStandAlone() {
            return !0 === window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches;
        }
        function isFacebookWebView(ua) {
            void 0 === ua && (ua = getUserAgent());
            return /FBAN/.test(ua) || /FBAV/.test(ua);
        }
        function isFirefox(ua) {
            void 0 === ua && (ua = getUserAgent());
            return /Firefox/i.test(ua);
        }
        function isFirefoxIOS(ua) {
            void 0 === ua && (ua = getUserAgent());
            return /FxiOS/i.test(ua);
        }
        function isEdgeIOS(ua) {
            void 0 === ua && (ua = getUserAgent());
            return /EdgiOS/i.test(ua);
        }
        function isOperaMini(ua) {
            void 0 === ua && (ua = getUserAgent());
            return /Opera Mini/i.test(ua);
        }
        function isAndroid(ua) {
            void 0 === ua && (ua = getUserAgent());
            return /Android/.test(ua);
        }
        function isIos(ua) {
            void 0 === ua && (ua = getUserAgent());
            return /iPhone|iPod|iPad/.test(ua);
        }
        function isGoogleSearchApp(ua) {
            void 0 === ua && (ua = getUserAgent());
            return /\bGSA\b/.test(ua);
        }
        function isQQBrowser(ua) {
            void 0 === ua && (ua = getUserAgent());
            return /QQBrowser/.test(ua);
        }
        function isIosWebview(ua) {
            void 0 === ua && (ua = getUserAgent());
            return !!isIos(ua) && (!!isGoogleSearchApp(ua) || /.+AppleWebKit(?!.*Safari)|.*WKWebView/.test(ua));
        }
        function isSFVC(ua) {
            void 0 === ua && (ua = getUserAgent());
            if (isIos(ua)) {
                var device = iPhoneScreenHeightMatrix[window.outerHeight];
                if (!device) return !1;
                var height = window.innerHeight;
                var scale = Math.round(window.screen.width / window.innerWidth * 100) / 100;
                var computedHeight = Math.round(height * scale);
                return scale > 1 && device.zoomHeight[scale] ? -1 !== device.zoomHeight[scale].indexOf(computedHeight) : -1 !== device.textSizeHeights.indexOf(computedHeight);
            }
            return !1;
        }
        function isSFVCorSafari(ua) {
            void 0 === ua && (ua = getUserAgent());
            if (isIos(ua)) {
                var sfvc = isSFVC(ua);
                var device = iPhoneScreenHeightMatrix[window.outerHeight];
                if (!device) return !1;
                var height = window.innerHeight;
                var scale = Math.round(window.screen.width / window.innerWidth * 100) / 100;
                var computedHeight = Math.round(height * scale);
                var possibleSafariSizes = device.maybeSafari;
                var maybeSafari = !1;
                scale > 1 && possibleSafariSizes[scale] && -1 !== possibleSafariSizes[scale].indexOf(computedHeight) && (maybeSafari = !0);
                return sfvc || maybeSafari;
            }
            return !1;
        }
        function isAndroidWebview(ua) {
            void 0 === ua && (ua = getUserAgent());
            return !!isAndroid(ua) && /Version\/[\d.]+/.test(ua) && !isOperaMini(ua);
        }
        function device_isIE() {
            return !!window.document.documentMode || Boolean(window.navigator && window.navigator.userAgent && /Edge|MSIE|rv:11/i.test(window.navigator.userAgent));
        }
        function isIECompHeader() {
            var mHttp = window.document.querySelector('meta[http-equiv="X-UA-Compatible"]');
            var mContent = window.document.querySelector('meta[content="IE=edge"]');
            return !(!mHttp || !mContent);
        }
        function isElectron() {
            return !("undefined" == typeof browser$1 || !browser$1.versions || !browser$1.versions.electron);
        }
        function isIEIntranet() {
            if (window.document.documentMode) try {
                var status = window.status;
                window.status = "testIntranetMode";
                if ("testIntranetMode" === window.status) {
                    window.status = status;
                    return !0;
                }
                return !1;
            } catch (err) {
                return !1;
            }
            return !1;
        }
        function isMacOsCna() {
            var userAgent = getUserAgent();
            return /Macintosh.*AppleWebKit(?!.*Safari)/i.test(userAgent);
        }
        function supportsPopups(ua) {
            void 0 === ua && (ua = getUserAgent());
            return !(isIosWebview(ua) || isAndroidWebview(ua) || isOperaMini(ua) || isFirefoxIOS(ua) || isEdgeIOS(ua) || isFacebookWebView(ua) || isQQBrowser(ua) || isElectron() || isMacOsCna() || isStandAlone());
        }
        function isChrome(ua) {
            void 0 === ua && (ua = getUserAgent());
            return /Chrome|Chromium|CriOS/.test(ua);
        }
        function isSafari(ua) {
            void 0 === ua && (ua = getUserAgent());
            return /Safari/.test(ua) && !isChrome(ua);
        }
        function isApplePaySupported() {
            try {
                if (window.ApplePaySession && window.ApplePaySession.supportsVersion(3) && window.ApplePaySession.canMakePayments()) return !0;
            } catch (e) {
                return !1;
            }
            return !1;
        }
        function _setPrototypeOf(o, p) {
            return (_setPrototypeOf = Object.setPrototypeOf || function(o, p) {
                o.__proto__ = p;
                return o;
            })(o, p);
        }
        function _inheritsLoose(subClass, superClass) {
            subClass.prototype = Object.create(superClass.prototype);
            subClass.prototype.constructor = subClass;
            _setPrototypeOf(subClass, superClass);
        }
        function _extends() {
            return (_extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) ({}).hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }).apply(this, arguments);
        }
        function utils_isPromise(item) {
            try {
                if (!item) return !1;
                if ("undefined" != typeof Promise && item instanceof Promise) return !0;
                if ("undefined" != typeof window && "function" == typeof window.Window && item instanceof window.Window) return !1;
                if ("undefined" != typeof window && "function" == typeof window.constructor && item instanceof window.constructor) return !1;
                var _toString = {}.toString;
                if (_toString) {
                    var name = _toString.call(item);
                    if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
                }
                if ("function" == typeof item.then) return !0;
            } catch (err) {
                return !1;
            }
            return !1;
        }
        var dispatchedErrors = [];
        var possiblyUnhandledPromiseHandlers = [];
        var activeCount = 0;
        var flushPromise;
        function flushActive() {
            if (!activeCount && flushPromise) {
                var promise = flushPromise;
                flushPromise = null;
                promise.resolve();
            }
        }
        function startActive() {
            activeCount += 1;
        }
        function endActive() {
            activeCount -= 1;
            flushActive();
        }
        var promise_ZalgoPromise = function() {
            function ZalgoPromise(handler) {
                var _this = this;
                this.resolved = void 0;
                this.rejected = void 0;
                this.errorHandled = void 0;
                this.value = void 0;
                this.error = void 0;
                this.handlers = void 0;
                this.dispatching = void 0;
                this.stack = void 0;
                this.resolved = !1;
                this.rejected = !1;
                this.errorHandled = !1;
                this.handlers = [];
                if (handler) {
                    var _result;
                    var _error;
                    var resolved = !1;
                    var rejected = !1;
                    var isAsync = !1;
                    startActive();
                    try {
                        handler((function(res) {
                            if (isAsync) _this.resolve(res); else {
                                resolved = !0;
                                _result = res;
                            }
                        }), (function(err) {
                            if (isAsync) _this.reject(err); else {
                                rejected = !0;
                                _error = err;
                            }
                        }));
                    } catch (err) {
                        endActive();
                        this.reject(err);
                        return;
                    }
                    endActive();
                    isAsync = !0;
                    resolved ? this.resolve(_result) : rejected && this.reject(_error);
                }
            }
            var _proto = ZalgoPromise.prototype;
            _proto.resolve = function(result) {
                if (this.resolved || this.rejected) return this;
                if (utils_isPromise(result)) throw new Error("Can not resolve promise with another promise");
                this.resolved = !0;
                this.value = result;
                this.dispatch();
                return this;
            };
            _proto.reject = function(error) {
                var _this2 = this;
                if (this.resolved || this.rejected) return this;
                if (utils_isPromise(error)) throw new Error("Can not reject promise with another promise");
                if (!error) {
                    var _err = error && "function" == typeof error.toString ? error.toString() : {}.toString.call(error);
                    error = new Error("Expected reject to be called with Error, got " + _err);
                }
                this.rejected = !0;
                this.error = error;
                this.errorHandled || setTimeout((function() {
                    _this2.errorHandled || function(err, promise) {
                        if (-1 === dispatchedErrors.indexOf(err)) {
                            dispatchedErrors.push(err);
                            setTimeout((function() {
                                throw err;
                            }), 1);
                            for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) possiblyUnhandledPromiseHandlers[j](err, promise);
                        }
                    }(error, _this2);
                }), 1);
                this.dispatch();
                return this;
            };
            _proto.asyncReject = function(error) {
                this.errorHandled = !0;
                this.reject(error);
                return this;
            };
            _proto.dispatch = function() {
                var resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
                if (!this.dispatching && (resolved || rejected)) {
                    this.dispatching = !0;
                    startActive();
                    var chain = function(firstPromise, secondPromise) {
                        return firstPromise.then((function(res) {
                            secondPromise.resolve(res);
                        }), (function(err) {
                            secondPromise.reject(err);
                        }));
                    };
                    for (var i = 0; i < handlers.length; i++) {
                        var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise;
                        var _result2 = void 0;
                        if (resolved) try {
                            _result2 = onSuccess ? onSuccess(this.value) : this.value;
                        } catch (err) {
                            promise.reject(err);
                            continue;
                        } else if (rejected) {
                            if (!onError) {
                                promise.reject(this.error);
                                continue;
                            }
                            try {
                                _result2 = onError(this.error);
                            } catch (err) {
                                promise.reject(err);
                                continue;
                            }
                        }
                        if (_result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected)) {
                            var promiseResult = _result2;
                            promiseResult.resolved ? promise.resolve(promiseResult.value) : promise.reject(promiseResult.error);
                            promiseResult.errorHandled = !0;
                        } else utils_isPromise(_result2) ? _result2 instanceof ZalgoPromise && (_result2.resolved || _result2.rejected) ? _result2.resolved ? promise.resolve(_result2.value) : promise.reject(_result2.error) : chain(_result2, promise) : promise.resolve(_result2);
                    }
                    handlers.length = 0;
                    this.dispatching = !1;
                    endActive();
                }
            };
            _proto.then = function(onSuccess, onError) {
                if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
                if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
                var promise = new ZalgoPromise;
                this.handlers.push({
                    promise: promise,
                    onSuccess: onSuccess,
                    onError: onError
                });
                this.errorHandled = !0;
                this.dispatch();
                return promise;
            };
            _proto.catch = function(onError) {
                return this.then(void 0, onError);
            };
            _proto.finally = function(onFinally) {
                if (onFinally && "function" != typeof onFinally && !onFinally.call) throw new Error("Promise.finally expected a function");
                return this.then((function(result) {
                    return ZalgoPromise.try(onFinally).then((function() {
                        return result;
                    }));
                }), (function(err) {
                    return ZalgoPromise.try(onFinally).then((function() {
                        throw err;
                    }));
                }));
            };
            _proto.timeout = function(time, err) {
                var _this3 = this;
                if (this.resolved || this.rejected) return this;
                var timeout = setTimeout((function() {
                    _this3.resolved || _this3.rejected || _this3.reject(err || new Error("Promise timed out after " + time + "ms"));
                }), time);
                return this.then((function(result) {
                    clearTimeout(timeout);
                    return result;
                }));
            };
            _proto.toPromise = function() {
                if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                return Promise.resolve(this);
            };
            ZalgoPromise.resolve = function(value) {
                return value instanceof ZalgoPromise ? value : utils_isPromise(value) ? new ZalgoPromise((function(resolve, reject) {
                    return value.then(resolve, reject);
                })) : (new ZalgoPromise).resolve(value);
            };
            ZalgoPromise.reject = function(error) {
                return (new ZalgoPromise).reject(error);
            };
            ZalgoPromise.asyncReject = function(error) {
                return (new ZalgoPromise).asyncReject(error);
            };
            ZalgoPromise.all = function(promises) {
                var promise = new ZalgoPromise;
                var count = promises.length;
                var results = [].slice();
                if (!count) {
                    promise.resolve(results);
                    return promise;
                }
                var chain = function(i, firstPromise, secondPromise) {
                    return firstPromise.then((function(res) {
                        results[i] = res;
                        0 == (count -= 1) && promise.resolve(results);
                    }), (function(err) {
                        secondPromise.reject(err);
                    }));
                };
                for (var i = 0; i < promises.length; i++) {
                    var prom = promises[i];
                    if (prom instanceof ZalgoPromise) {
                        if (prom.resolved) {
                            results[i] = prom.value;
                            count -= 1;
                            continue;
                        }
                    } else if (!utils_isPromise(prom)) {
                        results[i] = prom;
                        count -= 1;
                        continue;
                    }
                    chain(i, ZalgoPromise.resolve(prom), promise);
                }
                0 === count && promise.resolve(results);
                return promise;
            };
            ZalgoPromise.hash = function(promises) {
                var result = {};
                var awaitPromises = [];
                var _loop = function(key) {
                    if (promises.hasOwnProperty(key)) {
                        var value = promises[key];
                        utils_isPromise(value) ? awaitPromises.push(value.then((function(res) {
                            result[key] = res;
                        }))) : result[key] = value;
                    }
                };
                for (var key in promises) _loop(key);
                return ZalgoPromise.all(awaitPromises).then((function() {
                    return result;
                }));
            };
            ZalgoPromise.map = function(items, method) {
                return ZalgoPromise.all(items.map(method));
            };
            ZalgoPromise.onPossiblyUnhandledException = function(handler) {
                return function(handler) {
                    possiblyUnhandledPromiseHandlers.push(handler);
                    return {
                        cancel: function() {
                            possiblyUnhandledPromiseHandlers.splice(possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
                        }
                    };
                }(handler);
            };
            ZalgoPromise.try = function(method, context, args) {
                if (method && "function" != typeof method && !method.call) throw new Error("Promise.try expected a function");
                var result;
                startActive();
                try {
                    result = method.apply(context, args || []);
                } catch (err) {
                    endActive();
                    return ZalgoPromise.reject(err);
                }
                endActive();
                return ZalgoPromise.resolve(result);
            };
            ZalgoPromise.delay = function(_delay) {
                return new ZalgoPromise((function(resolve) {
                    setTimeout(resolve, _delay);
                }));
            };
            ZalgoPromise.isPromise = function(value) {
                return !!(value && value instanceof ZalgoPromise) || utils_isPromise(value);
            };
            ZalgoPromise.flush = function() {
                return function(Zalgo) {
                    var promise = flushPromise = flushPromise || new Zalgo;
                    flushActive();
                    return promise;
                }(ZalgoPromise);
            };
            return ZalgoPromise;
        }();
        var IE_WIN_ACCESS_ERROR = "Call was rejected by callee.\r\n";
        function isAboutProtocol(win) {
            void 0 === win && (win = window);
            return "about:" === win.location.protocol;
        }
        function canReadFromWindow(win) {
            try {
                return !0;
            } catch (err) {}
            return !1;
        }
        function getActualDomain(win) {
            void 0 === win && (win = window);
            var location = win.location;
            if (!location) throw new Error("Can not read window location");
            var protocol = location.protocol;
            if (!protocol) throw new Error("Can not read window protocol");
            if ("file:" === protocol) return "file://";
            if ("about:" === protocol) {
                var parent = function(win) {
                    void 0 === win && (win = window);
                    if (win) try {
                        if (win.parent && win.parent !== win) return win.parent;
                    } catch (err) {}
                }(win);
                return parent && canReadFromWindow() ? getActualDomain(parent) : "about://";
            }
            var host = location.host;
            if (!host) throw new Error("Can not read window host");
            return protocol + "//" + host;
        }
        function getDomain(win) {
            void 0 === win && (win = window);
            var domain = getActualDomain(win);
            return domain && win.mockDomain && 0 === win.mockDomain.indexOf("mock:") ? win.mockDomain : domain;
        }
        function isSameDomain(win) {
            if (!function(win) {
                try {
                    if (win === window) return !0;
                } catch (err) {}
                try {
                    var desc = Object.getOwnPropertyDescriptor(win, "location");
                    if (desc && !1 === desc.enumerable) return !1;
                } catch (err) {}
                try {
                    if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                } catch (err) {}
                try {
                    if (getActualDomain(win) === getActualDomain(window)) return !0;
                } catch (err) {}
                return !1;
            }(win)) return !1;
            try {
                if (win === window) return !0;
                if (isAboutProtocol(win) && canReadFromWindow()) return !0;
                if (getDomain(window) === getDomain(win)) return !0;
            } catch (err) {}
            return !1;
        }
        var iframeWindows = [];
        var iframeFrames = [];
        function isWindowClosed(win, allowMock) {
            void 0 === allowMock && (allowMock = !0);
            try {
                if (win === window) return !1;
            } catch (err) {
                return !0;
            }
            try {
                if (!win) return !0;
            } catch (err) {
                return !0;
            }
            try {
                if (win.closed) return !0;
            } catch (err) {
                return !err || err.message !== IE_WIN_ACCESS_ERROR;
            }
            if (allowMock && isSameDomain(win)) try {
                if (win.mockclosed) return !0;
            } catch (err) {}
            try {
                if (!win.parent || !win.top) return !0;
            } catch (err) {}
            var iframeIndex = function(collection, item) {
                for (var i = 0; i < collection.length; i++) try {
                    if (collection[i] === item) return i;
                } catch (err) {}
                return -1;
            }(iframeWindows, win);
            if (-1 !== iframeIndex) {
                var frame = iframeFrames[iframeIndex];
                if (frame && function(frame) {
                    if (!frame.contentWindow) return !0;
                    if (!frame.parentNode) return !0;
                    var doc = frame.ownerDocument;
                    if (doc && doc.documentElement && !doc.documentElement.contains(frame)) {
                        var parent = frame;
                        for (;parent.parentNode && parent.parentNode !== parent; ) parent = parent.parentNode;
                        if (!parent.host || !doc.documentElement.contains(parent.host)) return !0;
                    }
                    return !1;
                }(frame)) return !0;
            }
            return !1;
        }
        function isWindow(obj) {
            try {
                if (obj === window) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if ("[object Window]" === {}.toString.call(obj)) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (window.Window && obj instanceof window.Window) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && obj.self === obj) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && obj.parent === obj) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && obj.top === obj) return !0;
            } catch (err) {
                if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
            }
            try {
                if (obj && "__unlikely_value__" === obj.__cross_domain_utils_window_check__) return !1;
            } catch (err) {
                return !0;
            }
            try {
                if ("postMessage" in obj && "self" in obj && "location" in obj) return !0;
            } catch (err) {}
            return !1;
        }
        function util_safeIndexOf(collection, item) {
            for (var i = 0; i < collection.length; i++) try {
                if (collection[i] === item) return i;
            } catch (err) {}
            return -1;
        }
        var weakmap_CrossDomainSafeWeakMap = function() {
            function CrossDomainSafeWeakMap() {
                this.name = void 0;
                this.weakmap = void 0;
                this.keys = void 0;
                this.values = void 0;
                this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__";
                if (function() {
                    if ("undefined" == typeof WeakMap) return !1;
                    if (void 0 === Object.freeze) return !1;
                    try {
                        var testWeakMap = new WeakMap;
                        var testKey = {};
                        Object.freeze(testKey);
                        testWeakMap.set(testKey, "__testvalue__");
                        return "__testvalue__" === testWeakMap.get(testKey);
                    } catch (err) {
                        return !1;
                    }
                }()) try {
                    this.weakmap = new WeakMap;
                } catch (err) {}
                this.keys = [];
                this.values = [];
            }
            var _proto = CrossDomainSafeWeakMap.prototype;
            _proto._cleanupClosedWindows = function() {
                var weakmap = this.weakmap;
                var keys = this.keys;
                for (var i = 0; i < keys.length; i++) {
                    var value = keys[i];
                    if (isWindow(value) && isWindowClosed(value)) {
                        if (weakmap) try {
                            weakmap.delete(value);
                        } catch (err) {}
                        keys.splice(i, 1);
                        this.values.splice(i, 1);
                        i -= 1;
                    }
                }
            };
            _proto.isSafeToReadWrite = function(key) {
                return !isWindow(key);
            };
            _proto.set = function(key, value) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    weakmap.set(key, value);
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var name = this.name;
                    var entry = key[name];
                    entry && entry[0] === key ? entry[1] = value : Object.defineProperty(key, name, {
                        value: [ key, value ],
                        writable: !0
                    });
                    return;
                } catch (err) {}
                this._cleanupClosedWindows();
                var keys = this.keys;
                var values = this.values;
                var index = util_safeIndexOf(keys, key);
                if (-1 === index) {
                    keys.push(key);
                    values.push(value);
                } else values[index] = value;
            };
            _proto.get = function(key) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    if (weakmap.has(key)) return weakmap.get(key);
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var entry = key[this.name];
                    return entry && entry[0] === key ? entry[1] : void 0;
                } catch (err) {}
                this._cleanupClosedWindows();
                var index = util_safeIndexOf(this.keys, key);
                if (-1 !== index) return this.values[index];
            };
            _proto.delete = function(key) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    weakmap.delete(key);
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var entry = key[this.name];
                    entry && entry[0] === key && (entry[0] = entry[1] = void 0);
                } catch (err) {}
                this._cleanupClosedWindows();
                var keys = this.keys;
                var index = util_safeIndexOf(keys, key);
                if (-1 !== index) {
                    keys.splice(index, 1);
                    this.values.splice(index, 1);
                }
            };
            _proto.has = function(key) {
                if (!key) throw new Error("WeakMap expected key");
                var weakmap = this.weakmap;
                if (weakmap) try {
                    if (weakmap.has(key)) return !0;
                } catch (err) {
                    delete this.weakmap;
                }
                if (this.isSafeToReadWrite(key)) try {
                    var entry = key[this.name];
                    return !(!entry || entry[0] !== key);
                } catch (err) {}
                this._cleanupClosedWindows();
                return -1 !== util_safeIndexOf(this.keys, key);
            };
            _proto.getOrSet = function(key, getter) {
                if (this.has(key)) return this.get(key);
                var value = getter();
                this.set(key, value);
                return value;
            };
            return CrossDomainSafeWeakMap;
        }();
        function _getPrototypeOf(o) {
            return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
        }
        function _isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                return !0;
            } catch (e) {
                return !1;
            }
        }
        function construct_construct(Parent, args, Class) {
            return (construct_construct = _isNativeReflectConstruct() ? Reflect.construct : function(Parent, args, Class) {
                var a = [ null ];
                a.push.apply(a, args);
                var instance = new (Function.bind.apply(Parent, a));
                Class && _setPrototypeOf(instance, Class.prototype);
                return instance;
            }).apply(null, arguments);
        }
        function wrapNativeSuper_wrapNativeSuper(Class) {
            var _cache = "function" == typeof Map ? new Map : void 0;
            return (wrapNativeSuper_wrapNativeSuper = function(Class) {
                if (null === Class || !(fn = Class, -1 !== Function.toString.call(fn).indexOf("[native code]"))) return Class;
                var fn;
                if ("function" != typeof Class) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== _cache) {
                    if (_cache.has(Class)) return _cache.get(Class);
                    _cache.set(Class, Wrapper);
                }
                function Wrapper() {
                    return construct_construct(Class, arguments, _getPrototypeOf(this).constructor);
                }
                Wrapper.prototype = Object.create(Class.prototype, {
                    constructor: {
                        value: Wrapper,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
                return _setPrototypeOf(Wrapper, Class);
            })(Class);
        }
        function getFunctionName(fn) {
            return fn.name || fn.__name__ || fn.displayName || "anonymous";
        }
        function setFunctionName(fn, name) {
            try {
                delete fn.name;
                fn.name = name;
            } catch (err) {}
            fn.__name__ = fn.displayName = name;
            return fn;
        }
        function base64encode(str) {
            if ("function" == typeof btoa) return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (function(m, p1) {
                return String.fromCharCode(parseInt(p1, 16));
            }))).replace(/[=]/g, "");
            if ("undefined" != typeof buffer.Buffer) return buffer.Buffer.from(str, "utf8").toString("base64").replace(/[=]/g, "");
            throw new Error("Can not find window.btoa or Buffer");
        }
        function base64decode(str) {
            if ("function" == typeof atob) return decodeURIComponent([].map.call(atob(str), (function(c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })).join(""));
            if ("undefined" != typeof buffer.Buffer) return buffer.Buffer.from(str, "base64").toString("utf8");
            throw new Error("Can not find window.atob or Buffer");
        }
        function uniqueID() {
            var chars = "0123456789abcdef";
            return "uid_" + "xxxxxxxxxx".replace(/./g, (function() {
                return chars.charAt(Math.floor(Math.random() * chars.length));
            })) + "_" + base64encode((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        }
        function getGlobal() {
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof commonjsGlobal) return commonjsGlobal;
            throw new Error("No global found");
        }
        var objectIDs;
        function getObjectID(obj) {
            objectIDs = objectIDs || new weakmap_CrossDomainSafeWeakMap;
            if (null == obj || "object" != typeof obj && "function" != typeof obj) throw new Error("Invalid object");
            var uid = objectIDs.get(obj);
            if (!uid) {
                uid = typeof obj + ":" + uniqueID();
                objectIDs.set(obj, uid);
            }
            return uid;
        }
        function serializeArgs(args) {
            try {
                return JSON.stringify([].slice.call(args), (function(subkey, val) {
                    return "function" == typeof val ? "memoize[" + getObjectID(val) + "]" : val;
                }));
            } catch (err) {
                throw new Error("Arguments not serializable -- can not be used to memoize");
            }
        }
        function getEmptyObject() {
            return {};
        }
        var memoizeGlobalIndex = 0;
        var memoizeGlobalIndexValidFrom = 0;
        function memoize(method, options) {
            void 0 === options && (options = {});
            var _options$thisNamespac = options.thisNamespace, thisNamespace = void 0 !== _options$thisNamespac && _options$thisNamespac, cacheTime = options.time;
            var simpleCache;
            var thisCache;
            var memoizeIndex = memoizeGlobalIndex;
            memoizeGlobalIndex += 1;
            var memoizedFunction = function() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (memoizeIndex < memoizeGlobalIndexValidFrom) {
                    simpleCache = null;
                    thisCache = null;
                    memoizeIndex = memoizeGlobalIndex;
                    memoizeGlobalIndex += 1;
                }
                var cache;
                cache = thisNamespace ? (thisCache = thisCache || new weakmap_CrossDomainSafeWeakMap).getOrSet(this, getEmptyObject) : simpleCache = simpleCache || {};
                var cacheKey = serializeArgs(args);
                var cacheResult = cache[cacheKey];
                if (cacheResult && cacheTime && Date.now() - cacheResult.time < cacheTime) {
                    delete cache[cacheKey];
                    cacheResult = null;
                }
                if (cacheResult) return cacheResult.value;
                var time = Date.now();
                var value = method.apply(this, arguments);
                cache[cacheKey] = {
                    time: time,
                    value: value
                };
                return value;
            };
            memoizedFunction.reset = function() {
                simpleCache = null;
                thisCache = null;
            };
            return setFunctionName(memoizedFunction, (options.name || getFunctionName(method)) + "::memoized");
        }
        memoize.clear = function() {
            memoizeGlobalIndexValidFrom = memoizeGlobalIndex;
        };
        function promiseIdentity(item) {
            return promise_ZalgoPromise.resolve(item);
        }
        function memoizePromise(method) {
            var cache = {};
            function memoizedPromiseFunction() {
                var _arguments = arguments, _this = this;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                var key = serializeArgs(args);
                if (cache.hasOwnProperty(key)) return cache[key];
                cache[key] = promise_ZalgoPromise.try((function() {
                    return method.apply(_this, _arguments);
                })).finally((function() {
                    delete cache[key];
                }));
                return cache[key];
            }
            memoizedPromiseFunction.reset = function() {
                cache = {};
            };
            return setFunctionName(memoizedPromiseFunction, getFunctionName(method) + "::promiseMemoized");
        }
        function promisify(method, options) {
            void 0 === options && (options = {});
            function promisifiedFunction() {
                return promise_ZalgoPromise.try(method, this, arguments);
            }
            options.name && (promisifiedFunction.displayName = options.name + ":promisified");
            return setFunctionName(promisifiedFunction, getFunctionName(method) + "::promisified");
        }
        function inlineMemoize(method, logic, args) {
            void 0 === args && (args = []);
            var cache = method.__inline_memoize_cache__ = method.__inline_memoize_cache__ || {};
            var key = serializeArgs(args);
            return cache.hasOwnProperty(key) ? cache[key] : cache[key] = logic.apply(void 0, args);
        }
        function src_util_noop() {}
        function once(method) {
            var called = !1;
            return setFunctionName((function() {
                if (!called) {
                    called = !0;
                    return method.apply(this, arguments);
                }
            }), getFunctionName(method) + "::once");
        }
        function hashStr(str) {
            var hash = 0;
            for (var i = 0; i < str.length; i++) hash += str[i].charCodeAt(0) * Math.pow(i % 10 + 1, 5);
            return Math.floor(Math.pow(Math.sqrt(hash), 5));
        }
        function strHashStr(str) {
            var hash = "";
            for (var i = 0; i < str.length; i++) {
                var total = str[i].charCodeAt(0) * i;
                str[i + 1] && (total += str[i + 1].charCodeAt(0) * (i - 1));
                hash += String.fromCharCode(97 + Math.abs(total) % 26);
            }
            return hash;
        }
        function match(str, pattern) {
            var regmatch = str.match(pattern);
            if (regmatch) return regmatch[1];
        }
        function awaitKey(obj, key) {
            return new promise_ZalgoPromise((function(resolve) {
                var value = obj[key];
                if (value) return resolve(value);
                delete obj[key];
                Object.defineProperty(obj, key, {
                    configurable: !0,
                    set: function(item) {
                        (value = item) && resolve(value);
                    },
                    get: function() {
                        return value;
                    }
                });
            }));
        }
        function stringifyError(err, level) {
            void 0 === level && (level = 1);
            if (level >= 3) return "stringifyError stack overflow";
            try {
                if (!err) return "<unknown error: " + {}.toString.call(err) + ">";
                if ("string" == typeof err) return err;
                if (err instanceof Error) {
                    var stack = err && err.stack;
                    var message = err && err.message;
                    if (stack && message) return -1 !== stack.indexOf(message) ? stack : message + "\n" + stack;
                    if (stack) return stack;
                    if (message) return message;
                }
                return err && err.toString && "function" == typeof err.toString ? err.toString() : {}.toString.call(err);
            } catch (newErr) {
                return "Error while stringifying error: " + stringifyError(newErr, level + 1);
            }
        }
        function stringifyErrorMessage(err) {
            var defaultMessage = "<unknown error: " + {}.toString.call(err) + ">";
            return err ? err instanceof Error ? err.message || defaultMessage : "string" == typeof err.message && err.message || defaultMessage : defaultMessage;
        }
        function stringify(item) {
            return "string" == typeof item ? item : item && item.toString && "function" == typeof item.toString ? item.toString() : {}.toString.call(item);
        }
        function domainMatches(hostname, domain) {
            var index = (hostname = hostname.split("://")[1]).indexOf(domain);
            return -1 !== index && hostname.slice(index) === domain;
        }
        function patchMethod(obj, name, handler) {
            var original = obj[name];
            obj[name] = function() {
                var _arguments2 = arguments, _this2 = this;
                return handler({
                    context: this,
                    args: [].slice.call(arguments),
                    original: original,
                    callOriginal: function() {
                        return original.apply(_this2, _arguments2);
                    }
                });
            };
        }
        function extend(obj, source) {
            if (!source) return obj;
            if (Object.assign) return Object.assign(obj, source);
            for (var key in source) source.hasOwnProperty(key) && (obj[key] = source[key]);
            return obj;
        }
        function util_values(obj) {
            if (Object.values) return Object.values(obj);
            var result = [];
            for (var key in obj) obj.hasOwnProperty(key) && result.push(obj[key]);
            return result;
        }
        var memoizedValues = memoize(util_values);
        function perc(pixels, percentage) {
            return Math.round(pixels * percentage / 100);
        }
        function min() {
            return Math.min.apply(Math, arguments);
        }
        function max() {
            return Math.max.apply(Math, arguments);
        }
        function roundUp(num, nearest) {
            var remainder = num % nearest;
            return remainder ? num - remainder + nearest : num;
        }
        function regexMap(str, regexp, handler) {
            var results = [];
            str.replace(regexp, (function(item) {
                results.push(handler ? handler.apply(null, arguments) : item);
            }));
            return results;
        }
        function svgToBase64(svg) {
            return "data:image/svg+xml;base64," + base64encode(svg);
        }
        function objFilter(obj, filter) {
            void 0 === filter && (filter = Boolean);
            var result = {};
            for (var key in obj) obj.hasOwnProperty(key) && filter(obj[key], key) && (result[key] = obj[key]);
            return result;
        }
        function identity(item) {
            return item;
        }
        function regexTokenize(text, regexp) {
            var result = [];
            text.replace(regexp, (function(token) {
                result.push(token);
                return "";
            }));
            return result;
        }
        function promiseDebounce(method, delay) {
            void 0 === delay && (delay = 50);
            var promise;
            var timeout;
            return setFunctionName((function() {
                timeout && clearTimeout(timeout);
                var localPromise = promise = promise || new promise_ZalgoPromise;
                timeout = setTimeout((function() {
                    promise = null;
                    timeout = null;
                    promise_ZalgoPromise.try(method).then((function(result) {
                        localPromise.resolve(result);
                    }), (function(err) {
                        localPromise.reject(err);
                    }));
                }), delay);
                return localPromise;
            }), getFunctionName(method) + "::promiseDebounced");
        }
        function safeInterval(method, time) {
            var timeout;
            !function loop() {
                timeout = setTimeout((function() {
                    method();
                    loop();
                }), time);
            }();
            return {
                cancel: function() {
                    clearTimeout(timeout);
                }
            };
        }
        function isInteger(str) {
            return Boolean(str.match(/^[0-9]+$/));
        }
        function isFloat(str) {
            return Boolean(str.match(/^[0-9]+\.[0-9]+$/));
        }
        function serializePrimitive(value) {
            return value.toString();
        }
        function deserializePrimitive(value) {
            return "true" === value || "false" !== value && (isInteger(value) ? parseInt(value, 10) : isFloat(value) ? parseFloat(value) : value);
        }
        function dotify(obj, prefix, newobj) {
            void 0 === prefix && (prefix = "");
            void 0 === newobj && (newobj = {});
            prefix = prefix ? prefix + "." : prefix;
            for (var key in obj) obj.hasOwnProperty(key) && null != obj[key] && "function" != typeof obj[key] && (obj[key] && Array.isArray(obj[key]) && obj[key].length && obj[key].every((function(val) {
                return "object" != typeof val;
            })) ? newobj["" + prefix + key + "[]"] = obj[key].join(",") : obj[key] && "object" == typeof obj[key] ? newobj = dotify(obj[key], "" + prefix + key, newobj) : newobj["" + prefix + key] = serializePrimitive(obj[key]));
            return newobj;
        }
        function undotify(obj) {
            var result = {};
            for (var key in obj) if (obj.hasOwnProperty(key) && "string" == typeof obj[key]) {
                var value = obj[key];
                if (key.match(/^.+\[\]$/)) {
                    key = key.slice(0, -2);
                    value = value.split(",").map(deserializePrimitive);
                } else value = deserializePrimitive(value);
                var keyResult = result;
                var parts = key.split(".");
                for (var i = 0; i < parts.length; i++) {
                    var part = parts[i];
                    var isLast = i + 1 === parts.length;
                    var isIndex = !isLast && isInteger(parts[i + 1]);
                    if ("constructor" === part || "prototype" === part || "__proto__" === part) throw new Error("Disallowed key: " + part);
                    isLast ? keyResult[part] = value : keyResult = keyResult[part] = keyResult[part] || (isIndex ? [] : {});
                }
            }
            return result;
        }
        function eventEmitter() {
            var triggered = {};
            var handlers = {};
            var emitter = {
                on: function(eventName, handler) {
                    var handlerList = handlers[eventName] = handlers[eventName] || [];
                    handlerList.push(handler);
                    var cancelled = !1;
                    return {
                        cancel: function() {
                            if (!cancelled) {
                                cancelled = !0;
                                handlerList.splice(handlerList.indexOf(handler), 1);
                            }
                        }
                    };
                },
                once: function(eventName, handler) {
                    var listener = emitter.on(eventName, (function() {
                        listener.cancel();
                        handler();
                    }));
                    return listener;
                },
                trigger: function(eventName) {
                    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
                    var handlerList = handlers[eventName];
                    var promises = [];
                    if (handlerList) {
                        var _loop = function(_i2) {
                            var handler = handlerList[_i2];
                            promises.push(promise_ZalgoPromise.try((function() {
                                return handler.apply(void 0, args);
                            })));
                        };
                        for (var _i2 = 0; _i2 < handlerList.length; _i2++) _loop(_i2);
                    }
                    return promise_ZalgoPromise.all(promises).then(src_util_noop);
                },
                triggerOnce: function(eventName) {
                    if (triggered[eventName]) return promise_ZalgoPromise.resolve();
                    triggered[eventName] = !0;
                    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) args[_key4 - 1] = arguments[_key4];
                    return emitter.trigger.apply(emitter, [ eventName ].concat(args));
                },
                reset: function() {
                    handlers = {};
                }
            };
            return emitter;
        }
        function camelToDasherize(string) {
            return string.replace(/([A-Z])/g, (function(g) {
                return "-" + g.toLowerCase();
            }));
        }
        function dasherizeToCamel(string) {
            return string.replace(/-([a-z])/g, (function(g) {
                return g[1].toUpperCase();
            }));
        }
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
        function util_get(item, path, def) {
            if (!path) return def;
            var pathParts = path.split(".");
            for (var i = 0; i < pathParts.length; i++) {
                if ("object" != typeof item || null === item) return def;
                item = item[pathParts[i]];
            }
            return void 0 === item ? def : item;
        }
        function safeTimeout(method, time) {
            var interval = safeInterval((function() {
                if ((time -= 100) <= 0) {
                    interval.cancel();
                    method();
                }
            }), 100);
        }
        function defineLazyProp(obj, key, getter) {
            if (Array.isArray(obj)) {
                if ("number" != typeof key) throw new TypeError("Array key must be number");
            } else if ("object" == typeof obj && null !== obj && "string" != typeof key) throw new TypeError("Object key must be string");
            Object.defineProperty(obj, key, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    delete obj[key];
                    var value = getter();
                    obj[key] = value;
                    return value;
                },
                set: function(value) {
                    delete obj[key];
                    obj[key] = value;
                }
            });
        }
        function arrayFrom(item) {
            return [].slice.call(item);
        }
        function isObject(item) {
            return "object" == typeof item && null !== item;
        }
        function isObjectObject(obj) {
            return isObject(obj) && "[object Object]" === {}.toString.call(obj);
        }
        function isPlainObject(obj) {
            if (!isObjectObject(obj)) return !1;
            var constructor = obj.constructor;
            if ("function" != typeof constructor) return !1;
            var prototype = constructor.prototype;
            return !!isObjectObject(prototype) && !!prototype.hasOwnProperty("isPrototypeOf");
        }
        function replaceObject(item, replacer, fullKey) {
            void 0 === fullKey && (fullKey = "");
            if (Array.isArray(item)) {
                var length = item.length;
                var result = [];
                var _loop2 = function(i) {
                    defineLazyProp(result, i, (function() {
                        var itemKey = fullKey ? fullKey + "." + i : "" + i;
                        var child = replacer(item[i], i, itemKey);
                        (isPlainObject(child) || Array.isArray(child)) && (child = replaceObject(child, replacer, itemKey));
                        return child;
                    }));
                };
                for (var i = 0; i < length; i++) _loop2(i);
                return result;
            }
            if (isPlainObject(item)) {
                var _result = {};
                var _loop3 = function(key) {
                    if (!item.hasOwnProperty(key)) return "continue";
                    defineLazyProp(_result, key, (function() {
                        var itemKey = fullKey ? fullKey + "." + key : "" + key;
                        var child = replacer(item[key], key, itemKey);
                        (isPlainObject(child) || Array.isArray(child)) && (child = replaceObject(child, replacer, itemKey));
                        return child;
                    }));
                };
                for (var key in item) _loop3(key);
                return _result;
            }
            throw new Error("Pass an object or array");
        }
        function copyProp(source, target, name, def) {
            if (source.hasOwnProperty(name)) {
                var descriptor = Object.getOwnPropertyDescriptor(source, name);
                Object.defineProperty(target, name, descriptor);
            } else target[name] = def;
        }
        function regex(pattern, string, start) {
            void 0 === start && (start = 0);
            "string" == typeof pattern && (pattern = new RegExp(pattern));
            var result = string.slice(start).match(pattern);
            if (result) {
                var index = result.index;
                var regmatch = result[0];
                return {
                    text: regmatch,
                    groups: result.slice(1),
                    start: start + index,
                    end: start + index + regmatch.length,
                    length: regmatch.length,
                    replace: function(text) {
                        return regmatch ? "" + regmatch.slice(0, start + index) + text + regmatch.slice(index + regmatch.length) : "";
                    }
                };
            }
        }
        function regexAll(pattern, string) {
            var matches = [];
            var start = 0;
            for (;;) {
                var regmatch = regex(pattern, string, start);
                if (!regmatch) break;
                matches.push(regmatch);
                start = match.end;
            }
            return matches;
        }
        function isDefined(value) {
            return null != value;
        }
        function cycle(method) {
            return promise_ZalgoPromise.try(method).then((function() {
                return cycle(method);
            }));
        }
        function debounce(method, time) {
            void 0 === time && (time = 100);
            var timeout;
            return setFunctionName((function() {
                var _arguments3 = arguments, _this3 = this;
                clearTimeout(timeout);
                timeout = setTimeout((function() {
                    return method.apply(_this3, _arguments3);
                }), time);
            }), getFunctionName(method) + "::debounced");
        }
        function util_isRegex(item) {
            return "[object RegExp]" === {}.toString.call(item);
        }
        var util_weakMapMemoize = function(method) {
            var weakmap = new weakmap_CrossDomainSafeWeakMap;
            return function(arg) {
                var _this4 = this;
                return weakmap.getOrSet(arg, (function() {
                    return method.call(_this4, arg);
                }));
            };
        };
        var util_weakMapMemoizePromise = function(method) {
            var weakmap = new weakmap_CrossDomainSafeWeakMap;
            return function(arg) {
                var _this5 = this;
                return weakmap.getOrSet(arg, (function() {
                    return method.call(_this5, arg).finally((function() {
                        weakmap.delete(arg);
                    }));
                }));
            };
        };
        function getOrSet(obj, key, getter) {
            if (obj.hasOwnProperty(key)) return obj[key];
            var val = getter();
            obj[key] = val;
            return val;
        }
        function cleanup(obj) {
            var tasks = [];
            var cleaned = !1;
            var cleanErr;
            var cleaner = {
                set: function(name, item) {
                    if (!cleaned) {
                        obj[name] = item;
                        cleaner.register((function() {
                            delete obj[name];
                        }));
                    }
                    return item;
                },
                register: function(method) {
                    cleaned ? method(cleanErr) : tasks.push(once((function() {
                        return method(cleanErr);
                    })));
                },
                all: function(err) {
                    cleanErr = err;
                    var results = [];
                    cleaned = !0;
                    for (;tasks.length; ) {
                        var task = tasks.shift();
                        results.push(task());
                    }
                    return promise_ZalgoPromise.all(results).then(src_util_noop);
                }
            };
            return cleaner;
        }
        function tryCatch(fn) {
            var result;
            var error;
            try {
                result = fn();
            } catch (err) {
                error = err;
            }
            return {
                result: result,
                error: error
            };
        }
        function removeFromArray(arr, item) {
            var index = arr.indexOf(item);
            -1 !== index && arr.splice(index, 1);
        }
        function assertExists(name, thing) {
            if (null == thing) throw new Error("Expected " + name + " to be present");
            return thing;
        }
        function unique(arr) {
            var result = {};
            for (var _i4 = 0; _i4 < arr.length; _i4++) result[arr[_i4]] = !0;
            return Object.keys(result);
        }
        var constHas = function(constant, value) {
            return -1 !== memoizedValues(constant).indexOf(value);
        };
        function dedupeErrors(handler) {
            var seenErrors = [];
            var seenStringifiedErrors = {};
            return function(err) {
                if (-1 === seenErrors.indexOf(err)) {
                    seenErrors.push(err);
                    var stringifiedError = stringifyError(err);
                    if (!seenStringifiedErrors[stringifiedError]) {
                        seenStringifiedErrors[stringifiedError] = !0;
                        return handler(err);
                    }
                }
            };
        }
        var util_ExtendableError = function(_Error) {
            _inheritsLoose(ExtendableError, _Error);
            function ExtendableError(message) {
                var _this6;
                (_this6 = _Error.call(this, message) || this).name = _this6.constructor.name;
                "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(function(self) {
                    if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return self;
                }(_this6), _this6.constructor) : _this6.stack = new Error(message).stack;
                return _this6;
            }
            return ExtendableError;
        }(wrapNativeSuper_wrapNativeSuper(Error));
        var KEY_CODES = {
            ENTER: 13,
            SPACE: 32
        };
        var ATTRIBUTES = {
            UID: "data-uid"
        };
        var UID_HASH_LENGTH = 30;
        function getBody() {
            var body = document.body;
            if (!body) throw new Error("Body element not found");
            return body;
        }
        function isDocumentReady() {
            return Boolean(document.body) && "complete" === document.readyState;
        }
        function isDocumentInteractive() {
            return Boolean(document.body) && "interactive" === document.readyState;
        }
        function urlEncode(str) {
            return encodeURIComponent(str);
        }
        function waitForWindowReady() {
            return inlineMemoize(waitForWindowReady, (function() {
                return new promise_ZalgoPromise((function(resolve) {
                    isDocumentReady() && resolve();
                    window.addEventListener("load", (function() {
                        return resolve();
                    }));
                }));
            }));
        }
        var waitForDocumentReady = memoize((function() {
            return new promise_ZalgoPromise((function(resolve) {
                if (isDocumentReady() || isDocumentInteractive()) return resolve();
                var interval = setInterval((function() {
                    if (isDocumentReady() || isDocumentInteractive()) {
                        clearInterval(interval);
                        return resolve();
                    }
                }), 10);
            }));
        }));
        function waitForDocumentBody() {
            return promise_ZalgoPromise.try((function() {
                return document.body ? document.body : waitForDocumentReady().then((function() {
                    if (document.body) return document.body;
                    throw new Error("Document ready but document.body not present");
                }));
            }));
        }
        function parseQuery(queryString) {
            return inlineMemoize(parseQuery, (function() {
                var params = {};
                if (!queryString) return params;
                if (-1 === queryString.indexOf("=")) return params;
                for (var _i2 = 0, _queryString$split2 = queryString.split("&"); _i2 < _queryString$split2.length; _i2++) {
                    var pair = _queryString$split2[_i2];
                    (pair = pair.split("="))[0] && pair[1] && (params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]));
                }
                return params;
            }), [ queryString ]);
        }
        function getQueryParam(name) {
            return parseQuery(window.location.search.slice(1))[name];
        }
        function urlWillRedirectPage(url) {
            return -1 === url.indexOf("#") || 0 !== url.indexOf("#") && url.split("#")[0] !== window.location.href.split("#")[0];
        }
        function formatQuery(obj) {
            void 0 === obj && (obj = {});
            return Object.keys(obj).filter((function(key) {
                return "string" == typeof obj[key] || "boolean" == typeof obj[key];
            })).map((function(key) {
                var val = obj[key];
                if ("string" != typeof val && "boolean" != typeof val) throw new TypeError("Invalid type for query");
                return urlEncode(key) + "=" + urlEncode(val.toString());
            })).join("&");
        }
        function extendQuery(originalQuery, props) {
            void 0 === props && (props = {});
            return props && Object.keys(props).length ? formatQuery(_extends({}, parseQuery(originalQuery), props)) : originalQuery;
        }
        function extendUrl(url, options) {
            var query = options.query || {};
            var hash = options.hash || {};
            var originalUrl;
            var originalHash;
            var _url$split = url.split("#");
            originalHash = _url$split[1];
            var _originalUrl$split = (originalUrl = _url$split[0]).split("?");
            originalUrl = _originalUrl$split[0];
            var queryString = extendQuery(_originalUrl$split[1], query);
            var hashString = extendQuery(originalHash, hash);
            queryString && (originalUrl = originalUrl + "?" + queryString);
            hashString && (originalUrl = originalUrl + "#" + hashString);
            return originalUrl;
        }
        function redirect(url, win) {
            void 0 === win && (win = window);
            return new promise_ZalgoPromise((function(resolve) {
                win.location = url;
                urlWillRedirectPage(url) || resolve();
            }));
        }
        function hasMetaViewPort() {
            var meta = document.querySelector("meta[name=viewport]");
            return !(isDevice() && window.screen.width < 660 && !meta);
        }
        function isElementVisible(el) {
            return Boolean(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
        }
        function getPerformance() {
            return inlineMemoize(getPerformance, (function() {
                var performance = window.performance;
                if (performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1e3 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0) return performance;
            }));
        }
        function enablePerformance() {
            return Boolean(getPerformance());
        }
        function getPageRenderTime() {
            return waitForDocumentReady().then((function() {
                var performance = getPerformance();
                if (performance) {
                    var timing = performance.timing;
                    return timing.connectEnd && timing.domInteractive ? timing.domInteractive - timing.connectEnd : void 0;
                }
            }));
        }
        function htmlEncode(html) {
            void 0 === html && (html = "");
            return html.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;");
        }
        function dom_isBrowser() {
            return "undefined" != typeof window && void 0 !== window.location;
        }
        function querySelectorAll(selector, doc) {
            void 0 === doc && (doc = window.document);
            return [].slice.call(doc.querySelectorAll(selector));
        }
        function onClick(element, handler) {
            element.addEventListener("touchstart", src_util_noop);
            element.addEventListener("click", handler);
            element.addEventListener("keypress", (function(event) {
                if (event.keyCode === KEY_CODES.ENTER || event.keyCode === KEY_CODES.SPACE) return handler(event);
            }));
        }
        function getScript(_ref) {
            var _ref$host = _ref.host, host = void 0 === _ref$host ? window.location.host : _ref$host, path = _ref.path, _ref$reverse = _ref.reverse, reverse = void 0 !== _ref$reverse && _ref$reverse;
            return inlineMemoize(getScript, (function() {
                var url = "" + host + path;
                var scripts = [].slice.call(document.getElementsByTagName("script"));
                reverse && scripts.reverse();
                for (var _i4 = 0; _i4 < scripts.length; _i4++) {
                    var script = scripts[_i4];
                    if (script.src && script.src.replace(/^https?:\/\//, "").split("?")[0] === url) return script;
                }
            }), [ path ]);
        }
        function isLocalStorageEnabled() {
            return inlineMemoize(isLocalStorageEnabled, (function() {
                try {
                    if ("undefined" == typeof window) return !1;
                    if (window.localStorage) {
                        var value = Math.random().toString();
                        window.localStorage.setItem("__test__localStorage__", value);
                        var result = window.localStorage.getItem("__test__localStorage__");
                        window.localStorage.removeItem("__test__localStorage__");
                        if (value === result) return !0;
                    }
                } catch (err) {}
                return !1;
            }));
        }
        function getBrowserLocales() {
            var nav = window.navigator;
            var locales = nav.languages ? [].concat(nav.languages) : [];
            nav.language && locales.push(nav.language);
            nav.userLanguage && locales.push(nav.userLanguage);
            return locales.map((function(locale) {
                if (locale && locale.match(/^[a-z]{2}[-_][A-Z]{2}$/)) {
                    var _locale$split = locale.split(/[-_]/);
                    return {
                        country: _locale$split[1],
                        lang: _locale$split[0]
                    };
                }
                return locale && locale.match(/^[a-z]{2}$/) ? {
                    lang: locale
                } : null;
            })).filter(Boolean);
        }
        function appendChild(container, child) {
            container.appendChild(child);
        }
        function isElement(element) {
            return element instanceof window.Element || null !== element && "object" == typeof element && 1 === element.nodeType && "object" == typeof element.style && "object" == typeof element.ownerDocument;
        }
        function getElementSafe(id, doc) {
            void 0 === doc && (doc = document);
            return isElement(id) ? id : "string" == typeof id ? doc.querySelector(id) : void 0;
        }
        function getElement(id, doc) {
            void 0 === doc && (doc = document);
            var element = getElementSafe(id, doc);
            if (element) return element;
            throw new Error("Can not find element: " + stringify(id));
        }
        function elementReady(id) {
            return new promise_ZalgoPromise((function(resolve, reject) {
                var name = stringify(id);
                var el = getElementSafe(id);
                if (el) return resolve(el);
                if (isDocumentReady()) return reject(new Error("Document is ready and element " + name + " does not exist"));
                var interval = setInterval((function() {
                    if (el = getElementSafe(id)) {
                        resolve(el);
                        clearInterval(interval);
                    } else if (isDocumentReady()) {
                        clearInterval(interval);
                        return reject(new Error("Document is ready and element " + name + " does not exist"));
                    }
                }), 10);
            }));
        }
        var dom_PopupOpenError = function(_ExtendableError) {
            _inheritsLoose(PopupOpenError, _ExtendableError);
            function PopupOpenError() {
                return _ExtendableError.apply(this, arguments) || this;
            }
            return PopupOpenError;
        }(util_ExtendableError);
        function popup(url, options) {
            var width = (options = options || {}).width, height = options.height;
            var top = 0;
            var left = 0;
            width && (window.outerWidth ? left = Math.round((window.outerWidth - width) / 2) + window.screenX : window.screen.width && (left = Math.round((window.screen.width - width) / 2)));
            height && (window.outerHeight ? top = Math.round((window.outerHeight - height) / 2) + window.screenY : window.screen.height && (top = Math.round((window.screen.height - height) / 2)));
            width && height && (options = _extends({
                top: top,
                left: left,
                width: width,
                height: height,
                status: 1,
                toolbar: 0,
                menubar: 0,
                resizable: 1,
                scrollbars: 1
            }, options));
            var name = options.name || "";
            delete options.name;
            var params = Object.keys(options).map((function(key) {
                if (null != options[key]) return key + "=" + stringify(options[key]);
            })).filter(Boolean).join(",");
            var win;
            try {
                win = window.open(url, name, params);
            } catch (err) {
                throw new dom_PopupOpenError("Can not open popup window - " + (err.stack || err.message));
            }
            if (isWindowClosed(win)) {
                throw new dom_PopupOpenError("Can not open popup window - blocked");
            }
            window.addEventListener("unload", (function() {
                return win.close();
            }));
            return win;
        }
        function writeToWindow(win, html) {
            try {
                win.document.open();
                win.document.write(html);
                win.document.close();
            } catch (err) {
                try {
                    win.location = "javascript: document.open(); document.write(" + JSON.stringify(html) + "); document.close();";
                } catch (err2) {}
            }
        }
        function writeElementToWindow(win, el) {
            var tag = el.tagName.toLowerCase();
            if ("html" !== tag) throw new Error("Expected element to be html, got " + tag);
            var documentElement = win.document.documentElement;
            for (var _i6 = 0, _arrayFrom2 = arrayFrom(documentElement.children); _i6 < _arrayFrom2.length; _i6++) documentElement.removeChild(_arrayFrom2[_i6]);
            for (var _i8 = 0, _arrayFrom4 = arrayFrom(el.children); _i8 < _arrayFrom4.length; _i8++) documentElement.appendChild(_arrayFrom4[_i8]);
        }
        function setStyle(el, styleText, doc) {
            void 0 === doc && (doc = window.document);
            el.styleSheet ? el.styleSheet.cssText = styleText : el.appendChild(doc.createTextNode(styleText));
        }
        var awaitFrameLoadPromises;
        function awaitFrameLoad(frame) {
            if ((awaitFrameLoadPromises = awaitFrameLoadPromises || new weakmap_CrossDomainSafeWeakMap).has(frame)) {
                var _promise = awaitFrameLoadPromises.get(frame);
                if (_promise) return _promise;
            }
            var promise = new promise_ZalgoPromise((function(resolve, reject) {
                frame.addEventListener("load", (function() {
                    !function(frame) {
                        !function() {
                            for (var i = 0; i < iframeWindows.length; i++) {
                                var closed = !1;
                                try {
                                    closed = iframeWindows[i].closed;
                                } catch (err) {}
                                if (closed) {
                                    iframeFrames.splice(i, 1);
                                    iframeWindows.splice(i, 1);
                                }
                            }
                        }();
                        if (frame && frame.contentWindow) try {
                            iframeWindows.push(frame.contentWindow);
                            iframeFrames.push(frame);
                        } catch (err) {}
                    }(frame);
                    resolve(frame);
                }));
                frame.addEventListener("error", (function(err) {
                    frame.contentWindow ? resolve(frame) : reject(err);
                }));
            }));
            awaitFrameLoadPromises.set(frame, promise);
            return promise;
        }
        function awaitFrameWindow(frame) {
            return awaitFrameLoad(frame).then((function(loadedFrame) {
                if (!loadedFrame.contentWindow) throw new Error("Could not find window in iframe");
                return loadedFrame.contentWindow;
            }));
        }
        function createElement(tag, options, container) {
            void 0 === tag && (tag = "div");
            void 0 === options && (options = {});
            tag = tag.toLowerCase();
            var element = document.createElement(tag);
            options.style && extend(element.style, options.style);
            options.class && (element.className = options.class.join(" "));
            options.id && element.setAttribute("id", options.id);
            if (options.attributes) for (var _i10 = 0, _Object$keys2 = Object.keys(options.attributes); _i10 < _Object$keys2.length; _i10++) {
                var key = _Object$keys2[_i10];
                element.setAttribute(key, options.attributes[key]);
            }
            options.styleSheet && setStyle(element, options.styleSheet);
            container && appendChild(container, element);
            if (options.html) if ("iframe" === tag) {
                if (!container || !element.contentWindow) throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
                writeToWindow(element.contentWindow, options.html);
            } else element.innerHTML = options.html;
            return element;
        }
        function iframe(options, container) {
            void 0 === options && (options = {});
            var style = options.style || {};
            var frame = createElement("iframe", {
                attributes: _extends({
                    allowTransparency: "true"
                }, options.attributes || {}),
                style: _extends({
                    backgroundColor: "transparent",
                    border: "none"
                }, style),
                html: options.html,
                class: options.class
            });
            var isIE = window.navigator.userAgent.match(/MSIE|Edge/i);
            frame.hasAttribute("id") || frame.setAttribute("id", uniqueID());
            awaitFrameLoad(frame);
            container && getElement(container).appendChild(frame);
            (options.url || isIE) && frame.setAttribute("src", options.url || "about:blank");
            return frame;
        }
        function addEventListener(obj, event, handler) {
            obj.addEventListener(event, handler);
            return {
                cancel: function() {
                    obj.removeEventListener(event, handler);
                }
            };
        }
        function bindEvents(element, eventNames, handler) {
            handler = once(handler);
            for (var _i12 = 0; _i12 < eventNames.length; _i12++) element.addEventListener(eventNames[_i12], handler);
            return {
                cancel: once((function() {
                    for (var _i14 = 0; _i14 < eventNames.length; _i14++) element.removeEventListener(eventNames[_i14], handler);
                }))
            };
        }
        var VENDOR_PREFIXES = [ "webkit", "moz", "ms", "o" ];
        function setVendorCSS(element, name, value) {
            element.style[name] = value;
            var capitalizedName = capitalizeFirstLetter(name);
            for (var _i16 = 0; _i16 < VENDOR_PREFIXES.length; _i16++) element.style["" + VENDOR_PREFIXES[_i16] + capitalizedName] = value;
        }
        var ANIMATION_START_EVENTS = [ "animationstart", "webkitAnimationStart", "oAnimationStart", "MSAnimationStart" ];
        var ANIMATION_END_EVENTS = [ "animationend", "webkitAnimationEnd", "oAnimationEnd", "MSAnimationEnd" ];
        function animate(element, name, clean, timeout) {
            void 0 === timeout && (timeout = 1e3);
            return new promise_ZalgoPromise((function(resolve, reject) {
                var el = getElement(element);
                if (!el) return resolve();
                var hasStarted = !1;
                var startTimeout;
                var endTimeout;
                var startEvent;
                var endEvent;
                function cleanUp() {
                    clearTimeout(startTimeout);
                    clearTimeout(endTimeout);
                    startEvent.cancel();
                    endEvent.cancel();
                }
                startEvent = bindEvents(el, ANIMATION_START_EVENTS, (function(event) {
                    if (event.target === el && event.animationName === name) {
                        clearTimeout(startTimeout);
                        event.stopPropagation();
                        startEvent.cancel();
                        hasStarted = !0;
                        endTimeout = setTimeout((function() {
                            cleanUp();
                            resolve();
                        }), timeout);
                    }
                }));
                endEvent = bindEvents(el, ANIMATION_END_EVENTS, (function(event) {
                    if (event.target === el && event.animationName === name) {
                        cleanUp();
                        return "string" == typeof event.animationName && event.animationName !== name ? reject("Expected animation name to be " + name + ", found " + event.animationName) : resolve();
                    }
                }));
                setVendorCSS(el, "animationName", name);
                startTimeout = setTimeout((function() {
                    if (!hasStarted) {
                        cleanUp();
                        return resolve();
                    }
                }), 200);
                clean && clean(cleanUp);
            }));
        }
        function makeElementVisible(element) {
            element.style.setProperty("visibility", "");
        }
        function makeElementInvisible(element) {
            element.style.setProperty("visibility", "hidden", "important");
        }
        function showElement(element) {
            element.style.setProperty("display", "");
        }
        function hideElement(element) {
            element.style.setProperty("display", "none", "important");
        }
        function destroyElement(element) {
            element && element.parentNode && element.parentNode.removeChild(element);
        }
        function showAndAnimate(element, name, clean) {
            var animation = animate(element, name, clean);
            showElement(element);
            return animation;
        }
        function animateAndHide(element, name, clean) {
            return animate(element, name, clean).then((function() {
                hideElement(element);
            }));
        }
        function addClass(element, name) {
            element.classList.add(name);
        }
        function removeClass(element, name) {
            element.classList.remove(name);
        }
        function isElementClosed(el) {
            return !(el && el.parentNode && el.ownerDocument && el.ownerDocument.documentElement && el.ownerDocument.documentElement.contains(el));
        }
        function watchElementForClose(element, handler) {
            handler = once(handler);
            var cancelled = !1;
            var mutationObservers = [];
            var interval;
            var sacrificialFrame;
            var sacrificialFrameWin;
            var cancel = function() {
                cancelled = !0;
                for (var _i18 = 0; _i18 < mutationObservers.length; _i18++) mutationObservers[_i18].disconnect();
                interval && interval.cancel();
                sacrificialFrameWin && sacrificialFrameWin.removeEventListener("unload", elementClosed);
                sacrificialFrame && destroyElement(sacrificialFrame);
            };
            var elementClosed = function() {
                if (!cancelled) {
                    handler();
                    cancel();
                }
            };
            if (isElementClosed(element)) {
                elementClosed();
                return {
                    cancel: cancel
                };
            }
            if (window.MutationObserver) {
                var mutationElement = element.parentElement;
                for (;mutationElement; ) {
                    var mutationObserver = new window.MutationObserver((function() {
                        isElementClosed(element) && elementClosed();
                    }));
                    mutationObserver.observe(mutationElement, {
                        childList: !0
                    });
                    mutationObservers.push(mutationObserver);
                    mutationElement = mutationElement.parentElement;
                }
            }
            (sacrificialFrame = document.createElement("iframe")).setAttribute("name", "__detect_close_" + uniqueID() + "__");
            sacrificialFrame.style.display = "none";
            awaitFrameWindow(sacrificialFrame).then((function(frameWin) {
                (sacrificialFrameWin = function(win) {
                    if (!isSameDomain(win)) throw new Error("Expected window to be same domain");
                    return win;
                }(frameWin)).addEventListener("unload", elementClosed);
            }));
            element.appendChild(sacrificialFrame);
            interval = safeInterval((function() {
                isElementClosed(element) && elementClosed();
            }), 1e3);
            return {
                cancel: cancel
            };
        }
        function fixScripts(el, doc) {
            void 0 === doc && (doc = window.document);
            for (var _i20 = 0, _querySelectorAll2 = querySelectorAll("script", el); _i20 < _querySelectorAll2.length; _i20++) {
                var script = _querySelectorAll2[_i20];
                var parentNode = script.parentNode;
                if (parentNode) {
                    var newScript = doc.createElement("script");
                    newScript.text = script.textContent;
                    parentNode.replaceChild(newScript, script);
                }
            }
        }
        function onResize(el, handler, _temp) {
            var _ref2 = void 0 === _temp ? {} : _temp, _ref2$width = _ref2.width, width = void 0 === _ref2$width || _ref2$width, _ref2$height = _ref2.height, height = void 0 === _ref2$height || _ref2$height, _ref2$interval = _ref2.interval, interval = void 0 === _ref2$interval ? 100 : _ref2$interval, _ref2$win = _ref2.win, win = void 0 === _ref2$win ? window : _ref2$win;
            var currentWidth = el.offsetWidth;
            var currentHeight = el.offsetHeight;
            var canceled = !1;
            handler({
                width: currentWidth,
                height: currentHeight
            });
            var check = function() {
                if (!canceled && isElementVisible(el)) {
                    var newWidth = el.offsetWidth;
                    var newHeight = el.offsetHeight;
                    (width && newWidth !== currentWidth || height && newHeight !== currentHeight) && handler({
                        width: newWidth,
                        height: newHeight
                    });
                    currentWidth = newWidth;
                    currentHeight = newHeight;
                }
            };
            var observer;
            var timeout;
            win.addEventListener("resize", check);
            if (void 0 !== win.ResizeObserver) {
                (observer = new win.ResizeObserver(check)).observe(el);
                timeout = safeInterval(check, 10 * interval);
            } else if (void 0 !== win.MutationObserver) {
                (observer = new win.MutationObserver(check)).observe(el, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                    characterData: !1
                });
                timeout = safeInterval(check, 10 * interval);
            } else timeout = safeInterval(check, interval);
            return {
                cancel: function() {
                    canceled = !0;
                    observer.disconnect();
                    window.removeEventListener("resize", check);
                    timeout.cancel();
                }
            };
        }
        function getResourceLoadTime(url) {
            var performance = getPerformance();
            if (performance && "function" == typeof performance.getEntries) {
                var entries = performance.getEntries();
                for (var i = 0; i < entries.length; i++) {
                    var entry = entries[i];
                    if (entry && entry.name && 0 === entry.name.indexOf(url) && "number" == typeof entry.duration) return Math.floor(entry.duration);
                }
            }
        }
        function isShadowElement(element) {
            for (;element.parentNode; ) element = element.parentNode;
            return "[object ShadowRoot]" === element.toString();
        }
        function getShadowRoot(element) {
            for (;element.parentNode; ) element = element.parentNode;
            if (isShadowElement(element)) return element;
        }
        function getShadowHost(element) {
            var shadowRoot = getShadowRoot(element);
            if (shadowRoot && shadowRoot.host) return shadowRoot.host;
        }
        function insertShadowSlot(element) {
            var shadowHost = getShadowHost(element);
            if (!shadowHost) throw new Error("Element is not in shadow dom");
            var slotName = "shadow-slot-" + uniqueID();
            var slot = document.createElement("slot");
            slot.setAttribute("name", slotName);
            element.appendChild(slot);
            var slotProvider = document.createElement("div");
            slotProvider.setAttribute("slot", slotName);
            shadowHost.appendChild(slotProvider);
            return isShadowElement(shadowHost) ? insertShadowSlot(slotProvider) : slotProvider;
        }
        function preventClickFocus(el) {
            var onFocus = function onFocus(event) {
                el.removeEventListener("focus", onFocus);
                event.preventDefault();
                el.blur();
                return !1;
            };
            el.addEventListener("mousedown", (function() {
                el.addEventListener("focus", onFocus);
                setTimeout((function() {
                    el.removeEventListener("focus", onFocus);
                }), 1);
            }));
        }
        function getStackTrace() {
            try {
                throw new Error("_");
            } catch (err) {
                return err.stack || "";
            }
        }
        var currentScript = "undefined" != typeof document ? document.currentScript : null;
        var getCurrentScript = memoize((function() {
            if (currentScript) return currentScript;
            if (currentScript = function() {
                try {
                    var stack = getStackTrace();
                    var stackDetails = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(stack);
                    var scriptLocation = stackDetails && stackDetails[1];
                    if (!scriptLocation) return;
                    for (var _i22 = 0, _Array$prototype$slic2 = [].slice.call(document.getElementsByTagName("script")).reverse(); _i22 < _Array$prototype$slic2.length; _i22++) {
                        var script = _Array$prototype$slic2[_i22];
                        if (script.src && script.src === scriptLocation) return script;
                    }
                } catch (err) {}
            }()) return currentScript;
            throw new Error("Can not determine current script");
        }));
        var currentUID = uniqueID();
        var getCurrentScriptUID = memoize((function() {
            var script;
            try {
                script = getCurrentScript();
            } catch (err) {
                return currentUID;
            }
            var uid = script.getAttribute(ATTRIBUTES.UID);
            if (uid && "string" == typeof uid) return uid;
            if ((uid = script.getAttribute(ATTRIBUTES.UID + "-auto")) && "string" == typeof uid) return uid;
            if (script.src) {
                var hashedString = strHashStr(JSON.stringify({
                    src: script.src,
                    dataset: script.dataset
                }));
                uid = "uid_" + hashedString.slice(hashedString.length - UID_HASH_LENGTH);
            } else uid = uniqueID();
            script.setAttribute(ATTRIBUTES.UID + "-auto", uid);
            return uid;
        }));
        function submitForm(_ref3) {
            var url = _ref3.url, target = _ref3.target, body = _ref3.body, _ref3$method = _ref3.method, method = void 0 === _ref3$method ? "post" : _ref3$method;
            var form = document.createElement("form");
            form.setAttribute("target", target);
            form.setAttribute("method", method);
            form.setAttribute("action", url);
            form.style.display = "none";
            if (body) for (var _i24 = 0, _Object$keys4 = Object.keys(body); _i24 < _Object$keys4.length; _i24++) {
                var _body$key;
                var key = _Object$keys4[_i24];
                var input = document.createElement("input");
                input.setAttribute("name", key);
                input.setAttribute("value", null == (_body$key = body[key]) ? void 0 : _body$key.toString());
                form.appendChild(input);
            }
            getBody().appendChild(form);
            form.submit();
            getBody().removeChild(form);
        }
        function getStorage(_ref) {
            var name = _ref.name, _ref$lifetime = _ref.lifetime, lifetime = void 0 === _ref$lifetime ? 12e5 : _ref$lifetime;
            return inlineMemoize(getStorage, (function() {
                var STORAGE_KEY = "__" + name + "_storage__";
                var newStateID = uniqueID();
                var accessedStorage;
                function getState(handler) {
                    var localStorageEnabled = isLocalStorageEnabled();
                    var storage;
                    accessedStorage && (storage = accessedStorage);
                    if (!storage && localStorageEnabled) {
                        var rawStorage = window.localStorage.getItem(STORAGE_KEY);
                        rawStorage && (storage = JSON.parse(rawStorage));
                    }
                    storage || (storage = getGlobal()[STORAGE_KEY]);
                    storage || (storage = {
                        id: newStateID
                    });
                    storage.id || (storage.id = newStateID);
                    accessedStorage = storage;
                    var result = handler(storage);
                    localStorageEnabled ? window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storage)) : getGlobal()[STORAGE_KEY] = storage;
                    accessedStorage = null;
                    return result;
                }
                function getID() {
                    return getState((function(storage) {
                        return storage.id;
                    }));
                }
                function getSession(handler) {
                    return getState((function(storage) {
                        var session = storage.__session__;
                        var now = Date.now();
                        session && now - session.created > lifetime && (session = null);
                        session || (session = {
                            guid: uniqueID(),
                            created: now
                        });
                        storage.__session__ = session;
                        return handler(session);
                    }));
                }
                return {
                    getState: getState,
                    getID: getID,
                    isStateFresh: function() {
                        return getID() === newStateID;
                    },
                    getSessionState: function(handler) {
                        return getSession((function(session) {
                            session.state = session.state || {};
                            return handler(session.state);
                        }));
                    },
                    getSessionID: function() {
                        return getSession((function(session) {
                            return session.guid;
                        }));
                    }
                };
            }), [ {
                name: name,
                lifetime: lifetime
            } ]);
        }
        function getBelterExperimentStorage() {
            return getStorage({
                name: "belter_experiment"
            });
        }
        function isEventUnique(name) {
            return getBelterExperimentStorage().getSessionState((function(state) {
                state.loggedBeacons = state.loggedBeacons || [];
                if (-1 === state.loggedBeacons.indexOf(name)) {
                    state.loggedBeacons.push(name);
                    return !0;
                }
                return !1;
            }));
        }
        function getRandomInteger(range) {
            return Math.floor(Math.random() * range);
        }
        function experiment(_ref) {
            var name = _ref.name, _ref$sample = _ref.sample, sample = void 0 === _ref$sample ? 50 : _ref$sample, _ref$logTreatment = _ref.logTreatment, logTreatment = void 0 === _ref$logTreatment ? src_util_noop : _ref$logTreatment, _ref$logCheckpoint = _ref.logCheckpoint, logCheckpoint = void 0 === _ref$logCheckpoint ? src_util_noop : _ref$logCheckpoint, _ref$sticky = _ref.sticky;
            var throttle = void 0 === _ref$sticky || _ref$sticky ? function(name) {
                return getBelterExperimentStorage().getState((function(state) {
                    state.throttlePercentiles = state.throttlePercentiles || {};
                    state.throttlePercentiles[name] = state.throttlePercentiles[name] || getRandomInteger(100);
                    return state.throttlePercentiles[name];
                }));
            }(name) : getRandomInteger(100);
            var group;
            var treatment = name + "_" + (group = throttle < sample ? "test" : sample >= 50 || sample <= throttle && throttle < 2 * sample ? "control" : "throttle");
            var started = !1;
            var forced = !1;
            try {
                window.localStorage && window.localStorage.getItem(name) && (forced = !0);
            } catch (err) {}
            var exp = {
                isEnabled: function() {
                    return "test" === group || forced;
                },
                isDisabled: function() {
                    return "test" !== group && !forced;
                },
                getTreatment: function() {
                    return treatment;
                },
                log: function(checkpoint, payload) {
                    void 0 === payload && (payload = {});
                    if (!started) return exp;
                    isEventUnique(treatment + "_" + JSON.stringify(payload)) && logTreatment({
                        name: name,
                        treatment: treatment,
                        payload: payload,
                        throttle: throttle
                    });
                    isEventUnique(treatment + "_" + checkpoint + "_" + JSON.stringify(payload)) && logCheckpoint({
                        name: name,
                        treatment: treatment,
                        checkpoint: checkpoint,
                        payload: payload,
                        throttle: throttle
                    });
                    return exp;
                },
                logStart: function(payload) {
                    void 0 === payload && (payload = {});
                    started = !0;
                    return exp.log("start", payload);
                },
                logComplete: function(payload) {
                    void 0 === payload && (payload = {});
                    return exp.log("complete", payload);
                }
            };
            return exp;
        }
        function getGlobalNameSpace(_ref) {
            var name = _ref.name, _ref$version = _ref.version, version = void 0 === _ref$version ? "latest" : _ref$version;
            var global = getGlobal();
            var globalKey = "__" + name + "__" + version + "_global__";
            var namespace = global[globalKey] = global[globalKey] || {};
            return {
                get: function(key, defValue) {
                    defValue = defValue || {};
                    return namespace[key] = namespace[key] || defValue;
                }
            };
        }
        var headerBuilders = [];
        function request(_ref) {
            var url = _ref.url, _ref$method = _ref.method, method = void 0 === _ref$method ? "get" : _ref$method, _ref$headers = _ref.headers, headers = void 0 === _ref$headers ? {} : _ref$headers, json = _ref.json, data = _ref.data, body = _ref.body, _ref$win = _ref.win, win = void 0 === _ref$win ? window : _ref$win, _ref$timeout = _ref.timeout, timeout = void 0 === _ref$timeout ? 0 : _ref$timeout;
            return new promise_ZalgoPromise((function(resolve, reject) {
                if (json && data || json && body || data && json) throw new Error("Only options.json or options.data or options.body should be passed");
                var normalizedHeaders = {};
                for (var _i4 = 0, _Object$keys2 = Object.keys(headers); _i4 < _Object$keys2.length; _i4++) {
                    var _key2 = _Object$keys2[_i4];
                    normalizedHeaders[_key2.toLowerCase()] = headers[_key2];
                }
                json ? normalizedHeaders["content-type"] = normalizedHeaders["content-type"] || "application/json" : (data || body) && (normalizedHeaders["content-type"] = normalizedHeaders["content-type"] || "application/x-www-form-urlencoded; charset=utf-8");
                normalizedHeaders.accept = normalizedHeaders.accept || "application/json";
                for (var _i6 = 0; _i6 < headerBuilders.length; _i6++) {
                    var builtHeaders = (0, headerBuilders[_i6])();
                    for (var _i8 = 0, _Object$keys4 = Object.keys(builtHeaders); _i8 < _Object$keys4.length; _i8++) {
                        var _key3 = _Object$keys4[_i8];
                        normalizedHeaders[_key3.toLowerCase()] = builtHeaders[_key3];
                    }
                }
                var xhr = new win.XMLHttpRequest;
                xhr.addEventListener("load", (function() {
                    var responseHeaders = function(rawHeaders) {
                        void 0 === rawHeaders && (rawHeaders = "");
                        var result = {};
                        for (var _i2 = 0, _rawHeaders$trim$spli2 = rawHeaders.trim().split("\n"); _i2 < _rawHeaders$trim$spli2.length; _i2++) {
                            var _line$split = _rawHeaders$trim$spli2[_i2].split(":"), _key = _line$split[0], values = _line$split.slice(1);
                            result[_key.toLowerCase()] = values.join(":").trim();
                        }
                        return result;
                    }(this.getAllResponseHeaders());
                    if (!this.status) return reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: no response status code."));
                    var contentType = responseHeaders["content-type"];
                    var isJSON = contentType && (0 === contentType.indexOf("application/json") || 0 === contentType.indexOf("text/json"));
                    var responseBody = this.responseText;
                    try {
                        responseBody = JSON.parse(responseBody);
                    } catch (err) {
                        if (isJSON) return reject(new Error("Invalid json: " + this.responseText + "."));
                    }
                    return resolve({
                        status: this.status,
                        headers: responseHeaders,
                        body: responseBody
                    });
                }), !1);
                xhr.addEventListener("error", (function(evt) {
                    reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: " + evt.toString() + "."));
                }), !1);
                xhr.open(method, url, !0);
                for (var _key4 in normalizedHeaders) normalizedHeaders.hasOwnProperty(_key4) && xhr.setRequestHeader(_key4, normalizedHeaders[_key4]);
                json ? body = JSON.stringify(json) : data && (body = Object.keys(data).map((function(key) {
                    return encodeURIComponent(key) + "=" + (data ? encodeURIComponent(data[key]) : "");
                })).join("&"));
                xhr.timeout = timeout;
                xhr.ontimeout = function() {
                    reject(new Error("Request to " + method.toLowerCase() + " " + url + " has timed out"));
                };
                xhr.send(body);
            }));
        }
        function addHeaderBuilder(method) {
            headerBuilders.push(method);
        }
        var types_TYPES = !0;
        function memoized(target, name, descriptor) {
            descriptor.value = memoize(descriptor.value, {
                name: name,
                thisNamespace: !0
            });
        }
        function decorators_promise(target, name, descriptor) {
            descriptor.value = promisify(descriptor.value, {
                name: name
            });
        }
        function isPerc(str) {
            return "string" == typeof str && /^[0-9]+%$/.test(str);
        }
        function isPx(str) {
            return "string" == typeof str && /^[0-9]+px$/.test(str);
        }
        function toNum(val) {
            if ("number" == typeof val) return val;
            var match = val.match(/^([0-9]+)(px|%)$/);
            if (!match) throw new Error("Could not match css value from " + val);
            return parseInt(match[1], 10);
        }
        function toPx(val) {
            return toNum(val) + "px";
        }
        function toCSS(val) {
            return "number" == typeof val ? toPx(val) : isPerc(val) ? val : toPx(val);
        }
        function percOf(num, perc) {
            return parseInt(num * toNum(perc) / 100, 10);
        }
        function normalizeDimension(dim, max) {
            if ("number" == typeof dim) return dim;
            if (isPerc(dim)) return percOf(max, dim);
            if (isPx(dim)) return toNum(dim);
            throw new Error("Can not normalize dimension: " + dim);
        }
        function wrapPromise(method, _temp) {
            var _ref$timeout = (void 0 === _temp ? {} : _temp).timeout, timeout = void 0 === _ref$timeout ? 5e3 : _ref$timeout;
            var expected = [];
            var promises = [];
            return new promise_ZalgoPromise((function(resolve, reject) {
                var timer = setTimeout((function() {
                    expected.length && reject(new Error("Expected " + expected[0].name + " to be called in " + timeout + "ms"));
                    promises.length && reject(new Error("Expected " + promises[0].name + " promise to complete in " + timeout + "ms"));
                }), timeout);
                var expect = function(name, handler) {
                    void 0 === handler && (handler = src_util_noop);
                    var exp = {
                        name: name,
                        handler: handler
                    };
                    expected.push(exp);
                    return function() {
                        var _this = this;
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                        removeFromArray(expected, exp);
                        var _tryCatch = tryCatch((function() {
                            var _handler;
                            return (_handler = handler).call.apply(_handler, [ _this ].concat(args));
                        })), result = _tryCatch.result, error = _tryCatch.error;
                        if (error) {
                            promises.push({
                                name: name,
                                promise: promise_ZalgoPromise.asyncReject(error)
                            });
                            throw error;
                        }
                        promises.push({
                            name: name,
                            promise: promise_ZalgoPromise.resolve(result)
                        });
                        return result;
                    };
                };
                var avoid = function(name, fn) {
                    void 0 === fn && (fn = src_util_noop);
                    return function() {
                        var _fn;
                        promises.push({
                            name: name,
                            promise: promise_ZalgoPromise.asyncReject(new Error("Expected " + name + " to not be called"))
                        });
                        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                        return (_fn = fn).call.apply(_fn, [ this ].concat(args));
                    };
                };
                var expectError = function(name, handler) {
                    void 0 === handler && (handler = src_util_noop);
                    var exp = {
                        name: name,
                        handler: handler
                    };
                    expected.push(exp);
                    return function() {
                        var _this2 = this;
                        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
                        removeFromArray(expected, exp);
                        var _tryCatch2 = tryCatch((function() {
                            var _handler2;
                            return (_handler2 = handler).call.apply(_handler2, [ _this2 ].concat(args));
                        })), result = _tryCatch2.result, error = _tryCatch2.error;
                        if (error) throw error;
                        promises.push({
                            name: name,
                            promise: promise_ZalgoPromise.resolve(result).then((function() {
                                throw new Error("Expected " + name + " to throw an error");
                            }), src_util_noop)
                        });
                        return result;
                    };
                };
                promises.push({
                    name: "wrapPromise handler",
                    promise: promise_ZalgoPromise.try((function() {
                        return method({
                            expect: expect,
                            avoid: avoid,
                            expectError: expectError,
                            error: avoid,
                            wait: function() {
                                return promise_ZalgoPromise.resolve();
                            }
                        });
                    }))
                });
                (function wait() {
                    return promise_ZalgoPromise.try((function() {
                        if (promises.length) {
                            var prom = promises[0];
                            return prom.promise.finally((function() {
                                removeFromArray(promises, prom);
                            })).then(wait);
                        }
                    })).then((function() {
                        if (expected.length) return promise_ZalgoPromise.delay(10).then(wait);
                    }));
                })().finally((function() {
                    clearTimeout(timer);
                })).then(resolve, reject);
            }));
        }
    } ]);
}));
}(belter$1));

/* @flow */

// $FlowFixMe
var belter = belter$1.exports; // eslint-disable-line import/no-commonjs

const dom = belter;

const defaultOptions = {
	width: 400,
	height: 600,
};

/**
 * @description Open a new window
 * @param {string} url window url
 * @returns {Window} Returns window object
 */
function openPopup$1(url) {
	return dom.popup(url, defaultOptions);
}

var popup = {
	openPopup: openPopup$1,
};

function sleep$1(msec = 200) {
	return new Promise(resolve => setTimeout(resolve, msec));
}

/**
 * @typedef {import("../main").Transaction} Transaction
 */

/**
 * @typedef {import("../main").EncodedTransaction} EncodedTransaction
 */

/**
 * @description Preparate transactions before send it to the bridge.
 * This method changes all ArrayBuffer to base64.
 * @param {Transaction|EncodedTransaction} transaction Transaction provided by the user
 * @returns {any} Return the same input
 */
function prepareTxn$1(transaction) {

	if (transaction.constructor === Uint8Array)
		return buffer.Buffer.from(transaction).toString("base64");
	else if (typeof transaction === "string")
		return transaction;

	const txn = Object.assign({}, transaction);

	if (txn.note && txn.note.constructor === Uint8Array)
		txn.note = buffer.Buffer.from(txn.note).toString("base64");

	if (txn.assetMetadataHash && txn.assetMetadataHash.constructor === Uint8Array)
		txn.assetMetadataHash = buffer.Buffer.from(txn.assetMetadataHash).toString("base64");

	if (txn.group && txn.group.constructor === Uint8Array)
		txn.group = buffer.Buffer.from(txn.group).toString("base64");

	if (txn.type === "appl" && txn.appApprovalProgram && txn.appApprovalProgram.constructor === Uint8Array)
		txn.appApprovalProgram = buffer.Buffer.from(txn.appApprovalProgram).toString("base64");

	if (txn.type === "appl" && txn.appClearProgram && txn.appClearProgram.constructor === Uint8Array)
		txn.appClearProgram = buffer.Buffer.from(txn.appClearProgram).toString("base64");

	if (txn.type === "appl" && txn.appArgs && txn.appArgs.length > 0)
		for (let i = 0; i < txn.appArgs.length; i++)
			if (txn.appArgs[i].constructor === Uint8Array)
				txn.appArgs[i] = buffer.Buffer.from(txn.appArgs[i]).toString("base64");

	return txn;
}

var utils = {
	sleep: sleep$1,
	prepareTxn: prepareTxn$1,
};

const Errors$1 = {
	WINDOW_NOT_LOADED: "Window not loaded",
	WINDOW_IS_OPENED: "Windows is opened",
};

var errors = Errors$1;

class Messenger$1 {

	/**
	 * @callback onMessage
	 * @param {error} err
	 * @param {Object} result
	 */

	/**
	 * @description Callback function to send response to the window source of the message
	 * @callback sendResponse
	 * @param {Object} response Message response
	 * @returns {void}
	 */

	/**
	 * @description Callback function to manage message received from the channel
     * @callback onMessageCallback
     * @param {Object} json
	 * @param {Window} source
     * @param {sendResponse} cb
	 * @param {Messenger} bridge
	 * @returns {void}
     */

	/**
	 * @description Send message options
	 * @typedef {Object} sendMessageOptions
	 * @property {boolean} waitForReply Wait for a reply from the recipient
	 * @property {string} origin Override Window.origin
	 * @property {number} timeout Timeout to wait for reply message, default 4000 msec
	 */

	/**
     * @param {string} channelName  Channel Name
     * @param {onMessageCallback} [onMessageCallback] Callback function
     */

	constructor(channelName, onMessageCallback) {
		this.channelName = channelName;
		this.onMessage = onMessageCallback;

		this._installListener();

		/**
		 * @access private
		 * @typedef {Object.<string, onMessage>} RequestObject Request objects
		 * @type {RequestObject} _requests Mapping of request ids to callbacks
		 */
		this._requests = new Map();

		/**
		 * @access private
		 * @type {number} Next request id
		 */
		this._nextId = 0;

		/**
		 * @access private
		 * @type {number} Time to wait for the message response
		 */
		this._defaultTimeout = 4000;
	}

	/**
	 * @access private
	 */

	_installListener() {
		const that = this;

		/**
		 * @access private
		 * @param {Window} this
		 * @param {MessageEvent} event
		 */

		this._listener = function (event) {
			// Ignore invalid messages or those after the client has closed
			if (!event.data || typeof event.data !== 'string') {
				return;
			}

			let json;

			try {
				json = JSON.parse(event.data);
				if (!json.channel || json.channel !== that.channelName) {
					return;
				}
				if (typeof json.message !== 'object') {
					return;
				}
			}
			catch (err) {
				 // Ignore malformed messages or not targetting us
				return;
			}

			// Add request callback
			if (typeof json.replyId !== 'undefined') {

				if (typeof json.replyId !== 'number' || (json.replyId % 1) !== 0) {
					return;
				}

				// If we have a message waiting for a reply, process it, else ignore
				const req = that._requests.get(json.replyId);
				if (req) {
					clearTimeout(req.timeout);

					that._requests.delete(json.replyId);

					req.resolve(json.message);
				}
			}
			else {
				if (typeof json.id !== 'number' || (json.id % 1) !== 0 || !that.onMessage) {
					return;
				}

				// We received a message
				const channel = that.channelName;
				const replyId = json.id;
				const origin = event.origin;

				const replyMessage = function (message) {
					const request = {
						channel,
						replyId,
						message: message,
					};

					event.source.postMessage(
						JSON.stringify(request),
						origin
					);
				};

				that.onMessage(json.message, event.origin, event.source, replyMessage, that);
			}
		};

		window.addEventListener("message", this._listener);
	}

	/**
	 * @access public
	 * @description Send a message to another window
	 * @param {Window} targetWindow Target Window
	 * @param {Object} message Object Message
	 * @param {string} origin Target origin
	 * @param {sendMessageOptions} [options] Object Message
	 * @returns {Promise<any>} Returns
	 */
	sendMessage(targetWindow, message, origin, options) {
		// Prepare message
		const request = {
			channel: this.channelName,
			id: this.getNextId(),
			message: message,
		};

		if (options && options.waitForReply) {
			const that = this;

			return new Promise(function (resolve, reject) {
				// Set a timeout if a response is not received
				const timeout = setTimeout(function() {
					const req = that._requests.get(request.id);
					if (req) {
						that._requests.delete(request.id);

						reject(new Error('Timeout expired for the message response'));
					}
				}, options && options.timeout ? options.timeout : that._defaultTimeout);

				that._requests.set(request.id, {
					timeout,
					resolve
				});

				targetWindow.postMessage(
					JSON.stringify(request),
					origin
				);
			});

		}
		targetWindow.postMessage(
			JSON.stringify(request),
			origin
		);
	}

	/**
	 * @access public
	 * @description Close client connection
	 */

	close() {
		window.removeEventListener('message', this._listener);
		this._listener = null;
		delete this._requests;
	}

	/**
	 * @access private
	 */

	getNextId() {
		this._nextId += 1;
		return this._nextId;
	}
}

var messenger = Messenger$1;

var communicationBridge = messenger;

const Messenger = communicationBridge;

const WALLET_BRIDGE_CHANNEL_NAME = "wallet-bridge-communication-channel";

class Messaging$1 {

	/**
	 * @description Request object
	 * @typedef {Object} Request
	 * @property {string} method Request method
	 * @property {Object} [params] Optionally, request params
	 */

	/**
	 * @description Response object
	 * @typedef {Object} Response
	 * @property {"error"|"success"} status Response status
	 * @property {string} message Response message
	 * @property {Object} [data] Optionally, is the request was a success and sent data
	 */


	/**
	 * @description Callback function to manage message received from the channel
     * @callback onMessagingCallback
     * @param {Request} request Request received from another window
     * @param {sendResponse} cb Response callback
	 * @returns {void}
     */

	/**
     * @constructor Messaging constructor
     * @param {onMessagingCallback} [listenerCallback]
     * @description Create an abstraction of Messenger class
     */

	constructor(listenerCallback) {
		const that = this;

		/**
		 * @access public
		 * @description Send message options
		 * @type {import("bridge-communication").sendMessageOptions}
		 */
		this.options = { waitForReply: true, timeout: 250 };

		/**
		 * @access private
		 */
		this.listenerCallback = listenerCallback;

		/**
		 * @access private
		 * @type {Messenger}
		 */
		this.bridge = new Messenger(WALLET_BRIDGE_CHANNEL_NAME, function(req, source, cb, bridge) {
			if (that.listenerCallback)
				that.listenerCallback(req, cb);
		});
	}

	/**
	 * @access public
     * @description Send message to a target window
     * @param {Window} window Target window
     * @param {Request} request Request
     * @param {string} origin Target origin
	 * @param {import("bridge-communication").sendMessageOptions} [options] Override default message options
	 * @returns {Promise<Response>} Response of the target window
     */

	sendMessage(window, request, origin, options) {
		return this.bridge.sendMessage(window, request, origin, options ? options : this.options);
	}

	/**
	 * @access public
	 * @description Set new listener
	 * @param {onMessagingCallback} [listenerCallback] Set a new listener or override actual listener
	 * @returns {void}
	 */
	setNewListener(listenerCallback) {
		this.listenerCallback = listenerCallback;
	}

	/**
	 * @access public
	 * @description Close bridge
	 * @returns {void}
	 */
	close() {
		this.bridge.close();
	}
}

var Messaging_1 = Messaging$1;

const { openPopup } = popup;
const { sleep, prepareTxn } = utils;
const Errors = errors;

const Messaging = Messaging_1;
const bridge = new Messaging();

/**
 * @description Transaction hash
 * @typedef TxHash
 * @type {string}
 */

/**
 * @description Base64 string
 * @typedef Base64
 * @type {string}
 */

/**
  * @description Options
  * @typedef Options
  * @type {object}
  * @property {string} [bridgeUrl] Override wallet.myalgo.com default frame url.
  * @property {number} [timeout] Number of msec to wait the popup response, default value: 1600000 msec.
  */

/**
 * @description Algorand account address
 * @typedef Address
 * @type {string}
 */

/**
 * @description Payment transaction object
 * @typedef PaymentTxn
 * @type {object}
 * @property {"pay"} type Transaction type
 * @property {Address} from Sender Address
 * @property {Address} [to] Receiver Address
 * @property {number} fee Transaction fee (in mAlgos)
 * @property {number} [amount] Amount to transfer (in mAlgos)
 * @property {number} firstRound First block round
 * @property {number} lastRound Last block round
 * @property {Uint8Array|Base64} [note] Transaction note
 * @property {string} genesisID Algorand network genesis ID
 * @property {string} genesisHash Algorand network genesis hash
 * @property {Address} [reKeyTo] Change signer address
 * @property {boolean} [flatFee] flatFee (default: false)
 * @property {Buffer|Base64} [group] Group id
 * @property {Address} [closeRemainderTo] Close remainder to address
 */

/**
 * @description Asset transfer transaction object
 * @typedef AssetTransferTxn
 * @type {object}
 * @property {"axfer"} type Transaction type
 * @property {Address} from Sender Address
 * @property {Address} [to] Receiver Address
 * @property {number} fee Transaction fee (in mAlgos)
 * @property {number} [amount] Amount to transfer (in mAlgos)
 * @property {number} firstRound First block round
 * @property {number} lastRound Last block round
 * @property {Uint8Array|Base64} [note] Transaction note
 * @property {string} genesisID Algorand network genesis ID
 * @property {string} genesisHash Algorand network genesis hash
 * @property {Address} [reKeyTo] Change signer address
 * @property {boolean} [flatFee] flatFee (default: false)
 * @property {Address} [signer] Signer address
 * @property {Buffer|Base64} [group] Group id
 * @property {Address} [closeRemainderTo] Close remainder to address
 * @property {number} [assetIndex] Asset index
 * @property {Address} [assetRevocationTarget] Asset revocation address
 */

/**
 * @description Asset configuration transaction object
 * @typedef AssetConfigTxn
 * @type {object}
 * @property {"acfg"} type Transaction type
 * @property {Address} from Sender Address
 * @property {number} fee Transaction fee (in mAlgos)
 * @property {number} firstRound First block round
 * @property {number} lastRound Last block round
 * @property {Uint8Array|Base64} [note] Transaction note
 * @property {string} genesisID Algorand network genesis ID
 * @property {string} genesisHash Algorand network genesis hash
 * @property {Address} [reKeyTo] Change signer address
 * @property {boolean} [flatFee] flatFee (default: false)
 * @property {Address} [signer] Signer address
 * @property {Buffer|Base64} [group] Group id
 * @property {number} [assetIndex] Asset index
 * @property {number} [assetTotal] Asset total supply
 * @property {number} [assetDecimals] Asset decimals
 * @property {boolean} [assetDefaultFrozen] Default frozen
 * @property {Address} [assetManager] Asset manager address
 * @property {Address} [assetReserve] Asset reserve address
 * @property {Address} [assetFreeze] Asset freeze address
 * @property {Address} [assetClawback] Asset clawback address
 * @property {string} [assetUnitName] Asset unit name
 * @property {string} [assetName] Asset name
 * @property {string} [assetURL] Asset url
 * @property {string} [assetMetadataHash] Asset metadata hash
 * @property {boolean} [strictEmptyAddressChecking]
 */

/**
 * @description Key registration transaction object
 * @typedef KeyRegTxn
 * @type {object}
 * @property {"keyreg"} type Transaction type
 * @property {Address} from Sender Address
 * @property {number} fee Transaction fee (in mAlgos)
 * @property {number} firstRound First block round
 * @property {number} lastRound Last block round
 * @property {Uint8Array|Base64} [note] Transaction note
 * @property {string} genesisID Algorand network genesis ID
 * @property {string} genesisHash Algorand network genesis hash
 * @property {Address} [reKeyTo] Change signer address
 * @property {boolean} [flatFee] flatFee (default: false)
 * @property {Address} [signer] Signer address
 * @property {Buffer|Base64} [group] Group id
 * @property {string} [voteKey] Vote key
 * @property {string} [selectionKey] Selection key
 * @property {number} voteFirst Vote first round
 * @property {number} voteLast Vote last round
 * @property {number} [voteKeyDilution] Vote key dilution
 */

/**
 * @description Application call transaction object
 * @typedef ApplicationTxn
 * @type {object}
 * @property {"appl"} type Transaction type
 * @property {Address} from Sender Address
 * @property {number} fee Transaction fee (in mAlgos)
 * @property {number} firstRound First block round
 * @property {number} lastRound Last block round
 * @property {Uint8Array|Base64} [note] Transaction note
 * @property {string} genesisID Algorand network genesis ID
 * @property {string} genesisHash Algorand network genesis hash
 * @property {Address} [reKeyTo] Change signer address
 * @property {boolean} [flatFee] flatFee (default: false)
 * @property {Address} [signer] Signer address
 * @property {Buffer|Base64} [group] Group id
 * @property {number} [appIndex] Application id
 * @property {0|1|2|3|4|5} [appOnComplete]
 * @property {number} [appLocalInts]
 * @property {number} [appLocalByteSlices]
 * @property {number} [appGlobalInts]
 * @property {number} [appGlobalByteSlices]
 * @property {Uint8Array|Base64} [appApprovalProgram]
 * @property {Uint8Array|Base64} [appClearProgram]
 * @property {Uint8Array[]|Base64[]} [appArgs]
 * @property {Address[]} [appAccounts]
 * @property {number[]} [appForeignApps]
 * @property {number[]} [appForeignAssets]
 */

/**
 * @description Transaction Object
 * @typedef Transaction
 * @type {PaymentTxn | AssetTransferTxn | AssetConfigTxn | KeyRegTxn | ApplicationTxn}
 */

/**
 * @typedef EncodedTransaction
 * @type {Uint8Array|Base64} Algorand Encoded Transaction
 */

/**
 * @typedef SignedTx
 * @type {object}
 * @property {TxHash} txID Transaction hash
 * @property {Uint8Array} blob Signed transaction
 */

class MyAlgoConnect {

	/**
	 * @constructor
	 * @param {Options} [options] Operation options
	 */
	constructor(options) {

		/**
		 * @access private
		 * @type {Messaging}
		 */
		this.bridge = bridge;

		/**
		 * @access private
		 * @type {number} Popup Timeout
		 */
		this.timeout = (options && options.timeout ? options.timeout : 1600000);

		/**
		 * @access private
		 * @type {string} Frame url
		 */
		this.url = (options && options.bridgeUrl ? options.bridgeUrl : "https://wallet.myalgo.com/bridge");

		if (this.url.endsWith("/"))
			this.url = this.url.slice(0, -1);

		/**
		 * @access private
		 * @description This is used to reuse the current connect opened popup
		 * @type {Window|null}
		 */
		this.currentConnectPopup = null;

		/**
		 * @access private
		 * @description This is used to reuse the current signtx opened popup
		 * @type {Window|null}
		 */
		this.currentSigntxPopup = null;

		/**
		 * @access private
		 * @description This is used to reuse the current signlogic opened popup
		 * @type {Window|null}
		 */
		this.currentSignLogicSigPopup = null;

	}

	/**
	 * @async
	 * @access public
	 * @description Open a new window to load accounts from storage.
	 * @param {ConnectionSettings} settings Connect settings
	 * @returns {Promise<string[]>} Returns allowed accounts by the user.
	 */
	async connect(settings = { shouldSelectOneAccount: false }) {

		if (this.currentConnectPopup) {
			this.currentConnectPopup.focus();
			throw new Error(Errors.WINDOW_IS_OPENED);
		}

		try {
			this.currentConnectPopup = openPopup(this.url + "/connect.html");

			await this.waitForWindowToLoad(this.currentConnectPopup);

			const res = await this.bridge.sendMessage(
				this.currentConnectPopup, { method: "unlock", params: { shouldSelectOneAccount: settings.shouldSelectOneAccount } },
				this.url, { waitForReply: true, timeout: this.timeout }
			);

			if (this.currentConnectPopup)
				this.currentConnectPopup.close();
			this.currentConnectPopup = null;

			if (res.status === "error")
				throw new Error(res.message);

			this.currentConnectPopup = null;

			return res.data.accounts;
		}
		catch (err) {
			if (this.currentConnectPopup)
				this.currentConnectPopup.close();
			this.currentConnectPopup = null;
			throw err;
		}
	}

	/**
	 * @async
	 * @access public
	 * @description Open a new window to sign transaction.
	 * @param {Transaction|Transaction[]|EncodedTransaction|EncodedTransaction[]} transaction Transaction object or a Transaction array.
	 * (The signer account must be the same for all transactions).
	 * @returns {(SignedTx|SignedTx[])} Returns transaction blob or an Array of blobs, depends if the
	 * transaction was an object or an array.
	 */
	async signTransaction(transaction) {
		let txn;

		if (Array.isArray(transaction))
			txn = Array.from(transaction).map(tx => prepareTxn(tx));
		else
			txn = prepareTxn(transaction);

		if (this.currentSigntxPopup) {
			this.currentSigntxPopup.focus();
			throw new Error(Errors.WINDOW_IS_OPENED);
		}

		try {
			this.currentSigntxPopup = openPopup(this.url + "/signtx.html");

			await this.waitForWindowToLoad(this.currentSigntxPopup);

			// Send transaction info
			const res = await this.bridge.sendMessage(
				this.currentSigntxPopup, { method: "transaction", params: { txn } },
				this.url, { waitForReply: true, timeout: this.timeout }
			);

			if (this.currentSigntxPopup)
				this.currentSigntxPopup.close();
			this.currentSigntxPopup = null;

			if (res.status === "error")
				throw new Error(res.message);

			if (Array.isArray(res.data)) {
				const result = [];
				for (const t of res.data) {
					t.blob = new Uint8Array(buffer.Buffer.from(t.blob, "hex"));
					result.push(t);
				}
				return result;
			}

			res.data.blob = new Uint8Array(buffer.Buffer.from(res.data.blob, "hex"));

			return res.data;
		}
		catch (err) {
			if (this.currentSigntxPopup)
				this.currentSigntxPopup.close();
			this.currentSigntxPopup = null;
			throw err;
		}
	}

	/**
	 * @async
	 * @access public
	 * @description Open a new window to sign a teal program.
	 * @param {Uint8Array|Base64} logic LogicSig program
	 * @param {Address} address Signer Address
	 * @returns {Uint8Array} Returns logicsig blob
	 */
	async signLogicSig(logic, address) {

		if (this.currentSignLogicSigPopup) {
			this.currentSignLogicSigPopup.focus();
			throw new Error(Errors.WINDOW_IS_OPENED);
		}

		try {
			this.currentSignLogicSigPopup = openPopup(this.url + "/logicsigtx.html");
			await this.waitForWindowToLoad(this.currentSignLogicSigPopup);

			// Send program
			let logicInBase64 = logic;
			if (logic.constructor === Uint8Array)
				logicInBase64 = buffer.Buffer.from(logic).toString("base64");
			const res = await this.bridge.sendMessage(
				this.currentSignLogicSigPopup, { method: "logicsig", params: { logic: logicInBase64, address } },
				this.url, { waitForReply: true, timeout: this.timeout }
			);

			if (this.currentSignLogicSigPopup)
				this.currentSignLogicSigPopup.close();
			this.currentSignLogicSigPopup = null;

			if (res.status === "error")
				throw new Error(res.message);

			return new Uint8Array(buffer.Buffer.from(res.data.signedTeal, "base64"));
		}
		catch (err) {
			if (this.currentSignLogicSigPopup)
				this.currentSignLogicSigPopup.close();
			this.currentSignLogicSigPopup = null;
			throw err;
		}
	}

	/**
	 * @async
	 * @access private
	 * @description Wait until the window opened loads.
	 * @param {Window} targetWindow Window opened context.
	 * @param {number} retries Times to retry before throw an error.
	 * @returns {Promise<void>} Throw error if the window does not load.
	 */
	async waitForWindowToLoad(targetWindow, retries = 30) {
		for (let i = 0; i < retries; i++) {
			await sleep(300);
			if (!targetWindow) break;
			try {
				const res = await bridge.sendMessage(targetWindow, { method: "status" }, this.url);
				if (res.status == "success")
					return;
			}
			catch (err) {
				// Ignore error
			}
		}
		throw new Error(Errors.WINDOW_NOT_LOADED);
	}
}

var main = MyAlgoConnect;

var myalgoConnect = main;

var algosdk_min = {exports: {}};

var empty = {};

var empty$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': empty
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(empty$1);

(function (module, exports) {
!function(e,t){module.exports=t();}(self,(function(){return (()=>{var __webpack_modules__={5406:function(e){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){r.r(t),r.d(t,"encode",(function(){return B})),r.d(t,"decode",(function(){return H})),r.d(t,"decodeAsync",(function(){return $})),r.d(t,"decodeArrayStream",(function(){return X})),r.d(t,"decodeStream",(function(){return Q})),r.d(t,"Decoder",(function(){return z})),r.d(t,"Encoder",(function(){return T})),r.d(t,"ExtensionCodec",(function(){return S})),r.d(t,"ExtData",(function(){return f})),r.d(t,"EXT_TIMESTAMP",(function(){return g})),r.d(t,"encodeDateToTimeSpec",(function(){return b})),r.d(t,"encodeTimeSpecToTimestamp",(function(){return m})),r.d(t,"decodeTimestampToTimeSpec",(function(){return w})),r.d(t,"encodeTimestampExtension",(function(){return A})),r.d(t,"decodeTimestampExtension",(function(){return v}));var n=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)s.push(n.value);}catch(e){o={error:e};}finally{try{n&&!n.done&&(r=i.return)&&r.call(i);}finally{if(o)throw o.error}}return s},o=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(n(arguments[t]));return e},i="undefined"!=typeof browser$1&&"undefined"!=typeof TextEncoder&&"undefined"!=typeof TextDecoder;function s(e){for(var t=e.length,r=0,n=0;n<t;){var o=e.charCodeAt(n++);if(0!=(4294967168&o))if(0==(4294965248&o))r+=2;else {if(o>=55296&&o<=56319&&n<t){var i=e.charCodeAt(n);56320==(64512&i)&&(++n,o=((1023&o)<<10)+(1023&i)+65536);}r+=0==(4294901760&o)?3:4;}else r++;}return r}var a=i?new TextEncoder:void 0,c="undefined"!=typeof browser$1?200:0,u=(null==a?void 0:a.encodeInto)?function(e,t,r){a.encodeInto(e,t.subarray(r));}:function(e,t,r){t.set(a.encode(e),r);};function h(e,t,r){for(var n=t,i=n+r,s=[],a="";n<i;){var c=e[n++];if(0==(128&c))s.push(c);else if(192==(224&c)){var u=63&e[n++];s.push((31&c)<<6|u);}else if(224==(240&c)){u=63&e[n++];var h=63&e[n++];s.push((31&c)<<12|u<<6|h);}else if(240==(248&c)){var l=(7&c)<<18|(u=63&e[n++])<<12|(h=63&e[n++])<<6|63&e[n++];l>65535&&(l-=65536,s.push(l>>>10&1023|55296),l=56320|1023&l),s.push(l);}else s.push(c);s.length>=4096&&(a+=String.fromCharCode.apply(String,o(s)),s.length=0);}return s.length>0&&(a+=String.fromCharCode.apply(String,o(s))),a}var l=i?new TextDecoder:null,p="undefined"!=typeof browser$1?200:0,f=function(e,t){this.type=e,this.data=t;};function d(e,t,r){var n=Math.floor(r/4294967296),o=r;e.setUint32(t,n),e.setUint32(t+4,o);}function y(e,t){var r=e.getInt32(t),n=e.getUint32(t+4),o=r<Math.floor(Number.MIN_SAFE_INTEGER/4294967296)||r===Math.floor(Number.MIN_SAFE_INTEGER/4294967296)&&0===n,i=r>Math.floor(Number.MAX_SAFE_INTEGER/4294967296);return o||i?BigInt(r)*BigInt(4294967296)+BigInt(n):4294967296*r+n}var g=-1;function m(e){var t,r=e.sec,n=e.nsec;if(r>=0&&n>=0&&r<=17179869183){if(0===n&&r<=4294967295){var o=new Uint8Array(4);return (t=new DataView(o.buffer)).setUint32(0,r),o}var i=r/4294967296,s=4294967295&r;return o=new Uint8Array(8),(t=new DataView(o.buffer)).setUint32(0,n<<2|3&i),t.setUint32(4,s),o}return o=new Uint8Array(12),(t=new DataView(o.buffer)).setUint32(0,n),d(t,4,r),o}function b(e){var t=e.getTime(),r=Math.floor(t/1e3),n=1e6*(t-1e3*r),o=Math.floor(n/1e9);return {sec:r+o,nsec:n-1e9*o}}function A(e){return e instanceof Date?m(b(e)):null}function w(e){var t=new DataView(e.buffer,e.byteOffset,e.byteLength);switch(e.byteLength){case 4:return {sec:t.getUint32(0),nsec:0};case 8:var r=t.getUint32(0);return {sec:4294967296*(3&r)+t.getUint32(4),nsec:r>>>2};case 12:return {sec:y(t,4),nsec:t.getUint32(0)};default:throw new Error("Unrecognized data size for timestamp: "+e.length)}}function v(e){var t=w(e);return new Date(1e3*t.sec+t.nsec/1e6)}var x={type:g,encode:A,decode:v},S=function(){function e(){this.builtInEncoders=[],this.builtInDecoders=[],this.encoders=[],this.decoders=[],this.register(x);}return e.prototype.register=function(e){var t=e.type,r=e.encode,n=e.decode;if(t>=0)this.encoders[t]=r,this.decoders[t]=n;else {var o=1+t;this.builtInEncoders[o]=r,this.builtInDecoders[o]=n;}},e.prototype.tryToEncode=function(e,t){for(var r=0;r<this.builtInEncoders.length;r++)if(null!=(n=this.builtInEncoders[r])&&null!=(o=n(e,t)))return new f(-1-r,o);for(r=0;r<this.encoders.length;r++){var n,o;if(null!=(n=this.encoders[r])&&null!=(o=n(e,t)))return new f(r,o)}return e instanceof f?e:null},e.prototype.decode=function(e,t,r){var n=t<0?this.builtInDecoders[-1-t]:this.decoders[t];return n?n(e,t,r):new f(t,e)},e.defaultCodec=new e,e}();function E(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e instanceof ArrayBuffer?new Uint8Array(e):Uint8Array.from(e)}var _=function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return {next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},T=function(){function e(e,t,r,n,o,i,s,a){void 0===e&&(e=S.defaultCodec),void 0===t&&(t=void 0),void 0===r&&(r=100),void 0===n&&(n=2048),void 0===o&&(o=!1),void 0===i&&(i=!1),void 0===s&&(s=!1),void 0===a&&(a=!1),this.extensionCodec=e,this.context=t,this.maxDepth=r,this.initialBufferSize=n,this.sortKeys=o,this.forceFloat32=i,this.ignoreUndefined=s,this.forceIntegerToFloat=a,this.pos=0,this.view=new DataView(new ArrayBuffer(this.initialBufferSize)),this.bytes=new Uint8Array(this.view.buffer);}return e.prototype.getUint8Array=function(){return this.bytes.subarray(0,this.pos)},e.prototype.reinitializeState=function(){this.pos=0;},e.prototype.encode=function(e){return this.reinitializeState(),this.doEncode(e,1),this.getUint8Array()},e.prototype.doEncode=function(e,t){if(t>this.maxDepth)throw new Error("Too deep objects in depth "+t);null==e?this.encodeNil():"boolean"==typeof e?this.encodeBoolean(e):"number"==typeof e?this.encodeNumber(e):"string"==typeof e?this.encodeString(e):"bigint"==typeof e?this.encodebigint(e):this.encodeObject(e,t);},e.prototype.ensureBufferSizeToWrite=function(e){var t=this.pos+e;this.view.byteLength<t&&this.resizeBuffer(2*t);},e.prototype.resizeBuffer=function(e){var t=new ArrayBuffer(e),r=new Uint8Array(t),n=new DataView(t);r.set(this.bytes),this.view=n,this.bytes=r;},e.prototype.encodeNil=function(){this.writeU8(192);},e.prototype.encodeBoolean=function(e){!1===e?this.writeU8(194):this.writeU8(195);},e.prototype.encodeNumber=function(e){Number.isSafeInteger(e)&&!this.forceIntegerToFloat?e>=0?e<128?this.writeU8(e):e<256?(this.writeU8(204),this.writeU8(e)):e<65536?(this.writeU8(205),this.writeU16(e)):e<4294967296?(this.writeU8(206),this.writeU32(e)):(this.writeU8(207),this.writeU64(e)):e>=-32?this.writeU8(224|e+32):e>=-128?(this.writeU8(208),this.writeI8(e)):e>=-32768?(this.writeU8(209),this.writeI16(e)):e>=-2147483648?(this.writeU8(210),this.writeI32(e)):(this.writeU8(211),this.writeI64(e)):this.forceFloat32?(this.writeU8(202),this.writeF32(e)):(this.writeU8(203),this.writeF64(e));},e.prototype.encodebigint=function(e){e>=BigInt(0)?e<BigInt(128)?this.writeU8(Number(e)):e<BigInt(256)?(this.writeU8(204),this.writeU8(Number(e))):e<BigInt(65536)?(this.writeU8(205),this.writeU16(Number(e))):e<BigInt(4294967296)?(this.writeU8(206),this.writeU32(Number(e))):(this.writeU8(207),this.writeBig64(e)):e>=BigInt(-32)?this.writeU8(224|Number(e)+32):e>=BigInt(-128)?(this.writeU8(208),this.writeI8(Number(e))):e>=BigInt(-32768)?(this.writeU8(209),this.writeI16(Number(e))):e>=BigInt(-2147483648)?(this.writeU8(210),this.writeI32(Number(e))):(this.writeU8(211),this.writeBig64(e));},e.prototype.writeStringHeader=function(e){if(e<32)this.writeU8(160+e);else if(e<256)this.writeU8(217),this.writeU8(e);else if(e<65536)this.writeU8(218),this.writeU16(e);else {if(!(e<4294967296))throw new Error("Too long string: "+e+" bytes in UTF-8");this.writeU8(219),this.writeU32(e);}},e.prototype.encodeString=function(e){var t=e.length;if(i&&t>c){var r=s(e);this.ensureBufferSizeToWrite(5+r),this.writeStringHeader(r),u(e,this.bytes,this.pos),this.pos+=r;}else r=s(e),this.ensureBufferSizeToWrite(5+r),this.writeStringHeader(r),function(e,t,r){for(var n=e.length,o=r,i=0;i<n;){var s=e.charCodeAt(i++);if(0!=(4294967168&s)){if(0==(4294965248&s))t[o++]=s>>6&31|192;else {if(s>=55296&&s<=56319&&i<n){var a=e.charCodeAt(i);56320==(64512&a)&&(++i,s=((1023&s)<<10)+(1023&a)+65536);}0==(4294901760&s)?(t[o++]=s>>12&15|224,t[o++]=s>>6&63|128):(t[o++]=s>>18&7|240,t[o++]=s>>12&63|128,t[o++]=s>>6&63|128);}t[o++]=63&s|128;}else t[o++]=s;}}(e,this.bytes,this.pos),this.pos+=r;},e.prototype.encodeObject=function(e,t){var r=this.extensionCodec.tryToEncode(e,this.context);if(null!=r)this.encodeExtension(r);else if(Array.isArray(e))this.encodeArray(e,t);else if(ArrayBuffer.isView(e))this.encodeBinary(e);else {if("object"!=typeof e)throw new Error("Unrecognized object: "+Object.prototype.toString.apply(e));this.encodeMap(e,t);}},e.prototype.encodeBinary=function(e){var t=e.byteLength;if(t<256)this.writeU8(196),this.writeU8(t);else if(t<65536)this.writeU8(197),this.writeU16(t);else {if(!(t<4294967296))throw new Error("Too large binary: "+t);this.writeU8(198),this.writeU32(t);}var r=E(e);this.writeU8a(r);},e.prototype.encodeArray=function(e,t){var r,n,o=e.length;if(o<16)this.writeU8(144+o);else if(o<65536)this.writeU8(220),this.writeU16(o);else {if(!(o<4294967296))throw new Error("Too large array: "+o);this.writeU8(221),this.writeU32(o);}try{for(var i=_(e),s=i.next();!s.done;s=i.next()){var a=s.value;this.doEncode(a,t+1);}}catch(e){r={error:e};}finally{try{s&&!s.done&&(n=i.return)&&n.call(i);}finally{if(r)throw r.error}}},e.prototype.countWithoutUndefined=function(e,t){var r,n,o=0;try{for(var i=_(t),s=i.next();!s.done;s=i.next())void 0!==e[s.value]&&o++;}catch(e){r={error:e};}finally{try{s&&!s.done&&(n=i.return)&&n.call(i);}finally{if(r)throw r.error}}return o},e.prototype.encodeMap=function(e,t){var r,n,o=Object.keys(e);this.sortKeys&&o.sort();var i=this.ignoreUndefined?this.countWithoutUndefined(e,o):o.length;if(i<16)this.writeU8(128+i);else if(i<65536)this.writeU8(222),this.writeU16(i);else {if(!(i<4294967296))throw new Error("Too large map object: "+i);this.writeU8(223),this.writeU32(i);}try{for(var s=_(o),a=s.next();!a.done;a=s.next()){var c=a.value,u=e[c];this.ignoreUndefined&&void 0===u||(this.encodeString(c),this.doEncode(u,t+1));}}catch(e){r={error:e};}finally{try{a&&!a.done&&(n=s.return)&&n.call(s);}finally{if(r)throw r.error}}},e.prototype.encodeExtension=function(e){var t=e.data.length;if(1===t)this.writeU8(212);else if(2===t)this.writeU8(213);else if(4===t)this.writeU8(214);else if(8===t)this.writeU8(215);else if(16===t)this.writeU8(216);else if(t<256)this.writeU8(199),this.writeU8(t);else if(t<65536)this.writeU8(200),this.writeU16(t);else {if(!(t<4294967296))throw new Error("Too large extension object: "+t);this.writeU8(201),this.writeU32(t);}this.writeI8(e.type),this.writeU8a(e.data);},e.prototype.writeU8=function(e){this.ensureBufferSizeToWrite(1),this.view.setUint8(this.pos,e),this.pos++;},e.prototype.writeU8a=function(e){var t=e.length;this.ensureBufferSizeToWrite(t),this.bytes.set(e,this.pos),this.pos+=t;},e.prototype.writeI8=function(e){this.ensureBufferSizeToWrite(1),this.view.setInt8(this.pos,e),this.pos++;},e.prototype.writeU16=function(e){this.ensureBufferSizeToWrite(2),this.view.setUint16(this.pos,e),this.pos+=2;},e.prototype.writeI16=function(e){this.ensureBufferSizeToWrite(2),this.view.setInt16(this.pos,e),this.pos+=2;},e.prototype.writeU32=function(e){this.ensureBufferSizeToWrite(4),this.view.setUint32(this.pos,e),this.pos+=4;},e.prototype.writeI32=function(e){this.ensureBufferSizeToWrite(4),this.view.setInt32(this.pos,e),this.pos+=4;},e.prototype.writeF32=function(e){this.ensureBufferSizeToWrite(4),this.view.setFloat32(this.pos,e),this.pos+=4;},e.prototype.writeF64=function(e){this.ensureBufferSizeToWrite(8),this.view.setFloat64(this.pos,e),this.pos+=8;},e.prototype.writeU64=function(e){this.ensureBufferSizeToWrite(8),function(e,t,r){var n=r/4294967296,o=r;e.setUint32(t,n),e.setUint32(t+4,o);}(this.view,this.pos,e),this.pos+=8;},e.prototype.writeI64=function(e){this.ensureBufferSizeToWrite(8),d(this.view,this.pos,e),this.pos+=8;},e.prototype.writeBig64=function(e){this.ensureBufferSizeToWrite(8),function(e,t,r){var n=Number(r/BigInt(4294967296)),o=Number(r%BigInt(4294967296));n<0&&0!==o&&(n-=1),e.setUint32(t,n),e.setUint32(t+4,o);}(this.view,this.pos,e),this.pos+=8;},e}(),k={};function B(e,t){return void 0===t&&(t=k),new T(t.extensionCodec,t.context,t.maxDepth,t.initialBufferSize,t.sortKeys,t.forceFloat32,t.ignoreUndefined,t.forceIntegerToFloat).encode(e)}function U(e){return (e<0?"-":"")+"0x"+Math.abs(e).toString(16).padStart(2,"0")}var I=function(){function e(e,t){void 0===e&&(e=16),void 0===t&&(t=16),this.maxKeyLength=e,this.maxLengthPerKey=t,this.hit=0,this.miss=0,this.caches=[];for(var r=0;r<this.maxKeyLength;r++)this.caches.push([]);}return e.prototype.canBeCached=function(e){return e>0&&e<=this.maxKeyLength},e.prototype.get=function(e,t,r){var n=this.caches[r-1],o=n.length;e:for(var i=0;i<o;i++){for(var s=n[i],a=s.bytes,c=0;c<r;c++)if(a[c]!==e[t+c])continue e;return s.value}return null},e.prototype.store=function(e,t){var r=this.caches[e.length-1],n={bytes:e,value:t};r.length>=this.maxLengthPerKey?r[Math.random()*r.length|0]=n:r.push(n);},e.prototype.decode=function(e,t,r){var n=this.get(e,t,r);if(null!=n)return this.hit++,n;this.miss++;var o=h(e,t,r),i=Uint8Array.prototype.slice.call(e,t,t+r);return this.store(i,o),o},e}(),R=function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s);}catch(e){i=[6,e],n=0;}finally{r=o=0;}if(5&i[0])throw i[1];return {value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},O=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){!function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r});}),t);}(n,o,(t=e[r](t)).done,t.value);}))};}},C=function(e){return this instanceof C?(this.v=e,this):new C(e)},D=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n;function s(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||a(e,t);}))});}function a(e,t){try{(r=o[e](t)).value instanceof C?Promise.resolve(r.value.v).then(c,u):h(i[0][2],r);}catch(e){h(i[0][3],e);}var r;}function c(e){a("next",e);}function u(e){a("throw",e);}function h(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1]);}},N=new DataView(new ArrayBuffer(0)),P=new Uint8Array(N.buffer),j=function(){try{N.getInt8(0);}catch(e){return e.constructor}throw new Error("never reached")}(),F=new j("Insufficient data"),L=new I,z=function(){function e(e,t,r,n,o,i,s,a){void 0===e&&(e=S.defaultCodec),void 0===t&&(t=void 0),void 0===r&&(r=4294967295),void 0===n&&(n=4294967295),void 0===o&&(o=4294967295),void 0===i&&(i=4294967295),void 0===s&&(s=4294967295),void 0===a&&(a=L),this.extensionCodec=e,this.context=t,this.maxStrLength=r,this.maxBinLength=n,this.maxArrayLength=o,this.maxMapLength=i,this.maxExtLength=s,this.keyDecoder=a,this.totalPos=0,this.pos=0,this.view=N,this.bytes=P,this.headByte=-1,this.stack=[];}return e.prototype.reinitializeState=function(){this.totalPos=0,this.headByte=-1;},e.prototype.setBuffer=function(e){this.bytes=E(e),this.view=function(e){if(e instanceof ArrayBuffer)return new DataView(e);var t=E(e);return new DataView(t.buffer,t.byteOffset,t.byteLength)}(this.bytes),this.pos=0;},e.prototype.appendBuffer=function(e){if(-1!==this.headByte||this.hasRemaining()){var t=this.bytes.subarray(this.pos),r=E(e),n=new Uint8Array(t.length+r.length);n.set(t),n.set(r,t.length),this.setBuffer(n);}else this.setBuffer(e);},e.prototype.hasRemaining=function(e){return void 0===e&&(e=1),this.view.byteLength-this.pos>=e},e.prototype.createNoExtraBytesError=function(e){var t=this.view,r=this.pos;return new RangeError("Extra "+(t.byteLength-r)+" of "+t.byteLength+" byte(s) found at buffer["+e+"]")},e.prototype.decode=function(e){return this.reinitializeState(),this.setBuffer(e),this.doDecodeSingleSync()},e.prototype.doDecodeSingleSync=function(){var e=this.doDecodeSync();if(this.hasRemaining())throw this.createNoExtraBytesError(this.pos);return e},e.prototype.decodeAsync=function(e){var t,r,n,o;return function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e));}catch(e){i(e);}}function a(e){try{c(n.throw(e));}catch(e){i(e);}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t);}))).then(s,a);}c((n=n.apply(e,t||[])).next());}))}(this,void 0,void 0,(function(){var i,s,a,c,u,h,l,p;return R(this,(function(f){switch(f.label){case 0:i=!1,f.label=1;case 1:f.trys.push([1,6,7,12]),t=O(e),f.label=2;case 2:return [4,t.next()];case 3:if((r=f.sent()).done)return [3,5];if(a=r.value,i)throw this.createNoExtraBytesError(this.totalPos);this.appendBuffer(a);try{s=this.doDecodeSync(),i=!0;}catch(e){if(!(e instanceof j))throw e}this.totalPos+=this.pos,f.label=4;case 4:return [3,2];case 5:return [3,12];case 6:return c=f.sent(),n={error:c},[3,12];case 7:return f.trys.push([7,,10,11]),r&&!r.done&&(o=t.return)?[4,o.call(t)]:[3,9];case 8:f.sent(),f.label=9;case 9:return [3,11];case 10:if(n)throw n.error;return [7];case 11:return [7];case 12:if(i){if(this.hasRemaining())throw this.createNoExtraBytesError(this.totalPos);return [2,s]}throw h=(u=this).headByte,l=u.pos,p=u.totalPos,new RangeError("Insufficient data in parcing "+U(h)+" at "+p+" ("+l+" in the current buffer)")}}))}))},e.prototype.decodeArrayStream=function(e){return this.decodeMultiAsync(e,!0)},e.prototype.decodeStream=function(e){return this.decodeMultiAsync(e,!1)},e.prototype.decodeMultiAsync=function(e,t){return D(this,arguments,(function(){var r,n,o,i,s,a,c,u,h;return R(this,(function(l){switch(l.label){case 0:r=t,n=-1,l.label=1;case 1:l.trys.push([1,13,14,19]),o=O(e),l.label=2;case 2:return [4,C(o.next())];case 3:if((i=l.sent()).done)return [3,12];if(s=i.value,t&&0===n)throw this.createNoExtraBytesError(this.totalPos);this.appendBuffer(s),r&&(n=this.readArraySize(),r=!1,this.complete()),l.label=4;case 4:l.trys.push([4,9,,10]),l.label=5;case 5:return [4,C(this.doDecodeSync())];case 6:return [4,l.sent()];case 7:return l.sent(),0==--n?[3,8]:[3,5];case 8:return [3,10];case 9:if(!((a=l.sent())instanceof j))throw a;return [3,10];case 10:this.totalPos+=this.pos,l.label=11;case 11:return [3,2];case 12:return [3,19];case 13:return c=l.sent(),u={error:c},[3,19];case 14:return l.trys.push([14,,17,18]),i&&!i.done&&(h=o.return)?[4,C(h.call(o))]:[3,16];case 15:l.sent(),l.label=16;case 16:return [3,18];case 17:if(u)throw u.error;return [7];case 18:return [7];case 19:return [2]}}))}))},e.prototype.doDecodeSync=function(){e:for(;;){var e=this.readHeadByte(),t=void 0;if(e>=224)t=e-256;else if(e<192)if(e<128)t=e;else if(e<144){if(0!=(n=e-128)){this.pushMapState(n),this.complete();continue e}t={};}else if(e<160){if(0!=(n=e-144)){this.pushArrayState(n),this.complete();continue e}t=[];}else {var r=e-160;t=this.decodeUtf8String(r,0);}else if(192===e)t=null;else if(194===e)t=!1;else if(195===e)t=!0;else if(202===e)t=this.readF32();else if(203===e)t=this.readF64();else if(204===e)t=this.readU8();else if(205===e)t=this.readU16();else if(206===e)t=this.readU32();else if(207===e)t=this.readU64();else if(208===e)t=this.readI8();else if(209===e)t=this.readI16();else if(210===e)t=this.readI32();else if(211===e)t=this.readI64();else if(217===e)r=this.lookU8(),t=this.decodeUtf8String(r,1);else if(218===e)r=this.lookU16(),t=this.decodeUtf8String(r,2);else if(219===e)r=this.lookU32(),t=this.decodeUtf8String(r,4);else if(220===e){if(0!==(n=this.readU16())){this.pushArrayState(n),this.complete();continue e}t=[];}else if(221===e){if(0!==(n=this.readU32())){this.pushArrayState(n),this.complete();continue e}t=[];}else if(222===e){if(0!==(n=this.readU16())){this.pushMapState(n),this.complete();continue e}t={};}else if(223===e){if(0!==(n=this.readU32())){this.pushMapState(n),this.complete();continue e}t={};}else if(196===e){var n=this.lookU8();t=this.decodeBinary(n,1);}else if(197===e)n=this.lookU16(),t=this.decodeBinary(n,2);else if(198===e)n=this.lookU32(),t=this.decodeBinary(n,4);else if(212===e)t=this.decodeExtension(1,0);else if(213===e)t=this.decodeExtension(2,0);else if(214===e)t=this.decodeExtension(4,0);else if(215===e)t=this.decodeExtension(8,0);else if(216===e)t=this.decodeExtension(16,0);else if(199===e)n=this.lookU8(),t=this.decodeExtension(n,1);else if(200===e)n=this.lookU16(),t=this.decodeExtension(n,2);else {if(201!==e)throw new Error("Unrecognized type byte: "+U(e));n=this.lookU32(),t=this.decodeExtension(n,4);}this.complete();for(var o=this.stack;o.length>0;){var i=o[o.length-1];if(0===i.type){if(i.array[i.position]=t,i.position++,i.position!==i.size)continue e;o.pop(),t=i.array;}else {if(1===i.type){if("string"!=(s=typeof t)&&"number"!==s)throw new Error("The type of key must be string or number but "+typeof t);i.key=t,i.type=2;continue e}if(i.map[i.key]=t,i.readCount++,i.readCount!==i.size){i.key=null,i.type=1;continue e}o.pop(),t=i.map;}}return t}var s;},e.prototype.readHeadByte=function(){return -1===this.headByte&&(this.headByte=this.readU8()),this.headByte},e.prototype.complete=function(){this.headByte=-1;},e.prototype.readArraySize=function(){var e=this.readHeadByte();switch(e){case 220:return this.readU16();case 221:return this.readU32();default:if(e<160)return e-144;throw new Error("Unrecognized array type byte: "+U(e))}},e.prototype.pushMapState=function(e){if(e>this.maxMapLength)throw new Error("Max length exceeded: map length ("+e+") > maxMapLengthLength ("+this.maxMapLength+")");this.stack.push({type:1,size:e,key:null,readCount:0,map:{}});},e.prototype.pushArrayState=function(e){if(e>this.maxArrayLength)throw new Error("Max length exceeded: array length ("+e+") > maxArrayLength ("+this.maxArrayLength+")");this.stack.push({type:0,size:e,array:new Array(e),position:0});},e.prototype.decodeUtf8String=function(e,t){var r;if(e>this.maxStrLength)throw new Error("Max length exceeded: UTF-8 byte length ("+e+") > maxStrLength ("+this.maxStrLength+")");if(this.bytes.byteLength<this.pos+t+e)throw F;var n,o=this.pos+t;return n=this.stateIsMapKey()&&(null===(r=this.keyDecoder)||void 0===r?void 0:r.canBeCached(e))?this.keyDecoder.decode(this.bytes,o,e):i&&e>p?function(e,t,r){var n=e.subarray(t,t+r);return l.decode(n)}(this.bytes,o,e):h(this.bytes,o,e),this.pos+=t+e,n},e.prototype.stateIsMapKey=function(){return this.stack.length>0&&1===this.stack[this.stack.length-1].type},e.prototype.decodeBinary=function(e,t){if(e>this.maxBinLength)throw new Error("Max length exceeded: bin length ("+e+") > maxBinLength ("+this.maxBinLength+")");if(!this.hasRemaining(e+t))throw F;var r=this.pos+t,n=this.bytes.subarray(r,r+e);return this.pos+=t+e,n},e.prototype.decodeExtension=function(e,t){if(e>this.maxExtLength)throw new Error("Max length exceeded: ext length ("+e+") > maxExtLength ("+this.maxExtLength+")");var r=this.view.getInt8(this.pos+t),n=this.decodeBinary(e,t+1);return this.extensionCodec.decode(n,r,this.context)},e.prototype.lookU8=function(){return this.view.getUint8(this.pos)},e.prototype.lookU16=function(){return this.view.getUint16(this.pos)},e.prototype.lookU32=function(){return this.view.getUint32(this.pos)},e.prototype.readU8=function(){var e=this.view.getUint8(this.pos);return this.pos++,e},e.prototype.readI8=function(){var e=this.view.getInt8(this.pos);return this.pos++,e},e.prototype.readU16=function(){var e=this.view.getUint16(this.pos);return this.pos+=2,e},e.prototype.readI16=function(){var e=this.view.getInt16(this.pos);return this.pos+=2,e},e.prototype.readU32=function(){var e=this.view.getUint32(this.pos);return this.pos+=4,e},e.prototype.readI32=function(){var e=this.view.getInt32(this.pos);return this.pos+=4,e},e.prototype.readU64=function(){var e,t,r,n,o=(e=this.view,t=this.pos,r=e.getUint32(t),n=e.getUint32(t+4),r>Math.floor(Number.MAX_SAFE_INTEGER/4294967296)?BigInt(r)*BigInt(4294967296)+BigInt(n):4294967296*r+n);return this.pos+=8,o},e.prototype.readI64=function(){var e=y(this.view,this.pos);return this.pos+=8,e},e.prototype.readF32=function(){var e=this.view.getFloat32(this.pos);return this.pos+=4,e},e.prototype.readF64=function(){var e=this.view.getFloat64(this.pos);return this.pos+=8,e},e}(),M={};function H(e,t){return void 0===t&&(t=M),new z(t.extensionCodec,t.context,t.maxStrLength,t.maxBinLength,t.maxArrayLength,t.maxMapLength,t.maxExtLength).decode(e)}var G=function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s);}catch(e){i=[6,e],n=0;}finally{r=o=0;}if(5&i[0])throw i[1];return {value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},K=function(e){return this instanceof K?(this.v=e,this):new K(e)},q=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n;function s(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||a(e,t);}))});}function a(e,t){try{(r=o[e](t)).value instanceof K?Promise.resolve(r.value.v).then(c,u):h(i[0][2],r);}catch(e){h(i[0][3],e);}var r;}function c(e){a("next",e);}function u(e){a("throw",e);}function h(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1]);}};function V(e){if(null==e)throw new Error("Assertion Failure: value must not be null nor undefined")}function W(e){return null!=e[Symbol.asyncIterator]?e:function(e){return q(this,arguments,(function(){var t,r,n,o;return G(this,(function(i){switch(i.label){case 0:t=e.getReader(),i.label=1;case 1:i.trys.push([1,,9,10]),i.label=2;case 2:return [4,K(t.read())];case 3:return r=i.sent(),n=r.done,o=r.value,n?[4,K(void 0)]:[3,5];case 4:return [2,i.sent()];case 5:return V(o),[4,K(o)];case 6:return [4,i.sent()];case 7:return i.sent(),[3,2];case 8:return [3,10];case 9:return t.releaseLock(),[7];case 10:return [2]}}))}))}(e)}function $(e,t){return void 0===t&&(t=M),function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e));}catch(e){i(e);}}function a(e){try{c(n.throw(e));}catch(e){i(e);}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t);}))).then(s,a);}c((n=n.apply(e,t||[])).next());}))}(this,void 0,void 0,(function(){var r;return function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s);}catch(e){i=[6,e],n=0;}finally{r=o=0;}if(5&i[0])throw i[1];return {value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(n){return r=W(e),[2,new z(t.extensionCodec,t.context,t.maxStrLength,t.maxBinLength,t.maxArrayLength,t.maxMapLength,t.maxExtLength).decodeAsync(r)]}))}))}function X(e,t){void 0===t&&(t=M);var r=W(e);return new z(t.extensionCodec,t.context,t.maxStrLength,t.maxBinLength,t.maxArrayLength,t.maxMapLength,t.maxExtLength).decodeArrayStream(r)}function Q(e,t){void 0===t&&(t=M);var r=W(e);return new z(t.extensionCodec,t.context,t.maxStrLength,t.maxBinLength,t.maxArrayLength,t.maxMapLength,t.maxExtLength).decodeStream(r)}}]);},5155:(e,t)=>{t.byteLength=function(e){var t=c(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,i=c(e),s=i[0],a=i[1],u=new o(function(e,t,r){return 3*(t+r)/4-r}(0,s,a)),h=0,l=a>0?s-4:s;for(r=0;r<l;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],u[h++]=t>>16&255,u[h++]=t>>8&255,u[h++]=255&t;return 2===a&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,u[h++]=255&t),1===a&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,u[h++]=t>>8&255,u[h++]=255&t),u},t.fromByteArray=function(e){for(var t,n=e.length,o=n%3,i=[],s=16383,a=0,c=n-o;a<c;a+=s)i.push(u(e,a,a+s>c?c:a+s));return 1===o?(t=e[n-1],i.push(r[t>>2]+r[t<<4&63]+"==")):2===o&&(t=(e[n-2]<<8)+e[n-1],i.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"=")),i.join("")};for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,a=i.length;s<a;++s)r[s]=i[s],n[i.charCodeAt(s)]=s;function c(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return -1===r&&(r=t),[r,r===t?0:4-r%4]}function u(e,t,n){for(var o,i,s=[],a=t;a<n;a+=3)o=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return s.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63;},5117:function(e,t,r){var n;!function(o){var i,s=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,a=Math.ceil,c=Math.floor,u="[BigNumber Error] ",h=u+"Number primitive has more than 15 significant digits: ",l=1e14,p=14,f=9007199254740991,d=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],y=1e7,g=1e9;function m(e){var t=0|e;return e>0||e===t?t:t-1}function b(e){for(var t,r,n=1,o=e.length,i=e[0]+"";n<o;){for(t=e[n++]+"",r=p-t.length;r--;t="0"+t);i+=t;}for(o=i.length;48===i.charCodeAt(--o););return i.slice(0,o+1||1)}function A(e,t){var r,n,o=e.c,i=t.c,s=e.s,a=t.s,c=e.e,u=t.e;if(!s||!a)return null;if(r=o&&!o[0],n=i&&!i[0],r||n)return r?n?0:-a:s;if(s!=a)return s;if(r=s<0,n=c==u,!o||!i)return n?0:!o^r?1:-1;if(!n)return c>u^r?1:-1;for(a=(c=o.length)<(u=i.length)?c:u,s=0;s<a;s++)if(o[s]!=i[s])return o[s]>i[s]^r?1:-1;return c==u?0:c>u^r?1:-1}function w(e,t,r,n){if(e<t||e>r||e!==c(e))throw Error(u+(n||"Argument")+("number"==typeof e?e<t||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function v(e){var t=e.c.length-1;return m(e.e/p)==t&&e.c[t]%2!=0}function x(e,t){return (e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function S(e,t,r){var n,o;if(t<0){for(o=r+".";++t;o+=r);e=o+e;}else if(++t>(n=e.length)){for(o=r,t-=n;--t;o+=r);e+=o;}else t<n&&(e=e.slice(0,t)+"."+e.slice(t));return e}(i=function e(t){var r,n,o,i,E,_,T,k,B,U,I=G.prototype={constructor:G,toString:null,valueOf:null},R=new G(1),O=20,C=4,D=-7,N=21,P=-1e7,j=1e7,F=!1,L=1,z=0,M={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},H="0123456789abcdefghijklmnopqrstuvwxyz";function G(e,t){var r,i,a,u,l,d,y,g,m=this;if(!(m instanceof G))return new G(e,t);if(null==t){if(e&&!0===e._isBigNumber)return m.s=e.s,void(!e.c||e.e>j?m.c=m.e=null:e.e<P?m.c=[m.e=0]:(m.e=e.e,m.c=e.c.slice()));if((d="number"==typeof e)&&0*e==0){if(m.s=1/e<0?(e=-e,-1):1,e===~~e){for(u=0,l=e;l>=10;l/=10,u++);return void(u>j?m.c=m.e=null:(m.e=u,m.c=[e]))}g=String(e);}else {if(!s.test(g=String(e)))return o(m,g,d);m.s=45==g.charCodeAt(0)?(g=g.slice(1),-1):1;}(u=g.indexOf("."))>-1&&(g=g.replace(".","")),(l=g.search(/e/i))>0?(u<0&&(u=l),u+=+g.slice(l+1),g=g.substring(0,l)):u<0&&(u=g.length);}else {if(w(t,2,H.length,"Base"),10==t)return W(m=new G(e),O+m.e+1,C);if(g=String(e),d="number"==typeof e){if(0*e!=0)return o(m,g,d,t);if(m.s=1/e<0?(g=g.slice(1),-1):1,G.DEBUG&&g.replace(/^0\.0*|\./,"").length>15)throw Error(h+e)}else m.s=45===g.charCodeAt(0)?(g=g.slice(1),-1):1;for(r=H.slice(0,t),u=l=0,y=g.length;l<y;l++)if(r.indexOf(i=g.charAt(l))<0){if("."==i){if(l>u){u=y;continue}}else if(!a&&(g==g.toUpperCase()&&(g=g.toLowerCase())||g==g.toLowerCase()&&(g=g.toUpperCase()))){a=!0,l=-1,u=0;continue}return o(m,String(e),d,t)}d=!1,(u=(g=n(g,t,10,m.s)).indexOf("."))>-1?g=g.replace(".",""):u=g.length;}for(l=0;48===g.charCodeAt(l);l++);for(y=g.length;48===g.charCodeAt(--y););if(g=g.slice(l,++y)){if(y-=l,d&&G.DEBUG&&y>15&&(e>f||e!==c(e)))throw Error(h+m.s*e);if((u=u-l-1)>j)m.c=m.e=null;else if(u<P)m.c=[m.e=0];else {if(m.e=u,m.c=[],l=(u+1)%p,u<0&&(l+=p),l<y){for(l&&m.c.push(+g.slice(0,l)),y-=p;l<y;)m.c.push(+g.slice(l,l+=p));l=p-(g=g.slice(l)).length;}else l-=y;for(;l--;g+="0");m.c.push(+g);}}else m.c=[m.e=0];}function K(e,t,r,n){var o,i,s,a,c;if(null==r?r=C:w(r,0,8),!e.c)return e.toString();if(o=e.c[0],s=e.e,null==t)c=b(e.c),c=1==n||2==n&&(s<=D||s>=N)?x(c,s):S(c,s,"0");else if(i=(e=W(new G(e),t,r)).e,a=(c=b(e.c)).length,1==n||2==n&&(t<=i||i<=D)){for(;a<t;c+="0",a++);c=x(c,i);}else if(t-=s,c=S(c,i,"0"),i+1>a){if(--t>0)for(c+=".";t--;c+="0");}else if((t+=i-a)>0)for(i+1==a&&(c+=".");t--;c+="0");return e.s<0&&o?"-"+c:c}function q(e,t){for(var r,n=1,o=new G(e[0]);n<e.length;n++){if(!(r=new G(e[n])).s){o=r;break}t.call(o,r)&&(o=r);}return o}function V(e,t,r){for(var n=1,o=t.length;!t[--o];t.pop());for(o=t[0];o>=10;o/=10,n++);return (r=n+r*p-1)>j?e.c=e.e=null:r<P?e.c=[e.e=0]:(e.e=r,e.c=t),e}function W(e,t,r,n){var o,i,s,u,h,f,y,g=e.c,m=d;if(g){e:{for(o=1,u=g[0];u>=10;u/=10,o++);if((i=t-o)<0)i+=p,s=t,y=(h=g[f=0])/m[o-s-1]%10|0;else if((f=a((i+1)/p))>=g.length){if(!n)break e;for(;g.length<=f;g.push(0));h=y=0,o=1,s=(i%=p)-p+1;}else {for(h=u=g[f],o=1;u>=10;u/=10,o++);y=(s=(i%=p)-p+o)<0?0:h/m[o-s-1]%10|0;}if(n=n||t<0||null!=g[f+1]||(s<0?h:h%m[o-s-1]),n=r<4?(y||n)&&(0==r||r==(e.s<0?3:2)):y>5||5==y&&(4==r||n||6==r&&(i>0?s>0?h/m[o-s]:0:g[f-1])%10&1||r==(e.s<0?8:7)),t<1||!g[0])return g.length=0,n?(t-=e.e+1,g[0]=m[(p-t%p)%p],e.e=-t||0):g[0]=e.e=0,e;if(0==i?(g.length=f,u=1,f--):(g.length=f+1,u=m[p-i],g[f]=s>0?c(h/m[o-s]%m[s])*u:0),n)for(;;){if(0==f){for(i=1,s=g[0];s>=10;s/=10,i++);for(s=g[0]+=u,u=1;s>=10;s/=10,u++);i!=u&&(e.e++,g[0]==l&&(g[0]=1));break}if(g[f]+=u,g[f]!=l)break;g[f--]=0,u=1;}for(i=g.length;0===g[--i];g.pop());}e.e>j?e.c=e.e=null:e.e<P&&(e.c=[e.e=0]);}return e}function $(e){var t,r=e.e;return null===r?e.toString():(t=b(e.c),t=r<=D||r>=N?x(t,r):S(t,r,"0"),e.s<0?"-"+t:t)}return G.clone=e,G.ROUND_UP=0,G.ROUND_DOWN=1,G.ROUND_CEIL=2,G.ROUND_FLOOR=3,G.ROUND_HALF_UP=4,G.ROUND_HALF_DOWN=5,G.ROUND_HALF_EVEN=6,G.ROUND_HALF_CEIL=7,G.ROUND_HALF_FLOOR=8,G.EUCLID=9,G.config=G.set=function(e){var t,r;if(null!=e){if("object"!=typeof e)throw Error(u+"Object expected: "+e);if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(w(r=e[t],0,g,t),O=r),e.hasOwnProperty(t="ROUNDING_MODE")&&(w(r=e[t],0,8,t),C=r),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((r=e[t])&&r.pop?(w(r[0],-g,0,t),w(r[1],0,g,t),D=r[0],N=r[1]):(w(r,-g,g,t),D=-(N=r<0?-r:r))),e.hasOwnProperty(t="RANGE"))if((r=e[t])&&r.pop)w(r[0],-g,-1,t),w(r[1],1,g,t),P=r[0],j=r[1];else {if(w(r,-g,g,t),!r)throw Error(u+t+" cannot be zero: "+r);P=-(j=r<0?-r:r);}if(e.hasOwnProperty(t="CRYPTO")){if((r=e[t])!==!!r)throw Error(u+t+" not true or false: "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw F=!r,Error(u+"crypto unavailable");F=r;}else F=r;}if(e.hasOwnProperty(t="MODULO_MODE")&&(w(r=e[t],0,9,t),L=r),e.hasOwnProperty(t="POW_PRECISION")&&(w(r=e[t],0,g,t),z=r),e.hasOwnProperty(t="FORMAT")){if("object"!=typeof(r=e[t]))throw Error(u+t+" not an object: "+r);M=r;}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(r=e[t])||/^.?$|[+\-.\s]|(.).*\1/.test(r))throw Error(u+t+" invalid: "+r);H=r;}}return {DECIMAL_PLACES:O,ROUNDING_MODE:C,EXPONENTIAL_AT:[D,N],RANGE:[P,j],CRYPTO:F,MODULO_MODE:L,POW_PRECISION:z,FORMAT:M,ALPHABET:H}},G.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return !1;if(!G.DEBUG)return !0;var t,r,n=e.c,o=e.e,i=e.s;e:if("[object Array]"=={}.toString.call(n)){if((1===i||-1===i)&&o>=-g&&o<=g&&o===c(o)){if(0===n[0]){if(0===o&&1===n.length)return !0;break e}if((t=(o+1)%p)<1&&(t+=p),String(n[0]).length==t){for(t=0;t<n.length;t++)if((r=n[t])<0||r>=l||r!==c(r))break e;if(0!==r)return !0}}}else if(null===n&&null===o&&(null===i||1===i||-1===i))return !0;throw Error(u+"Invalid BigNumber: "+e)},G.maximum=G.max=function(){return q(arguments,I.lt)},G.minimum=G.min=function(){return q(arguments,I.gt)},G.random=(i=9007199254740992,E=Math.random()*i&2097151?function(){return c(Math.random()*i)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var t,r,n,o,i,s=0,h=[],l=new G(R);if(null==e?e=O:w(e,0,g),o=a(e/p),F)if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(o*=2));s<o;)(i=131072*t[s]+(t[s+1]>>>11))>=9e15?(r=crypto.getRandomValues(new Uint32Array(2)),t[s]=r[0],t[s+1]=r[1]):(h.push(i%1e14),s+=2);s=o/2;}else {if(!crypto.randomBytes)throw F=!1,Error(u+"crypto unavailable");for(t=crypto.randomBytes(o*=7);s<o;)(i=281474976710656*(31&t[s])+1099511627776*t[s+1]+4294967296*t[s+2]+16777216*t[s+3]+(t[s+4]<<16)+(t[s+5]<<8)+t[s+6])>=9e15?crypto.randomBytes(7).copy(t,s):(h.push(i%1e14),s+=7);s=o/7;}if(!F)for(;s<o;)(i=E())<9e15&&(h[s++]=i%1e14);for(o=h[--s],e%=p,o&&e&&(i=d[p-e],h[s]=c(o/i)*i);0===h[s];h.pop(),s--);if(s<0)h=[n=0];else {for(n=-1;0===h[0];h.splice(0,1),n-=p);for(s=1,i=h[0];i>=10;i/=10,s++);s<p&&(n-=p-s);}return l.e=n,l.c=h,l}),G.sum=function(){for(var e=1,t=arguments,r=new G(t[0]);e<t.length;)r=r.plus(t[e++]);return r},n=function(){var e="0123456789";function t(e,t,r,n){for(var o,i,s=[0],a=0,c=e.length;a<c;){for(i=s.length;i--;s[i]*=t);for(s[0]+=n.indexOf(e.charAt(a++)),o=0;o<s.length;o++)s[o]>r-1&&(null==s[o+1]&&(s[o+1]=0),s[o+1]+=s[o]/r|0,s[o]%=r);}return s.reverse()}return function(n,o,i,s,a){var c,u,h,l,p,f,d,y,g=n.indexOf("."),m=O,A=C;for(g>=0&&(l=z,z=0,n=n.replace(".",""),f=(y=new G(o)).pow(n.length-g),z=l,y.c=t(S(b(f.c),f.e,"0"),10,i,e),y.e=y.c.length),h=l=(d=t(n,o,i,a?(c=H,e):(c=e,H))).length;0==d[--l];d.pop());if(!d[0])return c.charAt(0);if(g<0?--h:(f.c=d,f.e=h,f.s=s,d=(f=r(f,y,m,A,i)).c,p=f.r,h=f.e),g=d[u=h+m+1],l=i/2,p=p||u<0||null!=d[u+1],p=A<4?(null!=g||p)&&(0==A||A==(f.s<0?3:2)):g>l||g==l&&(4==A||p||6==A&&1&d[u-1]||A==(f.s<0?8:7)),u<1||!d[0])n=p?S(c.charAt(1),-m,c.charAt(0)):c.charAt(0);else {if(d.length=u,p)for(--i;++d[--u]>i;)d[u]=0,u||(++h,d=[1].concat(d));for(l=d.length;!d[--l];);for(g=0,n="";g<=l;n+=c.charAt(d[g++]));n=S(n,h,c.charAt(0));}return n}}(),r=function(){function e(e,t,r){var n,o,i,s,a=0,c=e.length,u=t%y,h=t/y|0;for(e=e.slice();c--;)a=((o=u*(i=e[c]%y)+(n=h*i+(s=e[c]/y|0)*u)%y*y+a)/r|0)+(n/y|0)+h*s,e[c]=o%r;return a&&(e=[a].concat(e)),e}function t(e,t,r,n){var o,i;if(r!=n)i=r>n?1:-1;else for(o=i=0;o<r;o++)if(e[o]!=t[o]){i=e[o]>t[o]?1:-1;break}return i}function r(e,t,r,n){for(var o=0;r--;)e[r]-=o,o=e[r]<t[r]?1:0,e[r]=o*n+e[r]-t[r];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(n,o,i,s,a){var u,h,f,d,y,g,b,A,w,v,x,S,E,_,T,k,B,U=n.s==o.s?1:-1,I=n.c,R=o.c;if(!(I&&I[0]&&R&&R[0]))return new G(n.s&&o.s&&(I?!R||I[0]!=R[0]:R)?I&&0==I[0]||!R?0*U:U/0:NaN);for(w=(A=new G(U)).c=[],U=i+(h=n.e-o.e)+1,a||(a=l,h=m(n.e/p)-m(o.e/p),U=U/p|0),f=0;R[f]==(I[f]||0);f++);if(R[f]>(I[f]||0)&&h--,U<0)w.push(1),d=!0;else {for(_=I.length,k=R.length,f=0,U+=2,(y=c(a/(R[0]+1)))>1&&(R=e(R,y,a),I=e(I,y,a),k=R.length,_=I.length),E=k,x=(v=I.slice(0,k)).length;x<k;v[x++]=0);B=R.slice(),B=[0].concat(B),T=R[0],R[1]>=a/2&&T++;do{if(y=0,(u=t(R,v,k,x))<0){if(S=v[0],k!=x&&(S=S*a+(v[1]||0)),(y=c(S/T))>1)for(y>=a&&(y=a-1),b=(g=e(R,y,a)).length,x=v.length;1==t(g,v,b,x);)y--,r(g,k<b?B:R,b,a),b=g.length,u=1;else 0==y&&(u=y=1),b=(g=R.slice()).length;if(b<x&&(g=[0].concat(g)),r(v,g,x,a),x=v.length,-1==u)for(;t(R,v,k,x)<1;)y++,r(v,k<x?B:R,x,a),x=v.length;}else 0===u&&(y++,v=[0]);w[f++]=y,v[0]?v[x++]=I[E]||0:(v=[I[E]],x=1);}while((E++<_||null!=v[0])&&U--);d=null!=v[0],w[0]||w.splice(0,1);}if(a==l){for(f=1,U=w[0];U>=10;U/=10,f++);W(A,i+(A.e=f+h*p-1)+1,s,d);}else A.e=h,A.r=+d;return A}}(),_=/^(-?)0([xbo])(?=\w[\w.]*$)/i,T=/^([^.]+)\.$/,k=/^\.([^.]+)$/,B=/^-?(Infinity|NaN)$/,U=/^\s*\+(?=[\w.])|^\s+|\s+$/g,o=function(e,t,r,n){var o,i=r?t:t.replace(U,"");if(B.test(i))e.s=isNaN(i)?null:i<0?-1:1;else {if(!r&&(i=i.replace(_,(function(e,t,r){return o="x"==(r=r.toLowerCase())?16:"b"==r?2:8,n&&n!=o?e:t})),n&&(o=n,i=i.replace(T,"$1").replace(k,"0.$1")),t!=i))return new G(i,o);if(G.DEBUG)throw Error(u+"Not a"+(n?" base "+n:"")+" number: "+t);e.s=null;}e.c=e.e=null;},I.absoluteValue=I.abs=function(){var e=new G(this);return e.s<0&&(e.s=1),e},I.comparedTo=function(e,t){return A(this,new G(e,t))},I.decimalPlaces=I.dp=function(e,t){var r,n,o,i=this;if(null!=e)return w(e,0,g),null==t?t=C:w(t,0,8),W(new G(i),e+i.e+1,t);if(!(r=i.c))return null;if(n=((o=r.length-1)-m(this.e/p))*p,o=r[o])for(;o%10==0;o/=10,n--);return n<0&&(n=0),n},I.dividedBy=I.div=function(e,t){return r(this,new G(e,t),O,C)},I.dividedToIntegerBy=I.idiv=function(e,t){return r(this,new G(e,t),0,1)},I.exponentiatedBy=I.pow=function(e,t){var r,n,o,i,s,h,l,f,d=this;if((e=new G(e)).c&&!e.isInteger())throw Error(u+"Exponent not an integer: "+$(e));if(null!=t&&(t=new G(t)),s=e.e>14,!d.c||!d.c[0]||1==d.c[0]&&!d.e&&1==d.c.length||!e.c||!e.c[0])return f=new G(Math.pow(+$(d),s?2-v(e):+$(e))),t?f.mod(t):f;if(h=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new G(NaN);(n=!h&&d.isInteger()&&t.isInteger())&&(d=d.mod(t));}else {if(e.e>9&&(d.e>0||d.e<-1||(0==d.e?d.c[0]>1||s&&d.c[1]>=24e7:d.c[0]<8e13||s&&d.c[0]<=9999975e7)))return i=d.s<0&&v(e)?-0:0,d.e>-1&&(i=1/i),new G(h?1/i:i);z&&(i=a(z/p+2));}for(s?(r=new G(.5),h&&(e.s=1),l=v(e)):l=(o=Math.abs(+$(e)))%2,f=new G(R);;){if(l){if(!(f=f.times(d)).c)break;i?f.c.length>i&&(f.c.length=i):n&&(f=f.mod(t));}if(o){if(0===(o=c(o/2)))break;l=o%2;}else if(W(e=e.times(r),e.e+1,1),e.e>14)l=v(e);else {if(0==(o=+$(e)))break;l=o%2;}d=d.times(d),i?d.c&&d.c.length>i&&(d.c.length=i):n&&(d=d.mod(t));}return n?f:(h&&(f=R.div(f)),t?f.mod(t):i?W(f,z,C,void 0):f)},I.integerValue=function(e){var t=new G(this);return null==e?e=C:w(e,0,8),W(t,t.e+1,e)},I.isEqualTo=I.eq=function(e,t){return 0===A(this,new G(e,t))},I.isFinite=function(){return !!this.c},I.isGreaterThan=I.gt=function(e,t){return A(this,new G(e,t))>0},I.isGreaterThanOrEqualTo=I.gte=function(e,t){return 1===(t=A(this,new G(e,t)))||0===t},I.isInteger=function(){return !!this.c&&m(this.e/p)>this.c.length-2},I.isLessThan=I.lt=function(e,t){return A(this,new G(e,t))<0},I.isLessThanOrEqualTo=I.lte=function(e,t){return -1===(t=A(this,new G(e,t)))||0===t},I.isNaN=function(){return !this.s},I.isNegative=function(){return this.s<0},I.isPositive=function(){return this.s>0},I.isZero=function(){return !!this.c&&0==this.c[0]},I.minus=function(e,t){var r,n,o,i,s=this,a=s.s;if(t=(e=new G(e,t)).s,!a||!t)return new G(NaN);if(a!=t)return e.s=-t,s.plus(e);var c=s.e/p,u=e.e/p,h=s.c,f=e.c;if(!c||!u){if(!h||!f)return h?(e.s=-t,e):new G(f?s:NaN);if(!h[0]||!f[0])return f[0]?(e.s=-t,e):new G(h[0]?s:3==C?-0:0)}if(c=m(c),u=m(u),h=h.slice(),a=c-u){for((i=a<0)?(a=-a,o=h):(u=c,o=f),o.reverse(),t=a;t--;o.push(0));o.reverse();}else for(n=(i=(a=h.length)<(t=f.length))?a:t,a=t=0;t<n;t++)if(h[t]!=f[t]){i=h[t]<f[t];break}if(i&&(o=h,h=f,f=o,e.s=-e.s),(t=(n=f.length)-(r=h.length))>0)for(;t--;h[r++]=0);for(t=l-1;n>a;){if(h[--n]<f[n]){for(r=n;r&&!h[--r];h[r]=t);--h[r],h[n]+=l;}h[n]-=f[n];}for(;0==h[0];h.splice(0,1),--u);return h[0]?V(e,h,u):(e.s=3==C?-1:1,e.c=[e.e=0],e)},I.modulo=I.mod=function(e,t){var n,o,i=this;return e=new G(e,t),!i.c||!e.s||e.c&&!e.c[0]?new G(NaN):!e.c||i.c&&!i.c[0]?new G(i):(9==L?(o=e.s,e.s=1,n=r(i,e,0,3),e.s=o,n.s*=o):n=r(i,e,0,L),(e=i.minus(n.times(e))).c[0]||1!=L||(e.s=i.s),e)},I.multipliedBy=I.times=function(e,t){var r,n,o,i,s,a,c,u,h,f,d,g,b,A,w,v=this,x=v.c,S=(e=new G(e,t)).c;if(!(x&&S&&x[0]&&S[0]))return !v.s||!e.s||x&&!x[0]&&!S||S&&!S[0]&&!x?e.c=e.e=e.s=null:(e.s*=v.s,x&&S?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=m(v.e/p)+m(e.e/p),e.s*=v.s,(c=x.length)<(f=S.length)&&(b=x,x=S,S=b,o=c,c=f,f=o),o=c+f,b=[];o--;b.push(0));for(A=l,w=y,o=f;--o>=0;){for(r=0,d=S[o]%w,g=S[o]/w|0,i=o+(s=c);i>o;)r=((u=d*(u=x[--s]%w)+(a=g*u+(h=x[s]/w|0)*d)%w*w+b[i]+r)/A|0)+(a/w|0)+g*h,b[i--]=u%A;b[i]=r;}return r?++n:b.splice(0,1),V(e,b,n)},I.negated=function(){var e=new G(this);return e.s=-e.s||null,e},I.plus=function(e,t){var r,n=this,o=n.s;if(t=(e=new G(e,t)).s,!o||!t)return new G(NaN);if(o!=t)return e.s=-t,n.minus(e);var i=n.e/p,s=e.e/p,a=n.c,c=e.c;if(!i||!s){if(!a||!c)return new G(o/0);if(!a[0]||!c[0])return c[0]?e:new G(a[0]?n:0*o)}if(i=m(i),s=m(s),a=a.slice(),o=i-s){for(o>0?(s=i,r=c):(o=-o,r=a),r.reverse();o--;r.push(0));r.reverse();}for((o=a.length)-(t=c.length)<0&&(r=c,c=a,a=r,t=o),o=0;t;)o=(a[--t]=a[t]+c[t]+o)/l|0,a[t]=l===a[t]?0:a[t]%l;return o&&(a=[o].concat(a),++s),V(e,a,s)},I.precision=I.sd=function(e,t){var r,n,o,i=this;if(null!=e&&e!==!!e)return w(e,1,g),null==t?t=C:w(t,0,8),W(new G(i),e,t);if(!(r=i.c))return null;if(n=(o=r.length-1)*p+1,o=r[o]){for(;o%10==0;o/=10,n--);for(o=r[0];o>=10;o/=10,n++);}return e&&i.e+1>n&&(n=i.e+1),n},I.shiftedBy=function(e){return w(e,-9007199254740991,f),this.times("1e"+e)},I.squareRoot=I.sqrt=function(){var e,t,n,o,i,s=this,a=s.c,c=s.s,u=s.e,h=O+4,l=new G("0.5");if(1!==c||!a||!a[0])return new G(!c||c<0&&(!a||a[0])?NaN:a?s:1/0);if(0==(c=Math.sqrt(+$(s)))||c==1/0?(((t=b(a)).length+u)%2==0&&(t+="0"),c=Math.sqrt(+t),u=m((u+1)/2)-(u<0||u%2),n=new G(t=c==1/0?"5e"+u:(t=c.toExponential()).slice(0,t.indexOf("e")+1)+u)):n=new G(c+""),n.c[0])for((c=(u=n.e)+h)<3&&(c=0);;)if(i=n,n=l.times(i.plus(r(s,i,h,1))),b(i.c).slice(0,c)===(t=b(n.c)).slice(0,c)){if(n.e<u&&--c,"9999"!=(t=t.slice(c-3,c+1))&&(o||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(W(n,n.e+O+2,1),e=!n.times(n).eq(s));break}if(!o&&(W(i,i.e+O+2,0),i.times(i).eq(s))){n=i;break}h+=4,c+=4,o=1;}return W(n,n.e+O+1,C,e)},I.toExponential=function(e,t){return null!=e&&(w(e,0,g),e++),K(this,e,t,1)},I.toFixed=function(e,t){return null!=e&&(w(e,0,g),e=e+this.e+1),K(this,e,t)},I.toFormat=function(e,t,r){var n,o=this;if(null==r)null!=e&&t&&"object"==typeof t?(r=t,t=null):e&&"object"==typeof e?(r=e,e=t=null):r=M;else if("object"!=typeof r)throw Error(u+"Argument not an object: "+r);if(n=o.toFixed(e,t),o.c){var i,s=n.split("."),a=+r.groupSize,c=+r.secondaryGroupSize,h=r.groupSeparator||"",l=s[0],p=s[1],f=o.s<0,d=f?l.slice(1):l,y=d.length;if(c&&(i=a,a=c,c=i,y-=i),a>0&&y>0){for(i=y%a||a,l=d.substr(0,i);i<y;i+=a)l+=h+d.substr(i,a);c>0&&(l+=h+d.slice(i)),f&&(l="-"+l);}n=p?l+(r.decimalSeparator||"")+((c=+r.fractionGroupSize)?p.replace(new RegExp("\\d{"+c+"}\\B","g"),"$&"+(r.fractionGroupSeparator||"")):p):l;}return (r.prefix||"")+n+(r.suffix||"")},I.toFraction=function(e){var t,n,o,i,s,a,c,h,l,f,y,g,m=this,A=m.c;if(null!=e&&(!(c=new G(e)).isInteger()&&(c.c||1!==c.s)||c.lt(R)))throw Error(u+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+$(c));if(!A)return new G(m);for(t=new G(R),l=n=new G(R),o=h=new G(R),g=b(A),s=t.e=g.length-m.e-1,t.c[0]=d[(a=s%p)<0?p+a:a],e=!e||c.comparedTo(t)>0?s>0?t:l:c,a=j,j=1/0,c=new G(g),h.c[0]=0;f=r(c,t,0,1),1!=(i=n.plus(f.times(o))).comparedTo(e);)n=o,o=i,l=h.plus(f.times(i=l)),h=i,t=c.minus(f.times(i=t)),c=i;return i=r(e.minus(n),o,0,1),h=h.plus(i.times(l)),n=n.plus(i.times(o)),h.s=l.s=m.s,y=r(l,o,s*=2,C).minus(m).abs().comparedTo(r(h,n,s,C).minus(m).abs())<1?[l,o]:[h,n],j=a,y},I.toNumber=function(){return +$(this)},I.toPrecision=function(e,t){return null!=e&&w(e,1,g),K(this,e,t,2)},I.toString=function(e){var t,r=this,o=r.s,i=r.e;return null===i?o?(t="Infinity",o<0&&(t="-"+t)):t="NaN":(null==e?t=i<=D||i>=N?x(b(r.c),i):S(b(r.c),i,"0"):10===e?t=S(b((r=W(new G(r),O+i+1,C)).c),r.e,"0"):(w(e,2,H.length,"Base"),t=n(S(b(r.c),i,"0"),10,e,o,!0)),o<0&&r.c[0]&&(t="-"+t)),t},I.valueOf=I.toJSON=function(){return $(this)},I._isBigNumber=!0,null!=t&&G.set(t),G}()).default=i.BigNumber=i,void 0===(n=function(){return i}.call(t,r,t,e))||(e.exports=n);}();},2486:(e,t,r)=>{const n=r(5155),o=r(4525),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=c,t.SlowBuffer=function(e){return +e!=e&&(e=0),c.alloc(+e)},t.INSPECT_MAX_BYTES=50;const s=2147483647;function a(e){if(e>s)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,c.prototype),t}function c(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return l(e)}return u(e,t,r)}function u(e,t,r){if("string"==typeof e)return function(e,t){if("string"==typeof t&&""!==t||(t="utf8"),!c.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const r=0|y(e,t);let n=a(r);const o=n.write(e,t);return o!==r&&(n=n.slice(0,o)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(X(e,Uint8Array)){const t=new Uint8Array(e);return f(t.buffer,t.byteOffset,t.byteLength)}return p(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(X(e,ArrayBuffer)||e&&X(e.buffer,ArrayBuffer))return f(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(X(e,SharedArrayBuffer)||e&&X(e.buffer,SharedArrayBuffer)))return f(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return c.from(n,t,r);const o=function(e){if(c.isBuffer(e)){const t=0|d(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||Q(e.length)?a(0):p(e):"Buffer"===e.type&&Array.isArray(e.data)?p(e.data):void 0}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return c.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function h(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function l(e){return h(e),a(e<0?0:0|d(e))}function p(e){const t=e.length<0?0:0|d(e.length),r=a(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function f(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,c.prototype),n}function d(e){if(e>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|e}function y(e,t){if(c.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||X(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return V(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return W(e).length;default:if(o)return n?-1:V(e).length;t=(""+t).toLowerCase(),o=!0;}}function g(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return "";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return "";if((r>>>=0)<=(t>>>=0))return "";for(e||(e="utf8");;)switch(e){case"hex":return I(this,t,r);case"utf8":case"utf-8":return T(this,t,r);case"ascii":return B(this,t,r);case"latin1":case"binary":return U(this,t,r);case"base64":return _(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0;}}function m(e,t,r){const n=e[t];e[t]=e[r],e[r]=n;}function b(e,t,r,n,o){if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Q(r=+r)&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return -1;r=e.length-1;}else if(r<0){if(!o)return -1;r=0;}if("string"==typeof t&&(t=c.from(t,n)),c.isBuffer(t))return 0===t.length?-1:A(e,t,r,n,o);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):A(e,[t],r,n,o);throw new TypeError("val must be string, number or Buffer")}function A(e,t,r,n,o){let i,s=1,a=e.length,c=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;s=2,a/=2,c/=2,r/=2;}function u(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(o){let n=-1;for(i=r;i<a;i++)if(u(e,i)===u(t,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===c)return n*s}else -1!==n&&(i-=i-n),n=-1;}else for(r+c>a&&(r=a-c),i=r;i>=0;i--){let r=!0;for(let n=0;n<c;n++)if(u(e,i+n)!==u(t,n)){r=!1;break}if(r)return i}return -1}function w(e,t,r,n){r=Number(r)||0;const o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;const i=t.length;let s;for(n>i/2&&(n=i/2),s=0;s<n;++s){const n=parseInt(t.substr(2*s,2),16);if(Q(n))return s;e[r+s]=n;}return s}function v(e,t,r,n){return $(V(t,e.length-r),e,r,n)}function x(e,t,r,n){return $(function(e){const t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function S(e,t,r,n){return $(W(t),e,r,n)}function E(e,t,r,n){return $(function(e,t){let r,n,o;const i=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)r=e.charCodeAt(s),n=r>>8,o=r%256,i.push(o),i.push(n);return i}(t,e.length-r),e,r,n)}function _(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function T(e,t,r){r=Math.min(e.length,r);const n=[];let o=t;for(;o<r;){const t=e[o];let i=null,s=t>239?4:t>223?3:t>191?2:1;if(o+s<=r){let r,n,a,c;switch(s){case 1:t<128&&(i=t);break;case 2:r=e[o+1],128==(192&r)&&(c=(31&t)<<6|63&r,c>127&&(i=c));break;case 3:r=e[o+1],n=e[o+2],128==(192&r)&&128==(192&n)&&(c=(15&t)<<12|(63&r)<<6|63&n,c>2047&&(c<55296||c>57343)&&(i=c));break;case 4:r=e[o+1],n=e[o+2],a=e[o+3],128==(192&r)&&128==(192&n)&&128==(192&a)&&(c=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a,c>65535&&c<1114112&&(i=c));}}null===i?(i=65533,s=1):i>65535&&(i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=s;}return function(e){const t=e.length;if(t<=k)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=k));return r}(n)}t.kMaxLength=s,c.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return !1}}(),c.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}}),c.poolSize=8192,c.from=function(e,t,r){return u(e,t,r)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array),c.alloc=function(e,t,r){return function(e,t,r){return h(e),e<=0?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)}(e,t,r)},c.allocUnsafe=function(e){return l(e)},c.allocUnsafeSlow=function(e){return l(e)},c.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==c.prototype},c.compare=function(e,t){if(X(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),X(t,Uint8Array)&&(t=c.from(t,t.offset,t.byteLength)),!c.isBuffer(e)||!c.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return !0;default:return !1}},c.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;const n=c.allocUnsafe(t);let o=0;for(r=0;r<e.length;++r){let t=e[r];if(X(t,Uint8Array))o+t.length>n.length?(c.isBuffer(t)||(t=c.from(t)),t.copy(n,o)):Uint8Array.prototype.set.call(n,t,o);else {if(!c.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(n,o);}o+=t.length;}return n},c.byteLength=y,c.prototype._isBuffer=!0,c.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)m(this,t,t+1);return this},c.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)m(this,t,t+3),m(this,t+1,t+2);return this},c.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)m(this,t,t+7),m(this,t+1,t+6),m(this,t+2,t+5),m(this,t+3,t+4);return this},c.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?T(this,0,e):g.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){let e="";const r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},i&&(c.prototype[i]=c.prototype.inspect),c.prototype.compare=function(e,t,r,n,o){if(X(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return -1;if(t>=r)return 1;if(this===e)return 0;let i=(o>>>=0)-(n>>>=0),s=(r>>>=0)-(t>>>=0);const a=Math.min(i,s),u=this.slice(n,o),h=e.slice(t,r);for(let e=0;e<a;++e)if(u[e]!==h[e]){i=u[e],s=h[e];break}return i<s?-1:s<i?1:0},c.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},c.prototype.indexOf=function(e,t,r){return b(this,e,t,r,!0)},c.prototype.lastIndexOf=function(e,t,r){return b(this,e,t,r,!1)},c.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else {if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);}const o=this.length-t;if((void 0===r||r>o)&&(r=o),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let i=!1;for(;;)switch(n){case"hex":return w(this,e,t,r);case"utf8":case"utf-8":return v(this,e,t,r);case"ascii":case"latin1":case"binary":return x(this,e,t,r);case"base64":return S(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0;}},c.prototype.toJSON=function(){return {type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const k=4096;function B(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}function U(e,t,r){let n="";r=Math.min(e.length,r);for(let o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}function I(e,t,r){const n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=t;n<r;++n)o+=Y[e[n]];return o}function R(e,t,r){const n=e.slice(t,r);let o="";for(let e=0;e<n.length-1;e+=2)o+=String.fromCharCode(n[e]+256*n[e+1]);return o}function O(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function C(e,t,r,n,o,i){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function D(e,t,r,n,o){H(t,n,o,e,r,7);let i=Number(t&BigInt(4294967295));e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i,i>>=8,e[r++]=i;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,r}function N(e,t,r,n,o){H(t,n,o,e,r,7);let i=Number(t&BigInt(4294967295));e[r+7]=i,i>>=8,e[r+6]=i,i>>=8,e[r+5]=i,i>>=8,e[r+4]=i;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=s,s>>=8,e[r+2]=s,s>>=8,e[r+1]=s,s>>=8,e[r]=s,r+8}function P(e,t,r,n,o,i){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function j(e,t,r,n,i){return t=+t,r>>>=0,i||P(e,0,r,4),o.write(e,t,r,n,23,4),r+4}function F(e,t,r,n,i){return t=+t,r>>>=0,i||P(e,0,r,8),o.write(e,t,r,n,52,8),r+8}c.prototype.slice=function(e,t){const r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);const n=this.subarray(e,t);return Object.setPrototypeOf(n,c.prototype),n},c.prototype.readUintLE=c.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||O(e,t,this.length);let n=this[e],o=1,i=0;for(;++i<t&&(o*=256);)n+=this[e+i]*o;return n},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||O(e,t,this.length);let n=this[e+--t],o=1;for(;t>0&&(o*=256);)n+=this[e+--t]*o;return n},c.prototype.readUint8=c.prototype.readUInt8=function(e,t){return e>>>=0,t||O(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,t){return e>>>=0,t||O(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,t){return e>>>=0,t||O(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,t){return e>>>=0,t||O(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,t){return e>>>=0,t||O(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readBigUInt64LE=J((function(e){G(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||K(e,this.length-8);const n=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,o=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(n)+(BigInt(o)<<BigInt(32))})),c.prototype.readBigUInt64BE=J((function(e){G(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||K(e,this.length-8);const n=t*2**24+65536*this[++e]+256*this[++e]+this[++e],o=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return (BigInt(n)<<BigInt(32))+BigInt(o)})),c.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||O(e,t,this.length);let n=this[e],o=1,i=0;for(;++i<t&&(o*=256);)n+=this[e+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*t)),n},c.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||O(e,t,this.length);let n=t,o=1,i=this[e+--n];for(;n>0&&(o*=256);)i+=this[e+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*t)),i},c.prototype.readInt8=function(e,t){return e>>>=0,t||O(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},c.prototype.readInt16LE=function(e,t){e>>>=0,t||O(e,2,this.length);const r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt16BE=function(e,t){e>>>=0,t||O(e,2,this.length);const r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},c.prototype.readInt32LE=function(e,t){return e>>>=0,t||O(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return e>>>=0,t||O(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readBigInt64LE=J((function(e){G(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||K(e,this.length-8);const n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return (BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),c.prototype.readBigInt64BE=J((function(e){G(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||K(e,this.length-8);const n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return (BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)})),c.prototype.readFloatLE=function(e,t){return e>>>=0,t||O(e,4,this.length),o.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return e>>>=0,t||O(e,4,this.length),o.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return e>>>=0,t||O(e,8,this.length),o.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return e>>>=0,t||O(e,8,this.length),o.read(this,e,!1,52,8)},c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||C(this,e,t,r,Math.pow(2,8*r)-1,0);let o=1,i=0;for(this[t]=255&e;++i<r&&(o*=256);)this[t+i]=e/o&255;return t+r},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,t,r,n){e=+e,t>>>=0,r>>>=0,n||C(this,e,t,r,Math.pow(2,8*r)-1,0);let o=r-1,i=1;for(this[t+o]=255&e;--o>=0&&(i*=256);)this[t+o]=e/i&255;return t+r},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,1,255,0),this[t]=255&e,t+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigUInt64LE=J((function(e,t=0){return D(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeBigUInt64BE=J((function(e,t=0){return N(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),c.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);C(this,e,t,r,n-1,-n);}let o=0,i=1,s=0;for(this[t]=255&e;++o<r&&(i*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/i>>0)-s&255;return t+r},c.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);C(this,e,t,r,n-1,-n);}let o=r-1,i=1,s=0;for(this[t+o]=255&e;--o>=0&&(i*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/i>>0)-s&255;return t+r},c.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},c.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||C(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigInt64LE=J((function(e,t=0){return D(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeBigInt64BE=J((function(e,t=0){return N(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),c.prototype.writeFloatLE=function(e,t,r){return j(this,e,t,!0,r)},c.prototype.writeFloatBE=function(e,t,r){return j(this,e,t,!1,r)},c.prototype.writeDoubleLE=function(e,t,r){return F(this,e,t,!0,r)},c.prototype.writeDoubleBE=function(e,t,r){return F(this,e,t,!1,r)},c.prototype.copy=function(e,t,r,n){if(!c.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);const o=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),o},c.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!c.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){const t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t);}}else "number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;let o;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else {const i=c.isBuffer(e)?e:c.from(e,n),s=i.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=i[o%s];}return this};const L={};function z(e,t,r){L[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name;}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0});}toString(){return `${this.name} [${e}]: ${this.message}`}};}function M(e){let t="",r=e.length;const n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return `${e.slice(0,r)}${t}`}function H(e,t,r,n,o,i){if(e>r||e<t){const n="bigint"==typeof t?"n":"";let o;throw o=i>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(i+1)}${n}`:`>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new L.ERR_OUT_OF_RANGE("value",o,e)}!function(e,t,r){G(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||K(t,e.length-(r+1));}(n,o,i);}function G(e,t){if("number"!=typeof e)throw new L.ERR_INVALID_ARG_TYPE(t,"number",e)}function K(e,t,r){if(Math.floor(e)!==e)throw G(e,r),new L.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new L.ERR_BUFFER_OUT_OF_BOUNDS;throw new L.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}z("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),z("ERR_INVALID_ARG_TYPE",(function(e,t){return `The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),z("ERR_OUT_OF_RANGE",(function(e,t,r){let n=`The value of "${e}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>2**32?o=M(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=M(o)),o+="n"),n+=` It must be ${t}. Received ${o}`,n}),RangeError);const q=/[^+/0-9A-Za-z-_]/g;function V(e,t){let r;t=t||1/0;const n=e.length;let o=null;const i=[];for(let s=0;s<n;++s){if(r=e.charCodeAt(s),r>55295&&r<57344){if(!o){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(t-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320);}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;i.push(r);}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128);}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128);}else {if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128);}}return i}function W(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(q,"")).length<2)return "";for(;e.length%4!=0;)e+="=";return e}(e))}function $(e,t,r,n){let o;for(o=0;o<n&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}function X(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Q(e){return e!=e}const Y=function(){const e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let o=0;o<16;++o)t[n+o]=e[r]+e[o];}return t}();function J(e){return "undefined"==typeof BigInt?Z:e}function Z(){throw new Error("BigInt not supported")}},7615:(e,t,r)=>{var n=r(1801),o=r(2550),i=o(n("String.prototype.indexOf"));e.exports=function(e,t){var r=n(e,!!t);return "function"==typeof r&&i(e,".prototype.")>-1?o(r):r};},2550:(e,t,r)=>{var n=r(1930),o=r(1801),i=o("%Function.prototype.apply%"),s=o("%Function.prototype.call%"),a=o("%Reflect.apply%",!0)||n.call(s,i),c=o("%Object.getOwnPropertyDescriptor%",!0),u=o("%Object.defineProperty%",!0),h=o("%Math.max%");if(u)try{u({},"a",{value:1});}catch(e){u=null;}e.exports=function(e){var t=a(n,s,arguments);if(c&&u){var r=c(t,"length");r.configurable&&u(t,"length",{value:1+h(0,e.length-(arguments.length-1))});}return t};var l=function(){return a(n,i,arguments)};u?u(e.exports,"apply",{value:l}):e.exports.apply=l;},1069:e=>{function t(e){if(e)return function(e){for(var r in t.prototype)e[r]=t.prototype[r];return e}(e)}e.exports=t,t.prototype.on=t.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},t.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments);}return r.fn=t,this.on(e,r),this},t.prototype.off=t.prototype.removeListener=t.prototype.removeAllListeners=t.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r,n=this._callbacks["$"+e];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var o=0;o<n.length;o++)if((r=n[o])===t||r.fn===t){n.splice(o,1);break}return 0===n.length&&delete this._callbacks["$"+e],this},t.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(r){n=0;for(var o=(r=r.slice(0)).length;n<o;++n)r[n].apply(this,t);}return this},t.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},t.prototype.hasListeners=function(e){return !!this.listeners(e).length};},5799:e=>{e.exports=n,n.default=n,n.stable=s,n.stableStringify=s;var t=[],r=[];function n(e,n,i){var s;for(o(e,"",[],void 0),s=0===r.length?JSON.stringify(e,n,i):JSON.stringify(e,c(n),i);0!==t.length;){var a=t.pop();4===a.length?Object.defineProperty(a[0],a[1],a[3]):a[0][a[1]]=a[2];}return s}function o(e,n,i,s){var a;if("object"==typeof e&&null!==e){for(a=0;a<i.length;a++)if(i[a]===e){var c=Object.getOwnPropertyDescriptor(s,n);return void(void 0!==c.get?c.configurable?(Object.defineProperty(s,n,{value:"[Circular]"}),t.push([s,n,e,c])):r.push([e,n]):(s[n]="[Circular]",t.push([s,n,e])))}if(i.push(e),Array.isArray(e))for(a=0;a<e.length;a++)o(e[a],a,i,e);else {var u=Object.keys(e);for(a=0;a<u.length;a++){var h=u[a];o(e[h],h,i,e);}}i.pop();}}function i(e,t){return e<t?-1:e>t?1:0}function s(e,n,o){var i,s=a(e,"",[],void 0)||e;for(i=0===r.length?JSON.stringify(s,n,o):JSON.stringify(s,c(n),o);0!==t.length;){var u=t.pop();4===u.length?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2];}return i}function a(e,n,o,s){var c;if("object"==typeof e&&null!==e){for(c=0;c<o.length;c++)if(o[c]===e){var u=Object.getOwnPropertyDescriptor(s,n);return void(void 0!==u.get?u.configurable?(Object.defineProperty(s,n,{value:"[Circular]"}),t.push([s,n,e,u])):r.push([e,n]):(s[n]="[Circular]",t.push([s,n,e])))}if("function"==typeof e.toJSON)return;if(o.push(e),Array.isArray(e))for(c=0;c<e.length;c++)a(e[c],c,o,e);else {var h={},l=Object.keys(e).sort(i);for(c=0;c<l.length;c++){var p=l[c];a(e[p],p,o,e),h[p]=e[p];}if(void 0===s)return h;t.push([s,n,e]),s[n]=h;}o.pop();}}function c(e){return e=void 0!==e?e:function(e,t){return t},function(t,n){if(r.length>0)for(var o=0;o<r.length;o++){var i=r[o];if(i[1]===t&&i[0]===n){n="[Circular]",r.splice(o,1);break}}return e.call(this,t,n)}}},9930:e=>{var t="Function.prototype.bind called on incompatible ",r=Array.prototype.slice,n=Object.prototype.toString,o="[object Function]";e.exports=function(e){var i=this;if("function"!=typeof i||n.call(i)!==o)throw new TypeError(t+i);for(var s,a=r.call(arguments,1),c=function(){if(this instanceof s){var t=i.apply(this,a.concat(r.call(arguments)));return Object(t)===t?t:this}return i.apply(e,a.concat(r.call(arguments)))},u=Math.max(0,i.length-a.length),h=[],l=0;l<u;l++)h.push("$"+l);if(s=Function("binder","return function ("+h.join(",")+"){ return binder.apply(this,arguments); }")(c),i.prototype){var p=function(){};p.prototype=i.prototype,s.prototype=new p,p.prototype=null;}return s};},1930:(e,t,r)=>{var n=r(9930);e.exports=Function.prototype.bind||n;},1801:(e,t,r)=>{var n,o=SyntaxError,i=Function,s=TypeError,a=function(e){try{return i('"use strict"; return ('+e+").constructor;")()}catch(e){}},c=Object.getOwnPropertyDescriptor;if(c)try{c({},"");}catch(e){c=null;}var u=function(){throw new s},h=c?function(){try{return u}catch(e){try{return c(arguments,"callee").get}catch(e){return u}}}():u,l=r(9905)(),p=Object.getPrototypeOf||function(e){return e.__proto__},f={},d="undefined"==typeof Uint8Array?n:p(Uint8Array),y={"%AggregateError%":"undefined"==typeof AggregateError?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?n:ArrayBuffer,"%ArrayIteratorPrototype%":l?p([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":f,"%AsyncGenerator%":f,"%AsyncGeneratorFunction%":f,"%AsyncIteratorPrototype%":f,"%Atomics%":"undefined"==typeof Atomics?n:Atomics,"%BigInt%":"undefined"==typeof BigInt?n:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?n:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?n:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?n:FinalizationRegistry,"%Function%":i,"%GeneratorFunction%":f,"%Int8Array%":"undefined"==typeof Int8Array?n:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?n:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":l?p(p([][Symbol.iterator]())):n,"%JSON%":"object"==typeof JSON?JSON:n,"%Map%":"undefined"==typeof Map?n:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&l?p((new Map)[Symbol.iterator]()):n,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?n:Promise,"%Proxy%":"undefined"==typeof Proxy?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?n:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?n:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&l?p((new Set)[Symbol.iterator]()):n,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":l?p(""[Symbol.iterator]()):n,"%Symbol%":l?Symbol:n,"%SyntaxError%":o,"%ThrowTypeError%":h,"%TypedArray%":d,"%TypeError%":s,"%Uint8Array%":"undefined"==typeof Uint8Array?n:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?n:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?n:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?n:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?n:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?n:WeakSet},g=function e(t){var r;if("%AsyncFunction%"===t)r=a("async function () {}");else if("%GeneratorFunction%"===t)r=a("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=a("async function* () {}");else if("%AsyncGenerator%"===t){var n=e("%AsyncGeneratorFunction%");n&&(r=n.prototype);}else if("%AsyncIteratorPrototype%"===t){var o=e("%AsyncGenerator%");o&&(r=p(o.prototype));}return y[t]=r,r},m={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},b=r(1930),A=r(9284),w=b.call(Function.call,Array.prototype.concat),v=b.call(Function.apply,Array.prototype.splice),x=b.call(Function.call,String.prototype.replace),S=b.call(Function.call,String.prototype.slice),E=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,_=/\\(\\)?/g,T=function(e){var t=S(e,0,1),r=S(e,-1);if("%"===t&&"%"!==r)throw new o("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new o("invalid intrinsic syntax, expected opening `%`");var n=[];return x(e,E,(function(e,t,r,o){n[n.length]=r?x(o,_,"$1"):t||e;})),n},k=function(e,t){var r,n=e;if(A(m,n)&&(n="%"+(r=m[n])[0]+"%"),A(y,n)){var i=y[n];if(i===f&&(i=g(n)),void 0===i&&!t)throw new s("intrinsic "+e+" exists, but is not available. Please file an issue!");return {alias:r,name:n,value:i}}throw new o("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new s("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new s('"allowMissing" argument must be a boolean');var r=T(e),n=r.length>0?r[0]:"",i=k("%"+n+"%",t),a=i.name,u=i.value,h=!1,l=i.alias;l&&(n=l[0],v(r,w([0,1],l)));for(var p=1,f=!0;p<r.length;p+=1){var d=r[p],g=S(d,0,1),m=S(d,-1);if(('"'===g||"'"===g||"`"===g||'"'===m||"'"===m||"`"===m)&&g!==m)throw new o("property names with quotes must have matching quotes");if("constructor"!==d&&f||(h=!0),A(y,a="%"+(n+="."+d)+"%"))u=y[a];else if(null!=u){if(!(d in u)){if(!t)throw new s("base intrinsic for "+e+" exists, but the property is not available.");return}if(c&&p+1>=r.length){var b=c(u,d);u=(f=!!b)&&"get"in b&&!("originalValue"in b.get)?b.get:u[d];}else f=A(u,d),u=u[d];f&&!h&&(y[a]=u);}}return u};},9905:(e,t,r)=>{var n="undefined"!=typeof Symbol&&Symbol,o=r(5682);e.exports=function(){return "function"==typeof n&&"function"==typeof Symbol&&"symbol"==typeof n("foo")&&"symbol"==typeof Symbol("bar")&&o()};},5682:e=>{e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return !1;if("symbol"==typeof Symbol.iterator)return !0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return !1;if("[object Symbol]"!==Object.prototype.toString.call(t))return !1;if("[object Symbol]"!==Object.prototype.toString.call(r))return !1;for(t in e[t]=42,e)return !1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return !1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return !1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return !1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return !1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return !1}return !0};},9284:(e,t,r)=>{var n=r(1930);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty);},7267:(e,t,r)=>{var n;!function(){var t="object"==typeof window?window:{};!t.HI_BASE32_NO_NODE_JS&&"object"==typeof browser$1&&browser$1.versions&&browser$1.versions.node&&(t=r.g);var o=!t.HI_BASE32_NO_COMMON_JS&&e.exports,i=r.amdO,s="ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split(""),a={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,2:26,3:27,4:28,5:29,6:30,7:31},c=[0,0,0,0,0,0,0,0],u=function(e,t){t.length>10&&(t="..."+t.substr(-10));var r=new Error("Decoded data is not valid UTF-8. Maybe try base32.decode.asBytes()? Partial data after reading "+e+" bytes: "+t+" <-");throw r.position=e,r},h=function(e){if(""===e)return [];if(!/^[A-Z2-7=]+$/.test(e))throw new Error("Invalid base32 characters");for(var t,r,n,o,i,s,c,u,h=[],l=0,p=(e=e.replace(/=/g,"")).length,f=0,d=p>>3<<3;f<d;)t=a[e.charAt(f++)],r=a[e.charAt(f++)],n=a[e.charAt(f++)],o=a[e.charAt(f++)],i=a[e.charAt(f++)],s=a[e.charAt(f++)],c=a[e.charAt(f++)],u=a[e.charAt(f++)],h[l++]=255&(t<<3|r>>>2),h[l++]=255&(r<<6|n<<1|o>>>4),h[l++]=255&(o<<4|i>>>1),h[l++]=255&(i<<7|s<<2|c>>>3),h[l++]=255&(c<<5|u);var y=p-d;return 2===y?(t=a[e.charAt(f++)],r=a[e.charAt(f++)],h[l++]=255&(t<<3|r>>>2)):4===y?(t=a[e.charAt(f++)],r=a[e.charAt(f++)],n=a[e.charAt(f++)],o=a[e.charAt(f++)],h[l++]=255&(t<<3|r>>>2),h[l++]=255&(r<<6|n<<1|o>>>4)):5===y?(t=a[e.charAt(f++)],r=a[e.charAt(f++)],n=a[e.charAt(f++)],o=a[e.charAt(f++)],i=a[e.charAt(f++)],h[l++]=255&(t<<3|r>>>2),h[l++]=255&(r<<6|n<<1|o>>>4),h[l++]=255&(o<<4|i>>>1)):7===y&&(t=a[e.charAt(f++)],r=a[e.charAt(f++)],n=a[e.charAt(f++)],o=a[e.charAt(f++)],i=a[e.charAt(f++)],s=a[e.charAt(f++)],c=a[e.charAt(f++)],h[l++]=255&(t<<3|r>>>2),h[l++]=255&(r<<6|n<<1|o>>>4),h[l++]=255&(o<<4|i>>>1),h[l++]=255&(i<<7|s<<2|c>>>3)),h},l=function(e,t){if(!t)return function(e){for(var t,r,n="",o=e.length,i=0,s=0;i<o;)if((t=e[i++])<=127)n+=String.fromCharCode(t);else {t>191&&t<=223?(r=31&t,s=1):t<=239?(r=15&t,s=2):t<=247?(r=7&t,s=3):u(i,n);for(var a=0;a<s;++a)((t=e[i++])<128||t>191)&&u(i,n),r<<=6,r+=63&t;r>=55296&&r<=57343&&u(i,n),r>1114111&&u(i,n),r<=65535?n+=String.fromCharCode(r):(r-=65536,n+=String.fromCharCode(55296+(r>>10)),n+=String.fromCharCode(56320+(1023&r)));}return n}(h(e));if(""===e)return "";if(!/^[A-Z2-7=]+$/.test(e))throw new Error("Invalid base32 characters");var r,n,o,i,s,c,l,p,f="",d=e.indexOf("=");-1===d&&(d=e.length);for(var y=0,g=d>>3<<3;y<g;)r=a[e.charAt(y++)],n=a[e.charAt(y++)],o=a[e.charAt(y++)],i=a[e.charAt(y++)],s=a[e.charAt(y++)],c=a[e.charAt(y++)],l=a[e.charAt(y++)],p=a[e.charAt(y++)],f+=String.fromCharCode(255&(r<<3|n>>>2))+String.fromCharCode(255&(n<<6|o<<1|i>>>4))+String.fromCharCode(255&(i<<4|s>>>1))+String.fromCharCode(255&(s<<7|c<<2|l>>>3))+String.fromCharCode(255&(l<<5|p));var m=d-g;return 2===m?(r=a[e.charAt(y++)],n=a[e.charAt(y++)],f+=String.fromCharCode(255&(r<<3|n>>>2))):4===m?(r=a[e.charAt(y++)],n=a[e.charAt(y++)],o=a[e.charAt(y++)],i=a[e.charAt(y++)],f+=String.fromCharCode(255&(r<<3|n>>>2))+String.fromCharCode(255&(n<<6|o<<1|i>>>4))):5===m?(r=a[e.charAt(y++)],n=a[e.charAt(y++)],o=a[e.charAt(y++)],i=a[e.charAt(y++)],s=a[e.charAt(y++)],f+=String.fromCharCode(255&(r<<3|n>>>2))+String.fromCharCode(255&(n<<6|o<<1|i>>>4))+String.fromCharCode(255&(i<<4|s>>>1))):7===m&&(r=a[e.charAt(y++)],n=a[e.charAt(y++)],o=a[e.charAt(y++)],i=a[e.charAt(y++)],s=a[e.charAt(y++)],c=a[e.charAt(y++)],l=a[e.charAt(y++)],f+=String.fromCharCode(255&(r<<3|n>>>2))+String.fromCharCode(255&(n<<6|o<<1|i>>>4))+String.fromCharCode(255&(i<<4|s>>>1))+String.fromCharCode(255&(s<<7|c<<2|l>>>3))),f},p={encode:function(e,t){var r="string"!=typeof e;return r&&e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),r?function(e){for(var t,r,n,o,i,a="",c=e.length,u=0,h=5*parseInt(c/5);u<h;)t=e[u++],r=e[u++],n=e[u++],o=e[u++],i=e[u++],a+=s[t>>>3]+s[31&(t<<2|r>>>6)]+s[r>>>1&31]+s[31&(r<<4|n>>>4)]+s[31&(n<<1|o>>>7)]+s[o>>>2&31]+s[31&(o<<3|i>>>5)]+s[31&i];var l=c-h;return 1===l?(t=e[u],a+=s[t>>>3]+s[t<<2&31]+"======"):2===l?(t=e[u++],r=e[u],a+=s[t>>>3]+s[31&(t<<2|r>>>6)]+s[r>>>1&31]+s[r<<4&31]+"===="):3===l?(t=e[u++],r=e[u++],n=e[u],a+=s[t>>>3]+s[31&(t<<2|r>>>6)]+s[r>>>1&31]+s[31&(r<<4|n>>>4)]+s[n<<1&31]+"==="):4===l&&(t=e[u++],r=e[u++],n=e[u++],o=e[u],a+=s[t>>>3]+s[31&(t<<2|r>>>6)]+s[r>>>1&31]+s[31&(r<<4|n>>>4)]+s[31&(n<<1|o>>>7)]+s[o>>>2&31]+s[o<<3&31]+"="),a}(e):t?function(e){for(var t,r,n,o,i,a="",c=e.length,u=0,h=5*parseInt(c/5);u<h;)t=e.charCodeAt(u++),r=e.charCodeAt(u++),n=e.charCodeAt(u++),o=e.charCodeAt(u++),i=e.charCodeAt(u++),a+=s[t>>>3]+s[31&(t<<2|r>>>6)]+s[r>>>1&31]+s[31&(r<<4|n>>>4)]+s[31&(n<<1|o>>>7)]+s[o>>>2&31]+s[31&(o<<3|i>>>5)]+s[31&i];var l=c-h;return 1===l?(t=e.charCodeAt(u),a+=s[t>>>3]+s[t<<2&31]+"======"):2===l?(t=e.charCodeAt(u++),r=e.charCodeAt(u),a+=s[t>>>3]+s[31&(t<<2|r>>>6)]+s[r>>>1&31]+s[r<<4&31]+"===="):3===l?(t=e.charCodeAt(u++),r=e.charCodeAt(u++),n=e.charCodeAt(u),a+=s[t>>>3]+s[31&(t<<2|r>>>6)]+s[r>>>1&31]+s[31&(r<<4|n>>>4)]+s[n<<1&31]+"==="):4===l&&(t=e.charCodeAt(u++),r=e.charCodeAt(u++),n=e.charCodeAt(u++),o=e.charCodeAt(u),a+=s[t>>>3]+s[31&(t<<2|r>>>6)]+s[r>>>1&31]+s[31&(r<<4|n>>>4)]+s[31&(n<<1|o>>>7)]+s[o>>>2&31]+s[o<<3&31]+"="),a}(e):function(e){var t,r,n,o,i,a,u,h=!1,l="",p=0,f=0,d=e.length;if(""===e)return l;do{for(c[0]=c[5],c[1]=c[6],c[2]=c[7],u=f;p<d&&u<5;++p)(a=e.charCodeAt(p))<128?c[u++]=a:a<2048?(c[u++]=192|a>>6,c[u++]=128|63&a):a<55296||a>=57344?(c[u++]=224|a>>12,c[u++]=128|a>>6&63,c[u++]=128|63&a):(a=65536+((1023&a)<<10|1023&e.charCodeAt(++p)),c[u++]=240|a>>18,c[u++]=128|a>>12&63,c[u++]=128|a>>6&63,c[u++]=128|63&a);f=u-5,p===d&&++p,p>d&&u<6&&(h=!0),t=c[0],u>4?(r=c[1],n=c[2],o=c[3],i=c[4],l+=s[t>>>3]+s[31&(t<<2|r>>>6)]+s[r>>>1&31]+s[31&(r<<4|n>>>4)]+s[31&(n<<1|o>>>7)]+s[o>>>2&31]+s[31&(o<<3|i>>>5)]+s[31&i]):1===u?l+=s[t>>>3]+s[t<<2&31]+"======":2===u?(r=c[1],l+=s[t>>>3]+s[31&(t<<2|r>>>6)]+s[r>>>1&31]+s[r<<4&31]+"===="):3===u?(r=c[1],n=c[2],l+=s[t>>>3]+s[31&(t<<2|r>>>6)]+s[r>>>1&31]+s[31&(r<<4|n>>>4)]+s[n<<1&31]+"==="):(r=c[1],n=c[2],o=c[3],l+=s[t>>>3]+s[31&(t<<2|r>>>6)]+s[r>>>1&31]+s[31&(r<<4|n>>>4)]+s[31&(n<<1|o>>>7)]+s[o>>>2&31]+s[o<<3&31]+"=");}while(!h);return l}(e)},decode:l};l.asBytes=h,o?e.exports=p:(t.base32=p,i&&(void 0===(n=function(){return p}.call(p,r,p,e))||(e.exports=n)));}();},4525:(e,t)=>{t.read=function(e,t,r,n,o){var i,s,a=8*o-n-1,c=(1<<a)-1,u=c>>1,h=-7,l=r?o-1:0,p=r?-1:1,f=e[t+l];for(l+=p,i=f&(1<<-h)-1,f>>=-h,h+=a;h>0;i=256*i+e[t+l],l+=p,h-=8);for(s=i&(1<<-h)-1,i>>=-h,h+=n;h>0;s=256*s+e[t+l],l+=p,h-=8);if(0===i)i=1-u;else {if(i===c)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,n),i-=u;}return (f?-1:1)*s*Math.pow(2,i-n)},t.write=function(e,t,r,n,o,i){var s,a,c,u=8*i-o-1,h=(1<<u)-1,l=h>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:i-1,d=n?1:-1,y=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=h):(s=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-s))<1&&(s--,c*=2),(t+=s+l>=1?p/c:p*Math.pow(2,1-l))*c>=2&&(s++,c/=2),s+l>=h?(a=0,s=h):s+l>=1?(a=(t*c-1)*Math.pow(2,o),s+=l):(a=t*Math.pow(2,l-1)*Math.pow(2,o),s=0));o>=8;e[r+f]=255&a,f+=d,a/=256,o-=8);for(s=s<<o|a,u+=o;u>0;e[r+f]=255&s,f+=d,s/=256,u-=8);e[r+f-d]|=128*y;};},3477:(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_RESULT__;(function(){var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"==typeof browser$1&&browser$1.versions&&browser$1.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return "[object Array]"===Object.prototype.toString.call(e)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return "object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e,t){return function(r){return new Sha256(t,!0).update(r)[e]()}},createMethod=function(e){var t=createOutputMethod("hex",e);NODE_JS&&(t=nodeWrap(t,e)),t.create=function(){return new Sha256(e)},t.update=function(e){return t.create().update(e)};for(var r=0;r<OUTPUT_TYPES.length;++r){var n=OUTPUT_TYPES[r];t[n]=createOutputMethod(n,e);}return t},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(e){if("string"==typeof e)return crypto.createHash(algorithm).update(e,"utf8").digest("hex");if(null==e)throw new Error(ERROR);return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod},createHmacOutputMethod=function(e,t){return function(r,n){return new HmacSha256(r,t,!0).update(n)[e]()}},createHmacMethod=function(e){var t=createHmacOutputMethod("hex",e);t.create=function(t){return new HmacSha256(t,e)},t.update=function(e,r){return t.create(e).update(r)};for(var r=0;r<OUTPUT_TYPES.length;++r){var n=OUTPUT_TYPES[r];t[n]=createHmacOutputMethod(n,e);}return t};function Sha256(e,t){t?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e;}function HmacSha256(e,t,r){var n,o=typeof e;if("string"===o){var i,s=[],a=e.length,c=0;for(n=0;n<a;++n)(i=e.charCodeAt(n))<128?s[c++]=i:i<2048?(s[c++]=192|i>>6,s[c++]=128|63&i):i<55296||i>=57344?(s[c++]=224|i>>12,s[c++]=128|i>>6&63,s[c++]=128|63&i):(i=65536+((1023&i)<<10|1023&e.charCodeAt(++n)),s[c++]=240|i>>18,s[c++]=128|i>>12&63,s[c++]=128|i>>6&63,s[c++]=128|63&i);e=s;}else {if("object"!==o)throw new Error(ERROR);if(null===e)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw new Error(ERROR)}e.length>64&&(e=new Sha256(t,!0).update(e).array());var u=[],h=[];for(n=0;n<64;++n){var l=e[n]||0;u[n]=92^l,h[n]=54^l;}Sha256.call(this,t,r),this.update(h),this.oKeyPad=u,this.inner=!0,this.sharedMemory=r;}Sha256.prototype.update=function(e){if(!this.finalized){var t,r=typeof e;if("string"!==r){if("object"!==r)throw new Error(ERROR);if(null===e)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw new Error(ERROR);t=!0;}for(var n,o,i=0,s=e.length,a=this.blocks;i<s;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),t)for(o=this.start;i<s&&o<64;++i)a[o>>2]|=e[i]<<SHIFT[3&o++];else for(o=this.start;i<s&&o<64;++i)(n=e.charCodeAt(i))<128?a[o>>2]|=n<<SHIFT[3&o++]:n<2048?(a[o>>2]|=(192|n>>6)<<SHIFT[3&o++],a[o>>2]|=(128|63&n)<<SHIFT[3&o++]):n<55296||n>=57344?(a[o>>2]|=(224|n>>12)<<SHIFT[3&o++],a[o>>2]|=(128|n>>6&63)<<SHIFT[3&o++],a[o>>2]|=(128|63&n)<<SHIFT[3&o++]):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++i)),a[o>>2]|=(240|n>>18)<<SHIFT[3&o++],a[o>>2]|=(128|n>>12&63)<<SHIFT[3&o++],a[o>>2]|=(128|n>>6&63)<<SHIFT[3&o++],a[o>>2]|=(128|63&n)<<SHIFT[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.block=a[16],this.start=o-64,this.hash(),this.hashed=!0):this.start=o;}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=EXTRA[3&t],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash();}},Sha256.prototype.hash=function(){var e,t,r,n,o,i,s,a,c,u=this.h0,h=this.h1,l=this.h2,p=this.h3,f=this.h4,d=this.h5,y=this.h6,g=this.h7,m=this.blocks;for(e=16;e<64;++e)t=((o=m[e-15])>>>7|o<<25)^(o>>>18|o<<14)^o>>>3,r=((o=m[e-2])>>>17|o<<15)^(o>>>19|o<<13)^o>>>10,m[e]=m[e-16]+t+m[e-7]+r<<0;for(c=h&l,e=0;e<64;e+=4)this.first?(this.is224?(i=300032,g=(o=m[0]-1413257819)-150054599<<0,p=o+24177077<<0):(i=704751109,g=(o=m[0]-210244248)-1521486534<<0,p=o+143694565<<0),this.first=!1):(t=(u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),n=(i=u&h)^u&l^c,g=p+(o=g+(r=(f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+(f&d^~f&y)+K[e]+m[e])<<0,p=o+(t+n)<<0),t=(p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10),n=(s=p&u)^p&h^i,y=l+(o=y+(r=(g>>>6|g<<26)^(g>>>11|g<<21)^(g>>>25|g<<7))+(g&f^~g&d)+K[e+1]+m[e+1])<<0,t=((l=o+(t+n)<<0)>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10),n=(a=l&p)^l&u^s,d=h+(o=d+(r=(y>>>6|y<<26)^(y>>>11|y<<21)^(y>>>25|y<<7))+(y&g^~y&f)+K[e+2]+m[e+2])<<0,t=((h=o+(t+n)<<0)>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10),n=(c=h&l)^h&p^a,f=u+(o=f+(r=(d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&y^~d&g)+K[e+3]+m[e+3])<<0,u=o+(t+n)<<0;this.h0=this.h0+u<<0,this.h1=this.h1+h<<0,this.h2=this.h2+l<<0,this.h3=this.h3+p<<0,this.h4=this.h4+f<<0,this.h5=this.h5+d<<0,this.h6=this.h6+y<<0,this.h7=this.h7+g<<0;},Sha256.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,n=this.h3,o=this.h4,i=this.h5,s=this.h6,a=this.h7,c=HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s];return this.is224||(c+=HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a]),c},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,n=this.h3,o=this.h4,i=this.h5,s=this.h6,a=this.h7,c=[e>>24&255,e>>16&255,e>>8&255,255&e,t>>24&255,t>>16&255,t>>8&255,255&t,r>>24&255,r>>16&255,r>>8&255,255&r,n>>24&255,n>>16&255,n>>8&255,255&n,o>>24&255,o>>16&255,o>>8&255,255&o,i>>24&255,i>>16&255,i>>8&255,255&i,s>>24&255,s>>16&255,s>>8&255,255&s];return this.is224||c.push(a>>24&255,a>>16&255,a>>8&255,255&a),c},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Sha256.prototype.finalize.call(this);}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)));})();},583:(e,t,r)=>{var n;!function(){var o="input is invalid type",i="object"==typeof window,s=i?window:{};s.JS_SHA3_NO_WINDOW&&(i=!1);var a=!i&&"object"==typeof self;!s.JS_SHA3_NO_NODE_JS&&"object"==typeof browser$1&&browser$1.versions&&browser$1.versions.node?s=r.g:a&&(s=self);var c=!s.JS_SHA3_NO_COMMON_JS&&e.exports,u=r.amdO,h=!s.JS_SHA3_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,l="0123456789abcdef".split(""),p=[4,1024,262144,67108864],f=[0,8,16,24],d=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],y=[224,256,384,512],g=[128,256],m=["hex","buffer","arrayBuffer","array","digest"],b={128:168,256:136};!s.JS_SHA3_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return "[object Array]"===Object.prototype.toString.call(e)}),!h||!s.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return "object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});for(var A=function(e,t,r){return function(n){return new D(e,t,e).update(n)[r]()}},w=function(e,t,r){return function(n,o){return new D(e,t,o).update(n)[r]()}},v=function(e,t,r){return function(t,n,o,i){return T["cshake"+e].update(t,n,o,i)[r]()}},x=function(e,t,r){return function(t,n,o,i){return T["kmac"+e].update(t,n,o,i)[r]()}},S=function(e,t,r,n){for(var o=0;o<m.length;++o){var i=m[o];e[i]=t(r,n,i);}return e},E=function(e,t){var r=A(e,t,"hex");return r.create=function(){return new D(e,t,e)},r.update=function(e){return r.create().update(e)},S(r,A,e,t)},_=[{name:"keccak",padding:[1,256,65536,16777216],bits:y,createMethod:E},{name:"sha3",padding:[6,1536,393216,100663296],bits:y,createMethod:E},{name:"shake",padding:[31,7936,2031616,520093696],bits:g,createMethod:function(e,t){var r=w(e,t,"hex");return r.create=function(r){return new D(e,t,r)},r.update=function(e,t){return r.create(t).update(e)},S(r,w,e,t)}},{name:"cshake",padding:p,bits:g,createMethod:function(e,t){var r=b[e],n=v(e,0,"hex");return n.create=function(n,o,i){return o||i?new D(e,t,n).bytepad([o,i],r):T["shake"+e].create(n)},n.update=function(e,t,r,o){return n.create(t,r,o).update(e)},S(n,v,e,t)}},{name:"kmac",padding:p,bits:g,createMethod:function(e,t){var r=b[e],n=x(e,0,"hex");return n.create=function(n,o,i){return new N(e,t,o).bytepad(["KMAC",i],r).bytepad([n],r)},n.update=function(e,t,r,o){return n.create(e,r,o).update(t)},S(n,x,e,t)}}],T={},k=[],B=0;B<_.length;++B)for(var U=_[B],I=U.bits,R=0;R<I.length;++R){var O=U.name+"_"+I[R];if(k.push(O),T[O]=U.createMethod(I[R],U.padding),"sha3"!==U.name){var C=U.name+I[R];k.push(C),T[C]=T[O];}}function D(e,t,r){this.blocks=[],this.s=[],this.padding=t,this.outputBits=r,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(e<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var n=0;n<50;++n)this.s[n]=0;}function N(e,t,r){D.call(this,e,t,r);}D.prototype.update=function(e){if(this.finalized)throw new Error("finalize already called");var t,r=typeof e;if("string"!==r){if("object"!==r)throw new Error(o);if(null===e)throw new Error(o);if(h&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||h&&ArrayBuffer.isView(e)))throw new Error(o);t=!0;}for(var n,i,s=this.blocks,a=this.byteCount,c=e.length,u=this.blockCount,l=0,p=this.s;l<c;){if(this.reset)for(this.reset=!1,s[0]=this.block,n=1;n<u+1;++n)s[n]=0;if(t)for(n=this.start;l<c&&n<a;++l)s[n>>2]|=e[l]<<f[3&n++];else for(n=this.start;l<c&&n<a;++l)(i=e.charCodeAt(l))<128?s[n>>2]|=i<<f[3&n++]:i<2048?(s[n>>2]|=(192|i>>6)<<f[3&n++],s[n>>2]|=(128|63&i)<<f[3&n++]):i<55296||i>=57344?(s[n>>2]|=(224|i>>12)<<f[3&n++],s[n>>2]|=(128|i>>6&63)<<f[3&n++],s[n>>2]|=(128|63&i)<<f[3&n++]):(i=65536+((1023&i)<<10|1023&e.charCodeAt(++l)),s[n>>2]|=(240|i>>18)<<f[3&n++],s[n>>2]|=(128|i>>12&63)<<f[3&n++],s[n>>2]|=(128|i>>6&63)<<f[3&n++],s[n>>2]|=(128|63&i)<<f[3&n++]);if(this.lastByteIndex=n,n>=a){for(this.start=n-a,this.block=s[u],n=0;n<u;++n)p[n]^=s[n];P(p),this.reset=!0;}else this.start=n;}return this},D.prototype.encode=function(e,t){var r=255&e,n=1,o=[r];for(r=255&(e>>=8);r>0;)o.unshift(r),r=255&(e>>=8),++n;return t?o.push(n):o.unshift(n),this.update(o),o.length},D.prototype.encodeString=function(e){var t,r=typeof e;if("string"!==r){if("object"!==r)throw new Error(o);if(null===e)throw new Error(o);if(h&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||h&&ArrayBuffer.isView(e)))throw new Error(o);t=!0;}var n=0,i=e.length;if(t)n=i;else for(var s=0;s<e.length;++s){var a=e.charCodeAt(s);a<128?n+=1:a<2048?n+=2:a<55296||a>=57344?n+=3:(a=65536+((1023&a)<<10|1023&e.charCodeAt(++s)),n+=4);}return n+=this.encode(8*n),this.update(e),n},D.prototype.bytepad=function(e,t){for(var r=this.encode(t),n=0;n<e.length;++n)r+=this.encodeString(e[n]);var o=t-r%t,i=[];return i.length=o,this.update(i),this},D.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex,r=this.blockCount,n=this.s;if(e[t>>2]|=this.padding[3&t],this.lastByteIndex===this.byteCount)for(e[0]=e[r],t=1;t<r+1;++t)e[t]=0;for(e[r-1]|=2147483648,t=0;t<r;++t)n[t]^=e[t];P(n);}},D.prototype.toString=D.prototype.hex=function(){this.finalize();for(var e,t=this.blockCount,r=this.s,n=this.outputBlocks,o=this.extraBytes,i=0,s=0,a="";s<n;){for(i=0;i<t&&s<n;++i,++s)e=r[i],a+=l[e>>4&15]+l[15&e]+l[e>>12&15]+l[e>>8&15]+l[e>>20&15]+l[e>>16&15]+l[e>>28&15]+l[e>>24&15];s%t==0&&(P(r),i=0);}return o&&(e=r[i],a+=l[e>>4&15]+l[15&e],o>1&&(a+=l[e>>12&15]+l[e>>8&15]),o>2&&(a+=l[e>>20&15]+l[e>>16&15])),a},D.prototype.arrayBuffer=function(){this.finalize();var e,t=this.blockCount,r=this.s,n=this.outputBlocks,o=this.extraBytes,i=0,s=0,a=this.outputBits>>3;e=o?new ArrayBuffer(n+1<<2):new ArrayBuffer(a);for(var c=new Uint32Array(e);s<n;){for(i=0;i<t&&s<n;++i,++s)c[s]=r[i];s%t==0&&P(r);}return o&&(c[i]=r[i],e=e.slice(0,a)),e},D.prototype.buffer=D.prototype.arrayBuffer,D.prototype.digest=D.prototype.array=function(){this.finalize();for(var e,t,r=this.blockCount,n=this.s,o=this.outputBlocks,i=this.extraBytes,s=0,a=0,c=[];a<o;){for(s=0;s<r&&a<o;++s,++a)e=a<<2,t=n[s],c[e]=255&t,c[e+1]=t>>8&255,c[e+2]=t>>16&255,c[e+3]=t>>24&255;a%r==0&&P(n);}return i&&(e=a<<2,t=n[s],c[e]=255&t,i>1&&(c[e+1]=t>>8&255),i>2&&(c[e+2]=t>>16&255)),c},N.prototype=new D,N.prototype.finalize=function(){return this.encode(this.outputBits,!0),D.prototype.finalize.call(this)};var P=function(e){var t,r,n,o,i,s,a,c,u,h,l,p,f,y,g,m,b,A,w,v,x,S,E,_,T,k,B,U,I,R,O,C,D,N,P,j,F,L,z,M,H,G,K,q,V,W,$,X,Q,Y,J,Z,ee,te,re,ne,oe,ie,se,ae,ce,ue,he;for(n=0;n<48;n+=2)o=e[0]^e[10]^e[20]^e[30]^e[40],i=e[1]^e[11]^e[21]^e[31]^e[41],s=e[2]^e[12]^e[22]^e[32]^e[42],a=e[3]^e[13]^e[23]^e[33]^e[43],c=e[4]^e[14]^e[24]^e[34]^e[44],u=e[5]^e[15]^e[25]^e[35]^e[45],h=e[6]^e[16]^e[26]^e[36]^e[46],l=e[7]^e[17]^e[27]^e[37]^e[47],t=(p=e[8]^e[18]^e[28]^e[38]^e[48])^(s<<1|a>>>31),r=(f=e[9]^e[19]^e[29]^e[39]^e[49])^(a<<1|s>>>31),e[0]^=t,e[1]^=r,e[10]^=t,e[11]^=r,e[20]^=t,e[21]^=r,e[30]^=t,e[31]^=r,e[40]^=t,e[41]^=r,t=o^(c<<1|u>>>31),r=i^(u<<1|c>>>31),e[2]^=t,e[3]^=r,e[12]^=t,e[13]^=r,e[22]^=t,e[23]^=r,e[32]^=t,e[33]^=r,e[42]^=t,e[43]^=r,t=s^(h<<1|l>>>31),r=a^(l<<1|h>>>31),e[4]^=t,e[5]^=r,e[14]^=t,e[15]^=r,e[24]^=t,e[25]^=r,e[34]^=t,e[35]^=r,e[44]^=t,e[45]^=r,t=c^(p<<1|f>>>31),r=u^(f<<1|p>>>31),e[6]^=t,e[7]^=r,e[16]^=t,e[17]^=r,e[26]^=t,e[27]^=r,e[36]^=t,e[37]^=r,e[46]^=t,e[47]^=r,t=h^(o<<1|i>>>31),r=l^(i<<1|o>>>31),e[8]^=t,e[9]^=r,e[18]^=t,e[19]^=r,e[28]^=t,e[29]^=r,e[38]^=t,e[39]^=r,e[48]^=t,e[49]^=r,y=e[0],g=e[1],W=e[11]<<4|e[10]>>>28,$=e[10]<<4|e[11]>>>28,U=e[20]<<3|e[21]>>>29,I=e[21]<<3|e[20]>>>29,ae=e[31]<<9|e[30]>>>23,ce=e[30]<<9|e[31]>>>23,G=e[40]<<18|e[41]>>>14,K=e[41]<<18|e[40]>>>14,N=e[2]<<1|e[3]>>>31,P=e[3]<<1|e[2]>>>31,m=e[13]<<12|e[12]>>>20,b=e[12]<<12|e[13]>>>20,X=e[22]<<10|e[23]>>>22,Q=e[23]<<10|e[22]>>>22,R=e[33]<<13|e[32]>>>19,O=e[32]<<13|e[33]>>>19,ue=e[42]<<2|e[43]>>>30,he=e[43]<<2|e[42]>>>30,te=e[5]<<30|e[4]>>>2,re=e[4]<<30|e[5]>>>2,j=e[14]<<6|e[15]>>>26,F=e[15]<<6|e[14]>>>26,A=e[25]<<11|e[24]>>>21,w=e[24]<<11|e[25]>>>21,Y=e[34]<<15|e[35]>>>17,J=e[35]<<15|e[34]>>>17,C=e[45]<<29|e[44]>>>3,D=e[44]<<29|e[45]>>>3,_=e[6]<<28|e[7]>>>4,T=e[7]<<28|e[6]>>>4,ne=e[17]<<23|e[16]>>>9,oe=e[16]<<23|e[17]>>>9,L=e[26]<<25|e[27]>>>7,z=e[27]<<25|e[26]>>>7,v=e[36]<<21|e[37]>>>11,x=e[37]<<21|e[36]>>>11,Z=e[47]<<24|e[46]>>>8,ee=e[46]<<24|e[47]>>>8,q=e[8]<<27|e[9]>>>5,V=e[9]<<27|e[8]>>>5,k=e[18]<<20|e[19]>>>12,B=e[19]<<20|e[18]>>>12,ie=e[29]<<7|e[28]>>>25,se=e[28]<<7|e[29]>>>25,M=e[38]<<8|e[39]>>>24,H=e[39]<<8|e[38]>>>24,S=e[48]<<14|e[49]>>>18,E=e[49]<<14|e[48]>>>18,e[0]=y^~m&A,e[1]=g^~b&w,e[10]=_^~k&U,e[11]=T^~B&I,e[20]=N^~j&L,e[21]=P^~F&z,e[30]=q^~W&X,e[31]=V^~$&Q,e[40]=te^~ne&ie,e[41]=re^~oe&se,e[2]=m^~A&v,e[3]=b^~w&x,e[12]=k^~U&R,e[13]=B^~I&O,e[22]=j^~L&M,e[23]=F^~z&H,e[32]=W^~X&Y,e[33]=$^~Q&J,e[42]=ne^~ie&ae,e[43]=oe^~se&ce,e[4]=A^~v&S,e[5]=w^~x&E,e[14]=U^~R&C,e[15]=I^~O&D,e[24]=L^~M&G,e[25]=z^~H&K,e[34]=X^~Y&Z,e[35]=Q^~J&ee,e[44]=ie^~ae&ue,e[45]=se^~ce&he,e[6]=v^~S&y,e[7]=x^~E&g,e[16]=R^~C&_,e[17]=O^~D&T,e[26]=M^~G&N,e[27]=H^~K&P,e[36]=Y^~Z&q,e[37]=J^~ee&V,e[46]=ae^~ue&te,e[47]=ce^~he&re,e[8]=S^~y&m,e[9]=E^~g&b,e[18]=C^~_&k,e[19]=D^~T&B,e[28]=G^~N&j,e[29]=K^~P&F,e[38]=Z^~q&W,e[39]=ee^~V&$,e[48]=ue^~te&ne,e[49]=he^~re&oe,e[0]^=d[n],e[1]^=d[n+1];};if(c)e.exports=T;else {for(B=0;B<k.length;++B)s[k[B]]=T[k[B]];u&&(void 0===(n=function(){return T}.call(t,r,t,e))||(e.exports=n));}}();},9757:(e,t,r)=>{var n;!function(){var t="input is invalid type",o="object"==typeof window,i=o?window:{};i.JS_SHA512_NO_WINDOW&&(o=!1);var s=!o&&"object"==typeof self;!i.JS_SHA512_NO_NODE_JS&&"object"==typeof browser$1&&browser$1.versions&&browser$1.versions.node?i=r.g:s&&(i=self);var a=!i.JS_SHA512_NO_COMMON_JS&&e.exports,c=r.amdO,u=!i.JS_SHA512_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,h="0123456789abcdef".split(""),l=[-2147483648,8388608,32768,128],p=[24,16,8,0],f=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],d=["hex","array","digest","arrayBuffer"],y=[];!i.JS_SHA512_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return "[object Array]"===Object.prototype.toString.call(e)}),!u||!i.JS_SHA512_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return "object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var g=function(e,t){return function(r){return new w(t,!0).update(r)[e]()}},m=function(e){var t=g("hex",e);t.create=function(){return new w(e)},t.update=function(e){return t.create().update(e)};for(var r=0;r<d.length;++r){var n=d[r];t[n]=g(n,e);}return t},b=function(e,t){return function(r,n){return new v(r,t,!0).update(n)[e]()}},A=function(e){var t=b("hex",e);t.create=function(t){return new v(t,e)},t.update=function(e,r){return t.create(e).update(r)};for(var r=0;r<d.length;++r){var n=d[r];t[n]=b(n,e);}return t};function w(e,t){t?(y[0]=y[1]=y[2]=y[3]=y[4]=y[5]=y[6]=y[7]=y[8]=y[9]=y[10]=y[11]=y[12]=y[13]=y[14]=y[15]=y[16]=y[17]=y[18]=y[19]=y[20]=y[21]=y[22]=y[23]=y[24]=y[25]=y[26]=y[27]=y[28]=y[29]=y[30]=y[31]=y[32]=0,this.blocks=y):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],384==e?(this.h0h=3418070365,this.h0l=3238371032,this.h1h=1654270250,this.h1l=914150663,this.h2h=2438529370,this.h2l=812702999,this.h3h=355462360,this.h3l=4144912697,this.h4h=1731405415,this.h4l=4290775857,this.h5h=2394180231,this.h5l=1750603025,this.h6h=3675008525,this.h6l=1694076839,this.h7h=1203062813,this.h7l=3204075428):256==e?(this.h0h=573645204,this.h0l=4230739756,this.h1h=2673172387,this.h1l=3360449730,this.h2h=596883563,this.h2l=1867755857,this.h3h=2520282905,this.h3l=1497426621,this.h4h=2519219938,this.h4l=2827943907,this.h5h=3193839141,this.h5l=1401305490,this.h6h=721525244,this.h6l=746961066,this.h7h=246885852,this.h7l=2177182882):224==e?(this.h0h=2352822216,this.h0l=424955298,this.h1h=1944164710,this.h1l=2312950998,this.h2h=502970286,this.h2l=855612546,this.h3h=1738396948,this.h3l=1479516111,this.h4h=258812777,this.h4l=2077511080,this.h5h=2011393907,this.h5l=79989058,this.h6h=1067287976,this.h6l=1780299464,this.h7h=286451373,this.h7l=2446758561):(this.h0h=1779033703,this.h0l=4089235720,this.h1h=3144134277,this.h1l=2227873595,this.h2h=1013904242,this.h2l=4271175723,this.h3h=2773480762,this.h3l=1595750129,this.h4h=1359893119,this.h4l=2917565137,this.h5h=2600822924,this.h5l=725511199,this.h6h=528734635,this.h6l=4215389547,this.h7h=1541459225,this.h7l=327033209),this.bits=e,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1;}function v(e,r,n){var o,i=typeof e;if("string"!==i){if("object"!==i)throw new Error(t);if(null===e)throw new Error(t);if(u&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||u&&ArrayBuffer.isView(e)))throw new Error(t);o=!0;}var s=e.length;if(!o){for(var a,c=[],h=(s=e.length,0),l=0;l<s;++l)(a=e.charCodeAt(l))<128?c[h++]=a:a<2048?(c[h++]=192|a>>6,c[h++]=128|63&a):a<55296||a>=57344?(c[h++]=224|a>>12,c[h++]=128|a>>6&63,c[h++]=128|63&a):(a=65536+((1023&a)<<10|1023&e.charCodeAt(++l)),c[h++]=240|a>>18,c[h++]=128|a>>12&63,c[h++]=128|a>>6&63,c[h++]=128|63&a);e=c;}e.length>128&&(e=new w(r,!0).update(e).array());var p=[],f=[];for(l=0;l<128;++l){var d=e[l]||0;p[l]=92^d,f[l]=54^d;}w.call(this,r,n),this.update(f),this.oKeyPad=p,this.inner=!0,this.sharedMemory=n;}w.prototype.update=function(e){if(this.finalized)throw new Error("finalize already called");var r,n=typeof e;if("string"!==n){if("object"!==n)throw new Error(t);if(null===e)throw new Error(t);if(u&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||u&&ArrayBuffer.isView(e)))throw new Error(t);r=!0;}for(var o,i,s=0,a=e.length,c=this.blocks;s<a;){if(this.hashed&&(this.hashed=!1,c[0]=this.block,c[1]=c[2]=c[3]=c[4]=c[5]=c[6]=c[7]=c[8]=c[9]=c[10]=c[11]=c[12]=c[13]=c[14]=c[15]=c[16]=c[17]=c[18]=c[19]=c[20]=c[21]=c[22]=c[23]=c[24]=c[25]=c[26]=c[27]=c[28]=c[29]=c[30]=c[31]=c[32]=0),r)for(i=this.start;s<a&&i<128;++s)c[i>>2]|=e[s]<<p[3&i++];else for(i=this.start;s<a&&i<128;++s)(o=e.charCodeAt(s))<128?c[i>>2]|=o<<p[3&i++]:o<2048?(c[i>>2]|=(192|o>>6)<<p[3&i++],c[i>>2]|=(128|63&o)<<p[3&i++]):o<55296||o>=57344?(c[i>>2]|=(224|o>>12)<<p[3&i++],c[i>>2]|=(128|o>>6&63)<<p[3&i++],c[i>>2]|=(128|63&o)<<p[3&i++]):(o=65536+((1023&o)<<10|1023&e.charCodeAt(++s)),c[i>>2]|=(240|o>>18)<<p[3&i++],c[i>>2]|=(128|o>>12&63)<<p[3&i++],c[i>>2]|=(128|o>>6&63)<<p[3&i++],c[i>>2]|=(128|63&o)<<p[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=128?(this.block=c[32],this.start=i-128,this.hash(),this.hashed=!0):this.start=i;}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this},w.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[32]=this.block,e[t>>2]|=l[3&t],this.block=e[32],t>=112&&(this.hashed||this.hash(),e[0]=this.block,e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=e[16]=e[17]=e[18]=e[19]=e[20]=e[21]=e[22]=e[23]=e[24]=e[25]=e[26]=e[27]=e[28]=e[29]=e[30]=e[31]=e[32]=0),e[30]=this.hBytes<<3|this.bytes>>>29,e[31]=this.bytes<<3,this.hash();}},w.prototype.hash=function(){var e,t,r,n,o,i,s,a,c,u,h,l,p,d,y,g,m,b,A,w,v,x,S,E,_,T=this.h0h,k=this.h0l,B=this.h1h,U=this.h1l,I=this.h2h,R=this.h2l,O=this.h3h,C=this.h3l,D=this.h4h,N=this.h4l,P=this.h5h,j=this.h5l,F=this.h6h,L=this.h6l,z=this.h7h,M=this.h7l,H=this.blocks;for(e=32;e<160;e+=2)t=((w=H[e-30])>>>1|(v=H[e-29])<<31)^(w>>>8|v<<24)^w>>>7,r=(v>>>1|w<<31)^(v>>>8|w<<24)^(v>>>7|w<<25),n=((w=H[e-4])>>>19|(v=H[e-3])<<13)^(v>>>29|w<<3)^w>>>6,o=(v>>>19|w<<13)^(w>>>29|v<<3)^(v>>>6|w<<26),w=H[e-32],v=H[e-31],c=((x=H[e-14])>>>16)+(w>>>16)+(t>>>16)+(n>>>16)+((a=(65535&x)+(65535&w)+(65535&t)+(65535&n)+((s=((S=H[e-13])>>>16)+(v>>>16)+(r>>>16)+(o>>>16)+((i=(65535&S)+(65535&v)+(65535&r)+(65535&o))>>>16))>>>16))>>>16),H[e]=c<<16|65535&a,H[e+1]=s<<16|65535&i;var G=T,K=k,q=B,V=U,W=I,$=R,X=O,Q=C,Y=D,J=N,Z=P,ee=j,te=F,re=L,ne=z,oe=M;for(g=q&W,m=V&$,e=0;e<160;e+=8)t=(G>>>28|K<<4)^(K>>>2|G<<30)^(K>>>7|G<<25),r=(K>>>28|G<<4)^(G>>>2|K<<30)^(G>>>7|K<<25),n=(Y>>>14|J<<18)^(Y>>>18|J<<14)^(J>>>9|Y<<23),o=(J>>>14|Y<<18)^(J>>>18|Y<<14)^(Y>>>9|J<<23),b=(u=G&q)^G&W^g,A=(h=K&V)^K&$^m,E=Y&Z^~Y&te,_=J&ee^~J&re,w=H[e],v=H[e+1],w=(c=((x=f[e])>>>16)+(w>>>16)+(E>>>16)+(n>>>16)+(ne>>>16)+((a=(65535&x)+(65535&w)+(65535&E)+(65535&n)+(65535&ne)+((s=((S=f[e+1])>>>16)+(v>>>16)+(_>>>16)+(o>>>16)+(oe>>>16)+((i=(65535&S)+(65535&v)+(65535&_)+(65535&o)+(65535&oe))>>>16))>>>16))>>>16))<<16|65535&a,v=s<<16|65535&i,x=(c=(b>>>16)+(t>>>16)+((a=(65535&b)+(65535&t)+((s=(A>>>16)+(r>>>16)+((i=(65535&A)+(65535&r))>>>16))>>>16))>>>16))<<16|65535&a,S=s<<16|65535&i,ne=(c=(X>>>16)+(w>>>16)+((a=(65535&X)+(65535&w)+((s=(Q>>>16)+(v>>>16)+((i=(65535&Q)+(65535&v))>>>16))>>>16))>>>16))<<16|65535&a,oe=s<<16|65535&i,t=((X=(c=(x>>>16)+(w>>>16)+((a=(65535&x)+(65535&w)+((s=(S>>>16)+(v>>>16)+((i=(65535&S)+(65535&v))>>>16))>>>16))>>>16))<<16|65535&a)>>>28|(Q=s<<16|65535&i)<<4)^(Q>>>2|X<<30)^(Q>>>7|X<<25),r=(Q>>>28|X<<4)^(X>>>2|Q<<30)^(X>>>7|Q<<25),n=(ne>>>14|oe<<18)^(ne>>>18|oe<<14)^(oe>>>9|ne<<23),o=(oe>>>14|ne<<18)^(oe>>>18|ne<<14)^(ne>>>9|oe<<23),b=(l=X&G)^X&q^u,A=(p=Q&K)^Q&V^h,E=ne&Y^~ne&Z,_=oe&J^~oe&ee,w=H[e+2],v=H[e+3],w=(c=((x=f[e+2])>>>16)+(w>>>16)+(E>>>16)+(n>>>16)+(te>>>16)+((a=(65535&x)+(65535&w)+(65535&E)+(65535&n)+(65535&te)+((s=((S=f[e+3])>>>16)+(v>>>16)+(_>>>16)+(o>>>16)+(re>>>16)+((i=(65535&S)+(65535&v)+(65535&_)+(65535&o)+(65535&re))>>>16))>>>16))>>>16))<<16|65535&a,v=s<<16|65535&i,x=(c=(b>>>16)+(t>>>16)+((a=(65535&b)+(65535&t)+((s=(A>>>16)+(r>>>16)+((i=(65535&A)+(65535&r))>>>16))>>>16))>>>16))<<16|65535&a,S=s<<16|65535&i,te=(c=(W>>>16)+(w>>>16)+((a=(65535&W)+(65535&w)+((s=($>>>16)+(v>>>16)+((i=(65535&$)+(65535&v))>>>16))>>>16))>>>16))<<16|65535&a,re=s<<16|65535&i,t=((W=(c=(x>>>16)+(w>>>16)+((a=(65535&x)+(65535&w)+((s=(S>>>16)+(v>>>16)+((i=(65535&S)+(65535&v))>>>16))>>>16))>>>16))<<16|65535&a)>>>28|($=s<<16|65535&i)<<4)^($>>>2|W<<30)^($>>>7|W<<25),r=($>>>28|W<<4)^(W>>>2|$<<30)^(W>>>7|$<<25),n=(te>>>14|re<<18)^(te>>>18|re<<14)^(re>>>9|te<<23),o=(re>>>14|te<<18)^(re>>>18|te<<14)^(te>>>9|re<<23),b=(d=W&X)^W&G^l,A=(y=$&Q)^$&K^p,E=te&ne^~te&Y,_=re&oe^~re&J,w=H[e+4],v=H[e+5],w=(c=((x=f[e+4])>>>16)+(w>>>16)+(E>>>16)+(n>>>16)+(Z>>>16)+((a=(65535&x)+(65535&w)+(65535&E)+(65535&n)+(65535&Z)+((s=((S=f[e+5])>>>16)+(v>>>16)+(_>>>16)+(o>>>16)+(ee>>>16)+((i=(65535&S)+(65535&v)+(65535&_)+(65535&o)+(65535&ee))>>>16))>>>16))>>>16))<<16|65535&a,v=s<<16|65535&i,x=(c=(b>>>16)+(t>>>16)+((a=(65535&b)+(65535&t)+((s=(A>>>16)+(r>>>16)+((i=(65535&A)+(65535&r))>>>16))>>>16))>>>16))<<16|65535&a,S=s<<16|65535&i,Z=(c=(q>>>16)+(w>>>16)+((a=(65535&q)+(65535&w)+((s=(V>>>16)+(v>>>16)+((i=(65535&V)+(65535&v))>>>16))>>>16))>>>16))<<16|65535&a,ee=s<<16|65535&i,t=((q=(c=(x>>>16)+(w>>>16)+((a=(65535&x)+(65535&w)+((s=(S>>>16)+(v>>>16)+((i=(65535&S)+(65535&v))>>>16))>>>16))>>>16))<<16|65535&a)>>>28|(V=s<<16|65535&i)<<4)^(V>>>2|q<<30)^(V>>>7|q<<25),r=(V>>>28|q<<4)^(q>>>2|V<<30)^(q>>>7|V<<25),n=(Z>>>14|ee<<18)^(Z>>>18|ee<<14)^(ee>>>9|Z<<23),o=(ee>>>14|Z<<18)^(ee>>>18|Z<<14)^(Z>>>9|ee<<23),b=(g=q&W)^q&X^d,A=(m=V&$)^V&Q^y,E=Z&te^~Z&ne,_=ee&re^~ee&oe,w=H[e+6],v=H[e+7],w=(c=((x=f[e+6])>>>16)+(w>>>16)+(E>>>16)+(n>>>16)+(Y>>>16)+((a=(65535&x)+(65535&w)+(65535&E)+(65535&n)+(65535&Y)+((s=((S=f[e+7])>>>16)+(v>>>16)+(_>>>16)+(o>>>16)+(J>>>16)+((i=(65535&S)+(65535&v)+(65535&_)+(65535&o)+(65535&J))>>>16))>>>16))>>>16))<<16|65535&a,v=s<<16|65535&i,x=(c=(b>>>16)+(t>>>16)+((a=(65535&b)+(65535&t)+((s=(A>>>16)+(r>>>16)+((i=(65535&A)+(65535&r))>>>16))>>>16))>>>16))<<16|65535&a,S=s<<16|65535&i,Y=(c=(G>>>16)+(w>>>16)+((a=(65535&G)+(65535&w)+((s=(K>>>16)+(v>>>16)+((i=(65535&K)+(65535&v))>>>16))>>>16))>>>16))<<16|65535&a,J=s<<16|65535&i,G=(c=(x>>>16)+(w>>>16)+((a=(65535&x)+(65535&w)+((s=(S>>>16)+(v>>>16)+((i=(65535&S)+(65535&v))>>>16))>>>16))>>>16))<<16|65535&a,K=s<<16|65535&i;c=(T>>>16)+(G>>>16)+((a=(65535&T)+(65535&G)+((s=(k>>>16)+(K>>>16)+((i=(65535&k)+(65535&K))>>>16))>>>16))>>>16),this.h0h=c<<16|65535&a,this.h0l=s<<16|65535&i,c=(B>>>16)+(q>>>16)+((a=(65535&B)+(65535&q)+((s=(U>>>16)+(V>>>16)+((i=(65535&U)+(65535&V))>>>16))>>>16))>>>16),this.h1h=c<<16|65535&a,this.h1l=s<<16|65535&i,c=(I>>>16)+(W>>>16)+((a=(65535&I)+(65535&W)+((s=(R>>>16)+($>>>16)+((i=(65535&R)+(65535&$))>>>16))>>>16))>>>16),this.h2h=c<<16|65535&a,this.h2l=s<<16|65535&i,c=(O>>>16)+(X>>>16)+((a=(65535&O)+(65535&X)+((s=(C>>>16)+(Q>>>16)+((i=(65535&C)+(65535&Q))>>>16))>>>16))>>>16),this.h3h=c<<16|65535&a,this.h3l=s<<16|65535&i,c=(D>>>16)+(Y>>>16)+((a=(65535&D)+(65535&Y)+((s=(N>>>16)+(J>>>16)+((i=(65535&N)+(65535&J))>>>16))>>>16))>>>16),this.h4h=c<<16|65535&a,this.h4l=s<<16|65535&i,c=(P>>>16)+(Z>>>16)+((a=(65535&P)+(65535&Z)+((s=(j>>>16)+(ee>>>16)+((i=(65535&j)+(65535&ee))>>>16))>>>16))>>>16),this.h5h=c<<16|65535&a,this.h5l=s<<16|65535&i,c=(F>>>16)+(te>>>16)+((a=(65535&F)+(65535&te)+((s=(L>>>16)+(re>>>16)+((i=(65535&L)+(65535&re))>>>16))>>>16))>>>16),this.h6h=c<<16|65535&a,this.h6l=s<<16|65535&i,c=(z>>>16)+(ne>>>16)+((a=(65535&z)+(65535&ne)+((s=(M>>>16)+(oe>>>16)+((i=(65535&M)+(65535&oe))>>>16))>>>16))>>>16),this.h7h=c<<16|65535&a,this.h7l=s<<16|65535&i;},w.prototype.hex=function(){this.finalize();var e=this.h0h,t=this.h0l,r=this.h1h,n=this.h1l,o=this.h2h,i=this.h2l,s=this.h3h,a=this.h3l,c=this.h4h,u=this.h4l,l=this.h5h,p=this.h5l,f=this.h6h,d=this.h6l,y=this.h7h,g=this.h7l,m=this.bits,b=h[e>>28&15]+h[e>>24&15]+h[e>>20&15]+h[e>>16&15]+h[e>>12&15]+h[e>>8&15]+h[e>>4&15]+h[15&e]+h[t>>28&15]+h[t>>24&15]+h[t>>20&15]+h[t>>16&15]+h[t>>12&15]+h[t>>8&15]+h[t>>4&15]+h[15&t]+h[r>>28&15]+h[r>>24&15]+h[r>>20&15]+h[r>>16&15]+h[r>>12&15]+h[r>>8&15]+h[r>>4&15]+h[15&r]+h[n>>28&15]+h[n>>24&15]+h[n>>20&15]+h[n>>16&15]+h[n>>12&15]+h[n>>8&15]+h[n>>4&15]+h[15&n]+h[o>>28&15]+h[o>>24&15]+h[o>>20&15]+h[o>>16&15]+h[o>>12&15]+h[o>>8&15]+h[o>>4&15]+h[15&o]+h[i>>28&15]+h[i>>24&15]+h[i>>20&15]+h[i>>16&15]+h[i>>12&15]+h[i>>8&15]+h[i>>4&15]+h[15&i]+h[s>>28&15]+h[s>>24&15]+h[s>>20&15]+h[s>>16&15]+h[s>>12&15]+h[s>>8&15]+h[s>>4&15]+h[15&s];return m>=256&&(b+=h[a>>28&15]+h[a>>24&15]+h[a>>20&15]+h[a>>16&15]+h[a>>12&15]+h[a>>8&15]+h[a>>4&15]+h[15&a]),m>=384&&(b+=h[c>>28&15]+h[c>>24&15]+h[c>>20&15]+h[c>>16&15]+h[c>>12&15]+h[c>>8&15]+h[c>>4&15]+h[15&c]+h[u>>28&15]+h[u>>24&15]+h[u>>20&15]+h[u>>16&15]+h[u>>12&15]+h[u>>8&15]+h[u>>4&15]+h[15&u]+h[l>>28&15]+h[l>>24&15]+h[l>>20&15]+h[l>>16&15]+h[l>>12&15]+h[l>>8&15]+h[l>>4&15]+h[15&l]+h[p>>28&15]+h[p>>24&15]+h[p>>20&15]+h[p>>16&15]+h[p>>12&15]+h[p>>8&15]+h[p>>4&15]+h[15&p]),512==m&&(b+=h[f>>28&15]+h[f>>24&15]+h[f>>20&15]+h[f>>16&15]+h[f>>12&15]+h[f>>8&15]+h[f>>4&15]+h[15&f]+h[d>>28&15]+h[d>>24&15]+h[d>>20&15]+h[d>>16&15]+h[d>>12&15]+h[d>>8&15]+h[d>>4&15]+h[15&d]+h[y>>28&15]+h[y>>24&15]+h[y>>20&15]+h[y>>16&15]+h[y>>12&15]+h[y>>8&15]+h[y>>4&15]+h[15&y]+h[g>>28&15]+h[g>>24&15]+h[g>>20&15]+h[g>>16&15]+h[g>>12&15]+h[g>>8&15]+h[g>>4&15]+h[15&g]),b},w.prototype.toString=w.prototype.hex,w.prototype.digest=function(){this.finalize();var e=this.h0h,t=this.h0l,r=this.h1h,n=this.h1l,o=this.h2h,i=this.h2l,s=this.h3h,a=this.h3l,c=this.h4h,u=this.h4l,h=this.h5h,l=this.h5l,p=this.h6h,f=this.h6l,d=this.h7h,y=this.h7l,g=this.bits,m=[e>>24&255,e>>16&255,e>>8&255,255&e,t>>24&255,t>>16&255,t>>8&255,255&t,r>>24&255,r>>16&255,r>>8&255,255&r,n>>24&255,n>>16&255,n>>8&255,255&n,o>>24&255,o>>16&255,o>>8&255,255&o,i>>24&255,i>>16&255,i>>8&255,255&i,s>>24&255,s>>16&255,s>>8&255,255&s];return g>=256&&m.push(a>>24&255,a>>16&255,a>>8&255,255&a),g>=384&&m.push(c>>24&255,c>>16&255,c>>8&255,255&c,u>>24&255,u>>16&255,u>>8&255,255&u,h>>24&255,h>>16&255,h>>8&255,255&h,l>>24&255,l>>16&255,l>>8&255,255&l),512==g&&m.push(p>>24&255,p>>16&255,p>>8&255,255&p,f>>24&255,f>>16&255,f>>8&255,255&f,d>>24&255,d>>16&255,d>>8&255,255&d,y>>24&255,y>>16&255,y>>8&255,255&y),m},w.prototype.array=w.prototype.digest,w.prototype.arrayBuffer=function(){this.finalize();var e=this.bits,t=new ArrayBuffer(e/8),r=new DataView(t);return r.setUint32(0,this.h0h),r.setUint32(4,this.h0l),r.setUint32(8,this.h1h),r.setUint32(12,this.h1l),r.setUint32(16,this.h2h),r.setUint32(20,this.h2l),r.setUint32(24,this.h3h),e>=256&&r.setUint32(28,this.h3l),e>=384&&(r.setUint32(32,this.h4h),r.setUint32(36,this.h4l),r.setUint32(40,this.h5h),r.setUint32(44,this.h5l)),512==e&&(r.setUint32(48,this.h6h),r.setUint32(52,this.h6l),r.setUint32(56,this.h7h),r.setUint32(60,this.h7l)),t},w.prototype.clone=function(){var e=new w(this.bits,!1);return this.copyTo(e),e},w.prototype.copyTo=function(e){var t=0,r=["h0h","h0l","h1h","h1l","h2h","h2l","h3h","h3l","h4h","h4l","h5h","h5l","h6h","h6l","h7h","h7l","start","bytes","hBytes","finalized","hashed","lastByteIndex"];for(t=0;t<r.length;++t)e[r[t]]=this[r[t]];for(t=0;t<this.blocks.length;++t)e.blocks[t]=this.blocks[t];},v.prototype=new w,v.prototype.finalize=function(){if(w.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();w.call(this,this.bits,this.sharedMemory),this.update(this.oKeyPad),this.update(e),w.prototype.finalize.call(this);}},v.prototype.clone=function(){var e=new v([],this.bits,!1);this.copyTo(e),e.inner=this.inner;for(var t=0;t<this.oKeyPad.length;++t)e.oKeyPad[t]=this.oKeyPad[t];return e};var x=m(512);x.sha512=x,x.sha384=m(384),x.sha512_256=m(256),x.sha512_224=m(224),x.sha512.hmac=A(512),x.sha384.hmac=A(384),x.sha512_256.hmac=A(256),x.sha512_224.hmac=A(224),a?e.exports=x:(i.sha512=x.sha512,i.sha384=x.sha384,i.sha512_256=x.sha512_256,i.sha512_224=x.sha512_224,c&&(void 0===(n=function(){return x}.call(x,r,x,e))||(e.exports=n)));}();},4360:(e,t,r)=>{var n=r(592).stringify,o=r(9385);e.exports=function(e){return {parse:o(e),stringify:n}},e.exports.parse=o(),e.exports.stringify=n;},9385:(e,t,r)=>{var n=null;const o=/(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,i=/(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;e.exports=function(e){var t={strict:!1,storeAsString:!1,alwaysParseAsBig:!1,useNativeBigInt:!1,protoAction:"error",constructorAction:"error"};if(null!=e){if(!0===e.strict&&(t.strict=!0),!0===e.storeAsString&&(t.storeAsString=!0),t.alwaysParseAsBig=!0===e.alwaysParseAsBig&&e.alwaysParseAsBig,t.useNativeBigInt=!0===e.useNativeBigInt&&e.useNativeBigInt,void 0!==e.constructorAction){if("error"!==e.constructorAction&&"ignore"!==e.constructorAction&&"preserve"!==e.constructorAction)throw new Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${e.constructorAction}`);t.constructorAction=e.constructorAction;}if(void 0!==e.protoAction){if("error"!==e.protoAction&&"ignore"!==e.protoAction&&"preserve"!==e.protoAction)throw new Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${e.protoAction}`);t.protoAction=e.protoAction;}}var s,a,c,u,h={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},l=function(e){throw {name:"SyntaxError",message:e,at:s,text:c}},p=function(e){return e&&e!==a&&l("Expected '"+e+"' instead of '"+a+"'"),a=c.charAt(s),s+=1,a},f=function(){var e,o="";for("-"===a&&(o="-",p("-"));a>="0"&&a<="9";)o+=a,p();if("."===a)for(o+=".";p()&&a>="0"&&a<="9";)o+=a;if("e"===a||"E"===a)for(o+=a,p(),"-"!==a&&"+"!==a||(o+=a,p());a>="0"&&a<="9";)o+=a,p();if(e=+o,isFinite(e))return null==n&&(n=r(5117)),o.length>15?t.storeAsString?o:t.useNativeBigInt?BigInt(o):new n(o):t.alwaysParseAsBig?t.useNativeBigInt?BigInt(e):new n(e):e;l("Bad number");},d=function(){var e,t,r,n="";if('"'===a)for(var o=s;p();){if('"'===a)return s-1>o&&(n+=c.substring(o,s-1)),p(),n;if("\\"===a){if(s-1>o&&(n+=c.substring(o,s-1)),p(),"u"===a){for(r=0,t=0;t<4&&(e=parseInt(p(),16),isFinite(e));t+=1)r=16*r+e;n+=String.fromCharCode(r);}else {if("string"!=typeof h[a])break;n+=h[a];}o=s;}}l("Bad string");},y=function(){for(;a&&a<=" ";)p();};return u=function(){switch(y(),a){case"{":return function(){var e,r=Object.create(null);if("{"===a){if(p("{"),y(),"}"===a)return p("}"),r;for(;a;){if(e=d(),y(),p(":"),!0===t.strict&&Object.hasOwnProperty.call(r,e)&&l('Duplicate key "'+e+'"'),!0===o.test(e)?"error"===t.protoAction?l("Object contains forbidden prototype property"):"ignore"===t.protoAction?u():r[e]=u():!0===i.test(e)?"error"===t.constructorAction?l("Object contains forbidden constructor property"):"ignore"===t.constructorAction?u():r[e]=u():r[e]=u(),y(),"}"===a)return p("}"),r;p(","),y();}}l("Bad object");}();case"[":return function(){var e=[];if("["===a){if(p("["),y(),"]"===a)return p("]"),e;for(;a;){if(e.push(u()),y(),"]"===a)return p("]"),e;p(","),y();}}l("Bad array");}();case'"':return d();case"-":return f();default:return a>="0"&&a<="9"?f():function(){switch(a){case"t":return p("t"),p("r"),p("u"),p("e"),!0;case"f":return p("f"),p("a"),p("l"),p("s"),p("e"),!1;case"n":return p("n"),p("u"),p("l"),p("l"),null}l("Unexpected '"+a+"'");}()}},function(e,t){var r;return c=e+"",s=0,a=" ",r=u(),y(),a&&l("Syntax error"),"function"==typeof t?function e(r,n){var o,i=r[n];return i&&"object"==typeof i&&Object.keys(i).forEach((function(t){void 0!==(o=e(i,t))?i[t]=o:delete i[t];})),t.call(r,n,i)}({"":r},""):r}};},592:(e,t,r)=>{var n=r(5117),o=e.exports;!function(){var e,t,r,i=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,s={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function a(e){return i.lastIndex=0,i.test(e)?'"'+e.replace(i,(function(e){var t=s[e];return "string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}function c(o,i){var s,u,h,l,p,f=e,d=i[o],y=null!=d&&(d instanceof n||n.isBigNumber(d));switch(d&&"object"==typeof d&&"function"==typeof d.toJSON&&(d=d.toJSON(o)),"function"==typeof r&&(d=r.call(i,o,d)),typeof d){case"string":return y?d:a(d);case"number":return isFinite(d)?String(d):"null";case"boolean":case"null":case"bigint":return String(d);case"object":if(!d)return "null";if(e+=t,p=[],"[object Array]"===Object.prototype.toString.apply(d)){for(l=d.length,s=0;s<l;s+=1)p[s]=c(s,d)||"null";return h=0===p.length?"[]":e?"[\n"+e+p.join(",\n"+e)+"\n"+f+"]":"["+p.join(",")+"]",e=f,h}if(r&&"object"==typeof r)for(l=r.length,s=0;s<l;s+=1)"string"==typeof r[s]&&(h=c(u=r[s],d))&&p.push(a(u)+(e?": ":":")+h);else Object.keys(d).forEach((function(t){var r=c(t,d);r&&p.push(a(t)+(e?": ":":")+r);}));return h=0===p.length?"{}":e?"{\n"+e+p.join(",\n"+e)+"\n"+f+"}":"{"+p.join(",")+"}",e=f,h}}"function"!=typeof o.stringify&&(o.stringify=function(n,o,i){var s;if(e="",t="","number"==typeof i)for(s=0;s<i;s+=1)t+=" ";else "string"==typeof i&&(t=i);if(r=o,o&&"function"!=typeof o&&("object"!=typeof o||"number"!=typeof o.length))throw new Error("JSON.stringify");return c("",{"":n})});}();},3126:(e,t,r)=>{var n="function"==typeof Map&&Map.prototype,o=Object.getOwnPropertyDescriptor&&n?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,i=n&&o&&"function"==typeof o.get?o.get:null,s=n&&Map.prototype.forEach,a="function"==typeof Set&&Set.prototype,c=Object.getOwnPropertyDescriptor&&a?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,u=a&&c&&"function"==typeof c.get?c.get:null,h=a&&Set.prototype.forEach,l="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,p="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,f="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,d=Boolean.prototype.valueOf,y=Object.prototype.toString,g=Function.prototype.toString,m=String.prototype.match,b="function"==typeof BigInt?BigInt.prototype.valueOf:null,A=Object.getOwnPropertySymbols,w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,v="function"==typeof Symbol&&"object"==typeof Symbol.iterator,x=Object.prototype.propertyIsEnumerable,S=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null),E=r(4654).custom,_=E&&I(E)?E:null,T="function"==typeof Symbol&&void 0!==Symbol.toStringTag?Symbol.toStringTag:null;function k(e,t,r){var n="double"===(r.quoteStyle||t)?'"':"'";return n+e+n}function B(e){return String(e).replace(/"/g,"&quot;")}function U(e){return !("[object Array]"!==C(e)||T&&"object"==typeof e&&T in e)}function I(e){if(v)return e&&"object"==typeof e&&e instanceof Symbol;if("symbol"==typeof e)return !0;if(!e||"object"!=typeof e||!w)return !1;try{return w.call(e),!0}catch(e){}return !1}e.exports=function e(t,r,n,o){var a=r||{};if(O(a,"quoteStyle")&&"single"!==a.quoteStyle&&"double"!==a.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if(O(a,"maxStringLength")&&("number"==typeof a.maxStringLength?a.maxStringLength<0&&a.maxStringLength!==1/0:null!==a.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var c=!O(a,"customInspect")||a.customInspect;if("boolean"!=typeof c)throw new TypeError('option "customInspect", if provided, must be `true` or `false`');if(O(a,"indent")&&null!==a.indent&&"\t"!==a.indent&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');if(void 0===t)return "undefined";if(null===t)return "null";if("boolean"==typeof t)return t?"true":"false";if("string"==typeof t)return N(t,a);if("number"==typeof t)return 0===t?1/0/t>0?"0":"-0":String(t);if("bigint"==typeof t)return String(t)+"n";var y=void 0===a.depth?5:a.depth;if(void 0===n&&(n=0),n>=y&&y>0&&"object"==typeof t)return U(t)?"[Array]":"[Object]";var A,x=function(e,t){var r;if("\t"===e.indent)r="\t";else {if(!("number"==typeof e.indent&&e.indent>0))return null;r=Array(e.indent+1).join(" ");}return {base:r,prev:Array(t+1).join(r)}}(a,n);if(void 0===o)o=[];else if(D(o,t)>=0)return "[Circular]";function E(t,r,i){if(r&&(o=o.slice()).push(r),i){var s={depth:a.depth};return O(a,"quoteStyle")&&(s.quoteStyle=a.quoteStyle),e(t,s,n+1,o)}return e(t,a,n+1,o)}if("function"==typeof t){var R=function(e){if(e.name)return e.name;var t=m.call(g.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}(t),P=M(t,E);return "[Function"+(R?": "+R:" (anonymous)")+"]"+(P.length>0?" { "+P.join(", ")+" }":"")}if(I(t)){var H=v?String(t).replace(/^(Symbol\(.*\))_[^)]*$/,"$1"):w.call(t);return "object"!=typeof t||v?H:j(H)}if((A=t)&&"object"==typeof A&&("undefined"!=typeof HTMLElement&&A instanceof HTMLElement||"string"==typeof A.nodeName&&"function"==typeof A.getAttribute)){for(var G="<"+String(t.nodeName).toLowerCase(),K=t.attributes||[],q=0;q<K.length;q++)G+=" "+K[q].name+"="+k(B(K[q].value),"double",a);return G+=">",t.childNodes&&t.childNodes.length&&(G+="..."),G+"</"+String(t.nodeName).toLowerCase()+">"}if(U(t)){if(0===t.length)return "[]";var V=M(t,E);return x&&!function(e){for(var t=0;t<e.length;t++)if(D(e[t],"\n")>=0)return !1;return !0}(V)?"["+z(V,x)+"]":"[ "+V.join(", ")+" ]"}if(function(e){return !("[object Error]"!==C(e)||T&&"object"==typeof e&&T in e)}(t)){var W=M(t,E);return 0===W.length?"["+String(t)+"]":"{ ["+String(t)+"] "+W.join(", ")+" }"}if("object"==typeof t&&c){if(_&&"function"==typeof t[_])return t[_]();if("function"==typeof t.inspect)return t.inspect()}if(function(e){if(!i||!e||"object"!=typeof e)return !1;try{i.call(e);try{u.call(e);}catch(e){return !0}return e instanceof Map}catch(e){}return !1}(t)){var $=[];return s.call(t,(function(e,r){$.push(E(r,t,!0)+" => "+E(e,t));})),L("Map",i.call(t),$,x)}if(function(e){if(!u||!e||"object"!=typeof e)return !1;try{u.call(e);try{i.call(e);}catch(e){return !0}return e instanceof Set}catch(e){}return !1}(t)){var X=[];return h.call(t,(function(e){X.push(E(e,t));})),L("Set",u.call(t),X,x)}if(function(e){if(!l||!e||"object"!=typeof e)return !1;try{l.call(e,l);try{p.call(e,p);}catch(e){return !0}return e instanceof WeakMap}catch(e){}return !1}(t))return F("WeakMap");if(function(e){if(!p||!e||"object"!=typeof e)return !1;try{p.call(e,p);try{l.call(e,l);}catch(e){return !0}return e instanceof WeakSet}catch(e){}return !1}(t))return F("WeakSet");if(function(e){if(!f||!e||"object"!=typeof e)return !1;try{return f.call(e),!0}catch(e){}return !1}(t))return F("WeakRef");if(function(e){return !("[object Number]"!==C(e)||T&&"object"==typeof e&&T in e)}(t))return j(E(Number(t)));if(function(e){if(!e||"object"!=typeof e||!b)return !1;try{return b.call(e),!0}catch(e){}return !1}(t))return j(E(b.call(t)));if(function(e){return !("[object Boolean]"!==C(e)||T&&"object"==typeof e&&T in e)}(t))return j(d.call(t));if(function(e){return !("[object String]"!==C(e)||T&&"object"==typeof e&&T in e)}(t))return j(E(String(t)));if(!function(e){return !("[object Date]"!==C(e)||T&&"object"==typeof e&&T in e)}(t)&&!function(e){return !("[object RegExp]"!==C(e)||T&&"object"==typeof e&&T in e)}(t)){var Q=M(t,E),Y=S?S(t)===Object.prototype:t instanceof Object||t.constructor===Object,J=t instanceof Object?"":"null prototype",Z=!Y&&T&&Object(t)===t&&T in t?C(t).slice(8,-1):J?"Object":"",ee=(Y||"function"!=typeof t.constructor?"":t.constructor.name?t.constructor.name+" ":"")+(Z||J?"["+[].concat(Z||[],J||[]).join(": ")+"] ":"");return 0===Q.length?ee+"{}":x?ee+"{"+z(Q,x)+"}":ee+"{ "+Q.join(", ")+" }"}return String(t)};var R=Object.prototype.hasOwnProperty||function(e){return e in this};function O(e,t){return R.call(e,t)}function C(e){return y.call(e)}function D(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return -1}function N(e,t){if(e.length>t.maxStringLength){var r=e.length-t.maxStringLength,n="... "+r+" more character"+(r>1?"s":"");return N(e.slice(0,t.maxStringLength),t)+n}return k(e.replace(/(['\\])/g,"\\$1").replace(/[\x00-\x1f]/g,P),"single",t)}function P(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+t.toString(16).toUpperCase()}function j(e){return "Object("+e+")"}function F(e){return e+" { ? }"}function L(e,t,r,n){return e+" ("+t+") {"+(n?z(r,n):r.join(", "))+"}"}function z(e,t){if(0===e.length)return "";var r="\n"+t.prev+t.base;return r+e.join(","+r)+"\n"+t.prev}function M(e,t){var r=U(e),n=[];if(r){n.length=e.length;for(var o=0;o<e.length;o++)n[o]=O(e,o)?t(e[o],e):"";}var i,s="function"==typeof A?A(e):[];if(v){i={};for(var a=0;a<s.length;a++)i["$"+s[a]]=s[a];}for(var c in e)O(e,c)&&(r&&String(Number(c))===c&&c<e.length||v&&i["$"+c]instanceof Symbol||(/[^\w$]/.test(c)?n.push(t(c,e)+": "+t(e[c],e)):n.push(c+": "+t(e[c],e))));if("function"==typeof A)for(var u=0;u<s.length;u++)x.call(e,s[u])&&n.push("["+t(s[u])+"]: "+t(e[s[u]],e));return n}},9368:e=>{function t(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",o=0,i=-1,s=0,a=0;a<=e.length;++a){if(a<e.length)r=e.charCodeAt(a);else {if(47===r)break;r=47;}if(47===r){if(i===a-1||1===s);else if(i!==a-1&&2===s){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var c=n.lastIndexOf("/");if(c!==n.length-1){-1===c?(n="",o=0):o=(n=n.slice(0,c)).length-1-n.lastIndexOf("/"),i=a,s=0;continue}}else if(2===n.length||1===n.length){n="",o=0,i=a,s=0;continue}t&&(n.length>0?n+="/..":n="..",o=2);}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),o=a-i-1;i=a,s=0;}else 46===r&&-1!==s?++s:s=-1;}return n}var n={resolve:function(){for(var e,n="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var s;i>=0?s=arguments[i]:(void 0===e&&(e=browser$1.cwd()),s=e),t(s),0!==s.length&&(n=s+"/"+n,o=47===s.charCodeAt(0));}return n=r(n,!o),o?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(t(e),0===e.length)return ".";var n=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&o&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return ".";for(var e,r=0;r<arguments.length;++r){var o=arguments[r];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o);}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return "";if((e=n.resolve(e))===(r=n.resolve(r)))return "";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var i=e.length,s=i-o,a=1;a<r.length&&47===r.charCodeAt(a);++a);for(var c=r.length-a,u=s<c?s:c,h=-1,l=0;l<=u;++l){if(l===u){if(c>u){if(47===r.charCodeAt(a+l))return r.slice(a+l+1);if(0===l)return r.slice(a+l)}else s>u&&(47===e.charCodeAt(o+l)?h=l:0===l&&(h=0));break}var p=e.charCodeAt(o+l);if(p!==r.charCodeAt(a+l))break;47===p&&(h=l);}var f="";for(l=o+h+1;l<=i;++l)l!==i&&47!==e.charCodeAt(l)||(0===f.length?f+="..":f+="/..");return f.length>0?f+r.slice(a+h):(a+=h,47===r.charCodeAt(a)&&++a,r.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return ".";for(var r=e.charCodeAt(0),n=47===r,o=-1,i=!0,s=e.length-1;s>=1;--s)if(47===(r=e.charCodeAt(s))){if(!i){o=s;break}}else i=!1;return -1===o?n?"/":".":n&&1===o?"//":e.slice(0,o)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw new TypeError('"ext" argument must be a string');t(e);var n,o=0,i=-1,s=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return "";var a=r.length-1,c=-1;for(n=e.length-1;n>=0;--n){var u=e.charCodeAt(n);if(47===u){if(!s){o=n+1;break}}else -1===c&&(s=!1,c=n+1),a>=0&&(u===r.charCodeAt(a)?-1==--a&&(i=n):(a=-1,i=c));}return o===i?i=c:-1===i&&(i=e.length),e.slice(o,i)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!s){o=n+1;break}}else -1===i&&(s=!1,i=n+1);return -1===i?"":e.slice(o,i)},extname:function(e){t(e);for(var r=-1,n=0,o=-1,i=!0,s=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47!==c)-1===o&&(i=!1,o=a+1),46===c?-1===r?r=a:1!==s&&(s=1):-1!==r&&(s=-1);else if(!i){n=a+1;break}}return -1===r||-1===o||0===s||1===s&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+"/"+n:n}(0,e)},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,o=e.charCodeAt(0),i=47===o;i?(r.root="/",n=1):n=0;for(var s=-1,a=0,c=-1,u=!0,h=e.length-1,l=0;h>=n;--h)if(47!==(o=e.charCodeAt(h)))-1===c&&(u=!1,c=h+1),46===o?-1===s?s=h:1!==l&&(l=1):-1!==s&&(l=-1);else if(!u){a=h+1;break}return -1===s||-1===c||0===l||1===l&&s===c-1&&s===a+1?-1!==c&&(r.base=r.name=0===a&&i?e.slice(1,c):e.slice(a,c)):(0===a&&i?(r.name=e.slice(1,s),r.base=e.slice(1,c)):(r.name=e.slice(a,s),r.base=e.slice(a,c)),r.ext=e.slice(s,c)),a>0?r.dir=e.slice(0,a-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n;},9370:(e,t)=>{var r=Object.prototype.hasOwnProperty;function n(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function o(e){try{return encodeURIComponent(e)}catch(e){return null}}t.stringify=function(e,t){t=t||"";var n,i,s=[];for(i in "string"!=typeof t&&(t="?"),e)if(r.call(e,i)){if((n=e[i])||null!=n&&!isNaN(n)||(n=""),i=o(i),n=o(n),null===i||null===n)continue;s.push(i+"="+n);}return s.length?t+s.join("&"):""},t.parse=function(e){for(var t,r=/([^=?#&]+)=?([^&]*)/g,o={};t=r.exec(e);){var i=n(t[1]),s=n(t[2]);null===i||null===s||i in o||(o[i]=s);}return o};},1926:e=>{e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return !1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return !1}return 0!==e};},3680:(e,t,r)=>{var n=r(1801),o=r(7615),i=r(3126),s=n("%TypeError%"),a=n("%WeakMap%",!0),c=n("%Map%",!0),u=o("WeakMap.prototype.get",!0),h=o("WeakMap.prototype.set",!0),l=o("WeakMap.prototype.has",!0),p=o("Map.prototype.get",!0),f=o("Map.prototype.set",!0),d=o("Map.prototype.has",!0),y=function(e,t){for(var r,n=e;null!==(r=n.next);n=r)if(r.key===t)return n.next=r.next,r.next=e.next,e.next=r,r};e.exports=function(){var e,t,r,n={assert:function(e){if(!n.has(e))throw new s("Side channel does not contain "+i(e))},get:function(n){if(a&&n&&("object"==typeof n||"function"==typeof n)){if(e)return u(e,n)}else if(c){if(t)return p(t,n)}else if(r)return function(e,t){var r=y(e,t);return r&&r.value}(r,n)},has:function(n){if(a&&n&&("object"==typeof n||"function"==typeof n)){if(e)return l(e,n)}else if(c){if(t)return d(t,n)}else if(r)return function(e,t){return !!y(e,t)}(r,n);return !1},set:function(n,o){a&&n&&("object"==typeof n||"function"==typeof n)?(e||(e=new a),h(e,n,o)):c?(t||(t=new c),f(t,n,o)):(r||(r={key:{},next:null}),function(e,t,r){var n=y(e,t);n?n.value=r:e.next={key:t,next:e.next,value:r};}(r,n,o));}};return n};},2858:e=>{function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(){this._defaults=[];}["use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects","timeout","buffer","serialize","parse","ca","key","pfx","cert","disableTLSCerts"].forEach((function(e){r.prototype[e]=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return this._defaults.push({fn:e,args:r}),this};})),r.prototype._setDefaults=function(e){this._defaults.forEach((function(r){var n;e[r.fn].apply(e,function(e){if(Array.isArray(e))return t(e)}(n=r.args)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(n)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());}));},e.exports=r;},5391:(e,t,r)=>{function n(e){return (n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o;"undefined"!=typeof window?o=window:"undefined"==typeof self?(console.warn("Using browser-only version of superagent in non-browser environment"),o=void 0):o=self;var i=r(1069),s=r(5799),a=r(3065),c=r(4287),u=r(1960),h=r(969),l=r(2858);function p(){}e.exports=function(e,r){return "function"==typeof r?new t.Request("GET",e).end(r):1===arguments.length?new t.Request("GET",e):new t.Request(e,r)};var f=t=e.exports;t.Request=w,f.getXHR=function(){if(o.XMLHttpRequest&&(!o.location||"file:"!==o.location.protocol||!o.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}throw new Error("Browser-only version of superagent could not find XHR")};var d="".trim?function(e){return e.trim()}:function(e){return e.replace(/(^\s*|\s*$)/g,"")};function y(e){if(!u(e))return e;var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&g(t,r,e[r]);return t.join("&")}function g(e,t,r){if(void 0!==r)if(null!==r)if(Array.isArray(r))r.forEach((function(r){g(e,t,r);}));else if(u(r))for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&g(e,"".concat(t,"[").concat(n,"]"),r[n]);else e.push(encodeURI(t)+"="+encodeURIComponent(r));else e.push(encodeURI(t));}function m(e){for(var t,r,n={},o=e.split("&"),i=0,s=o.length;i<s;++i)-1===(r=(t=o[i]).indexOf("="))?n[decodeURIComponent(t)]="":n[decodeURIComponent(t.slice(0,r))]=decodeURIComponent(t.slice(r+1));return n}function b(e){return /[/+]json($|[^-\w])/i.test(e)}function A(e){this.req=e,this.xhr=this.req.xhr,this.text="HEAD"!==this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var t=this.xhr.status;1223===t&&(t=204),this._setStatusProperties(t),this.headers=function(e){for(var t,r,n,o,i=e.split(/\r?\n/),s={},a=0,c=i.length;a<c;++a)-1!==(t=(r=i[a]).indexOf(":"))&&(n=r.slice(0,t).toLowerCase(),o=d(r.slice(t+1)),s[n]=o);return s}(this.xhr.getAllResponseHeaders()),this.header=this.headers,this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&e._responseType?this.body=this.xhr.response:this.body="HEAD"===this.req.method?null:this._parseBody(this.text?this.text:this.xhr.response);}function w(e,t){var r=this;this._query=this._query||[],this.method=e,this.url=t,this.header={},this._header={},this.on("end",(function(){var e,t=null,n=null;try{n=new A(r);}catch(e){return (t=new Error("Parser is unable to parse the response")).parse=!0,t.original=e,r.xhr?(t.rawResponse=void 0===r.xhr.responseType?r.xhr.responseText:r.xhr.response,t.status=r.xhr.status?r.xhr.status:null,t.statusCode=t.status):(t.rawResponse=null,t.status=null),r.callback(t)}r.emit("response",n);try{r._isResponseOK(n)||(e=new Error(n.statusText||n.text||"Unsuccessful HTTP response"));}catch(t){e=t;}e?(e.original=t,e.response=n,e.status=n.status,r.callback(e,n)):r.callback(null,n);}));}function v(e,t,r){var n=f("DELETE",e);return "function"==typeof t&&(r=t,t=null),t&&n.send(t),r&&n.end(r),n}f.serializeObject=y,f.parseString=m,f.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},f.serialize={"application/x-www-form-urlencoded":a.stringify,"application/json":s},f.parse={"application/x-www-form-urlencoded":m,"application/json":JSON.parse},h(A.prototype),A.prototype._parseBody=function(e){var t=f.parse[this.type];return this.req._parser?this.req._parser(this,e):(!t&&b(this.type)&&(t=f.parse["application/json"]),t&&e&&(e.length>0||e instanceof Object)?t(e):null)},A.prototype.toError=function(){var e=this.req,t=e.method,r=e.url,n="cannot ".concat(t," ").concat(r," (").concat(this.status,")"),o=new Error(n);return o.status=this.status,o.method=t,o.url=r,o},f.Response=A,i(w.prototype),c(w.prototype),w.prototype.type=function(e){return this.set("Content-Type",f.types[e]||e),this},w.prototype.accept=function(e){return this.set("Accept",f.types[e]||e),this},w.prototype.auth=function(e,t,r){1===arguments.length&&(t=""),"object"===n(t)&&null!==t&&(r=t,t=""),r||(r={type:"function"==typeof btoa?"basic":"auto"});var o=function(e){if("function"==typeof btoa)return btoa(e);throw new Error("Cannot use basic auth, btoa is not a function")};return this._auth(e,t,r,o)},w.prototype.query=function(e){return "string"!=typeof e&&(e=y(e)),e&&this._query.push(e),this},w.prototype.attach=function(e,t,r){if(t){if(this._data)throw new Error("superagent can't mix .send() and .attach()");this._getFormData().append(e,t,r||t.name);}return this},w.prototype._getFormData=function(){return this._formData||(this._formData=new o.FormData),this._formData},w.prototype.callback=function(e,t){if(this._shouldRetry(e,t))return this._retry();var r=this._callback;this.clearTimeout(),e&&(this._maxRetries&&(e.retries=this._retries-1),this.emit("error",e)),r(e,t);},w.prototype.crossDomainError=function(){var e=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");e.crossDomain=!0,e.status=this.status,e.method=this.method,e.url=this.url,this.callback(e);},w.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},w.prototype.ca=w.prototype.agent,w.prototype.buffer=w.prototype.ca,w.prototype.write=function(){throw new Error("Streaming is not supported in browser version of superagent")},w.prototype.pipe=w.prototype.write,w.prototype._isHost=function(e){return e&&"object"===n(e)&&!Array.isArray(e)&&"[object Object]"!==Object.prototype.toString.call(e)},w.prototype.end=function(e){this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=e||p,this._finalizeQueryString(),this._end();},w.prototype._setUploadTimeout=function(){var e=this;this._uploadTimeout&&!this._uploadTimeoutTimer&&(this._uploadTimeoutTimer=setTimeout((function(){e._timeoutError("Upload timeout of ",e._uploadTimeout,"ETIMEDOUT");}),this._uploadTimeout));},w.prototype._end=function(){if(this._aborted)return this.callback(new Error("The request has been aborted even before .end() was called"));var e=this;this.xhr=f.getXHR();var t=this.xhr,r=this._formData||this._data;this._setTimeouts(),t.onreadystatechange=function(){var r=t.readyState;if(r>=2&&e._responseTimeoutTimer&&clearTimeout(e._responseTimeoutTimer),4===r){var n;try{n=t.status;}catch(e){n=0;}if(!n){if(e.timedout||e._aborted)return;return e.crossDomainError()}e.emit("end");}};var n=function(t,r){r.total>0&&(r.percent=r.loaded/r.total*100,100===r.percent&&clearTimeout(e._uploadTimeoutTimer)),r.direction=t,e.emit("progress",r);};if(this.hasListeners("progress"))try{t.addEventListener("progress",n.bind(null,"download")),t.upload&&t.upload.addEventListener("progress",n.bind(null,"upload"));}catch(e){}t.upload&&this._setUploadTimeout();try{this.username&&this.password?t.open(this.method,this.url,!0,this.username,this.password):t.open(this.method,this.url,!0);}catch(e){return this.callback(e)}if(this._withCredentials&&(t.withCredentials=!0),!this._formData&&"GET"!==this.method&&"HEAD"!==this.method&&"string"!=typeof r&&!this._isHost(r)){var o=this._header["content-type"],i=this._serializer||f.serialize[o?o.split(";")[0]:""];!i&&b(o)&&(i=f.serialize["application/json"]),i&&(r=i(r));}for(var s in this.header)null!==this.header[s]&&Object.prototype.hasOwnProperty.call(this.header,s)&&t.setRequestHeader(s,this.header[s]);this._responseType&&(t.responseType=this._responseType),this.emit("request",this),t.send(void 0===r?null:r);},f.agent=function(){return new l},["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach((function(e){l.prototype[e.toLowerCase()]=function(t,r){var n=new f.Request(e,t);return this._setDefaults(n),r&&n.end(r),n};})),l.prototype.del=l.prototype.delete,f.get=function(e,t,r){var n=f("GET",e);return "function"==typeof t&&(r=t,t=null),t&&n.query(t),r&&n.end(r),n},f.head=function(e,t,r){var n=f("HEAD",e);return "function"==typeof t&&(r=t,t=null),t&&n.query(t),r&&n.end(r),n},f.options=function(e,t,r){var n=f("OPTIONS",e);return "function"==typeof t&&(r=t,t=null),t&&n.send(t),r&&n.end(r),n},f.del=v,f.delete=v,f.patch=function(e,t,r){var n=f("PATCH",e);return "function"==typeof t&&(r=t,t=null),t&&n.send(t),r&&n.end(r),n},f.post=function(e,t,r){var n=f("POST",e);return "function"==typeof t&&(r=t,t=null),t&&n.send(t),r&&n.end(r),n},f.put=function(e,t,r){var n=f("PUT",e);return "function"==typeof t&&(r=t,t=null),t&&n.send(t),r&&n.end(r),n};},1960:e=>{function t(e){return (t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e.exports=function(e){return null!==e&&"object"===t(e)};},4287:(e,t,r)=>{function n(e){return (n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=r(1960);function i(e){if(e)return function(e){for(var t in i.prototype)Object.prototype.hasOwnProperty.call(i.prototype,t)&&(e[t]=i.prototype[t]);return e}(e)}e.exports=i,i.prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),clearTimeout(this._uploadTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,delete this._uploadTimeoutTimer,this},i.prototype.parse=function(e){return this._parser=e,this},i.prototype.responseType=function(e){return this._responseType=e,this},i.prototype.serialize=function(e){return this._serializer=e,this},i.prototype.timeout=function(e){if(!e||"object"!==n(e))return this._timeout=e,this._responseTimeout=0,this._uploadTimeout=0,this;for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))switch(t){case"deadline":this._timeout=e.deadline;break;case"response":this._responseTimeout=e.response;break;case"upload":this._uploadTimeout=e.upload;break;default:console.warn("Unknown timeout option",t);}return this},i.prototype.retry=function(e,t){return 0!==arguments.length&&!0!==e||(e=1),e<=0&&(e=0),this._maxRetries=e,this._retries=0,this._retryCallback=t,this};var s=new Set(["ETIMEDOUT","ECONNRESET","EADDRINUSE","ECONNREFUSED","EPIPE","ENOTFOUND","ENETUNREACH","EAI_AGAIN"]),a=new Set([408,413,429,500,502,503,504,521,522,524]);i.prototype._shouldRetry=function(e,t){if(!this._maxRetries||this._retries++>=this._maxRetries)return !1;if(this._retryCallback)try{var r=this._retryCallback(e,t);if(!0===r)return !0;if(!1===r)return !1}catch(e){console.error(e);}if(t&&t.status&&a.has(t.status))return !0;if(e){if(e.code&&s.has(e.code))return !0;if(e.timeout&&"ECONNABORTED"===e.code)return !0;if(e.crossDomain)return !0}return !1},i.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this.timedoutError=null,this._end()},i.prototype.then=function(e,t){var r=this;if(!this._fullfilledPromise){var n=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise((function(e,t){n.on("abort",(function(){if(!(r._maxRetries&&r._maxRetries>r._retries))if(r.timedout&&r.timedoutError)t(r.timedoutError);else {var e=new Error("Aborted");e.code="ABORTED",e.status=r.status,e.method=r.method,e.url=r.url,t(e);}})),n.end((function(r,n){r?t(r):e(n);}));}));}return this._fullfilledPromise.then(e,t)},i.prototype.catch=function(e){return this.then(void 0,e)},i.prototype.use=function(e){return e(this),this},i.prototype.ok=function(e){if("function"!=typeof e)throw new Error("Callback required");return this._okCallback=e,this},i.prototype._isResponseOK=function(e){return !!e&&(this._okCallback?this._okCallback(e):e.status>=200&&e.status<300)},i.prototype.get=function(e){return this._header[e.toLowerCase()]},i.prototype.getHeader=i.prototype.get,i.prototype.set=function(e,t){if(o(e)){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&this.set(r,e[r]);return this}return this._header[e.toLowerCase()]=t,this.header[e]=t,this},i.prototype.unset=function(e){return delete this._header[e.toLowerCase()],delete this.header[e],this},i.prototype.field=function(e,t){if(null==e)throw new Error(".field(name, val) name can not be empty");if(this._data)throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");if(o(e)){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&this.field(r,e[r]);return this}if(Array.isArray(t)){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&this.field(e,t[n]);return this}if(null==t)throw new Error(".field(name, val) val can not be empty");return "boolean"==typeof t&&(t=String(t)),this._getFormData().append(e,t),this},i.prototype.abort=function(){return this._aborted||(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort")),this},i.prototype._auth=function(e,t,r,n){switch(r.type){case"basic":this.set("Authorization","Basic ".concat(n("".concat(e,":").concat(t))));break;case"auto":this.username=e,this.password=t;break;case"bearer":this.set("Authorization","Bearer ".concat(e));}return this},i.prototype.withCredentials=function(e){return void 0===e&&(e=!0),this._withCredentials=e,this},i.prototype.redirects=function(e){return this._maxRedirects=e,this},i.prototype.maxResponseSize=function(e){if("number"!=typeof e)throw new TypeError("Invalid argument");return this._maxResponseSize=e,this},i.prototype.toJSON=function(){return {method:this.method,url:this.url,data:this._data,headers:this._header}},i.prototype.send=function(e){var t=o(e),r=this._header["content-type"];if(this._formData)throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");if(t&&!this._data)Array.isArray(e)?this._data=[]:this._isHost(e)||(this._data={});else if(e&&this._data&&this._isHost(this._data))throw new Error("Can't merge these send calls");if(t&&o(this._data))for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(this._data[n]=e[n]);else "string"==typeof e?(r||this.type("form"),(r=this._header["content-type"])&&(r=r.toLowerCase().trim()),this._data="application/x-www-form-urlencoded"===r?this._data?"".concat(this._data,"&").concat(e):e:(this._data||"")+e):this._data=e;return !t||this._isHost(e)||r||this.type("json"),this},i.prototype.sortQuery=function(e){return this._sort=void 0===e||e,this},i.prototype._finalizeQueryString=function(){var e=this._query.join("&");if(e&&(this.url+=(this.url.includes("?")?"&":"?")+e),this._query.length=0,this._sort){var t=this.url.indexOf("?");if(t>=0){var r=this.url.slice(t+1).split("&");"function"==typeof this._sort?r.sort(this._sort):r.sort(),this.url=this.url.slice(0,t)+"?"+r.join("&");}}},i.prototype._appendQueryString=function(){console.warn("Unsupported");},i.prototype._timeoutError=function(e,t,r){if(!this._aborted){var n=new Error("".concat(e+t,"ms exceeded"));n.timeout=t,n.code="ECONNABORTED",n.errno=r,this.timedout=!0,this.timedoutError=n,this.abort(),this.callback(n);}},i.prototype._setTimeouts=function(){var e=this;this._timeout&&!this._timer&&(this._timer=setTimeout((function(){e._timeoutError("Timeout of ",e._timeout,"ETIME");}),this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout((function(){e._timeoutError("Response timeout of ",e._responseTimeout,"ETIMEDOUT");}),this._responseTimeout));};},969:(e,t,r)=>{var n=r(3094);function o(e){if(e)return function(e){for(var t in o.prototype)Object.prototype.hasOwnProperty.call(o.prototype,t)&&(e[t]=o.prototype[t]);return e}(e)}e.exports=o,o.prototype.get=function(e){return this.header[e.toLowerCase()]},o.prototype._setHeaderProperties=function(e){var t=e["content-type"]||"";this.type=n.type(t);var r=n.params(t);for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(this[o]=r[o]);this.links={};try{e.link&&(this.links=n.parseLinks(e.link));}catch(e){}},o.prototype._setStatusProperties=function(e){var t=e/100|0;this.statusCode=e,this.status=this.statusCode,this.statusType=t,this.info=1===t,this.ok=2===t,this.redirect=3===t,this.clientError=4===t,this.serverError=5===t,this.error=(4===t||5===t)&&this.toError(),this.created=201===e,this.accepted=202===e,this.noContent=204===e,this.badRequest=400===e,this.unauthorized=401===e,this.notAcceptable=406===e,this.forbidden=403===e,this.notFound=404===e,this.unprocessableEntity=422===e;};},3094:(e,t)=>{function r(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return "Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return {s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,c=!1;return {s:function(){r=e[Symbol.iterator]();},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,s=e;},f:function(){try{a||null==r.return||r.return();}finally{if(c)throw s}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.type=function(e){return e.split(/ *; */).shift()},t.params=function(e){var t,n={},o=r(e.split(/ *; */));try{for(o.s();!(t=o.n()).done;){var i=t.value.split(/ *= */),s=i.shift(),a=i.shift();s&&a&&(n[s]=a);}}catch(e){o.e(e);}finally{o.f();}return n},t.parseLinks=function(e){var t,n={},o=r(e.split(/ *, */));try{for(o.s();!(t=o.n()).done;){var i=t.value.split(/ *; */),s=i[0].slice(1,-1);n[i[1].split(/ *= */)[1].slice(1,-1)]=s;}}catch(e){o.e(e);}finally{o.f();}return n},t.cleanHeader=function(e,t){return delete e["content-type"],delete e["content-length"],delete e["transfer-encoding"],delete e.host,t&&(delete e.authorization,delete e.cookie),e};},5335:e=>{var t=String.prototype.replace,r=/%20/g,n="RFC3986";e.exports={default:n,formatters:{RFC1738:function(e){return t.call(e,r,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:n};},3065:(e,t,r)=>{var n=r(4246),o=r(1688),i=r(5335);e.exports={formats:i,parse:o,stringify:n};},1688:(e,t,r)=>{var n=r(4562),o=Object.prototype.hasOwnProperty,i=Array.isArray,s={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},c=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},u=function(e,t,r,n){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,s=/(\[[^[\]]*])/g,a=r.depth>0&&/(\[[^[\]]*])/.exec(i),u=a?i.slice(0,a.index):i,h=[];if(u){if(!r.plainObjects&&o.call(Object.prototype,u)&&!r.allowPrototypes)return;h.push(u);}for(var l=0;r.depth>0&&null!==(a=s.exec(i))&&l<r.depth;){if(l+=1,!r.plainObjects&&o.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;h.push(a[1]);}return a&&h.push("["+i.slice(a.index)+"]"),function(e,t,r,n){for(var o=n?t:c(t,r),i=e.length-1;i>=0;--i){var s,a=e[i];if("[]"===a&&r.parseArrays)s=[].concat(o);else {s=r.plainObjects?Object.create(null):{};var u="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,h=parseInt(u,10);r.parseArrays||""!==u?!isNaN(h)&&a!==u&&String(h)===u&&h>=0&&r.parseArrays&&h<=r.arrayLimit?(s=[])[h]=o:s[u]=o:s={0:o};}o=s;}return o}(h,t,r,n)}};e.exports=function(e,t){var r=function(e){if(!e)return s;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?s.charset:e.charset;return {allowDots:void 0===e.allowDots?s.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:s.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:s.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:s.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:s.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:s.comma,decoder:"function"==typeof e.decoder?e.decoder:s.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:s.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:s.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:s.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:s.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:s.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:s.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var h="string"==typeof e?function(e,t){var r,u={},h=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,l=t.parameterLimit===1/0?void 0:t.parameterLimit,p=h.split(t.delimiter,l),f=-1,d=t.charset;if(t.charsetSentinel)for(r=0;r<p.length;++r)0===p[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[r]?d="utf-8":"utf8=%26%2310003%3B"===p[r]&&(d="iso-8859-1"),f=r,r=p.length);for(r=0;r<p.length;++r)if(r!==f){var y,g,m=p[r],b=m.indexOf("]="),A=-1===b?m.indexOf("="):b+1;-1===A?(y=t.decoder(m,s.decoder,d,"key"),g=t.strictNullHandling?null:""):(y=t.decoder(m.slice(0,A),s.decoder,d,"key"),g=n.maybeMap(c(m.slice(A+1),t),(function(e){return t.decoder(e,s.decoder,d,"value")}))),g&&t.interpretNumericEntities&&"iso-8859-1"===d&&(g=a(g)),m.indexOf("[]=")>-1&&(g=i(g)?[g]:g),o.call(u,y)?u[y]=n.combine(u[y],g):u[y]=g;}return u}(e,r):e,l=r.plainObjects?Object.create(null):{},p=Object.keys(h),f=0;f<p.length;++f){var d=p[f],y=u(d,h[d],r,"string"==typeof e);l=n.merge(l,y,r);}return !0===r.allowSparse?l:n.compact(l)};},4246:(e,t,r)=>{var n=r(3680),o=r(4562),i=r(5335),s=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,u=Array.prototype.push,h=function(e,t){u.apply(e,c(t)?t:[t]);},l=Date.prototype.toISOString,p=i.default,f={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,format:p,formatter:i.formatters[p],indices:!1,serializeDate:function(e){return l.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,r,i,s,a,u,l,p,d,y,g,m,b,A,w){var v,x=t;if(w.has(t))throw new RangeError("Cyclic object value");if("function"==typeof l?x=l(r,x):x instanceof Date?x=y(x):"comma"===i&&c(x)&&(x=o.maybeMap(x,(function(e){return e instanceof Date?y(e):e}))),null===x){if(s)return u&&!b?u(r,f.encoder,A,"key",g):r;x="";}if("string"==typeof(v=x)||"number"==typeof v||"boolean"==typeof v||"symbol"==typeof v||"bigint"==typeof v||o.isBuffer(x))return u?[m(b?r:u(r,f.encoder,A,"key",g))+"="+m(u(x,f.encoder,A,"value",g))]:[m(r)+"="+m(String(x))];var S,E=[];if(void 0===x)return E;if("comma"===i&&c(x))S=[{value:x.length>0?x.join(",")||null:void 0}];else if(c(l))S=l;else {var _=Object.keys(x);S=p?_.sort(p):_;}for(var T=0;T<S.length;++T){var k=S[T],B="object"==typeof k&&void 0!==k.value?k.value:x[k];if(!a||null!==B){var U=c(x)?"function"==typeof i?i(r,k):r:r+(d?"."+k:"["+k+"]");w.set(t,!0);var I=n();h(E,e(B,U,i,s,a,u,l,p,d,y,g,m,b,A,I));}}return E};e.exports=function(e,t){var r,o=e,u=function(e){if(!e)return f;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||f.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=i.default;if(void 0!==e.format){if(!s.call(i.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format;}var n=i.formatters[r],o=f.filter;return ("function"==typeof e.filter||c(e.filter))&&(o=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:f.addQueryPrefix,allowDots:void 0===e.allowDots?f.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:f.charsetSentinel,delimiter:void 0===e.delimiter?f.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:f.encode,encoder:"function"==typeof e.encoder?e.encoder:f.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:f.encodeValuesOnly,filter:o,format:r,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:f.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:f.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:f.strictNullHandling}}(t);"function"==typeof u.filter?o=(0, u.filter)("",o):c(u.filter)&&(r=u.filter);var l,p=[];if("object"!=typeof o||null===o)return "";l=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var y=a[l];r||(r=Object.keys(o)),u.sort&&r.sort(u.sort);for(var g=n(),m=0;m<r.length;++m){var b=r[m];u.skipNulls&&null===o[b]||h(p,d(o[b],b,y,u.strictNullHandling,u.skipNulls,u.encode?u.encoder:null,u.filter,u.sort,u.allowDots,u.serializeDate,u.format,u.formatter,u.encodeValuesOnly,u.charset,g));}var A=p.join(u.delimiter),w=!0===u.addQueryPrefix?"?":"";return u.charsetSentinel&&("iso-8859-1"===u.charset?w+="utf8=%26%2310003%3B&":w+="utf8=%E2%9C%93&"),A.length>0?w+A:""};},4562:(e,t,r)=>{var n=r(5335),o=Object.prototype.hasOwnProperty,i=Array.isArray,s=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return [].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],s=o.obj[o.prop],a=Object.keys(s),c=0;c<a.length;++c){var u=a[c],h=s[u];"object"==typeof h&&null!==h&&-1===r.indexOf(h)&&(t.push({obj:s,prop:u}),r.push(h));}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(i(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);t.obj[t.prop]=n;}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r,o,i){if(0===e.length)return e;var a=e;if("symbol"==typeof e?a=Symbol.prototype.toString.call(e):"string"!=typeof e&&(a=String(e)),"iso-8859-1"===r)return escape(a).replace(/%u[0-9a-f]{4}/gi,(function(e){return "%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var c="",u=0;u<a.length;++u){var h=a.charCodeAt(u);45===h||46===h||95===h||126===h||h>=48&&h<=57||h>=65&&h<=90||h>=97&&h<=122||i===n.RFC1738&&(40===h||41===h)?c+=a.charAt(u):h<128?c+=s[h]:h<2048?c+=s[192|h>>6]+s[128|63&h]:h<55296||h>=57344?c+=s[224|h>>12]+s[128|h>>6&63]+s[128|63&h]:(u+=1,h=65536+((1023&h)<<10|1023&a.charCodeAt(u)),c+=s[240|h>>18]+s[128|h>>12&63]+s[128|h>>6&63]+s[128|63&h]);}return c},isBuffer:function(e){return !(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return "[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(i(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){if(!r)return t;if("object"!=typeof r){if(i(t))t.push(r);else {if(!t||"object"!=typeof t)return [t,r];(n&&(n.plainObjects||n.allowPrototypes)||!o.call(Object.prototype,r))&&(t[r]=!0);}return t}if(!t||"object"!=typeof t)return [t].concat(r);var s=t;return i(t)&&!i(r)&&(s=a(t,n)),i(t)&&i(r)?(r.forEach((function(r,i){if(o.call(t,i)){var s=t[i];s&&"object"==typeof s&&r&&"object"==typeof r?t[i]=e(s,r,n):t.push(r);}else t[i]=r;})),t):Object.keys(r).reduce((function(t,i){var s=r[i];return o.call(t,i)?t[i]=e(t[i],s,n):t[i]=s,t}),s)}};},7765:function(e,t){!function(e){var t=function(e){var t,r=new Float64Array(16);if(e)for(t=0;t<e.length;t++)r[t]=e[t];return r},r=function(){throw new Error("no PRNG")},n=new Uint8Array(16),o=new Uint8Array(32);o[0]=9;var i=t(),s=t([1]),a=t([56129,1]),c=t([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),u=t([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),h=t([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),l=t([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),p=t([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function f(e,t,r,n){e[t]=r>>24&255,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r,e[t+4]=n>>24&255,e[t+5]=n>>16&255,e[t+6]=n>>8&255,e[t+7]=255&n;}function d(e,t,r,n,o){var i,s=0;for(i=0;i<o;i++)s|=e[t+i]^r[n+i];return (1&s-1>>>8)-1}function y(e,t,r,n){return d(e,t,r,n,16)}function g(e,t,r,n){return d(e,t,r,n,32)}function m(e,t,r,n){!function(e,t,r,n){for(var o,i=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,s=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,a=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,c=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,u=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,h=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,l=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,p=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,f=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,d=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,y=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,g=255&r[16]|(255&r[17])<<8|(255&r[18])<<16|(255&r[19])<<24,m=255&r[20]|(255&r[21])<<8|(255&r[22])<<16|(255&r[23])<<24,b=255&r[24]|(255&r[25])<<8|(255&r[26])<<16|(255&r[27])<<24,A=255&r[28]|(255&r[29])<<8|(255&r[30])<<16|(255&r[31])<<24,w=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,v=i,x=s,S=a,E=c,_=u,T=h,k=l,B=p,U=f,I=d,R=y,O=g,C=m,D=b,N=A,P=w,j=0;j<20;j+=2)v^=(o=(C^=(o=(U^=(o=(_^=(o=v+C|0)<<7|o>>>25)+v|0)<<9|o>>>23)+_|0)<<13|o>>>19)+U|0)<<18|o>>>14,T^=(o=(x^=(o=(D^=(o=(I^=(o=T+x|0)<<7|o>>>25)+T|0)<<9|o>>>23)+I|0)<<13|o>>>19)+D|0)<<18|o>>>14,R^=(o=(k^=(o=(S^=(o=(N^=(o=R+k|0)<<7|o>>>25)+R|0)<<9|o>>>23)+N|0)<<13|o>>>19)+S|0)<<18|o>>>14,P^=(o=(O^=(o=(B^=(o=(E^=(o=P+O|0)<<7|o>>>25)+P|0)<<9|o>>>23)+E|0)<<13|o>>>19)+B|0)<<18|o>>>14,v^=(o=(E^=(o=(S^=(o=(x^=(o=v+E|0)<<7|o>>>25)+v|0)<<9|o>>>23)+x|0)<<13|o>>>19)+S|0)<<18|o>>>14,T^=(o=(_^=(o=(B^=(o=(k^=(o=T+_|0)<<7|o>>>25)+T|0)<<9|o>>>23)+k|0)<<13|o>>>19)+B|0)<<18|o>>>14,R^=(o=(I^=(o=(U^=(o=(O^=(o=R+I|0)<<7|o>>>25)+R|0)<<9|o>>>23)+O|0)<<13|o>>>19)+U|0)<<18|o>>>14,P^=(o=(N^=(o=(D^=(o=(C^=(o=P+N|0)<<7|o>>>25)+P|0)<<9|o>>>23)+C|0)<<13|o>>>19)+D|0)<<18|o>>>14;v=v+i|0,x=x+s|0,S=S+a|0,E=E+c|0,_=_+u|0,T=T+h|0,k=k+l|0,B=B+p|0,U=U+f|0,I=I+d|0,R=R+y|0,O=O+g|0,C=C+m|0,D=D+b|0,N=N+A|0,P=P+w|0,e[0]=v>>>0&255,e[1]=v>>>8&255,e[2]=v>>>16&255,e[3]=v>>>24&255,e[4]=x>>>0&255,e[5]=x>>>8&255,e[6]=x>>>16&255,e[7]=x>>>24&255,e[8]=S>>>0&255,e[9]=S>>>8&255,e[10]=S>>>16&255,e[11]=S>>>24&255,e[12]=E>>>0&255,e[13]=E>>>8&255,e[14]=E>>>16&255,e[15]=E>>>24&255,e[16]=_>>>0&255,e[17]=_>>>8&255,e[18]=_>>>16&255,e[19]=_>>>24&255,e[20]=T>>>0&255,e[21]=T>>>8&255,e[22]=T>>>16&255,e[23]=T>>>24&255,e[24]=k>>>0&255,e[25]=k>>>8&255,e[26]=k>>>16&255,e[27]=k>>>24&255,e[28]=B>>>0&255,e[29]=B>>>8&255,e[30]=B>>>16&255,e[31]=B>>>24&255,e[32]=U>>>0&255,e[33]=U>>>8&255,e[34]=U>>>16&255,e[35]=U>>>24&255,e[36]=I>>>0&255,e[37]=I>>>8&255,e[38]=I>>>16&255,e[39]=I>>>24&255,e[40]=R>>>0&255,e[41]=R>>>8&255,e[42]=R>>>16&255,e[43]=R>>>24&255,e[44]=O>>>0&255,e[45]=O>>>8&255,e[46]=O>>>16&255,e[47]=O>>>24&255,e[48]=C>>>0&255,e[49]=C>>>8&255,e[50]=C>>>16&255,e[51]=C>>>24&255,e[52]=D>>>0&255,e[53]=D>>>8&255,e[54]=D>>>16&255,e[55]=D>>>24&255,e[56]=N>>>0&255,e[57]=N>>>8&255,e[58]=N>>>16&255,e[59]=N>>>24&255,e[60]=P>>>0&255,e[61]=P>>>8&255,e[62]=P>>>16&255,e[63]=P>>>24&255;}(e,t,r,n);}function b(e,t,r,n){!function(e,t,r,n){for(var o,i=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,s=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,a=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,c=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,u=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,h=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,l=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,p=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,f=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,d=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,y=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,g=255&r[16]|(255&r[17])<<8|(255&r[18])<<16|(255&r[19])<<24,m=255&r[20]|(255&r[21])<<8|(255&r[22])<<16|(255&r[23])<<24,b=255&r[24]|(255&r[25])<<8|(255&r[26])<<16|(255&r[27])<<24,A=255&r[28]|(255&r[29])<<8|(255&r[30])<<16|(255&r[31])<<24,w=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,v=0;v<20;v+=2)i^=(o=(m^=(o=(f^=(o=(u^=(o=i+m|0)<<7|o>>>25)+i|0)<<9|o>>>23)+u|0)<<13|o>>>19)+f|0)<<18|o>>>14,h^=(o=(s^=(o=(b^=(o=(d^=(o=h+s|0)<<7|o>>>25)+h|0)<<9|o>>>23)+d|0)<<13|o>>>19)+b|0)<<18|o>>>14,y^=(o=(l^=(o=(a^=(o=(A^=(o=y+l|0)<<7|o>>>25)+y|0)<<9|o>>>23)+A|0)<<13|o>>>19)+a|0)<<18|o>>>14,w^=(o=(g^=(o=(p^=(o=(c^=(o=w+g|0)<<7|o>>>25)+w|0)<<9|o>>>23)+c|0)<<13|o>>>19)+p|0)<<18|o>>>14,i^=(o=(c^=(o=(a^=(o=(s^=(o=i+c|0)<<7|o>>>25)+i|0)<<9|o>>>23)+s|0)<<13|o>>>19)+a|0)<<18|o>>>14,h^=(o=(u^=(o=(p^=(o=(l^=(o=h+u|0)<<7|o>>>25)+h|0)<<9|o>>>23)+l|0)<<13|o>>>19)+p|0)<<18|o>>>14,y^=(o=(d^=(o=(f^=(o=(g^=(o=y+d|0)<<7|o>>>25)+y|0)<<9|o>>>23)+g|0)<<13|o>>>19)+f|0)<<18|o>>>14,w^=(o=(A^=(o=(b^=(o=(m^=(o=w+A|0)<<7|o>>>25)+w|0)<<9|o>>>23)+m|0)<<13|o>>>19)+b|0)<<18|o>>>14;e[0]=i>>>0&255,e[1]=i>>>8&255,e[2]=i>>>16&255,e[3]=i>>>24&255,e[4]=h>>>0&255,e[5]=h>>>8&255,e[6]=h>>>16&255,e[7]=h>>>24&255,e[8]=y>>>0&255,e[9]=y>>>8&255,e[10]=y>>>16&255,e[11]=y>>>24&255,e[12]=w>>>0&255,e[13]=w>>>8&255,e[14]=w>>>16&255,e[15]=w>>>24&255,e[16]=l>>>0&255,e[17]=l>>>8&255,e[18]=l>>>16&255,e[19]=l>>>24&255,e[20]=p>>>0&255,e[21]=p>>>8&255,e[22]=p>>>16&255,e[23]=p>>>24&255,e[24]=f>>>0&255,e[25]=f>>>8&255,e[26]=f>>>16&255,e[27]=f>>>24&255,e[28]=d>>>0&255,e[29]=d>>>8&255,e[30]=d>>>16&255,e[31]=d>>>24&255;}(e,t,r,n);}var A=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function w(e,t,r,n,o,i,s){var a,c,u=new Uint8Array(16),h=new Uint8Array(64);for(c=0;c<16;c++)u[c]=0;for(c=0;c<8;c++)u[c]=i[c];for(;o>=64;){for(m(h,u,s,A),c=0;c<64;c++)e[t+c]=r[n+c]^h[c];for(a=1,c=8;c<16;c++)a=a+(255&u[c])|0,u[c]=255&a,a>>>=8;o-=64,t+=64,n+=64;}if(o>0)for(m(h,u,s,A),c=0;c<o;c++)e[t+c]=r[n+c]^h[c];return 0}function v(e,t,r,n,o){var i,s,a=new Uint8Array(16),c=new Uint8Array(64);for(s=0;s<16;s++)a[s]=0;for(s=0;s<8;s++)a[s]=n[s];for(;r>=64;){for(m(c,a,o,A),s=0;s<64;s++)e[t+s]=c[s];for(i=1,s=8;s<16;s++)i=i+(255&a[s])|0,a[s]=255&i,i>>>=8;r-=64,t+=64;}if(r>0)for(m(c,a,o,A),s=0;s<r;s++)e[t+s]=c[s];return 0}function x(e,t,r,n,o){var i=new Uint8Array(32);b(i,n,o,A);for(var s=new Uint8Array(8),a=0;a<8;a++)s[a]=n[a+16];return v(e,t,r,s,i)}function S(e,t,r,n,o,i,s){var a=new Uint8Array(32);b(a,i,s,A);for(var c=new Uint8Array(8),u=0;u<8;u++)c[u]=i[u+16];return w(e,t,r,n,o,c,a)}var E=function(e){var t,r,n,o,i,s,a,c;this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,t=255&e[0]|(255&e[1])<<8,this.r[0]=8191&t,r=255&e[2]|(255&e[3])<<8,this.r[1]=8191&(t>>>13|r<<3),n=255&e[4]|(255&e[5])<<8,this.r[2]=7939&(r>>>10|n<<6),o=255&e[6]|(255&e[7])<<8,this.r[3]=8191&(n>>>7|o<<9),i=255&e[8]|(255&e[9])<<8,this.r[4]=255&(o>>>4|i<<12),this.r[5]=i>>>1&8190,s=255&e[10]|(255&e[11])<<8,this.r[6]=8191&(i>>>14|s<<2),a=255&e[12]|(255&e[13])<<8,this.r[7]=8065&(s>>>11|a<<5),c=255&e[14]|(255&e[15])<<8,this.r[8]=8191&(a>>>8|c<<8),this.r[9]=c>>>5&127,this.pad[0]=255&e[16]|(255&e[17])<<8,this.pad[1]=255&e[18]|(255&e[19])<<8,this.pad[2]=255&e[20]|(255&e[21])<<8,this.pad[3]=255&e[22]|(255&e[23])<<8,this.pad[4]=255&e[24]|(255&e[25])<<8,this.pad[5]=255&e[26]|(255&e[27])<<8,this.pad[6]=255&e[28]|(255&e[29])<<8,this.pad[7]=255&e[30]|(255&e[31])<<8;};function _(e,t,r,n,o,i){var s=new E(i);return s.update(r,n,o),s.finish(e,t),0}function T(e,t,r,n,o,i){var s=new Uint8Array(16);return _(s,0,r,n,o,i),y(e,t,s,0)}function k(e,t,r,n,o){var i;if(r<32)return -1;for(S(e,0,t,0,r,n,o),_(e,16,e,32,r-32,e),i=0;i<16;i++)e[i]=0;return 0}function B(e,t,r,n,o){var i,s=new Uint8Array(32);if(r<32)return -1;if(x(s,0,32,n,o),0!==T(t,16,t,32,r-32,s))return -1;for(S(e,0,t,0,r,n,o),i=0;i<32;i++)e[i]=0;return 0}function U(e,t){var r;for(r=0;r<16;r++)e[r]=0|t[r];}function I(e){var t,r,n=1;for(t=0;t<16;t++)r=e[t]+n+65535,n=Math.floor(r/65536),e[t]=r-65536*n;e[0]+=n-1+37*(n-1);}function R(e,t,r){for(var n,o=~(r-1),i=0;i<16;i++)n=o&(e[i]^t[i]),e[i]^=n,t[i]^=n;}function O(e,r){var n,o,i,s=t(),a=t();for(n=0;n<16;n++)a[n]=r[n];for(I(a),I(a),I(a),o=0;o<2;o++){for(s[0]=a[0]-65517,n=1;n<15;n++)s[n]=a[n]-65535-(s[n-1]>>16&1),s[n-1]&=65535;s[15]=a[15]-32767-(s[14]>>16&1),i=s[15]>>16&1,s[14]&=65535,R(a,s,1-i);}for(n=0;n<16;n++)e[2*n]=255&a[n],e[2*n+1]=a[n]>>8;}function C(e,t){var r=new Uint8Array(32),n=new Uint8Array(32);return O(r,e),O(n,t),g(r,0,n,0)}function D(e){var t=new Uint8Array(32);return O(t,e),1&t[0]}function N(e,t){var r;for(r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767;}function P(e,t,r){for(var n=0;n<16;n++)e[n]=t[n]+r[n];}function j(e,t,r){for(var n=0;n<16;n++)e[n]=t[n]-r[n];}function F(e,t,r){var n,o,i=0,s=0,a=0,c=0,u=0,h=0,l=0,p=0,f=0,d=0,y=0,g=0,m=0,b=0,A=0,w=0,v=0,x=0,S=0,E=0,_=0,T=0,k=0,B=0,U=0,I=0,R=0,O=0,C=0,D=0,N=0,P=r[0],j=r[1],F=r[2],L=r[3],z=r[4],M=r[5],H=r[6],G=r[7],K=r[8],q=r[9],V=r[10],W=r[11],$=r[12],X=r[13],Q=r[14],Y=r[15];i+=(n=t[0])*P,s+=n*j,a+=n*F,c+=n*L,u+=n*z,h+=n*M,l+=n*H,p+=n*G,f+=n*K,d+=n*q,y+=n*V,g+=n*W,m+=n*$,b+=n*X,A+=n*Q,w+=n*Y,s+=(n=t[1])*P,a+=n*j,c+=n*F,u+=n*L,h+=n*z,l+=n*M,p+=n*H,f+=n*G,d+=n*K,y+=n*q,g+=n*V,m+=n*W,b+=n*$,A+=n*X,w+=n*Q,v+=n*Y,a+=(n=t[2])*P,c+=n*j,u+=n*F,h+=n*L,l+=n*z,p+=n*M,f+=n*H,d+=n*G,y+=n*K,g+=n*q,m+=n*V,b+=n*W,A+=n*$,w+=n*X,v+=n*Q,x+=n*Y,c+=(n=t[3])*P,u+=n*j,h+=n*F,l+=n*L,p+=n*z,f+=n*M,d+=n*H,y+=n*G,g+=n*K,m+=n*q,b+=n*V,A+=n*W,w+=n*$,v+=n*X,x+=n*Q,S+=n*Y,u+=(n=t[4])*P,h+=n*j,l+=n*F,p+=n*L,f+=n*z,d+=n*M,y+=n*H,g+=n*G,m+=n*K,b+=n*q,A+=n*V,w+=n*W,v+=n*$,x+=n*X,S+=n*Q,E+=n*Y,h+=(n=t[5])*P,l+=n*j,p+=n*F,f+=n*L,d+=n*z,y+=n*M,g+=n*H,m+=n*G,b+=n*K,A+=n*q,w+=n*V,v+=n*W,x+=n*$,S+=n*X,E+=n*Q,_+=n*Y,l+=(n=t[6])*P,p+=n*j,f+=n*F,d+=n*L,y+=n*z,g+=n*M,m+=n*H,b+=n*G,A+=n*K,w+=n*q,v+=n*V,x+=n*W,S+=n*$,E+=n*X,_+=n*Q,T+=n*Y,p+=(n=t[7])*P,f+=n*j,d+=n*F,y+=n*L,g+=n*z,m+=n*M,b+=n*H,A+=n*G,w+=n*K,v+=n*q,x+=n*V,S+=n*W,E+=n*$,_+=n*X,T+=n*Q,k+=n*Y,f+=(n=t[8])*P,d+=n*j,y+=n*F,g+=n*L,m+=n*z,b+=n*M,A+=n*H,w+=n*G,v+=n*K,x+=n*q,S+=n*V,E+=n*W,_+=n*$,T+=n*X,k+=n*Q,B+=n*Y,d+=(n=t[9])*P,y+=n*j,g+=n*F,m+=n*L,b+=n*z,A+=n*M,w+=n*H,v+=n*G,x+=n*K,S+=n*q,E+=n*V,_+=n*W,T+=n*$,k+=n*X,B+=n*Q,U+=n*Y,y+=(n=t[10])*P,g+=n*j,m+=n*F,b+=n*L,A+=n*z,w+=n*M,v+=n*H,x+=n*G,S+=n*K,E+=n*q,_+=n*V,T+=n*W,k+=n*$,B+=n*X,U+=n*Q,I+=n*Y,g+=(n=t[11])*P,m+=n*j,b+=n*F,A+=n*L,w+=n*z,v+=n*M,x+=n*H,S+=n*G,E+=n*K,_+=n*q,T+=n*V,k+=n*W,B+=n*$,U+=n*X,I+=n*Q,R+=n*Y,m+=(n=t[12])*P,b+=n*j,A+=n*F,w+=n*L,v+=n*z,x+=n*M,S+=n*H,E+=n*G,_+=n*K,T+=n*q,k+=n*V,B+=n*W,U+=n*$,I+=n*X,R+=n*Q,O+=n*Y,b+=(n=t[13])*P,A+=n*j,w+=n*F,v+=n*L,x+=n*z,S+=n*M,E+=n*H,_+=n*G,T+=n*K,k+=n*q,B+=n*V,U+=n*W,I+=n*$,R+=n*X,O+=n*Q,C+=n*Y,A+=(n=t[14])*P,w+=n*j,v+=n*F,x+=n*L,S+=n*z,E+=n*M,_+=n*H,T+=n*G,k+=n*K,B+=n*q,U+=n*V,I+=n*W,R+=n*$,O+=n*X,C+=n*Q,D+=n*Y,w+=(n=t[15])*P,s+=38*(x+=n*F),a+=38*(S+=n*L),c+=38*(E+=n*z),u+=38*(_+=n*M),h+=38*(T+=n*H),l+=38*(k+=n*G),p+=38*(B+=n*K),f+=38*(U+=n*q),d+=38*(I+=n*V),y+=38*(R+=n*W),g+=38*(O+=n*$),m+=38*(C+=n*X),b+=38*(D+=n*Q),A+=38*(N+=n*Y),i=(n=(i+=38*(v+=n*j))+(o=1)+65535)-65536*(o=Math.floor(n/65536)),s=(n=s+o+65535)-65536*(o=Math.floor(n/65536)),a=(n=a+o+65535)-65536*(o=Math.floor(n/65536)),c=(n=c+o+65535)-65536*(o=Math.floor(n/65536)),u=(n=u+o+65535)-65536*(o=Math.floor(n/65536)),h=(n=h+o+65535)-65536*(o=Math.floor(n/65536)),l=(n=l+o+65535)-65536*(o=Math.floor(n/65536)),p=(n=p+o+65535)-65536*(o=Math.floor(n/65536)),f=(n=f+o+65535)-65536*(o=Math.floor(n/65536)),d=(n=d+o+65535)-65536*(o=Math.floor(n/65536)),y=(n=y+o+65535)-65536*(o=Math.floor(n/65536)),g=(n=g+o+65535)-65536*(o=Math.floor(n/65536)),m=(n=m+o+65535)-65536*(o=Math.floor(n/65536)),b=(n=b+o+65535)-65536*(o=Math.floor(n/65536)),A=(n=A+o+65535)-65536*(o=Math.floor(n/65536)),w=(n=w+o+65535)-65536*(o=Math.floor(n/65536)),i=(n=(i+=o-1+37*(o-1))+(o=1)+65535)-65536*(o=Math.floor(n/65536)),s=(n=s+o+65535)-65536*(o=Math.floor(n/65536)),a=(n=a+o+65535)-65536*(o=Math.floor(n/65536)),c=(n=c+o+65535)-65536*(o=Math.floor(n/65536)),u=(n=u+o+65535)-65536*(o=Math.floor(n/65536)),h=(n=h+o+65535)-65536*(o=Math.floor(n/65536)),l=(n=l+o+65535)-65536*(o=Math.floor(n/65536)),p=(n=p+o+65535)-65536*(o=Math.floor(n/65536)),f=(n=f+o+65535)-65536*(o=Math.floor(n/65536)),d=(n=d+o+65535)-65536*(o=Math.floor(n/65536)),y=(n=y+o+65535)-65536*(o=Math.floor(n/65536)),g=(n=g+o+65535)-65536*(o=Math.floor(n/65536)),m=(n=m+o+65535)-65536*(o=Math.floor(n/65536)),b=(n=b+o+65535)-65536*(o=Math.floor(n/65536)),A=(n=A+o+65535)-65536*(o=Math.floor(n/65536)),w=(n=w+o+65535)-65536*(o=Math.floor(n/65536)),i+=o-1+37*(o-1),e[0]=i,e[1]=s,e[2]=a,e[3]=c,e[4]=u,e[5]=h,e[6]=l,e[7]=p,e[8]=f,e[9]=d,e[10]=y,e[11]=g,e[12]=m,e[13]=b,e[14]=A,e[15]=w;}function L(e,t){F(e,t,t);}function z(e,r){var n,o=t();for(n=0;n<16;n++)o[n]=r[n];for(n=253;n>=0;n--)L(o,o),2!==n&&4!==n&&F(o,o,r);for(n=0;n<16;n++)e[n]=o[n];}function M(e,r){var n,o=t();for(n=0;n<16;n++)o[n]=r[n];for(n=250;n>=0;n--)L(o,o),1!==n&&F(o,o,r);for(n=0;n<16;n++)e[n]=o[n];}function H(e,r,n){var o,i,s=new Uint8Array(32),c=new Float64Array(80),u=t(),h=t(),l=t(),p=t(),f=t(),d=t();for(i=0;i<31;i++)s[i]=r[i];for(s[31]=127&r[31]|64,s[0]&=248,N(c,n),i=0;i<16;i++)h[i]=c[i],p[i]=u[i]=l[i]=0;for(u[0]=p[0]=1,i=254;i>=0;--i)R(u,h,o=s[i>>>3]>>>(7&i)&1),R(l,p,o),P(f,u,l),j(u,u,l),P(l,h,p),j(h,h,p),L(p,f),L(d,u),F(u,l,u),F(l,h,f),P(f,u,l),j(u,u,l),L(h,u),j(l,p,d),F(u,l,a),P(u,u,p),F(l,l,u),F(u,p,d),F(p,h,c),L(h,f),R(u,h,o),R(l,p,o);for(i=0;i<16;i++)c[i+16]=u[i],c[i+32]=l[i],c[i+48]=h[i],c[i+64]=p[i];var y=c.subarray(32),g=c.subarray(16);return z(y,y),F(g,g,y),O(e,g),0}function G(e,t){return H(e,t,o)}function K(e,t){return r(t,32),G(e,t)}function q(e,t,r){var o=new Uint8Array(32);return H(o,r,t),b(e,n,o,A)}E.prototype.blocks=function(e,t,r){for(var n,o,i,s,a,c,u,h,l,p,f,d,y,g,m,b,A,w,v,x=this.fin?0:2048,S=this.h[0],E=this.h[1],_=this.h[2],T=this.h[3],k=this.h[4],B=this.h[5],U=this.h[6],I=this.h[7],R=this.h[8],O=this.h[9],C=this.r[0],D=this.r[1],N=this.r[2],P=this.r[3],j=this.r[4],F=this.r[5],L=this.r[6],z=this.r[7],M=this.r[8],H=this.r[9];r>=16;)p=l=0,p+=(S+=8191&(n=255&e[t+0]|(255&e[t+1])<<8))*C,p+=(E+=8191&(n>>>13|(o=255&e[t+2]|(255&e[t+3])<<8)<<3))*(5*H),p+=(_+=8191&(o>>>10|(i=255&e[t+4]|(255&e[t+5])<<8)<<6))*(5*M),p+=(T+=8191&(i>>>7|(s=255&e[t+6]|(255&e[t+7])<<8)<<9))*(5*z),l=(p+=(k+=8191&(s>>>4|(a=255&e[t+8]|(255&e[t+9])<<8)<<12))*(5*L))>>>13,p&=8191,p+=(B+=a>>>1&8191)*(5*F),p+=(U+=8191&(a>>>14|(c=255&e[t+10]|(255&e[t+11])<<8)<<2))*(5*j),p+=(I+=8191&(c>>>11|(u=255&e[t+12]|(255&e[t+13])<<8)<<5))*(5*P),p+=(R+=8191&(u>>>8|(h=255&e[t+14]|(255&e[t+15])<<8)<<8))*(5*N),f=l+=(p+=(O+=h>>>5|x)*(5*D))>>>13,f+=S*D,f+=E*C,f+=_*(5*H),f+=T*(5*M),l=(f+=k*(5*z))>>>13,f&=8191,f+=B*(5*L),f+=U*(5*F),f+=I*(5*j),f+=R*(5*P),l+=(f+=O*(5*N))>>>13,f&=8191,d=l,d+=S*N,d+=E*D,d+=_*C,d+=T*(5*H),l=(d+=k*(5*M))>>>13,d&=8191,d+=B*(5*z),d+=U*(5*L),d+=I*(5*F),d+=R*(5*j),y=l+=(d+=O*(5*P))>>>13,y+=S*P,y+=E*N,y+=_*D,y+=T*C,l=(y+=k*(5*H))>>>13,y&=8191,y+=B*(5*M),y+=U*(5*z),y+=I*(5*L),y+=R*(5*F),g=l+=(y+=O*(5*j))>>>13,g+=S*j,g+=E*P,g+=_*N,g+=T*D,l=(g+=k*C)>>>13,g&=8191,g+=B*(5*H),g+=U*(5*M),g+=I*(5*z),g+=R*(5*L),m=l+=(g+=O*(5*F))>>>13,m+=S*F,m+=E*j,m+=_*P,m+=T*N,l=(m+=k*D)>>>13,m&=8191,m+=B*C,m+=U*(5*H),m+=I*(5*M),m+=R*(5*z),b=l+=(m+=O*(5*L))>>>13,b+=S*L,b+=E*F,b+=_*j,b+=T*P,l=(b+=k*N)>>>13,b&=8191,b+=B*D,b+=U*C,b+=I*(5*H),b+=R*(5*M),A=l+=(b+=O*(5*z))>>>13,A+=S*z,A+=E*L,A+=_*F,A+=T*j,l=(A+=k*P)>>>13,A&=8191,A+=B*N,A+=U*D,A+=I*C,A+=R*(5*H),w=l+=(A+=O*(5*M))>>>13,w+=S*M,w+=E*z,w+=_*L,w+=T*F,l=(w+=k*j)>>>13,w&=8191,w+=B*P,w+=U*N,w+=I*D,w+=R*C,v=l+=(w+=O*(5*H))>>>13,v+=S*H,v+=E*M,v+=_*z,v+=T*L,l=(v+=k*F)>>>13,v&=8191,v+=B*j,v+=U*P,v+=I*N,v+=R*D,S=p=8191&(l=(l=((l+=(v+=O*C)>>>13)<<2)+l|0)+(p&=8191)|0),E=f+=l>>>=13,_=d&=8191,T=y&=8191,k=g&=8191,B=m&=8191,U=b&=8191,I=A&=8191,R=w&=8191,O=v&=8191,t+=16,r-=16;this.h[0]=S,this.h[1]=E,this.h[2]=_,this.h[3]=T,this.h[4]=k,this.h[5]=B,this.h[6]=U,this.h[7]=I,this.h[8]=R,this.h[9]=O;},E.prototype.finish=function(e,t){var r,n,o,i,s=new Uint16Array(10);if(this.leftover){for(i=this.leftover,this.buffer[i++]=1;i<16;i++)this.buffer[i]=0;this.fin=1,this.blocks(this.buffer,0,16);}for(r=this.h[1]>>>13,this.h[1]&=8191,i=2;i<10;i++)this.h[i]+=r,r=this.h[i]>>>13,this.h[i]&=8191;for(this.h[0]+=5*r,r=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=r,r=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=r,s[0]=this.h[0]+5,r=s[0]>>>13,s[0]&=8191,i=1;i<10;i++)s[i]=this.h[i]+r,r=s[i]>>>13,s[i]&=8191;for(s[9]-=8192,n=(1^r)-1,i=0;i<10;i++)s[i]&=n;for(n=~n,i=0;i<10;i++)this.h[i]=this.h[i]&n|s[i];for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),o=this.h[0]+this.pad[0],this.h[0]=65535&o,i=1;i<8;i++)o=(this.h[i]+this.pad[i]|0)+(o>>>16)|0,this.h[i]=65535&o;e[t+0]=this.h[0]>>>0&255,e[t+1]=this.h[0]>>>8&255,e[t+2]=this.h[1]>>>0&255,e[t+3]=this.h[1]>>>8&255,e[t+4]=this.h[2]>>>0&255,e[t+5]=this.h[2]>>>8&255,e[t+6]=this.h[3]>>>0&255,e[t+7]=this.h[3]>>>8&255,e[t+8]=this.h[4]>>>0&255,e[t+9]=this.h[4]>>>8&255,e[t+10]=this.h[5]>>>0&255,e[t+11]=this.h[5]>>>8&255,e[t+12]=this.h[6]>>>0&255,e[t+13]=this.h[6]>>>8&255,e[t+14]=this.h[7]>>>0&255,e[t+15]=this.h[7]>>>8&255;},E.prototype.update=function(e,t,r){var n,o;if(this.leftover){for((o=16-this.leftover)>r&&(o=r),n=0;n<o;n++)this.buffer[this.leftover+n]=e[t+n];if(r-=o,t+=o,this.leftover+=o,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0;}if(r>=16&&(o=r-r%16,this.blocks(e,t,o),t+=o,r-=o),r){for(n=0;n<r;n++)this.buffer[this.leftover+n]=e[t+n];this.leftover+=r;}};var V=k,W=B,$=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function X(e,t,r,n){for(var o,i,s,a,c,u,h,l,p,f,d,y,g,m,b,A,w,v,x,S,E,_,T,k,B,U,I=new Int32Array(16),R=new Int32Array(16),O=e[0],C=e[1],D=e[2],N=e[3],P=e[4],j=e[5],F=e[6],L=e[7],z=t[0],M=t[1],H=t[2],G=t[3],K=t[4],q=t[5],V=t[6],W=t[7],X=0;n>=128;){for(x=0;x<16;x++)S=8*x+X,I[x]=r[S+0]<<24|r[S+1]<<16|r[S+2]<<8|r[S+3],R[x]=r[S+4]<<24|r[S+5]<<16|r[S+6]<<8|r[S+7];for(x=0;x<80;x++)if(o=O,i=C,s=D,a=N,c=P,u=j,h=F,p=z,f=M,d=H,y=G,g=K,m=q,b=V,T=65535&(_=W),k=_>>>16,B=65535&(E=L),U=E>>>16,T+=65535&(_=(K>>>14|P<<18)^(K>>>18|P<<14)^(P>>>9|K<<23)),k+=_>>>16,B+=65535&(E=(P>>>14|K<<18)^(P>>>18|K<<14)^(K>>>9|P<<23)),U+=E>>>16,T+=65535&(_=K&q^~K&V),k+=_>>>16,B+=65535&(E=P&j^~P&F),U+=E>>>16,T+=65535&(_=$[2*x+1]),k+=_>>>16,B+=65535&(E=$[2*x]),U+=E>>>16,E=I[x%16],k+=(_=R[x%16])>>>16,B+=65535&E,U+=E>>>16,B+=(k+=(T+=65535&_)>>>16)>>>16,T=65535&(_=v=65535&T|k<<16),k=_>>>16,B=65535&(E=w=65535&B|(U+=B>>>16)<<16),U=E>>>16,T+=65535&(_=(z>>>28|O<<4)^(O>>>2|z<<30)^(O>>>7|z<<25)),k+=_>>>16,B+=65535&(E=(O>>>28|z<<4)^(z>>>2|O<<30)^(z>>>7|O<<25)),U+=E>>>16,k+=(_=z&M^z&H^M&H)>>>16,B+=65535&(E=O&C^O&D^C&D),U+=E>>>16,l=65535&(B+=(k+=(T+=65535&_)>>>16)>>>16)|(U+=B>>>16)<<16,A=65535&T|k<<16,T=65535&(_=y),k=_>>>16,B=65535&(E=a),U=E>>>16,k+=(_=v)>>>16,B+=65535&(E=w),U+=E>>>16,C=o,D=i,N=s,P=a=65535&(B+=(k+=(T+=65535&_)>>>16)>>>16)|(U+=B>>>16)<<16,j=c,F=u,L=h,O=l,M=p,H=f,G=d,K=y=65535&T|k<<16,q=g,V=m,W=b,z=A,x%16==15)for(S=0;S<16;S++)E=I[S],T=65535&(_=R[S]),k=_>>>16,B=65535&E,U=E>>>16,E=I[(S+9)%16],T+=65535&(_=R[(S+9)%16]),k+=_>>>16,B+=65535&E,U+=E>>>16,w=I[(S+1)%16],T+=65535&(_=((v=R[(S+1)%16])>>>1|w<<31)^(v>>>8|w<<24)^(v>>>7|w<<25)),k+=_>>>16,B+=65535&(E=(w>>>1|v<<31)^(w>>>8|v<<24)^w>>>7),U+=E>>>16,w=I[(S+14)%16],k+=(_=((v=R[(S+14)%16])>>>19|w<<13)^(w>>>29|v<<3)^(v>>>6|w<<26))>>>16,B+=65535&(E=(w>>>19|v<<13)^(v>>>29|w<<3)^w>>>6),U+=E>>>16,U+=(B+=(k+=(T+=65535&_)>>>16)>>>16)>>>16,I[S]=65535&B|U<<16,R[S]=65535&T|k<<16;T=65535&(_=z),k=_>>>16,B=65535&(E=O),U=E>>>16,E=e[0],k+=(_=t[0])>>>16,B+=65535&E,U+=E>>>16,U+=(B+=(k+=(T+=65535&_)>>>16)>>>16)>>>16,e[0]=O=65535&B|U<<16,t[0]=z=65535&T|k<<16,T=65535&(_=M),k=_>>>16,B=65535&(E=C),U=E>>>16,E=e[1],k+=(_=t[1])>>>16,B+=65535&E,U+=E>>>16,U+=(B+=(k+=(T+=65535&_)>>>16)>>>16)>>>16,e[1]=C=65535&B|U<<16,t[1]=M=65535&T|k<<16,T=65535&(_=H),k=_>>>16,B=65535&(E=D),U=E>>>16,E=e[2],k+=(_=t[2])>>>16,B+=65535&E,U+=E>>>16,U+=(B+=(k+=(T+=65535&_)>>>16)>>>16)>>>16,e[2]=D=65535&B|U<<16,t[2]=H=65535&T|k<<16,T=65535&(_=G),k=_>>>16,B=65535&(E=N),U=E>>>16,E=e[3],k+=(_=t[3])>>>16,B+=65535&E,U+=E>>>16,U+=(B+=(k+=(T+=65535&_)>>>16)>>>16)>>>16,e[3]=N=65535&B|U<<16,t[3]=G=65535&T|k<<16,T=65535&(_=K),k=_>>>16,B=65535&(E=P),U=E>>>16,E=e[4],k+=(_=t[4])>>>16,B+=65535&E,U+=E>>>16,U+=(B+=(k+=(T+=65535&_)>>>16)>>>16)>>>16,e[4]=P=65535&B|U<<16,t[4]=K=65535&T|k<<16,T=65535&(_=q),k=_>>>16,B=65535&(E=j),U=E>>>16,E=e[5],k+=(_=t[5])>>>16,B+=65535&E,U+=E>>>16,U+=(B+=(k+=(T+=65535&_)>>>16)>>>16)>>>16,e[5]=j=65535&B|U<<16,t[5]=q=65535&T|k<<16,T=65535&(_=V),k=_>>>16,B=65535&(E=F),U=E>>>16,E=e[6],k+=(_=t[6])>>>16,B+=65535&E,U+=E>>>16,U+=(B+=(k+=(T+=65535&_)>>>16)>>>16)>>>16,e[6]=F=65535&B|U<<16,t[6]=V=65535&T|k<<16,T=65535&(_=W),k=_>>>16,B=65535&(E=L),U=E>>>16,E=e[7],k+=(_=t[7])>>>16,B+=65535&E,U+=E>>>16,U+=(B+=(k+=(T+=65535&_)>>>16)>>>16)>>>16,e[7]=L=65535&B|U<<16,t[7]=W=65535&T|k<<16,X+=128,n-=128;}return n}function Q(e,t,r){var n,o=new Int32Array(8),i=new Int32Array(8),s=new Uint8Array(256),a=r;for(o[0]=1779033703,o[1]=3144134277,o[2]=1013904242,o[3]=2773480762,o[4]=1359893119,o[5]=2600822924,o[6]=528734635,o[7]=1541459225,i[0]=4089235720,i[1]=2227873595,i[2]=4271175723,i[3]=1595750129,i[4]=2917565137,i[5]=725511199,i[6]=4215389547,i[7]=327033209,X(o,i,t,r),r%=128,n=0;n<r;n++)s[n]=t[a-r+n];for(s[r]=128,s[(r=256-128*(r<112?1:0))-9]=0,f(s,r-8,a/536870912|0,a<<3),X(o,i,s,r),n=0;n<8;n++)f(e,8*n,o[n],i[n]);return 0}function Y(e,r){var n=t(),o=t(),i=t(),s=t(),a=t(),c=t(),h=t(),l=t(),p=t();j(n,e[1],e[0]),j(p,r[1],r[0]),F(n,n,p),P(o,e[0],e[1]),P(p,r[0],r[1]),F(o,o,p),F(i,e[3],r[3]),F(i,i,u),F(s,e[2],r[2]),P(s,s,s),j(a,o,n),j(c,s,i),P(h,s,i),P(l,o,n),F(e[0],a,c),F(e[1],l,h),F(e[2],h,c),F(e[3],a,l);}function J(e,t,r){var n;for(n=0;n<4;n++)R(e[n],t[n],r);}function Z(e,r){var n=t(),o=t(),i=t();z(i,r[2]),F(n,r[0],i),F(o,r[1],i),O(e,o),e[31]^=D(n)<<7;}function ee(e,t,r){var n,o;for(U(e[0],i),U(e[1],s),U(e[2],s),U(e[3],i),o=255;o>=0;--o)J(e,t,n=r[o/8|0]>>(7&o)&1),Y(t,e),Y(e,e),J(e,t,n);}function te(e,r){var n=[t(),t(),t(),t()];U(n[0],h),U(n[1],l),U(n[2],s),F(n[3],h,l),ee(e,n,r);}function re(e,n,o){var i,s=new Uint8Array(64),a=[t(),t(),t(),t()];for(o||r(n,32),Q(s,n,32),s[0]&=248,s[31]&=127,s[31]|=64,te(a,s),Z(e,a),i=0;i<32;i++)n[i+32]=e[i];return 0}var ne=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function oe(e,t){var r,n,o,i;for(n=63;n>=32;--n){for(r=0,o=n-32,i=n-12;o<i;++o)t[o]+=r-16*t[n]*ne[o-(n-32)],r=Math.floor((t[o]+128)/256),t[o]-=256*r;t[o]+=r,t[n]=0;}for(r=0,o=0;o<32;o++)t[o]+=r-(t[31]>>4)*ne[o],r=t[o]>>8,t[o]&=255;for(o=0;o<32;o++)t[o]-=r*ne[o];for(n=0;n<32;n++)t[n+1]+=t[n]>>8,e[n]=255&t[n];}function ie(e){var t,r=new Float64Array(64);for(t=0;t<64;t++)r[t]=e[t];for(t=0;t<64;t++)e[t]=0;oe(e,r);}function se(e,r,n,o){var i,s,a=new Uint8Array(64),c=new Uint8Array(64),u=new Uint8Array(64),h=new Float64Array(64),l=[t(),t(),t(),t()];Q(a,o,32),a[0]&=248,a[31]&=127,a[31]|=64;var p=n+64;for(i=0;i<n;i++)e[64+i]=r[i];for(i=0;i<32;i++)e[32+i]=a[32+i];for(Q(u,e.subarray(32),n+32),ie(u),te(l,u),Z(e,l),i=32;i<64;i++)e[i]=o[i];for(Q(c,e,n+64),ie(c),i=0;i<64;i++)h[i]=0;for(i=0;i<32;i++)h[i]=u[i];for(i=0;i<32;i++)for(s=0;s<32;s++)h[i+s]+=c[i]*a[s];return oe(e.subarray(32),h),p}function ae(e,r,n,o){var a,u=new Uint8Array(32),h=new Uint8Array(64),l=[t(),t(),t(),t()],f=[t(),t(),t(),t()];if(n<64)return -1;if(function(e,r){var n=t(),o=t(),a=t(),u=t(),h=t(),l=t(),f=t();return U(e[2],s),N(e[1],r),L(a,e[1]),F(u,a,c),j(a,a,e[2]),P(u,e[2],u),L(h,u),L(l,h),F(f,l,h),F(n,f,a),F(n,n,u),M(n,n),F(n,n,a),F(n,n,u),F(n,n,u),F(e[0],n,u),L(o,e[0]),F(o,o,u),C(o,a)&&F(e[0],e[0],p),L(o,e[0]),F(o,o,u),C(o,a)?-1:(D(e[0])===r[31]>>7&&j(e[0],i,e[0]),F(e[3],e[0],e[1]),0)}(f,o))return -1;for(a=0;a<n;a++)e[a]=r[a];for(a=0;a<32;a++)e[a+32]=o[a];if(Q(h,e,n),ie(h),ee(l,f,h),te(f,r.subarray(32)),Y(l,f),Z(u,l),n-=64,g(r,0,u,0)){for(a=0;a<n;a++)e[a]=0;return -1}for(a=0;a<n;a++)e[a]=r[a+64];return n}var ce=64,ue=32,he=64;function le(e,t){if(32!==e.length)throw new Error("bad key size");if(24!==t.length)throw new Error("bad nonce size")}function pe(){for(var e=0;e<arguments.length;e++)if(!(arguments[e]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function fe(e){for(var t=0;t<e.length;t++)e[t]=0;}e.lowlevel={crypto_core_hsalsa20:b,crypto_stream_xor:S,crypto_stream:x,crypto_stream_salsa20_xor:w,crypto_stream_salsa20:v,crypto_onetimeauth:_,crypto_onetimeauth_verify:T,crypto_verify_16:y,crypto_verify_32:g,crypto_secretbox:k,crypto_secretbox_open:B,crypto_scalarmult:H,crypto_scalarmult_base:G,crypto_box_beforenm:q,crypto_box_afternm:V,crypto_box:function(e,t,r,n,o,i){var s=new Uint8Array(32);return q(s,o,i),V(e,t,r,n,s)},crypto_box_open:function(e,t,r,n,o,i){var s=new Uint8Array(32);return q(s,o,i),W(e,t,r,n,s)},crypto_box_keypair:K,crypto_hash:Q,crypto_sign:se,crypto_sign_keypair:re,crypto_sign_open:ae,crypto_secretbox_KEYBYTES:32,crypto_secretbox_NONCEBYTES:24,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:32,crypto_box_SECRETKEYBYTES:32,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:24,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:ce,crypto_sign_PUBLICKEYBYTES:ue,crypto_sign_SECRETKEYBYTES:he,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64,gf:t,D:c,L:ne,pack25519:O,unpack25519:N,M:F,A:P,S:L,Z:j,pow2523:M,add:Y,set25519:U,modL:oe,scalarmult:ee,scalarbase:te},e.randomBytes=function(e){var t=new Uint8Array(e);return r(t,e),t},e.secretbox=function(e,t,r){pe(e,t,r),le(r,t);for(var n=new Uint8Array(32+e.length),o=new Uint8Array(n.length),i=0;i<e.length;i++)n[i+32]=e[i];return k(o,n,n.length,t,r),o.subarray(16)},e.secretbox.open=function(e,t,r){pe(e,t,r),le(r,t);for(var n=new Uint8Array(16+e.length),o=new Uint8Array(n.length),i=0;i<e.length;i++)n[i+16]=e[i];return n.length<32||0!==B(o,n,n.length,t,r)?null:o.subarray(32)},e.secretbox.keyLength=32,e.secretbox.nonceLength=24,e.secretbox.overheadLength=16,e.scalarMult=function(e,t){if(pe(e,t),32!==e.length)throw new Error("bad n size");if(32!==t.length)throw new Error("bad p size");var r=new Uint8Array(32);return H(r,e,t),r},e.scalarMult.base=function(e){if(pe(e),32!==e.length)throw new Error("bad n size");var t=new Uint8Array(32);return G(t,e),t},e.scalarMult.scalarLength=32,e.scalarMult.groupElementLength=32,e.box=function(t,r,n,o){var i=e.box.before(n,o);return e.secretbox(t,r,i)},e.box.before=function(e,t){pe(e,t),function(e,t){if(32!==e.length)throw new Error("bad public key size");if(32!==t.length)throw new Error("bad secret key size")}(e,t);var r=new Uint8Array(32);return q(r,e,t),r},e.box.after=e.secretbox,e.box.open=function(t,r,n,o){var i=e.box.before(n,o);return e.secretbox.open(t,r,i)},e.box.open.after=e.secretbox.open,e.box.keyPair=function(){var e=new Uint8Array(32),t=new Uint8Array(32);return K(e,t),{publicKey:e,secretKey:t}},e.box.keyPair.fromSecretKey=function(e){if(pe(e),32!==e.length)throw new Error("bad secret key size");var t=new Uint8Array(32);return G(t,e),{publicKey:t,secretKey:new Uint8Array(e)}},e.box.publicKeyLength=32,e.box.secretKeyLength=32,e.box.sharedKeyLength=32,e.box.nonceLength=24,e.box.overheadLength=e.secretbox.overheadLength,e.sign=function(e,t){if(pe(e,t),t.length!==he)throw new Error("bad secret key size");var r=new Uint8Array(ce+e.length);return se(r,e,e.length,t),r},e.sign.open=function(e,t){if(pe(e,t),t.length!==ue)throw new Error("bad public key size");var r=new Uint8Array(e.length),n=ae(r,e,e.length,t);if(n<0)return null;for(var o=new Uint8Array(n),i=0;i<o.length;i++)o[i]=r[i];return o},e.sign.detached=function(t,r){for(var n=e.sign(t,r),o=new Uint8Array(ce),i=0;i<o.length;i++)o[i]=n[i];return o},e.sign.detached.verify=function(e,t,r){if(pe(e,t,r),t.length!==ce)throw new Error("bad signature size");if(r.length!==ue)throw new Error("bad public key size");var n,o=new Uint8Array(ce+e.length),i=new Uint8Array(ce+e.length);for(n=0;n<ce;n++)o[n]=t[n];for(n=0;n<e.length;n++)o[n+ce]=e[n];return ae(i,o,o.length,r)>=0},e.sign.keyPair=function(){var e=new Uint8Array(ue),t=new Uint8Array(he);return re(e,t),{publicKey:e,secretKey:t}},e.sign.keyPair.fromSecretKey=function(e){if(pe(e),e.length!==he)throw new Error("bad secret key size");for(var t=new Uint8Array(ue),r=0;r<t.length;r++)t[r]=e[32+r];return {publicKey:t,secretKey:new Uint8Array(e)}},e.sign.keyPair.fromSeed=function(e){if(pe(e),32!==e.length)throw new Error("bad seed size");for(var t=new Uint8Array(ue),r=new Uint8Array(he),n=0;n<32;n++)r[n]=e[n];return re(t,r,!0),{publicKey:t,secretKey:r}},e.sign.publicKeyLength=ue,e.sign.secretKeyLength=he,e.sign.seedLength=32,e.sign.signatureLength=ce,e.hash=function(e){pe(e);var t=new Uint8Array(64);return Q(t,e,e.length),t},e.hash.hashLength=64,e.verify=function(e,t){return pe(e,t),0!==e.length&&0!==t.length&&e.length===t.length&&0===d(e,0,t,0,e.length)},e.setPRNG=function(e){r=e;},function(){var t="undefined"!=typeof self?self.crypto||self.msCrypto:null;t&&t.getRandomValues?e.setPRNG((function(e,r){var n,o=new Uint8Array(r);for(n=0;n<r;n+=65536)t.getRandomValues(o.subarray(n,n+Math.min(r-n,65536)));for(n=0;n<r;n++)e[n]=o[n];fe(o);})):"undefined"!=typeof commonjsRequire&&(t=require$$0)&&t.randomBytes&&e.setPRNG((function(e,r){var n,o=t.randomBytes(r);for(n=0;n<r;n++)e[n]=o[n];fe(o);}));}();}(void 0!==e&&e.exports?e.exports:self.nacl=self.nacl||{});},1042:(e,t,r)=>{var n=r(1926),o=r(9370),i=/^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/,s=/^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i,a=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function c(e){return (e||"").toString().replace(a,"")}var u=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],h={hash:1,query:1};function l(e){var t,n=("undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{}).location||{},o={},s=typeof(e=e||n);if("blob:"===e.protocol)o=new f(unescape(e.pathname),{});else if("string"===s)for(t in o=new f(e,{}),h)delete o[t];else if("object"===s){for(t in e)t in h||(o[t]=e[t]);void 0===o.slashes&&(o.slashes=i.test(e.href));}return o}function p(e){e=c(e);var t=s.exec(e);return {protocol:t[1]?t[1].toLowerCase():"",slashes:!!(t[2]&&t[2].length>=2),rest:t[2]&&1===t[2].length?"/"+t[3]:t[3]}}function f(e,t,r){if(e=c(e),!(this instanceof f))return new f(e,t,r);var i,s,a,h,d,y,g=u.slice(),m=typeof t,b=this,A=0;for("object"!==m&&"string"!==m&&(r=t,t=null),r&&"function"!=typeof r&&(r=o.parse),t=l(t),i=!(s=p(e||"")).protocol&&!s.slashes,b.slashes=s.slashes||i&&t.slashes,b.protocol=s.protocol||t.protocol||"",e=s.rest,s.slashes||(g[3]=[/(.*)/,"pathname"]);A<g.length;A++)"function"!=typeof(h=g[A])?(a=h[0],y=h[1],a!=a?b[y]=e:"string"==typeof a?~(d=e.indexOf(a))&&("number"==typeof h[2]?(b[y]=e.slice(0,d),e=e.slice(d+h[2])):(b[y]=e.slice(d),e=e.slice(0,d))):(d=a.exec(e))&&(b[y]=d[1],e=e.slice(0,d.index)),b[y]=b[y]||i&&h[3]&&t[y]||"",h[4]&&(b[y]=b[y].toLowerCase())):e=h(e);r&&(b.query=r(b.query)),i&&t.slashes&&"/"!==b.pathname.charAt(0)&&(""!==b.pathname||""!==t.pathname)&&(b.pathname=function(e,t){if(""===e)return t;for(var r=(t||"/").split("/").slice(0,-1).concat(e.split("/")),n=r.length,o=r[n-1],i=!1,s=0;n--;)"."===r[n]?r.splice(n,1):".."===r[n]?(r.splice(n,1),s++):s&&(0===n&&(i=!0),r.splice(n,1),s--);return i&&r.unshift(""),"."!==o&&".."!==o||r.push(""),r.join("/")}(b.pathname,t.pathname)),"/"!==b.pathname.charAt(0)&&b.hostname&&(b.pathname="/"+b.pathname),n(b.port,b.protocol)||(b.host=b.hostname,b.port=""),b.username=b.password="",b.auth&&(h=b.auth.split(":"),b.username=h[0]||"",b.password=h[1]||""),b.origin=b.protocol&&b.host&&"file:"!==b.protocol?b.protocol+"//"+b.host:"null",b.href=b.toString();}f.prototype={set:function(e,t,r){var i=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(r||o.parse)(t)),i[e]=t;break;case"port":i[e]=t,n(t,i.protocol)?t&&(i.host=i.hostname+":"+t):(i.host=i.hostname,i[e]="");break;case"hostname":i[e]=t,i.port&&(t+=":"+i.port),i.host=t;break;case"host":i[e]=t,/:\d+$/.test(t)?(t=t.split(":"),i.port=t.pop(),i.hostname=t.join(":")):(i.hostname=t,i.port="");break;case"protocol":i.protocol=t.toLowerCase(),i.slashes=!r;break;case"pathname":case"hash":if(t){var s="pathname"===e?"/":"#";i[e]=t.charAt(0)!==s?s+t:t;}else i[e]=t;break;default:i[e]=t;}for(var a=0;a<u.length;a++){var c=u[a];c[4]&&(i[c[1]]=i[c[1]].toLowerCase());}return i.origin=i.protocol&&i.host&&"file:"!==i.protocol?i.protocol+"//"+i.host:"null",i.href=i.toString(),i},toString:function(e){e&&"function"==typeof e||(e=o.stringify);var t,r=this,n=r.protocol;n&&":"!==n.charAt(n.length-1)&&(n+=":");var i=n+(r.slashes?"//":"");return r.username&&(i+=r.username,r.password&&(i+=":"+r.password),i+="@"),i+=r.host+r.pathname,(t="object"==typeof r.query?e(r.query):r.query)&&(i+="?"!==t.charAt(0)?"?"+t:t),r.hash&&(i+=r.hash),i}},f.extractProtocol=p,f.location=l,f.trimLeft=c,f.qs=o,e.exports=f;},5922:(e,t,r)=>{var n=r(2486).Buffer;const{default:o}=r(1213),{setSendTransactionHeaders:i}=r(5180);e.exports={Algod:function(e="",t="http://r2.algorand.network",r=4180,s={}){let a=e;"string"==typeof a&&(a={"X-Algo-API-Token":a});const c=new o(a,t,r,s);function u(e){return void 0!==e.noteb64&&null!==e.noteb64&&(e.note=n.from(e.noteb64,"base64")),e}this.status=async(e={})=>(await c.get("/v1/status",{},e)).body,this.healthCheck=async(e={})=>{const t=await c.get("/health",{},e);if(!t.ok)throw new Error(`Health response: ${t.status}`);return {}},this.statusAfterBlock=async(e,t={})=>{if(!Number.isInteger(e))throw Error("roundNumber should be an integer");return (await c.get(`/v1/status/wait-for-block-after/${e}`,{},t)).body},this.pendingTransactions=async(e,t={})=>{if(!Number.isInteger(e))throw Error("maxTxns should be an integer");const r=await c.get("/v1/transactions/pending",{max:e},t);if(200===r.statusCode&&void 0!==r.body.truncatedTxns.transactions)for(let e=0;e<r.body.truncatedTxns.transactions.length;e++)r.body.truncatedTxns.transactions[e]=u(r.body.truncatedTxns.transactions[e]);return r.body},this.versions=async(e={})=>(await c.get("/versions",{},e)).body,this.ledgerSupply=async(e={})=>(await c.get("/v1/ledger/supply",{},e)).body,this.transactionByAddress=async(e,t=null,r=null,n=null,o={})=>{if(null!==t&&!Number.isInteger(t))throw Error("first round should be an integer");if(null!==r&&!Number.isInteger(r))throw Error("last round should be an integer");const i=await c.get(`/v1/account/${e}/transactions`,{firstRound:t,lastRound:r,max:n},o);if(200===i.statusCode&&void 0!==i.body.transactions)for(let e=0;e<i.body.transactions.length;e++)i.body.transactions[e]=u(i.body.transactions[e]);return i.body},this.transactionByAddressAndDate=async(e,t,r,n=null,o={})=>{const i=await c.get(`/v1/account/${e}/transactions`,{fromDate:t,toDate:r,max:n},o);if(200===i.statusCode&&void 0!==i.body.transactions)for(let e=0;e<i.body.transactions.length;e++)i.body.transactions[e]=u(i.body.transactions[e]);return i.body},this.transactionById=async(e,t={})=>{const r=await c.get(`/v1/transaction/${e}`,{},t);return 200===r.statusCode&&(r.body=u(r.body)),r.body},this.transactionInformation=async(e,t,r={})=>{const n=await c.get(`/v1/account/${e}/transaction/${t}`,{},r);return 200===n.statusCode&&(n.body=u(n.body)),n.body},this.pendingTransactionInformation=async(e,t={})=>{const r=await c.get(`/v1/transactions/pending/${e}`,{},t);return 200===r.statusCode&&(r.body=u(r.body)),r.body},this.accountInformation=async(e,t={})=>(await c.get(`/v1/account/${e}`,{},t)).body,this.assetInformation=async(e,t={})=>(await c.get(`/v1/asset/${e}`,{},t)).body,this.suggestedFee=async(e={})=>(await c.get("/v1/transactions/fee",{},e)).body,this.sendRawTransaction=async(e,t={})=>{const r=i(t);return (await c.post("/v1/transactions",n.from(e),r)).body},this.sendRawTransactions=async(e,t={})=>{const r=i(t),o=Array.prototype.concat(...e.map((e=>Array.from(e))));return (await c.post("/v1/transactions",n.from(o),r)).body},this.getTransactionParams=async(e={})=>(await c.get("/v1/transactions/params",{},e)).body,this.suggestParams=async(e={})=>{const t=await this.getTransactionParams(e);return {flatFee:!1,fee:t.fee,firstRound:t.lastRound,lastRound:t.lastRound+1e3,genesisID:t.genesisID,genesisHash:t.genesishashb64}},this.block=async(e,t={})=>{if(!Number.isInteger(e))throw Error("roundNumber should be an integer");const r=await c.get(`/v1/block/${e}`,{},t);if(200===r.statusCode&&void 0!==r.body.txns.transactions)for(let e=0;e<r.body.txns.transactions.length;e++)r.body.txns.transactions[e]=u(r.body.txns.transactions[e]);return r.body};}};},1834:(e,t,r)=>{var n=r(2486).Buffer;const o=r(7116),i=r(3033),s=r(1063),a=r(5583),c=r(8800),u=r(9404),h=r(2514),l=r(9417);e.exports={DynamicFee:class{constructor(e,t,r,i,s,a){if(!Number.isSafeInteger(t)||t<0)throw Error("amount must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(r)||r<0)throw Error("firstValid must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(i)||i<0)throw Error("lastValid must be a positive number and smaller than 2^53-1");if(void 0===s&&(s=o.ALGORAND_ZERO_ADDRESS_STRING),void 0===a){const e=u.randomBytes(32);a=n.from(e).toString("base64");}const l=n.from("ASAFAgEHBgUmAyD+vKC7FEpaTqe0OKRoGsgObKEFvLYH/FZTJclWlfaiEyDmmpYeby1feshmB5JlUr6YI17TM2PKiJGLuck4qRW2+SB/g7Flf/H8U7ktwYFIodZd/C1LH6PWdyhK3dIAEm2QaTIEIhIzABAjEhAzAAcxABIQMwAIMQESEDEWIxIQMRAjEhAxBygSEDEJKRIQMQgkEhAxAiUSEDEEIQQSEDEGKhIQ","base64"),p=[t,r,i,e,s,a],f=[h.valTypes.INT,h.valTypes.INT,h.valTypes.INT,h.valTypes.ADDRESS,h.valTypes.ADDRESS,h.valTypes.BASE64],d=h.inject(l,[5,6,7,11,44,76],p,f);this.programBytes=d;const y=new c.LogicSig(d,void 0);this.address=y.address();}getProgram(){return this.programBytes}getAddress(){return this.address}},getDynamicFeeTransactions:function(e,t,r,n){if(!t.verify(o.decodeAddress(e.from).publicKey))throw new Error("invalid signature");e.fee=n,e.fee<l.ALGORAND_MIN_TX_FEE&&(e.fee=l.ALGORAND_MIN_TX_FEE);const a=u.keyPairFromSecretKey(r),c=o.encodeAddress(a.publicKey),{lease:h}=e;delete e.lease;const p=new l.Transaction(e);p.addLease(h,n);const f={from:c,to:e.from,fee:n,amount:p.fee,firstRound:e.firstRound,lastRound:e.lastRound,genesisHash:e.genesisHash,type:"pay"},d=new l.Transaction(f);d.addLease(h,n);const y=s.assignGroupID([d,p],void 0),g=y[0],m=y[1],b={lsig:t.get_obj_for_encoding(),txn:m.get_obj_for_encoding()},A=g.signTxn(r),w=i.encode(b),v=new Uint8Array(A.length+w.length);return v.set(A),v.set(w,A.length),v},signDynamicFee:function(e,t,r){const n=a.readProgram(e,void 0),i=n[0],s=n[1],h=u.keyPairFromSecretKey(t),l={from:o.encodeAddress(h.publicKey),to:o.encodeAddress(s[0]),fee:0,amount:i[2],closeRemainderTo:o.encodeAddress(s[1]),firstRound:i[3],lastRound:i[4],genesisHash:r,type:"pay",lease:new Uint8Array(s[2])},p=new c.LogicSig(e,void 0);return p.sign(t),{txn:l,lsig:p}}};},1786:(e,t,r)=>{var n=r(2486).Buffer;const o=r(3477),{keccak256:i}=r(583),s=r(5583),a=r(8800),c=r(2514),u=r(9417);e.exports={HTLC:class{constructor(e,t,r,o,i,s){if(!Number.isSafeInteger(i)||i<0)throw Error("expiryRound must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(s)||s<0)throw Error("maxFee must be a positive number and smaller than 2^53-1");let u="";if("sha256"===r)u="ASAECAEACSYDIOaalh5vLV96yGYHkmVSvpgjXtMzY8qIkYu5yTipFbb5IH+DsWV/8fxTuS3BgUih1l38LUsfo9Z3KErd0gASbZBpIP68oLsUSlpOp7Q4pGgayA5soQW8tgf8VlMlyVaV9qITMQEiDjEQIxIQMQcyAxIQMQgkEhAxCSgSLQEpEhAxCSoSMQIlDRAREA==";else {if("keccak256"!==r)throw Error("hash function unrecognized");u="ASAECAEACSYDIOaalh5vLV96yGYHkmVSvpgjXtMzY8qIkYu5yTipFbb5IH+DsWV/8fxTuS3BgUih1l38LUsfo9Z3KErd0gASbZBpIP68oLsUSlpOp7Q4pGgayA5soQW8tgf8VlMlyVaV9qITMQEiDjEQIxIQMQcyAxIQMQgkEhAxCSgSLQIpEhAxCSoSMQIlDRAREA==";}if(32!==n.from(o,"base64").length)throw Error("hash image must be 32 bytes");const h=n.from(u,"base64"),l=[s,i,t,o,e],p=[c.valTypes.INT,c.valTypes.INT,c.valTypes.ADDRESS,c.valTypes.BASE64,c.valTypes.ADDRESS],f=c.inject(h,[3,6,10,42,76],l,p);this.programBytes=f;const d=new a.LogicSig(f,void 0);this.address=d.address();}getProgram(){return this.programBytes}getAddress(){return this.address}},signTransactionWithHTLCUnlock:function(e,t,r){const c=n.from(r,"base64"),h=s.readProgram(e,void 0),l=h[0],p=h[1][1],f=e[e.length-15];if(1===f){const e=o.create();if(e.update(c),!n.from(e.hex(),"hex").equals(p))throw new Error("sha256 hash of preimage did not match stored contract hash")}else {if(2!==f)throw new Error("hash function in contract unrecognized");{const e=i.create();if(e.update(c),!n.from(e.hex(),"hex").equals(p))throw new Error("keccak256 hash of preimage did not match stored contract hash")}}const d=[c],y=new a.LogicSig(e,d);delete t.to;const g=l[0],m=new u.Transaction(t);if(m.fee>g)throw new Error(`final fee of payment transaction${m.fee.toString()}greater than transaction max fee${g.toString()}`);return a.signLogicSigTransaction(t,y)}};},8886:(e,t,r)=>{const n=r(1834),o=r(1786),i=r(4748),s=r(3758),a=r(2200);e.exports={DynamicFee:n.DynamicFee,getDynamicFeeTransactions:n.getDynamicFeeTransactions,signDynamicFee:n.signDynamicFee,HTLC:o.HTLC,signTransactionWithHTLCUnlock:o.signTransactionWithHTLCUnlock,LimitOrder:i.LimitOrder,getSwapAssetsTransaction:i.getSwapAssetsTransaction,Split:s.Split,getSplitFundsTransaction:s.getSplitFundsTransaction,PeriodicPayment:a.PeriodicPayment,getPeriodicPaymentWithdrawalTransaction:a.getPeriodicPaymentWithdrawalTransaction};},4748:(e,t,r)=>{var n=r(2486).Buffer;const o=r(7116),i=r(1988),s=r(1063),a=r(5583),c=r(8800),u=r(9404),h=r(2514),l=r(413);e.exports={LimitOrder:class{constructor(e,t,r,o,i,s,a){if(!Number.isSafeInteger(t)||t<0)throw Error("assetid must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(r)||r<0)throw Error("ratn must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(o)||o<0)throw Error("ratd must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(i)||i<0)throw Error("expiryRound must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(s)||s<0)throw Error("minTrade must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(a)||a<0)throw Error("maxFee must be a positive number and smaller than 2^53-1");const u=n.from("ASAKAAEFAgYEBwgJCiYBIP68oLsUSlpOp7Q4pGgayA5soQW8tgf8VlMlyVaV9qITMRYiEjEQIxIQMQEkDhAyBCMSQABVMgQlEjEIIQQNEDEJMgMSEDMBECEFEhAzAREhBhIQMwEUKBIQMwETMgMSEDMBEiEHHTUCNQExCCEIHTUENQM0ATQDDUAAJDQBNAMSNAI0BA8QQAAWADEJKBIxAiEJDRAxBzIDEhAxCCISEBA=","base64"),l=[a,s,t,o,r,i,e],p=[h.valTypes.INT,h.valTypes.INT,h.valTypes.INT,h.valTypes.INT,h.valTypes.INT,h.valTypes.INT,h.valTypes.ADDRESS],f=h.inject(u,[5,7,9,10,11,12,16],l,p);this.programBytes=f;const d=new c.LogicSig(f,void 0);this.address=d.address(),this.owner=e,this.assetid=t;}getProgram(){return this.programBytes}getAddress(){return this.address}},getSwapAssetsTransaction:function(e,t,r,n,h,p,f,d){const y=u.keyPairFromSecretKey(n),g=o.encodeAddress(y.publicKey),m=a.readProgram(e,void 0),b=m[0],A=m[1];let w;const v=b[6],x=o.encodeAddress(A[0]),S=c.makeLogicSig(e,void 0),E=S.address(),_=[i.makePaymentTxn(E,g,h,r,w,p,f,void 0,d,void 0),i.makeAssetTransferTxn(g,x,w,void 0,h,t,p,f,void 0,d,void 0,v)],T=s.assignGroupID(_),k=b[7],B=b[8];if(t*k<r*B)throw new Error(`bad payment ratio, ${t.toString()}*${k.toString()} !>= ${r.toString()}*${B.toString()}`);const U=b[4];if(r<U)throw new Error(`payment amount ${r.toString()} less than minimum trade ${U.toString()}`);const I=b[2];if(T[0].fee>I)throw new Error(`final fee of payment transaction ${T[0].fee.toString()} greater than transaction max fee ${I.toString()}`);if(T[1].fee>I)throw new Error(`final fee of asset transaction ${T[1].fee.toString()} greater than transaction max fee ${I.toString()}`);const R=c.signLogicSigTransactionObject(T[0],S),O=T[1].signTxn(n);return l.concatArrays(R.blob,O)}};},2200:(e,t,r)=>{var n=r(2486).Buffer;const o=r(7116),i=r(1988),s=r(5583),a=r(8800),c=r(9404),u=r(2514);e.exports={PeriodicPayment:class{constructor(e,t,r,o,i,s,u){if(this.receiver=e,!Number.isSafeInteger(t)||t<0)throw Error("amount must be a positive number and smaller than 2^53-1");if(this.amount=t,!Number.isSafeInteger(r)||r<0)throw Error("withdrawalWindow must be a positive number and smaller than 2^53-1");if(this.withdrawalWindow=r,!Number.isSafeInteger(o)||o<0)throw Error("period must be a positive number and smaller than 2^53-1");if(this.period=o,!Number.isSafeInteger(i)||i<0)throw Error("expiryRound must be a positive number and smaller than 2^53-1");if(this.expiryRound=i,!Number.isSafeInteger(s)||s<0)throw Error("maxFee must be a positive number and smaller than 2^53-1");if(this.maxFee=s,void 0===u){const e=c.randomBytes(32);this.lease=n.from(e).toString("base64");}else this.lease=u;this.programBytes=this.getProgram();const h=new a.LogicSig(this.programBytes,void 0);this.address=h.address();}getProgram(){const e=n.from("ASAHAQYFAAQDByYCIAECAwQFBgcIAQIDBAUGBwgBAgMEBQYHCAECAwQFBgcIIJKvkYTkEzwJf2arzJOxERsSogG9nQzKPkpIoc4TzPTFMRAiEjEBIw4QMQIkGCUSEDEEIQQxAggSEDEGKBIQMQkyAxIxBykSEDEIIQUSEDEJKRIxBzIDEhAxAiEGDRAxCCUSEBEQ","base64"),t=[this.maxFee,this.period,this.withdrawalWindow,this.amount,this.expiryRound,this.lease,this.receiver],r=[u.valTypes.INT,u.valTypes.INT,u.valTypes.INT,u.valTypes.INT,u.valTypes.INT,u.valTypes.BASE64,u.valTypes.ADDRESS];return u.inject(e,[4,5,7,8,9,12,46],t,r)}getAddress(){return this.address}},getPeriodicPaymentWithdrawalTransaction:function(e,t,r,n){const c=s.readProgram(e,void 0),u=c[0],h=c[1],l=u[2],p=u[4],f=u[5];if(r%l!=0)throw new Error(`firstValid round ${r.toString()} was not a multiple of contract period ${l.toString()}`);const d=h[1],y=o.encodeAddress(d),g=h[0],m=new Uint8Array(g),b=r+p,A=y;let w,v;const x=a.makeLogicSig(e,void 0),S=x.address(),E={from:S,to:A,fee:t,amount:f,closeRemainderTo:w,firstRound:r,lastRound:b,note:v,genesisHash:n,genesisID:"",type:"pay",lease:m},_=i.makePaymentTxn(S,A,t,f,w,r,b,v,n,"");if(_.fee>u[1])throw new Error(`final fee of payment transaction${_.fee.toString()}greater than transaction max fee${u[1].toString()}`);return a.signLogicSigTransaction(E,x)}};},3758:(e,t,r)=>{var n=r(2486).Buffer;const o=r(7116),i=r(1988),s=r(1063),a=r(8800),c=r(5583),u=r(2514),h=r(413);e.exports={Split:class{constructor(e,t,r,o,i,s,c,h){if(!Number.isSafeInteger(i)||i<0)throw Error("rat2 must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(o)||o<0)throw Error("rat1 must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(s)||s<0)throw Error("expiryRound must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(c)||c<0)throw Error("minPay must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(h)||h<0)throw Error("maxFee must be a positive number and smaller than 2^53-1");const l=n.from("ASAIAQUCAAYHCAkmAyCztwQn0+DycN+vsk+vJWcsoz/b7NDS6i33HOkvTpf+YiC3qUpIgHGWE8/1LPh9SGCalSN7IaITeeWSXbfsS5wsXyC4kBQ38Z8zcwWVAym4S8vpFB/c0XC6R4mnPi9EBADsPDEQIhIxASMMEDIEJBJAABkxCSgSMQcyAxIQMQglEhAxAiEEDRAiQAAuMwAAMwEAEjEJMgMSEDMABykSEDMBByoSEDMACCEFCzMBCCEGCxIQMwAIIQcPEBA=","base64"),p=[h,s,i,o,c,e,t,r],f=[u.valTypes.INT,u.valTypes.INT,u.valTypes.INT,u.valTypes.INT,u.valTypes.INT,u.valTypes.ADDRESS,u.valTypes.ADDRESS,u.valTypes.ADDRESS],d=u.inject(l,[4,7,8,9,10,14,47,80],p,f);this.programBytes=d;const y=a.makeLogicSig(d,void 0);this.address=y.address();}getProgram(){return this.programBytes}getAddress(){return this.address}},getSplitFundsTransaction:function(e,t,r,n,u,l){const p=c.readProgram(e,void 0),f=p[0],d=p[1];let y=f[6],g=f[5],m=0;const b=(e,t)=>{if("number"!=typeof e||"number"!=typeof t)throw new Error("gcd operates only on positive integers");return t?b(t,e%t):e},A=b(y,g);y=Math.floor(y/A),g=Math.floor(g/A);const w=g/y;m=Math.round(t/(1+w));const v=t-m;if(g*m!=y*v)throw Error("could not split funds in a way that satisfied the contract ratio");const x=a.makeLogicSig(e,void 0).address(),S=o.encodeAddress(d[1]),E=o.encodeAddress(d[2]),_=[i.makePaymentTxn(x,S,u,m,void 0,r,n,void 0,l),i.makePaymentTxn(x,E,u,v,void 0,r,n,void 0,l)],T=s.assignGroupID(_).map((e=>a.signLogicSigTransactionObject(e,a).blob));return h.concatArrays(T[0],T[1])}};},2514:(e,t,r)=>{var n=r(2486).Buffer;const o=r(7116);function i(e,t){let r=0;for(;t>128;)e.push(255&t|128),t>>=7,r+=1;return e.push(255&t),r+1}const s={INT:1,ADDRESS:2,BASE64:3};e.exports={inject:function(e,t,r,a){if(t.length!==r.length||t.length!==a.length)throw new Error("Lengths do not match");let c=e;function u(e,t,r,o){const i=e.slice(0,r),s=e.slice(r+o,e.length),a=[i,n.from(t),s];return n.concat(a)}for(let e=0;e<t.length;e++){let h=0,l=r[e];switch(a[e]){case s.INT:const r=[];h=i(r,l),c=u(c,r,t[e],1);break;case s.ADDRESS:l=o.decodeAddress(l),c=u(c,l.publicKey,t[e],32);break;case s.BASE64:const a=[];l=n.from(l,"base64"),i(a,l.length),l=n.concat([n.from(a),l]),c=u(c,l,t[e],33);break;default:throw new Error("unrecognized value type")}if(0!==h)for(let e=0;e<t.length;e++)t[e]+=h-1;}return c},valTypes:s};},7988:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(9404),o=r(7116);function i(){const e=n.keyPair();return {addr:o.encodeAddress(e.publicKey),sk:e.secretKey}}},2691:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7116),o=r(3033),i=r(9404),s=r(413),a=r(2486).Buffer;class c{constructor({bidderKey:e,bidAmount:t,bidID:r,auctionKey:o,auctionID:i,maxPrice:s}){this.name="Bid",this.tag=a.from([97,66]);const c=n.decodeAddress(e),u=n.decodeAddress(o);if(!Number.isSafeInteger(t)||t<0)throw Error("Bid amount must be positive and 2^53-1");if(!Number.isSafeInteger(r)||r<0)throw Error("BidID must be positive and 2^53-1");if(!Number.isSafeInteger(i)||i<0)throw Error("auctionID must be positive");Object.assign(this,{bidderKey:c,bidAmount:t,bidID:r,auctionKey:u,auctionID:i,maxPrice:s});}get_obj_for_encoding(){return {bidder:a.from(this.bidderKey.publicKey),cur:this.bidAmount,price:this.maxPrice,id:this.bidID,auc:a.from(this.auctionKey.publicKey),aid:this.auctionID}}signBid(e){const t=o.encode(this.get_obj_for_encoding()),r=a.from(s.concatArrays(this.tag,t)),n=i.sign(r,e),c={t:"b",b:{sig:a.from(n),bid:this.get_obj_for_encoding()}};return new Uint8Array(o.encode(c))}}},1213:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(9368),o=r.n(n),i=r(5391),s=r(1042),a=r.n(s),c=r(413),u=r(7197),h=r(2486).Buffer;class l{constructor(e,t,r,n={}){this.defaultHeaders=n,this.intDecoding=u.Z.DEFAULT;const o=new(a())(t,{});if(void 0!==r&&o.set("port",r.toString()),0===o.protocol.length)throw new Error("Invalid base server URL, protocol must be defined.");this.baseURL=o,this.defaultHeaders=n,this.tokenHeader=e;}addressWithPath(e){return new(a())(o().posix.join(this.baseURL.pathname,e),this.baseURL).toString()}async get(e,t,r={},n={}){const o=function(e){if(void 0===e||!Object.prototype.hasOwnProperty.call(e,"format"))return "application/json";switch(e.format){case"msgpack":return "application/msgpack";case"json":default:return "application/json"}}(t);let s=i.get(this.addressWithPath(e)).set(this.tokenHeader).set(this.defaultHeaders).set(r).set("Accept",o).query(function(e){for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(e[t]&&0!==e[t].length||delete e[t]);return e}(t));var a;"application/msgpack"===o?s=s.responseType("arraybuffer"):"application/json"===o&&0!==Object.keys(n).length&&(c.isNode()&&(s=s.buffer(!0)),s=s.parse((a=n,(e,t)=>{if("string"==typeof t)return t&&c.parseJSON(t,a);e.text="",e.setEncoding("utf8"),e.on("data",(t=>{e.text+=t;})),e.on("end",(()=>{let r,n;try{r=e.text&&c.parseJSON(e.text,a);}catch(t){n=t,n.rawResponse=e.text||null,n.statusCode=e.status;}finally{t(n,r);}}));})));const u=await s;if(h.isBuffer(u.body)){const e=u.body.buffer,t=u.body.byteOffset,r=t+u.body.byteLength;u.body=e.slice(t,r);}return u}async post(e,t,r={}){return i.post(this.addressWithPath(e)).set(this.tokenHeader).set(this.defaultHeaders).set(r).send(t)}async delete(e,t,r={}){return i.delete(this.addressWithPath(e)).set(this.tokenHeader).set(this.defaultHeaders).set(r).send(t)}}},6477:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(3480),o=r(9417),i=r(2486).Buffer;class s extends n.Z{constructor(e,t="http://127.0.0.1",r=7833,n={}){super("X-KMD-API-Token",e,t,r,n);}async versions(){return (await this.c.get("/versions")).body}async listWallets(){return (await this.c.get("/v1/wallets")).body}async createWallet(e,t,r="",n="sqlite"){const o={wallet_name:e,wallet_driver_name:n,wallet_password:t,master_derivation_key:i.from(r).toString("base64")};return (await this.c.post("/v1/wallet",o)).body}async initWalletHandle(e,t){const r={wallet_id:e,wallet_password:t};return (await this.c.post("/v1/wallet/init",r)).body}async releaseWalletHandle(e){const t={wallet_handle_token:e};return (await this.c.post("/v1/wallet/release",t)).body}async renewWalletHandle(e){const t={wallet_handle_token:e};return (await this.c.post("/v1/wallet/renew",t)).body}async renameWallet(e,t,r){const n={wallet_id:e,wallet_password:t,wallet_name:r};return (await this.c.post("/v1/wallet/rename",n)).body}async getWallet(e){const t={wallet_handle_token:e};return (await this.c.post("/v1/wallet/info",t)).body}async exportMasterDerivationKey(e,t){const r={wallet_handle_token:e,wallet_password:t},n=await this.c.post("/v1/master-key/export",r);return {master_derivation_key:i.from(n.body.master_derivation_key,"base64")}}async importKey(e,t){const r={wallet_handle_token:e,private_key:i.from(t).toString("base64")};return (await this.c.post("/v1/key/import",r)).body}async exportKey(e,t,r){const n={wallet_handle_token:e,address:r,wallet_password:t},o=await this.c.post("/v1/key/export",n);return {private_key:i.from(o.body.private_key,"base64")}}async generateKey(e){const t={wallet_handle_token:e,display_mnemonic:!1};return (await this.c.post("/v1/key",t)).body}async deleteKey(e,t,r){const n={wallet_handle_token:e,address:r,wallet_password:t};return (await this.c.delete("/v1/key",n)).body}async listKeys(e){const t={wallet_handle_token:e};return (await this.c.post("/v1/key/list",t)).body}async signTransaction(e,t,r){const n=o.instantiateTxnIfNeeded(r),s={wallet_handle_token:e,wallet_password:t,transaction:i.from(n.toByte()).toString("base64")},a=await this.c.post("/v1/transaction/sign",s);return 200===a.status?i.from(a.body.signed_transaction,"base64"):a.body}async signTransactionWithSpecificPublicKey(e,t,r,n){const s=o.instantiateTxnIfNeeded(r),a={wallet_handle_token:e,wallet_password:t,transaction:i.from(s.toByte()).toString("base64"),public_key:i.from(n).toString("base64")},c=await this.c.post("/v1/transaction/sign",a);return 200===c.status?i.from(c.body.signed_transaction,"base64"):c.body}async listMultisig(e){const t={wallet_handle_token:e};return (await this.c.post("/v1/multisig/list",t)).body}async importMultisig(e,t,r,n){const o={wallet_handle_token:e,multisig_version:t,threshold:r,pks:n};return (await this.c.post("/v1/multisig/import",o)).body}async exportMultisig(e,t){const r={wallet_handle_token:e,address:t};return (await this.c.post("/v1/multisig/export",r)).body}async signMultisigTransaction(e,t,r,n,s){const a=o.instantiateTxnIfNeeded(r),c={wallet_handle_token:e,transaction:i.from(a.toByte()).toString("base64"),public_key:i.from(n).toString("base64"),partial_multisig:s,wallet_password:t};return (await this.c.post("/v1/multisig/sign",c)).body}async deleteMultisig(e,t,r){const n={wallet_handle_token:e,address:r,wallet_password:t};return (await this.c.delete("/v1/multisig",n)).body}}},5427:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(3480),o=r(8680);class i extends o.Z{constructor(e,t,r){super(e,t),this.account=r,this.account=r;}path(){return `/v2/accounts/${this.account}`}}var s=r(3033);class a extends o.Z{constructor(e,t){if(super(e),!Number.isInteger(t))throw Error("roundNumber should be an integer");this.round=t,this.query={format:"msgpack"};}path(){return `/v2/blocks/${this.round}`}prepare(e){if(e&&e.byteLength>0)return s.decode(e)}}var c=r(2486).Buffer;function u(e={}){let t=e;return Object.keys(t).every((e=>"content-type"!==e.toLowerCase()))&&(t={...e},t["Content-Type"]="text/plain"),t}class h extends o.Z{constructor(e,t){super(e),this.source=t,this.source=t;}path(){return "/v2/teal/compile"}async do(e={}){const t=u(e);return (await this.c.post(this.path(),c.from(this.source),t)).body}}var l=r(2486).Buffer;class p extends o.Z{constructor(e,t){super(e),this.blob=s.encode(t.get_obj_for_encoding(!0));}path(){return "/v2/teal/dryrun"}async do(e={}){const t=u(e);return (await this.c.post(this.path(),l.from(this.blob),t)).body}}class f extends o.Z{constructor(e,t,r){super(e,t),this.index=r,this.index=r;}path(){return `/v2/assets/${this.index}`}}class d extends o.Z{constructor(e,t,r){super(e,t),this.index=r,this.index=r;}path(){return `/v2/applications/${this.index}`}}class y extends o.Z{path(){return "/health"}async do(e={}){const t=await this.c.get(this.path(),{},e);if(!t.ok)throw new Error(`Health response: ${t.status}`);return {}}}class g extends o.Z{constructor(e,t){super(e),this.txid=t,this.txid=t,this.query.format="msgpack";}prepare(e){if(e&&e.byteLength>0)return s.decode(e)}path(){return `/v2/transactions/pending/${this.txid}`}max(e){return this.query.max=e,this}}class m extends o.Z{constructor(e){super(e),this.query.format="msgpack";}path(){return "/v2/transactions/pending"}prepare(e){if(e&&e.byteLength>0)return s.decode(e)}max(e){return this.query.max=e,this}}class b extends o.Z{constructor(e,t){super(e),this.address=t,this.address=t,this.query.format="msgpack";}prepare(e){if(e&&e.byteLength>0)return s.decode(e)}path(){return `/v2/accounts/${this.address}/transactions/pending`}max(e){return this.query.max=e,this}}var A=r(5180);class w extends o.Z{path(){return "/v2/status"}}class v extends o.Z{constructor(e,t,r){if(super(e,t),this.round=r,!Number.isInteger(r))throw Error("round should be an integer");this.round=r;}path(){return `/v2/status/wait-for-block-after/${this.round}`}}class x extends o.Z{path(){return "/v2/transactions/params"}prepare(e){return {flatFee:!1,fee:e.fee,firstRound:e["last-round"],lastRound:e["last-round"]+1e3,genesisID:e["genesis-id"],genesisHash:e["genesis-hash"]}}}class S extends o.Z{path(){return "/v2/ledger/supply"}}class E extends o.Z{path(){return "/versions"}}class _ extends o.Z{path(){return "/genesis"}}class T extends o.Z{constructor(e,t,r,n){super(e,t),this.round=r,this.txID=n,this.round=r,this.txID=n;}path(){return `/v2/blocks/${this.round}/transactions/${this.txID}/proof`}}class k extends n.Z{constructor(e,t="http://r2.algorand.network",r=4180,n={}){super("X-Algo-API-Token",e,t,r,n);}healthCheck(){return new y(this.c)}versionsCheck(){return new E(this.c)}sendRawTransaction(e){return new A.default(this.c,e)}accountInformation(e){return new i(this.c,this.intDecoding,e)}block(e){return new a(this.c,e)}pendingTransactionInformation(e){return new g(this.c,e)}pendingTransactionsInformation(){return new m(this.c)}pendingTransactionByAddress(e){return new b(this.c,e)}status(){return new w(this.c,this.intDecoding)}statusAfterBlock(e){return new v(this.c,this.intDecoding,e)}getTransactionParams(){return new x(this.c)}supply(){return new S(this.c,this.intDecoding)}compile(e){return new h(this.c,e)}dryrun(e){return new p(this.c,e)}getAssetByID(e){return new f(this.c,this.intDecoding,e)}getApplicationByID(e){return new d(this.c,this.intDecoding,e)}genesis(){return new _(this.c,this.intDecoding)}getProof(e,t){return new T(this.c,this.intDecoding,e,t)}}},227:(e,t,r)=>{r.r(t),r.d(t,{Account:()=>a,AccountParticipation:()=>c,AccountStateDelta:()=>u,Application:()=>h,ApplicationLocalState:()=>l,ApplicationParams:()=>p,ApplicationStateSchema:()=>f,Asset:()=>d,AssetHolding:()=>y,AssetParams:()=>g,BlockResponse:()=>m,BuildVersion:()=>b,CatchpointAbortResponse:()=>A,CatchpointStartResponse:()=>w,CompileResponse:()=>v,DryrunRequest:()=>x,DryrunResponse:()=>S,DryrunSource:()=>E,DryrunState:()=>_,DryrunTxnResult:()=>T,ErrorResponse:()=>k,EvalDelta:()=>B,EvalDeltaKeyValue:()=>U,NodeStatusResponse:()=>I,PendingTransactionResponse:()=>R,PendingTransactionsResponse:()=>O,PostTransactionsResponse:()=>C,ProofResponse:()=>D,SupplyResponse:()=>N,TealKeyValue:()=>P,TealValue:()=>j,TransactionParametersResponse:()=>F,Version:()=>L});var n=r(2486).Buffer;function o(e,t){let r;if(e instanceof Uint8Array)r=t?e:n.from(e).toString("base64");else if("function"==typeof e.get_obj_for_encoding)r=e.get_obj_for_encoding(t);else if(Array.isArray(e)){r=[];for(const n of e)r.push(o(n,t));}else if("object"==typeof e){const n={};for(const r of Object.keys(e))n[r]=o(e[r],t);r=n;}else {if(!function(e){return void 0===e||null==e||"object"!=typeof e&&"function"!=typeof e}(e))throw new Error(`Unsupported value: ${String(e)}`);r=e;}return r}class i{get_obj_for_encoding(e=!1){const t={};for(const r of Object.keys(this.attribute_map)){const n=this.attribute_map[r],i=this[r];void 0!==i&&(t[n]=null===i?null:o(i,e));}return t}}var s=r(2486).Buffer;class a extends i{constructor({address:e,amount:t,amountWithoutPendingRewards:r,pendingRewards:n,rewards:o,round:i,status:s,appsLocalState:a,appsTotalExtraPages:c,appsTotalSchema:u,assets:h,authAddr:l,createdApps:p,createdAssets:f,participation:d,rewardBase:y,sigType:g}){super(),this.address=e,this.amount=t,this.amountWithoutPendingRewards=r,this.pendingRewards=n,this.rewards=o,this.round=i,this.status=s,this.appsLocalState=a,this.appsTotalExtraPages=c,this.appsTotalSchema=u,this.assets=h,this.authAddr=l,this.createdApps=p,this.createdAssets=f,this.participation=d,this.rewardBase=y,this.sigType=g,this.attribute_map={address:"address",amount:"amount",amountWithoutPendingRewards:"amount-without-pending-rewards",pendingRewards:"pending-rewards",rewards:"rewards",round:"round",status:"status",appsLocalState:"apps-local-state",appsTotalExtraPages:"apps-total-extra-pages",appsTotalSchema:"apps-total-schema",assets:"assets",authAddr:"auth-addr",createdApps:"created-apps",createdAssets:"created-assets",participation:"participation",rewardBase:"reward-base",sigType:"sig-type"};}}class c extends i{constructor({selectionParticipationKey:e,voteFirstValid:t,voteKeyDilution:r,voteLastValid:n,voteParticipationKey:o}){super(),this.selectionParticipationKey="string"==typeof e?new Uint8Array(s.from(e,"base64")):e,this.voteFirstValid=t,this.voteKeyDilution=r,this.voteLastValid=n,this.voteParticipationKey="string"==typeof o?new Uint8Array(s.from(o,"base64")):o,this.attribute_map={selectionParticipationKey:"selection-participation-key",voteFirstValid:"vote-first-valid",voteKeyDilution:"vote-key-dilution",voteLastValid:"vote-last-valid",voteParticipationKey:"vote-participation-key"};}}class u extends i{constructor(e,t){super(),this.address=e,this.delta=t,this.attribute_map={address:"address",delta:"delta"};}}class h extends i{constructor(e,t){super(),this.id=e,this.params=t,this.attribute_map={id:"id",params:"params"};}}class l extends i{constructor(e,t,r){super(),this.id=e,this.schema=t,this.keyValue=r,this.attribute_map={id:"id",schema:"schema",keyValue:"key-value"};}}class p extends i{constructor({approvalProgram:e,clearStateProgram:t,creator:r,extraProgramPages:n,globalState:o,globalStateSchema:i,localStateSchema:a}){super(),this.approvalProgram="string"==typeof e?new Uint8Array(s.from(e,"base64")):e,this.clearStateProgram="string"==typeof t?new Uint8Array(s.from(t,"base64")):t,this.creator=r,this.extraProgramPages=n,this.globalState=o,this.globalStateSchema=i,this.localStateSchema=a,this.attribute_map={approvalProgram:"approval-program",clearStateProgram:"clear-state-program",creator:"creator",extraProgramPages:"extra-program-pages",globalState:"global-state",globalStateSchema:"global-state-schema",localStateSchema:"local-state-schema"};}}class f extends i{constructor(e,t){super(),this.numUint=e,this.numByteSlice=t,this.attribute_map={numUint:"num-uint",numByteSlice:"num-byte-slice"};}}class d extends i{constructor(e,t){super(),this.index=e,this.params=t,this.attribute_map={index:"index",params:"params"};}}class y extends i{constructor(e,t,r,n){super(),this.amount=e,this.assetId=t,this.creator=r,this.isFrozen=n,this.attribute_map={amount:"amount",assetId:"asset-id",creator:"creator",isFrozen:"is-frozen"};}}class g extends i{constructor({creator:e,decimals:t,total:r,clawback:n,defaultFrozen:o,freeze:i,manager:a,metadataHash:c,name:u,nameB64:h,reserve:l,unitName:p,unitNameB64:f,url:d,urlB64:y}){super(),this.creator=e,this.decimals=t,this.total=r,this.clawback=n,this.defaultFrozen=o,this.freeze=i,this.manager=a,this.metadataHash="string"==typeof c?new Uint8Array(s.from(c,"base64")):c,this.name=u,this.nameB64="string"==typeof h?new Uint8Array(s.from(h,"base64")):h,this.reserve=l,this.unitName=p,this.unitNameB64="string"==typeof f?new Uint8Array(s.from(f,"base64")):f,this.url=d,this.urlB64="string"==typeof y?new Uint8Array(s.from(y,"base64")):y,this.attribute_map={creator:"creator",decimals:"decimals",total:"total",clawback:"clawback",defaultFrozen:"default-frozen",freeze:"freeze",manager:"manager",metadataHash:"metadata-hash",name:"name",nameB64:"name-b64",reserve:"reserve",unitName:"unit-name",unitNameB64:"unit-name-b64",url:"url",urlB64:"url-b64"};}}class m extends i{constructor(e,t){super(),this.block=e,this.cert=t,this.attribute_map={block:"block",cert:"cert"};}}class b extends i{constructor({branch:e,buildNumber:t,channel:r,commitHash:n,major:o,minor:i}){super(),this.branch=e,this.buildNumber=t,this.channel=r,this.commitHash=n,this.major=o,this.minor=i,this.attribute_map={branch:"branch",buildNumber:"build_number",channel:"channel",commitHash:"commit_hash",major:"major",minor:"minor"};}}class A extends i{constructor(e){super(),this.catchupMessage=e,this.attribute_map={catchupMessage:"catchup-message"};}}class w extends i{constructor(e){super(),this.catchupMessage=e,this.attribute_map={catchupMessage:"catchup-message"};}}class v extends i{constructor(e,t){super(),this.hash=e,this.result=t,this.attribute_map={hash:"hash",result:"result"};}}class x extends i{constructor({accounts:e,apps:t,latestTimestamp:r,protocolVersion:n,round:o,sources:i,txns:s}){super(),this.accounts=e,this.apps=t,this.latestTimestamp=r,this.protocolVersion=n,this.round=o,this.sources=i,this.txns=s,this.attribute_map={accounts:"accounts",apps:"apps",latestTimestamp:"latest-timestamp",protocolVersion:"protocol-version",round:"round",sources:"sources",txns:"txns"};}}class S extends i{constructor(e,t,r){super(),this.error=e,this.protocolVersion=t,this.txns=r,this.attribute_map={error:"error",protocolVersion:"protocol-version",txns:"txns"};}}class E extends i{constructor(e,t,r,n){super(),this.fieldName=e,this.source=t,this.txnIndex=r,this.appIndex=n,this.attribute_map={fieldName:"field-name",source:"source",txnIndex:"txn-index",appIndex:"app-index"};}}class _ extends i{constructor({line:e,pc:t,stack:r,error:n,scratch:o}){super(),this.line=e,this.pc=t,this.stack=r,this.error=n,this.scratch=o,this.attribute_map={line:"line",pc:"pc",stack:"stack",error:"error",scratch:"scratch"};}}class T extends i{constructor({disassembly:e,appCallMessages:t,appCallTrace:r,globalDelta:n,localDeltas:o,logicSigMessages:i,logicSigTrace:s}){super(),this.disassembly=e,this.appCallMessages=t,this.appCallTrace=r,this.globalDelta=n,this.localDeltas=o,this.logicSigMessages=i,this.logicSigTrace=s,this.attribute_map={disassembly:"disassembly",appCallMessages:"app-call-messages",appCallTrace:"app-call-trace",globalDelta:"global-delta",localDeltas:"local-deltas",logicSigMessages:"logic-sig-messages",logicSigTrace:"logic-sig-trace"};}}class k extends i{constructor(e,t){super(),this.message=e,this.data=t,this.attribute_map={message:"message",data:"data"};}}class B extends i{constructor(e,t,r){super(),this.action=e,this.bytes=t,this.uint=r,this.attribute_map={action:"action",bytes:"bytes",uint:"uint"};}}class U extends i{constructor(e,t){super(),this.key=e,this.value=t,this.attribute_map={key:"key",value:"value"};}}class I extends i{constructor({catchupTime:e,lastRound:t,lastVersion:r,nextVersion:n,nextVersionRound:o,nextVersionSupported:i,stoppedAtUnsupportedRound:s,timeSinceLastRound:a,catchpoint:c,catchpointAcquiredBlocks:u,catchpointProcessedAccounts:h,catchpointTotalAccounts:l,catchpointTotalBlocks:p,catchpointVerifiedAccounts:f,lastCatchpoint:d}){super(),this.catchupTime=e,this.lastRound=t,this.lastVersion=r,this.nextVersion=n,this.nextVersionRound=o,this.nextVersionSupported=i,this.stoppedAtUnsupportedRound=s,this.timeSinceLastRound=a,this.catchpoint=c,this.catchpointAcquiredBlocks=u,this.catchpointProcessedAccounts=h,this.catchpointTotalAccounts=l,this.catchpointTotalBlocks=p,this.catchpointVerifiedAccounts=f,this.lastCatchpoint=d,this.attribute_map={catchupTime:"catchup-time",lastRound:"last-round",lastVersion:"last-version",nextVersion:"next-version",nextVersionRound:"next-version-round",nextVersionSupported:"next-version-supported",stoppedAtUnsupportedRound:"stopped-at-unsupported-round",timeSinceLastRound:"time-since-last-round",catchpoint:"catchpoint",catchpointAcquiredBlocks:"catchpoint-acquired-blocks",catchpointProcessedAccounts:"catchpoint-processed-accounts",catchpointTotalAccounts:"catchpoint-total-accounts",catchpointTotalBlocks:"catchpoint-total-blocks",catchpointVerifiedAccounts:"catchpoint-verified-accounts",lastCatchpoint:"last-catchpoint"};}}class R extends i{constructor({poolError:e,txn:t,applicationIndex:r,assetClosingAmount:n,assetIndex:o,closeRewards:i,closingAmount:s,confirmedRound:a,globalStateDelta:c,localStateDelta:u,receiverRewards:h,senderRewards:l}){super(),this.poolError=e,this.txn=t,this.applicationIndex=r,this.assetClosingAmount=n,this.assetIndex=o,this.closeRewards=i,this.closingAmount=s,this.confirmedRound=a,this.globalStateDelta=c,this.localStateDelta=u,this.receiverRewards=h,this.senderRewards=l,this.attribute_map={poolError:"pool-error",txn:"txn",applicationIndex:"application-index",assetClosingAmount:"asset-closing-amount",assetIndex:"asset-index",closeRewards:"close-rewards",closingAmount:"closing-amount",confirmedRound:"confirmed-round",globalStateDelta:"global-state-delta",localStateDelta:"local-state-delta",receiverRewards:"receiver-rewards",senderRewards:"sender-rewards"};}}class O extends i{constructor(e,t){super(),this.topTransactions=e,this.totalTransactions=t,this.attribute_map={topTransactions:"top-transactions",totalTransactions:"total-transactions"};}}class C extends i{constructor(e){super(),this.txid=e,this.attribute_map={txid:"txId"};}}class D extends i{constructor(e,t,r){super(),this.idx=e,this.proof="string"==typeof t?new Uint8Array(s.from(t,"base64")):t,this.stibhash="string"==typeof r?new Uint8Array(s.from(r,"base64")):r,this.attribute_map={idx:"idx",proof:"proof",stibhash:"stibhash"};}}class N extends i{constructor(e,t,r){super(),this.currentRound=e,this.onlineMoney=t,this.totalMoney=r,this.attribute_map={currentRound:"current_round",onlineMoney:"online-money",totalMoney:"total-money"};}}class P extends i{constructor(e,t){super(),this.key=e,this.value=t,this.attribute_map={key:"key",value:"value"};}}class j extends i{constructor(e,t,r){super(),this.type=e,this.bytes=t,this.uint=r,this.attribute_map={type:"type",bytes:"bytes",uint:"uint"};}}class F extends i{constructor({consensusVersion:e,fee:t,genesisHash:r,genesisId:n,lastRound:o,minFee:i}){super(),this.consensusVersion=e,this.fee=t,this.genesisHash="string"==typeof r?new Uint8Array(s.from(r,"base64")):r,this.genesisId=n,this.lastRound=o,this.minFee=i,this.attribute_map={consensusVersion:"consensus-version",fee:"fee",genesisHash:"genesis-hash",genesisId:"genesis-id",lastRound:"last-round",minFee:"min-fee"};}}class L extends i{constructor(e,t,r,n){super(),this.build=e,this.genesisHashB64="string"==typeof t?new Uint8Array(s.from(t,"base64")):t,this.genesisId=r,this.versions=n,this.attribute_map={build:"build",genesisHashB64:"genesis_hash_b64",genesisId:"genesis_id",versions:"versions"};}}},5180:(e,t,r)=>{r.r(t),r.d(t,{setSendTransactionHeaders:()=>s,default:()=>c});var n=r(8680),o=r(413),i=r(2486).Buffer;function s(e={}){let t=e;return Object.keys(t).every((e=>"content-type"!==e.toLowerCase()))&&(t={...e},t["Content-Type"]="application/x-binary"),t}function a(e){return e&&void 0!==e.byteLength}class c extends n.Z{constructor(e,t){super(e);let r=t;if(Array.isArray(t)){if(!t.every(a))throw new TypeError("Array elements must be byte arrays");r=(0, o.concatArrays)(...t);}else if(!a(r))throw new TypeError("Argument must be byte array");this.txnBytesToPost=r;}path(){return "/v2/transactions"}async do(e={}){const t=s(e);return (await this.c.post(this.path(),i.from(this.txnBytesToPost),t)).body}}},8027:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(3480),o=r(8680);class i extends o.Z{path(){return "/health"}}class s extends o.Z{constructor(e,t,r){super(e,t),this.index=r,this.index=r;}path(){return `/v2/assets/${this.index}/balances`}limit(e){return this.query.limit=e,this}round(e){return this.query.round=e,this}currencyGreaterThan(e){return this.query["currency-greater-than"]=e,this}currencyLessThan(e){return this.query["currency-less-than"]=e,this}nextToken(e){return this.query.next=e,this}includeAll(e=!0){return this.query["include-all"]=e,this}}var a=r(2486).Buffer;function c(e){return "string"==typeof e?e:a.from(e).toString("base64")}class u extends o.Z{constructor(e,t,r){super(e,t),this.account=r,this.account=r;}path(){return `/v2/accounts/${this.account}/transactions`}notePrefix(e){return this.query["note-prefix"]=c(e),this}txType(e){return this.query["tx-type"]=e,this}sigType(e){return this.query["sig-type"]=e,this}txid(e){return this.query.txid=e,this}round(e){return this.query.round=e,this}minRound(e){return this.query["min-round"]=e,this}maxRound(e){return this.query["max-round"]=e,this}assetID(e){return this.query["asset-id"]=e,this}limit(e){return this.query.limit=e,this}beforeTime(e){return this.query["before-time"]=e,this}afterTime(e){return this.query["after-time"]=e,this}currencyGreaterThan(e){return this.query["currency-greater-than"]=e,this}currencyLessThan(e){return this.query["currency-less-than"]=e,this}nextToken(e){return this.query.next=e,this}rekeyTo(e){return this.query["rekey-to"]=e,this}}class h extends o.Z{constructor(e,t,r){super(e,t),this.index=r,this.index=r;}path(){return `/v2/assets/${this.index}/transactions`}notePrefix(e){return this.query["note-prefix"]=c(e),this}txType(e){return this.query["tx-type"]=e,this}sigType(e){return this.query["sig-type"]=e,this}txid(e){return this.query.txid=e,this}round(e){return this.query.round=e,this}minRound(e){return this.query["min-round"]=e,this}maxRound(e){return this.query["max-round"]=e,this}assetID(e){return this.query["asset-id"]=e,this}limit(e){return this.query.limit=e,this}beforeTime(e){return this.query["before-time"]=e,this}afterTime(e){return this.query["after-time"]=e,this}currencyGreaterThan(e){return this.query["currency-greater-than"]=e,this}currencyLessThan(e){return this.query["currency-less-than"]=e,this}addressRole(e){return this.query["address-role"]=e,this}address(e){return this.query.address=e,this}excludeCloseTo(e){return this.query["exclude-close-to"]=e,this}nextToken(e){return this.query.next=e,this}rekeyTo(e){return this.query["rekey-to"]=e,this}}class l extends o.Z{constructor(e,t,r){super(e,t),this.round=r,this.round=r;}path(){return `/v2/blocks/${this.round}`}}class p extends o.Z{constructor(e,t,r){super(e,t),this.txID=r,this.txID=r;}path(){return `/v2/transactions/${this.txID}`}}class f extends o.Z{constructor(e,t,r){super(e,t),this.account=r,this.account=r;}path(){return `/v2/accounts/${this.account}`}round(e){return this.query.round=e,this}includeAll(e=!0){return this.query["include-all"]=e,this}}class d extends o.Z{constructor(e,t,r){super(e,t),this.index=r,this.index=r;}path(){return `/v2/assets/${this.index}`}includeAll(e=!0){return this.query["include-all"]=e,this}}class y extends o.Z{constructor(e,t,r){super(e,t),this.index=r,this.index=r;}path(){return `/v2/applications/${this.index}`}includeAll(e=!0){return this.query["include-all"]=e,this}}class g extends o.Z{path(){return "/v2/accounts"}currencyGreaterThan(e){return this.query["currency-greater-than"]=e,this}currencyLessThan(e){return this.query["currency-less-than"]=e,this}limit(e){return this.query.limit=e,this}assetID(e){return this.query["asset-id"]=e,this}nextToken(e){return this.query.next=e,this}round(e){return this.query.round=e,this}authAddr(e){return this.query["auth-addr"]=e,this}applicationID(e){return this.query["application-id"]=e,this}includeAll(e=!0){return this.query["include-all"]=e,this}}class m extends o.Z{path(){return "/v2/transactions"}notePrefix(e){return this.query["note-prefix"]=c(e),this}txType(e){return this.query["tx-type"]=e,this}sigType(e){return this.query["sig-type"]=e,this}txid(e){return this.query.txid=e,this}round(e){return this.query.round=e,this}minRound(e){return this.query["min-round"]=e,this}maxRound(e){return this.query["max-round"]=e,this}assetID(e){return this.query["asset-id"]=e,this}limit(e){return this.query.limit=e,this}beforeTime(e){return this.query["before-time"]=e,this}afterTime(e){return this.query["after-time"]=e,this}currencyGreaterThan(e){return this.query["currency-greater-than"]=e,this}currencyLessThan(e){return this.query["currency-less-than"]=e,this}addressRole(e){return this.query["address-role"]=e,this}address(e){return this.query.address=e,this}excludeCloseTo(e){return this.query["exclude-close-to"]=e,this}nextToken(e){return this.query.next=e,this}rekeyTo(e){return this.query["rekey-to"]=e,this}applicationID(e){return this.query["application-id"]=e,this}}class b extends o.Z{path(){return "/v2/assets"}limit(e){return this.query.limit=e,this}creator(e){return this.query.creator=e,this}name(e){return this.query.name=e,this}unit(e){return this.query.unit=e,this}index(e){return this.query["asset-id"]=e,this}nextToken(e){return this.query.next=e,this}includeAll(e=!0){return this.query["include-all"]=e,this}}class A extends o.Z{path(){return "/v2/applications"}index(e){return this.query["application-id"]=e,this}nextToken(e){return this.query.next=e,this}limit(e){return this.query.limit=e,this}includeAll(e=!0){return this.query["include-all"]=e,this}}class w extends n.Z{constructor(e,t="http://127.0.0.1",r=8080,n={}){super("X-Indexer-API-Token",e,t,r,n);}makeHealthCheck(){return new i(this.c,this.intDecoding)}lookupAssetBalances(e){return new s(this.c,this.intDecoding,e)}lookupAssetTransactions(e){return new h(this.c,this.intDecoding,e)}lookupAccountTransactions(e){return new u(this.c,this.intDecoding,e)}lookupBlock(e){return new l(this.c,this.intDecoding,e)}lookupTransactionByID(e){return new p(this.c,this.intDecoding,e)}lookupAccountByID(e){return new f(this.c,this.intDecoding,e)}lookupAssetByID(e){return new d(this.c,this.intDecoding,e)}lookupApplications(e){return new y(this.c,this.intDecoding,e)}searchAccounts(){return new g(this.c,this.intDecoding)}searchForTransactions(){return new m(this.c,this.intDecoding)}searchForAssets(){return new b(this.c,this.intDecoding)}searchForApplications(){return new A(this.c,this.intDecoding)}}},8680:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7197);class o{constructor(e,t){this.c=e,this.query={},this.intDecoding=t||n.Z.DEFAULT;}prepare(e){return e}async do(e={}){const t={};"default"!==this.intDecoding&&(t.intDecoding=this.intDecoding);const r=await this.c.get(this.path(),this.query,e,t);return this.prepare(r.body)}setIntDecoding(e){if("default"!==e&&"safe"!==e&&"mixed"!==e&&"bigint"!==e)throw new Error(`Invalid method for int decoding: ${e}`);return this.intDecoding=e,this}}},3480:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(1213),o=r(7197);class i{constructor(e,t,r,i,s={}){let a;a="string"==typeof t?function(e="",t){const r={};return r[t]=e,r}(t,e):t,this.c=new n.default(a,r,i,s),this.intDecoding=o.Z.DEFAULT;}setIntEncoding(e){this.intDecoding=e;}getIntEncoding(){return this.intDecoding}}},9070:(e,t,r)=>{r.d(t,{rD:()=>o,_:()=>i,HN:()=>s});const n=1e6,o="Microalgos should be positive and less than 2^53 - 1.";function i(e){if(e<0||!Number.isSafeInteger(e))throw new Error(o);return e/n}function s(e){const t=e*n;return Math.round(t)}},7116:(e,t,r)=>{r.r(t),r.d(t,{ALGORAND_ZERO_ADDRESS_STRING:()=>a,MALFORMED_ADDRESS_ERROR_MSG:()=>u,CHECKSUM_ADDRESS_ERROR_MSG:()=>h,INVALID_MSIG_VERSION_ERROR_MSG:()=>l,INVALID_MSIG_THRESHOLD_ERROR_MSG:()=>p,INVALID_MSIG_PK_ERROR_MSG:()=>f,UNEXPECTED_PK_LEN_ERROR_MSG:()=>d,decodeAddress:()=>y,isValidAddress:()=>g,encodeAddress:()=>m,fromMultisigPreImg:()=>b,fromMultisigPreImgAddrs:()=>A});var n=r(7267),o=r.n(n),i=r(9404),s=r(413);const a="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ",c=new Uint8Array([77,117,108,116,105,115,105,103,65,100,100,114]),u="address seems to be malformed",h="wrong checksum for address",l="invalid multisig version",p="bad multisig threshold",f="bad multisig public key - wrong length",d="nacl public key length is not 32 bytes";function y(e){if("string"!=typeof e||58!==e.length)throw new Error(u);const t=o().decode.asBytes(e.toString());if(36!==t.length)throw new Error(u);const r=new Uint8Array(t.slice(0,32)),n=new Uint8Array(t.slice(i.PUBLIC_KEY_LENGTH,36)),a=i.genericHash(r).slice(i.HASH_BYTES_LENGTH-4,i.HASH_BYTES_LENGTH);if(!s.arrayEqual(a,n))throw new Error(h);return {publicKey:r,checksum:n}}function g(e){try{y(e);}catch(e){return !1}return !0}function m(e){const t=i.genericHash(e).slice(i.PUBLIC_KEY_LENGTH-4,i.PUBLIC_KEY_LENGTH);return o().encode(s.concatArrays(e,t)).toString().slice(0,58)}function b({version:e,threshold:t,pks:r}){if(1!==e||e>255||e<0)throw new Error(l);if(0===t||0===r.length||t>r.length||t>255)throw new Error(p);if(32!==i.PUBLIC_KEY_LENGTH)throw new Error(d);const n=new Uint8Array(c.length+2+32*r.length);n.set(c,0),n.set([e],c.length),n.set([t],c.length+1);for(let e=0;e<r.length;e++){if(32!==r[e].length)throw new Error(f);n.set(r[e],c.length+2+32*e);}return new Uint8Array(i.genericHash(n))}function A({version:e,threshold:t,addrs:r}){return m(b({version:e,threshold:t,pks:r.map((e=>y(e).publicKey))}))}},3033:(e,t,r)=>{r.r(t),r.d(t,{ERROR_CONTAINS_EMPTY_STRING:()=>o,encode:()=>i,decode:()=>s});var n=r(5406);const o="The object contains empty or 0 values. First empty or 0 value encountered during encoding: ";function i(e){const t=function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&(!e[t]||0===e[t].length))return {containsEmpty:!0,firstEmptyKey:t};return {containsEmpty:!1,firstEmptyKey:void 0}}(e);if(t.containsEmpty)throw new Error(o+t.firstEmptyKey);return n.encode(e,{sortKeys:!0})}function s(e){return n.decode(e)}},6963:(e,t,r)=>{r.d(t,{T:()=>o,u:()=>i});var n=r(2486).Buffer;function o(e){if("bigint"!=typeof e&&!Number.isInteger(e)||e<0||e>BigInt("0xffffffffffffffff"))throw new Error("Input is not a 64-bit unsigned integer");const t=n.allocUnsafe(8);return t.writeBigUInt64BE(BigInt(e)),new Uint8Array(t)}function i(e,t="safe"){if("safe"!==t&&"mixed"!==t&&"bigint"!==t)throw new Error(`Unknown decodingMode option: ${t}`);if(0===e.byteLength||e.byteLength>8)throw new Error(`Data has unacceptable length. Expected length is between 1 and 8, got ${e.byteLength}`);const r=n.allocUnsafe(8-e.byteLength);r.fill(0);const o=n.concat([r,n.from(e)]).readBigUInt64BE(),i=o>Number.MAX_SAFE_INTEGER;if("safe"===t){if(i)throw new Error(`Integer exceeds maximum safe integer: ${o.toString()}. Try decoding with "mixed" or "safe" decodingMode.`);return Number(o)}return "mixed"!==t||i?o:Number(o)}},1063:(e,t,r)=>{r.r(t),r.d(t,{TxGroup:()=>u,computeGroupID:()=>h,assignGroupID:()=>l,default:()=>p});var n=r(9417),o=r(9404),i=r(3033),s=r(7116),a=r(413),c=r(2486).Buffer;class u{constructor(e){if(this.name="Transaction group",this.tag=c.from("TG"),e.length>16){const t=`${e.length.toString()} transactions grouped together but max group size is ${16..toString()}`;throw Error(t)}this.txGroupHashes=e;}get_obj_for_encoding(){return {txlist:this.txGroupHashes}}static from_obj_for_encoding(e){const t=Object.create(this.prototype);t.name="Transaction group",t.tag=c.from("TG"),t.txGroupHashes=[];for(const r of e.txlist)t.txGroupHashes.push(c.from(r));return t}toByte(){return i.encode(this.get_obj_for_encoding())}}function h(e){const t=[];for(const r of e){const e=n.instantiateTxnIfNeeded(r);t.push(e.rawTxID());}const r=new u(t),i=r.toByte(),s=c.from(a.concatArrays(r.tag,i)),h=o.genericHash(s);return c.from(h)}function l(e,t){const r=h(e),o=[];for(const i of e){const e=n.instantiateTxnIfNeeded(i);t&&s.encodeAddress(e.from.publicKey)!==t||(e.group=r,o.push(e));}return o}const p=u;},5583:(e,t,r)=>{r.r(t),r.d(t,{checkByteConstBlock:()=>f,checkIntConstBlock:()=>p,checkProgram:()=>l,checkPushByteOp:()=>y,checkPushIntOp:()=>d,langspecEvalMaxVersion:()=>g,langspecLogicSigVersion:()=>m,parseUvarint:()=>i,readProgram:()=>h});const n=JSON.parse('{"z_":4,"BV":3,"AP":[{"Opcode":0,"Name":"err","Cost":1,"Size":1,"Doc":"Error. Panic immediately. This is primarily a fencepost against accidental zero bytes getting compiled into programs.","Groups":["Flow Control"]},{"Opcode":1,"Name":"sha256","Args":"B","Returns":"B","Cost":35,"Size":1,"Doc":"SHA256 hash of value X, yields [32]byte","Groups":["Arithmetic"]},{"Opcode":2,"Name":"keccak256","Args":"B","Returns":"B","Cost":130,"Size":1,"Doc":"Keccak256 hash of value X, yields [32]byte","Groups":["Arithmetic"]},{"Opcode":3,"Name":"sha512_256","Args":"B","Returns":"B","Cost":45,"Size":1,"Doc":"SHA512_256 hash of value X, yields [32]byte","Groups":["Arithmetic"]},{"Opcode":4,"Name":"ed25519verify","Args":"BBB","Returns":"U","Cost":1900,"Size":1,"Doc":"for (data A, signature B, pubkey C) verify the signature of (\\"ProgData\\" || program_hash || data) against the pubkey => {0 or 1}","DocExtra":"The 32 byte public key is the last element on the stack, preceded by the 64 byte signature at the second-to-last element on the stack, preceded by the data which was signed at the third-to-last element on the stack.","Groups":["Arithmetic"]},{"Opcode":8,"Name":"+","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A plus B. Panic on overflow.","DocExtra":"Overflow is an error condition which halts execution and fails the transaction. Full precision is available from `addw`.","Groups":["Arithmetic"]},{"Opcode":9,"Name":"-","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A minus B. Panic if B > A.","Groups":["Arithmetic"]},{"Opcode":10,"Name":"/","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A divided by B. Panic if B == 0.","DocExtra":"`divmodw` is available to divide the two-element values produced by `mulw` and `addw`.","Groups":["Arithmetic"]},{"Opcode":11,"Name":"*","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A times B. Panic on overflow.","DocExtra":"Overflow is an error condition which halts execution and fails the transaction. Full precision is available from `mulw`.","Groups":["Arithmetic"]},{"Opcode":12,"Name":"<","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A less than B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":13,"Name":">","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A greater than B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":14,"Name":"<=","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A less than or equal to B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":15,"Name":">=","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A greater than or equal to B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":16,"Name":"&&","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A is not zero and B is not zero => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":17,"Name":"||","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A is not zero or B is not zero => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":18,"Name":"==","Args":"..","Returns":"U","Cost":1,"Size":1,"Doc":"A is equal to B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":19,"Name":"!=","Args":"..","Returns":"U","Cost":1,"Size":1,"Doc":"A is not equal to B => {0 or 1}","Groups":["Arithmetic"]},{"Opcode":20,"Name":"!","Args":"U","Returns":"U","Cost":1,"Size":1,"Doc":"X == 0 yields 1; else 0","Groups":["Arithmetic"]},{"Opcode":21,"Name":"len","Args":"B","Returns":"U","Cost":1,"Size":1,"Doc":"yields length of byte value X","Groups":["Arithmetic"]},{"Opcode":22,"Name":"itob","Args":"U","Returns":"B","Cost":1,"Size":1,"Doc":"converts uint64 X to big endian bytes","Groups":["Arithmetic"]},{"Opcode":23,"Name":"btoi","Args":"B","Returns":"U","Cost":1,"Size":1,"Doc":"converts bytes X as big endian to uint64","DocExtra":"`btoi` panics if the input is longer than 8 bytes.","Groups":["Arithmetic"]},{"Opcode":24,"Name":"%","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A modulo B. Panic if B == 0.","Groups":["Arithmetic"]},{"Opcode":25,"Name":"|","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A bitwise-or B","Groups":["Arithmetic"]},{"Opcode":26,"Name":"&","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A bitwise-and B","Groups":["Arithmetic"]},{"Opcode":27,"Name":"^","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A bitwise-xor B","Groups":["Arithmetic"]},{"Opcode":28,"Name":"~","Args":"U","Returns":"U","Cost":1,"Size":1,"Doc":"bitwise invert value X","Groups":["Arithmetic"]},{"Opcode":29,"Name":"mulw","Args":"UU","Returns":"UU","Cost":1,"Size":1,"Doc":"A times B out to 128-bit long result as low (top) and high uint64 values on the stack","Groups":["Arithmetic"]},{"Opcode":30,"Name":"addw","Args":"UU","Returns":"UU","Cost":1,"Size":1,"Doc":"A plus B out to 128-bit long result as sum (top) and carry-bit uint64 values on the stack","Groups":["Arithmetic"]},{"Opcode":31,"Name":"divmodw","Args":"UUUU","Returns":"UUUU","Cost":20,"Size":1,"Doc":"Pop four uint64 values.  The deepest two are interpreted as a uint128 dividend (deepest value is high word), the top two are interpreted as a uint128 divisor.  Four uint64 values are pushed to the stack. The deepest two are the quotient (deeper value is the high uint64). The top two are the remainder, low bits on top.","Groups":["Arithmetic"]},{"Opcode":32,"Name":"intcblock","Cost":1,"Size":0,"Doc":"prepare block of uint64 constants for use by intc","DocExtra":"`intcblock` loads following program bytes into an array of integer constants in the evaluator. These integer constants can be referred to by `intc` and `intc_*` which will push the value onto the stack. Subsequent calls to `intcblock` reset and replace the integer constants available to the script.","ImmediateNote":"{varuint length} [{varuint value}, ...]","Groups":["Loading Values"]},{"Opcode":33,"Name":"intc","Returns":"U","Cost":1,"Size":2,"Doc":"push Ith constant from intcblock to stack","ImmediateNote":"{uint8 int constant index}","Groups":["Loading Values"]},{"Opcode":34,"Name":"intc_0","Returns":"U","Cost":1,"Size":1,"Doc":"push constant 0 from intcblock to stack","Groups":["Loading Values"]},{"Opcode":35,"Name":"intc_1","Returns":"U","Cost":1,"Size":1,"Doc":"push constant 1 from intcblock to stack","Groups":["Loading Values"]},{"Opcode":36,"Name":"intc_2","Returns":"U","Cost":1,"Size":1,"Doc":"push constant 2 from intcblock to stack","Groups":["Loading Values"]},{"Opcode":37,"Name":"intc_3","Returns":"U","Cost":1,"Size":1,"Doc":"push constant 3 from intcblock to stack","Groups":["Loading Values"]},{"Opcode":38,"Name":"bytecblock","Cost":1,"Size":0,"Doc":"prepare block of byte-array constants for use by bytec","DocExtra":"`bytecblock` loads the following program bytes into an array of byte-array constants in the evaluator. These constants can be referred to by `bytec` and `bytec_*` which will push the value onto the stack. Subsequent calls to `bytecblock` reset and replace the bytes constants available to the script.","ImmediateNote":"{varuint length} [({varuint value length} bytes), ...]","Groups":["Loading Values"]},{"Opcode":39,"Name":"bytec","Returns":"B","Cost":1,"Size":2,"Doc":"push Ith constant from bytecblock to stack","ImmediateNote":"{uint8 byte constant index}","Groups":["Loading Values"]},{"Opcode":40,"Name":"bytec_0","Returns":"B","Cost":1,"Size":1,"Doc":"push constant 0 from bytecblock to stack","Groups":["Loading Values"]},{"Opcode":41,"Name":"bytec_1","Returns":"B","Cost":1,"Size":1,"Doc":"push constant 1 from bytecblock to stack","Groups":["Loading Values"]},{"Opcode":42,"Name":"bytec_2","Returns":"B","Cost":1,"Size":1,"Doc":"push constant 2 from bytecblock to stack","Groups":["Loading Values"]},{"Opcode":43,"Name":"bytec_3","Returns":"B","Cost":1,"Size":1,"Doc":"push constant 3 from bytecblock to stack","Groups":["Loading Values"]},{"Opcode":44,"Name":"arg","Returns":"B","Cost":1,"Size":2,"Doc":"push Nth LogicSig argument to stack","ImmediateNote":"{uint8 arg index N}","Groups":["Loading Values"]},{"Opcode":45,"Name":"arg_0","Returns":"B","Cost":1,"Size":1,"Doc":"push LogicSig argument 0 to stack","Groups":["Loading Values"]},{"Opcode":46,"Name":"arg_1","Returns":"B","Cost":1,"Size":1,"Doc":"push LogicSig argument 1 to stack","Groups":["Loading Values"]},{"Opcode":47,"Name":"arg_2","Returns":"B","Cost":1,"Size":1,"Doc":"push LogicSig argument 2 to stack","Groups":["Loading Values"]},{"Opcode":48,"Name":"arg_3","Returns":"B","Cost":1,"Size":1,"Doc":"push LogicSig argument 3 to stack","Groups":["Loading Values"]},{"Opcode":49,"Name":"txn","Returns":".","Cost":1,"Size":2,"ArgEnum":["Sender","Fee","FirstValid","FirstValidTime","LastValid","Note","Lease","Receiver","Amount","CloseRemainderTo","VotePK","SelectionPK","VoteFirst","VoteLast","VoteKeyDilution","Type","TypeEnum","XferAsset","AssetAmount","AssetSender","AssetReceiver","AssetCloseTo","GroupIndex","TxID","ApplicationID","OnCompletion","ApplicationArgs","NumAppArgs","Accounts","NumAccounts","ApprovalProgram","ClearStateProgram","RekeyTo","ConfigAsset","ConfigAssetTotal","ConfigAssetDecimals","ConfigAssetDefaultFrozen","ConfigAssetUnitName","ConfigAssetName","ConfigAssetURL","ConfigAssetMetadataHash","ConfigAssetManager","ConfigAssetReserve","ConfigAssetFreeze","ConfigAssetClawback","FreezeAsset","FreezeAssetAccount","FreezeAssetFrozen","Assets","NumAssets","Applications","NumApplications","GlobalNumUint","GlobalNumByteSlice","LocalNumUint","LocalNumByteSlice","ExtraProgramPages"],"ArgEnumTypes":"BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUU","Doc":"push field F of current transaction to stack","DocExtra":"FirstValidTime causes the program to fail. The field is reserved for future use.","ImmediateNote":"{uint8 transaction field index}","Groups":["Loading Values"]},{"Opcode":50,"Name":"global","Returns":".","Cost":1,"Size":2,"ArgEnum":["MinTxnFee","MinBalance","MaxTxnLife","ZeroAddress","GroupSize","LogicSigVersion","Round","LatestTimestamp","CurrentApplicationID","CreatorAddress"],"ArgEnumTypes":"UUUBUUUUUB","Doc":"push value from globals to stack","ImmediateNote":"{uint8 global field index}","Groups":["Loading Values"]},{"Opcode":51,"Name":"gtxn","Returns":".","Cost":1,"Size":3,"ArgEnum":["Sender","Fee","FirstValid","FirstValidTime","LastValid","Note","Lease","Receiver","Amount","CloseRemainderTo","VotePK","SelectionPK","VoteFirst","VoteLast","VoteKeyDilution","Type","TypeEnum","XferAsset","AssetAmount","AssetSender","AssetReceiver","AssetCloseTo","GroupIndex","TxID","ApplicationID","OnCompletion","ApplicationArgs","NumAppArgs","Accounts","NumAccounts","ApprovalProgram","ClearStateProgram","RekeyTo","ConfigAsset","ConfigAssetTotal","ConfigAssetDecimals","ConfigAssetDefaultFrozen","ConfigAssetUnitName","ConfigAssetName","ConfigAssetURL","ConfigAssetMetadataHash","ConfigAssetManager","ConfigAssetReserve","ConfigAssetFreeze","ConfigAssetClawback","FreezeAsset","FreezeAssetAccount","FreezeAssetFrozen","Assets","NumAssets","Applications","NumApplications","GlobalNumUint","GlobalNumByteSlice","LocalNumUint","LocalNumByteSlice","ExtraProgramPages"],"ArgEnumTypes":"BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUU","Doc":"push field F of the Tth transaction in the current group","DocExtra":"for notes on transaction fields available, see `txn`. If this transaction is _i_ in the group, `gtxn i field` is equivalent to `txn field`.","ImmediateNote":"{uint8 transaction group index} {uint8 transaction field index}","Groups":["Loading Values"]},{"Opcode":52,"Name":"load","Returns":".","Cost":1,"Size":2,"Doc":"copy a value from scratch space to the stack","ImmediateNote":"{uint8 position in scratch space to load from}","Groups":["Loading Values"]},{"Opcode":53,"Name":"store","Args":".","Cost":1,"Size":2,"Doc":"pop a value from the stack and store to scratch space","ImmediateNote":"{uint8 position in scratch space to store to}","Groups":["Loading Values"]},{"Opcode":54,"Name":"txna","Returns":".","Cost":1,"Size":3,"ArgEnum":["ApplicationArgs","Accounts"],"ArgEnumTypes":"BBUU","Doc":"push Ith value of the array field F of the current transaction","ImmediateNote":"{uint8 transaction field index} {uint8 transaction field array index}","Groups":["Loading Values"]},{"Opcode":55,"Name":"gtxna","Returns":".","Cost":1,"Size":4,"ArgEnum":["ApplicationArgs","Accounts"],"ArgEnumTypes":"BBUU","Doc":"push Ith value of the array field F from the Tth transaction in the current group","ImmediateNote":"{uint8 transaction group index} {uint8 transaction field index} {uint8 transaction field array index}","Groups":["Loading Values"]},{"Opcode":56,"Name":"gtxns","Args":"U","Returns":".","Cost":1,"Size":2,"ArgEnum":["Sender","Fee","FirstValid","FirstValidTime","LastValid","Note","Lease","Receiver","Amount","CloseRemainderTo","VotePK","SelectionPK","VoteFirst","VoteLast","VoteKeyDilution","Type","TypeEnum","XferAsset","AssetAmount","AssetSender","AssetReceiver","AssetCloseTo","GroupIndex","TxID","ApplicationID","OnCompletion","ApplicationArgs","NumAppArgs","Accounts","NumAccounts","ApprovalProgram","ClearStateProgram","RekeyTo","ConfigAsset","ConfigAssetTotal","ConfigAssetDecimals","ConfigAssetDefaultFrozen","ConfigAssetUnitName","ConfigAssetName","ConfigAssetURL","ConfigAssetMetadataHash","ConfigAssetManager","ConfigAssetReserve","ConfigAssetFreeze","ConfigAssetClawback","FreezeAsset","FreezeAssetAccount","FreezeAssetFrozen","Assets","NumAssets","Applications","NumApplications","GlobalNumUint","GlobalNumByteSlice","LocalNumUint","LocalNumByteSlice","ExtraProgramPages"],"ArgEnumTypes":"BUUUUBBBUBBBUUUBUUUBBBUBUUBUBUBBBUUUUBBBBBBBBUBUUUUUUUUUU","Doc":"push field F of the Ath transaction in the current group","DocExtra":"for notes on transaction fields available, see `txn`. If top of stack is _i_, `gtxns field` is equivalent to `gtxn _i_ field`. gtxns exists so that _i_ can be calculated, often based on the index of the current transaction.","ImmediateNote":"{uint8 transaction field index}","Groups":["Loading Values"]},{"Opcode":57,"Name":"gtxnsa","Args":"U","Returns":".","Cost":1,"Size":3,"ArgEnum":["ApplicationArgs","Accounts"],"ArgEnumTypes":"BBUU","Doc":"push Ith value of the array field F from the Ath transaction in the current group","ImmediateNote":"{uint8 transaction field index} {uint8 transaction field array index}","Groups":["Loading Values"]},{"Opcode":58,"Name":"gload","Returns":".","Cost":1,"Size":3,"Doc":"push Ith scratch space index of the Tth transaction in the current group","DocExtra":"The `gload` opcode can only access scratch spaces of previous app calls contained in the current group.","ImmediateNote":"{uint8 transaction group index} {uint8 position in scratch space to load from}","Groups":["Loading Values"]},{"Opcode":59,"Name":"gloads","Args":"U","Returns":".","Cost":1,"Size":2,"Doc":"push Ith scratch space index of the Ath transaction in the current group","DocExtra":"The `gloads` opcode can only access scratch spaces of previous app calls contained in the current group.","ImmediateNote":"{uint8 position in scratch space to load from}","Groups":["Loading Values"]},{"Opcode":60,"Name":"gaid","Returns":"U","Cost":1,"Size":2,"Doc":"push the ID of the asset or application created in the Tth transaction of the current group","DocExtra":"The `gaid` opcode can only access the ID of assets or applications created by previous txns in the current group.","Groups":["Loading Values"]},{"Opcode":61,"Name":"gaids","Args":"U","Returns":"U","Cost":1,"Size":1,"Doc":"push the ID of the asset or application created in the Ath transaction of the current group","DocExtra":"The `gaids` opcode can only access the ID of assets or applications created by previous txns in the current group.","Groups":["Loading Values"]},{"Opcode":64,"Name":"bnz","Args":"U","Cost":1,"Size":3,"Doc":"branch to TARGET if value X is not zero","DocExtra":"The `bnz` instruction opcode 0x40 is followed by two immediate data bytes which are a high byte first and low byte second which together form a 16 bit offset which the instruction may branch to. For a bnz instruction at `pc`, if the last element of the stack is not zero then branch to instruction at `pc + 3 + N`, else proceed to next instruction at `pc + 3`. Branch targets must be well aligned instructions. (e.g. Branching to the second byte of a 2 byte op will be rejected.) Branch offsets are limited to forward branches only, 0-0x7fff until v4. v4 treats offset as a signed 16 bit integer allowing for backward branches and looping.\\n\\nAt LogicSigVersion 2 it became allowed to branch to the end of the program exactly after the last instruction: bnz to byte N (with 0-indexing) was illegal for a TEAL program with N bytes before LogicSigVersion 2, and is legal after it. This change eliminates the need for a last instruction of no-op as a branch target at the end. (Branching beyond the end--in other words, to a byte larger than N--is still illegal and will cause the program to fail.)","ImmediateNote":"{int16 branch offset, big endian. (negative offsets are illegal before v4)}","Groups":["Flow Control"]},{"Opcode":65,"Name":"bz","Args":"U","Cost":1,"Size":3,"Doc":"branch to TARGET if value X is zero","DocExtra":"See `bnz` for details on how branches work. `bz` inverts the behavior of `bnz`.","ImmediateNote":"{int16 branch offset, big endian. (negative offsets are illegal before v4)}","Groups":["Flow Control"]},{"Opcode":66,"Name":"b","Cost":1,"Size":3,"Doc":"branch unconditionally to TARGET","DocExtra":"See `bnz` for details on how branches work. `b` always jumps to the offset.","ImmediateNote":"{int16 branch offset, big endian. (negative offsets are illegal before v4)}","Groups":["Flow Control"]},{"Opcode":67,"Name":"return","Args":"U","Cost":1,"Size":1,"Doc":"use last value on stack as success value; end","Groups":["Flow Control"]},{"Opcode":68,"Name":"assert","Args":"U","Cost":1,"Size":1,"Doc":"immediately fail unless value X is a non-zero number","Groups":["Flow Control"]},{"Opcode":72,"Name":"pop","Args":".","Cost":1,"Size":1,"Doc":"discard value X from stack","Groups":["Flow Control"]},{"Opcode":73,"Name":"dup","Args":".","Returns":"..","Cost":1,"Size":1,"Doc":"duplicate last value on stack","Groups":["Flow Control"]},{"Opcode":74,"Name":"dup2","Args":"..","Returns":"....","Cost":1,"Size":1,"Doc":"duplicate two last values on stack: A, B -> A, B, A, B","Groups":["Flow Control"]},{"Opcode":75,"Name":"dig","Args":".","Returns":"..","Cost":1,"Size":2,"Doc":"push the Nth value from the top of the stack. dig 0 is equivalent to dup","ImmediateNote":"{uint8 depth}","Groups":["Flow Control"]},{"Opcode":76,"Name":"swap","Args":"..","Returns":"..","Cost":1,"Size":1,"Doc":"swaps two last values on stack: A, B -> B, A","Groups":["Flow Control"]},{"Opcode":77,"Name":"select","Args":"..U","Returns":".","Cost":1,"Size":1,"Doc":"selects one of two values based on top-of-stack: A, B, C -> (if C != 0 then B else A)","Groups":["Flow Control"]},{"Opcode":80,"Name":"concat","Args":"BB","Returns":"B","Cost":1,"Size":1,"Doc":"pop two byte-arrays A and B and join them, push the result","DocExtra":"`concat` panics if the result would be greater than 4096 bytes.","Groups":["Arithmetic"]},{"Opcode":81,"Name":"substring","Args":"B","Returns":"B","Cost":1,"Size":3,"Doc":"pop a byte-array A. For immediate values in 0..255 S and E: extract a range of bytes from A starting at S up to but not including E, push the substring result. If E < S, or either is larger than the array length, the program fails","ImmediateNote":"{uint8 start position} {uint8 end position}","Groups":["Arithmetic"]},{"Opcode":82,"Name":"substring3","Args":"BUU","Returns":"B","Cost":1,"Size":1,"Doc":"pop a byte-array A and two integers B and C. Extract a range of bytes from A starting at B up to but not including C, push the substring result. If C < B, or either is larger than the array length, the program fails","Groups":["Arithmetic"]},{"Opcode":83,"Name":"getbit","Args":".U","Returns":"U","Cost":1,"Size":1,"Doc":"pop a target A (integer or byte-array), and index B. Push the Bth bit of A.","DocExtra":"see explanation of bit ordering in setbit","Groups":["Arithmetic"]},{"Opcode":84,"Name":"setbit","Args":".UU","Returns":".","Cost":1,"Size":1,"Doc":"pop a target A, index B, and bit C. Set the Bth bit of A to C, and push the result","DocExtra":"bit indexing begins with low-order bits in integers. Setting bit 4 to 1 on the integer 0 yields 16 (`int 0x0010`, or 2^4). Indexing begins in the first bytes of a byte-string (as seen in getbyte and substring). Setting bits 0 through 11 to 1 in a 4 byte-array of 0s yields `byte 0xfff00000`","Groups":["Arithmetic"]},{"Opcode":85,"Name":"getbyte","Args":"BU","Returns":"U","Cost":1,"Size":1,"Doc":"pop a byte-array A and integer B. Extract the Bth byte of A and push it as an integer","Groups":["Arithmetic"]},{"Opcode":86,"Name":"setbyte","Args":"BUU","Returns":"B","Cost":1,"Size":1,"Doc":"pop a byte-array A, integer B, and small integer C (between 0..255). Set the Bth byte of A to C, and push the result","Groups":["Arithmetic"]},{"Opcode":96,"Name":"balance","Args":".","Returns":"U","Cost":1,"Size":1,"Doc":"get balance account A, in microalgos. The balance is observed after the effects of previous transactions in the group, and after the fee for the current transaction is deducted.","DocExtra":"params: Txn.Accounts offset (or, since v4, an account address that appears in Txn.Accounts or is Txn.Sender). Return: value.","Groups":["State Access"]},{"Opcode":97,"Name":"app_opted_in","Args":".U","Returns":"U","Cost":1,"Size":1,"Doc":"check if account A opted in for the application B => {0 or 1}","DocExtra":"params: Txn.Accounts offset (or, since v4, an account address that appears in Txn.Accounts or is Txn.Sender), application id (or, since v4, a Txn.ForeignApps offset). Return: 1 if opted in and 0 otherwise.","Groups":["State Access"]},{"Opcode":98,"Name":"app_local_get","Args":".B","Returns":".","Cost":1,"Size":1,"Doc":"read from account A from local state of the current application key B => value","DocExtra":"params: Txn.Accounts offset (or, since v4, an account address that appears in Txn.Accounts or is Txn.Sender), state key. Return: value. The value is zero (of type uint64) if the key does not exist.","Groups":["State Access"]},{"Opcode":99,"Name":"app_local_get_ex","Args":".UB","Returns":".U","Cost":1,"Size":1,"Doc":"read from account A from local state of the application B key C => [*... stack*, value, 0 or 1]","DocExtra":"params: Txn.Accounts offset (or, since v4, an account address that appears in Txn.Accounts or is Txn.Sender), application id (or, since v4, a Txn.ForeignApps offset), state key. Return: did_exist flag (top of the stack, 1 if exist and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.","Groups":["State Access"]},{"Opcode":100,"Name":"app_global_get","Args":"B","Returns":".","Cost":1,"Size":1,"Doc":"read key A from global state of a current application => value","DocExtra":"params: state key. Return: value. The value is zero (of type uint64) if the key does not exist.","Groups":["State Access"]},{"Opcode":101,"Name":"app_global_get_ex","Args":"UB","Returns":".U","Cost":1,"Size":1,"Doc":"read from application A global state key B => [*... stack*, value, 0 or 1]","DocExtra":"params: Txn.ForeignApps offset (or, since v4, an application id that appears in Txn.ForeignApps or is the CurrentApplicationID), state key. Return: did_exist flag (top of the stack, 1 if exist and 0 otherwise), value. The value is zero (of type uint64) if the key does not exist.","Groups":["State Access"]},{"Opcode":102,"Name":"app_local_put","Args":".B.","Cost":1,"Size":1,"Doc":"write to account specified by A to local state of a current application key B with value C","DocExtra":"params: Txn.Accounts offset (or, since v4, an account address that appears in Txn.Accounts or is Txn.Sender), state key, value.","Groups":["State Access"]},{"Opcode":103,"Name":"app_global_put","Args":"B.","Cost":1,"Size":1,"Doc":"write key A and value B to global state of the current application","Groups":["State Access"]},{"Opcode":104,"Name":"app_local_del","Args":".B","Cost":1,"Size":1,"Doc":"delete from account A local state key B of the current application","DocExtra":"params: Txn.Accounts offset (or, since v4, an account address that appears in Txn.Accounts or is Txn.Sender), state key.\\n\\nDeleting a key which is already absent has no effect on the application local state. (In particular, it does _not_ cause the program to fail.)","Groups":["State Access"]},{"Opcode":105,"Name":"app_global_del","Args":"B","Cost":1,"Size":1,"Doc":"delete key A from a global state of the current application","DocExtra":"params: state key.\\n\\nDeleting a key which is already absent has no effect on the application global state. (In particular, it does _not_ cause the program to fail.)","Groups":["State Access"]},{"Opcode":112,"Name":"asset_holding_get","Args":".U","Returns":".U","Cost":1,"Size":2,"ArgEnum":["AssetBalance","AssetFrozen"],"ArgEnumTypes":"UU","Doc":"read from account A and asset B holding field X (imm arg) => {0 or 1 (top), value}","DocExtra":"params: Txn.Accounts offset (or, since v4, an account address that appears in Txn.Accounts or is Txn.Sender), asset id (or, since v4, a Txn.ForeignAssets offset). Return: did_exist flag (1 if exist and 0 otherwise), value.","ImmediateNote":"{uint8 asset holding field index}","Groups":["State Access"]},{"Opcode":113,"Name":"asset_params_get","Args":"U","Returns":".U","Cost":1,"Size":2,"ArgEnum":["AssetTotal","AssetDecimals","AssetDefaultFrozen","AssetUnitName","AssetName","AssetURL","AssetMetadataHash","AssetManager","AssetReserve","AssetFreeze","AssetClawback"],"ArgEnumTypes":"UUUBBBBBBBB","Doc":"read from asset A params field X (imm arg) => {0 or 1 (top), value}","DocExtra":"params: Txn.ForeignAssets offset (or, since v4, an asset id that appears in Txn.ForeignAssets). Return: did_exist flag (1 if exist and 0 otherwise), value.","ImmediateNote":"{uint8 asset params field index}","Groups":["State Access"]},{"Opcode":120,"Name":"min_balance","Args":".","Returns":"U","Cost":1,"Size":1,"Doc":"get minimum required balance account A, in microalgos. Required balance is affected by [ASA](https://developer.algorand.org/docs/features/asa/#assets-overview) and [App](https://developer.algorand.org/docs/features/asc1/stateful/#minimum-balance-requirement-for-a-smart-contract) usage. When creating or opting into an app, the minimum balance grows before the app code runs, therefore the increase is visible there. When deleting or closing out, the minimum balance decreases after the app executes.","DocExtra":"params: Txn.Accounts offset (or, since v4, an account address that appears in Txn.Accounts or is Txn.Sender). Return: value.","Groups":["State Access"]},{"Opcode":128,"Name":"pushbytes","Returns":"B","Cost":1,"Size":0,"Doc":"push the following program bytes to the stack","DocExtra":"pushbytes args are not added to the bytecblock during assembly processes","ImmediateNote":"{varuint length} {bytes}","Groups":["Loading Values"]},{"Opcode":129,"Name":"pushint","Returns":"U","Cost":1,"Size":0,"Doc":"push immediate UINT to the stack as an integer","DocExtra":"pushint args are not added to the intcblock during assembly processes","ImmediateNote":"{varuint int}","Groups":["Loading Values"]},{"Opcode":136,"Name":"callsub","Cost":1,"Size":3,"Doc":"branch unconditionally to TARGET, saving the next instruction on the call stack","DocExtra":"The call stack is separate from the data stack. Only `callsub` and `retsub` manipulate it.`","Groups":["Flow Control"]},{"Opcode":137,"Name":"retsub","Cost":1,"Size":1,"Doc":"pop the top instruction from the call stack and branch to it","DocExtra":"The call stack is separate from the data stack. Only `callsub` and `retsub` manipulate it.`","Groups":["Flow Control"]},{"Opcode":144,"Name":"shl","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A times 2^B, modulo 2^64","Groups":["Arithmetic"]},{"Opcode":145,"Name":"shr","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A divided by 2^B","Groups":["Arithmetic"]},{"Opcode":146,"Name":"sqrt","Args":"U","Returns":"U","Cost":4,"Size":1,"Doc":"The largest integer X such that X^2 <= A","Groups":["Arithmetic"]},{"Opcode":147,"Name":"bitlen","Args":".","Returns":"U","Cost":1,"Size":1,"Doc":"The index of the highest bit in A. If A is a byte-array, it is interpreted as a big-endian unsigned integer","DocExtra":"bitlen interprets arrays as big-endian integers, unlike setbit/getbit","Groups":["Arithmetic"]},{"Opcode":148,"Name":"exp","Args":"UU","Returns":"U","Cost":1,"Size":1,"Doc":"A raised to the Bth power. Panic if A == B == 0 and on overflow","Groups":["Arithmetic"]},{"Opcode":149,"Name":"expw","Args":"UU","Returns":"UU","Cost":10,"Size":1,"Doc":"A raised to the Bth power as a 128-bit long result as low (top) and high uint64 values on the stack. Panic if A == B == 0 or if the results exceeds 2^128-1","Groups":["Arithmetic"]},{"Opcode":160,"Name":"b+","Args":"BB","Returns":"B","Cost":10,"Size":1,"Doc":"A plus B, where A and B are byte-arrays interpreted as big-endian unsigned integers","Groups":["Byteslice Arithmetic"]},{"Opcode":161,"Name":"b-","Args":"BB","Returns":"B","Cost":10,"Size":1,"Doc":"A minus B, where A and B are byte-arrays interpreted as big-endian unsigned integers. Panic on underflow.","Groups":["Byteslice Arithmetic"]},{"Opcode":162,"Name":"b/","Args":"BB","Returns":"B","Cost":20,"Size":1,"Doc":"A divided by B, where A and B are byte-arrays interpreted as big-endian unsigned integers. Panic if B is zero.","Groups":["Byteslice Arithmetic"]},{"Opcode":163,"Name":"b*","Args":"BB","Returns":"B","Cost":20,"Size":1,"Doc":"A times B, where A and B are byte-arrays interpreted as big-endian unsigned integers.","Groups":["Byteslice Arithmetic"]},{"Opcode":164,"Name":"b<","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"A is less than B, where A and B are byte-arrays interpreted as big-endian unsigned integers => { 0 or 1}","Groups":["Byteslice Arithmetic"]},{"Opcode":165,"Name":"b>","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"A is greater than B, where A and B are byte-arrays interpreted as big-endian unsigned integers => { 0 or 1}","Groups":["Byteslice Arithmetic"]},{"Opcode":166,"Name":"b<=","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"A is less than or equal to B, where A and B are byte-arrays interpreted as big-endian unsigned integers => { 0 or 1}","Groups":["Byteslice Arithmetic"]},{"Opcode":167,"Name":"b>=","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"A is greater than or equal to B, where A and B are byte-arrays interpreted as big-endian unsigned integers => { 0 or 1}","Groups":["Byteslice Arithmetic"]},{"Opcode":168,"Name":"b==","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"A is equals to B, where A and B are byte-arrays interpreted as big-endian unsigned integers => { 0 or 1}","Groups":["Byteslice Arithmetic"]},{"Opcode":169,"Name":"b!=","Args":"BB","Returns":"U","Cost":1,"Size":1,"Doc":"A is not equal to B, where A and B are byte-arrays interpreted as big-endian unsigned integers => { 0 or 1}","Groups":["Byteslice Arithmetic"]},{"Opcode":170,"Name":"b%","Args":"BB","Returns":"B","Cost":20,"Size":1,"Doc":"A modulo B, where A and B are byte-arrays interpreted as big-endian unsigned integers. Panic if B is zero.","Groups":["Byteslice Arithmetic"]},{"Opcode":171,"Name":"b|","Args":"BB","Returns":"B","Cost":6,"Size":1,"Doc":"A bitwise-or B, where A and B are byte-arrays, zero-left extended to the greater of their lengths","Groups":["Byteslice Logic"]},{"Opcode":172,"Name":"b&","Args":"BB","Returns":"B","Cost":6,"Size":1,"Doc":"A bitwise-and B, where A and B are byte-arrays, zero-left extended to the greater of their lengths","Groups":["Byteslice Logic"]},{"Opcode":173,"Name":"b^","Args":"BB","Returns":"B","Cost":6,"Size":1,"Doc":"A bitwise-xor B, where A and B are byte-arrays, zero-left extended to the greater of their lengths","Groups":["Byteslice Logic"]},{"Opcode":174,"Name":"b~","Args":"B","Returns":"B","Cost":4,"Size":1,"Doc":"A with all bits inverted","Groups":["Byteslice Logic"]},{"Opcode":175,"Name":"bzero","Args":"U","Returns":"B","Cost":1,"Size":1,"Doc":"push a byte-array of length A, containing all zero bytes","Groups":["Loading Values"]}]}');let o;function i(e){let t=0,r=0;for(let n=0;n<e.length;n++){const o=e[n];if(o<128)return n>9||9===n&&o>1?[0,-(n+1)]:[t|o<<r,n+1];t+=(127&o)<<r,r+=7;}return [0,0]}function s(e,t){let r=1;const n=i(e.slice(t+r)),o=n[0];let s=n[1];if(s<=0)throw new Error(`could not decode int const block size at pc=${t+r}`);const a=[];r+=s;for(let n=0;n<o;n++){if(t+r>=e.length)throw new Error("intcblock ran past end of program");let o;if([o,s]=i(e.slice(t+r)),s<=0)throw new Error(`could not decode int const[${n}] block size at pc=${t+r}`);a.push(o),r+=s;}return [r,a]}function a(e,t){let r=1;const n=i(e.slice(t+r)),o=n[0];let s=n[1];if(s<=0)throw new Error(`could not decode []byte const block size at pc=${t+r}`);const a=[];r+=s;for(let n=0;n<o;n++){if(t+r>=e.length)throw new Error("bytecblock ran past end of program");let o;if([o,s]=i(e.slice(t+r)),s<=0)throw new Error(`could not decode []byte] const[${n}] block size at pc=${t+r}`);if(r+=s,t+r+o>e.length)throw new Error("bytecblock ran past end of program");const c=e.slice(t+r,t+r+o);a.push(c),r+=o;}return [r,a]}function c(e,t){let r=1;const[n,o]=i(e.slice(t+r));if(o<=0)throw new Error(`could not decode push int const at pc=${t+r}`);return r+=o,[r,n]}function u(e,t){let r=1;const[n,o]=i(e.slice(t+r));if(o<=0)throw new Error(`could not decode push []byte const size at pc=${t+r}`);if(r+=o,t+r+n>e.length)throw new Error("pushbytes ran past end of program");const s=e.slice(t+r,t+r+n);return r+=n,[r,s]}function h(e,t){if(!e)throw new Error("empty program");if(void 0===t&&(t=[]),!Array.isArray(t))throw new Error("invalid arguments");const[r,h]=i(e);if(h<=0)throw new Error("version parsing error");if(r>n.z_)throw new Error("unsupported version");let l=0,{length:p}=e;for(const e of t)p+=e.length;if(p>1e3)throw new Error("program too long");if(!o){o={};for(const e of n.AP)o[e.Opcode]=e;}let f=h,d=[],y=[];for(;f<e.length;){const t=o[e[f]];if(void 0===t)throw new Error("invalid instruction");l+=t.Cost;let r=t.Size;if(0===r)switch(t.Opcode){case 32:{let t;[r,t]=s(e,f),d=d.concat(t);break}case 38:{let t;[r,t]=a(e,f),y=y.concat(t);break}case 129:{let t;[r,t]=c(e,f),d.push(t);break}case 128:{let t;[r,t]=u(e,f),y.push(t);break}default:throw new Error("invalid instruction")}f+=r;}if(r<4&&l>2e4)throw new Error("program too costly for Teal version < 4. consider using v4.");return [d,y,!0]}function l(e,t){const[,,r]=h(e,t);return r}function p(e,t){const[r]=s(e,t);return r}function f(e,t){const[r]=a(e,t);return r}function d(e,t){const[r]=c(e,t);return r}function y(e,t){const[r]=u(e,t);return r}const g=n.z_,m=n.BV;},8800:(e,t,r)=>{r.r(t),r.d(t,{LogicSig:()=>l,LogicSigAccount:()=>p,makeLogicSig:()=>f,signLogicSigTransactionObject:()=>d,signLogicSigTransaction:()=>y,logicSigFromByte:()=>g,tealSign:()=>b,tealSignFromProgram:()=>A});var n=r(9404),o=r(7116),i=r(3033),s=r(5583),a=r(4158),c=r(413),u=r(9417),h=r(2486).Buffer;class l{constructor(e,t){if(this.tag=h.from("Program"),t&&(!Array.isArray(t)||!t.every((e=>e.constructor===Uint8Array||h.isBuffer(e)))))throw new TypeError("Invalid arguments");let r;if(null!=t&&(r=t.map((e=>new Uint8Array(e)))),!s.checkProgram(e,r))throw new Error("Invalid program");this.logic=e,this.args=r,this.sig=void 0,this.msig=void 0;}get_obj_for_encoding(){const e={l:this.logic};return this.args&&(e.arg=this.args),this.sig?e.sig=this.sig:this.msig&&(e.msig=this.msig),e}static from_obj_for_encoding(e){const t=new l(e.l,e.arg);return t.sig=e.sig,t.msig=e.msig,t}verify(e){if(this.sig&&this.msig)return !1;try{s.checkProgram(this.logic,this.args);}catch(e){return !1}const t=c.concatArrays(this.tag,this.logic);if(!this.sig&&!this.msig){const r=n.genericHash(t);return c.arrayEqual(r,e)}return this.sig?n.verify(t,this.sig,e):a.F2(t,this.msig,e)}address(){const e=c.concatArrays(this.tag,this.logic),t=n.genericHash(e);return o.encodeAddress(new Uint8Array(t))}sign(e,t){if(null==t)this.sig=this.signProgram(e);else {const r=t.addrs.map((e=>({pk:o.decodeAddress(e).publicKey})));this.msig={v:t.version,thr:t.threshold,subsig:r};const[n,i]=this.singleSignMultisig(e,this.msig);this.msig.subsig[i].s=n;}}appendToMultisig(e){if(void 0===this.msig)throw new Error("no multisig present");const[t,r]=this.singleSignMultisig(e,this.msig);this.msig.subsig[r].s=t;}signProgram(e){const t=c.concatArrays(this.tag,this.logic);return n.sign(t,e)}singleSignMultisig(e,t){let r=-1;const o=n.keyPairFromSecretKey(e).publicKey;for(let e=0;e<t.subsig.length;e++){const{pk:n}=t.subsig[e];if(c.arrayEqual(n,o)){r=e;break}}if(-1===r)throw new Error("invalid secret key");return [this.signProgram(e),r]}toByte(){return i.encode(this.get_obj_for_encoding())}static fromByte(e){const t=i.decode(e);return l.from_obj_for_encoding(t)}}class p{constructor(e,t){this.lsig=new l(e,t),this.sigkey=void 0;}get_obj_for_encoding(){const e={lsig:this.lsig.get_obj_for_encoding()};return this.sigkey&&(e.sigkey=this.sigkey),e}static from_obj_for_encoding(e){const t=new p(e.lsig.l,e.lsig.arg);return t.lsig=l.from_obj_for_encoding(e.lsig),t.sigkey=e.sigkey,t}toByte(){return i.encode(this.get_obj_for_encoding())}static fromByte(e){const t=i.decode(e);return p.from_obj_for_encoding(t)}isDelegated(){return !(!this.lsig.sig&&!this.lsig.msig)}verify(){const e=this.address();return this.lsig.verify(o.decodeAddress(e).publicKey)}address(){if(this.lsig.sig&&this.lsig.msig)throw new Error("LogicSig has too many signatures. At most one of sig or msig may be present");if(this.lsig.sig){if(!this.sigkey)throw new Error("Signing key for delegated account is missing");return o.encodeAddress(this.sigkey)}if(this.lsig.msig){const e={version:this.lsig.msig.v,threshold:this.lsig.msig.thr,pks:this.lsig.msig.subsig.map((e=>e.pk))};return o.encodeAddress(o.fromMultisigPreImg(e))}return this.lsig.address()}signMultisig(e,t){this.lsig.sign(t,e);}appendToMultisig(e){this.lsig.appendToMultisig(e);}sign(e){this.lsig.sign(e),this.sigkey=n.keyPairFromSecretKey(e).publicKey;}}function f(e,t){return new l(e,t)}function d(e,t){let r,s;if(t instanceof p)r=t.lsig,s=o.decodeAddress(t.address()).publicKey;else if(r=t,r.sig)s=e.from.publicKey;else if(r.msig){const e={version:r.msig.v,threshold:r.msig.thr,pks:r.msig.subsig.map((e=>e.pk))};s=o.fromMultisigPreImg(e);}else s=o.decodeAddress(r.address()).publicKey;return function(e,t,r){if(!t.verify(r))throw new Error("Logic signature verification failed. Ensure the program and signature are valid.");const o={lsig:t.get_obj_for_encoding(),txn:e.get_obj_for_encoding()};return n.bytesEqual(r,e.from.publicKey)||(o.sgnr=h.from(r)),{txID:e.txID().toString(),blob:i.encode(o)}}(e,r,s)}function y(e,t){return d(u.instantiateTxnIfNeeded(e),t)}function g(e){return l.fromByte(e)}const m=h.from("ProgData");function b(e,t,r){const i=c.concatArrays(o.decodeAddress(r).publicKey,t),s=h.from(c.concatArrays(m,i));return n.sign(s,e)}function A(e,t,r){return b(e,t,new l(r).address())}},6608:(e,t,r)=>{r.r(t),r.d(t,{MULTISIG_BAD_SENDER_ERROR_MSG:()=>U,signTransaction:()=>I,signBid:()=>R,signBytes:()=>O,verifyBytes:()=>C,signMultisigTransaction:()=>D,mergeMultisigTransactions:()=>N,appendSignMultisigTransaction:()=>P,multisigAddress:()=>j,encodeObj:()=>F,decodeObj:()=>L,ERROR_MULTISIG_BAD_SENDER:()=>z,ERROR_INVALID_MICROALGOS:()=>M,Algodv2:()=>y.Z,Kmd:()=>g.Z,IntDecoding:()=>m.Z,Indexer:()=>b.Z,isValidAddress:()=>o.isValidAddress,encodeAddress:()=>o.encodeAddress,decodeAddress:()=>o.decodeAddress,encodeUint64:()=>A.T,decodeUint64:()=>A.u,generateAccount:()=>w.Z,secretKeyToMnemonic:()=>v.QX,mnemonicToSecretKey:()=>v.Ch,modelsv2:()=>x,mnemonicToMasterDerivationKey:()=>v.OF,masterDerivationKeyToMnemonic:()=>v.vC,microalgosToAlgos:()=>l._,algosToMicroalgos:()=>l.HN,INVALID_MICROALGOS_ERROR_MSG:()=>l.rD,computeGroupID:()=>S.computeGroupID,assignGroupID:()=>S.assignGroupID,LogicSigAccount:()=>E.LogicSigAccount,makeLogicSig:()=>E.makeLogicSig,signLogicSigTransaction:()=>E.signLogicSigTransaction,signLogicSigTransactionObject:()=>E.signLogicSigTransactionObject,logicSigFromByte:()=>E.logicSigFromByte,tealSign:()=>E.tealSign,tealSignFromProgram:()=>E.tealSignFromProgram,LogicTemplates:()=>H,OnApplicationComplete:()=>_.OnApplicationComplete,makeApplicationClearStateTxn:()=>_.makeApplicationClearStateTxn,makeApplicationClearStateTxnFromObject:()=>_.makeApplicationClearStateTxnFromObject,makeApplicationCloseOutTxn:()=>_.makeApplicationCloseOutTxn,makeApplicationCloseOutTxnFromObject:()=>_.makeApplicationCloseOutTxnFromObject,makeApplicationCreateTxn:()=>_.makeApplicationCreateTxn,makeApplicationCreateTxnFromObject:()=>_.makeApplicationCreateTxnFromObject,makeApplicationDeleteTxn:()=>_.makeApplicationDeleteTxn,makeApplicationDeleteTxnFromObject:()=>_.makeApplicationDeleteTxnFromObject,makeApplicationNoOpTxn:()=>_.makeApplicationNoOpTxn,makeApplicationNoOpTxnFromObject:()=>_.makeApplicationNoOpTxnFromObject,makeApplicationOptInTxn:()=>_.makeApplicationOptInTxn,makeApplicationOptInTxnFromObject:()=>_.makeApplicationOptInTxnFromObject,makeApplicationUpdateTxn:()=>_.makeApplicationUpdateTxn,makeApplicationUpdateTxnFromObject:()=>_.makeApplicationUpdateTxnFromObject,makeAssetConfigTxn:()=>_.makeAssetConfigTxn,makeAssetConfigTxnWithSuggestedParams:()=>_.makeAssetConfigTxnWithSuggestedParams,makeAssetConfigTxnWithSuggestedParamsFromObject:()=>_.makeAssetConfigTxnWithSuggestedParamsFromObject,makeAssetCreateTxn:()=>_.makeAssetCreateTxn,makeAssetCreateTxnWithSuggestedParams:()=>_.makeAssetCreateTxnWithSuggestedParams,makeAssetCreateTxnWithSuggestedParamsFromObject:()=>_.makeAssetCreateTxnWithSuggestedParamsFromObject,makeAssetDestroyTxn:()=>_.makeAssetDestroyTxn,makeAssetDestroyTxnWithSuggestedParams:()=>_.makeAssetDestroyTxnWithSuggestedParams,makeAssetDestroyTxnWithSuggestedParamsFromObject:()=>_.makeAssetDestroyTxnWithSuggestedParamsFromObject,makeAssetFreezeTxn:()=>_.makeAssetFreezeTxn,makeAssetFreezeTxnWithSuggestedParams:()=>_.makeAssetFreezeTxnWithSuggestedParams,makeAssetFreezeTxnWithSuggestedParamsFromObject:()=>_.makeAssetFreezeTxnWithSuggestedParamsFromObject,makeAssetTransferTxn:()=>_.makeAssetTransferTxn,makeAssetTransferTxnWithSuggestedParams:()=>_.makeAssetTransferTxnWithSuggestedParams,makeAssetTransferTxnWithSuggestedParamsFromObject:()=>_.makeAssetTransferTxnWithSuggestedParamsFromObject,makeKeyRegistrationTxn:()=>_.makeKeyRegistrationTxn,makeKeyRegistrationTxnWithSuggestedParams:()=>_.makeKeyRegistrationTxnWithSuggestedParams,makeKeyRegistrationTxnWithSuggestedParamsFromObject:()=>_.makeKeyRegistrationTxnWithSuggestedParamsFromObject,makePaymentTxn:()=>_.makePaymentTxn,makePaymentTxnWithSuggestedParams:()=>_.makePaymentTxnWithSuggestedParams,makePaymentTxnWithSuggestedParamsFromObject:()=>_.makePaymentTxnWithSuggestedParamsFromObject,ALGORAND_MIN_TX_FEE:()=>s.ALGORAND_MIN_TX_FEE,Transaction:()=>s.Transaction,decodeSignedTransaction:()=>s.decodeSignedTransaction,decodeUnsignedTransaction:()=>s.decodeUnsignedTransaction,encodeUnsignedTransaction:()=>s.encodeUnsignedTransaction,instantiateTxnIfNeeded:()=>s.instantiateTxnIfNeeded,TransactionType:()=>T.i});var n=r(9404),o=r(7116),i=r(3033),s=r(9417),a=r(4158),c=r(8886),u=r.n(c),h=r(2691),l=r(9070),p=r(413),f=r(5922),d={};for(const e in f)["default","MULTISIG_BAD_SENDER_ERROR_MSG","signTransaction","signBid","signBytes","verifyBytes","signMultisigTransaction","mergeMultisigTransactions","appendSignMultisigTransaction","multisigAddress","encodeObj","decodeObj","ERROR_MULTISIG_BAD_SENDER","ERROR_INVALID_MICROALGOS","Algodv2","Kmd","IntDecoding","Indexer","isValidAddress","encodeAddress","decodeAddress","encodeUint64","decodeUint64","generateAccount","secretKeyToMnemonic","mnemonicToSecretKey","modelsv2","mnemonicToMasterDerivationKey","masterDerivationKeyToMnemonic","microalgosToAlgos","algosToMicroalgos","INVALID_MICROALGOS_ERROR_MSG","computeGroupID","assignGroupID","LogicSigAccount","makeLogicSig","signLogicSigTransaction","signLogicSigTransactionObject","logicSigFromByte","tealSign","tealSignFromProgram","LogicTemplates"].indexOf(e)<0&&(d[e]=()=>f[e]);r.d(t,d);var y=r(5427),g=r(6477),m=r(7197),b=r(8027),A=r(6963),w=r(7988),v=r(3510),x=r(227),S=r(1063),E=r(8800),_=r(1988),T=r(2380),k=r(2486).Buffer;const B=k.from([77,88]),U="The transaction sender address and multisig preimage do not match.";function I(e,t){if(void 0===e.from){const r=n.keyPairFromSecretKey(t);e.from=o.encodeAddress(r.publicKey);}const r=s.instantiateTxnIfNeeded(e);return {txID:r.txID().toString(),blob:r.signTxn(t)}}function R(e,t){return new h.Z(e).signBid(t)}function O(e,t){const r=k.from(p.concatArrays(B,e));return n.sign(r,t)}function C(e,t,r){const i=k.from(p.concatArrays(B,e)),s=o.decodeAddress(r).publicKey;return n.verify(i,t,s)}function D(e,{version:t,threshold:r,addrs:n},i){const c=o.fromMultisigPreImgAddrs({version:t,threshold:r,addrs:n});Object.prototype.hasOwnProperty.call(e,"from")||(e.from=c);const u=n.map((e=>o.decodeAddress(e).publicKey));let h,l;return e instanceof s.Transaction?(h=e,l=a.V3.prototype.partialSignTxn.call(h,{version:t,threshold:r,pks:u},i)):(h=new a.V3(e),l=h.partialSignTxn({version:t,threshold:r,pks:u},i)),{txID:h.txID().toString(),blob:l}}function N(e){return a.J6(e)}function P(e,{version:t,threshold:r,addrs:n},s){const c=n.map((e=>o.decodeAddress(e).publicKey)),u=i.decode(e),h=a.V3.from_obj_for_encoding(u.txn),l=h.partialSignTxn({version:t,threshold:r,pks:c},s);return {txID:h.txID().toString(),blob:N([e,l])}}function j({version:e,threshold:t,addrs:r}){return o.fromMultisigPreImgAddrs({version:e,threshold:t,addrs:r})}function F(e){return new Uint8Array(i.encode(e))}function L(e){return i.decode(e)}const z=new Error(U),M=new Error(l.rD),H=u();},1988:(e,t,r)=>{r.r(t),r.d(t,{makePaymentTxnWithSuggestedParams:()=>s,makePaymentTxn:()=>a,makePaymentTxnWithSuggestedParamsFromObject:()=>c,makeKeyRegistrationTxnWithSuggestedParams:()=>u,makeKeyRegistrationTxn:()=>h,makeKeyRegistrationTxnWithSuggestedParamsFromObject:()=>l,makeAssetCreateTxnWithSuggestedParams:()=>p,makeAssetCreateTxn:()=>f,makeAssetCreateTxnWithSuggestedParamsFromObject:()=>d,makeAssetConfigTxnWithSuggestedParams:()=>y,makeAssetConfigTxn:()=>g,makeAssetConfigTxnWithSuggestedParamsFromObject:()=>m,makeAssetDestroyTxnWithSuggestedParams:()=>b,makeAssetDestroyTxn:()=>A,makeAssetDestroyTxnWithSuggestedParamsFromObject:()=>w,makeAssetFreezeTxnWithSuggestedParams:()=>v,makeAssetFreezeTxn:()=>x,makeAssetFreezeTxnWithSuggestedParamsFromObject:()=>S,makeAssetTransferTxnWithSuggestedParams:()=>E,makeAssetTransferTxn:()=>_,makeAssetTransferTxnWithSuggestedParamsFromObject:()=>T,makeApplicationCreateTxn:()=>k,makeApplicationCreateTxnFromObject:()=>B,makeApplicationUpdateTxn:()=>U,makeApplicationUpdateTxnFromObject:()=>I,makeApplicationDeleteTxn:()=>R,makeApplicationDeleteTxnFromObject:()=>O,makeApplicationOptInTxn:()=>C,makeApplicationOptInTxnFromObject:()=>D,makeApplicationCloseOutTxn:()=>N,makeApplicationCloseOutTxnFromObject:()=>P,makeApplicationClearStateTxn:()=>j,makeApplicationClearStateTxnFromObject:()=>F,makeApplicationNoOpTxn:()=>L,makeApplicationNoOpTxnFromObject:()=>z,OnApplicationComplete:()=>o.h});var n=r(9417),o=r(1624),i=r(1824);function s(e,t,r,o,s,a,c){const u={from:e,to:t,amount:r,closeRemainderTo:o,note:s,suggestedParams:a,type:i.i.pay,reKeyTo:c};return new n.Transaction(u)}function a(e,t,r,n,o,i,a,c,u,h,l){return s(e,t,n,o,c,{genesisHash:u,genesisID:h,firstRound:i,lastRound:a,fee:r},l)}function c(e){return s(e.from,e.to,e.amount,e.closeRemainderTo,e.note,e.suggestedParams,e.rekeyTo)}function u(e,t,r,o,s,a,c,u,h,l=!1){const p={from:e,note:t,voteKey:r,selectionKey:o,voteFirst:s,voteLast:a,voteKeyDilution:c,suggestedParams:u,type:i.i.keyreg,reKeyTo:h,nonParticipation:l};return new n.Transaction(p)}function h(e,t,r,n,o,i,s,a,c,h,l,p,f,d=!1){return u(e,o,a,c,h,l,p,{genesisHash:i,genesisID:s,firstRound:r,lastRound:n,fee:t},f,d)}function l(e){return u(e.from,e.note,e.voteKey,e.selectionKey,e.voteFirst,e.voteLast,e.voteKeyDilution,e.suggestedParams,e.rekeyTo,e.nonParticipation)}function p(e,t,r,o,s,a,c,u,h,l,p,f,d,y,g){const m={from:e,note:t,suggestedParams:y,assetTotal:r,assetDecimals:o,assetDefaultFrozen:s,assetUnitName:l,assetName:p,assetURL:f,assetMetadataHash:d,assetManager:a,assetReserve:c,assetFreeze:u,assetClawback:h,type:i.i.acfg,reKeyTo:g};return new n.Transaction(m)}function f(e,t,r,n,o,i,s,a,c,u,h,l,f,d,y,g,m,b,A){return p(e,o,a,c,u,h,l,f,d,y,g,m,b,{genesisHash:i,genesisID:s,firstRound:r,lastRound:n,fee:t},A)}function d(e){return p(e.from,e.note,e.total,e.decimals,e.defaultFrozen,e.manager,e.reserve,e.freeze,e.clawback,e.unitName,e.assetName,e.assetURL,e.assetMetadataHash,e.suggestedParams,e.rekeyTo)}function y(e,t,r,o,s,a,c,u,h=!0,l){if(h&&(void 0===o||void 0===s||void 0===a||void 0===c))throw Error("strict empty address checking was turned on, but at least one empty address was provided");const p={from:e,suggestedParams:u,assetIndex:r,assetManager:o,assetReserve:s,assetFreeze:a,assetClawback:c,type:i.i.acfg,note:t,reKeyTo:l};return new n.Transaction(p)}function g(e,t,r,n,o,i,s,a,c,u,h,l,p=!0,f){return y(e,o,a,c,u,h,l,{genesisHash:i,genesisID:s,firstRound:r,lastRound:n,fee:t},p,f)}function m(e){return y(e.from,e.note,e.assetIndex,e.manager,e.reserve,e.freeze,e.clawback,e.suggestedParams,e.strictEmptyAddressChecking,e.rekeyTo)}function b(e,t,r,o,s){const a={from:e,suggestedParams:o,assetIndex:r,type:i.i.acfg,note:t,reKeyTo:s};return new n.Transaction(a)}function A(e,t,r,n,o,i,s,a,c){return b(e,o,a,{genesisHash:i,genesisID:s,firstRound:r,lastRound:n,fee:t},c)}function w(e){return b(e.from,e.note,e.assetIndex,e.suggestedParams,e.rekeyTo)}function v(e,t,r,o,s,a,c){const u={from:e,type:i.i.afrz,freezeAccount:o,assetIndex:r,freezeState:s,note:t,suggestedParams:a,reKeyTo:c};return new n.Transaction(u)}function x(e,t,r,n,o,i,s,a,c,u,h){return v(e,o,a,c,u,{genesisHash:i,genesisID:s,firstRound:r,lastRound:n,fee:t},h)}function S(e){return v(e.from,e.note,e.assetIndex,e.freezeTarget,e.freezeState,e.suggestedParams,e.rekeyTo)}function E(e,t,r,o,s,a,c,u,h){const l={type:i.i.axfer,from:e,to:t,amount:s,suggestedParams:u,assetIndex:c,note:a,assetRevocationTarget:o,closeRemainderTo:r,reKeyTo:h};return new n.Transaction(l)}function _(e,t,r,n,o,i,s,a,c,u,h,l,p){return E(e,t,r,n,i,c,l,{genesisHash:u,genesisID:h,firstRound:s,lastRound:a,fee:o},p)}function T(e){return E(e.from,e.to,e.closeRemainderTo,e.revocationTarget,e.amount,e.note,e.assetIndex,e.suggestedParams,e.rekeyTo)}function k(e,t,r,o,s,a,c,u,h,l,p,f,d,y,g,m,b){const A={type:i.i.appl,from:e,suggestedParams:t,appIndex:0,appOnComplete:r,appLocalInts:a,appLocalByteSlices:c,appGlobalInts:u,appGlobalByteSlices:h,appApprovalProgram:o,appClearProgram:s,appArgs:l,appAccounts:p,appForeignApps:f,appForeignAssets:d,note:y,lease:g,reKeyTo:m,extraPages:b};return new n.Transaction(A)}function B(e){return k(e.from,e.suggestedParams,e.onComplete,e.approvalProgram,e.clearProgram,e.numLocalInts,e.numLocalByteSlices,e.numGlobalInts,e.numGlobalByteSlices,e.appArgs,e.accounts,e.foreignApps,e.foreignAssets,e.note,e.lease,e.rekeyTo,e.extraPages)}function U(e,t,r,s,a,c,u,h,l,p,f,d){const y={type:i.i.appl,from:e,suggestedParams:t,appIndex:r,appApprovalProgram:s,appOnComplete:o.h.UpdateApplicationOC,appClearProgram:a,appArgs:c,appAccounts:u,appForeignApps:h,appForeignAssets:l,note:p,lease:f,reKeyTo:d};return new n.Transaction(y)}function I(e){return U(e.from,e.suggestedParams,e.appIndex,e.approvalProgram,e.clearProgram,e.appArgs,e.accounts,e.foreignApps,e.foreignAssets,e.note,e.lease,e.rekeyTo)}function R(e,t,r,s,a,c,u,h,l,p){const f={type:i.i.appl,from:e,suggestedParams:t,appIndex:r,appOnComplete:o.h.DeleteApplicationOC,appArgs:s,appAccounts:a,appForeignApps:c,appForeignAssets:u,note:h,lease:l,reKeyTo:p};return new n.Transaction(f)}function O(e){return R(e.from,e.suggestedParams,e.appIndex,e.appArgs,e.accounts,e.foreignApps,e.foreignAssets,e.note,e.lease,e.rekeyTo)}function C(e,t,r,s,a,c,u,h,l,p){const f={type:i.i.appl,from:e,suggestedParams:t,appIndex:r,appOnComplete:o.h.OptInOC,appArgs:s,appAccounts:a,appForeignApps:c,appForeignAssets:u,note:h,lease:l,reKeyTo:p};return new n.Transaction(f)}function D(e){return C(e.from,e.suggestedParams,e.appIndex,e.appArgs,e.accounts,e.foreignApps,e.foreignAssets,e.note,e.lease,e.rekeyTo)}function N(e,t,r,s,a,c,u,h,l,p){const f={type:i.i.appl,from:e,suggestedParams:t,appIndex:r,appOnComplete:o.h.CloseOutOC,appArgs:s,appAccounts:a,appForeignApps:c,appForeignAssets:u,note:h,lease:l,reKeyTo:p};return new n.Transaction(f)}function P(e){return N(e.from,e.suggestedParams,e.appIndex,e.appArgs,e.accounts,e.foreignApps,e.foreignAssets,e.note,e.lease,e.rekeyTo)}function j(e,t,r,s,a,c,u,h,l,p){const f={type:i.i.appl,from:e,suggestedParams:t,appIndex:r,appOnComplete:o.h.ClearStateOC,appArgs:s,appAccounts:a,appForeignApps:c,appForeignAssets:u,note:h,lease:l,reKeyTo:p};return new n.Transaction(f)}function F(e){return j(e.from,e.suggestedParams,e.appIndex,e.appArgs,e.accounts,e.foreignApps,e.foreignAssets,e.note,e.lease,e.rekeyTo)}function L(e,t,r,s,a,c,u,h,l,p){const f={type:i.i.appl,from:e,suggestedParams:t,appIndex:r,appOnComplete:o.h.NoOpOC,appArgs:s,appAccounts:a,appForeignApps:c,appForeignAssets:u,note:h,lease:l,reKeyTo:p};return new n.Transaction(f)}function z(e){return L(e.from,e.suggestedParams,e.appIndex,e.appArgs,e.accounts,e.foreignApps,e.foreignAssets,e.note,e.lease,e.rekeyTo)}},3510:(e,t,r)=>{r.d(t,{vC:()=>y,OF:()=>d,Ch:()=>p,QX:()=>f});const n=["abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse","access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act","action","actor","actress","actual","adapt","add","addict","address","adjust","admit","adult","advance","advice","aerobic","affair","afford","afraid","again","age","agent","agree","ahead","aim","air","airport","aisle","alarm","album","alcohol","alert","alien","all","alley","allow","almost","alone","alpha","already","also","alter","always","amateur","amazing","among","amount","amused","analyst","anchor","ancient","anger","angle","angry","animal","ankle","announce","annual","another","answer","antenna","antique","anxiety","any","apart","apology","appear","apple","approve","april","arch","arctic","area","arena","argue","arm","armed","armor","army","around","arrange","arrest","arrive","arrow","art","artefact","artist","artwork","ask","aspect","assault","asset","assist","assume","asthma","athlete","atom","attack","attend","attitude","attract","auction","audit","august","aunt","author","auto","autumn","average","avocado","avoid","awake","aware","away","awesome","awful","awkward","axis","baby","bachelor","bacon","badge","bag","balance","balcony","ball","bamboo","banana","banner","bar","barely","bargain","barrel","base","basic","basket","battle","beach","bean","beauty","because","become","beef","before","begin","behave","behind","believe","below","belt","bench","benefit","best","betray","better","between","beyond","bicycle","bid","bike","bind","biology","bird","birth","bitter","black","blade","blame","blanket","blast","bleak","bless","blind","blood","blossom","blouse","blue","blur","blush","board","boat","body","boil","bomb","bone","bonus","book","boost","border","boring","borrow","boss","bottom","bounce","box","boy","bracket","brain","brand","brass","brave","bread","breeze","brick","bridge","brief","bright","bring","brisk","broccoli","broken","bronze","broom","brother","brown","brush","bubble","buddy","budget","buffalo","build","bulb","bulk","bullet","bundle","bunker","burden","burger","burst","bus","business","busy","butter","buyer","buzz","cabbage","cabin","cable","cactus","cage","cake","call","calm","camera","camp","can","canal","cancel","candy","cannon","canoe","canvas","canyon","capable","capital","captain","car","carbon","card","cargo","carpet","carry","cart","case","cash","casino","castle","casual","cat","catalog","catch","category","cattle","caught","cause","caution","cave","ceiling","celery","cement","census","century","cereal","certain","chair","chalk","champion","change","chaos","chapter","charge","chase","chat","cheap","check","cheese","chef","cherry","chest","chicken","chief","child","chimney","choice","choose","chronic","chuckle","chunk","churn","cigar","cinnamon","circle","citizen","city","civil","claim","clap","clarify","claw","clay","clean","clerk","clever","click","client","cliff","climb","clinic","clip","clock","clog","close","cloth","cloud","clown","club","clump","cluster","clutch","coach","coast","coconut","code","coffee","coil","coin","collect","color","column","combine","come","comfort","comic","common","company","concert","conduct","confirm","congress","connect","consider","control","convince","cook","cool","copper","copy","coral","core","corn","correct","cost","cotton","couch","country","couple","course","cousin","cover","coyote","crack","cradle","craft","cram","crane","crash","crater","crawl","crazy","cream","credit","creek","crew","cricket","crime","crisp","critic","crop","cross","crouch","crowd","crucial","cruel","cruise","crumble","crunch","crush","cry","crystal","cube","culture","cup","cupboard","curious","current","curtain","curve","cushion","custom","cute","cycle","dad","damage","damp","dance","danger","daring","dash","daughter","dawn","day","deal","debate","debris","decade","december","decide","decline","decorate","decrease","deer","defense","define","defy","degree","delay","deliver","demand","demise","denial","dentist","deny","depart","depend","deposit","depth","deputy","derive","describe","desert","design","desk","despair","destroy","detail","detect","develop","device","devote","diagram","dial","diamond","diary","dice","diesel","diet","differ","digital","dignity","dilemma","dinner","dinosaur","direct","dirt","disagree","discover","disease","dish","dismiss","disorder","display","distance","divert","divide","divorce","dizzy","doctor","document","dog","doll","dolphin","domain","donate","donkey","donor","door","dose","double","dove","draft","dragon","drama","drastic","draw","dream","dress","drift","drill","drink","drip","drive","drop","drum","dry","duck","dumb","dune","during","dust","dutch","duty","dwarf","dynamic","eager","eagle","early","earn","earth","easily","east","easy","echo","ecology","economy","edge","edit","educate","effort","egg","eight","either","elbow","elder","electric","elegant","element","elephant","elevator","elite","else","embark","embody","embrace","emerge","emotion","employ","empower","empty","enable","enact","end","endless","endorse","enemy","energy","enforce","engage","engine","enhance","enjoy","enlist","enough","enrich","enroll","ensure","enter","entire","entry","envelope","episode","equal","equip","era","erase","erode","erosion","error","erupt","escape","essay","essence","estate","eternal","ethics","evidence","evil","evoke","evolve","exact","example","excess","exchange","excite","exclude","excuse","execute","exercise","exhaust","exhibit","exile","exist","exit","exotic","expand","expect","expire","explain","expose","express","extend","extra","eye","eyebrow","fabric","face","faculty","fade","faint","faith","fall","false","fame","family","famous","fan","fancy","fantasy","farm","fashion","fat","fatal","father","fatigue","fault","favorite","feature","february","federal","fee","feed","feel","female","fence","festival","fetch","fever","few","fiber","fiction","field","figure","file","film","filter","final","find","fine","finger","finish","fire","firm","first","fiscal","fish","fit","fitness","fix","flag","flame","flash","flat","flavor","flee","flight","flip","float","flock","floor","flower","fluid","flush","fly","foam","focus","fog","foil","fold","follow","food","foot","force","forest","forget","fork","fortune","forum","forward","fossil","foster","found","fox","fragile","frame","frequent","fresh","friend","fringe","frog","front","frost","frown","frozen","fruit","fuel","fun","funny","furnace","fury","future","gadget","gain","galaxy","gallery","game","gap","garage","garbage","garden","garlic","garment","gas","gasp","gate","gather","gauge","gaze","general","genius","genre","gentle","genuine","gesture","ghost","giant","gift","giggle","ginger","giraffe","girl","give","glad","glance","glare","glass","glide","glimpse","globe","gloom","glory","glove","glow","glue","goat","goddess","gold","good","goose","gorilla","gospel","gossip","govern","gown","grab","grace","grain","grant","grape","grass","gravity","great","green","grid","grief","grit","grocery","group","grow","grunt","guard","guess","guide","guilt","guitar","gun","gym","habit","hair","half","hammer","hamster","hand","happy","harbor","hard","harsh","harvest","hat","have","hawk","hazard","head","health","heart","heavy","hedgehog","height","hello","helmet","help","hen","hero","hidden","high","hill","hint","hip","hire","history","hobby","hockey","hold","hole","holiday","hollow","home","honey","hood","hope","horn","horror","horse","hospital","host","hotel","hour","hover","hub","huge","human","humble","humor","hundred","hungry","hunt","hurdle","hurry","hurt","husband","hybrid","ice","icon","idea","identify","idle","ignore","ill","illegal","illness","image","imitate","immense","immune","impact","impose","improve","impulse","inch","include","income","increase","index","indicate","indoor","industry","infant","inflict","inform","inhale","inherit","initial","inject","injury","inmate","inner","innocent","input","inquiry","insane","insect","inside","inspire","install","intact","interest","into","invest","invite","involve","iron","island","isolate","issue","item","ivory","jacket","jaguar","jar","jazz","jealous","jeans","jelly","jewel","job","join","joke","journey","joy","judge","juice","jump","jungle","junior","junk","just","kangaroo","keen","keep","ketchup","key","kick","kid","kidney","kind","kingdom","kiss","kit","kitchen","kite","kitten","kiwi","knee","knife","knock","know","lab","label","labor","ladder","lady","lake","lamp","language","laptop","large","later","latin","laugh","laundry","lava","law","lawn","lawsuit","layer","lazy","leader","leaf","learn","leave","lecture","left","leg","legal","legend","leisure","lemon","lend","length","lens","leopard","lesson","letter","level","liar","liberty","library","license","life","lift","light","like","limb","limit","link","lion","liquid","list","little","live","lizard","load","loan","lobster","local","lock","logic","lonely","long","loop","lottery","loud","lounge","love","loyal","lucky","luggage","lumber","lunar","lunch","luxury","lyrics","machine","mad","magic","magnet","maid","mail","main","major","make","mammal","man","manage","mandate","mango","mansion","manual","maple","marble","march","margin","marine","market","marriage","mask","mass","master","match","material","math","matrix","matter","maximum","maze","meadow","mean","measure","meat","mechanic","medal","media","melody","melt","member","memory","mention","menu","mercy","merge","merit","merry","mesh","message","metal","method","middle","midnight","milk","million","mimic","mind","minimum","minor","minute","miracle","mirror","misery","miss","mistake","mix","mixed","mixture","mobile","model","modify","mom","moment","monitor","monkey","monster","month","moon","moral","more","morning","mosquito","mother","motion","motor","mountain","mouse","move","movie","much","muffin","mule","multiply","muscle","museum","mushroom","music","must","mutual","myself","mystery","myth","naive","name","napkin","narrow","nasty","nation","nature","near","neck","need","negative","neglect","neither","nephew","nerve","nest","net","network","neutral","never","news","next","nice","night","noble","noise","nominee","noodle","normal","north","nose","notable","note","nothing","notice","novel","now","nuclear","number","nurse","nut","oak","obey","object","oblige","obscure","observe","obtain","obvious","occur","ocean","october","odor","off","offer","office","often","oil","okay","old","olive","olympic","omit","once","one","onion","online","only","open","opera","opinion","oppose","option","orange","orbit","orchard","order","ordinary","organ","orient","original","orphan","ostrich","other","outdoor","outer","output","outside","oval","oven","over","own","owner","oxygen","oyster","ozone","pact","paddle","page","pair","palace","palm","panda","panel","panic","panther","paper","parade","parent","park","parrot","party","pass","patch","path","patient","patrol","pattern","pause","pave","payment","peace","peanut","pear","peasant","pelican","pen","penalty","pencil","people","pepper","perfect","permit","person","pet","phone","photo","phrase","physical","piano","picnic","picture","piece","pig","pigeon","pill","pilot","pink","pioneer","pipe","pistol","pitch","pizza","place","planet","plastic","plate","play","please","pledge","pluck","plug","plunge","poem","poet","point","polar","pole","police","pond","pony","pool","popular","portion","position","possible","post","potato","pottery","poverty","powder","power","practice","praise","predict","prefer","prepare","present","pretty","prevent","price","pride","primary","print","priority","prison","private","prize","problem","process","produce","profit","program","project","promote","proof","property","prosper","protect","proud","provide","public","pudding","pull","pulp","pulse","pumpkin","punch","pupil","puppy","purchase","purity","purpose","purse","push","put","puzzle","pyramid","quality","quantum","quarter","question","quick","quit","quiz","quote","rabbit","raccoon","race","rack","radar","radio","rail","rain","raise","rally","ramp","ranch","random","range","rapid","rare","rate","rather","raven","raw","razor","ready","real","reason","rebel","rebuild","recall","receive","recipe","record","recycle","reduce","reflect","reform","refuse","region","regret","regular","reject","relax","release","relief","rely","remain","remember","remind","remove","render","renew","rent","reopen","repair","repeat","replace","report","require","rescue","resemble","resist","resource","response","result","retire","retreat","return","reunion","reveal","review","reward","rhythm","rib","ribbon","rice","rich","ride","ridge","rifle","right","rigid","ring","riot","ripple","risk","ritual","rival","river","road","roast","robot","robust","rocket","romance","roof","rookie","room","rose","rotate","rough","round","route","royal","rubber","rude","rug","rule","run","runway","rural","sad","saddle","sadness","safe","sail","salad","salmon","salon","salt","salute","same","sample","sand","satisfy","satoshi","sauce","sausage","save","say","scale","scan","scare","scatter","scene","scheme","school","science","scissors","scorpion","scout","scrap","screen","script","scrub","sea","search","season","seat","second","secret","section","security","seed","seek","segment","select","sell","seminar","senior","sense","sentence","series","service","session","settle","setup","seven","shadow","shaft","shallow","share","shed","shell","sheriff","shield","shift","shine","ship","shiver","shock","shoe","shoot","shop","short","shoulder","shove","shrimp","shrug","shuffle","shy","sibling","sick","side","siege","sight","sign","silent","silk","silly","silver","similar","simple","since","sing","siren","sister","situate","six","size","skate","sketch","ski","skill","skin","skirt","skull","slab","slam","sleep","slender","slice","slide","slight","slim","slogan","slot","slow","slush","small","smart","smile","smoke","smooth","snack","snake","snap","sniff","snow","soap","soccer","social","sock","soda","soft","solar","soldier","solid","solution","solve","someone","song","soon","sorry","sort","soul","sound","soup","source","south","space","spare","spatial","spawn","speak","special","speed","spell","spend","sphere","spice","spider","spike","spin","spirit","split","spoil","sponsor","spoon","sport","spot","spray","spread","spring","spy","square","squeeze","squirrel","stable","stadium","staff","stage","stairs","stamp","stand","start","state","stay","steak","steel","stem","step","stereo","stick","still","sting","stock","stomach","stone","stool","story","stove","strategy","street","strike","strong","struggle","student","stuff","stumble","style","subject","submit","subway","success","such","sudden","suffer","sugar","suggest","suit","summer","sun","sunny","sunset","super","supply","supreme","sure","surface","surge","surprise","surround","survey","suspect","sustain","swallow","swamp","swap","swarm","swear","sweet","swift","swim","swing","switch","sword","symbol","symptom","syrup","system","table","tackle","tag","tail","talent","talk","tank","tape","target","task","taste","tattoo","taxi","teach","team","tell","ten","tenant","tennis","tent","term","test","text","thank","that","theme","then","theory","there","they","thing","this","thought","three","thrive","throw","thumb","thunder","ticket","tide","tiger","tilt","timber","time","tiny","tip","tired","tissue","title","toast","tobacco","today","toddler","toe","together","toilet","token","tomato","tomorrow","tone","tongue","tonight","tool","tooth","top","topic","topple","torch","tornado","tortoise","toss","total","tourist","toward","tower","town","toy","track","trade","traffic","tragic","train","transfer","trap","trash","travel","tray","treat","tree","trend","trial","tribe","trick","trigger","trim","trip","trophy","trouble","truck","true","truly","trumpet","trust","truth","try","tube","tuition","tumble","tuna","tunnel","turkey","turn","turtle","twelve","twenty","twice","twin","twist","two","type","typical","ugly","umbrella","unable","unaware","uncle","uncover","under","undo","unfair","unfold","unhappy","uniform","unique","unit","universe","unknown","unlock","until","unusual","unveil","update","upgrade","uphold","upon","upper","upset","urban","urge","usage","use","used","useful","useless","usual","utility","vacant","vacuum","vague","valid","valley","valve","van","vanish","vapor","various","vast","vault","vehicle","velvet","vendor","venture","venue","verb","verify","version","very","vessel","veteran","viable","vibrant","vicious","victory","video","view","village","vintage","violin","virtual","virus","visa","visit","visual","vital","vivid","vocal","voice","void","volcano","volume","vote","voyage","wage","wagon","wait","walk","wall","walnut","want","warfare","warm","warrior","wash","wasp","waste","water","wave","way","wealth","weapon","wear","weasel","weather","web","wedding","weekend","weird","welcome","west","wet","whale","what","wheat","wheel","when","where","whip","whisper","wide","width","wife","wild","will","win","window","wine","wing","wink","winner","winter","wire","wisdom","wise","wish","witness","wolf","woman","wonder","wood","wool","word","work","world","worry","worth","wrap","wreck","wrestle","wrist","write","wrong","yard","year","yellow","you","young","youth","zebra","zero","zone","zoo"];var o=r(9404),i=r(7116);const s="failed to decode mnemonic";function a(e){const t=[];let r=0,n=0;return e.forEach((function(e){r|=e<<n,n+=8,n>=11&&(t.push(2047&r),r>>=11,n-=11);})),n&&t.push(r),t}function c(e){return e.map((e=>n[e]))}function u(e){return c(a(o.genericHash(e)))[0]}function h(e){if(e.length!==o.SEED_BTYES_LENGTH)throw new RangeError(`Seed length must be ${o.SEED_BTYES_LENGTH}`);const t=c(a(e)),r=u(e);return `${t.join(" ")} ${r}`}function l(e){const t=e.split(" "),r=t.slice(0,24);for(const e of r)if(-1===n.indexOf(e))throw new Error("the mnemonic contains a word that is not in the wordlist");const o=t[t.length-1];let i=function(e){const t=[];let r=0,n=0;return e.forEach((function(e){for(r|=e<<n,n+=11;n>=8;)t.push(255&r),r>>=8,n-=8;})),n&&t.push(r),new Uint8Array(t)}(r.map((e=>n.indexOf(e))));if(33!==i.length)throw new Error(s);if(0!==i[i.length-1])throw new Error(s);if(i=i.slice(0,i.length-1),u(i)===o)return i;throw new Error(s)}function p(e){const t=l(e),r=o.keyPairFromSeed(t);return {addr:i.encodeAddress(r.publicKey),sk:r.secretKey}}function f(e){return h(e.slice(0,o.SEED_BTYES_LENGTH))}function d(e){return l(e)}function y(e){return h(e)}},4158:(e,t,r)=>{r.d(t,{V3:()=>l,J6:()=>p,F2:()=>f});var n=r(9404),o=r(7116),i=r(3033),s=r(9417),a=r(413),c=r(2486).Buffer;const u="Cannot merge txs. Multisig preimages differ",h="Cannot mutate a multisig field as it would invalidate all existing signatures.";class l extends s.Transaction{addLease(){throw new Error(h)}addRekey(){throw new Error(h)}signTxn(e){throw new Error("Cannot sign a multisig transaction using `signTxn`. Use `partialSignTxn` instead.")}partialSignTxn({version:e,threshold:t,pks:r},s){const a=n.keyPairFromSecretKey(s).publicKey;return function(e,{rawSig:t,myPk:r},{version:s,threshold:a,pks:u}){let h=!1;const l=u.map((e=>n.bytesEqual(e,r)?(h=!0,{pk:c.from(e),s:t}):{pk:c.from(e)}));if(!1===h)throw new Error("Key does not exist");const p={msig:{v:s,thr:a,subsig:l},txn:e},f=o.fromMultisigPreImg({version:s,threshold:a,pks:u});return o.encodeAddress(e.snd)!==o.encodeAddress(f)&&(p.sgnr=c.from(f)),new Uint8Array(i.encode(p))}(this.get_obj_for_encoding(),{rawSig:this.rawSignTxn(s),myPk:a},{version:e,threshold:t,pks:r})}static from_obj_for_encoding(e){return super.from_obj_for_encoding(e)}}function p(e){if(e.length<2)throw new Error("Not enough multisig transactions to merge. Need at least two");const t=i.decode(e[0]),r=l.from_obj_for_encoding(t.txn).txID(),n=t.sgnr?o.encodeAddress(t.sgnr):void 0,s={version:t.msig.v,threshold:t.msig.thr,pks:t.msig.subsig.map((e=>e.pk))},a=o.encodeAddress(o.fromMultisigPreImg(s));let h=t.msig.subsig;for(let s=0;s<e.length;s++){const p=i.decode(e[s]);if(l.from_obj_for_encoding(p.txn).txID()!==r)throw new Error("Cannot merge txs. txIDs differ");if(n!==(p.sgnr?o.encodeAddress(p.sgnr):void 0))throw new Error("Cannot merge txs. Auth addrs differ");if(p.msig.subsig.length!==t.msig.subsig.length)throw new Error(u);const f={version:p.msig.v,threshold:p.msig.thr,pks:p.msig.subsig.map((e=>e.pk))};if(a!==o.encodeAddress(o.fromMultisigPreImg(f)))throw new Error(u);h=p.msig.subsig.map(((e,r)=>{const n=t.msig.subsig[r];if(n.s){if(e.s&&0!==c.compare(c.from(e.s),c.from(n.s)))throw new Error("Cannot merge txs. subsigs are mismatched.");return {pk:n.pk,s:n.s}}return e.s?{pk:n.pk,s:e.s}:n}));}const p={msig:{v:t.msig.v,thr:t.msig.thr,subsig:h},txn:t.txn};return void 0!==n&&(p.sgnr=c.from(o.decodeAddress(n).publicKey)),new Uint8Array(i.encode(p))}function f(e,t,r){const i=t.v,s=t.thr,c=t.subsig,u=c.map((e=>e.pk));if(t.subsig.length<s)return !1;let h;try{h=o.fromMultisigPreImg({version:i,threshold:s,pks:u});}catch(e){return !1}if(!a.arrayEqual(h,r))return !1;let l=0;for(const e of c)void 0!==e.s&&(l+=1);if(l<s)return !1;let p=0;for(const t of c)void 0!==t.s&&n.verify(e,t.s,t.pk)&&(p+=1);return !(p<s)}},9404:(e,t,r)=>{r.r(t),r.d(t,{genericHash:()=>a,randomBytes:()=>c,keyPairFromSeed:()=>u,keyPair:()=>h,keyPairFromSecretKey:()=>l,sign:()=>p,bytesEqual:()=>f,verify:()=>d,PUBLIC_KEY_LENGTH:()=>y,SECRET_KEY_LENGTH:()=>g,HASH_BYTES_LENGTH:()=>m,SEED_BTYES_LENGTH:()=>b});var n=r(7765),o=r.n(n),i=r(9757),s=r.n(i);function a(e){return s().sha512_256.array(e)}function c(e){return o().randomBytes(e)}function u(e){return o().sign.keyPair.fromSeed(e)}function h(){return u(c(o().box.secretKeyLength))}function l(e){return o().sign.keyPair.fromSecretKey(e)}function p(e,t){return o().sign.detached(e,t)}function f(e,t){return o().verify(e,t)}function d(e,t,r){return o().sign.detached.verify(e,t,r)}const y=o().sign.publicKeyLength,g=o().sign.secretKeyLength,m=32,b=32;},9417:(e,t,r)=>{r.r(t),r.d(t,{ALGORAND_MIN_TX_FEE:()=>l,Transaction:()=>p,encodeUnsignedTransaction:()=>f,decodeUnsignedTransaction:()=>d,decodeSignedTransaction:()=>y,instantiateTxnIfNeeded:()=>g,default:()=>m});var n=r(7267),o=r.n(n),i=r(7116),s=r(3033),a=r(9404),c=r(413),u=r(1624),h=r(2486).Buffer;const l=1e3;class p{constructor({...e}){this.name="Transaction",this.tag=h.from("TX");const t={type:u.i.pay,flatFee:!1,nonParticipation:!1};if(void 0===e.type&&(e.type=t.type),void 0===e.flatFee&&(e.flatFee=t.flatFee),e.type===u.i.keyreg&&void 0!==e.voteKey&&void 0===e.nonParticipation&&(e.nonParticipation=t.nonParticipation),void 0!==e.suggestedParams){const t=e;t.genesisHash=t.suggestedParams.genesisHash,t.fee=t.suggestedParams.fee,void 0!==t.suggestedParams.flatFee&&(t.flatFee=t.suggestedParams.flatFee),t.firstRound=t.suggestedParams.firstRound,t.lastRound=t.suggestedParams.lastRound,t.genesisID=t.suggestedParams.genesisID;}const r=e;if(r.from=i.decodeAddress(r.from),void 0!==r.to&&(r.to=i.decodeAddress(r.to)),void 0!==r.closeRemainderTo&&(r.closeRemainderTo=i.decodeAddress(r.closeRemainderTo)),void 0!==r.assetManager&&(r.assetManager=i.decodeAddress(r.assetManager)),void 0!==r.assetReserve&&(r.assetReserve=i.decodeAddress(r.assetReserve)),void 0!==r.assetFreeze&&(r.assetFreeze=i.decodeAddress(r.assetFreeze)),void 0!==r.assetClawback&&(r.assetClawback=i.decodeAddress(r.assetClawback)),void 0!==r.assetRevocationTarget&&(r.assetRevocationTarget=i.decodeAddress(r.assetRevocationTarget)),void 0!==r.freezeAccount&&(r.freezeAccount=i.decodeAddress(r.freezeAccount)),void 0!==r.reKeyTo&&(r.reKeyTo=i.decodeAddress(r.reKeyTo)),void 0===r.genesisHash)throw Error("genesis hash must be specified and in a base64 string.");if(r.genesisHash=h.from(r.genesisHash,"base64"),void 0!==r.amount&&(!(Number.isSafeInteger(r.amount)||"bigint"==typeof r.amount&&r.amount<=BigInt("0xffffffffffffffff"))||r.amount<0))throw Error("Amount must be a positive number and smaller than 2^64-1");if(!Number.isSafeInteger(r.fee)||r.fee<0)throw Error("fee must be a positive number and smaller than 2^53-1");if(!Number.isSafeInteger(r.firstRound)||r.firstRound<0)throw Error("firstRound must be a positive number");if(!Number.isSafeInteger(r.lastRound)||r.lastRound<0)throw Error("lastRound must be a positive number");if(void 0!==r.extraPages&&(!Number.isInteger(r.extraPages)||r.extraPages<0||r.extraPages>3))throw Error("extraPages must be an Integer between and including 0 to 3");if(void 0!==r.assetTotal&&(!(Number.isSafeInteger(r.assetTotal)||"bigint"==typeof r.assetTotal&&r.assetTotal<=BigInt("0xffffffffffffffff"))||r.assetTotal<0))throw Error("Total asset issuance must be a positive number and smaller than 2^64-1");if(void 0!==r.assetDecimals&&(!Number.isSafeInteger(r.assetDecimals)||r.assetDecimals<0||r.assetDecimals>19))throw Error(`assetDecimals must be a positive number and smaller than ${19..toString()}`);if(void 0!==r.assetIndex&&(!Number.isSafeInteger(r.assetIndex)||r.assetIndex<0))throw Error("Asset index must be a positive number and smaller than 2^53-1");if(void 0!==r.appIndex&&(!Number.isSafeInteger(r.appIndex)||r.appIndex<0))throw Error("Application index must be a positive number and smaller than 2^53-1");if(void 0!==r.appLocalInts&&(!Number.isSafeInteger(r.appLocalInts)||r.appLocalInts<0))throw Error("Application local ints count must be a positive number and smaller than 2^53-1");if(void 0!==r.appLocalByteSlices&&(!Number.isSafeInteger(r.appLocalByteSlices)||r.appLocalByteSlices<0))throw Error("Application local byte slices count must be a positive number and smaller than 2^53-1");if(void 0!==r.appGlobalInts&&(!Number.isSafeInteger(r.appGlobalInts)||r.appGlobalInts<0))throw Error("Application global ints count must be a positive number and smaller than 2^53-1");if(void 0!==r.appGlobalByteSlices&&(!Number.isSafeInteger(r.appGlobalByteSlices)||r.appGlobalByteSlices<0))throw Error("Application global byte slices count must be a positive number and smaller than 2^53-1");if(void 0!==r.appApprovalProgram&&r.appApprovalProgram.constructor!==Uint8Array)throw Error("appApprovalProgram must be a Uint8Array.");if(void 0!==r.appClearProgram&&r.appClearProgram.constructor!==Uint8Array)throw Error("appClearProgram must be a Uint8Array.");if(void 0!==r.appArgs){if(!Array.isArray(r.appArgs))throw Error("appArgs must be an Array of Uint8Array.");r.appArgs=r.appArgs.slice(),r.appArgs.forEach((e=>{if(e.constructor!==Uint8Array)throw Error("each element of AppArgs must be a Uint8Array.")}));}else r.appArgs=[];if(void 0!==r.appAccounts){if(!Array.isArray(r.appAccounts))throw Error("appAccounts must be an Array of addresses.");r.appAccounts=r.appAccounts.map((e=>i.decodeAddress(e)));}if(void 0!==r.appForeignApps){if(!Array.isArray(r.appForeignApps))throw Error("appForeignApps must be an Array of integers.");r.appForeignApps=r.appForeignApps.slice(),r.appForeignApps.forEach((e=>{if(!Number.isSafeInteger(e)||e<0)throw Error("each foreign application index must be a positive number and smaller than 2^53-1")}));}if(void 0!==r.appForeignAssets){if(!Array.isArray(r.appForeignAssets))throw Error("appForeignAssets must be an Array of integers.");r.appForeignAssets=r.appForeignAssets.slice(),r.appForeignAssets.forEach((e=>{if(!Number.isSafeInteger(e)||e<0)throw Error("each foreign asset index must be a positive number and smaller than 2^53-1")}));}if(void 0!==r.assetMetadataHash&&0!==r.assetMetadataHash.length){if("string"==typeof r.assetMetadataHash&&(r.assetMetadataHash=new Uint8Array(h.from(r.assetMetadataHash))),r.assetMetadataHash.constructor!==Uint8Array||32!==r.assetMetadataHash.byteLength)throw Error("assetMetadataHash must be a 32 byte Uint8Array or string.");r.assetMetadataHash.every((e=>0===e))&&(r.assetMetadataHash=void 0);}else r.assetMetadataHash=void 0;if(void 0!==r.note){if(r.note.constructor!==Uint8Array)throw Error("note must be a Uint8Array.")}else r.note=new Uint8Array(0);if(void 0!==r.lease){if(r.lease.constructor!==Uint8Array)throw Error("lease must be a Uint8Array.");if(32!==r.lease.length)throw Error(`lease must be of length ${32..toString()}.`);r.lease.every((e=>0===e))&&(r.lease=new Uint8Array(0));}else r.lease=new Uint8Array(0);if(void 0!==r.voteKey&&(r.voteKey=h.from(r.voteKey,"base64")),void 0!==r.selectionKey&&(r.selectionKey=h.from(r.selectionKey,"base64")),r.nonParticipation&&(r.voteKey||r.selectionKey||r.voteFirst||r.voteLast||r.voteKeyDilution))throw new Error("nonParticipation is true but participation params are present.");delete r.suggestedParams,Object.assign(this,c.removeUndefinedProperties(r)),r.flatFee||(this.fee*=this.estimateSize(),this.fee<l&&(this.fee=l)),this.group=void 0;}get_obj_for_encoding(){if("pay"===this.type){const e={amt:this.amount,fee:this.fee,fv:this.firstRound,lv:this.lastRound,note:h.from(this.note),snd:h.from(this.from.publicKey),type:"pay",gen:this.genesisID,gh:this.genesisHash,lx:h.from(this.lease),grp:this.group};return void 0!==this.closeRemainderTo&&i.encodeAddress(this.closeRemainderTo.publicKey)!==i.ALGORAND_ZERO_ADDRESS_STRING&&(e.close=h.from(this.closeRemainderTo.publicKey)),void 0!==this.reKeyTo&&(e.rekey=h.from(this.reKeyTo.publicKey)),void 0!==this.to&&(e.rcv=h.from(this.to.publicKey)),e.note.length||delete e.note,e.amt||delete e.amt,e.fee||delete e.fee,e.fv||delete e.fv,e.gen||delete e.gen,void 0===e.grp&&delete e.grp,e.lx.length||delete e.lx,e.rekey||delete e.rekey,e}if("keyreg"===this.type){const e={fee:this.fee,fv:this.firstRound,lv:this.lastRound,note:h.from(this.note),snd:h.from(this.from.publicKey),type:this.type,gen:this.genesisID,gh:this.genesisHash,lx:h.from(this.lease),grp:this.group,votekey:this.voteKey,selkey:this.selectionKey,votefst:this.voteFirst,votelst:this.voteLast,votekd:this.voteKeyDilution};return e.note.length||delete e.note,e.lx.length||delete e.lx,e.fee||delete e.fee,e.fv||delete e.fv,e.gen||delete e.gen,void 0===e.grp&&delete e.grp,void 0!==this.reKeyTo&&(e.rekey=h.from(this.reKeyTo.publicKey)),this.nonParticipation&&(e.nonpart=!0,delete e.votekey,delete e.selkey,delete e.votefst,delete e.votelst,delete e.votekd),e}if("acfg"===this.type){const e={fee:this.fee,fv:this.firstRound,lv:this.lastRound,note:h.from(this.note),snd:h.from(this.from.publicKey),type:this.type,gen:this.genesisID,gh:this.genesisHash,lx:h.from(this.lease),grp:this.group,caid:this.assetIndex,apar:{t:this.assetTotal,df:this.assetDefaultFrozen,dc:this.assetDecimals}};return void 0!==this.assetManager&&(e.apar.m=h.from(this.assetManager.publicKey)),void 0!==this.assetReserve&&(e.apar.r=h.from(this.assetReserve.publicKey)),void 0!==this.assetFreeze&&(e.apar.f=h.from(this.assetFreeze.publicKey)),void 0!==this.assetClawback&&(e.apar.c=h.from(this.assetClawback.publicKey)),void 0!==this.assetName&&(e.apar.an=this.assetName),void 0!==this.assetUnitName&&(e.apar.un=this.assetUnitName),void 0!==this.assetURL&&(e.apar.au=this.assetURL),void 0!==this.assetMetadataHash&&(e.apar.am=h.from(this.assetMetadataHash)),e.note.length||delete e.note,e.lx.length||delete e.lx,e.amt||delete e.amt,e.fee||delete e.fee,e.fv||delete e.fv,e.gen||delete e.gen,void 0!==this.reKeyTo&&(e.rekey=h.from(this.reKeyTo.publicKey)),e.caid||delete e.caid,e.apar.t||e.apar.un||e.apar.an||e.apar.df||e.apar.m||e.apar.r||e.apar.f||e.apar.c||e.apar.au||e.apar.am||e.apar.dc?(e.apar.t||delete e.apar.t,e.apar.dc||delete e.apar.dc,e.apar.un||delete e.apar.un,e.apar.an||delete e.apar.an,e.apar.df||delete e.apar.df,e.apar.m||delete e.apar.m,e.apar.r||delete e.apar.r,e.apar.f||delete e.apar.f,e.apar.c||delete e.apar.c,e.apar.au||delete e.apar.au,e.apar.am||delete e.apar.am):delete e.apar,void 0===e.grp&&delete e.grp,e}if("axfer"===this.type){const e={aamt:this.amount,fee:this.fee,fv:this.firstRound,lv:this.lastRound,note:h.from(this.note),snd:h.from(this.from.publicKey),arcv:h.from(this.to.publicKey),type:this.type,gen:this.genesisID,gh:this.genesisHash,lx:h.from(this.lease),grp:this.group,xaid:this.assetIndex};return void 0!==this.closeRemainderTo&&(e.aclose=h.from(this.closeRemainderTo.publicKey)),void 0!==this.assetRevocationTarget&&(e.asnd=h.from(this.assetRevocationTarget.publicKey)),e.note.length||delete e.note,e.lx.length||delete e.lx,e.aamt||delete e.aamt,e.amt||delete e.amt,e.fee||delete e.fee,e.fv||delete e.fv,e.gen||delete e.gen,void 0===e.grp&&delete e.grp,e.aclose||delete e.aclose,e.asnd||delete e.asnd,e.rekey||delete e.rekey,void 0!==this.reKeyTo&&(e.rekey=h.from(this.reKeyTo.publicKey)),e}if("afrz"===this.type){const e={fee:this.fee,fv:this.firstRound,lv:this.lastRound,note:h.from(this.note),snd:h.from(this.from.publicKey),type:this.type,gen:this.genesisID,gh:this.genesisHash,lx:h.from(this.lease),grp:this.group,faid:this.assetIndex,afrz:this.freezeState};return void 0!==this.freezeAccount&&(e.fadd=h.from(this.freezeAccount.publicKey)),e.note.length||delete e.note,e.lx.length||delete e.lx,e.amt||delete e.amt,e.fee||delete e.fee,e.fv||delete e.fv,e.gen||delete e.gen,e.afrz||delete e.afrz,void 0===e.grp&&delete e.grp,void 0!==this.reKeyTo&&(e.rekey=h.from(this.reKeyTo.publicKey)),e}if("appl"===this.type){const e={fee:this.fee,fv:this.firstRound,lv:this.lastRound,note:h.from(this.note),snd:h.from(this.from.publicKey),type:this.type,gen:this.genesisID,gh:this.genesisHash,lx:h.from(this.lease),grp:this.group,apid:this.appIndex,apan:this.appOnComplete,apls:{nui:this.appLocalInts,nbs:this.appLocalByteSlices},apgs:{nui:this.appGlobalInts,nbs:this.appGlobalByteSlices},apfa:this.appForeignApps,apas:this.appForeignAssets,apep:this.extraPages};return void 0!==this.reKeyTo&&(e.rekey=h.from(this.reKeyTo.publicKey)),void 0!==this.appApprovalProgram&&(e.apap=h.from(this.appApprovalProgram)),void 0!==this.appClearProgram&&(e.apsu=h.from(this.appClearProgram)),void 0!==this.appArgs&&(e.apaa=this.appArgs.map((e=>h.from(e)))),void 0!==this.appAccounts&&(e.apat=this.appAccounts.map((e=>h.from(e.publicKey)))),e.note.length||delete e.note,e.lx.length||delete e.lx,e.amt||delete e.amt,e.fee||delete e.fee,e.fv||delete e.fv,e.gen||delete e.gen,e.apid||delete e.apid,e.apls.nui||delete e.apls.nui,e.apls.nbs||delete e.apls.nbs,e.apls.nui||e.apls.nbs||delete e.apls,e.apgs.nui||delete e.apgs.nui,e.apgs.nbs||delete e.apgs.nbs,e.apaa&&e.apaa.length||delete e.apaa,e.apgs.nui||e.apgs.nbs||delete e.apgs,e.apap||delete e.apap,e.apsu||delete e.apsu,e.apan||delete e.apan,e.apfa||delete e.apfa,e.apas||delete e.apas,e.apep||delete e.apep,void 0===e.grp&&delete e.grp,e}}static from_obj_for_encoding(e){const t=Object.create(this.prototype);return t.name="Transaction",t.tag=h.from("TX"),t.genesisID=e.gen,t.genesisHash=h.from(e.gh),t.type=e.type,t.fee=e.fee,t.firstRound=e.fv,t.lastRound=e.lv,t.note=new Uint8Array(e.note),t.lease=new Uint8Array(e.lx),t.from=i.decodeAddress(i.encodeAddress(new Uint8Array(e.snd))),void 0!==e.grp&&(t.group=h.from(e.grp)),void 0!==e.rekey&&(t.reKeyTo=i.decodeAddress(i.encodeAddress(new Uint8Array(e.rekey)))),"pay"===e.type?(t.amount=e.amt,t.to=i.decodeAddress(i.encodeAddress(new Uint8Array(e.rcv))),void 0!==e.close&&(t.closeRemainderTo=i.decodeAddress(i.encodeAddress(e.close)))):"keyreg"===e.type?(t.voteKey=h.from(e.votekey),t.selectionKey=h.from(e.selkey),t.voteKeyDilution=e.votekd,t.voteFirst=e.votefst,t.voteLast=e.votelst,t.nonParticipation=e.nonpart):"acfg"===e.type?(void 0!==e.caid&&(t.assetIndex=e.caid),void 0!==e.apar&&(t.assetTotal=e.apar.t,t.assetDefaultFrozen=e.apar.df,void 0!==e.apar.dc&&(t.assetDecimals=e.apar.dc),void 0!==e.apar.m&&(t.assetManager=i.decodeAddress(i.encodeAddress(new Uint8Array(e.apar.m)))),void 0!==e.apar.r&&(t.assetReserve=i.decodeAddress(i.encodeAddress(new Uint8Array(e.apar.r)))),void 0!==e.apar.f&&(t.assetFreeze=i.decodeAddress(i.encodeAddress(new Uint8Array(e.apar.f)))),void 0!==e.apar.c&&(t.assetClawback=i.decodeAddress(i.encodeAddress(new Uint8Array(e.apar.c)))),void 0!==e.apar.un&&(t.assetUnitName=e.apar.un),void 0!==e.apar.an&&(t.assetName=e.apar.an),void 0!==e.apar.au&&(t.assetURL=e.apar.au),void 0!==e.apar.am&&(t.assetMetadataHash=e.apar.am))):"axfer"===e.type?(void 0!==e.xaid&&(t.assetIndex=e.xaid),void 0!==e.aamt&&(t.amount=e.aamt),void 0!==e.aclose&&(t.closeRemainderTo=i.decodeAddress(i.encodeAddress(new Uint8Array(e.aclose)))),void 0!==e.asnd&&(t.assetRevocationTarget=i.decodeAddress(i.encodeAddress(new Uint8Array(e.asnd)))),t.to=i.decodeAddress(i.encodeAddress(new Uint8Array(e.arcv)))):"afrz"===e.type?(void 0!==e.afrz&&(t.freezeState=e.afrz),void 0!==e.faid&&(t.assetIndex=e.faid),t.freezeAccount=i.decodeAddress(i.encodeAddress(new Uint8Array(e.fadd)))):"appl"===e.type&&(void 0!==e.apid&&(t.appIndex=e.apid),void 0!==e.apan&&(t.appOnComplete=e.apan),void 0!==e.apls&&(void 0!==e.apls.nui&&(t.appLocalInts=e.apls.nui),void 0!==e.apls.nbs&&(t.appLocalByteSlices=e.apls.nbs)),void 0!==e.apgs&&(void 0!==e.apgs.nui&&(t.appGlobalInts=e.apgs.nui),void 0!==e.apgs.nbs&&(t.appGlobalByteSlices=e.apgs.nbs)),void 0!==e.apap&&(t.appApprovalProgram=new Uint8Array(e.apap)),void 0!==e.apsu&&(t.appClearProgram=new Uint8Array(e.apsu)),void 0!==e.apaa&&(t.appArgs=e.apaa.map((e=>new Uint8Array(e)))),void 0!==e.apat&&(t.appAccounts=e.apat.map((e=>i.decodeAddress(i.encodeAddress(new Uint8Array(e)))))),void 0!==e.apfa&&(t.appForeignApps=e.apfa),void 0!==e.apas&&(t.appForeignAssets=e.apas)),t}estimateSize(){return this.toByte().length+75}bytesToSign(){const e=this.toByte();return h.from(c.concatArrays(this.tag,e))}toByte(){return s.encode(this.get_obj_for_encoding())}rawSignTxn(e){const t=this.bytesToSign(),r=a.sign(t,e);return h.from(r)}signTxn(e){const t={sig:this.rawSignTxn(e),txn:this.get_obj_for_encoding()},r=a.keyPairFromSecretKey(e).publicKey;return i.encodeAddress(r)!==i.encodeAddress(this.from.publicKey)&&(t.sgnr=h.from(r)),new Uint8Array(s.encode(t))}rawTxID(){const e=this.toByte(),t=h.from(c.concatArrays(this.tag,e));return h.from(a.genericHash(t))}txID(){const e=this.rawTxID();return o().encode(e).slice(0,52)}addLease(e,t=0){let r;if(void 0!==e){if(e.constructor!==Uint8Array)throw Error("lease must be a Uint8Array.");if(32!==e.length)throw Error(`lease must be of length ${32..toString()}.`);r=new Uint8Array(e);}else r=new Uint8Array(0);this.lease=r,0!==t&&(this.fee+=37*t);}addRekey(e,t=0){void 0!==e&&(this.reKeyTo=i.decodeAddress(e)),0!==t&&(this.fee+=37*t);}_getDictForDisplay(){const e={...this};return e.tag=e.tag.toString(),e.from=i.encodeAddress(e.from.publicKey),void 0!==e.to&&(e.to=i.encodeAddress(e.to.publicKey)),void 0!==e.closeRemainderTo&&(e.closeRemainderTo=i.encodeAddress(e.closeRemainderTo.publicKey)),void 0!==e.assetManager&&(e.assetManager=i.encodeAddress(e.assetManager.publicKey)),void 0!==e.assetReserve&&(e.assetReserve=i.encodeAddress(e.assetReserve.publicKey)),void 0!==e.assetFreeze&&(e.assetFreeze=i.encodeAddress(e.assetFreeze.publicKey)),void 0!==e.assetClawback&&(e.assetClawback=i.encodeAddress(e.assetClawback.publicKey)),void 0!==e.assetRevocationTarget&&(e.assetRevocationTarget=i.encodeAddress(e.assetRevocationTarget.publicKey)),void 0!==e.reKeyTo&&(e.reKeyTo=i.encodeAddress(e.reKeyTo.publicKey)),e.genesisHash=e.genesisHash.toString("base64"),e}prettyPrint(){console.log(this._getDictForDisplay());}toString(){return JSON.stringify(this._getDictForDisplay())}}function f(e){const t=e.get_obj_for_encoding();return s.encode(t)}function d(e){const t=s.decode(e);return p.from_obj_for_encoding(t)}function y(e){const t=s.decode(e);return {...t,txn:p.from_obj_for_encoding(t.txn)}}function g(e){return e instanceof p?e:new p(e)}const m=p;},2380:(e,t,r)=>{r.d(t,{i:()=>n.i});var n=r(1824);},7197:(e,t,r)=>{var n;r.d(t,{Z:()=>o}),function(e){e.DEFAULT="default",e.SAFE="safe",e.MIXED="mixed",e.BIGINT="bigint";}(n||(n={}));const o=n;},1624:(e,t,r)=>{var n,o;r.d(t,{i:()=>n,h:()=>o}),function(e){e.pay="pay",e.keyreg="keyreg",e.acfg="acfg",e.axfer="axfer",e.afrz="afrz",e.appl="appl";}(n||(n={})),function(e){e[e.NoOpOC=0]="NoOpOC",e[e.OptInOC=1]="OptInOC",e[e.CloseOutOC=2]="CloseOutOC",e[e.ClearStateOC=3]="ClearStateOC",e[e.UpdateApplicationOC=4]="UpdateApplicationOC",e[e.DeleteApplicationOC=5]="DeleteApplicationOC";}(o||(o={}));},1824:(e,t,r)=>{r.d(t,{i:()=>n.i});var n=r(1624);},413:(e,t,r)=>{r.r(t),r.d(t,{parseJSON:()=>a,arrayEqual:()=>c,concatArrays:()=>u,removeUndefinedProperties:()=>h,isNode:()=>l});var n=r(4360),o=r.n(n),i=r(7197);const s=o()({useNativeBigInt:!0,strict:!0});function a(e,t){const r=t&&t.intDecoding?t.intDecoding:i.Z.DEFAULT;return s.parse(e,((e,t)=>{if(null!=t&&"object"==typeof t&&null==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,Object.prototype),"bigint"==typeof t){if("bigint"===r||"mixed"===r&&t>Number.MAX_SAFE_INTEGER)return t;if("default"===r||"mixed"===r)return Number(t);throw new Error(`Integer exceeds maximum safe integer: ${t.toString()}. Try parsing with a different intDecoding option.`)}return "number"==typeof t&&"bigint"===r&&Number.isInteger(t)?BigInt(t):t}))}function c(e,t){return e.length===t.length&&Array.from(e).every(((e,r)=>e===t[r]))}function u(...e){const t=e.reduce(((e,t)=>e+t.length),0),r=new Uint8Array(t);let n=0;for(let t=0;t<e.length;t++)r.set(e[t],n),n+=e[t].length;return r}function h(e){const t={...e};return Object.keys(t).forEach((e=>{void 0===t[e]&&delete t[e];})),t}function l(){return "object"==typeof browser$1&&"object"==typeof browser$1.versions&&void 0!==browser$1.versions.node}},4654:()=>{}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(r.exports,r,r.exports,__webpack_require__),r.exports}__webpack_require__.amdO={},__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]});},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});};var __webpack_exports__={};return (()=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>r});var e=__webpack_require__(6608),t={};for(const r in e)"default"!==r&&(t[r]=()=>e[r]);__webpack_require__.d(__webpack_exports__,t);const r=e;})(),__webpack_exports__})()}));

}(algosdk_min));

var algosdk = /*@__PURE__*/getDefaultExportFromCjs(algosdk_min.exports);

var hammer = "🛠";
var wood = "🪵";
var vegetable = "🥑";
var fruit = "🍎";
var robot = "🤖";
var steak = "🍲";
var salad = "🥗";
var nail = "🔩";
var meat = "🥩";
var car = "🚗";
var pot = "🫕";
var items = {
    "hammer": "🛠",
    "wood": "🪵",
    "vegetable": "🥑",
    "fruit": "🍎",
    "metal robot": "🤖",
    "steak and chips": "🍲",
    "salad and fruit": "🥗",
    "nail": "🔩",
    "metal": "⚓",
    "meat": "🥩",
    "car": "🚗",
    "pot": "🫕"
};
var App = /** @class */ (function () {
    function App(appid) {
        this.appid = appid;
        this.elem = document.createElement('div');
        this.elem.id = "viewport";
        this.algodClient = new algosdk.Algodv2('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'http://127.0.0.1', '4001');
        this.wallet = new myalgoConnect();
        this.box = document.createElement('div');
        this.box.id = 'notification-message';
        this.box.innerText = 'Nothing to see here';
        this.elem.appendChild(this.box);
        this.board = document.createElement('div');
        this.board.id = 'board';
        this.elem.appendChild(this.board);
        var craftopts = "";
        var getopts = "";
        for (var key in items) {
            console.log(key, items[key]);
            if (key.includes(' ')) {
                craftopts += "<option>" + key + "</option>";
            }
            else {
                getopts += "<option>" + key + "</option>";
            }
        }
        var controllertxt = "\n    <div class=\"control\">\n      <h4>Get</h4>\n      <select name=\"option_get\">\n        " + getopts + "\n      </select>\n      <input type=\"number\" name=\"amount_get\" value=1 />\n      <input type=\"submit\" name=\"submit_get\" value=\"Get\" />\n    </div>\n\n    <div class=\"control\">\n      <h4>Craft</h4>\n      <select name=\"option_craft\">\n        " + craftopts + "\n      </select>\n      <input type=\"number\" name=\"amount_craft\" value=1>\n      <input type=\"submit\" name=\"submit_craft\" value=\"Craft\" />\n    </div>\n    ";
        var controller = document.createElement('form');
        controller.id = "controller";
        controller.innerHTML = controllertxt;
        var _this = this;
        controller.onsubmit = function (event) {
            event.preventDefault();
            console.log(event.target);
            if (event.submitter.name === "submit_get") {
                _this.getItem(event.target);
            }
            else {
                _this.craftItem(event.target);
            }
        };
        this.elem.append(controller);
    }
    App.prototype.getItem = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var option_get, amount_get, args;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        option_get = form[0];
                        amount_get = form[1];
                        console.log("Get " + amount_get.value + " " + option_get.value);
                        args = [btoa("get"), btoa(option_get.value), btoa(amount_get.value)];
                        console.log(args);
                        return [4 /*yield*/, this.callapp(args)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.craftItem = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var option_craft, amount_craft, args;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        option_craft = form[3];
                        amount_craft = form[4];
                        console.log("Craft " + amount_craft.value + " " + option_craft.value);
                        args = [btoa("craft " + option_get.value), btoa(amount_get.value)];
                        console.log(args);
                        return [4 /*yield*/, this.callapp(args)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.render = function () {
        document.getElementById('root').appendChild(this.elem);
    };
    App.prototype.readapp = function (loadLocal) {
        if (loadLocal === void 0) { loadLocal = false; }
        return __awaiter(this, void 0, void 0, function () {
            var app_1, p, key, r, linfo, lapp, local, key, r, info, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.algodClient.getApplicationByID(this.appid)["do"]()];
                    case 1:
                        app_1 = _a.sent();
                        p = {};
                        for (key in app_1.params['global-state']) {
                            r = app_1.params['global-state'][key];
                            p[atob(r.key)] = r.value;
                        }
                        linfo = "";
                        if (!loadLocal) return [3 /*break*/, 3];
                        console.log("Local state");
                        return [4 /*yield*/, this.algodClient.accountInformation(this.addresses[0])["do"]()];
                    case 2:
                        lapp = _a.sent();
                        console.log("LOCAL STATE: ", lapp);
                        local = {};
                        for (key in lapp['apps-local-state'][0]['key-value']) {
                            r = lapp['apps-local-state'][0]['key-value'][key];
                            local[atob(r.key)] = r.value;
                        }
                        console.log(local);
                        linfo = "\n          <table>\n            <tr><td>hammer</td><td>" + hammer + "</td><td>" + local.hammer.uint + "</td></tr>\n            <tr><td>wood</td><td>" + wood + "</td><td>" + local.wood.uint + "</td></tr>\n            <tr><td>fruit</td><td>" + fruit + "</td><td>" + local.fruit.uint + "</td></tr>\n            <tr><td>metal robot</td><td>" + robot + "</td><td>" + local['metal robot'].uint + "</td></tr>\n            <tr><td>steak and chips</td><td>" + steak + "</td><td>" + local['steak and chips'].uint + "</td></tr>\n            <tr><td>salad and fruits</td><td>" + salad + "</td><td>" + local['salad and fruits'].uint + "</td></tr>\n            <tr><td>nail</td><td>" + nail + "</td><td>" + local.nail.uint + "</td></tr>\n            <tr><td>vegetable</td><td>" + vegetable + "</td><td>" + local.vegetable.uint + "</td></tr>\n            <tr><td>meat</td><td>" + meat + "</td><td>" + local.meat.uint + "</td></tr>\n            <tr><td>pot</td><td>" + pot + "</td><td>" + local.pot.uint + "</td></tr>\n            <tr><td>wooden cart</td><td>" + car + "</td><td>" + local['wooden cart'].uint + "</td></tr>\n          </table>\n        ";
                        _a.label = 3;
                    case 3:
                        info = "\n        <table>\n          <tr><td>hammer</td><td>" + hammer + "</td><td>" + p.hammer.uint + "</td></tr>\n          <tr><td>wood</td><td>" + wood + "</td><td>" + p.wood.uint + "</td></tr>\n          <tr><td>fruit</td><td>" + fruit + "</td><td>" + p.fruit.uint + "</td></tr>\n          <tr><td>metal robot</td><td>" + robot + "</td><td>" + p['metal robot'].uint + "</td></tr>\n          <tr><td>steak and chips</td><td>" + steak + "</td><td>" + p['steak and chips'].uint + "</td></tr>\n          <tr><td>salad and fruits</td><td>" + salad + "</td><td>" + p['salad and fruits'].uint + "</td></tr>\n          <tr><td>nail</td><td>" + nail + "</td><td>" + p.nail.uint + "</td></tr>\n          <tr><td>vegetable</td><td>" + vegetable + "</td><td>" + p.vegetable.uint + "</td></tr>\n          <tr><td>meat</td><td>" + meat + "</td><td>" + p.meat.uint + "</td></tr>\n          <tr><td>pot</td><td>" + pot + "</td><td>" + p.pot.uint + "</td></tr>\n          <tr><td>wooden cart</td><td>" + car + "</td><td>" + p['wooden cart'].uint + "</td></tr>\n        </table>\n      ";
                        document.getElementById('board').innerHTML = info + linfo;
                        return [2 /*return*/, true];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1.response.text);
                        this.box.innerText = e_1.response.text;
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, canread, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        this.isConnected = true;
                        _a = this;
                        return [4 /*yield*/, this.wallet.connect()];
                    case 1:
                        _a.accounts = _b.sent();
                        this.addresses = this.accounts.map(function (account) { return account.address; });
                        return [4 /*yield*/, this.readapp()];
                    case 2:
                        canread = _b.sent();
                        if (canread) {
                            document.getElementById("connect").style.display = 'none';
                            document.getElementById("call").style.display = 'block';
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _b.sent();
                        console.log(e_2.response.text);
                        this.box.innerText = e_2.response.text;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.callapp = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var txnn, txn, signedTxn, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.algodClient.getTransactionParams()["do"]()];
                    case 1:
                        txnn = _a.sent();
                        txn = __assign(__assign({}, txnn), { from: this.addresses[0], fee: 1000, flatFee: true, appIndex: this.appid, type: 'appl', appArgs: args, appOnComplete: 0 });
                        return [4 /*yield*/, this.wallet.signTransaction(txn)];
                    case 2:
                        signedTxn = _a.sent();
                        return [4 /*yield*/, this.algodClient.sendRawTransaction(signedTxn.blob)["do"]()];
                    case 3:
                        _a.sent();
                        this.readapp();
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        console.error(e_3.response.text);
                        this.box.innerText = e_3.response.text;
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.addbtn = function (b) {
        this.elem.appendChild(b);
    };
    App.prototype.optin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.opt(1)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.readapp(true)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.optout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.opt(2)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.readapp()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.opt = function (action) {
        return __awaiter(this, void 0, void 0, function () {
            var txnn, txn, signedTxn, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.algodClient.getTransactionParams()["do"]()];
                    case 1:
                        txnn = _a.sent();
                        txn = __assign(__assign({}, txnn), { from: this.addresses[0], fee: 1000, flatFee: true, appIndex: this.appid, type: 'appl', appOnComplete: action });
                        return [4 /*yield*/, this.wallet.signTransaction(txn)];
                    case 2:
                        signedTxn = _a.sent();
                        return [4 /*yield*/, this.algodClient.sendRawTransaction(signedTxn.blob)["do"]()];
                    case 3:
                        _a.sent();
                        this.readapp();
                        return [3 /*break*/, 5];
                    case 4:
                        e_4 = _a.sent();
                        console.error(e_4.response.text);
                        this.box.innerText = e_4.response.text;
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return App;
}());
var app = new App(331);
var btn = document.createElement('button');
btn.id = "connect";
btn.innerText = "Connect Wallet";
btn.onclick = function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            app.connect();
            return [2 /*return*/];
        });
    });
};
var cbtn = document.createElement('button');
cbtn.id = "call";
cbtn.style.display = "none";
cbtn.innerText = "Call App";
cbtn.onclick = function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            app.callapp('test');
            return [2 /*return*/];
        });
    });
};
var optin = document.createElement('button');
optin.innerText = "Optin";
optin.onclick = function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            app.optin();
            return [2 /*return*/];
        });
    });
};
var optout = document.createElement('button');
optout.innerText = "Optout";
optout.onclick = function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            app.optout();
            return [2 /*return*/];
        });
    });
};
app.addbtn(btn);
app.addbtn(cbtn);
app.addbtn(optin);
app.addbtn(optout);
window['app'] = app;
app.render();
