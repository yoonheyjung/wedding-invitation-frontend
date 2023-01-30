/*jslint node: true, nomen: true */
'use strict';

var _ = require("lodash"),
    optionsFn;

function optionsFn(options) {
    var delimiter = options && options.delimiter ? options.delimiter : "/";

    function headTail(array) {return [_.first(array), delimiter + _.tail(array).join(delimiter)]; }

    function separateUriHeadAndTail(uri) {return headTail(uri.slice(1).split(delimiter)); }

    function combineArrayLocationLabels(locationLabelArray) {
        return _.reduce(
            locationLabelArray,
            function (aggHistogramTree, locationLabel) {
                var location = locationLabel[0],
                    locLabel = locationLabel[1];
                aggHistogramTree[location] = aggHistogramTree[location] || [];
                aggHistogramTree[location].push(locLabel);
                return aggHistogramTree;
            },
            {}
        );
    }

    function uriLabelsIntoColumnTree(uriLabelsObject) {
        var uriArrayTree, locationLabelArray;

        locationLabelArray = _.chain(uriLabelsObject)
            .pairs()
            .map(function (uriLabel) {
                var uri = uriLabel[0],
                    label = uriLabel[1],
                    headTailSep;

                if (uri[0] !== delimiter) {throw "no slash"; }
                headTailSep = separateUriHeadAndTail(uri);

                return [headTailSep[0], [headTailSep[1], label]];
            })
            .value();

        uriArrayTree = combineArrayLocationLabels(locationLabelArray);

        return _.chain(uriArrayTree)
            .pairs()
            .reduce(
                function (aggTree, locationUriArray) {

                    var newLocationLabels = _.object(locationUriArray[1]);
                    aggTree[locationUriArray[0]] = newLocationLabels[delimiter] || uriLabelsIntoColumnTree(newLocationLabels);

                    return aggTree;
                },
                {}
            )
            .value();
    }

    function uriTree(uriArray, columnNameArray) {
        var nameArray = columnNameArray || _.times(uriArray.length, function () {return 1; });

        return uriLabelsIntoColumnTree(_.object(uriArray, nameArray));
    }

    return {
        name: "sproutid",
        version: "0.0.1",
        options: optionsFn,
        headTail: headTail,
        separateUriHeadAndTail: separateUriHeadAndTail,
        combineArrayLocationLabels: combineArrayLocationLabels,
        uriLabelsIntoColumnTree: uriLabelsIntoColumnTree,
        uriTree: uriTree
    };
}

module.exports = optionsFn();