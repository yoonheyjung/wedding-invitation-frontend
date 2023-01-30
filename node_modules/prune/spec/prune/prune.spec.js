/*jslint nomen: true */

/*global beforeEach, afterEach, describe, it, xit, expect */

/*global console */
/*global debugger */
/*global dependencies */

dependencies({
    'prune': {
        'browser': '../../build/prune',
        'node': '../../src/prune'
    }
}).init(this, function (prune) {
    'use strict';

    describe("uriTree", function () {

        var jsonData = [
            {
                user: {
                    name: "Greg",
                    id: 42,
                    lang: "English"
                },
                text: "This is a Tweet",
                id: "123123123",
                url: "greg@greg.com",
                followers_count: 42
            },
            {
                user: {
                    name: "Tyler",
                    id: 43,
                    lang: "Spanish"
                },
                text: "Lisa!!!!",
                id: "234234234",
                url: "tyler@tylwer.com",
                followers_count: 123
            },
            {
                user: {
                    name: "David",
                    id: 349,
                    lang: "Philosophy"
                },
                text: "Evidence or Implimentation",
                id: "424242424242",
                url: "greg@greg.com",
                followers_count: 9001
            }
        ];

        it("should select the data from json into csv format using array of selection", function () {
            var urlArray, colNames;

            urlArray = [
                '/*/text',
                '/*/user/name',
                '/*/user/id',
                '/*/followers_count'
            ];

            colNames = [
                "text",
                "name",
                "user id",
                "follower count"
            ];

            expect(prune.json(jsonData).getTableWithArray(urlArray, colNames)).toEqual([
                {
                    text: "This is a Tweet",
                    name: "Greg",
                    "user id": 42,
                    "follower count": 42
                },
                {
                    text: "Lisa!!!!",
                    name: "Tyler",
                    "user id": 43,
                    "follower count": 123
                },
                {
                    text: "Evidence or Implimentation",
                    name: "David",
                    "user id": 349,
                    "follower count": 9001
                }

            ]);
        });

        it("should honor delimiter and wildcard options", function () {
            var urlArray, colNames;

            urlArray = [
                '.^.text',
                '.^.user.name',
                '.^.user.id',
                '.^.followers_count'
            ];

            colNames = [
                "text",
                "name",
                "user id",
                "follower count"
            ];

            expect(prune.json(jsonData, {delimiter: ".", wildcard: "^"}).getTableWithArray(urlArray, colNames)).toEqual([
                {
                    text: "This is a Tweet",
                    name: "Greg",
                    "user id": 42,
                    "follower count": 42
                },
                {
                    text: "Lisa!!!!",
                    name: "Tyler",
                    "user id": 43,
                    "follower count": 123
                },
                {
                    text: "Evidence or Implimentation",
                    name: "David",
                    "user id": 349,
                    "follower count": 9001
                }

            ]);
        });

        it("should select the data from json into csv format using json selection", function () {
            var dataSelection, columnTree;

            dataSelection = "/*/text";

            columnTree = {
                "*": {
                    text: "text",
                    user: {
                        name: "name",
                        id: "user id"
                    },
                    followers_count: "follower count"
                }
            };

            expect(prune.json(jsonData).getTableWithJson(dataSelection, columnTree)).toEqual([
                {
                    text: "This is a Tweet",
                    name: "Greg",
                    "user id": 42,
                    "follower count": 42
                },
                {
                    text: "Lisa!!!!",
                    name: "Tyler",
                    "user id": 43,
                    "follower count": 123
                },
                {
                    text: "Evidence or Implimentation",
                    name: "David",
                    "user id": 349,
                    "follower count": 9001
                }

            ]);
        });

        it("should find all data requested using column tree", function () {
            var columnTree, userJsonData;

            userJsonData = {
                user: {
                    name: "Tyler",
                    id: 43,
                    lang: "Spanish"
                },
                text: "Lisa!!!!",
                id: "234234234",
                url: "tyler@tylwer.com",
                followers_count: 123
            };

            columnTree = {
                text: "text",
                user: {
                    name: "name",
                    id: "user id"
                },
                followers_count: "follower count"
            };

            expect(prune.json(userJsonData).findElements(columnTree, userJsonData)).toEqual({
                text: "Lisa!!!!",
                name: "Tyler",
                "user id": 43,
                "follower count": 123
            });
        });
    });
});