

// 2nd promise
let showOff = (() => {
    var _ref = _asyncToGenerator(function* (phone) {
        return new Promise(function (resolve, reject) {
            var message = 'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        });
    });

    return function showOff(_x) {
        return _ref.apply(this, arguments);
    };
})();

// call our promise
let askMom = (() => {
    var _ref2 = _asyncToGenerator(function* () {
        try {
            console.log('before asking Mom');

            let phone = yield willIGetNewPhone;
            let message = yield showOff(phone);

            console.log(message);
            console.log('after asking mom');
        } catch (error) {
            console.log(error.message);
        }
    });

    return function askMom() {
        return _ref2.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* ES7 */
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            brand: 'Samsung',
            color: 'black'
        };
        resolve(phone);
    } else {
        const reason = new Error('mom is not happy');
        reject(reason);
    }
});;

_asyncToGenerator(function* () {
    yield askMom();
})();