/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 873:
/***/ (function(module, __unused_webpack_exports, __tselect_require__) {

var root = __tselect_require__(325);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 552:
/***/ (function(module, __unused_webpack_exports, __tselect_require__) {

var Symbol = __tselect_require__(873),
    getRawTag = __tselect_require__(659),
    objectToString = __tselect_require__(350);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 128:
/***/ (function(module, __unused_webpack_exports, __tselect_require__) {

var trimmedEndIndex = __tselect_require__(800);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 840:
/***/ (function(module, __unused_webpack_exports, __tselect_require__) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __tselect_require__.g == 'object' && __tselect_require__.g && __tselect_require__.g.Object === Object && __tselect_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 659:
/***/ (function(module, __unused_webpack_exports, __tselect_require__) {

var Symbol = __tselect_require__(873);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 350:
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 325:
/***/ (function(module, __unused_webpack_exports, __tselect_require__) {

var freeGlobal = __tselect_require__(840);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 800:
/***/ (function(module) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 177:
/***/ (function(module, __unused_webpack_exports, __tselect_require__) {

var toInteger = __tselect_require__(489);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

module.exports = before;


/***/ }),

/***/ 334:
/***/ (function(module) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ 221:
/***/ (function(module, __unused_webpack_exports, __tselect_require__) {

var isObject = __tselect_require__(805),
    now = __tselect_require__(124),
    toNumber = __tselect_require__(374);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 488:
/***/ (function(module) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 805:
/***/ (function(module) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 346:
/***/ (function(module) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 394:
/***/ (function(module, __unused_webpack_exports, __tselect_require__) {

var baseGetTag = __tselect_require__(552),
    isObjectLike = __tselect_require__(346);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 90:
/***/ (function(module) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ 950:
/***/ (function(module) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ 124:
/***/ (function(module, __unused_webpack_exports, __tselect_require__) {

var root = __tselect_require__(325);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 59:
/***/ (function(module, __unused_webpack_exports, __tselect_require__) {

var before = __tselect_require__(177);

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

module.exports = once;


/***/ }),

/***/ 19:
/***/ (function(module, __unused_webpack_exports, __tselect_require__) {

var toNumber = __tselect_require__(374);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ 489:
/***/ (function(module, __unused_webpack_exports, __tselect_require__) {

var toFinite = __tselect_require__(19);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ 374:
/***/ (function(module, __unused_webpack_exports, __tselect_require__) {

var baseTrim = __tselect_require__(128),
    isObject = __tselect_require__(805),
    isSymbol = __tselect_require__(394);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 529:
/***/ (function(module) {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ 606:
/***/ (function(module, __unused_webpack_exports, __tselect_require__) {

"use strict";

var tryToString = __tselect_require__(823);

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


/***/ }),

/***/ 837:
/***/ (function(module) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw new $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 400:
/***/ (function(module) {

"use strict";

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ 767:
/***/ (function(module) {

"use strict";

// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/ecma262/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),

/***/ 117:
/***/ (function(module) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 859:
/***/ (function(module) {

"use strict";

// release references held by exhausted / closed iterator helpers to allow GC of the source chain
module.exports = function (state) {
  state.iterator = state.next = state.nextHandler = state.mapper = state.predicate = state.inner =
    state.iterables = state.iters = state.openIters = state.padding = state.finishResults = state.buffer = null;
};


/***/ }),

/***/ 684:
/***/ (function(module) {

"use strict";

// Should throw an error on invalid iterator
// https://issues.chromium.org/issues/336839115
module.exports = function (methodName, argument) {
  // eslint-disable-next-line es/no-iterator -- required for testing
  var method = typeof Iterator == 'function' && Iterator.prototype[methodName];
  if (method) try {
    method.call({ next: null }, argument).next();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 269:
/***/ (function(module) {

"use strict";

module.exports = Object.create ? Object.create(null) : {};


/***/ }),

/***/ 741:
/***/ (function(module) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 823:
/***/ (function(module) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __tselect_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __tselect_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__tselect_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function() { return module['default']; } :
/******/ 			function() { return module; };
/******/ 		__tselect_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/concatenation wrap */
/******/ 	// wrap a concatenated module body as a lazy, memoized accessor; mod is
/******/ 	// set before the body runs so re-entrant calls (require cycles) observe
/******/ 	// the partial exports like Node.js
/******/ 	__tselect_require__.cw = function(body) {
/******/ 		var mod;
/******/ 		return function() {
/******/ 			if (body) {
/******/ 				var fn = body;
/******/ 				body = 0;
/******/ 				mod = { exports: {} };
/******/ 				fn.call(mod.exports, mod, mod.exports);
/******/ 			}
/******/ 			return mod.exports;
/******/ 		};
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__tselect_require__.d = function(exports, definition) {
/******/ 		for(var key in definition) {
/******/ 			if(__tselect_require__.o(definition, key) && !__tselect_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__tselect_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__tselect_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); };
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__tselect_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__tselect_require__.r(__webpack_exports__);

// EXPORTS
__tselect_require__.d(__webpack_exports__, {
  ASYNC_SEARCH: function() { return /* reexport */ ASYNC_SEARCH; },
  LOAD_CHILDREN_OPTIONS: function() { return /* reexport */ LOAD_CHILDREN_OPTIONS; },
  LOAD_ROOT_OPTIONS: function() { return /* reexport */ LOAD_ROOT_OPTIONS; },
  Treeselect: function() { return /* reexport */ Treeselect; },
  "default": function() { return /* binding */ entry_lib; },
  treeselectMixin: function() { return /* reexport */ treeselectMixin; }
});

// MODULE: ./node_modules/fuzzysearch/index.js
var fuzzysearch_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {


function fuzzysearch (needle, haystack) {
  var tlen = haystack.length;
  var qlen = needle.length;
  if (qlen > tlen) {
    return false;
  }
  if (qlen === tlen) {
    return needle === haystack;
  }
  outer: for (var i = 0, j = 0; i < qlen; i++) {
    var nch = needle.charCodeAt(i);
    while (j < tlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}

module.exports = fuzzysearch;

});

// MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};

});

// MODULE: ./node_modules/core-js/internals/a-callable.js
var a_callable_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var isCallable = (is_callable_namespaceFn());
var tryToString = (try_to_string_namespaceFn());

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};

});

// MODULE: ./node_modules/core-js/internals/a-possible-prototype.js
var a_possible_prototype_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var isPossiblePrototype = (is_possible_prototype_namespaceFn());

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (isPossiblePrototype(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};

});

// MODULE: ./node_modules/core-js/internals/add-to-unscopables.js
var add_to_unscopables_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var wellKnownSymbol = (well_known_symbol_namespaceFn());
var create = (object_create_namespaceFn());
var defineProperty = (object_define_property_namespaceFn().f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

});

// MODULE: ./node_modules/core-js/internals/advance-string-index.js
var advance_string_index_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var charAt = (string_multibyte_namespaceFn().o);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length || 1 : 1);
};

});

// MODULE: ./node_modules/core-js/internals/an-instance.js
var an_instance_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var isPrototypeOf = (object_is_prototype_of_namespaceFn());

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};

});

// MODULE: ./node_modules/core-js/internals/an-object.js
var an_object_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var isObject = (is_object_namespaceFn());

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};

});

// MODULE: ./node_modules/core-js/internals/array-for-each.js
var array_for_each_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $forEach = (array_iteration_namespaceFn().jJ);
var arrayMethodIsStrict = (array_method_is_strict_namespaceFn());

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

});

// MODULE: ./node_modules/core-js/internals/array-includes.js
var array_includes_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var toIndexedObject = (to_indexed_object_namespaceFn());
var toAbsoluteIndex = (to_absolute_index_namespaceFn());
var lengthOfArrayLike = (length_of_array_like_namespaceFn());

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  m: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  q: createMethod(false)
};

});

// MODULE: ./node_modules/core-js/internals/array-iteration.js
var array_iteration_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var bind = (function_bind_context_namespaceFn());
var IndexedObject = (indexed_object_namespaceFn());
var toObject = (to_object_namespaceFn());
var lengthOfArrayLike = (length_of_array_like_namespaceFn());
var arraySpeciesCreate = (array_species_create_namespaceFn());
var createProperty = (create_property_namespaceFn());

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var resIndex = 0;
    var target = IS_MAP ? arraySpeciesCreate($this, length) : IS_FILTER || IS_FILTER_REJECT ? arraySpeciesCreate($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) createProperty(target, index, result);    // map
        else if (result) switch (TYPE) {
          case 3: return true;                                // some
          case 5: return value;                               // find
          case 6: return index;                               // findIndex
          case 2: createProperty(target, resIndex++, value);  // filter
        } else switch (TYPE) {
          case 4: return false;                               // every
          case 7: createProperty(target, resIndex++, value);  // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  jJ: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  Tj: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  pb: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  zN: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  Si: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  SL: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};

});

// MODULE: ./node_modules/core-js/internals/array-method-has-species-support.js
var array_method_has_species_support_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var fails = (fails_namespaceFn());
var wellKnownSymbol = (well_known_symbol_namespaceFn());
var V8_VERSION = (environment_v8_version_namespaceFn());

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

});

// MODULE: ./node_modules/core-js/internals/array-method-is-strict.js
var array_method_is_strict_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var fails = (fails_namespaceFn());

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

});

// MODULE: ./node_modules/core-js/internals/array-reduce.js
var array_reduce_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var aCallable = (a_callable_namespaceFn());
var toObject = (to_object_namespaceFn());
var IndexedObject = (indexed_object_namespaceFn());
var lengthOfArrayLike = (length_of_array_like_namespaceFn());

var $TypeError = TypeError;

var REDUCE_EMPTY = 'Reduce of empty array with no initial value';

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    aCallable(callbackfn);
    if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError(REDUCE_EMPTY);
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  k: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

});

// MODULE: ./node_modules/core-js/internals/array-set-length.js
var array_set_length_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var DESCRIPTORS = (descriptors_namespaceFn());
var isArray = (is_array_namespaceFn());

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};

});

// MODULE: ./node_modules/core-js/internals/array-slice.js
var array_slice_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_namespaceFn());

module.exports = uncurryThis([].slice);

});

// MODULE: ./node_modules/core-js/internals/array-sort.js
var array_sort_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var arraySlice = (array_slice_namespaceFn());

var floor = Math.floor;

var sort = function (array, comparefn) {
  var length = array.length;

  if (length < 8) {
    // insertion sort
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    }
  } else {
    // merge sort
    var middle = floor(length / 2);
    var left = sort(arraySlice(array, 0, middle), comparefn);
    var right = sort(arraySlice(array, middle), comparefn);
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = (lindex < llength && rindex < rlength)
        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
        : lindex < llength ? left[lindex++] : right[rindex++];
    }
  }

  return array;
};

module.exports = sort;

});

// MODULE: ./node_modules/core-js/internals/array-species-constructor.js
var array_species_constructor_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var isArray = (is_array_namespaceFn());
var isConstructor = (is_constructor_namespaceFn());
var isObject = (is_object_namespaceFn());
var wellKnownSymbol = (well_known_symbol_namespaceFn());

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};

});

// MODULE: ./node_modules/core-js/internals/array-species-create.js
var array_species_create_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var arraySpeciesConstructor = (array_species_constructor_namespaceFn());

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

});

// MODULE: ./node_modules/core-js/internals/call-with-safe-iteration-closing.js
var call_with_safe_iteration_closing_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var anObject = (an_object_namespaceFn());
var iteratorClose = (iterator_close_namespaceFn());

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};

});

// MODULE: ./node_modules/core-js/internals/classof-raw.js
var classof_raw_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_namespaceFn());

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};

});

// MODULE: ./node_modules/core-js/internals/classof.js
var classof_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var TO_STRING_TAG_SUPPORT = (to_string_tag_support_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var classofRaw = (classof_raw_namespaceFn());
var wellKnownSymbol = (well_known_symbol_namespaceFn());

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

});

// MODULE: ./node_modules/core-js/internals/copy-constructor-properties.js
var copy_constructor_properties_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var hasOwn = (has_own_property_namespaceFn());
var ownKeys = (own_keys_namespaceFn());
var getOwnPropertyDescriptorModule = (object_get_own_property_descriptor_namespaceFn());
var definePropertyModule = (object_define_property_namespaceFn());

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

});

// MODULE: ./node_modules/core-js/internals/correct-prototype-getter.js
var correct_prototype_getter_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var fails = (fails_namespaceFn());

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

});

// EXTERNAL MODULE: ./node_modules/core-js/internals/create-iter-result-object.js
var create_iter_result_object_namespaceFn = function() {
	return __tselect_require__(529);
};

// MODULE: ./node_modules/core-js/internals/create-non-enumerable-property.js
var create_non_enumerable_property_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var DESCRIPTORS = (descriptors_namespaceFn());
var definePropertyModule = (object_define_property_namespaceFn());
var createPropertyDescriptor = (create_property_descriptor_namespaceFn());

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

});

// MODULE: ./node_modules/core-js/internals/create-property-descriptor.js
var create_property_descriptor_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

});

// MODULE: ./node_modules/core-js/internals/create-property.js
var create_property_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var DESCRIPTORS = (descriptors_namespaceFn());
var definePropertyModule = (object_define_property_namespaceFn());
var createPropertyDescriptor = (create_property_descriptor_namespaceFn());

module.exports = function (object, key, value) {
  if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
  else object[key] = value;
};

});

// MODULE: ./node_modules/core-js/internals/define-built-in-accessor.js
var define_built_in_accessor_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var makeBuiltIn = (make_built_in_namespaceFn());
var defineProperty = (object_define_property_namespaceFn());

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};

});

// MODULE: ./node_modules/core-js/internals/define-built-in.js
var define_built_in_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var isCallable = (is_callable_namespaceFn());
var definePropertyModule = (object_define_property_namespaceFn());
var makeBuiltIn = (make_built_in_namespaceFn());
var defineGlobalProperty = (define_global_property_namespaceFn());

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

});

// MODULE: ./node_modules/core-js/internals/define-built-ins.js
var define_built_ins_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var defineBuiltIn = (define_built_in_namespaceFn());

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};

});

// MODULE: ./node_modules/core-js/internals/define-global-property.js
var define_global_property_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var globalThis = (global_this_namespaceFn());

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(globalThis, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    globalThis[key] = value;
  } return value;
};

});

// EXTERNAL MODULE: ./node_modules/core-js/internals/delete-property-or-throw.js
var delete_property_or_throw_namespaceFn = function() {
	return __tselect_require__(606);
};

// MODULE: ./node_modules/core-js/internals/descriptors.js
var descriptors_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var fails = (fails_namespaceFn());

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});

});

// MODULE: ./node_modules/core-js/internals/document-create-element.js
var document_create_element_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var globalThis = (global_this_namespaceFn());
var isObject = (is_object_namespaceFn());

var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

});

// EXTERNAL MODULE: ./node_modules/core-js/internals/does-not-exceed-safe-integer.js
var does_not_exceed_safe_integer_namespaceFn = function() {
	return __tselect_require__(837);
};

// EXTERNAL MODULE: ./node_modules/core-js/internals/dom-iterables.js
var dom_iterables_namespaceFn = function() {
	return __tselect_require__(400);
};

// MODULE: ./node_modules/core-js/internals/dom-token-list-prototype.js
var dom_token_list_prototype_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = (document_create_element_namespaceFn());

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;

});

// MODULE: ./node_modules/core-js/internals/enum-bug-keys.js
var enum_bug_keys_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

});

// MODULE: ./node_modules/core-js/internals/environment-ff-version.js
var environment_ff_version_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var userAgent = (environment_user_agent_namespaceFn());

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];

});

// MODULE: ./node_modules/core-js/internals/environment-is-ie-or-edge.js
var environment_is_ie_or_edge_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var UA = (environment_user_agent_namespaceFn());

module.exports = /MSIE|Trident/.test(UA);

});

// MODULE: ./node_modules/core-js/internals/environment-is-node.js
var environment_is_node_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var ENVIRONMENT = (environment_namespaceFn());

module.exports = ENVIRONMENT === 'NODE';

});

// MODULE: ./node_modules/core-js/internals/environment-user-agent.js
var environment_user_agent_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var globalThis = (global_this_namespaceFn());

var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;

module.exports = userAgent ? String(userAgent) : '';

});

// MODULE: ./node_modules/core-js/internals/environment-v8-version.js
var environment_v8_version_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var globalThis = (global_this_namespaceFn());
var userAgent = (environment_user_agent_namespaceFn());

var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;

});

// MODULE: ./node_modules/core-js/internals/environment-webkit-version.js
var environment_webkit_version_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var userAgent = (environment_user_agent_namespaceFn());

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];

});

// MODULE: ./node_modules/core-js/internals/environment.js
var environment_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

/* global Bun, Deno -- detection */
var globalThis = (global_this_namespaceFn());
var userAgent = (environment_user_agent_namespaceFn());
var classof = (classof_raw_namespaceFn());

var userAgentStartsWith = function (string) {
  return userAgent.slice(0, string.length) === string;
};

module.exports = (function () {
  if (userAgentStartsWith('Bun/')) return 'BUN';
  if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
  if (userAgentStartsWith('Deno/')) return 'DENO';
  if (userAgentStartsWith('Node.js/')) return 'NODE';
  if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
  if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
  if (classof(globalThis.process) === 'process') return 'NODE';
  if (globalThis.window && globalThis.document) return 'BROWSER';
  return 'REST';
})();

});

// MODULE: ./node_modules/core-js/internals/error-to-string.js
var error_to_string_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var DESCRIPTORS = (descriptors_namespaceFn());
var fails = (fails_namespaceFn());
var anObject = (an_object_namespaceFn());
var normalizeStringArgument = (normalize_string_argument_namespaceFn());

var nativeErrorToString = Error.prototype.toString;

var INCORRECT_TO_STRING = fails(function () {
  if (DESCRIPTORS) {
    // Chrome 32- incorrectly call accessor
    // eslint-disable-next-line es/no-object-create, es/no-object-defineproperty -- safe
    var object = Object.create(Object.defineProperty({}, 'name', { get: function () {
      return this === object;
    } }));
    if (nativeErrorToString.call(object) !== 'true') return true;
  }
  // FF10- does not properly handle non-strings
  return nativeErrorToString.call({ message: 1, name: 2 }) !== '2: 1'
    // IE8 does not properly handle defaults
    || nativeErrorToString.call({}) !== 'Error';
});

module.exports = INCORRECT_TO_STRING ? function toString() {
  var O = anObject(this);
  var name = normalizeStringArgument(O.name, 'Error');
  var message = normalizeStringArgument(O.message);
  return !name ? message : !message ? name : name + ': ' + message;
} : nativeErrorToString;

});

// MODULE: ./node_modules/core-js/internals/export.js
var export_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var globalThis = (global_this_namespaceFn());
var getOwnPropertyDescriptor = (object_get_own_property_descriptor_namespaceFn().f);
var createNonEnumerableProperty = (create_non_enumerable_property_namespaceFn());
var defineBuiltIn = (define_built_in_namespaceFn());
var defineGlobalProperty = (define_global_property_namespaceFn());
var copyConstructorProperties = (copy_constructor_properties_namespaceFn());
var isForced = (is_forced_namespaceFn());

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = globalThis;
  } else if (STATIC) {
    target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = globalThis[TARGET] && globalThis[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};

});

// MODULE: ./node_modules/core-js/internals/fails.js
var fails_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

});

// MODULE: ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js
var fix_regexp_well_known_symbol_logic_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

// TODO: Remove from `core-js@4` since it's moved to entry points
(es_regexp_exec_namespaceFn());
var call = (function_call_namespaceFn());
var defineBuiltIn = (define_built_in_namespaceFn());
var regexpExec = (regexp_exec_namespaceFn());
var fails = (fails_namespaceFn());
var wellKnownSymbol = (well_known_symbol_namespaceFn());
var createNonEnumerableProperty = (create_non_enumerable_property_namespaceFn());

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegExp methods
    var O = {};
    // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      var constructor = {};
      // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
      constructor[SPECIES] = function () { return re; };
      re = { constructor: constructor, flags: '' };
      // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: call(nativeRegExpMethod, regexp, str, arg2) };
        }
        return { done: true, value: call(nativeMethod, str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

});

// MODULE: ./node_modules/core-js/internals/flatten-into-array.js
var flatten_into_array_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var isArray = (is_array_namespaceFn());
var lengthOfArrayLike = (length_of_array_like_namespaceFn());
var doesNotExceedSafeInteger = (does_not_exceed_safe_integer_namespaceFn());
var bind = (function_bind_context_namespaceFn());
var createProperty = (create_property_namespaceFn());

// `FlattenIntoArray` abstract operation
// https://tc39.es/ecma262/#sec-flattenintoarray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike(element);
        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        doesNotExceedSafeInteger(targetIndex + 1);
        createProperty(target, targetIndex, element);
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;

});

// MODULE: ./node_modules/core-js/internals/function-apply.js
var function_apply_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var NATIVE_BIND = (function_bind_native_namespaceFn());

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});

});

// MODULE: ./node_modules/core-js/internals/function-bind-context.js
var function_bind_context_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_clause_namespaceFn());
var aCallable = (a_callable_namespaceFn());
var NATIVE_BIND = (function_bind_native_namespaceFn());

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

});

// MODULE: ./node_modules/core-js/internals/function-bind-native.js
var function_bind_native_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var fails = (fails_namespaceFn());

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () { /* empty */ }.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

});

// MODULE: ./node_modules/core-js/internals/function-call.js
var function_call_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var NATIVE_BIND = (function_bind_native_namespaceFn());

var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};

});

// MODULE: ./node_modules/core-js/internals/function-name.js
var function_name_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var DESCRIPTORS = (descriptors_namespaceFn());
var hasOwn = (has_own_property_namespaceFn());

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && function something() { /* empty */ }.name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  zE: PROPER,
  i2: CONFIGURABLE
};

});

// MODULE: ./node_modules/core-js/internals/function-uncurry-this-accessor.js
var function_uncurry_this_accessor_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_namespaceFn());
var aCallable = (a_callable_namespaceFn());

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

});

// MODULE: ./node_modules/core-js/internals/function-uncurry-this-clause.js
var function_uncurry_this_clause_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var classofRaw = (classof_raw_namespaceFn());
var uncurryThis = (function_uncurry_this_namespaceFn());

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};

});

// MODULE: ./node_modules/core-js/internals/function-uncurry-this.js
var function_uncurry_this_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var NATIVE_BIND = (function_bind_native_namespaceFn());

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};

});

// MODULE: ./node_modules/core-js/internals/get-built-in.js
var get_built_in_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var globalThis = (global_this_namespaceFn());
var isCallable = (is_callable_namespaceFn());

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};

});

// EXTERNAL MODULE: ./node_modules/core-js/internals/get-iterator-direct.js
var get_iterator_direct_namespaceFn = function() {
	return __tselect_require__(767);
};

// MODULE: ./node_modules/core-js/internals/get-iterator-internal.js
var get_iterator_internal_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var call = (function_call_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var anObject = (an_object_namespaceFn());
var tryToString = (try_to_string_namespaceFn());
var getIteratorMethod = (get_iterator_method_internal_namespaceFn());

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (isCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};

});

// MODULE: ./node_modules/core-js/internals/get-iterator-method-internal.js
var get_iterator_method_internal_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var classof = (classof_raw_namespaceFn());
var isNullOrUndefined = (is_null_or_undefined_namespaceFn());
var getMethod = (get_method_namespaceFn());
var wellKnownSymbol = (well_known_symbol_namespaceFn());

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || (classof(it) === 'Arguments' ? ArrayPrototype[ITERATOR] : undefined);
};

});

// MODULE: ./node_modules/core-js/internals/get-method.js
var get_method_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var aCallable = (a_callable_namespaceFn());
var isNullOrUndefined = (is_null_or_undefined_namespaceFn());

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};

});

// MODULE: ./node_modules/core-js/internals/get-substitution.js
var get_substitution_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_namespaceFn());
var toObject = (to_object_namespaceFn());

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

});

// MODULE: ./node_modules/core-js/internals/global-this.js
var global_this_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __tselect_require__.g == 'object' && __tselect_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

});

// MODULE: ./node_modules/core-js/internals/has-own-property.js
var has_own_property_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_namespaceFn());
var toObject = (to_object_namespaceFn());

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

});

// MODULE: ./node_modules/core-js/internals/hidden-keys.js
var hidden_keys_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

module.exports = {};

});

// MODULE: ./node_modules/core-js/internals/html.js
var html_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var getBuiltIn = (get_built_in_namespaceFn());

module.exports = getBuiltIn('document', 'documentElement');

});

// MODULE: ./node_modules/core-js/internals/ie8-dom-define.js
var ie8_dom_define_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var DESCRIPTORS = (descriptors_namespaceFn());
var fails = (fails_namespaceFn());
var createElement = (document_create_element_namespaceFn());

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});

});

// MODULE: ./node_modules/core-js/internals/indexed-object.js
var indexed_object_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_namespaceFn());
var fails = (fails_namespaceFn());
var classof = (classof_raw_namespaceFn());

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;

});

// MODULE: ./node_modules/core-js/internals/inherit-if-required.js
var inherit_if_required_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var isCallable = (is_callable_namespaceFn());
var isObject = (is_object_namespaceFn());
var setPrototypeOf = (object_set_prototype_of_namespaceFn());

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

});

// MODULE: ./node_modules/core-js/internals/inspect-source.js
var inspect_source_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var store = (shared_store_namespaceFn());

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;

});

// MODULE: ./node_modules/core-js/internals/internal-state.js
var internal_state_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var NATIVE_WEAK_MAP = (weak_map_basic_detection_namespaceFn());
var globalThis = (global_this_namespaceFn());
var isObject = (is_object_namespaceFn());
var createNonEnumerableProperty = (create_non_enumerable_property_namespaceFn());
var hasOwn = (has_own_property_namespaceFn());
var shared = (shared_store_namespaceFn());
var sharedKey = (shared_key_namespaceFn());
var hiddenKeys = (hidden_keys_namespaceFn());

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

});

// MODULE: ./node_modules/core-js/internals/is-array-iterator-method.js
var is_array_iterator_method_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var wellKnownSymbol = (well_known_symbol_namespaceFn());
var Iterators = (iterators_namespaceFn());

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

});

// MODULE: ./node_modules/core-js/internals/is-array.js
var is_array_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var classof = (classof_raw_namespaceFn());

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};

});

// MODULE: ./node_modules/core-js/internals/is-callable.js
var is_callable_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};

});

