const comp = require('./index');

describe(comp, () => {
    it('should return a boolean', () => {
        let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
        expect(typeof comp(a1, a2)).toBe('boolean');
    });
    it('should return whether or not two arrays have the "same" elements, with the same multiplicities (elements in b are the elements in a squared)', () => {
        let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
        expect(comp(a1, a2)).toBe(true);

        let b1 = [ 121, 144, 19, 161, 19, 144, 19, 11 ];
        let b2 = [ 121, 14641, 20736, 36100, 25921, 361, 20736, 361 ];
        expect(comp(b1, b2)).toBe(false);

        let c1 = [ 121, 144, 19, 161, 19, 144, 19, 11 ];
        let c2 = [ 231, 14641, 20736, 361, 25921, 361, 20736, 361 ];
        expect(comp(c1, c2)).toBe(false);

    });
});