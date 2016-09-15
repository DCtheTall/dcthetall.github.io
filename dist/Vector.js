"use strict";
var Quaternion_1 = require("./Quaternion");
var Vector = (function () {
    function Vector(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector.prototype.set = function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    };
    Vector.scale = function (k, v) {
        return new Vector(k * v.x, k * v.y, k * v.z);
    };
    Vector.add = function (v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    };
    Vector.subtract = function (v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    };
    Vector.mag = function (v) {
        return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
    };
    Vector.normalize = function (v) {
        var mag;
        var div;
        mag = Vector.mag(v);
        if (mag === 0) {
            console.log('Cannot normalize zero vector');
            return null;
        }
        div = 1 / mag;
        return Vector.scale(div, v);
    };
    Vector.cross = function (v1, v2) {
        return new Vector(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);
    };
    Vector.rotate = function (v, theta, axis) {
        var p;
        var u;
        var q;
        p = new Quaternion_1.default(0, v.x, v.y, v.z);
        u = Vector.scale(Math.sin(theta / 2), Vector.normalize(axis));
        q = new Quaternion_1.default(Math.cos(theta / 2), u.x, u.y, u.z);
        p = Quaternion_1.default.multiply(p, q.conjugate());
        p = Quaternion_1.default.multiply(q, p);
        return new Vector(p.i, p.j, p.k);
    };
    Vector.push = function (v, array) {
        array.push(v.x, v.y, v.z);
        return array;
    };
    return Vector;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Vector;
//# sourceMappingURL=Vector.js.map