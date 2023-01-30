/*global console */

/*global module, require, exports*/
/*global define */

function dependencies(dependencyObject) {
    'use strict';

    function extractSpecificPath(depPath, loadType) {
        if (typeof depPath === 'object') {
            return depPath[loadType];
        }

        return depPath;
    }

    var depNames, depPaths;

    depNames = Object.keys(dependencyObject);
    depPaths = depNames.map(function (depName) {return dependencyObject[depName]; });

    function init(root, factory) {

        if (typeof module === 'object' && module.exports) {
            // Node/CommonJS
            console.log("NODE MODE");
            factory.apply(root, depPaths.map(function (depPath) {return require(extractSpecificPath(depPath, 'node')); }));
        } else if (typeof define === 'function' && define.amd) {
            // AMD
            console.log("AMD MODE");
            define(depPaths.map(function (depPath) { return extractSpecificPath(depPath, 'browser'); }), factory);
        } else {
            // Browser globals
            console.log("GLOBALS MODE");
            factory.apply(root, depNames.map(function (depName) {return root[depName]; }));
        }
    }

    return { init: init };
}

if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    exports.dependencies = dependencies;
}