// MODULE: ./node_modules/core-js/internals/is-constructor.js
var is_constructor_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_namespaceFn());
var fails = (fails_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var classof = (classof_namespaceFn());
var getBuiltIn = (get_built_in_namespaceFn());
var inspectSource = (inspect_source_namespaceFn());

var noop = function () { /* empty */ };
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, [], argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

});

// MODULE: ./node_modules/core-js/internals/is-forced.js
var is_forced_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var fails = (fails_namespaceFn());
var isCallable = (is_callable_namespaceFn());

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;

});

// EXTERNAL MODULE: ./node_modules/core-js/internals/is-null-or-undefined.js
var is_null_or_undefined_namespaceFn = function() {
	return __tselect_require__(117);
};

// MODULE: ./node_modules/core-js/internals/is-object.js
var is_object_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var isCallable = (is_callable_namespaceFn());

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};

});

// MODULE: ./node_modules/core-js/internals/is-possible-prototype.js
var is_possible_prototype_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var isObject = (is_object_namespaceFn());

module.exports = function (argument) {
  return isObject(argument) || argument === null;
};

});

// MODULE: ./node_modules/core-js/internals/is-pure.js
var is_pure_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

module.exports = false;

});

// MODULE: ./node_modules/core-js/internals/is-raw-json.js
var is_raw_json_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var isObject = (is_object_namespaceFn());
var getInternalState = (internal_state_namespaceFn().get);

module.exports = function isRawJSON(O) {
  if (!isObject(O)) return false;
  var state = getInternalState(O);
  return !!state && state.type === 'RawJSON';
};

});

// MODULE: ./node_modules/core-js/internals/is-symbol.js
var is_symbol_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var getBuiltIn = (get_built_in_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var isPrototypeOf = (object_is_prototype_of_namespaceFn());
var USE_SYMBOL_AS_UID = (use_symbol_as_uid_namespaceFn());

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

});

// MODULE: ./node_modules/core-js/internals/iterate.js
var iterate_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var bind = (function_bind_context_namespaceFn());
var call = (function_call_namespaceFn());
var anObject = (an_object_namespaceFn());
var tryToString = (try_to_string_namespaceFn());
var isArrayIteratorMethod = (is_array_iterator_method_namespaceFn());
var lengthOfArrayLike = (length_of_array_like_namespaceFn());
var isPrototypeOf = (object_is_prototype_of_namespaceFn());
var getIterator = (get_iterator_internal_namespaceFn());
var getIteratorMethod = (get_iterator_method_internal_namespaceFn());
var iteratorClose = (iterator_close_namespaceFn());

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    var $iterator = iterator;
    iterator = undefined;
    if ($iterator) iteratorClose($iterator, 'normal');
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    // `IteratorValue` errors should propagate without closing the iterator
    var value = step.value;
    try {
      result = callFn(value);
    } catch (error) {
      if (iterator) iteratorClose(iterator, 'throw', error);
      else throw error;
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};

});

// EXTERNAL MODULE: ./node_modules/core-js/internals/iterator-cleanup-state.js
var iterator_cleanup_state_namespaceFn = function() {
	return __tselect_require__(859);
};

// MODULE: ./node_modules/core-js/internals/iterator-close-all.js
var iterator_close_all_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var iteratorClose = (iterator_close_namespaceFn());

module.exports = function (iters, kind, value) {
  for (var i = iters.length - 1; i >= 0; i--) {
    if (iters[i] === undefined) continue;
    try {
      value = iteratorClose(iters[i].iterator, kind, value);
    } catch (error) {
      kind = 'throw';
      value = error;
    }
  }
  if (kind === 'throw') throw value;
  return value;
};

});

// MODULE: ./node_modules/core-js/internals/iterator-close.js
var iterator_close_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var call = (function_call_namespaceFn());
var anObject = (an_object_namespaceFn());
var getMethod = (get_method_namespaceFn());

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};

});

// MODULE: ./node_modules/core-js/internals/iterator-create-proxy.js
var iterator_create_proxy_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var call = (function_call_namespaceFn());
var create = (object_create_namespaceFn());
var createNonEnumerableProperty = (create_non_enumerable_property_namespaceFn());
var defineBuiltIns = (define_built_ins_namespaceFn());
var wellKnownSymbol = (well_known_symbol_namespaceFn());
var InternalStateModule = (internal_state_namespaceFn());
var getMethod = (get_method_namespaceFn());
var IteratorPrototype = (iterators_core_namespaceFn().H);
var createIterResultObject = (create_iter_result_object_namespaceFn());
var iteratorClose = (iterator_close_namespaceFn());
var iteratorCloseAll = (iterator_close_all_namespaceFn());
var cleanupState = (iterator_cleanup_state_namespaceFn());

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ITERATOR_HELPER = 'IteratorHelper';
var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
var NORMAL = 'normal';
var THROW = 'throw';
var setInternalState = InternalStateModule.set;

var createIteratorProxyPrototype = function (IS_ITERATOR) {
  var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

  return defineBuiltIns(create(IteratorPrototype), {
    next: function next() {
      var state = getInternalState(this);
      // for simplification:
      //   for `%WrapForValidIteratorPrototype%.next` or with `state.returnHandlerResult` our `nextHandler` returns `IterResultObject`
      //   for `%IteratorHelperPrototype%.next` - just a value
      if (IS_ITERATOR) return state.nextHandler();
      if (state.done) return createIterResultObject(undefined, true);
      try {
        var result = state.nextHandler();
        if (state.done) cleanupState(state);
        return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
      } catch (error) {
        state.done = true;
        cleanupState(state);
        throw error;
      }
    },
    'return': function () {
      var state = getInternalState(this);
      var iterator = state.iterator;
      var inner = state.inner;
      var openIters = state.openIters;
      var done = state.done;
      state.done = true;
      if (IS_ITERATOR) {
        var returnMethod = getMethod(iterator, 'return');
        return returnMethod ? call(returnMethod, iterator) : createIterResultObject(undefined, true);
      }
      cleanupState(state);
      if (done) return createIterResultObject(undefined, true);
      if (inner) try {
        iteratorClose(inner.iterator, NORMAL);
      } catch (error) {
        return iteratorClose(iterator, THROW, error);
      }
      if (openIters) try {
        iteratorCloseAll(openIters, NORMAL);
      } catch (error) {
        if (iterator) return iteratorClose(iterator, THROW, error);
        throw error;
      }
      if (iterator) iteratorClose(iterator, NORMAL);
      return createIterResultObject(undefined, true);
    }
  });
};

var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
var IteratorHelperPrototype = createIteratorProxyPrototype(false);

createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');

module.exports = function (nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
  var IteratorProxy = function Iterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
    state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState(this, state);
  };

  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

  return IteratorProxy;
};

});

// EXTERNAL MODULE: ./node_modules/core-js/internals/iterator-helper-throws-on-invalid-iterator.js
var iterator_helper_throws_on_invalid_iterator_namespaceFn = function() {
	return __tselect_require__(684);
};

// MODULE: ./node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js
var iterator_helper_without_closing_on_early_error_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var globalThis = (global_this_namespaceFn());

// https://github.com/tc39/ecma262/pull/3467
module.exports = function (METHOD_NAME, ExpectedError) {
  var Iterator = globalThis.Iterator;
  var IteratorPrototype = Iterator && Iterator.prototype;
  var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];

  var CLOSED = false;

  if (method) try {
    method.call({
      next: function () { return { done: true }; },
      'return': function () { CLOSED = true; }
    }, -1);
  } catch (error) {
    // https://bugs.webkit.org/show_bug.cgi?id=291195
    if (!(error instanceof ExpectedError)) CLOSED = false;
  }

  if (!CLOSED) return method;
};

});

// MODULE: ./node_modules/core-js/internals/iterators-core.js
var iterators_core_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var fails = (fails_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var isObject = (is_object_namespaceFn());
var create = (object_create_namespaceFn());
var getPrototypeOf = (object_get_prototype_of_namespaceFn());
var defineBuiltIn = (define_built_in_namespaceFn());
var wellKnownSymbol = (well_known_symbol_namespaceFn());
var IS_PURE = (is_pure_namespaceFn());

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  H: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

});

// EXTERNAL MODULE: ./node_modules/core-js/internals/iterators.js
var iterators_namespaceFn = function() {
	return __tselect_require__(269);
};

// MODULE: ./node_modules/core-js/internals/length-of-array-like.js
var length_of_array_like_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var toLength = (to_length_namespaceFn());

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};

});

// MODULE: ./node_modules/core-js/internals/make-built-in.js
var make_built_in_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_namespaceFn());
var fails = (fails_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var hasOwn = (has_own_property_namespaceFn());
var DESCRIPTORS = (descriptors_namespaceFn());
var CONFIGURABLE_FUNCTION_NAME = (function_name_namespaceFn().i2);
var inspectSource = (inspect_source_namespaceFn());
var InternalStateModule = (internal_state_namespaceFn());

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');

});

// EXTERNAL MODULE: ./node_modules/core-js/internals/math-trunc.js
var math_trunc_namespaceFn = function() {
	return __tselect_require__(741);
};

// MODULE: ./node_modules/core-js/internals/native-raw-json.js
var native_raw_json_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

/* eslint-disable es/no-json -- safe */
var fails = (fails_namespaceFn());

module.exports = !fails(function () {
  var unsafeInt = '9007199254740993';
  // eslint-disable-next-line es/no-json-rawjson -- feature detection
  var raw = JSON.rawJSON(unsafeInt);
  // eslint-disable-next-line es/no-json-israwjson -- feature detection
  return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
});

});

// MODULE: ./node_modules/core-js/internals/normalize-string-argument.js
var normalize_string_argument_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var toString = (to_string_namespaceFn());

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};

});

// MODULE: ./node_modules/core-js/internals/object-create.js
var object_create_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

/* global ActiveXObject -- old IE, WSH */
var anObject = (an_object_namespaceFn());
var definePropertiesModule = (object_define_properties_namespaceFn());
var enumBugKeys = (enum_bug_keys_namespaceFn());
var hiddenKeys = (hidden_keys_namespaceFn());
var html = (html_namespaceFn());
var documentCreateElement = (document_create_element_namespaceFn());
var sharedKey = (shared_key_namespaceFn());

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  // eslint-disable-next-line no-useless-assignment -- avoid memory leak
  activeXDocument = null;
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

});

// MODULE: ./node_modules/core-js/internals/object-define-properties.js
var object_define_properties_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var DESCRIPTORS = (descriptors_namespaceFn());
var V8_PROTOTYPE_DEFINE_BUG = (v8_prototype_define_bug_namespaceFn());
var definePropertyModule = (object_define_property_namespaceFn());
var anObject = (an_object_namespaceFn());
var toIndexedObject = (to_indexed_object_namespaceFn());
var objectKeys = (object_keys_namespaceFn());

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};

});

// MODULE: ./node_modules/core-js/internals/object-define-property.js
var object_define_property_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var DESCRIPTORS = (descriptors_namespaceFn());
var IE8_DOM_DEFINE = (ie8_dom_define_namespaceFn());
var V8_PROTOTYPE_DEFINE_BUG = (v8_prototype_define_bug_namespaceFn());
var anObject = (an_object_namespaceFn());
var toPropertyKey = (to_property_key_namespaceFn());

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

});

// MODULE: ./node_modules/core-js/internals/object-get-own-property-descriptor.js
var object_get_own_property_descriptor_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var DESCRIPTORS = (descriptors_namespaceFn());
var call = (function_call_namespaceFn());
var propertyIsEnumerableModule = (object_property_is_enumerable_namespaceFn());
var createPropertyDescriptor = (create_property_descriptor_namespaceFn());
var toIndexedObject = (to_indexed_object_namespaceFn());
var toPropertyKey = (to_property_key_namespaceFn());
var hasOwn = (has_own_property_namespaceFn());
var IE8_DOM_DEFINE = (ie8_dom_define_namespaceFn());

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

});

// MODULE: ./node_modules/core-js/internals/object-get-own-property-names.js
var object_get_own_property_names_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var internalObjectKeys = (object_keys_internal_namespaceFn());
var enumBugKeys = (enum_bug_keys_namespaceFn());

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

});

// EXTERNAL MODULE: ./node_modules/core-js/internals/object-get-own-property-symbols.js
var object_get_own_property_symbols_namespaceFn = function() {
	return __tselect_require__(717);
};

// MODULE: ./node_modules/core-js/internals/object-get-prototype-of.js
var object_get_prototype_of_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var hasOwn = (has_own_property_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var toObject = (to_object_namespaceFn());
var sharedKey = (shared_key_namespaceFn());
var CORRECT_PROTOTYPE_GETTER = (correct_prototype_getter_namespaceFn());

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};

});

// MODULE: ./node_modules/core-js/internals/object-is-prototype-of.js
var object_is_prototype_of_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_namespaceFn());

module.exports = uncurryThis({}.isPrototypeOf);

});

// MODULE: ./node_modules/core-js/internals/object-keys-internal.js
var object_keys_internal_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_namespaceFn());
var hasOwn = (has_own_property_namespaceFn());
var toIndexedObject = (to_indexed_object_namespaceFn());
var indexOf = (array_includes_namespaceFn().q);
var hiddenKeys = (hidden_keys_namespaceFn());

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};

});

// MODULE: ./node_modules/core-js/internals/object-keys.js
var object_keys_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var internalObjectKeys = (object_keys_internal_namespaceFn());
var enumBugKeys = (enum_bug_keys_namespaceFn());

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

});

// MODULE: ./node_modules/core-js/internals/object-property-is-enumerable.js
var object_property_is_enumerable_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

});

// MODULE: ./node_modules/core-js/internals/object-set-prototype-of.js
var object_set_prototype_of_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = (function_uncurry_this_accessor_namespaceFn());
var isObject = (is_object_namespaceFn());
var requireObjectCoercible = (require_object_coercible_namespaceFn());
var aPossiblePrototype = (a_possible_prototype_namespaceFn());

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    requireObjectCoercible(O);
    aPossiblePrototype(proto);
    if (!isObject(O)) return O;
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

});

// MODULE: ./node_modules/core-js/internals/object-to-string.js
var object_to_string_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var TO_STRING_TAG_SUPPORT = (to_string_tag_support_namespaceFn());
var classof = (classof_namespaceFn());

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

});

// MODULE: ./node_modules/core-js/internals/ordinary-to-primitive.js
var ordinary_to_primitive_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var call = (function_call_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var isObject = (is_object_namespaceFn());

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};

});

// MODULE: ./node_modules/core-js/internals/own-keys.js
var own_keys_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var getBuiltIn = (get_built_in_namespaceFn());
var uncurryThis = (function_uncurry_this_namespaceFn());
var getOwnPropertyNamesModule = (object_get_own_property_names_namespaceFn());
var getOwnPropertySymbolsModule = (object_get_own_property_symbols_namespaceFn());
var anObject = (an_object_namespaceFn());

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

});

// MODULE: ./node_modules/core-js/internals/parse-json-string.js
var parse_json_string_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_namespaceFn());
var hasOwn = (has_own_property_namespaceFn());

var $SyntaxError = SyntaxError;
var $parseInt = parseInt;
var fromCharCode = String.fromCharCode;
var at = uncurryThis(''.charAt);
var slice = uncurryThis(''.slice);
var exec = uncurryThis(/./.exec);

var codePoints = {
  '\\"': '"',
  '\\\\': '\\',
  '\\/': '/',
  '\\b': '\b',
  '\\f': '\f',
  '\\n': '\n',
  '\\r': '\r',
  '\\t': '\t'
};

var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
// eslint-disable-next-line regexp/no-control-character -- safe
var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;

module.exports = function (source, i) {
  var unterminated = true;
  var value = '';
  while (i < source.length) {
    var chr = at(source, i);
    if (chr === '\\') {
      var twoChars = slice(source, i, i + 2);
      if (hasOwn(codePoints, twoChars)) {
        value += codePoints[twoChars];
        i += 2;
      } else if (twoChars === '\\u') {
        i += 2;
        var fourHexDigits = slice(source, i, i + 4);
        if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError('Bad Unicode escape at: ' + i);
        value += fromCharCode($parseInt(fourHexDigits, 16));
        i += 4;
      } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
    } else if (chr === '"') {
      unterminated = false;
      i++;
      break;
    } else {
      if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError('Bad control character in string literal at: ' + i);
      value += chr;
      i++;
    }
  }
  if (unterminated) throw new $SyntaxError('Unterminated string at: ' + i);
  return { value: value, end: i };
};

});

// MODULE: ./node_modules/core-js/internals/path.js
var path_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var globalThis = (global_this_namespaceFn());

module.exports = globalThis;

});

// MODULE: ./node_modules/core-js/internals/regexp-exec-abstract.js
var regexp_exec_abstract_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var call = (function_call_namespaceFn());
var anObject = (an_object_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var classof = (classof_raw_namespaceFn());
var regexpExec = (regexp_exec_namespaceFn());

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw new $TypeError('RegExp#exec called on incompatible receiver');
};

});

// MODULE: ./node_modules/core-js/internals/regexp-exec.js
var regexp_exec_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = (function_call_namespaceFn());
var uncurryThis = (function_uncurry_this_namespaceFn());
var toString = (to_string_namespaceFn());
var regexpFlags = (regexp_flags_namespaceFn());
var stickyHelpers = (regexp_sticky_helpers_namespaceFn());
var shared = (shared_namespaceFn());
var create = (object_create_namespaceFn());
var getInternalState = (internal_state_namespaceFn().get);
var UNSUPPORTED_DOT_ALL = (regexp_unsupported_dot_all_namespaceFn());
var UNSUPPORTED_NCG = (regexp_unsupported_ncg_namespaceFn());

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

var setGroups = function (re, groups) {
  var object = re.groups = create(null);
  for (var i = 0; i < groups.length; i++) {
    var group = groups[i];
    object[group[0]] = re[group[1]];
  }
};

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;

      if (result && state.groups) setGroups(result, state.groups);

      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      var prevChar = re.lastIndex > 0 && charAt(str, re.lastIndex - 1);
      if (re.lastIndex > 0 &&
        (!re.multiline || re.multiline && prevChar !== '\n' && prevChar !== '\r' && prevChar !== '\u2028' && prevChar !== '\u2029')) {
        source = '(?: (?:' + source + '))';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    var match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = str;
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (var i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) setGroups(match, groups);

    return match;
  };
}

module.exports = patchedExec;

});

// MODULE: ./node_modules/core-js/internals/regexp-flags-detection.js
var regexp_flags_detection_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var globalThis = (global_this_namespaceFn());
var fails = (fails_namespaceFn());

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = globalThis.RegExp;

var FLAGS_GETTER_IS_CORRECT = !fails(function () {
  var INDICES_SUPPORT = true;
  try {
    RegExp('.', 'd');
  } catch (error) {
    INDICES_SUPPORT = false;
  }

  var O = {};
  // modern V8 bug
  var calls = '';
  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  var addGetter = function (key, chr) {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(O, key, { get: function () {
      calls += chr;
      return true;
    } });
  };

  var pairs = {
    dotAll: 's',
    global: 'g',
    ignoreCase: 'i',
    multiline: 'm',
    sticky: 'y'
  };

  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  for (var key in pairs) addGetter(key, pairs[key]);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var result = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(O);

  return result !== expected || calls !== expected;
});

module.exports = { correct: FLAGS_GETTER_IS_CORRECT };

});

// MODULE: ./node_modules/core-js/internals/regexp-flags.js
var regexp_flags_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var anObject = (an_object_namespaceFn());

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

});

// MODULE: ./node_modules/core-js/internals/regexp-get-flags.js
var regexp_get_flags_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var call = (function_call_namespaceFn());
var hasOwn = (has_own_property_namespaceFn());
var isPrototypeOf = (object_is_prototype_of_namespaceFn());
var regExpFlagsDetection = (regexp_flags_detection_namespaceFn());
var regExpFlagsGetterImplementation = (regexp_flags_namespaceFn());

var RegExpPrototype = RegExp.prototype;

module.exports = regExpFlagsDetection.correct ? function (it) {
  return it.flags;
} : function (it) {
  return (!regExpFlagsDetection.correct && isPrototypeOf(RegExpPrototype, it) && !hasOwn(it, 'flags'))
    ? call(regExpFlagsGetterImplementation, it)
    : it.flags;
};

});

// MODULE: ./node_modules/core-js/internals/regexp-sticky-helpers.js
var regexp_sticky_helpers_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var fails = (fails_namespaceFn());
var globalThis = (global_this_namespaceFn());

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = globalThis.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') !== null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') !== null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};

});

// MODULE: ./node_modules/core-js/internals/regexp-unsupported-dot-all.js
var regexp_unsupported_dot_all_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var fails = (fails_namespaceFn());
var globalThis = (global_this_namespaceFn());

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = globalThis.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.test('\n') && re.flags === 's');
});

});

// MODULE: ./node_modules/core-js/internals/regexp-unsupported-ncg.js
var regexp_unsupported_ncg_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var fails = (fails_namespaceFn());
var globalThis = (global_this_namespaceFn());

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = globalThis.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

});

// MODULE: ./node_modules/core-js/internals/require-object-coercible.js
var require_object_coercible_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var isNullOrUndefined = (is_null_or_undefined_namespaceFn());

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};

});

// MODULE: ./node_modules/core-js/internals/shared-key.js
var shared_key_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var shared = (shared_namespaceFn());
var uid = (uid_namespaceFn());

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

});

// MODULE: ./node_modules/core-js/internals/shared-store.js
var shared_store_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var IS_PURE = (is_pure_namespaceFn());
var globalThis = (global_this_namespaceFn());
var defineGlobalProperty = (define_global_property_namespaceFn());

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.50.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.',
  license: 'https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

});

// MODULE: ./node_modules/core-js/internals/shared.js
var shared_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var store = (shared_store_namespaceFn());
// eslint-disable-next-line es/no-object-create -- safe
var create = Object.create || Object;

module.exports = function (key, value) {
  return store[key] || (store[key] = value || create(null));
};

});

// MODULE: ./node_modules/core-js/internals/string-multibyte.js
var string_multibyte_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_namespaceFn());
var toIntegerOrInfinity = (to_integer_or_infinity_namespaceFn());
var toString = (to_string_namespaceFn());
var requireObjectCoercible = (require_object_coercible_namespaceFn());

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  o: createMethod(true)
};

});

// MODULE: ./node_modules/core-js/internals/string-trim-forced.js
var string_trim_forced_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var PROPER_FUNCTION_NAME = (function_name_namespaceFn().zE);
var fails = (fails_namespaceFn());
var whitespaces = (whitespaces_namespaceFn());

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};

});

// MODULE: ./node_modules/core-js/internals/string-trim.js
var string_trim_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_namespaceFn());
var requireObjectCoercible = (require_object_coercible_namespaceFn());
var toString = (to_string_namespaceFn());
var whitespaces = (whitespaces_namespaceFn());

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  Bq: createMethod(3)
};

});

// MODULE: ./node_modules/core-js/internals/symbol-constructor-detection.js
var symbol_constructor_detection_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = (environment_v8_version_namespaceFn());
var fails = (fails_namespaceFn());
var globalThis = (global_this_namespaceFn());

var $String = globalThis.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

});

// MODULE: ./node_modules/core-js/internals/this-number-value.js
var this_number_value_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_namespaceFn());

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.1.valueOf);

});

// MODULE: ./node_modules/core-js/internals/to-absolute-index.js
var to_absolute_index_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var toIntegerOrInfinity = (to_integer_or_infinity_namespaceFn());

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

});

// MODULE: ./node_modules/core-js/internals/to-indexed-object.js
var to_indexed_object_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = (indexed_object_namespaceFn());
var requireObjectCoercible = (require_object_coercible_namespaceFn());

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

});

// MODULE: ./node_modules/core-js/internals/to-integer-or-infinity.js
var to_integer_or_infinity_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var trunc = (math_trunc_namespaceFn());

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

});

// MODULE: ./node_modules/core-js/internals/to-length.js
var to_length_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var toIntegerOrInfinity = (to_integer_or_infinity_namespaceFn());

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

});

// MODULE: ./node_modules/core-js/internals/to-object.js
var to_object_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var requireObjectCoercible = (require_object_coercible_namespaceFn());

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};

});

// MODULE: ./node_modules/core-js/internals/to-primitive.js
var to_primitive_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var call = (function_call_namespaceFn());
var isObject = (is_object_namespaceFn());
var isSymbol = (is_symbol_namespaceFn());
var getMethod = (get_method_namespaceFn());
var ordinaryToPrimitive = (ordinary_to_primitive_namespaceFn());
var wellKnownSymbol = (well_known_symbol_namespaceFn());

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

});

// MODULE: ./node_modules/core-js/internals/to-property-key.js
var to_property_key_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var toPrimitive = (to_primitive_namespaceFn());
var isSymbol = (is_symbol_namespaceFn());

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

});

// MODULE: ./node_modules/core-js/internals/to-string-tag-support.js
var to_string_tag_support_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var wellKnownSymbol = (well_known_symbol_namespaceFn());

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
// eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';

});

// MODULE: ./node_modules/core-js/internals/to-string.js
var to_string_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var classof = (classof_namespaceFn());

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

});

// EXTERNAL MODULE: ./node_modules/core-js/internals/try-to-string.js
var try_to_string_namespaceFn = function() {
	return __tselect_require__(823);
};

// MODULE: ./node_modules/core-js/internals/uid.js
var uid_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var uncurryThis = (function_uncurry_this_namespaceFn());

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

});

// MODULE: ./node_modules/core-js/internals/use-symbol-as-uid.js
var use_symbol_as_uid_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = (symbol_constructor_detection_namespaceFn());

module.exports = NATIVE_SYMBOL &&
  !Symbol.sham &&
  typeof Symbol.iterator == 'symbol';

});

// MODULE: ./node_modules/core-js/internals/v8-prototype-define-bug.js
var v8_prototype_define_bug_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var DESCRIPTORS = (descriptors_namespaceFn());
var fails = (fails_namespaceFn());

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

});

// MODULE: ./node_modules/core-js/internals/weak-map-basic-detection.js
var weak_map_basic_detection_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var globalThis = (global_this_namespaceFn());
var isCallable = (is_callable_namespaceFn());

var WeakMap = globalThis.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

});

// MODULE: ./node_modules/core-js/internals/well-known-symbol.js
var well_known_symbol_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var globalThis = (global_this_namespaceFn());
var shared = (shared_namespaceFn());
var hasOwn = (has_own_property_namespaceFn());
var uid = (uid_namespaceFn());
var NATIVE_SYMBOL = (symbol_constructor_detection_namespaceFn());
var USE_SYMBOL_AS_UID = (use_symbol_as_uid_namespaceFn());

var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

});

// MODULE: ./node_modules/core-js/internals/whitespaces.js
var whitespaces_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

});

// MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var fails = (fails_namespaceFn());
var isArray = (is_array_namespaceFn());
var isObject = (is_object_namespaceFn());
var toObject = (to_object_namespaceFn());
var lengthOfArrayLike = (length_of_array_like_namespaceFn());
var doesNotExceedSafeInteger = (does_not_exceed_safe_integer_namespaceFn());
var createProperty = (create_property_namespaceFn());
var setArrayLength = (array_set_length_namespaceFn());
var arraySpeciesCreate = (array_species_create_namespaceFn());
var arrayMethodHasSpeciesSupport = (array_method_has_species_support_namespaceFn());
var wellKnownSymbol = (well_known_symbol_namespaceFn());
var V8_VERSION = (environment_v8_version_namespaceFn());

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    setArrayLength(A, n);
    return A;
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.array.every.js
var es_array_every_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var $every = (array_iteration_namespaceFn().Si);
var arrayMethodIsStrict = (array_method_is_strict_namespaceFn());

var STRICT_METHOD = arrayMethodIsStrict('every');

// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var $filter = (array_iteration_namespaceFn().pb);
var arrayMethodHasSpeciesSupport = (array_method_has_species_support_namespaceFn());

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var $findIndex = (array_iteration_namespaceFn().SL);
var addToUnscopables = (add_to_unscopables_namespaceFn());

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-findindex -- testing
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);

});

// MODULE: ./node_modules/core-js/modules/es.array.flat.js
var es_array_flat_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var flattenIntoArray = (flatten_into_array_namespaceFn());
var toObject = (to_object_namespaceFn());
var lengthOfArrayLike = (length_of_array_like_namespaceFn());
var toIntegerOrInfinity = (to_integer_or_infinity_namespaceFn());
var arraySpeciesCreate = (array_species_create_namespaceFn());

// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var depthNum = depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthNum);
    return A;
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var forEach = (array_for_each_namespaceFn());

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach !== forEach }, {
  forEach: forEach
});

});

// MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = (export_namespaceFn());
var uncurryThis = (function_uncurry_this_clause_namespaceFn());
var $indexOf = (array_includes_namespaceFn().q);
var arrayMethodIsStrict = (array_method_is_strict_namespaceFn());

var nativeIndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: FORCED }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0
      : $indexOf(this, searchElement, fromIndex);
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var uncurryThis = (function_uncurry_this_namespaceFn());
var IndexedObject = (indexed_object_namespaceFn());
var toIndexedObject = (to_indexed_object_namespaceFn());
var arrayMethodIsStrict = (array_method_is_strict_namespaceFn());

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject !== Object;
var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: FORCED }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var $map = (array_iteration_namespaceFn().Tj);
var arrayMethodHasSpeciesSupport = (array_method_has_species_support_namespaceFn());

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var toObject = (to_object_namespaceFn());
var lengthOfArrayLike = (length_of_array_like_namespaceFn());
var setArrayLength = (array_set_length_namespaceFn());
var doesNotExceedSafeInteger = (does_not_exceed_safe_integer_namespaceFn());
var fails = (fails_namespaceFn());

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var $reduce = (array_reduce_namespaceFn().k);
var arrayMethodIsStrict = (array_method_is_strict_namespaceFn());
var CHROME_VERSION = (environment_v8_version_namespaceFn());
var IS_NODE = (environment_is_node_namespaceFn());

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var isArray = (is_array_namespaceFn());
var isConstructor = (is_constructor_namespaceFn());
var isObject = (is_object_namespaceFn());
var toAbsoluteIndex = (to_absolute_index_namespaceFn());
var lengthOfArrayLike = (length_of_array_like_namespaceFn());
var toIndexedObject = (to_indexed_object_namespaceFn());
var createProperty = (create_property_namespaceFn());
var setArrayLength = (array_set_length_namespaceFn());
var wellKnownSymbol = (well_known_symbol_namespaceFn());
var arrayMethodHasSpeciesSupport = (array_method_has_species_support_namespaceFn());
var nativeSlice = (array_slice_namespaceFn());

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    setArrayLength(result, n);
    return result;
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var $some = (array_iteration_namespaceFn().zN);
var arrayMethodIsStrict = (array_method_is_strict_namespaceFn());

var STRICT_METHOD = arrayMethodIsStrict('some');

// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var uncurryThis = (function_uncurry_this_namespaceFn());
var aCallable = (a_callable_namespaceFn());
var toObject = (to_object_namespaceFn());
var lengthOfArrayLike = (length_of_array_like_namespaceFn());
var deletePropertyOrThrow = (delete_property_or_throw_namespaceFn());
var toString = (to_string_namespaceFn());
var fails = (fails_namespaceFn());
var internalSort = (array_sort_namespaceFn());
var arrayMethodIsStrict = (array_method_is_strict_namespaceFn());
var FF = (environment_ff_version_namespaceFn());
var IE_OR_EDGE = (environment_is_ie_or_edge_namespaceFn());
var V8 = (environment_v8_version_namespaceFn());
var WEBKIT = (environment_webkit_version_namespaceFn());

var test = [];
var nativeSort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    var xString = toString(x);
    var yString = toString(y);
    return xString === yString ? 0 : xString > yString ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var toObject = (to_object_namespaceFn());
var toAbsoluteIndex = (to_absolute_index_namespaceFn());
var toIntegerOrInfinity = (to_integer_or_infinity_namespaceFn());
var lengthOfArrayLike = (length_of_array_like_namespaceFn());
var setArrayLength = (array_set_length_namespaceFn());
var doesNotExceedSafeInteger = (does_not_exceed_safe_integer_namespaceFn());
var arraySpeciesCreate = (array_species_create_namespaceFn());
var createProperty = (create_property_namespaceFn());
var deletePropertyOrThrow = (delete_property_or_throw_namespaceFn());
var arrayMethodHasSpeciesSupport = (array_method_has_species_support_namespaceFn());

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    setArrayLength(A, actualDeleteCount);
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    setArrayLength(O, len - actualDeleteCount + insertCount);
    return A;
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat.js
var es_array_unscopables_flat_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = (add_to_unscopables_namespaceFn());

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flat');

});

// MODULE: ./node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var fails = (fails_namespaceFn());
var toObject = (to_object_namespaceFn());
var toPrimitive = (to_primitive_namespaceFn());

var FORCED = fails(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
});

// `Date.prototype.toJSON` method
// https://tc39.es/ecma262/#sec-date.prototype.tojson
$({ target: 'Date', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O, 'number');
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.error.to-string.js
var es_error_to_string_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var defineBuiltIn = (define_built_in_namespaceFn());
var errorToString = (error_to_string_namespaceFn());

var ErrorPrototype = Error.prototype;

// `Error.prototype.toString` method fix
// https://tc39.es/ecma262/#sec-error.prototype.tostring
if (ErrorPrototype.toString !== errorToString) {
  defineBuiltIn(ErrorPrototype, 'toString', errorToString);
}

});

// MODULE: ./node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var globalThis = (global_this_namespaceFn());
var anInstance = (an_instance_namespaceFn());
var anObject = (an_object_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var getPrototypeOf = (object_get_prototype_of_namespaceFn());
var defineBuiltInAccessor = (define_built_in_accessor_namespaceFn());
var createProperty = (create_property_namespaceFn());
var fails = (fails_namespaceFn());
var hasOwn = (has_own_property_namespaceFn());
var wellKnownSymbol = (well_known_symbol_namespaceFn());
var IteratorPrototype = (iterators_core_namespaceFn().H);
var DESCRIPTORS = (descriptors_namespaceFn());
var IS_PURE = (is_pure_namespaceFn());

var CONSTRUCTOR = 'constructor';
var ITERATOR = 'Iterator';
var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;
var NativeIterator = globalThis[ITERATOR];

// FF56- have non-standard global helper `Iterator`
var FORCED = IS_PURE
  || !isCallable(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype
  // FF44- non-standard `Iterator` passes previous tests
  || !fails(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance(this, IteratorPrototype);
  if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError('Abstract class Iterator not directly constructable');
};

var defineIteratorPrototypeAccessor = function (key, value) {
  if (DESCRIPTORS) {
    defineBuiltInAccessor(IteratorPrototype, key, {
      configurable: true,
      get: function () {
        return value;
      },
      set: function (replacement) {
        anObject(this);
        if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
        if (hasOwn(this, key)) this[key] = replacement;
        else createProperty(this, key, replacement);
      }
    });
  } else IteratorPrototype[key] = value;
};

if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);

if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) {
  defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype;

// `Iterator` constructor
// https://tc39.es/ecma262/#sec-iterator
$({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});

});

// MODULE: ./node_modules/core-js/modules/es.iterator.every.js
var es_iterator_every_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var call = (function_call_namespaceFn());
var iterate = (iterate_namespaceFn());
var aCallable = (a_callable_namespaceFn());
var anObject = (an_object_namespaceFn());
var getIteratorDirect = (get_iterator_direct_namespaceFn());
var iteratorClose = (iterator_close_namespaceFn());
var iteratorHelperWithoutClosingOnEarlyError = (iterator_helper_without_closing_on_early_error_namespaceFn());

var everyWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('every', TypeError);

// `Iterator.prototype.every` method
// https://tc39.es/ecma262/#sec-iterator.prototype.every
$({ target: 'Iterator', proto: true, real: true, forced: everyWithoutClosingOnEarlyError }, {
  every: function every(predicate) {
    anObject(this);
    try {
      aCallable(predicate);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (everyWithoutClosingOnEarlyError) return call(everyWithoutClosingOnEarlyError, this, predicate);

    var record = getIteratorDirect(this);
    var counter = 0;
    return !iterate(record, function (value, stop) {
      if (!predicate(value, counter++)) return stop();
    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.iterator.filter.js
var es_iterator_filter_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var call = (function_call_namespaceFn());
var aCallable = (a_callable_namespaceFn());
var anObject = (an_object_namespaceFn());
var getIteratorDirect = (get_iterator_direct_namespaceFn());
var createIteratorProxy = (iterator_create_proxy_namespaceFn());
var callWithSafeIterationClosing = (call_with_safe_iteration_closing_namespaceFn());
var IS_PURE = (is_pure_namespaceFn());
var iteratorClose = (iterator_close_namespaceFn());
var iteratorHelperThrowsOnInvalidIterator = (iterator_helper_throws_on_invalid_iterator_namespaceFn());
var iteratorHelperWithoutClosingOnEarlyError = (iterator_helper_without_closing_on_early_error_namespaceFn());

var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator('filter', function () { /* empty */ });
var filterWithoutClosingOnEarlyError = !IS_PURE && !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR
  && iteratorHelperWithoutClosingOnEarlyError('filter', TypeError);

var FORCED = IS_PURE || FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var predicate = this.predicate;
  var next = this.next;
  var result, done, value;
  while (true) {
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
    value = result.value;
    if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
  }
});

// `Iterator.prototype.filter` method
// https://tc39.es/ecma262/#sec-iterator.prototype.filter
$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  filter: function filter(predicate) {
    anObject(this);
    try {
      aCallable(predicate);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (filterWithoutClosingOnEarlyError) return call(filterWithoutClosingOnEarlyError, this, predicate);

    return new IteratorProxy(getIteratorDirect(this), {
      predicate: predicate
    });
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var call = (function_call_namespaceFn());
var iterate = (iterate_namespaceFn());
var aCallable = (a_callable_namespaceFn());
var anObject = (an_object_namespaceFn());
var getIteratorDirect = (get_iterator_direct_namespaceFn());
var iteratorClose = (iterator_close_namespaceFn());
var iteratorHelperWithoutClosingOnEarlyError = (iterator_helper_without_closing_on_early_error_namespaceFn());

var forEachWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('forEach', TypeError);

// `Iterator.prototype.forEach` method
// https://tc39.es/ecma262/#sec-iterator.prototype.foreach
$({ target: 'Iterator', proto: true, real: true, forced: forEachWithoutClosingOnEarlyError }, {
  forEach: function forEach(fn) {
    anObject(this);
    try {
      aCallable(fn);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);

    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.iterator.map.js
var es_iterator_map_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var call = (function_call_namespaceFn());
var aCallable = (a_callable_namespaceFn());
var anObject = (an_object_namespaceFn());
var getIteratorDirect = (get_iterator_direct_namespaceFn());
var createIteratorProxy = (iterator_create_proxy_namespaceFn());
var callWithSafeIterationClosing = (call_with_safe_iteration_closing_namespaceFn());
var iteratorClose = (iterator_close_namespaceFn());
var iteratorHelperThrowsOnInvalidIterator = (iterator_helper_throws_on_invalid_iterator_namespaceFn());
var iteratorHelperWithoutClosingOnEarlyError = (iterator_helper_without_closing_on_early_error_namespaceFn());
var IS_PURE = (is_pure_namespaceFn());

var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator('map', function () { /* empty */ });
var mapWithoutClosingOnEarlyError = !IS_PURE && !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR
  && iteratorHelperWithoutClosingOnEarlyError('map', TypeError);

var FORCED = IS_PURE || MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var result = anObject(call(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
});

// `Iterator.prototype.map` method
// https://tc39.es/ecma262/#sec-iterator.prototype.map
$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  map: function map(mapper) {
    anObject(this);
    try {
      aCallable(mapper);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (mapWithoutClosingOnEarlyError) return call(mapWithoutClosingOnEarlyError, this, mapper);

    return new IteratorProxy(getIteratorDirect(this), {
      mapper: mapper
    });
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.iterator.reduce.js
var es_iterator_reduce_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var iterate = (iterate_namespaceFn());
var aCallable = (a_callable_namespaceFn());
var anObject = (an_object_namespaceFn());
var getIteratorDirect = (get_iterator_direct_namespaceFn());
var iteratorClose = (iterator_close_namespaceFn());
var iteratorHelperWithoutClosingOnEarlyError = (iterator_helper_without_closing_on_early_error_namespaceFn());
var apply = (function_apply_namespaceFn());
var fails = (fails_namespaceFn());

var $TypeError = TypeError;

// https://bugs.webkit.org/show_bug.cgi?id=291651
var FAILS_ON_INITIAL_UNDEFINED = fails(function () {
  // eslint-disable-next-line es/no-iterator-prototype-reduce, es/no-array-prototype-keys, array-callback-return -- required for testing
  [].keys().reduce(function () { /* empty */ }, undefined);
});

var reduceWithoutClosingOnEarlyError = !FAILS_ON_INITIAL_UNDEFINED && iteratorHelperWithoutClosingOnEarlyError('reduce', $TypeError);

// `Iterator.prototype.reduce` method
// https://tc39.es/ecma262/#sec-iterator.prototype.reduce
$({ target: 'Iterator', proto: true, real: true, forced: FAILS_ON_INITIAL_UNDEFINED || reduceWithoutClosingOnEarlyError }, {
  reduce: function reduce(reducer /* , initialValue */) {
    anObject(this);
    try {
      aCallable(reducer);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    if (reduceWithoutClosingOnEarlyError) {
      return apply(reduceWithoutClosingOnEarlyError, this, noInitial ? [reducer] : [reducer, accumulator]);
    }
    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = reducer(accumulator, value, counter);
      }
      counter++;
    }, { IS_RECORD: true });
    if (noInitial) throw new $TypeError('Reduce of empty iterator with no initial value');
    return accumulator;
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.iterator.some.js
var es_iterator_some_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var call = (function_call_namespaceFn());
var iterate = (iterate_namespaceFn());
var aCallable = (a_callable_namespaceFn());
var anObject = (an_object_namespaceFn());
var getIteratorDirect = (get_iterator_direct_namespaceFn());
var iteratorClose = (iterator_close_namespaceFn());
var iteratorHelperWithoutClosingOnEarlyError = (iterator_helper_without_closing_on_early_error_namespaceFn());

var someWithoutClosingOnEarlyError = iteratorHelperWithoutClosingOnEarlyError('some', TypeError);

// `Iterator.prototype.some` method
// https://tc39.es/ecma262/#sec-iterator.prototype.some
$({ target: 'Iterator', proto: true, real: true, forced: someWithoutClosingOnEarlyError }, {
  some: function some(predicate) {
    anObject(this);
    try {
      aCallable(predicate);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (someWithoutClosingOnEarlyError) return call(someWithoutClosingOnEarlyError, this, predicate);

    var record = getIteratorDirect(this);
    var counter = 0;
    return iterate(record, function (value, stop) {
      if (predicate(value, counter++)) return stop();
    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var getBuiltIn = (get_built_in_namespaceFn());
var call = (function_call_namespaceFn());
var uncurryThis = (function_uncurry_this_namespaceFn());
var fails = (fails_namespaceFn());
var isArray = (is_array_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var isObject = (is_object_namespaceFn());
var create = (object_create_namespaceFn());
var isRawJSON = (is_raw_json_namespaceFn());
var isSymbol = (is_symbol_namespaceFn());
var classof = (classof_raw_namespaceFn());
var thisNumberValue = (this_number_value_namespaceFn());
var includes = (array_includes_namespaceFn().m);
var hasOwn = (has_own_property_namespaceFn());
var toString = (to_string_namespaceFn());
var parseJSONString = (parse_json_string_namespaceFn());
var uid = (uid_namespaceFn());
var NATIVE_SYMBOL = (symbol_constructor_detection_namespaceFn());
var NATIVE_RAW_JSON = (native_raw_json_namespaceFn());

var $String = String;
var $TypeError = TypeError;
var $stringify = getBuiltIn('JSON', 'stringify');
var $BigInt = getBuiltIn('BigInt');
var stringValueOf = uncurryThis(''.valueOf);
var booleanValueOf = uncurryThis(true.valueOf);
var bigIntValueOf = $BigInt && uncurryThis($BigInt.prototype.valueOf);
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var slice = uncurryThis(''.slice);
var push = uncurryThis([].push);
var pop = uncurryThis([].pop);
var numberToString = uncurryThis(1.1.toString);

var surrogates = /[\uD800-\uDFFF]/g;
var leadingSurrogates = /^[\uD800-\uDBFF]$/;
var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
var digits = /^\d+$/;

// a placeholder of a raw JSON value
var RAW_MARK = uid();
// a prefix of keys of a reordered object, see `createOrderedObject`
var KEY_MARK = uid();
// the last key of a reordered object, marks the end of its serialization
var END_MARK = uid();
var RAW_MARK_LENGTH = RAW_MARK.length;
var KEY_MARK_LENGTH = KEY_MARK.length;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')('stringify detection');
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) !== '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) !== '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) !== '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var isRawJSONValue = NATIVE_RAW_JSON ? getBuiltIn('JSON', 'isRawJSON') : isRawJSON;

var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function (it, replacer, space) {
  return $stringify(it, function (key, value) {
    var replaced = call(replacer, this, key, value);
    if (!isSymbol(replaced)) return replaced;
  }, space);
} : $stringify;

var fixIllFormedJSON = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if (
    (exec(leadingSurrogates, match) && !exec(trailingSurrogates, next)) ||
    (exec(trailingSurrogates, match) && !exec(leadingSurrogates, prev))
  ) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

// `PropertyList` of `JSON.stringify`
// https://tc39.es/ecma262/#sec-json.stringify
var getPropertyList = function (replacer) {
  if (!isArray(replacer)) return;
  var rawLength = replacer.length;
  var propertyList = [];
  // a null prototype object is used as a set of already added keys to keep the deduplication linear
  var addedKeys = create(null);
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    var key;
    if (typeof element == 'string') key = element;
    else if (typeof element == 'number' || classof(element) === 'Number' || classof(element) === 'String') key = toString(element);
    else continue;
    if (!hasOwn(addedKeys, key)) {
      addedKeys[key] = true;
      push(propertyList, key);
    }
  }
  return propertyList;
};

// values with such an internal slot are unwrapped by `SerializeJSONProperty` instead of being serialized as objects
var hasInternalSlot = function (valueOf, it) {
  try {
    valueOf(it);
    return true;
  } catch (error) {
    return false;
  }
};

// the slot check is expensive, so it's performed only for the kind reported by the value itself -
// a value lying about its kind via `Symbol.toStringTag` is serialized as an ordinary object
var isBoxedPrimitive = function (it) {
  var kind = classof(it);
  return (kind === 'Number' && hasInternalSlot(thisNumberValue, it))
    || (kind === 'String' && hasInternalSlot(stringValueOf, it))
    || (kind === 'Boolean' && hasInternalSlot(booleanValueOf, it))
    || (!!bigIntValueOf && kind === 'BigInt' && hasInternalSlot(bigIntValueOf, it));
};

// only objects serialized by `SerializeJSONObject` are affected by the property list
var isSerializedAsObject = function (it) {
  if (!isObject(it) || isCallable(it) || isArray(it)) return false;
  try {
    return !isBoxedPrimitive(it);
  // `classof` reads `Symbol.toStringTag`, so a proxy could throw - it has no internal slots anyway
  } catch (error) {
    return true;
  }
};

// the engine unwraps it in the same order as it would read the original property,
// so the property is read lazily and `toJSON` is called once and with the original key
var createElementHolder = function (holder, key) {
  return {
    toJSON: function () {
      var element = holder[key];
      if (isObject(element) || typeof element == 'bigint') {
        var elementToJSON = element.toJSON;
        if (isCallable(elementToJSON)) element = call(elementToJSON, element, key);
      } return element;
    }
  };
};

// own keys of objects are sorted - integer-like keys are moved to the beginning,
// so such keys should be marked and restored in the serialized string
var getKeyPrefix = function (propertyList) {
  for (var i = 0, length = propertyList.length; i < length; i++) {
    if (exec(digits, propertyList[i])) return KEY_MARK;
  } return '';
};

// `SerializeJSONObject` iterates the property list, so the value is replaced with an object with keys in this order
var createOrderedObject = function (value, propertyList, keyPrefix) {
  // keys are not marked if the property list has no integer-like keys, so `Object.prototype`
  // with a setter, a non-writable property or `__proto__` should not intercept the assignment
  var ordered = create(null);
  for (var i = 0, length = propertyList.length; i < length; i++) {
    var key = propertyList[i];
    ordered[keyPrefix + key] = createElementHolder(value, key);
  }
  ordered[END_MARK] = null;
  return ordered;
};

// `JSON.stringify` method
// https://tc39.es/ecma262/#sec-json.stringify
// https://github.com/tc39/proposal-json-parse-with-source
if ($stringify) $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON }, {
  stringify: function stringify(text, replacer, space) {
    var replacerFunction = isCallable(replacer) ? replacer : undefined;
    var propertyList = replacerFunction ? undefined : getPropertyList(replacer);
    var keyPrefix = propertyList && getKeyPrefix(propertyList);
    var rawStrings = [];
    var openObjects = [];
    var parentOrdered = [];
    var currentOrdered;
    var marked = false;
    var root = true;

    var json = stringifyWithProperSymbolsConversion(text, function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      key = $String(key);

      if (propertyList) {
        if (key === END_MARK) {
          pop(openObjects);
          currentOrdered = pop(parentOrdered);
          return;
        }
        if (root) root = false;
        // the innermost reordered object already contains only keys of the property list and arrays are not
        // affected by it, the rest of objects (like objects with a fake `Symbol.toStringTag`) are filtered here
        else if (this !== currentOrdered && !isArray(this) && !includes(propertyList, key)) return;
      } else if (replacerFunction) value = call(replacerFunction, this, key, value);

      if (isRawJSONValue(value)) {
        if (NATIVE_RAW_JSON) return value;
        marked = true;
        return RAW_MARK + (push(rawStrings, value.rawJSON) - 1);
      }

      if (propertyList && isSerializedAsObject(value)) {
        // reordered objects are new each time, so cycles should be detected before the engine does it
        if (includes(openObjects, value)) throw new $TypeError('Converting circular structure to JSON');
        var ordered = createOrderedObject(value, propertyList, keyPrefix);
        push(openObjects, value);
        push(parentOrdered, currentOrdered);
        currentOrdered = ordered;
        if (keyPrefix) marked = true;
        return ordered;
      }

      return value;
    }, space);

    if (typeof json != 'string') return json;

    if (ILL_FORMED_UNICODE) json = replace(json, surrogates, fixIllFormedJSON);

    if (!marked) return json;

    var result = '';
    var length = json.length;

    for (var i = 0; i < length; i++) {
      var chr = charAt(json, i);
      if (chr === '"') {
        var end = parseJSONString(json, ++i).end - 1;
        var string = slice(json, i, end);
        if (slice(string, 0, RAW_MARK_LENGTH) === RAW_MARK) result += rawStrings[slice(string, RAW_MARK_LENGTH)];
        else if (slice(string, 0, KEY_MARK_LENGTH) === KEY_MARK) result += '"' + slice(string, KEY_MARK_LENGTH) + '"';
        else result += '"' + string + '"';
        i = end;
      } else result += chr;
    }

    return result;
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var IS_PURE = (is_pure_namespaceFn());
var DESCRIPTORS = (descriptors_namespaceFn());
var globalThis = (global_this_namespaceFn());
var path = (path_namespaceFn());
var uncurryThis = (function_uncurry_this_namespaceFn());
var isForced = (is_forced_namespaceFn());
var hasOwn = (has_own_property_namespaceFn());
var inheritIfRequired = (inherit_if_required_namespaceFn());
var isPrototypeOf = (object_is_prototype_of_namespaceFn());
var isSymbol = (is_symbol_namespaceFn());
var toPrimitive = (to_primitive_namespaceFn());
var fails = (fails_namespaceFn());
var getOwnPropertyNames = (object_get_own_property_names_namespaceFn().f);
var getOwnPropertyDescriptor = (object_get_own_property_descriptor_namespaceFn().f);
var defineProperty = (object_define_property_namespaceFn().f);
var thisNumberValue = (this_number_value_namespaceFn());
var trim = (string_trim_namespaceFn().Bq);

var NUMBER = 'Number';
var NativeNumber = globalThis[NUMBER];
var PureNumberNamespace = path[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = globalThis.TypeError;
var stringSlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw new TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        // fast equal of /^0b[01]+$/i
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal of /^0o[0-7]+$/i
        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        default:
          return +it;
      }
      digits = stringSlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

var FORCED = isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'));

var calledWithNew = function (dummy) {
  // includes check on 1..constructor(foo) case
  return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); });
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
var NumberWrapper = function Number(value) {
  var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
  return calledWithNew(this) ? inheritIfRequired(Object(n), this, NumberWrapper) : n;
};

NumberWrapper.prototype = NumberPrototype;
if (FORCED && !IS_PURE) NumberPrototype.constructor = NumberWrapper;

$({ global: true, constructor: true, wrap: true, forced: FORCED }, {
  Number: NumberWrapper
});

// Use `internal/copy-constructor-properties` helper in `core-js@4`
var copyConstructorProperties = function (target, source) {
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(source) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(source, key = keys[j]) && !hasOwn(target, key)) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

if (IS_PURE && PureNumberNamespace) copyConstructorProperties(path[NUMBER], PureNumberNamespace);
if (FORCED || IS_PURE) copyConstructorProperties(path[NUMBER], NativeNumber);

});

// MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var fails = (fails_namespaceFn());
var toObject = (to_object_namespaceFn());
var nativeGetPrototypeOf = (object_get_prototype_of_namespaceFn());
var CORRECT_PROTOTYPE_GETTER = (correct_prototype_getter_namespaceFn());

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});


});

// MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var toObject = (to_object_namespaceFn());
var nativeKeys = (object_keys_namespaceFn());
var fails = (fails_namespaceFn());

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var TO_STRING_TAG_SUPPORT = (to_string_tag_support_namespaceFn());
var defineBuiltIn = (define_built_in_namespaceFn());
var toString = (object_to_string_namespaceFn());

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}

});

// MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var exec = (regexp_exec_namespaceFn());

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

});

// MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

// TODO: Remove from `core-js@4` since it's moved to entry points
(es_regexp_exec_namespaceFn());
var $ = (export_namespaceFn());
var call = (function_call_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var anObject = (an_object_namespaceFn());
var toString = (to_string_namespaceFn());

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var nativeTest = /./.test;

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (S) {
    var R = anObject(this);
    var string = toString(S);
    var exec = R.exec;
    if (!isCallable(exec)) return call(nativeTest, R, string);
    var result = call(exec, R, string);
    if (result === null) return false;
    anObject(result);
    return true;
  }
});

});

// MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var PROPER_FUNCTION_NAME = (function_name_namespaceFn().zE);
var defineBuiltIn = (define_built_in_namespaceFn());
var anObject = (an_object_namespaceFn());
var $toString = (to_string_namespaceFn());
var fails = (fails_namespaceFn());
var getRegExpFlags = (regexp_get_flags_namespaceFn());

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExpPrototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}

});

// MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var apply = (function_apply_namespaceFn());
var call = (function_call_namespaceFn());
var uncurryThis = (function_uncurry_this_namespaceFn());
var fixRegExpWellKnownSymbolLogic = (fix_regexp_well_known_symbol_logic_namespaceFn());
var fails = (fails_namespaceFn());
var anObject = (an_object_namespaceFn());
var isCallable = (is_callable_namespaceFn());
var isObject = (is_object_namespaceFn());
var toIntegerOrInfinity = (to_integer_or_infinity_namespaceFn());
var toLength = (to_length_namespaceFn());
var toString = (to_string_namespaceFn());
var requireObjectCoercible = (require_object_coercible_namespaceFn());
var advanceStringIndex = (advance_string_index_namespaceFn());
var getMethod = (get_method_namespaceFn());
var getSubstitution = (get_substitution_namespaceFn());
var getRegExpFlags = (regexp_get_flags_namespaceFn());
var regExpExec = (regexp_exec_abstract_namespaceFn());
var wellKnownSymbol = (well_known_symbol_namespaceFn());

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isObject(searchValue) ? getMethod(searchValue, REPLACE) : undefined;
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);
      var flags = toString(getRegExpFlags(rx));

      if (
        typeof replaceValue == 'string' &&
        !~stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) &&
        !~stringIndexOf(replaceValue, '$<') &&
        !~stringIndexOf(flags, 'y')
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var global = !!~stringIndexOf(flags, 'g');
      var fullUnicode;
      if (global) {
        fullUnicode = !!~stringIndexOf(flags, 'u') || !!~stringIndexOf(flags, 'v');
        rx.lastIndex = 0;
      }

      var results = [];
      var result;
      while (true) {
        result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        var replacement;
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

});

// MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var $ = (export_namespaceFn());
var $trim = (string_trim_namespaceFn().Bq);
var forcedStringTrimMethod = (string_trim_forced_namespaceFn());

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

});

// MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each_namespaceFn = /*#__PURE__*/__tselect_require__.cw(function(module, exports) {

var globalThis = (global_this_namespaceFn());
var DOMIterables = (dom_iterables_namespaceFn());
var DOMTokenListPrototype = (dom_token_list_prototype_namespaceFn());
var forEach = (array_for_each_namespaceFn());
var createNonEnumerableProperty = (create_non_enumerable_property_namespaceFn());

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);

});

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) // removed by dead control flow
{ var getCurrentScript; }

  var setPublicPath_src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (setPublicPath_src) {
    __tselect_require__.p = setPublicPath_src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Treeselect.vue?vue&type=template&id=3a26e286

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_HiddenFields = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("HiddenFields");
  var _component_Control = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("Control");
  var _component_MenuPortal = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("MenuPortal");
  var _component_Menu = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("Menu");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", {
    ref: "wrapper",
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(_ctx.wrapperClass)
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_HiddenFields), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(_component_Control, {
    ref: "control"
  }, null, 512), _ctx.appendToBody ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_MenuPortal, {
    key: 0,
    ref: "portal"
  }, null, 512)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createBlock)(_component_Menu, {
    key: 1,
    ref: "menu"
  }, null, 512))], 2);
}
;// ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

;// ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

;// ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

;// ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

;// ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

;// ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

;// ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive_toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey_toPropertyKey(t) {
  var i = toPrimitive_toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

;// ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

;// ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

;// ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

;// ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

;// ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function objectSpread2_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? objectSpread2_ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : objectSpread2_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

;// ./node_modules/core-js/modules/es.array.concat.js
es_array_concat_namespaceFn();

;// ./node_modules/core-js/modules/es.array.every.js
es_array_every_namespaceFn();

;// ./node_modules/core-js/modules/es.array.filter.js
es_array_filter_namespaceFn();

;// ./node_modules/core-js/modules/es.array.find-index.js
es_array_find_index_namespaceFn();

;// ./node_modules/core-js/modules/es.array.flat.js
es_array_flat_namespaceFn();

;// ./node_modules/core-js/modules/es.array.for-each.js
es_array_for_each_namespaceFn();

;// ./node_modules/core-js/modules/es.array.index-of.js
es_array_index_of_namespaceFn();

;// ./node_modules/core-js/modules/es.array.map.js
es_array_map_namespaceFn();

;// ./node_modules/core-js/modules/es.array.push.js
es_array_push_namespaceFn();

;// ./node_modules/core-js/modules/es.array.reduce.js
es_array_reduce_namespaceFn();

;// ./node_modules/core-js/modules/es.array.slice.js
es_array_slice_namespaceFn();

;// ./node_modules/core-js/modules/es.array.some.js
es_array_some_namespaceFn();

;// ./node_modules/core-js/modules/es.array.sort.js
es_array_sort_namespaceFn();

;// ./node_modules/core-js/modules/es.array.unscopables.flat.js
es_array_unscopables_flat_namespaceFn();

;// ./node_modules/core-js/modules/es.date.to-json.js
es_date_to_json_namespaceFn();

;// ./node_modules/core-js/modules/es.iterator.constructor.js
es_iterator_constructor_namespaceFn();

;// ./node_modules/core-js/modules/es.iterator.every.js
es_iterator_every_namespaceFn();

;// ./node_modules/core-js/modules/es.iterator.filter.js
es_iterator_filter_namespaceFn();

;// ./node_modules/core-js/modules/es.iterator.for-each.js
es_iterator_for_each_namespaceFn();

;// ./node_modules/core-js/modules/es.iterator.map.js
es_iterator_map_namespaceFn();

;// ./node_modules/core-js/modules/es.iterator.reduce.js
es_iterator_reduce_namespaceFn();

;// ./node_modules/core-js/modules/es.iterator.some.js
es_iterator_some_namespaceFn();

;// ./node_modules/core-js/modules/es.json.stringify.js
es_json_stringify_namespaceFn();

;// ./node_modules/core-js/modules/es.number.constructor.js
es_number_constructor_namespaceFn();

;// ./node_modules/core-js/modules/es.object.to-string.js
es_object_to_string_namespaceFn();

;// ./node_modules/core-js/modules/es.regexp.exec.js
es_regexp_exec_namespaceFn();

;// ./node_modules/core-js/modules/es.string.replace.js
es_string_replace_namespaceFn();

;// ./node_modules/core-js/modules/es.string.trim.js
es_string_trim_namespaceFn();

;// ./node_modules/core-js/modules/web.dom-collections.for-each.js
web_dom_collections_for_each_namespaceFn();

;// ./node_modules/fuzzysearch/index.js
fuzzysearch_namespaceFn();

function fuzzysearch_default() { return fuzzysearch_default.c || (fuzzysearch_default.c = __tselect_require__.n(fuzzysearch_namespaceFn())); }
;// ./src/utils/isNaN.js
function isNaN_isNaN(x) {
  return x !== x;
}
;// ./src/utils/includes.js

function includes_includes(arrOrStr, elem) {
  return arrOrStr.indexOf(elem) !== -1;
}
// EXTERNAL MODULE: ./node_modules/lodash/constant.js
var constant = __tselect_require__(334);
var constant_default = /*#__PURE__*/__tselect_require__.n(constant);
// EXTERNAL MODULE: ./node_modules/lodash/identity.js
var identity = __tselect_require__(488);
var identity_default = /*#__PURE__*/__tselect_require__.n(identity);
;// ./src/utils/createMap.js
var createMap = function createMap() {
  return Object.create(null);
};
;// ./src/utils/quickDiff.js
function quickDiff(arrA, arrB) {
  if (arrA.length !== arrB.length) return true;
  for (var i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) return true;
  }
  return false;
}
// EXTERNAL MODULE: ./node_modules/lodash/noop.js
var lodash_noop = __tselect_require__(950);
var noop_default = /*#__PURE__*/__tselect_require__.n(lodash_noop);
;// ./src/utils/warning.js



var warning =  true ? /* istanbul ignore next */(noop_default()) : 0;
;// ./src/utils/find.js
function find_find(arr, predicate, ctx) {
  for (var i = 0, len = arr.length; i < len; i++) {
    if (predicate.call(ctx, arr[i], i, arr)) return arr[i];
  }
  return undefined;
}
;// ./src/utils/onLeftClick.js

function onLeftClick(mouseDownHandler) {
  return function onMouseDown(evt) {
    if (evt.type === 'mousedown' && evt.button === 0) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      mouseDownHandler.call.apply(mouseDownHandler, [this, evt].concat(args));
    }
  };
}
;// ./src/utils/scrollIntoView.js
// from react-select
function scrollIntoView($scrollingEl, $focusedEl) {
  var scrollingReact = $scrollingEl.getBoundingClientRect();
  var focusedRect = $focusedEl.getBoundingClientRect();
  var overScroll = $focusedEl.offsetHeight / 3;
  if (focusedRect.bottom + overScroll > scrollingReact.bottom) {
    $scrollingEl.scrollTop = Math.min($focusedEl.offsetTop + $focusedEl.clientHeight - $scrollingEl.offsetHeight + overScroll, $scrollingEl.scrollHeight);
  } else if (focusedRect.top - overScroll < scrollingReact.top) {
    $scrollingEl.scrollTop = Math.max($focusedEl.offsetTop - overScroll, 0);
  }
}
// EXTERNAL MODULE: ./node_modules/lodash/last.js
var lodash_last = __tselect_require__(90);
var last_default = /*#__PURE__*/__tselect_require__.n(lodash_last);
// EXTERNAL MODULE: ./node_modules/lodash/once.js
var lodash_once = __tselect_require__(59);
var once_default = /*#__PURE__*/__tselect_require__.n(lodash_once);
;// ./node_modules/is-promise/index.mjs
function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

;// ./node_modules/core-js/modules/es.array.splice.js
es_array_splice_namespaceFn();

;// ./src/utils/removeFromArray.js


function removeFromArray(arr, elem) {
  var idx = arr.indexOf(elem);
  if (idx !== -1) arr.splice(idx, 1);
}
;// ./src/constants.js
// Magic value that indicates a root level node.
var NO_PARENT_NODE = null;

// Types of checked state.
var UNCHECKED = 0;
var INDETERMINATE = 1;
var CHECKED = 2;

// Types of count number.
var ALL_CHILDREN = 'ALL_CHILDREN';
var ALL_DESCENDANTS = 'ALL_DESCENDANTS';
var LEAF_CHILDREN = 'LEAF_CHILDREN';
var LEAF_DESCENDANTS = 'LEAF_DESCENDANTS';

// Action types of delayed loading.
var LOAD_ROOT_OPTIONS = 'LOAD_ROOT_OPTIONS';
var LOAD_CHILDREN_OPTIONS = 'LOAD_CHILDREN_OPTIONS';
var ASYNC_SEARCH = 'ASYNC_SEARCH';

// Acceptable values of `valueConsistsOf` prop.
var ALL = 'ALL';
var BRANCH_PRIORITY = 'BRANCH_PRIORITY';
var LEAF_PRIORITY = 'LEAF_PRIORITY';
var ALL_WITH_INDETERMINATE = 'ALL_WITH_INDETERMINATE';

// Acceptable values of `sortValueBy` prop.
var ORDER_SELECTED = 'ORDER_SELECTED';
var LEVEL = 'LEVEL';
var INDEX = 'INDEX';

// Key codes look-up table.
var KEY_CODES = {
  BACKSPACE: 8,
  ENTER: 13,
  ESCAPE: 27,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46
};

// Other constants.
var INPUT_DEBOUNCE_DELAY =  false ? /* to speed up unit testing */0 : /* istanbul ignore next */200;
var MIN_INPUT_WIDTH = 5;
var MENU_BUFFER = 40;
;// ./src/mixins/treeselectMixin.js





































