"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*#__PURE__*/
_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var sleep;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          sleep = function _sleep(time) {
            return new Promise(function (resolve) {
              return setTimeout(reslove, time);
            });
          };

          _context.next = 3;
          return sleep(500);

        case 3:
          console.log('done');

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));