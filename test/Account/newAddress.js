const assert = require('assert');
import utils from '../../src/utils/index';

describe('Account_newHexAddr', function () {
    it('test', function () {
        let privKey = 'afa2a3ab3347b5bbe210dc099b2e010e5491d698e5112db6bc278cfd8fa27eb9f0fde0110193147e7961e61eeb22576c535b3442fd6bd9c457775e0cc69f1951';
        let k = utils.newHexAddr(privKey);
        assert.equal(k.privKey, privKey);
    });
});

describe('Account_isValidHexAddr', function () {
    it('test-viteJS', function () {
        let k = utils.newHexAddr();
        assert.equal( utils.isValidHexAddress(k.hexAddr), true );
    });

    it('test-go-vite-1', function () {
        assert.equal( utils.isValidHexAddress('vite_69f3bdb5cdcfa145ae6cc42593a89088ff3dac587eb692d689'), true );
    });

    it('test-go-vite-2', function () {
        assert.equal( utils.isValidHexAddress('vite_c18cadb085fc4e291469106e5a3f197aef87f96cd297eb6b46'), true );
    });
});

// describe('Account_newHexAddr', function () {
//     it('test', function () {
//         utils.newHexAddr();
//         utils.newHexAddr();
//         utils.newHexAddr();
//         utils.newHexAddr();
//         utils.newHexAddr();
//         utils.newHexAddr();
//         utils.newHexAddr();
//         utils.newHexAddr();
//     });
// });