function sortValueByIndex(a, b) {
  var i = 0;
  do {
    if (a.level < i) return -1;
    if (b.level < i) return 1;
    if (a.index[i] !== b.index[i]) return a.index[i] - b.index[i];
    i++;
  } while (true);
}
function sortValueByLevel(a, b) {
  return a.level === b.level ? sortValueByIndex(a, b) : a.level - b.level;
}
function createAsyncOptionsStates() {
  return {
    isLoaded: false,
    isLoading: false,
    loadingError: ''
  };
}
function stringifyOptionPropValue(value) {
  if (typeof value === 'string') return value;
  if (typeof value === 'number' && !isNaN_isNaN(value)) return value + '';
  // istanbul ignore next
  return '';
}
function treeselectMixin_match(enableFuzzyMatch, needle, haystack) {
  return enableFuzzyMatch ? fuzzysearch_default()()(needle, haystack) : includes_includes(haystack, needle);
}
function getErrorMessage(err) {
  return err.message || /* istanbul ignore next */String(err);
}
var instanceId = 0;
/* harmony default export */ var treeselectMixin = ({
  provide: function provide() {
    return {
      // Enable access to the instance of root component of vue-treeselect
      // across hierarchy.
      instance: this
    };
  },
  props: {
    /**
     * Whether to allow resetting value even if there are disabled selected nodes.
     */
    allowClearingDisabled: {
      type: Boolean,
      default: false
    },
    /**
     * When an ancestor node is selected/deselected, whether its disabled descendants should be selected/deselected.
     * You may want to use this in conjunction with `allowClearingDisabled` prop.
     */
    allowSelectingDisabledDescendants: {
      type: Boolean,
      default: false
    },
    /**
     * Whether the menu should be always open.
     */
    alwaysOpen: {
      type: Boolean,
      default: false
    },
    /**
     * Append the menu to <body />?
     */
    appendToBody: {
      type: Boolean,
      default: false
    },
    /**
     * Whether to enable async search mode.
     */
    async: {
      type: Boolean,
      default: false
    },
    /**
     * Automatically focus the component on mount?
     */
    autoFocus: {
      type: Boolean,
      default: false
    },
    /**
     * Automatically load root options on mount. When set to `false`, root options will be loaded when the menu is opened.
     */
    autoLoadRootOptions: {
      type: Boolean,
      default: true
    },
    /**
     * When user deselects a node, automatically deselect its ancestors. Applies to flat mode only.
     */
    autoDeselectAncestors: {
      type: Boolean,
      default: false
    },
    /**
     * When user deselects a node, automatically deselect its descendants. Applies to flat mode only.
     */
    autoDeselectDescendants: {
      type: Boolean,
      default: false
    },
    /**
     * When user selects a node, automatically select its ancestors. Applies to flat mode only.
     */
    autoSelectAncestors: {
      type: Boolean,
      default: false
    },
    /**
     * When user selects a node, automatically select its descendants. Applies to flat mode only.
     */
    autoSelectDescendants: {
      type: Boolean,
      default: false
    },
    /**
     * Whether pressing backspace key removes the last item if there is no text input.
     */
    backspaceRemoves: {
      type: Boolean,
      default: true
    },
    /**
     * Function that processes before clearing all input fields.
     * Return `false` to prevent value from being cleared.
     * @type {function(): (boolean|Promise<boolean>)}
     */
    beforeClearAll: {
      type: Function,
      default: constant_default()(true)
    },
    /**
     * Show branch nodes before leaf nodes?
     */
    branchNodesFirst: {
      type: Boolean,
      default: false
    },
    /**
     * Should cache results of every search request?
     */
    cacheOptions: {
      type: Boolean,
      default: true
    },
    /**
     * Show an "×" button that resets value?
     */
    clearable: {
      type: Boolean,
      default: true
    },
    /**
     * Title for the "×" button when `multiple: true`.
     */
    clearAllText: {
      type: String,
      default: 'Clear all'
    },
    /**
     * Whether to clear the search input after selecting.
     * Use only when `multiple` is `true`.
     * For single-select mode, it **always** clears the input after selecting an option regardless of the prop value.
     */
    clearOnSelect: {
      type: Boolean,
      default: false
    },
    /**
     * Title for the "×" button.
     */
    clearValueText: {
      type: String,
      default: 'Clear value'
    },
    /**
     * Whether to close the menu after selecting an option?
     * Use only when `multiple` is `true`.
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * How many levels of branch nodes should be automatically expanded when loaded.
     * Set `Infinity` to make all branch nodes expanded by default.
     */
    defaultExpandLevel: {
      type: Number,
      default: 0
    },
    /**
     * The default set of options to show before the user starts searching. Used for async search mode.
     * When set to `true`, the results for search query as a empty string will be autoloaded.
     * @type {boolean|node[]}
     */
    defaultOptions: {
      default: false
    },
    /**
     * Whether pressing delete key removes the last item if there is no text input.
     */
    deleteRemoves: {
      type: Boolean,
      default: true
    },
    /**
     * Delimiter to use to join multiple values for the hidden field value.
     */
    delimiter: {
      type: String,
      default: ','
    },
    /**
     * Only show the nodes that match the search value directly, excluding its ancestors.
     *
     * @type {Object}
     */
    flattenSearchResults: {
      type: Boolean,
      default: false
    },
    /**
     * Prevent branch nodes from being selected?
     */
    disableBranchNodes: {
      type: Boolean,
      default: false
    },
    /**
     * Disable the control?
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Disable the fuzzy matching functionality?
     */
    disableFuzzyMatching: {
      type: Boolean,
      default: false
    },
    /**
     * Whether to enable flat mode or not. Non-flat mode (default) means:
     *   - Whenever a branch node gets checked, all its children will be checked too
     *   - Whenever a branch node has all children checked, the branch node itself will be checked too
     * Set `true` to disable this mechanism
     */
    flat: {
      type: Boolean,
      default: false
    },
    /**
     * Will be passed with all events as the last param.
     * Useful for identifying events origin.
    */
    instanceId: {
      // Add two trailing "$" to distinguish from explictly specified ids.
      default: function _default() {
        return "".concat(instanceId++, "$$");
      },
      type: [String, Number]
    },
    /**
     * Joins multiple values into a single form field with the `delimiter` (legacy mode).
    */
    joinValues: {
      type: Boolean,
      default: false
    },
    /**
     * Limit the display of selected options.
     * The rest will be hidden within the limitText string.
     */
    limit: {
      type: Number,
      default: Infinity
    },
    /**
     * Function that processes the message shown when selected elements pass the defined limit.
     * @type {function(number): string}
     */
    limitText: {
      type: Function,
      default: function limitTextDefault(count) {
        // eslint-disable-line func-name-matching
        return "and ".concat(count, " more");
      }
    },
    /**
     * Text displayed when loading options.
     */
    loadingText: {
      type: String,
      default: 'Loading...'
    },
    /**
     * Used for dynamically loading options.
     * @type {function({action: string, callback: (function((Error|string)=): void), parentNode: node=, instanceId}): void}
     */
    loadOptions: {
      type: Function
    },
    /**
     * Which node properties to filter on.
     */
    matchKeys: {
      type: Array,
      default: constant_default()(['label'])
    },
    /**
     * Sets `maxHeight` style value of the menu.
     */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
     * Set `true` to allow selecting multiple options (a.k.a., multi-select mode).
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Generates a hidden <input /> tag with this field name for html forms.
     */
    name: {
      type: String
    },
    /**
     * Text displayed when a branch node has no children.
     */
    noChildrenText: {
      type: String,
      default: 'No sub-options.'
    },
    /**
     * Text displayed when there are no available options.
     */
    noOptionsText: {
      type: String,
      default: 'No options available.'
    },
    /**
     * Text displayed when there are no matching search results.
     */
    noResultsText: {
      type: String,
      default: 'No results found...'
    },
    /**
     * Used for normalizing source data.
     * @type {function(node, instanceId): node}
     */
    normalizer: {
      type: Function,
      default: (identity_default())
    },
    /**
     * By default (`auto`), the menu will open below the control. If there is not
     * enough space, vue-treeselect will automatically flip the menu.
     * You can use one of other four options to force the menu to be always opened
     * to specified direction.
     * Acceptable values:
     *   - `"auto"`
     *   - `"below"`
     *   - `"bottom"`
     *   - `"above"`
     *   - `"top"`
     */
    openDirection: {
      type: String,
      default: 'auto',
      validator: function validator(value) {
        var acceptableValues = ['auto', 'top', 'bottom', 'above', 'below'];
        return includes_includes(acceptableValues, value);
      }
    },
    /**
     * Whether to automatically open the menu when the control is clicked.
     */
    openOnClick: {
      type: Boolean,
      default: true
    },
    /**
     * Whether to automatically open the menu when the control is focused.
     */
    openOnFocus: {
      type: Boolean,
      default: false
    },
    /**
     * Array of available options.
     * @type {node[]}
     */
    options: {
      type: Array
    },
    /**
     * Field placeholder, displayed when there's no value.
     */
    placeholder: {
      type: String,
      default: 'Select...'
    },
    /**
     * Applies HTML5 required attribute when needed.
     */
    required: {
      type: Boolean,
      default: false
    },
    /**
     * Text displayed asking user whether to retry loading children options.
     */
    retryText: {
      type: String,
      default: 'Retry?'
    },
    /**
     * Title for the retry button.
     */
    retryTitle: {
      type: String,
      default: 'Click to retry'
    },
    /**
     * Enable searching feature?
     */
    searchable: {
      type: Boolean,
      default: true
    },
    /**
     * Search in ancestor nodes too.
     */
    searchNested: {
      type: Boolean,
      default: false
    },
    /**
     * Text tip to prompt for async search.
     */
    searchPromptText: {
      type: String,
      default: 'Type to search...'
    },
    /**
     * Whether to show a children count next to the label of each branch node.
     */
    showCount: {
      type: Boolean,
      default: false
    },
    /**
     * Used in conjunction with `showCount` to specify which type of count number should be displayed.
     * Acceptable values:
     *   - "ALL_CHILDREN"
     *   - "ALL_DESCENDANTS"
     *   - "LEAF_CHILDREN"
     *   - "LEAF_DESCENDANTS"
     */
    showCountOf: {
      type: String,
      default: ALL_CHILDREN,
      validator: function validator(value) {
        var acceptableValues = [ALL_CHILDREN, ALL_DESCENDANTS, LEAF_CHILDREN, LEAF_DESCENDANTS];
        return includes_includes(acceptableValues, value);
      }
    },
    /**
     * Whether to show children count when searching.
     * Fallbacks to the value of `showCount` when not specified.
     * @type {boolean}
     */
    showCountOnSearch: null,
    /**
     * In which order the selected options should be displayed in trigger & sorted in `value` array.
     * Used for multi-select mode only.
     * Acceptable values:
     *   - "ORDER_SELECTED"
     *   - "LEVEL"
     *   - "INDEX"
     */
    sortValueBy: {
      type: String,
      default: ORDER_SELECTED,
      validator: function validator(value) {
        var acceptableValues = [ORDER_SELECTED, LEVEL, INDEX];
        return includes_includes(acceptableValues, value);
      }
    },
    /**
     * Tab index of the control.
     */
    tabIndex: {
      type: Number,
      default: 0
    },
    /**
     * The value of the control.
     * Should be `id` or `node` object for single-select mode, or an array of `id` or `node` object for multi-select mode.
     * Its format depends on the `valueFormat` prop.
     * For most cases, just use `v-model` instead.
     * @type {?Array}
     */
    modelValue: null,
    /**
     * Which kind of nodes should be included in the `value` array in multi-select mode.
     * Acceptable values:
     *   - "ALL" - Any node that is checked will be included in the `value` array
     *   - "BRANCH_PRIORITY" (default) - If a branch node is checked, all its descendants will be excluded in the `value` array
     *   - "LEAF_PRIORITY" - If a branch node is checked, this node itself and its branch descendants will be excluded from the `value` array but its leaf descendants will be included
     *   - "ALL_WITH_INDETERMINATE" - Any node that is checked will be included in the `value` array, plus indeterminate nodes
     */
    valueConsistsOf: {
      type: String,
      default: BRANCH_PRIORITY,
      validator: function validator(value) {
        var acceptableValues = [ALL, BRANCH_PRIORITY, LEAF_PRIORITY, ALL_WITH_INDETERMINATE];
        return includes_includes(acceptableValues, value);
      }
    },
    /**
     * Format of `value` prop.
     * Note that, when set to `"object"`, only `id` & `label` properties are required in each `node` object in `value` prop.
     * Acceptable values:
     *   - "id"
     *   - "object"
     */
    valueFormat: {
      type: String,
      default: 'id'
    },
    /**
     * Enable virtual scrolling: only the options inside the visible area of the menu are rendered.
     * Recommended for large option lists. Every row must have the same height (see `virtualRowHeight`).
     */
    virtual: {
      type: Boolean,
      default: false
    },
    /**
     * Height (in px) of each row when `virtual` is enabled.
     */
    virtualRowHeight: {
      type: Number,
      default: 28
    },
    /**
     * Number of extra rows rendered above and below the visible area when `virtual` is enabled.
     */
    virtualBuffer: {
      type: Number,
      default: 10
    },
    /**
     * z-index of the menu.
     */
    zIndex: {
      type: [Number, String],
      default: 999
    }
  },
  data: function data() {
    return {
      trigger: {
        // Is the control focused?
        isFocused: false,
        // User entered search query - value of the input.
        searchQuery: ''
      },
      menu: {
        // Is the menu opened?
        isOpen: false,
        // Id of current highlighted option.
        current: null,
        // The scroll position before last menu closing.
        lastScrollPosition: 0,
        // Which direction to open the menu.
        placement: 'bottom'
      },
      forest: {
        // Normalized options.
        normalizedOptions: [],
        // <id, node> map for quick look-up.
        nodeMap: createMap(),
        // <id, checkedState> map, used for multi-select mode.
        checkedStateMap: createMap(),
        // Id list of all selected options.
        selectedNodeIds: this.extractCheckedNodeIdsFromValue(),
        // <id, true> map for fast checking:
        //   if (forest.selectedNodeIds.indexOf(id) !== -1) forest.selectedNodeMap[id] === true
        selectedNodeMap: createMap()
      },
      // States of root options.
      rootOptionsStates: createAsyncOptionsStates(),
      localSearch: {
        // Has user entered any query to search local options?
        active: false,
        // Has any options matched the search query?
        noResults: true,
        // <id, countObject> map for counting matched children/descendants.
        countMap: createMap()
      },
      // <searchQuery, remoteSearchEntry> map.
      remoteSearch: createMap()
    };
  },
  computed: {
    /* eslint-disable valid-jsdoc */
    /**
     * Normalized nodes that have been selected.
     * @type {node[]}
     */
    selectedNodes: function selectedNodes() {
      return this.forest.selectedNodeIds.map(this.getNode);
    },
    /**
     * Id list of selected nodes with `sortValueBy` prop applied.
     * @type {nodeId[]}
     */
    internalValue: function internalValue() {
      var _this = this;
      var internalValue;

      // istanbul ignore else
      if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === ALL) {
        internalValue = this.forest.selectedNodeIds.slice();
      } else if (this.valueConsistsOf === BRANCH_PRIORITY) {
        internalValue = this.forest.selectedNodeIds.filter(function (id) {
          var node = _this.getNode(id);
          if (node.isRootNode) return true;
          return !_this.isSelected(node.parentNode);
        });
      } else if (this.valueConsistsOf === LEAF_PRIORITY) {
        internalValue = this.forest.selectedNodeIds.filter(function (id) {
          var node = _this.getNode(id);
          if (node.isLeaf) return true;
          return node.children.length === 0;
        });
      } else if (this.valueConsistsOf === ALL_WITH_INDETERMINATE) {
        var _internalValue;
        var indeterminateNodeIds = [];
        internalValue = this.forest.selectedNodeIds.slice();
        this.selectedNodes.forEach(function (selectedNode) {
          selectedNode.ancestors.forEach(function (ancestor) {
            if (includes_includes(indeterminateNodeIds, ancestor.id)) return;
            if (includes_includes(internalValue, ancestor.id)) return;
            indeterminateNodeIds.push(ancestor.id);
          });
        });
        (_internalValue = internalValue).push.apply(_internalValue, indeterminateNodeIds);
      }
      if (this.sortValueBy === LEVEL) {
        internalValue.sort(function (a, b) {
          return sortValueByLevel(_this.getNode(a), _this.getNode(b));
        });
      } else if (this.sortValueBy === INDEX) {
        internalValue.sort(function (a, b) {
          return sortValueByIndex(_this.getNode(a), _this.getNode(b));
        });
      }
      return internalValue;
    },
    /**
     * Has any option been selected?
     * @type {boolean}
     */
    hasValue: function hasValue() {
      return this.internalValue.length > 0;
    },
    /**
     * Single-select mode?
     * @type {boolean}
     */
    single: function single() {
      return !this.multiple;
    },
    /**
     * Id list of nodes displayed in the menu. Nodes that are considered NOT visible:
     *   - descendants of a collapsed branch node
     *   - in local search mode, nodes that are not matched, unless
     *       - it's a branch node and has matched descendants
     *       - it's a leaf node and its parent node is explicitly set to show all children
     * @type {id[]}
     */
    visibleOptionIds: function visibleOptionIds() {
      var _this2 = this;
      var visibleOptionIds = [];
      this.traverseAllNodesByIndex(function (node) {
        if (!_this2.localSearch.active || _this2.shouldOptionBeIncludedInSearchResult(node)) {
          visibleOptionIds.push(node.id);
        }
        // Skip the traversal of descendants of a branch node if it's not expanded.
        if (node.isBranch && !_this2.shouldExpand(node)) {
          return false;
        }
      });
      return visibleOptionIds;
    },
    /**
     * Flat list of rows displayed in the menu, used for virtual scrolling.
     * Contains the visible options (see `visibleOptionIds`) plus the tips shown inside
     * expanded branch nodes (no children / loading / loading error), in display order.
     * @type {{type: string, key: string, node: node}[]}
     */
    virtualRows: function virtualRows() {
      var _this3 = this;
      var rows = [];
      var _walk = function walk(nodes) {
        nodes.forEach(function (node) {
          if (!_this3.localSearch.active || _this3.shouldOptionBeIncludedInSearchResult(node)) {
            rows.push({
              type: 'option',
              key: "option-".concat(node.id),
              node: node
            });
          }
          if (!node.isBranch || !_this3.shouldExpand(node)) return;
          _walk(node.children);
          var childrenStates = node.childrenStates;
          if (childrenStates.isLoaded && node.children.length === 0) {
            rows.push({
              type: 'no-children',
              key: "no-children-".concat(node.id),
              node: node
            });
          }
          if (childrenStates.isLoading) {
            rows.push({
              type: 'loading',
              key: "loading-".concat(node.id),
              node: node
            });
          }
          if (childrenStates.loadingError) {
            rows.push({
              type: 'error',
              key: "error-".concat(node.id),
              node: node
            });
          }
        });
      };
      _walk(this.forest.normalizedOptions);
      return rows;
    },
    /**
     * Has any option should be displayed in the menu?
     * @type {boolean}
     */
    hasVisibleOptions: function hasVisibleOptions() {
      return this.visibleOptionIds.length !== 0;
    },
    /**
     * Should show children count when searching?
     * @type {boolean}
     */
    showCountOnSearchComputed: function showCountOnSearchComputed() {
      // Vue doesn't allow setting default prop value based on another prop value.
      // So use computed property as a workaround.
      // https://github.com/vuejs/vue/issues/6358
      return typeof this.showCountOnSearch === 'boolean' ? this.showCountOnSearch : this.showCount;
    },
    /**
     * Is there any branch node?
     * @type {boolean}
     */
    hasBranchNodes: function hasBranchNodes() {
      return this.forest.normalizedOptions.some(function (rootNode) {
        return rootNode.isBranch;
      });
    },
    shouldFlattenOptions: function shouldFlattenOptions() {
      return this.localSearch.active && this.flattenSearchResults;
    } /* eslint-enable valid-jsdoc */
  },
  watch: {
    alwaysOpen: function alwaysOpen(newValue) {
      if (newValue) this.openMenu();else this.closeMenu();
    },
    branchNodesFirst: function branchNodesFirst() {
      this.initialize();
    },
    disabled: function disabled(newValue) {
      // force close the menu after disabling the control
      if (newValue && this.menu.isOpen) this.closeMenu();else if (!newValue && !this.menu.isOpen && this.alwaysOpen) this.openMenu();
    },
    flat: function flat() {
      this.initialize();
    },
    internalValue: function internalValue(newValue, oldValue) {
      var hasChanged = quickDiff(newValue, oldValue);
      // #122
      // Vue would trigger this watcher when `newValue` and `oldValue` are shallow-equal.
      // We emit the `input` event only when the value actually changes.
      if (hasChanged) this.$emit('update:modelValue', this.getValue(), this.getInstanceId());
    },
    matchKeys: function matchKeys() {
      this.initialize();
    },
    multiple: function multiple(newValue) {
      // We need to rebuild the state when switching from single-select mode
      // to multi-select mode.
      // istanbul ignore else
      if (newValue) this.buildForestState();
    },
    options: {
      handler: function handler() {
        if (this.async) return;
        // Re-initialize options when the `options` prop has changed.
        this.initialize();
        this.rootOptionsStates.isLoaded = Array.isArray(this.options);
      },
      deep: true,
      immediate: true
    },
    'trigger.searchQuery': function triggerSearchQuery() {
      if (this.async) {
        this.handleRemoteSearch();
      } else {
        this.handleLocalSearch();
      }
      this.$emit('search-change', this.trigger.searchQuery, this.getInstanceId());
    },
    value: function value() {
      var nodeIdsFromValue = this.extractCheckedNodeIdsFromValue();
      var hasChanged = quickDiff(nodeIdsFromValue, this.internalValue);
      if (hasChanged) this.fixSelectedNodeIds(nodeIdsFromValue);
    }
  },
  methods: {
    verifyProps: function verifyProps() {
      var _this4 = this;
      warning(function () {
        return _this4.async ? _this4.searchable : true;
      }, function () {
        return 'For async search mode, the value of "searchable" prop must be true.';
      });
      if (this.options == null && !this.loadOptions) {
        warning(function () {
          return false;
        }, function () {
          return 'Are you meant to dynamically load options? You need to use "loadOptions" prop.';
        });
      }
      if (this.flat) {
        warning(function () {
          return _this4.multiple;
        }, function () {
          return 'You are using flat mode. But you forgot to add "multiple=true"?';
        });
      }
      if (!this.flat) {
        var propNames = ['autoSelectAncestors', 'autoSelectDescendants', 'autoDeselectAncestors', 'autoDeselectDescendants'];
        propNames.forEach(function (propName) {
          warning(function () {
            return !_this4[propName];
          }, function () {
            return "\"".concat(propName, "\" only applies to flat mode.");
          });
        });
      }
    },
    resetFlags: function resetFlags() {
      this._blurOnSelect = false;
    },
    initialize: function initialize() {
      var options = this.async ? this.getRemoteSearchEntry().options : this.options;
      if (Array.isArray(options)) {
        // In case we are re-initializing options, keep the old state tree temporarily.
        var prevNodeMap = this.forest.nodeMap;
        this.forest.nodeMap = createMap();
        this.keepDataOfSelectedNodes(prevNodeMap);
        this.forest.normalizedOptions = this.normalize(NO_PARENT_NODE, options, prevNodeMap);
        // Cases that need fixing `selectedNodeIds`:
        //   1) Children options of a checked node have been delayed loaded,
        //      we should also mark these children as checked. (multi-select mode)
        //   2) Root options have been delayed loaded, we need to initialize states
        //      of these nodes. (multi-select mode)
        //   3) Async search mode.
        this.fixSelectedNodeIds(this.internalValue);
      } else {
        this.forest.normalizedOptions = [];
      }
    },
    getInstanceId: function getInstanceId() {
      return this.instanceId == null ? this.id : this.instanceId;
    },
    getValue: function getValue() {
      var _this5 = this;
      if (this.valueFormat === 'id') {
        return this.multiple ? this.internalValue.slice() : this.internalValue[0];
      }
      var rawNodes = this.internalValue.map(function (id) {
        return _this5.getNode(id).raw;
      });
      return this.multiple ? rawNodes : rawNodes[0];
    },
    getNode: function getNode(nodeId) {
      warning(function () {
        return nodeId != null;
      }, function () {
        return "Invalid node id: ".concat(nodeId);
      });
      if (nodeId == null) return null;
      return nodeId in this.forest.nodeMap ? this.forest.nodeMap[nodeId] : this.createFallbackNode(nodeId);
    },
    createFallbackNode: function createFallbackNode(id) {
      // In case there is a default selected node that is not loaded into the tree yet,
      // we create a fallback node to keep the component working.
      // When the real data is loaded, we'll override this fake node.

      var raw = this.extractNodeFromValue(id);
      var label = this.enhancedNormalizer(raw).label || "".concat(id, " (unknown)");
      var fallbackNode = {
        id: id,
        label: label,
        ancestors: [],
        parentNode: NO_PARENT_NODE,
        isFallbackNode: true,
        isRootNode: true,
        isLeaf: true,
        isBranch: false,
        isDisabled: false,
        isNew: false,
        index: [-1],
        level: 0,
        raw: raw
      };
      return this.forest.nodeMap[id] = fallbackNode;
      // return this.$ set(this.forest.nodeMap, id, fallbackNode)
    },
    extractCheckedNodeIdsFromValue: function extractCheckedNodeIdsFromValue() {
      var _this6 = this;
      if (this.modelValue == null) return [];
      if (this.valueFormat === 'id') {
        return this.multiple ? this.modelValue.slice() : [this.modelValue];
      }
      return (this.multiple ? this.modelValue : [this.modelValue]).map(function (node) {
        return _this6.enhancedNormalizer(node);
      }).map(function (node) {
        return node.id;
      });
    },
    extractNodeFromValue: function extractNodeFromValue(id) {
      var _this7 = this;
      var defaultNode = {
        id: id
      };
      if (this.valueFormat === 'id') {
        return defaultNode;
      }
      var valueArray = this.multiple ? Array.isArray(this.modelValue) ? this.modelValue : [] : this.modelValue ? [this.modelValue] : [];
      var matched = find_find(valueArray, function (node) {
        return node && _this7.enhancedNormalizer(node).id === id;
      });
      return matched || defaultNode;
    },
    fixSelectedNodeIds: function fixSelectedNodeIds(nodeIdListOfPrevValue) {
      var _this8 = this;
      var nextSelectedNodeIds = [];

      // istanbul ignore else
      if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === ALL) {
        nextSelectedNodeIds = nodeIdListOfPrevValue;
      } else if (this.valueConsistsOf === BRANCH_PRIORITY) {
        nodeIdListOfPrevValue.forEach(function (nodeId) {
          nextSelectedNodeIds.push(nodeId);
          var node = _this8.getNode(nodeId);
          if (node.isBranch) _this8.traverseDescendantsBFS(node, function (descendant) {
            nextSelectedNodeIds.push(descendant.id);
          });
        });
      } else if (this.valueConsistsOf === LEAF_PRIORITY) {
        var map = createMap();
        var queue = nodeIdListOfPrevValue.slice();
        while (queue.length) {
          var nodeId = queue.shift();
          var node = this.getNode(nodeId);
          nextSelectedNodeIds.push(nodeId);
          if (node.isRootNode) continue;
          if (!(node.parentNode.id in map)) map[node.parentNode.id] = node.parentNode.children.length;
          if (--map[node.parentNode.id] === 0) queue.push(node.parentNode.id);
        }
      } else if (this.valueConsistsOf === ALL_WITH_INDETERMINATE) {
        var _map = createMap();
        var _queue = nodeIdListOfPrevValue.filter(function (nodeId) {
          var node = _this8.getNode(nodeId);
          return node.isLeaf || node.children.length === 0;
        });
        while (_queue.length) {
          var _nodeId = _queue.shift();
          var _node = this.getNode(_nodeId);
          nextSelectedNodeIds.push(_nodeId);
          if (_node.isRootNode) continue;
          if (!(_node.parentNode.id in _map)) _map[_node.parentNode.id] = _node.parentNode.children.length;
          if (--_map[_node.parentNode.id] === 0) _queue.push(_node.parentNode.id);
        }
      }
      var hasChanged = quickDiff(this.forest.selectedNodeIds, nextSelectedNodeIds);
      // If `nextSelectedNodeIds` doesn't actually differ from old `selectedNodeIds`,
      // we don't make the assignment to avoid triggering its watchers which may cause
      // unnecessary calculations.
      if (hasChanged) this.forest.selectedNodeIds = nextSelectedNodeIds;
      this.buildForestState();
    },
    keepDataOfSelectedNodes: function keepDataOfSelectedNodes(prevNodeMap) {
      var _this9 = this;
      // In case there is any selected node that is not present in the new `options` array.
      // It could be useful for async search mode.
      this.forest.selectedNodeIds.forEach(function (id) {
        if (!prevNodeMap[id]) return;
        var node = _objectSpread2(_objectSpread2({}, prevNodeMap[id]), {}, {
          isFallbackNode: true
        });
        // this.$ set(this.forest.nodeMap, id, node)
        _this9.forest.nodeMap[id] = node;
      });
    },
    isSelected: function isSelected(node) {
      // whether a node is selected (single-select mode) or fully-checked (multi-select mode)
      return this.forest.selectedNodeMap[node.id] === true;
    },
    traverseDescendantsBFS: function traverseDescendantsBFS(parentNode, callback) {
      // istanbul ignore if
      if (!parentNode.isBranch) return;
      var queue = parentNode.children.slice();
      while (queue.length) {
        var currNode = queue[0];
        if (currNode.isBranch) queue.push.apply(queue, _toConsumableArray(currNode.children));
        callback(currNode);
        queue.shift();
      }
    },
    traverseDescendantsDFS: function traverseDescendantsDFS(parentNode, callback) {
      var _this0 = this;
      if (!parentNode.isBranch) return;
      parentNode.children.forEach(function (child) {
        // deep-level node first
        _this0.traverseDescendantsDFS(child, callback);
        callback(child);
      });
    },
    traverseAllNodesDFS: function traverseAllNodesDFS(callback) {
      var _this1 = this;
      this.forest.normalizedOptions.forEach(function (rootNode) {
        // deep-level node first
        _this1.traverseDescendantsDFS(rootNode, callback);
        callback(rootNode);
      });
    },
    traverseAllNodesByIndex: function traverseAllNodesByIndex(callback) {
      var _walk2 = function walk(parentNode) {
        parentNode.children.forEach(function (child) {
          if (callback(child) !== false && child.isBranch) {
            _walk2(child);
          }
        });
      };

      // To simplify the code logic of traversal,
      // we create a fake root node that holds all the root options.
      _walk2({
        children: this.forest.normalizedOptions
      });
    },
    toggleClickOutsideEvent: function toggleClickOutsideEvent(enabled) {
      if (enabled) {
        document.addEventListener('mousedown', this.handleClickOutside, false);
      } else {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
      }
    },
    getValueContainer: function getValueContainer() {
      return this.$refs.control.$refs['value-container'];
    },
    getInput: function getInput() {
      return this.getValueContainer().$refs.input;
    },
    focusInput: function focusInput() {
      this.getInput().focus();
    },
    blurInput: function blurInput() {
      this.getInput().blur();
    },
    handleMouseDown: onLeftClick(function handleMouseDown(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (this.disabled) return;
      var isClickedOnValueContainer = this.getValueContainer().$el.contains(evt.target);
      if (isClickedOnValueContainer && !this.menu.isOpen && (this.openOnClick || this.trigger.isFocused)) {
        this.openMenu();
      }
      if (this._blurOnSelect) {
        this.blurInput();
      } else {
        // Focus the input or prevent blurring.
        this.focusInput();
      }
      this.resetFlags();
    }),
    handleClickOutside: function handleClickOutside(evt) {
      // istanbul ignore else
      if (this.$refs.wrapper && !this.$refs.wrapper.contains(evt.target)) {
        this.blurInput();
        this.closeMenu();
      }
    },
    handleLocalSearch: function handleLocalSearch() {
      var _this10 = this;
      var searchQuery = this.trigger.searchQuery;
      var done = function done() {
        return _this10.resetHighlightedOptionWhenNecessary(true);
      };
      if (!searchQuery) {
        // Exit sync search mode.
        this.localSearch.active = false;
        return done();
      }

      // Enter sync search mode.
      this.localSearch.active = true;

      // Reset states.
      this.localSearch.noResults = true;
      this.traverseAllNodesDFS(function (node) {
        if (node.isBranch) {
          node.isExpandedOnSearch = false;
          node.showAllChildrenOnSearch = false;
          node.isMatched = false;
          node.hasMatchedDescendants = false;
          _this10.localSearch.countMap[node.id] = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, ALL_CHILDREN, 0), ALL_DESCENDANTS, 0), LEAF_CHILDREN, 0), LEAF_DESCENDANTS, 0);

          // this.$ set(this.localSearch.countMap, node.id, {
          //   [ALL_CHILDREN]: 0,
          //   [ALL_DESCENDANTS]: 0,
          //   [LEAF_CHILDREN]: 0,
          //   [LEAF_DESCENDANTS]: 0,
          // })
        }
      });
      var lowerCasedSearchQuery = searchQuery.trim().toLocaleLowerCase();
      var splitSearchQuery = lowerCasedSearchQuery.replace(/\s+/g, ' ').split(' ');
      this.traverseAllNodesDFS(function (node) {
        if (_this10.searchNested && splitSearchQuery.length > 1) {
          node.isMatched = splitSearchQuery.every(function (filterValue) {
            return treeselectMixin_match(false, filterValue, node.nestedSearchLabel);
          });
        } else {
          node.isMatched = _this10.matchKeys.some(function (matchKey) {
            return treeselectMixin_match(!_this10.disableFuzzyMatching, lowerCasedSearchQuery, node.lowerCased[matchKey]);
          });
        }
        if (node.isMatched) {
          _this10.localSearch.noResults = false;
          node.ancestors.forEach(function (ancestor) {
            return _this10.localSearch.countMap[ancestor.id][ALL_DESCENDANTS]++;
          });
          if (node.isLeaf) node.ancestors.forEach(function (ancestor) {
            return _this10.localSearch.countMap[ancestor.id][LEAF_DESCENDANTS]++;
          });
          if (node.parentNode !== NO_PARENT_NODE) {
            _this10.localSearch.countMap[node.parentNode.id][ALL_CHILDREN] += 1;
            // istanbul ignore else
            if (node.isLeaf) _this10.localSearch.countMap[node.parentNode.id][LEAF_CHILDREN] += 1;
          }
        }
        if ((node.isMatched || node.isBranch && node.isExpandedOnSearch) && node.parentNode !== NO_PARENT_NODE) {
          node.parentNode.isExpandedOnSearch = true;
          node.parentNode.hasMatchedDescendants = true;
        }
      });
      done();
    },
    handleRemoteSearch: function handleRemoteSearch() {
      var _this11 = this;
      var searchQuery = this.trigger.searchQuery;
      var entry = this.getRemoteSearchEntry();
      var done = function done() {
        _this11.initialize();
        _this11.resetHighlightedOptionWhenNecessary(true);
      };
      if ((searchQuery === '' || this.cacheOptions) && entry.isLoaded) {
        return done();
      }
      this.callLoadOptionsProp({
        action: ASYNC_SEARCH,
        args: {
          searchQuery: searchQuery
        },
        isPending: function isPending() {
          return entry.isLoading;
        },
        start: function start() {
          entry.isLoading = true;
          entry.isLoaded = false;
          entry.loadingError = '';
        },
        succeed: function succeed(options) {
          entry.isLoaded = true;
          entry.options = options;
          // When the request completes, the search query may have changed.
          // We only show these options if they are for the current search query.
          if (_this11.trigger.searchQuery === searchQuery) done();
        },
        fail: function fail(err) {
          entry.loadingError = getErrorMessage(err);
        },
        end: function end() {
          entry.isLoading = false;
        }
      });
    },
    getRemoteSearchEntry: function getRemoteSearchEntry() {
      var _this12 = this;
      var searchQuery = this.trigger.searchQuery;
      var entry = this.remoteSearch[searchQuery] || _objectSpread2(_objectSpread2({}, createAsyncOptionsStates()), {}, {
        options: []
      });

      // Vue doesn't support directly watching on objects.
      this.$watch(function () {
        return entry.options;
      }, function () {
        // TODO: potential redundant re-initialization.
        if (_this12.trigger.searchQuery === searchQuery) _this12.initialize();
      }, {
        deep: true
      });
      if (searchQuery === '') {
        if (Array.isArray(this.defaultOptions)) {
          entry.options = this.defaultOptions;
          entry.isLoaded = true;
          return entry;
        } else if (this.defaultOptions !== true) {
          entry.isLoaded = true;
          return entry;
        }
      }
      if (!this.remoteSearch[searchQuery]) {
        // this.$ set(this.remoteSearch, searchQuery, entry)
        this.remoteSearch[searchQuery] = entry;
      }
      return entry;
    },
    shouldExpand: function shouldExpand(node) {
      return this.localSearch.active ? node.isExpandedOnSearch : node.isExpanded;
    },
    shouldOptionBeIncludedInSearchResult: function shouldOptionBeIncludedInSearchResult(node) {
      // 1) This option is matched.
      if (node.isMatched) return true;
      // 2) This option is not matched, but has matched descendant(s).
      if (node.isBranch && node.hasMatchedDescendants && !this.flattenSearchResults) return true;
      // 3) This option's parent has no matched descendants,
      //    but after being expanded, all its children should be shown.
      if (!node.isRootNode && node.parentNode.showAllChildrenOnSearch) return true;
      // 4) The default case.
      return false;
    },
    shouldShowOptionInMenu: function shouldShowOptionInMenu(node) {
      if (this.localSearch.active && !this.shouldOptionBeIncludedInSearchResult(node)) {
        return false;
      }
      return true;
    },
    getControl: function getControl() {
      return this.$refs.control.$el;
    },
    getMenu: function getMenu() {
      var ref = this.appendToBody ? this.$refs.portal.portalTarget : this;
      var $menu = ref.$refs.menu.$refs.menu;
      return $menu && $menu.nodeName !== '#comment' ? $menu : null;
    },
    setCurrentHighlightedOption: function setCurrentHighlightedOption(node) {
      var _this13 = this;
      var scroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var prev = this.menu.current;
      if (prev != null && prev in this.forest.nodeMap) {
        this.forest.nodeMap[prev].isHighlighted = false;
      }
      this.menu.current = node.id;
      node.isHighlighted = true;
      if (this.menu.isOpen && scroll) {
        var scrollToOption = function scrollToOption() {
          var $menu = _this13.getMenu();
          if (_this13.virtual) return _this13.scrollToVirtualRow($menu, node);
          var $option = $menu.querySelector(".vue-treeselect__option[data-id=\"".concat(node.id, "\"]"));
          if ($option) scrollIntoView($menu, $option);
        };

        // In case `openMenu()` is just called and the menu is not rendered yet.
        if (this.getMenu()) {
          scrollToOption();
        } else {
          // istanbul ignore next
          this.$nextTick(scrollToOption);
        }
      }
    },
    scrollToVirtualRow: function scrollToVirtualRow($menu, node) {
      // With virtual scrolling the option may not be rendered yet,
      // so compute its position from the row index instead of querying the DOM.
      if (!$menu) return;
      var index = this.virtualRows.findIndex(function (row) {
        return row.type === 'option' && row.node.id === node.id;
      });
      if (index === -1) return;
      var $list = $menu.querySelector('.vue-treeselect__list--virtual');
      var rowTop = ($list ? $list.offsetTop : 0) + index * this.virtualRowHeight;
      var rowBottom = rowTop + this.virtualRowHeight;
      if (rowTop < $menu.scrollTop) {
        $menu.scrollTop = rowTop;
      } else if (rowBottom > $menu.scrollTop + $menu.clientHeight) {
        $menu.scrollTop = rowBottom - $menu.clientHeight;
      }
    },
    resetHighlightedOptionWhenNecessary: function resetHighlightedOptionWhenNecessary() {
      var forceReset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var current = this.menu.current;
      if (forceReset || current == null || !(current in this.forest.nodeMap) || !this.shouldShowOptionInMenu(this.getNode(current))) {
        this.highlightFirstOption();
      }
    },
    highlightFirstOption: function highlightFirstOption() {
      if (!this.hasVisibleOptions) return;
      var first = this.visibleOptionIds[0];
      this.setCurrentHighlightedOption(this.getNode(first));
    },
    highlightPrevOption: function highlightPrevOption() {
      if (!this.hasVisibleOptions) return;
      var prev = this.visibleOptionIds.indexOf(this.menu.current) - 1;
      if (prev === -1) return this.highlightLastOption();
      this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[prev]));
    },
    highlightNextOption: function highlightNextOption() {
      if (!this.hasVisibleOptions) return;
      var next = this.visibleOptionIds.indexOf(this.menu.current) + 1;
      if (next === this.visibleOptionIds.length) return this.highlightFirstOption();
      this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[next]));
    },
    highlightLastOption: function highlightLastOption() {
      if (!this.hasVisibleOptions) return;
      var last = last_default()(this.visibleOptionIds);
      this.setCurrentHighlightedOption(this.getNode(last));
    },
    resetSearchQuery: function resetSearchQuery() {
      this.trigger.searchQuery = '';
    },
    closeMenu: function closeMenu() {
      if (!this.menu.isOpen || !this.disabled && this.alwaysOpen) return;
      this.saveMenuScrollPosition();
      this.menu.isOpen = false;
      this.toggleClickOutsideEvent(false);
      this.resetSearchQuery();
      this.$emit('close', this.getValue(), this.getInstanceId());
    },
    openMenu: function openMenu() {
      if (this.disabled || this.menu.isOpen) return;
      this.menu.isOpen = true;
      this.$nextTick(this.resetHighlightedOptionWhenNecessary);
      this.$nextTick(this.restoreMenuScrollPosition);
      if (!this.options && !this.async) this.loadRootOptions();
      this.toggleClickOutsideEvent(true);
      this.$emit('open', this.getInstanceId());
    },
    toggleMenu: function toggleMenu() {
      if (this.menu.isOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    },
    toggleExpanded: function toggleExpanded(node) {
      var nextState;
      if (this.localSearch.active) {
        nextState = node.isExpandedOnSearch = !node.isExpandedOnSearch;
        if (nextState) node.showAllChildrenOnSearch = true;
      } else {
        nextState = node.isExpanded = !node.isExpanded;
      }
      if (nextState && !node.childrenStates.isLoaded) {
        this.loadChildrenOptions(node);
      }
    },
    buildForestState: function buildForestState() {
      var _this14 = this;
      var selectedNodeMap = createMap();
      this.forest.selectedNodeIds.forEach(function (selectedNodeId) {
        selectedNodeMap[selectedNodeId] = true;
      });
      this.forest.selectedNodeMap = selectedNodeMap;
      var checkedStateMap = createMap();
      if (this.multiple) {
        this.traverseAllNodesByIndex(function (node) {
          checkedStateMap[node.id] = UNCHECKED;
        });
        this.selectedNodes.forEach(function (selectedNode) {
          checkedStateMap[selectedNode.id] = CHECKED;
          if (!_this14.flat && !_this14.disableBranchNodes) {
            selectedNode.ancestors.forEach(function (ancestorNode) {
              if (!_this14.isSelected(ancestorNode)) {
                checkedStateMap[ancestorNode.id] = INDETERMINATE;
              }
            });
          }
        });
      }
      this.forest.checkedStateMap = checkedStateMap;
    },
    enhancedNormalizer: function enhancedNormalizer(raw) {
      return _objectSpread2(_objectSpread2({}, raw), this.normalizer(raw, this.getInstanceId()));
    },
    normalize: function normalize(parentNode, nodes, prevNodeMap) {
      var _this15 = this;
      // Nodes are built as plain objects and written to the raw node map: writing every
      // property through Vue's reactive proxies is very slow for large trees.
      // They become reactive as soon as they are read through `this.forest`.
      var nodeMap = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toRaw)(this.forest.nodeMap);
      prevNodeMap = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toRaw)(prevNodeMap);
      var normalizedOptions = nodes
      // Read the source node without its reactive proxy (if any), but keep the original as `raw`.
      .map(function (node) {
        return [_this15.enhancedNormalizer((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toRaw)(node)), node];
      }).map(function (_ref, index) {
        var _ref2 = _slicedToArray(_ref, 2),
          node = _ref2[0],
          raw = _ref2[1];
        _this15.checkDuplication(node);
        _this15.verifyNodeShape(node);
        var id = node.id,
          label = node.label,
          children = node.children,
          isDefaultExpanded = node.isDefaultExpanded;
        var isRootNode = parentNode === NO_PARENT_NODE;
        var level = isRootNode ? 0 : parentNode.level + 1;
        var isBranch = Array.isArray(children) || children === null;
        var isLeaf = !isBranch;
        var isDisabled = !!node.isDisabled || !_this15.flat && !isRootNode && parentNode.isDisabled;
        var isNew = !!node.isNew;
        var lowerCased = _this15.matchKeys.reduce(function (prev, key) {
          return _objectSpread2(_objectSpread2({}, prev), {}, _defineProperty({}, key, stringifyOptionPropValue(node[key]).toLocaleLowerCase()));
        }, {});
        var nestedSearchLabel = isRootNode ? lowerCased.label : parentNode.nestedSearchLabel + ' ' + lowerCased.label;

        // this.$ set(this.forest.nodeMap, id, createMap())
        var normalized = createMap();
        nodeMap[id] = normalized;
        normalized.id = id;
        normalized.label = label;
        normalized.level = level;
        normalized.ancestors = isRootNode ? [] : [parentNode].concat(parentNode.ancestors);
        normalized.index = (isRootNode ? [] : parentNode.index).concat(index);
        normalized.parentNode = parentNode;
        normalized.lowerCased = lowerCased;
        normalized.nestedSearchLabel = nestedSearchLabel;
        normalized.isDisabled = isDisabled;
        normalized.isNew = isNew;
        normalized.isMatched = false;
        normalized.isHighlighted = false;
        normalized.isBranch = isBranch;
        normalized.isLeaf = isLeaf;
        normalized.isRootNode = isRootNode;
        normalized.raw = raw;

        // this.$ set(normalized, 'id', id)
        // this.$ set(normalized, 'label', label)
        // this.$ set(normalized, 'level', level)
        // this.$ set(normalized, 'ancestors', isRootNode ? [] : [ parentNode ].concat(parentNode.ancestors))
        // this.$ set(normalized, 'index', (isRootNode ? [] : parentNode.index).concat(index))
        // this.$ set(normalized, 'parentNode', parentNode)
        // this.$ set(normalized, 'lowerCased', lowerCased)
        // this.$ set(normalized, 'nestedSearchLabel', nestedSearchLabel)
        // this.$ set(normalized, 'isDisabled', isDisabled)
        // this.$ set(normalized, 'isNew', isNew)
        // this.$ set(normalized, 'isMatched', false)
        // this.$ set(normalized, 'isHighlighted', false)
        // this.$ set(normalized, 'isBranch', isBranch)
        // this.$ set(normalized, 'isLeaf', isLeaf)
        // this.$ set(normalized, 'isRootNode', isRootNode)
        // this.$ set(normalized, 'raw', raw)

        if (isBranch) {
          var isLoaded = Array.isArray(children);

          // this.$ set(normalized, 'childrenStates', {
          //   ...createAsyncOptionsStates(),
          //   isLoaded,
          // })
          normalized.childrenStates = _objectSpread2(_objectSpread2({}, createAsyncOptionsStates()), {}, {
            isLoaded: isLoaded
          });

          // this.$ set(normalized, 'isExpanded', typeof isDefaultExpanded === 'boolean'
          //   ? isDefaultExpanded
          //   : level < this.defaultExpandLevel)
          normalized.isExpanded = typeof isDefaultExpanded === 'boolean' ? isDefaultExpanded : level < _this15.defaultExpandLevel;

          // this.$ set(normalized, 'hasMatchedDescendants', false)
          // this.$ set(normalized, 'hasDisabledDescendants', false)
          // this.$ set(normalized, 'isExpandedOnSearch', false)
          // this.$ set(normalized, 'showAllChildrenOnSearch', false)
          // this.$ set(normalized, 'count', {
          //   [ALL_CHILDREN]: 0,
          //   [ALL_DESCENDANTS]: 0,
          //   [LEAF_CHILDREN]: 0,
          //   [LEAF_DESCENDANTS]: 0,
          // })
          // this.$ set(normalized, 'children', isLoaded
          //   ? this.normalize(normalized, children, prevNodeMap)
          //   : [])
          normalized.hasMatchedDescendants = false;
          normalized.hasDisabledDescendants = false;
          normalized.isExpandedOnSearch = false;
          normalized.showAllChildrenOnSearch = false;
          normalized.count = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, ALL_CHILDREN, 0), ALL_DESCENDANTS, 0), LEAF_CHILDREN, 0), LEAF_DESCENDANTS, 0);

          // this.$ set(normalized, 'children', isLoaded
          //   ? this.normalize(normalized, children, prevNodeMap)
          //   : [])
          // Keep children of reactive source nodes reactive, so their `raw` stays a reactive proxy as before.
          var childNodes = isLoaded && (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.isReactive)(raw) ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.reactive)(children) : children;
          normalized.children = isLoaded ? _this15.normalize(normalized, childNodes, prevNodeMap) : [];
          if (isDefaultExpanded === true) normalized.ancestors.forEach(function (ancestor) {
            ancestor.isExpanded = true;
          });
          if (!isLoaded && typeof _this15.loadOptions !== 'function') {
            warning(function () {
              return false;
            }, function () {
              return 'Unloaded branch node detected. "loadOptions" prop is required to load its children.';
            });
          } else if (!isLoaded && normalized.isExpanded) {
            _this15.loadChildrenOptions(normalized);
          }
        }
        normalized.ancestors.forEach(function (ancestor) {
          return ancestor.count[ALL_DESCENDANTS]++;
        });
        if (isLeaf) normalized.ancestors.forEach(function (ancestor) {
          return ancestor.count[LEAF_DESCENDANTS]++;
        });
        if (!isRootNode) {
          parentNode.count[ALL_CHILDREN] += 1;
          if (isLeaf) parentNode.count[LEAF_CHILDREN] += 1;
          if (isDisabled) parentNode.hasDisabledDescendants = true;
        }

        // Preserve previous states.
        if (prevNodeMap && prevNodeMap[id]) {
          var prev = prevNodeMap[id];
          normalized.isMatched = prev.isMatched;
          normalized.showAllChildrenOnSearch = prev.showAllChildrenOnSearch;
          normalized.isHighlighted = prev.isHighlighted;
          if (prev.isBranch && normalized.isBranch) {
            normalized.isExpanded = prev.isExpanded;
            normalized.isExpandedOnSearch = prev.isExpandedOnSearch;
            // #97
            // If `isLoaded` was true, but IS NOT now, we consider this branch node
            // to be reset to unloaded state by the user of this component.
            if (prev.childrenStates.isLoaded && !normalized.childrenStates.isLoaded) {
              // Make sure the node is collapsed, then the user can load its
              // children again (by expanding).
              normalized.isExpanded = false;
              // We have reset `childrenStates` and don't want to preserve states here.
            } else {
              normalized.childrenStates = _objectSpread2({}, prev.childrenStates);
            }
          }
        }
        return normalized;
      });
      if (this.branchNodesFirst) {
        var branchNodes = normalizedOptions.filter(function (option) {
          return option.isBranch;
        });
        var leafNodes = normalizedOptions.filter(function (option) {
          return option.isLeaf;
        });
        normalizedOptions = branchNodes.concat(leafNodes);
      }
      return normalizedOptions;
    },
    loadRootOptions: function loadRootOptions() {
      var _this16 = this;
      this.callLoadOptionsProp({
        action: LOAD_ROOT_OPTIONS,
        isPending: function isPending() {
          return _this16.rootOptionsStates.isLoading;
        },
        start: function start() {
          _this16.rootOptionsStates.isLoading = true;
          _this16.rootOptionsStates.loadingError = '';
        },
        succeed: function succeed() {
          _this16.rootOptionsStates.isLoaded = true;
          // Wait for `options` being re-initialized.
          _this16.$nextTick(function () {
            _this16.resetHighlightedOptionWhenNecessary(true);
          });
        },
        fail: function fail(err) {
          _this16.rootOptionsStates.loadingError = getErrorMessage(err);
        },
        end: function end() {
          _this16.rootOptionsStates.isLoading = false;
        }
      });
    },
    loadChildrenOptions: function loadChildrenOptions(parentNode) {
      var _this17 = this;
      // The options may be re-initialized anytime during the loading process.
      // So `parentNode` can be stale and we use `getNode()` to avoid that.

      var id = parentNode.id,
        raw = parentNode.raw;
      this.callLoadOptionsProp({
        action: LOAD_CHILDREN_OPTIONS,
        args: {
          // We always pass the raw node instead of the normalized node to any
          // callback provided by the user of this component.
          // Because the shape of the raw node is more likely to be closing to
          // what the back-end API service of the application needs.
          parentNode: raw
        },
        isPending: function isPending() {
          return _this17.getNode(id).childrenStates.isLoading;
        },
        start: function start() {
          _this17.getNode(id).childrenStates.isLoading = true;
          _this17.getNode(id).childrenStates.loadingError = '';
        },
        succeed: function succeed() {
          _this17.getNode(id).childrenStates.isLoaded = true;
        },
        fail: function fail(err) {
          _this17.getNode(id).childrenStates.loadingError = getErrorMessage(err);
        },
        end: function end() {
          _this17.getNode(id).childrenStates.isLoading = false;
        }
      });
    },
    callLoadOptionsProp: function callLoadOptionsProp(_ref3) {
      var action = _ref3.action,
        args = _ref3.args,
        isPending = _ref3.isPending,
        start = _ref3.start,
        succeed = _ref3.succeed,
        fail = _ref3.fail,
        end = _ref3.end;
      if (!this.loadOptions || isPending()) {
        return;
      }
      start();
      var callback = once_default()(function (err, result) {
        if (err) {
          fail(err);
        } else {
          succeed(result);
        }
        end();
      });
      var result = this.loadOptions(_objectSpread2(_objectSpread2({
        id: this.getInstanceId(),
        instanceId: this.getInstanceId(),
        action: action
      }, args), {}, {
        callback: callback
      }));
      if (isPromise(result)) {
        result.then(function () {
          callback();
        }, function (err) {
          callback(err);
        }).catch(function (err) {
          // istanbul ignore next
          console.error(err);
        });
      }
    },
    checkDuplication: function checkDuplication(node) {
      var _this18 = this;
      warning(function () {
        return !(node.id in _this18.forest.nodeMap && !_this18.forest.nodeMap[node.id].isFallbackNode);
      }, function () {
        return "Detected duplicate presence of node id ".concat(JSON.stringify(node.id), ". ") + "Their labels are \"".concat(_this18.forest.nodeMap[node.id].label, "\" and \"").concat(node.label, "\" respectively.");
      });
    },
    verifyNodeShape: function verifyNodeShape(node) {
      warning(function () {
        return !(node.children === undefined && node.isBranch === true);
      }, function () {
        return 'Are you meant to declare an unloaded branch node? ' + '`isBranch: true` is no longer supported, please use `children: null` instead.';
      });
    },
    select: function select(node) {
      if (this.disabled || node.isDisabled) {
        return;
      }
      if (this.single) {
        this.clear();
      }
      var nextState = this.multiple && !this.flat ? this.forest.checkedStateMap[node.id] === UNCHECKED : !this.isSelected(node);
      if (nextState) {
        this._selectNode(node);
      } else {
        this._deselectNode(node);
      }
      this.buildForestState();
      if (nextState) {
        this.$emit('select', node.raw, this.getInstanceId());
      } else {
        this.$emit('deselect', node.raw, this.getInstanceId());
      }
      if (this.localSearch.active && nextState && (this.single || this.clearOnSelect)) {
        this.resetSearchQuery();
      }
      if (this.single && this.closeOnSelect) {
        this.closeMenu();

        // istanbul ignore else
        if (this.searchable) {
          this._blurOnSelect = true;
        }
      }
    },
    clear: function clear() {
      var _this19 = this;
      if (this.hasValue) {
        if (this.single || this.allowClearingDisabled) {
          this.forest.selectedNodeIds = [];
        } else /* if (this.multiple && !this.allowClearingDisabled) */{
            this.forest.selectedNodeIds = this.forest.selectedNodeIds.filter(function (nodeId) {
              return _this19.getNode(nodeId).isDisabled;
            });
          }
        this.buildForestState();
      }
    },
    // This is meant to be called only by `select()`.
    _selectNode: function _selectNode(node) {
      var _this20 = this;
      if (this.single || this.disableBranchNodes) {
        return this.addValue(node);
      }
      if (this.flat) {
        this.addValue(node);
        if (this.autoSelectAncestors) {
          node.ancestors.forEach(function (ancestor) {
            if (!_this20.isSelected(ancestor) && !ancestor.isDisabled) _this20.addValue(ancestor);
          });
        } else if (this.autoSelectDescendants) {
          this.traverseDescendantsBFS(node, function (descendant) {
            if (!_this20.isSelected(descendant) && !descendant.isDisabled) _this20.addValue(descendant);
          });
        }
        return;
      }
      var isFullyChecked = node.isLeaf || (/* node.isBranch && */!node.hasDisabledDescendants) || (/* node.isBranch && */this.allowSelectingDisabledDescendants);
      if (isFullyChecked) {
        this.addValue(node);
      }
      if (node.isBranch) {
        this.traverseDescendantsBFS(node, function (descendant) {
          if (!descendant.isDisabled || _this20.allowSelectingDisabledDescendants) {
            _this20.addValue(descendant);
          }
        });
      }
      if (isFullyChecked) {
        var curr = node;
        while ((curr = curr.parentNode) !== NO_PARENT_NODE) {
          if (curr.children.every(this.isSelected)) this.addValue(curr);else break;
        }
      }
    },
    // This is meant to be called only by `select()`.
    _deselectNode: function _deselectNode(node) {
      var _this21 = this;
      if (this.disableBranchNodes) {
        return this.removeValue(node);
      }
      if (this.flat) {
        this.removeValue(node);
        if (this.autoDeselectAncestors) {
          node.ancestors.forEach(function (ancestor) {
            if (_this21.isSelected(ancestor) && !ancestor.isDisabled) _this21.removeValue(ancestor);
          });
        } else if (this.autoDeselectDescendants) {
          this.traverseDescendantsBFS(node, function (descendant) {
            if (_this21.isSelected(descendant) && !descendant.isDisabled) _this21.removeValue(descendant);
          });
        }
        return;
      }
      var hasUncheckedSomeDescendants = false;
      if (node.isBranch) {
        this.traverseDescendantsDFS(node, function (descendant) {
          if (!descendant.isDisabled || _this21.allowSelectingDisabledDescendants) {
            _this21.removeValue(descendant);
            hasUncheckedSomeDescendants = true;
          }
        });
      }
      if (node.isLeaf || /* node.isBranch && */hasUncheckedSomeDescendants || /* node.isBranch && */node.children.length === 0) {
        this.removeValue(node);
        var curr = node;
        while ((curr = curr.parentNode) !== NO_PARENT_NODE) {
          if (this.isSelected(curr)) this.removeValue(curr);else break;
        }
      }
    },
    addValue: function addValue(node) {
      this.forest.selectedNodeIds.push(node.id);
      this.forest.selectedNodeMap[node.id] = true;
    },
    removeValue: function removeValue(node) {
      removeFromArray(this.forest.selectedNodeIds, node.id);
      delete this.forest.selectedNodeMap[node.id];
    },
    removeLastValue: function removeLastValue() {
      if (!this.hasValue) return;
      if (this.single) return this.clear();
      var lastValue = last_default()(this.internalValue);
      var lastSelectedNode = this.getNode(lastValue);
      this.select(lastSelectedNode); // deselect
    },
    saveMenuScrollPosition: function saveMenuScrollPosition() {
      var $menu = this.getMenu();
      // istanbul ignore else
      if ($menu) this.menu.lastScrollPosition = $menu.scrollTop;
    },
    restoreMenuScrollPosition: function restoreMenuScrollPosition() {
      var $menu = this.getMenu();
      // istanbul ignore else
      if ($menu) $menu.scrollTop = this.menu.lastScrollPosition;
    }
  },
  created: function created() {
    this.verifyProps();
    this.resetFlags();
  },
  mounted: function mounted() {
    if (this.autoFocus) this.focusInput();
    if (!this.options && !this.async && this.autoLoadRootOptions) this.loadRootOptions();
    if (this.alwaysOpen) this.openMenu();
    if (this.async && this.defaultOptions) this.handleRemoteSearch();
  },
  unmounted: function unmounted() {
    // istanbul ignore next
    this.toggleClickOutsideEvent(false);
  }
});
;// ./node_modules/core-js/modules/es.array.join.js
es_array_join_namespaceFn();

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HiddenFields.vue?vue&type=script&lang=jsx










