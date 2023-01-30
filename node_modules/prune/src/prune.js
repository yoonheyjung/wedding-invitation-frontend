/*jslint node: true, nomen: true */
'use strict';

var _ = require('lodash');


function jsonFunc(jsonData, opts) {
    var options = opts || {},
        delimiter = options.delimiter || "/",
        wildcard = options.wildcard || "*",
        sproutid = require('sproutid').options({delimiter: delimiter});

    function privateFindElements(jsonDataTree, columnTree) {
        return _.chain(columnTree)
            .pairs()
            .map(function (locationColumnTreePairs) {
                var locKey = locationColumnTreePairs[0],
                    subLocColumnTree = locationColumnTreePairs[1],
                    subColumnTreeType = typeof subLocColumnTree,
                    returnObj = {};

                if ("object" === subColumnTreeType) {return privateFindElements(jsonDataTree[locKey], subLocColumnTree); }

                returnObj[subLocColumnTree] = jsonDataTree[locKey];
                return returnObj;
            })
            .reduce(function (combinedObject, obj) {return _.extend(combinedObject, obj); }, {})
            .value();
    }

    function getTableFromJsonLevel(uriData, columnTree, jsonLevel) {
        var headTail = sproutid.separateUriHeadAndTail(uriData),
            head = headTail[0],
            tail = headTail[1],
            nonHeadColTree,
            nonHeadVals,
            colData,
            dataObj = {};

        if (tail === delimiter) {
            dataObj[columnTree[head]] = jsonLevel[head];
            colData = [dataObj];
        } else if (head === wildcard) {
            colData = _.chain(jsonLevel)
                .map(function (nextLevelJson) {
                    return getTableFromJsonLevel(tail, columnTree[wildcard], nextLevelJson);
                })
                .flatten(true)
                .value();
        } else {
            colData = getTableFromJsonLevel(tail, columnTree[head], jsonLevel[head]);
        }

        nonHeadColTree = _.chain(columnTree)
            .pairs()
            .select(function (keyLevelPair) {return head === wildcard ? false : keyLevelPair[0] !== head; })
            .object()
            .value();

        nonHeadVals = privateFindElements(jsonLevel, nonHeadColTree);

        //add element for each data point returned
        return _.map(colData, function (dataPoint) {return _.extend(dataPoint, nonHeadVals); });

    }

    //public functions
    function findElements(columnTree) {return privateFindElements(jsonData, columnTree); }

    function getTableWithJson(uriData, columnTree) {
        return getTableFromJsonLevel(uriData, columnTree, jsonData);
    }

    function getTableWithArray(uriArray, columnNameArray) {
        var columnTree = sproutid.uriTree(uriArray, columnNameArray);
        return getTableWithJson(uriArray[0], columnTree);
    }

    return {
        getTableWithJson: getTableWithJson,
        getTableWithArray: getTableWithArray,
        findElements: findElements
    };
}

module.exports = {
    name: "prune",
    version: "0.0.1",
    json: jsonFunc
};