function stringifyValue(value) {
  if (typeof value === 'string') return value;
  // istanbul ignore else
  if (value != null && !isNaN_isNaN(value)) return JSON.stringify(value);
  // istanbul ignore next
  return '';
}
/* harmony default export */ var HiddenFieldsvue_type_script_lang_jsx = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: 'vue-treeselect--hidden-fields',
  inject: ['instance'],
  functional: true,
  render: function render(context) {
    var h = arguments[0];
    var instance = context.instance;
    if (!instance.name || instance.disabled || !instance.hasValue) return null;
    var stringifiedValues = instance.internalValue.map(stringifyValue);
    if (instance.multiple && instance.joinValues) stringifiedValues = [stringifiedValues.join(instance.delimiter)];
    return stringifiedValues.map(function (stringifiedValue, i) {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("input", {
        "type": "hidden",
        "name": instance.name,
        "value": stringifiedValue,
        "key": 'hidden-field-' + i
      }, null);
    });
  }
}));
;// ./src/components/HiddenFields.vue



const __exports__ = HiddenFieldsvue_type_script_lang_jsx;

/* harmony default export */ var HiddenFields = (__exports__);
;// ./node_modules/core-js/modules/es.error.to-string.js
es_error_to_string_namespaceFn();

;// ./node_modules/core-js/modules/es.regexp.to-string.js
es_regexp_to_string_namespaceFn();

// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __tselect_require__(221);
var debounce_default = /*#__PURE__*/__tselect_require__.n(debounce);
;// ./node_modules/core-js/modules/es.object.get-prototype-of.js
es_object_get_prototype_of_namespaceFn();

;// ./node_modules/core-js/modules/es.object.keys.js
es_object_keys_namespaceFn();

;// ./src/utils/deepExtend.js



function isPlainObject(value) {
  if (value == null || _typeof(value) !== 'object') return false;
  return Object.getPrototypeOf(value) === Object.prototype;
}
function deepExtend_copy(obj, key, value) {
  if (isPlainObject(value)) {
    obj[key] || (obj[key] = {});
    deepExtend(obj[key], value);
  } else {
    obj[key] = value;
  }
}
function deepExtend(target, source) {
  if (isPlainObject(source)) {
    var keys = Object.keys(source);
    for (var i = 0, len = keys.length; i < len; i++) {
      deepExtend_copy(target, keys[i], source[keys[i]]);
    }
  }
  return target;
}
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Input.vue?vue&type=script&lang=jsx







function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.isVNode)(s);
}
var keysThatRequireMenuBeingOpen = [KEY_CODES.ENTER, KEY_CODES.END, KEY_CODES.HOME, KEY_CODES.ARROW_LEFT, KEY_CODES.ARROW_UP, KEY_CODES.ARROW_RIGHT, KEY_CODES.ARROW_DOWN];
/* harmony default export */ var Inputvue_type_script_lang_jsx = ({
  name: 'vue-treeselect--input',
  inject: ['instance'],
  data: function data() {
    return {
      inputWidth: MIN_INPUT_WIDTH,
      value: ''
    };
  },
  computed: {
    needAutoSize: function needAutoSize() {
      var instance = this.instance;
      return instance.searchable && !instance.disabled && instance.multiple;
    },
    inputStyle: function inputStyle() {
      return {
        width: this.needAutoSize ? "".concat(this.inputWidth, "px") : null
      };
    }
  },
  watch: {
    'instance.trigger.searchQuery': function instanceTriggerSearchQuery(newValue) {
      this.value = newValue;
    },
    value: function value() {
      // istanbul ignore else
      if (this.needAutoSize) this.$nextTick(this.updateInputWidth);
    }
  },
  created: function created() {
    this.debouncedCallback = debounce_default()(this.updateSearchQuery, INPUT_DEBOUNCE_DELAY, {
      leading: true,
      trailing: true
    });
  },
  methods: {
    clear: function clear() {
      this.onInput({
        target: {
          value: ''
        }
      });
    },
    focus: function focus() {
      var instance = this.instance;
      if (!instance.disabled) {
        this.$refs.input && this.$refs.input.focus();
      }
    },
    blur: function blur() {
      this.$refs.input && this.$refs.input.blur();
    },
    onFocus: function onFocus() {
      var instance = this.instance;
      instance.trigger.isFocused = true;
      // istanbul ignore else
      if (instance.openOnFocus) instance.openMenu();
    },
    onBlur: function onBlur() {
      var instance = this.instance;
      var menu = instance.getMenu();

      // #15
      // istanbul ignore next
      if (menu && document.activeElement === menu) {
        return this.focus();
      }
      instance.trigger.isFocused = false;
      instance.closeMenu();
    },
    onInput: function onInput(evt) {
      var value = evt.target.value;
      this.value = value;
      if (value) {
        this.debouncedCallback();
      } else {
        this.debouncedCallback.cancel();
        this.updateSearchQuery();
      }
    },
    // 用 keyUp 事件存在一个问题，删除输入框最后一个字符也会导致取消选中最后一项
    onKeyDown: function onKeyDown(evt) {
      var instance = this.instance;
      // https://css-tricks.com/snippets/javascript/javascript-keycodes/
      // https://stackoverflow.com/questions/4471582/javascript-keycode-vs-which
      var key = 'which' in evt ? evt.which : /* istanbul ignore next */evt.keyCode;
      if (evt.ctrlKey || evt.shiftKey || evt.altKey || evt.metaKey) return;
      if (!instance.menu.isOpen && includes_includes(keysThatRequireMenuBeingOpen, key)) {
        evt.preventDefault();
        return instance.openMenu();
      }
      switch (key) {
        case KEY_CODES.BACKSPACE:
          {
            if (instance.backspaceRemoves && !this.value.length) {
              instance.removeLastValue();
            }
            break;
          }
        case KEY_CODES.ENTER:
          {
            evt.preventDefault();
            if (instance.menu.current === null) return;
            var current = instance.getNode(instance.menu.current);
            if (current.isBranch && instance.disableBranchNodes) return;
            instance.select(current);
            break;
          }
        case KEY_CODES.ESCAPE:
          {
            if (this.value.length) {
              this.clear();
            } else if (instance.menu.isOpen) {
              instance.closeMenu();
            }
            break;
          }
        case KEY_CODES.END:
          {
            evt.preventDefault();
            instance.highlightLastOption();
            break;
          }
        case KEY_CODES.HOME:
          {
            evt.preventDefault();
            instance.highlightFirstOption();
            break;
          }
        case KEY_CODES.ARROW_LEFT:
          {
            var _current = instance.getNode(instance.menu.current);
            if (_current.isBranch && instance.shouldExpand(_current)) {
              evt.preventDefault();
              instance.toggleExpanded(_current);
            } else if (!_current.isRootNode && (_current.isLeaf || _current.isBranch && !instance.shouldExpand(_current))) {
              evt.preventDefault();
              instance.setCurrentHighlightedOption(_current.parentNode);
            }
            break;
          }
        case KEY_CODES.ARROW_UP:
          {
            evt.preventDefault();
            instance.highlightPrevOption();
            break;
          }
        case KEY_CODES.ARROW_RIGHT:
          {
            var _current2 = instance.getNode(instance.menu.current);
            if (_current2.isBranch && !instance.shouldExpand(_current2)) {
              evt.preventDefault();
              instance.toggleExpanded(_current2);
            }
            break;
          }
        case KEY_CODES.ARROW_DOWN:
          {
            evt.preventDefault();
            instance.highlightNextOption();
            break;
          }
        case KEY_CODES.DELETE:
          {
            if (instance.deleteRemoves && !this.value.length) {
              instance.removeLastValue();
            }
            break;
          }
        default:
          {
            // istanbul ignore else
            instance.openMenu();
          }
      }
    },
    onMouseDown: function onMouseDown(evt) {
      // istanbul ignore next
      if (this.value.length) {
        // Prevent it from bubbling to the top level and triggering `preventDefault()`
        // to make the textbox unselectable
        evt.stopPropagation();
      }
    },
    renderInputContainer: function renderInputContainer() {
      var h = this.$createElement;
      var instance = this.instance;
      var props = {};
      var children = [];
      if (instance.searchable && !instance.disabled) {
        children.push(this.renderInput());
        if (this.needAutoSize) children.push(this.renderSizer());
      }
      if (!instance.searchable) {
        deepExtend(props, {
          on: {
            focus: this.onFocus,
            blur: this.onBlur,
            keydown: this.onKeyDown
          },
          ref: 'input'
        });
      }
      if (!instance.searchable && !instance.disabled) {
        deepExtend(props, {
          attrs: {
            tabIndex: instance.tabIndex
          }
        });
      }
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.mergeProps)({
        "class": "vue-treeselect__input-container"
      }, props), _isSlot(children) ? children : {
        default: function _default() {
          return [children];
        }
      });
    },
    renderInput: function renderInput() {
      var h = this.$createElement;
      var instance = this.instance;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("input", {
        "ref": "input",
        "class": "vue-treeselect__input",
        "type": "text",
        "autocomplete": "off",
        "tabIndex": instance.tabIndex,
        "required": instance.required && !instance.hasValue,
        "value": this.value,
        "style": this.inputStyle,
        "onFocus": this.onFocus,
        "onInput": this.onInput,
        "onBlur": this.onBlur,
        "onKeydown": this.onKeyDown,
        "onMousedown": this.onMouseDown
      }, null);
    },
    renderSizer: function renderSizer() {
      var h = this.$createElement;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
        "ref": "sizer",
        "class": "vue-treeselect__sizer"
      }, [this.value]);
    },
    updateInputWidth: function updateInputWidth() {
      this.inputWidth = Math.max(MIN_INPUT_WIDTH, this.$refs.sizer.scrollWidth + 15);
    },
    updateSearchQuery: function updateSearchQuery() {
      var instance = this.instance;
      instance.trigger.searchQuery = this.value;
    }
  },
  render: function render() {
    return this.renderInputContainer();
  }
});
;// ./src/components/Input.vue



const Input_exports_ = Inputvue_type_script_lang_jsx;

/* harmony default export */ var Input = (Input_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Placeholder.vue?vue&type=script&lang=jsx

/* harmony default export */ var Placeholdervue_type_script_lang_jsx = ({
  name: 'vue-treeselect--placeholder',
  inject: ['instance'],
  render: function render() {
    var h = arguments[0];
    var instance = this.instance;
    var placeholderClass = {
      'vue-treeselect__placeholder': true,
      'vue-treeselect-helper-zoom-effect-off': true,
      'vue-treeselect-helper-hide': instance.hasValue || instance.trigger.searchQuery
    };
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
      "class": placeholderClass
    }, [instance.placeholder]);
  }
});
;// ./src/components/Placeholder.vue



const Placeholder_exports_ = Placeholdervue_type_script_lang_jsx;

/* harmony default export */ var Placeholder = (Placeholder_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/SingleValue.vue?vue&type=script&lang=jsx



/* harmony default export */ var SingleValuevue_type_script_lang_jsx = ({
  name: 'vue-treeselect--single-value',
  inject: ['instance'],
  methods: {
    renderSingleValueLabel: function renderSingleValueLabel() {
      var instance = this.instance;
      var node = instance.selectedNodes[0];
      var customValueLabelRenderer = instance.$slots['value-label'];
      return customValueLabelRenderer ? customValueLabelRenderer({
        node: node
      }) : node.label;
    }
  },
  render: function render() {
    var h = arguments[0];
    var instance = this.instance,
      renderValueContainer = this.$parent.renderValueContainer;
    var shouldShowValue = instance.hasValue && !instance.trigger.searchQuery;
    return renderValueContainer([shouldShowValue && (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
      "class": "vue-treeselect__single-value"
    }, [this.renderSingleValueLabel()]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Placeholder, null, null), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Input, {
      "ref": "input"
    }, null)]);
  }
});
;// ./src/components/SingleValue.vue



const SingleValue_exports_ = SingleValuevue_type_script_lang_jsx;

/* harmony default export */ var SingleValue = (SingleValue_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/icons/Delete.vue?vue&type=template&id=12b4a02e


var _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
};
function Deletevue_type_template_id_12b4a02e_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", _hoisted_1, _toConsumableArray(_cache[0] || (_cache[0] = [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
    d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"
  }, null, -1)])));
}
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/icons/Delete.vue?vue&type=script&lang=js
/* harmony default export */ var Deletevue_type_script_lang_js = ({
  name: 'vue-treeselect--x'
});
;// ./node_modules/vue-loader/dist/exportHelper.js
exportHelper_namespaceFn();

;// ./src/components/icons/Delete.vue




;
const Delete_exports_ = /*#__PURE__*/(0,exportHelper_namespaceFn().A)(Deletevue_type_script_lang_js, [['render',Deletevue_type_template_id_12b4a02e_render]])

/* harmony default export */ var Delete = (Delete_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MultiValueItem.vue?vue&type=script&lang=jsx






function MultiValueItemvue_type_script_lang_jsx_isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.isVNode)(s);
}
/* harmony default export */ var MultiValueItemvue_type_script_lang_jsx = ({
  name: 'vue-treeselect--multi-value-item',
  inject: ['instance'],
  props: {
    node: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleMouseDown: onLeftClick(function handleMouseDown() {
      var instance = this.instance,
        node = this.node;

      // Deselect this node.
      instance.select(node);
    })
  },
  render: function render() {
    var h = arguments[0];
    var instance = this.instance,
      node = this.node;
    var itemClass = {
      'vue-treeselect__multi-value-item': true,
      'vue-treeselect__multi-value-item-disabled': node.isDisabled,
      'vue-treeselect__multi-value-item-new': node.isNew
    };
    var customValueLabelRenderer = instance.$slots['value-label'];
    var labelRenderer = customValueLabelRenderer ? customValueLabelRenderer({
      node: node
    }) : node.label;
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
      "class": "vue-treeselect__multi-value-item-container"
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
      "class": itemClass,
      "onMousedown": this.handleMouseDown
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("span", {
      "class": "vue-treeselect__multi-value-label"
    }, MultiValueItemvue_type_script_lang_jsx_isSlot(labelRenderer) ? labelRenderer : {
      default: function _default() {
        return [labelRenderer];
      }
    }), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("span", {
      "class": "vue-treeselect__icon vue-treeselect__value-remove"
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Delete, null, null)])])]);
  }
});
;// ./src/components/MultiValueItem.vue



const MultiValueItem_exports_ = MultiValueItemvue_type_script_lang_jsx;

/* harmony default export */ var MultiValueItem = (MultiValueItem_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MultiValue.vue?vue&type=script&lang=jsx









/* harmony default export */ var MultiValuevue_type_script_lang_jsx = ({
  name: 'vue-treeselect--multi-value',
  inject: ['instance'],
  methods: {
    renderMultiValueItems: function renderMultiValueItems() {
      var h = this.$createElement;
      var instance = this.instance;
      return instance.internalValue.slice(0, instance.limit).map(instance.getNode).map(function (node) {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(MultiValueItem, {
          "key": "multi-value-item-".concat(node.id),
          "node": node
        }, null);
      });
    },
    renderExceedLimitTip: function renderExceedLimitTip() {
      var h = this.$createElement;
      var instance = this.instance;
      var count = instance.internalValue.length - instance.limit;
      if (count <= 0) return null;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
        "class": "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off",
        "key": "exceed-limit-tip"
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("span", {
        "class": "vue-treeselect__limit-tip-text"
      }, [instance.limitText(count)])]);
    }
  },
  render: function render() {
    var _this = this;
    var h = arguments[0];
    var renderValueContainer = this.$parent.renderValueContainer;
    // const transitionGroupProps = {
    //   props: {
    //     tag: 'div',
    //     name: 'vue-treeselect__multi-value-item--transition',
    //     appear: true,
    //   },
    // }

    return renderValueContainer((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("transition-group"), {
      "class": "vue-treeselect__multi-value",
      "tag": "div",
      "name": "vue-treeselect__multi-value-item--transition",
      "appear": true
    }, {
      default: function _default() {
        return [_this.renderMultiValueItems(), _this.renderExceedLimitTip(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Placeholder, {
          "key": "placeholder"
        }, null), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Input, {
          "ref": "input",
          "key": "input"
        }, null)];
      }
    }));
  }
});
;// ./src/components/MultiValue.vue



const MultiValue_exports_ = MultiValuevue_type_script_lang_jsx;

/* harmony default export */ var MultiValue = (MultiValue_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/icons/Arrow.vue?vue&type=template&id=5d5151cb


var Arrowvue_type_template_id_5d5151cb_hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
};
function Arrowvue_type_template_id_5d5151cb_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", Arrowvue_type_template_id_5d5151cb_hoisted_1, _toConsumableArray(_cache[0] || (_cache[0] = [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
    d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"
  }, null, -1)])));
}
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/icons/Arrow.vue?vue&type=script&lang=js
/* harmony default export */ var Arrowvue_type_script_lang_js = ({
  name: 'vue-treeselect--arrow'
});
;// ./src/components/icons/Arrow.vue




;
const Arrow_exports_ = /*#__PURE__*/(0,exportHelper_namespaceFn().A)(Arrowvue_type_script_lang_js, [['render',Arrowvue_type_template_id_5d5151cb_render]])

/* harmony default export */ var Arrow = (Arrow_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Control.vue?vue&type=script&lang=jsx












function Controlvue_type_script_lang_jsx_isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.isVNode)(s);
}
/* harmony default export */ var Controlvue_type_script_lang_jsx = ({
  name: 'vue-treeselect--control',
  inject: ['instance'],
  computed: {
    /* eslint-disable valid-jsdoc */
    /**
     * Should show the "×" button that resets value?
     * @return {boolean}
     */
    shouldShowX: function shouldShowX() {
      var instance = this.instance;
      return instance.clearable && !instance.disabled && instance.hasValue && (this.hasUndisabledValue || instance.allowClearingDisabled);
    },
    /**
     * Should show the arrow button that toggles menu?
     * @return {boolean}
     */
    shouldShowArrow: function shouldShowArrow() {
      var instance = this.instance;
      if (!instance.alwaysOpen) return true;
      // Even with `alwaysOpen: true`, sometimes the menu is still closed,
      // e.g. when the control is disabled.
      return !instance.menu.isOpen;
    },
    /**
     * Has any undisabled option been selected?
     * @type {boolean}
     */
    hasUndisabledValue: function hasUndisabledValue() {
      var instance = this.instance;
      return instance.hasValue && instance.internalValue.some(function (id) {
        return !instance.getNode(id).isDisabled;
      });
    } /* eslint-enable valid-jsdoc */
  },
  methods: {
    renderX: function renderX() {
      var h = this.$createElement;
      var instance = this.instance;
      var title = instance.multiple ? instance.clearAllText : instance.clearValueText;
      if (!this.shouldShowX) return null;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
        "class": "vue-treeselect__x-container",
        "title": title,
        "onMousedown": this.handleMouseDownOnX
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Delete, {
        "class": "vue-treeselect__x"
      }, null)]);
    },
    renderArrow: function renderArrow() {
      var h = this.$createElement;
      var instance = this.instance;
      var arrowClass = {
        'vue-treeselect__control-arrow': true,
        'vue-treeselect__control-arrow--rotated': instance.menu.isOpen
      };
      if (!this.shouldShowArrow) return null;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
        "class": "vue-treeselect__control-arrow-container",
        "onMousedown": this.handleMouseDownOnArrow
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Arrow, {
        "class": arrowClass
      }, null)]);
    },
    handleMouseDownOnX: onLeftClick(function handleMouseDownOnX(evt) {
      /**
       * We don't use async/await here because we don't want
       * to rely on Babel polyfill or regenerator runtime.
       * See: https://babeljs.io/docs/plugins/transform-regenerator/
       * We also don't want to assume there is a global `Promise`
       * class, since we are targeting to support IE9 without the
       * need of any polyfill.
       */

      evt.stopPropagation();
      evt.preventDefault();
      var instance = this.instance;
      var result = instance.beforeClearAll();
      var handler = function handler(shouldClear) {
        if (shouldClear) instance.clear();
      };
      if (isPromise(result)) {
        // The handler will be called async.
        result.then(handler);
      } else {
        // Keep the same behavior here.
        setTimeout(function () {
          return handler(result);
        }, 0);
        // Also, note that IE9 requires:
        //   setTimeout(() => fn(...args), delay)
        // Instead of:
        //   setTimeout(fn, delay, ...args)
      }
    }),
    handleMouseDownOnArrow: onLeftClick(function handleMouseDownOnArrow(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      var instance = this.instance;

      // Focus the input or prevent blurring.
      instance.focusInput();
      instance.toggleMenu();
    }),
    // This is meant to be called by child `<Value />` component.
    renderValueContainer: function renderValueContainer(children) {
      var h = this.$createElement;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
        "class": "vue-treeselect__value-container"
      }, Controlvue_type_script_lang_jsx_isSlot(children) ? children : {
        default: function _default() {
          return [children];
        }
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    var instance = this.instance;
    var ValueContainer = instance.single ? SingleValue : MultiValue;
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
      "class": "vue-treeselect__control",
      "onMousedown": instance.handleMouseDown
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(ValueContainer, {
      "ref": "value-container"
    }, null), this.renderX(), this.renderArrow()]);
  }
});
;// ./src/components/Control.vue



const Control_exports_ = Controlvue_type_script_lang_jsx;

/* harmony default export */ var Control = (Control_exports_);
;// ./node_modules/watch-size/index.es.mjs
var index_es_index = (function (element, listener) {
	var expand = document.createElement('_');
	var shrink = expand.appendChild(document.createElement('_'));
	var expandChild = expand.appendChild(document.createElement('_'));
	var shrinkChild = shrink.appendChild(document.createElement('_'));

	var lastWidth = void 0,
	    lastHeight = void 0;

	shrink.style.cssText = expand.style.cssText = 'height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1';
	shrinkChild.style.cssText = expandChild.style.cssText = 'display:block;height:100%;transition:0s;width:100%';
	shrinkChild.style.width = shrinkChild.style.height = '200%';

	element.appendChild(expand);

	test();

	return stop;

	function test() {
		unbind();

		var width = element.offsetWidth;
		var height = element.offsetHeight;

		if (width !== lastWidth || height !== lastHeight) {
			lastWidth = width;
			lastHeight = height;

			expandChild.style.width = width * 2 + 'px';
			expandChild.style.height = height * 2 + 'px';

			expand.scrollLeft = expand.scrollWidth;
			expand.scrollTop = expand.scrollHeight;
			shrink.scrollLeft = shrink.scrollWidth;
			shrink.scrollTop = shrink.scrollHeight;

			listener({ width: width, height: height });
		}

		shrink.addEventListener('scroll', test);
		expand.addEventListener('scroll', test);
	}

	function unbind() {
		shrink.removeEventListener('scroll', test);
		expand.removeEventListener('scroll', test);
	}

	function stop() {
		unbind();

		element.removeChild(expand);
	}
});

/* harmony default export */ var index_es = (index_es_index);

;// ./src/utils/watchSize.js





var intervalId;
var registered = [];
var INTERVAL_DURATION = 100;
function run() {
  intervalId = setInterval(function () {
    registered.forEach(watchSize_test);
  }, INTERVAL_DURATION);
}
function watchSize_stop() {
  clearInterval(intervalId);
  intervalId = null;
}
function watchSize_test(item) {
  var $el = item.$el,
    listener = item.listener,
    lastWidth = item.lastWidth,
    lastHeight = item.lastHeight;
  var width = $el.offsetWidth;
  var height = $el.offsetHeight;
  if (lastWidth !== width || lastHeight !== height) {
    item.lastWidth = width;
    item.lastHeight = height;
    listener({
      width: width,
      height: height
    });
  }
}
function watchSizeForIE9($el, listener) {
  var item = {
    $el: $el,
    listener: listener,
    lastWidth: null,
    lastHeight: null
  };
  var unwatch = function unwatch() {
    removeFromArray(registered, item);
    if (!registered.length) watchSize_stop();
  };
  registered.push(item);
  // The original watch-size will call the listener on initialization.
  // Keep the same behavior here.
  watchSize_test(item);
  run();
  return unwatch;
}
function watchSize($el, listener) {
  // See: https://stackoverflow.com/a/31293352
  var isIE9 = document.documentMode === 9;
  // watch-size will call the listener on initialization.
  // Disable this behavior with a lock to achieve a clearer code logic.
  var locked = true;
  var wrappedListener = function wrappedListener() {
    return locked || listener.apply(void 0, arguments);
  };
  var implementation = isIE9 ? watchSizeForIE9 : index_es;
  var removeSizeWatcher = implementation($el, wrappedListener);
  locked = false; // unlock after initialization

  return removeSizeWatcher;
}
;// ./node_modules/core-js/modules/es.regexp.test.js
es_regexp_test_namespaceFn();

;// ./src/utils/setupResizeAndScrollEventListeners.js








function findScrollParents($el) {
  var $scrollParents = [];
  var $parent = $el.parentNode;
  while ($parent && $parent.nodeName !== 'BODY' && $parent.nodeType === document.ELEMENT_NODE) {
    if (isScrollElment($parent)) $scrollParents.push($parent);
    $parent = $parent.parentNode;
  }
  $scrollParents.push(window);
  return $scrollParents;
}
function isScrollElment($el) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle($el),
    overflow = _getComputedStyle.overflow,
    overflowX = _getComputedStyle.overflowX,
    overflowY = _getComputedStyle.overflowY;
  return /(auto|scroll|overlay)/.test(overflow + overflowY + overflowX);
}
function setupResizeAndScrollEventListeners($el, listener) {
  var $scrollParents = findScrollParents($el);
  window.addEventListener('resize', listener, {
    passive: true
  });
  $scrollParents.forEach(function (scrollParent) {
    scrollParent.addEventListener('scroll', listener, {
      passive: true
    });
  });
  return function removeEventListeners() {
    window.removeEventListener('resize', listener, {
      passive: true
    });
    $scrollParents.forEach(function ($scrollParent) {
      $scrollParent.removeEventListener('scroll', listener, {
        passive: true
      });
    });
  };
}
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Tip.vue?vue&type=script&lang=jsx

/* harmony default export */ var Tipvue_type_script_lang_jsx = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: 'vue-treeselect--tip',
  functional: true,
  props: {
    type: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  render: function render(context) {
    var h = arguments[0];
    var type = this.type,
      icon = this.icon;
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
      "class": "vue-treeselect__tip vue-treeselect__".concat(type, "-tip")
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
      "class": "vue-treeselect__icon-container"
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("span", {
      "class": "vue-treeselect__icon-".concat(icon)
    }, null)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("span", {
      "class": "vue-treeselect__tip-text vue-treeselect__".concat(type, "-tip-text")
    }, [this.$slots.default()])]);
  }
}));
;// ./src/components/Tip.vue



const Tip_exports_ = Tipvue_type_script_lang_jsx;

/* harmony default export */ var Tip = (Tip_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Option.vue?vue&type=script&lang=jsx












function Optionvue_type_script_lang_jsx_isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.isVNode)(s);
}
var arrowPlaceholder, checkMark, minusMark;
var Option = {
  name: 'vue-treeselect--option',
  inject: ['instance'],
  props: {
    node: {
      type: Object,
      required: true
    },
    // Render as a single row of a virtual list (without nested children).
    virtual: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    shouldExpand: function shouldExpand() {
      var instance = this.instance,
        node = this.node;
      return node.isBranch && instance.shouldExpand(node);
    },
    shouldShow: function shouldShow() {
      var instance = this.instance,
        node = this.node;
      return instance.shouldShowOptionInMenu(node);
    }
  },
  methods: {
    renderOption: function renderOption() {
      var h = this.$createElement;
      var instance = this.instance,
        node = this.node;
      var optionClass = {
        'vue-treeselect__option': true,
        'vue-treeselect__option--disabled': node.isDisabled,
        'vue-treeselect__option--selected': instance.isSelected(node),
        'vue-treeselect__option--highlight': node.isHighlighted,
        'vue-treeselect__option--matched': instance.localSearch.active && node.isMatched,
        'vue-treeselect__option--hide': !this.shouldShow
      };
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
        "class": optionClass,
        "onMouseenter": this.handleMouseEnterOption,
        "data-id": node.id
      }, [this.renderArrow(), this.renderLabelContainer([this.renderCheckboxContainer([this.renderCheckbox()]), this.renderLabel()])]);
    },
    renderSubOptionsList: function renderSubOptionsList() {
      var h = this.$createElement;
      if (!this.shouldExpand) return null;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
        "class": "vue-treeselect__list"
      }, [this.renderSubOptions(), this.renderNoChildrenTip(), this.renderLoadingChildrenTip(), this.renderLoadingChildrenErrorTip()]);
    },
    renderArrow: function renderArrow() {
      var h = this.$createElement;
      var instance = this.instance,
        node = this.node;
      if (instance.shouldFlattenOptions && this.shouldShow) return null;
      if (node.isBranch) {
        var _slot;
        var arrowClass = {
          'vue-treeselect__option-arrow': true,
          'vue-treeselect__option-arrow--rotated': this.shouldExpand
        };

        // Rows of a virtual list are mounted while scrolling, skip the appear transition.
        if (this.virtual) return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
          "class": "vue-treeselect__option-arrow-container",
          "onMousedown": this.handleMouseDownOnArrow
        }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Arrow, {
          "class": arrowClass
        }, null)]);
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
          "class": "vue-treeselect__option-arrow-container",
          "onMousedown": this.handleMouseDownOnArrow
        }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("transition"), {
          "name": "vue-treeselect__option-arrow--prepare",
          "appear": true
        }, Optionvue_type_script_lang_jsx_isSlot(_slot = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Arrow, {
          "class": arrowClass
        }, null)) ? _slot : {
          default: function _default() {
            return [_slot];
          }
        })]);
      }

      // For leaf nodes, we render a placeholder to keep its label aligned to
      // branch nodes. Unless there is no branch nodes at all (a normal
      // non-tree select).
      if (/*node.isLeaf && */instance.hasBranchNodes) {
        if (!arrowPlaceholder) arrowPlaceholder = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
          "class": "vue-treeselect__option-arrow-placeholder"
        }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)("\xA0")]);
        return arrowPlaceholder;
      }
      return null;
    },
    renderLabelContainer: function renderLabelContainer(children) {
      var h = this.$createElement;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
        "class": "vue-treeselect__label-container",
        "onMousedown": this.handleMouseDownOnLabelContainer
      }, Optionvue_type_script_lang_jsx_isSlot(children) ? children : {
        default: function _default() {
          return [children];
        }
      });
    },
    renderCheckboxContainer: function renderCheckboxContainer(children) {
      var h = this.$createElement;
      var instance = this.instance,
        node = this.node;
      if (instance.single) return null;
      if (instance.disableBranchNodes && node.isBranch) return null;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
        "class": "vue-treeselect__checkbox-container"
      }, Optionvue_type_script_lang_jsx_isSlot(children) ? children : {
        default: function _default() {
          return [children];
        }
      });
    },
    renderCheckbox: function renderCheckbox() {
      var h = this.$createElement;
      var instance = this.instance,
        node = this.node;
      var checkedState = instance.forest.checkedStateMap[node.id];
      var checkboxClass = {
        'vue-treeselect__checkbox': true,
        'vue-treeselect__checkbox--checked': checkedState === CHECKED,
        'vue-treeselect__checkbox--indeterminate': checkedState === INDETERMINATE,
        'vue-treeselect__checkbox--unchecked': checkedState === UNCHECKED,
        'vue-treeselect__checkbox--disabled': node.isDisabled
      };
      if (!checkMark) checkMark = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("span", {
        "class": "vue-treeselect__check-mark"
      }, null);
      if (!minusMark) minusMark = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("span", {
        "class": "vue-treeselect__minus-mark"
      }, null);
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("span", {
        "class": checkboxClass
      }, [checkMark, minusMark]);
    },
    renderLabel: function renderLabel() {
      var h = this.$createElement;
      var instance = this.instance,
        node = this.node;
      var shouldShowCount = node.isBranch && (instance.localSearch.active ? instance.showCountOnSearchComputed : instance.showCount);
      var count = shouldShowCount ? instance.localSearch.active ? instance.localSearch.countMap[node.id][instance.showCountOf] : node.count[instance.showCountOf] : NaN;
      var labelClassName = 'vue-treeselect__label';
      var countClassName = 'vue-treeselect__count';
      var customLabelRenderer = instance.$slots['option-label'];
      if (customLabelRenderer) return customLabelRenderer({
        node: node,
        shouldShowCount: shouldShowCount,
        count: count,
        labelClassName: labelClassName,
        countClassName: countClassName
      });
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("label", {
        "class": labelClassName
      }, [node.label, shouldShowCount && (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("span", {
        "class": countClassName
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)("("), count, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)(")")])]);
    },
    renderSubOptions: function renderSubOptions() {
      var h = this.$createElement;
      var node = this.node;
      if (!node.childrenStates.isLoaded) return null;
      return node.children.map(function (childNode) {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("vue-treeselect--option"), {
          "node": childNode,
          "key": childNode.id
        }, null);
      });
    },
    renderNoChildrenTip: function renderNoChildrenTip() {
      var h = this.$createElement;
      var instance = this.instance,
        node = this.node;
      if (!node.childrenStates.isLoaded || node.children.length) return null;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Tip, {
        "type": "no-children",
        "icon": "warning"
      }, {
        default: function _default() {
          return [instance.noChildrenText];
        }
      });
    },
    renderLoadingChildrenTip: function renderLoadingChildrenTip() {
      var h = this.$createElement;
      var instance = this.instance,
        node = this.node;
      if (!node.childrenStates.isLoading) return null;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Tip, {
        "type": "loading",
        "icon": "loader"
      }, {
        default: function _default() {
          return [instance.loadingText];
        }
      });
    },
    renderLoadingChildrenErrorTip: function renderLoadingChildrenErrorTip() {
      var _this = this;
      var h = this.$createElement;
      var instance = this.instance,
        node = this.node;
      if (!node.childrenStates.loadingError) return null;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Tip, {
        "type": "error",
        "icon": "error"
      }, {
        default: function _default() {
          return [node.childrenStates.loadingError, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("a", {
            "class": "vue-treeselect__retry",
            "title": instance.retryTitle,
            "onMousedown": _this.handleMouseDownOnRetry
          }, [instance.retryText])];
        }
      });
    },
    handleMouseEnterOption: function handleMouseEnterOption(evt) {
      var instance = this.instance,
        node = this.node;

      // Equivalent to `self` modifier.
      // istanbul ignore next
      if (evt.target !== evt.currentTarget) return;
      instance.setCurrentHighlightedOption(node, false);
    },
    handleMouseDownOnArrow: onLeftClick(function handleMouseDownOnOptionArrow() {
      var instance = this.instance,
        node = this.node;
      instance.toggleExpanded(node);
    }),
    handleMouseDownOnLabelContainer: onLeftClick(function handleMouseDownOnLabelContainer() {
      var instance = this.instance,
        node = this.node;
      if (node.isBranch && instance.disableBranchNodes) {
        instance.toggleExpanded(node);
      } else {
        instance.select(node);
      }
    }),
    handleMouseDownOnRetry: onLeftClick(function handleMouseDownOnRetry() {
      var instance = this.instance,
        node = this.node;
      instance.loadChildrenOptions(node);
    })
  },
  render: function render() {
    var _slot2;
    var h = arguments[0];
    var node = this.node;
    var indentLevel = this.instance.shouldFlattenOptions ? 0 : node.level;
    var listItemClass = _defineProperty({
      'vue-treeselect__list-item': true
    }, "vue-treeselect__indent-level-".concat(indentLevel), true);
    if (this.virtual) {
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
        "class": listItemClass,
        "style": {
          height: this.instance.virtualRowHeight + 'px'
        }
      }, [this.renderOption()]);
    }
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
      "class": listItemClass
    }, [this.renderOption(), node.isBranch ? (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("transition"), {
      "name": "vue-treeselect__list--transition"
    }, Optionvue_type_script_lang_jsx_isSlot(_slot2 = this.renderSubOptionsList()) ? _slot2 : {
      default: function _default() {
        return [_slot2];
      }
    }) : '']);
  }
};

// eslint-disable-next-line vue/require-direct-export
/* harmony default export */ var Optionvue_type_script_lang_jsx = (Option);
;// ./src/components/Option.vue



const Option_exports_ = Optionvue_type_script_lang_jsx;

/* harmony default export */ var components_Option = (Option_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Menu.vue?vue&type=script&lang=jsx














function Menuvue_type_script_lang_jsx_isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.isVNode)(s);
}
var directionMap = {
  top: 'top',
  bottom: 'bottom',
  above: 'top',
  below: 'bottom'
};
/* harmony default export */ var Menuvue_type_script_lang_jsx = ({
  name: 'vue-treeselect--menu',
  inject: ['instance'],
  data: function data() {
    return {
      // Index of the first row inside the visible area of the menu (virtual scrolling).
      virtualFirstRow: 0,
      // Height of the visible area of the menu (virtual scrolling).
      virtualViewportHeight: this.instance.maxHeight
    };
  },
  computed: {
    menuStyle: function menuStyle() {
      var instance = this.instance;
      return {
        maxHeight: instance.maxHeight + 'px'
      };
    },
    virtualRowCount: function virtualRowCount() {
      var instance = this.instance;

      // Only computed when virtual scrolling is enabled.
      return instance.virtual ? instance.virtualRows.length : 0;
    },
    menuContainerStyle: function menuContainerStyle() {
      var instance = this.instance;
      return {
        zIndex: instance.appendToBody ? null : instance.zIndex
      };
    }
  },
  watch: {
    'instance.menu.isOpen': function instanceMenuIsOpen(newValue) {
      if (newValue) {
        // In case `openMenu()` is just called and the menu is not rendered yet.
        this.$nextTick(this.onMenuOpen);
      } else {
        this.onMenuClose();
      }
    },
    virtualRowCount: function virtualRowCount() {
      // The list may have shrunk (e.g. when searching), re-measure after rendering.
      if (this.instance.virtual) this.$nextTick(this.updateVirtualScroll);
    }
  },
  created: function created() {
    this.menuSizeWatcher = null;
    this.menuResizeAndScrollEventListeners = null;
  },
  mounted: function mounted() {
    var instance = this.instance;
    if (instance.menu.isOpen) this.$nextTick(this.onMenuOpen);
  },
  unmounted: function unmounted() {
    this.onMenuClose();
  },
  methods: {
    renderMenu: function renderMenu() {
      var h = this.$createElement;
      var instance = this.instance;
      if (!instance.menu.isOpen) return null;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
        "ref": "menu",
        "class": "vue-treeselect__menu",
        "onMousedown": instance.handleMouseDown,
        "onScroll": this.handleMenuScroll,
        "style": this.menuStyle
      }, [this.renderBeforeList(), instance.async ? this.renderAsyncSearchMenuInner() : instance.localSearch.active ? this.renderLocalSearchMenuInner() : this.renderNormalMenuInner(), this.renderAfterList()]);
    },
    renderBeforeList: function renderBeforeList() {
      var instance = this.instance;
      var beforeListRenderer = instance.$slots['before-list'];
      return beforeListRenderer ? beforeListRenderer() : null;
    },
    renderAfterList: function renderAfterList() {
      var instance = this.instance;
      var afterListRenderer = instance.$slots['after-list'];
      return afterListRenderer ? afterListRenderer() : null;
    },
    renderNormalMenuInner: function renderNormalMenuInner() {
      var instance = this.instance;
      if (instance.rootOptionsStates.isLoading) {
        return this.renderLoadingOptionsTip();
      } else if (instance.rootOptionsStates.loadingError) {
        return this.renderLoadingRootOptionsErrorTip();
      } else if (instance.rootOptionsStates.isLoaded && instance.forest.normalizedOptions.length === 0) {
        return this.renderNoAvailableOptionsTip();
      } else {
        return this.renderOptionList();
      }
    },
    renderLocalSearchMenuInner: function renderLocalSearchMenuInner() {
      var instance = this.instance;
      if (instance.rootOptionsStates.isLoading) {
        return this.renderLoadingOptionsTip();
      } else if (instance.rootOptionsStates.loadingError) {
        return this.renderLoadingRootOptionsErrorTip();
      } else if (instance.rootOptionsStates.isLoaded && instance.forest.normalizedOptions.length === 0) {
        return this.renderNoAvailableOptionsTip();
      } else if (instance.localSearch.noResults) {
        return this.renderNoResultsTip();
      } else {
        return this.renderOptionList();
      }
    },
    renderAsyncSearchMenuInner: function renderAsyncSearchMenuInner() {
      var instance = this.instance;
      var entry = instance.getRemoteSearchEntry();
      var shouldShowSearchPromptTip = instance.trigger.searchQuery === '' && !instance.defaultOptions;
      var shouldShowNoResultsTip = shouldShowSearchPromptTip ? false : entry.isLoaded && entry.options.length === 0;
      if (shouldShowSearchPromptTip) {
        return this.renderSearchPromptTip();
      } else if (entry.isLoading) {
        return this.renderLoadingOptionsTip();
      } else if (entry.loadingError) {
        return this.renderAsyncSearchLoadingErrorTip();
      } else if (shouldShowNoResultsTip) {
        return this.renderNoResultsTip();
      } else {
        return this.renderOptionList();
      }
    },
    renderOptionList: function renderOptionList() {
      var h = this.$createElement;
      var instance = this.instance;
      if (instance.virtual) return this.renderVirtualOptionList();
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
        "class": "vue-treeselect__list"
      }, [instance.forest.normalizedOptions.map(function (rootNode) {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(components_Option, {
          "node": rootNode,
          "key": rootNode.id
        }, null);
      })]);
    },
    renderVirtualOptionList: function renderVirtualOptionList() {
      var h = this.$createElement;
      var instance = this.instance;
      var rows = instance.virtualRows;
      var rowHeight = instance.virtualRowHeight;
      var visibleCount = Math.ceil(this.virtualViewportHeight / rowHeight) + 1;
      // Clamp in case the list has shrunk since the last scroll measurement.
      var firstRow = Math.min(this.virtualFirstRow, Math.max(0, rows.length - visibleCount));
      var start = Math.max(0, firstRow - instance.virtualBuffer);
      var end = Math.min(rows.length, firstRow + visibleCount + instance.virtualBuffer);
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
        "ref": "virtual-list",
        "class": "vue-treeselect__list vue-treeselect__list--virtual",
        "style": {
          height: rows.length * rowHeight + 'px'
        }
      }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
        "class": "vue-treeselect__virtual-window",
        "style": {
          transform: "translateY(".concat(start * rowHeight, "px)")
        }
      }, [rows.slice(start, end).map(this.renderVirtualRow)])]);
    },
    renderVirtualRow: function renderVirtualRow(row) {
      var h = this.$createElement;
      var instance = this.instance;
      if (row.type === 'option') {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(components_Option, {
          "node": row.node,
          "key": row.key,
          "virtual": true
        }, null);
      }

      // Tips are indented one level deeper than their parent branch node (see styles).
      var indentLevel = instance.shouldFlattenOptions ? 0 : row.node.level;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
        "class": "vue-treeselect__list-item vue-treeselect__indent-level-".concat(indentLevel),
        "key": row.key,
        "style": {
          height: instance.virtualRowHeight + 'px'
        }
      }, [this.renderVirtualTip(row)]);
    },
    renderVirtualTip: function renderVirtualTip(_ref) {
      var _this = this;
      var type = _ref.type,
        node = _ref.node;
      var h = this.$createElement;
      var instance = this.instance;
      if (type === 'no-children') {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Tip, {
          "type": "no-children",
          "icon": "warning"
        }, {
          default: function _default() {
            return [instance.noChildrenText];
          }
        });
      }
      if (type === 'loading') {
        return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Tip, {
          "type": "loading",
          "icon": "loader"
        }, {
          default: function _default() {
            return [instance.loadingText];
          }
        });
      }
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Tip, {
        "type": "error",
        "icon": "error"
      }, {
        default: function _default() {
          return [node.childrenStates.loadingError, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("a", {
            "class": "vue-treeselect__retry",
            "title": instance.retryTitle,
            "onMousedown": function onMousedown(evt) {
              return _this.handleMouseDownOnRetry(evt, node);
            }
          }, [instance.retryText])];
        }
      });
    },
    handleMouseDownOnRetry: onLeftClick(function handleMouseDownOnRetry(evt, node) {
      this.instance.loadChildrenOptions(node);
    }),
    handleMenuScroll: function handleMenuScroll() {
      if (this.instance.virtual) this.updateVirtualScroll();
    },
    updateVirtualScroll: function updateVirtualScroll() {
      var $menu = this.$refs.menu;
      var $list = this.$refs['virtual-list'];
      if (!$menu || !$list) return;

      // Offset of the list inside the menu (menu padding, "before-list" slot).
      var scrollTopInList = Math.max(0, $menu.scrollTop - $list.offsetTop);
      var firstRow = Math.floor(scrollTopInList / this.instance.virtualRowHeight);

      // Only update when needed, to avoid re-rendering on every scroll event.
      if (firstRow !== this.virtualFirstRow) this.virtualFirstRow = firstRow;
      if ($menu.clientHeight && $menu.clientHeight !== this.virtualViewportHeight) {
        this.virtualViewportHeight = $menu.clientHeight;
      }
    },
    renderSearchPromptTip: function renderSearchPromptTip() {
      var h = this.$createElement;
      var instance = this.instance;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Tip, {
        "type": "search-prompt",
        "icon": "warning"
      }, {
        default: function _default() {
          return [instance.searchPromptText];
        }
      });
    },
    renderLoadingOptionsTip: function renderLoadingOptionsTip() {
      var h = this.$createElement;
      var instance = this.instance;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Tip, {
        "type": "loading",
        "icon": "loader"
      }, {
        default: function _default() {
          return [instance.loadingText];
        }
      });
    },
    renderLoadingRootOptionsErrorTip: function renderLoadingRootOptionsErrorTip() {
      var h = this.$createElement;
      var instance = this.instance;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Tip, {
        "type": "error",
        "icon": "error"
      }, {
        default: function _default() {
          return [instance.rootOptionsStates.loadingError, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("a", {
            "class": "vue-treeselect__retry",
            "onClick": instance.loadRootOptions,
            "title": instance.retryTitle
          }, [instance.retryText])];
        }
      });
    },
    renderAsyncSearchLoadingErrorTip: function renderAsyncSearchLoadingErrorTip() {
      var h = this.$createElement;
      var instance = this.instance;
      var entry = instance.getRemoteSearchEntry();

      // TODO: retryTitle?

      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Tip, {
        "type": "error",
        "icon": "error"
      }, {
        default: function _default() {
          return [entry.loadingError, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("a", {
            "class": "vue-treeselect__retry",
            "onClick": instance.handleRemoteSearch,
            "title": instance.retryTitle
          }, [instance.retryText])];
        }
      });
    },
    renderNoAvailableOptionsTip: function renderNoAvailableOptionsTip() {
      var h = this.$createElement;
      var instance = this.instance;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Tip, {
        "type": "no-options",
        "icon": "warning"
      }, {
        default: function _default() {
          return [instance.noOptionsText];
        }
      });
    },
    renderNoResultsTip: function renderNoResultsTip() {
      var h = this.$createElement;
      var instance = this.instance;
      return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Tip, {
        "type": "no-results",
        "icon": "warning"
      }, {
        default: function _default() {
          return [instance.noResultsText];
        }
      });
    },
    onMenuOpen: function onMenuOpen() {
      if (this.instance.virtual) this.updateVirtualScroll();
      this.adjustMenuOpenDirection();
      this.setupMenuSizeWatcher();
      this.setupMenuResizeAndScrollEventListeners();
    },
    onMenuClose: function onMenuClose() {
      this.removeMenuSizeWatcher();
      this.removeMenuResizeAndScrollEventListeners();
    },
    adjustMenuOpenDirection: function adjustMenuOpenDirection() {
      var instance = this.instance;
      if (!instance.menu.isOpen) return;
      var $menu = instance.getMenu();
      var $control = instance.getControl();
      var menuRect = $menu.getBoundingClientRect();
      var controlRect = $control.getBoundingClientRect();
      var menuHeight = menuRect.height;
      var viewportHeight = window.innerHeight;
      var spaceAbove = controlRect.top;
      var spaceBelow = window.innerHeight - controlRect.bottom;
      var isControlInViewport = controlRect.top >= 0 && controlRect.top <= viewportHeight || controlRect.top < 0 && controlRect.bottom > 0;
      var hasEnoughSpaceBelow = spaceBelow > menuHeight + MENU_BUFFER;
      var hasEnoughSpaceAbove = spaceAbove > menuHeight + MENU_BUFFER;
      if (!isControlInViewport) {
        instance.closeMenu();
      } else if (instance.openDirection !== 'auto') {
        instance.menu.placement = directionMap[instance.openDirection];
      } else if (hasEnoughSpaceBelow || !hasEnoughSpaceAbove) {
        instance.menu.placement = 'bottom';
      } else {
        instance.menu.placement = 'top';
      }
    },
    setupMenuSizeWatcher: function setupMenuSizeWatcher() {
      var instance = this.instance;
      var $menu = instance.getMenu();

      // istanbul ignore next
      if (this.menuSizeWatcher) return;
      this.menuSizeWatcher = {
        remove: watchSize($menu, this.adjustMenuOpenDirection)
      };
    },
    setupMenuResizeAndScrollEventListeners: function setupMenuResizeAndScrollEventListeners() {
      var instance = this.instance;
      var $control = instance.getControl();

      // istanbul ignore next
      if (this.menuResizeAndScrollEventListeners) return;
      this.menuResizeAndScrollEventListeners = {
        remove: setupResizeAndScrollEventListeners($control, this.adjustMenuOpenDirection)
      };
    },
    removeMenuSizeWatcher: function removeMenuSizeWatcher() {
      if (!this.menuSizeWatcher) return;
      this.menuSizeWatcher.remove();
      this.menuSizeWatcher = null;
    },
    removeMenuResizeAndScrollEventListeners: function removeMenuResizeAndScrollEventListeners() {
      if (!this.menuResizeAndScrollEventListeners) return;
      this.menuResizeAndScrollEventListeners.remove();
      this.menuResizeAndScrollEventListeners = null;
    }
  },
  render: function render() {
    var _slot;
    var h = arguments[0];
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
      "ref": "menu-container",
      "class": "vue-treeselect__menu-container",
      "style": this.menuContainerStyle
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.resolveComponent)("transition"), {
      "name": "vue-treeselect__menu--transition"
    }, Menuvue_type_script_lang_jsx_isSlot(_slot = this.renderMenu()) ? _slot : {
      default: function _default() {
        return [_slot];
      }
    })]);
  }
});
;// ./src/components/Menu.vue



const Menu_exports_ = Menuvue_type_script_lang_jsx;

/* harmony default export */ var Menu = (Menu_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/MenuPortal.vue?vue&type=script&lang=jsx






var PortalTarget = {
  name: 'vue-treeselect--portal-target',
  inject: ['instance'],
  watch: {
    'instance.menu.isOpen': function instanceMenuIsOpen(newValue) {
      if (newValue) {
        this.setupHandlers();
      } else {
        this.removeHandlers();
      }
    },
    'instance.menu.placement': function instanceMenuPlacement() {
      this.updateMenuContainerOffset();
    }
  },
  created: function created() {
    this.controlResizeAndScrollEventListeners = null;
    this.controlSizeWatcher = null;
  },
  mounted: function mounted() {
    var instance = this.instance;
    if (instance.menu.isOpen) this.setupHandlers();
  },
  methods: {
    setupHandlers: function setupHandlers() {
      this.updateWidth();
      this.updateMenuContainerOffset();
      this.setupControlResizeAndScrollEventListeners();
      this.setupControlSizeWatcher();
    },
    removeHandlers: function removeHandlers() {
      this.removeControlResizeAndScrollEventListeners();
      this.removeControlSizeWatcher();
    },
    setupControlResizeAndScrollEventListeners: function setupControlResizeAndScrollEventListeners() {
      var instance = this.instance;
      var $control = instance.getControl();

      // istanbul ignore next
      if (this.controlResizeAndScrollEventListeners) return;
      this.controlResizeAndScrollEventListeners = {
        remove: setupResizeAndScrollEventListeners($control, this.updateMenuContainerOffset)
      };
    },
    setupControlSizeWatcher: function setupControlSizeWatcher() {
      var _this = this;
      var instance = this.instance;
      var $control = instance.getControl();

      // istanbul ignore next
      if (this.controlSizeWatcher) return;
      this.controlSizeWatcher = {
        remove: watchSize($control, function () {
          _this.updateWidth();
          _this.updateMenuContainerOffset();
        })
      };
    },
    removeControlResizeAndScrollEventListeners: function removeControlResizeAndScrollEventListeners() {
      if (!this.controlResizeAndScrollEventListeners) return;
      this.controlResizeAndScrollEventListeners.remove();
      this.controlResizeAndScrollEventListeners = null;
    },
    removeControlSizeWatcher: function removeControlSizeWatcher() {
      if (!this.controlSizeWatcher) return;
      this.controlSizeWatcher.remove();
      this.controlSizeWatcher = null;
    },
    updateWidth: function updateWidth() {
      var instance = this.instance;
      var $portalTarget = this.$el;
      var $control = instance.getControl();
      var controlRect = $control.getBoundingClientRect();
      $portalTarget.style.width = controlRect.width + 'px';
    },
    updateMenuContainerOffset: function updateMenuContainerOffset() {
      var instance = this.instance;
      var $control = instance.getControl();
      var $portalTarget = this.$el;
      var controlRect = $control.getBoundingClientRect();
      var portalTargetRect = $portalTarget.getBoundingClientRect();
      var offsetY = instance.menu.placement === 'bottom' ? controlRect.height : 0;
      var left = Math.round(controlRect.left - portalTargetRect.left) + 'px';
      var top = Math.round(controlRect.top - portalTargetRect.top + offsetY) + 'px';
      var menuContainerStyle = this.$refs.menu.$refs['menu-container'].style;
      var transformVariations = ['transform', 'webkitTransform', 'MozTransform', 'msTransform'];
      var transform = find_find(transformVariations, function (t) {
        return t in document.body.style;
      });

      // IE9 doesn't support `translate3d()`.
      menuContainerStyle[transform] = "translate(".concat(left, ", ").concat(top, ")");
    }
  },
  render: function render() {
    var h = arguments[0];
    var instance = this.instance;
    var portalTargetClass = ['vue-treeselect__portal-target', instance.wrapperClass];
    var portalTargetStyle = {
      zIndex: instance.zIndex
    };
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
      "class": portalTargetClass,
      "style": portalTargetStyle,
      "data-instance-id": instance.getInstanceId()
    }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)(Menu, {
      "ref": "menu"
    }, null)]);
  },
  unmounted: function unmounted() {
    this.removeHandlers();
  }
};
var MenuPortalvue_type_script_lang_jsx_placeholder;
/* harmony default export */ var MenuPortalvue_type_script_lang_jsx = ({
  name: 'vue-treeselect--menu-portal',
  created: function created() {
    this.portalTarget = null;
  },
  mounted: function mounted() {
    this.setup();
  },
  unmounted: function unmounted() {
    this.teardown();
  },
  methods: {
    setup: function setup() {
      var el = document.createElement('div');
      document.body.appendChild(el);
      this.portalTarget = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createApp)(_objectSpread2({
        parent: this
      }, PortalTarget));
      this.portalTarget.mount(el);
      // this.portalTarget = new Vue({
      //   el,
      //   parent: this,
      //   ...PortalTarget,
      // })
    },
    teardown: function teardown() {
      document.body.removeChild(this.portalTarget.$el);
      this.portalTarget.$el.innerHTML = '';
      this.portalTarget.$destroy();
      this.portalTarget = null;
    }
  },
  render: function render() {
    var h = arguments[0];
    if (!MenuPortalvue_type_script_lang_jsx_placeholder) MenuPortalvue_type_script_lang_jsx_placeholder = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createVNode)("div", {
      "class": "vue-treeselect__menu-placeholder"
    }, null);
    return MenuPortalvue_type_script_lang_jsx_placeholder;
  }
});
;// ./src/components/MenuPortal.vue



const MenuPortal_exports_ = MenuPortalvue_type_script_lang_jsx;

/* harmony default export */ var MenuPortal = (MenuPortal_exports_);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Treeselect.vue?vue&type=script&lang=jsx






/* harmony default export */ var Treeselectvue_type_script_lang_jsx = ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: 'vue-treeselect',
  mixins: [treeselectMixin],
  components: {
    HiddenFields: HiddenFields,
    Control: Control,
    Menu: Menu,
    MenuPortal: MenuPortal
  },
  computed: {
    wrapperClass: function wrapperClass() {
      return {
        'vue-treeselect': true,
        'vue-treeselect--single': this.single,
        'vue-treeselect--multi': this.multiple,
        'vue-treeselect--searchable': this.searchable,
        'vue-treeselect--disabled': this.disabled,
        'vue-treeselect--focused': this.trigger.isFocused,
        'vue-treeselect--has-value': this.hasValue,
        'vue-treeselect--open': this.menu.isOpen,
        'vue-treeselect--open-above': this.menu.placement === 'top',
        'vue-treeselect--open-below': this.menu.placement === 'bottom',
        'vue-treeselect--branch-nodes-disabled': this.disableBranchNodes,
        'vue-treeselect--append-to-body': this.appendToBody
      };
    }
  }

  // render() {
  //   return (
  //     <div ref="wrapper" class={this.wrapperClass}>
  //       <HiddenFields />
  //       <Control ref="control" />
  //       {this.appendToBody ? <MenuPortal ref="portal" /> : <Menu ref="menu" />}
  //     </div>
  //   )
  // },
}));
;// ./src/components/Treeselect.vue




;
const Treeselect_exports_ = /*#__PURE__*/(0,exportHelper_namespaceFn().A)(Treeselectvue_type_script_lang_jsx, [['render',render]])

/* harmony default export */ var Treeselect = (Treeselect_exports_);
;// ./styles/style.less
// extracted by mini-css-extract-plugin

;// ./src/index.js



/* harmony default export */ var src_0 = (Treeselect);


;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vue3-treeselect.common.js.map