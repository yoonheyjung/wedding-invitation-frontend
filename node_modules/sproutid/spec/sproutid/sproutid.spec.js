/*jslint nomen: true */

/*global beforeEach, afterEach, describe, it, expect */

/*global console */
/*global debugger */
/*global dependencies */


dependencies({
    'sproutid': {
        'browser': '../../build/sproutid',
        'node': '../../src/sproutid'
    }
}).init(this, function (sproutid) {
    'use strict';

    describe("uriTree", function () {
        var urlArray, colNames;

        urlArray = [
            '/*/user/name',
            '/*/user/id',
            '/*/user/lang',
            '/*/text',
            '/*/id',
            '/*/url',
            '/*/followers_count'
        ];

        colNames = [
            "name",
            "user id",
            "language",
            "text",
            "twitter id",
            "url",
            "follower count"
        ];

        it("should create a labeled uri tree", function () {
            var labeledUriTree = sproutid.uriTree(urlArray, colNames);

            expect(labeledUriTree).toEqual({
                '*': {
                    user: {
                        name: 'name',
                        id : 'user id',
                        lang : 'language'
                    },
                    text: 'text',
                    id : 'twitter id',
                    url : 'url',
                    followers_count: 'follower count'
                }
            });
        });

        it("should use other delimiter", function () {
            var urlArrayNewDelimiter = [
                    '.*.user.name',
                    '.*.user.id',
                    '.*.user.lang',
                    '.*.text',
                    '.*.id',
                    '.*.url',
                    '.*.followers_count'
                ],
                labeledUriTree = sproutid.options({delimiter: "."}).uriTree(urlArrayNewDelimiter, colNames);

            expect(labeledUriTree).toEqual({
                '*': {
                    user: {
                        name: 'name',
                        id : 'user id',
                        lang : 'language'
                    },
                    text: 'text',
                    id : 'twitter id',
                    url : 'url',
                    followers_count: 'follower count'
                }
            });
        });

        it("should create a unlabeled uri tree", function () {
            var unlabeledUriTree = sproutid.uriTree(urlArray);

            expect(unlabeledUriTree).toEqual({
                '*': {
                    user: {
                        name: 1,
                        id: 1,
                        lang: 1
                    },
                    text: 1,
                    id: 1,
                    url: 1,
                    followers_count: 1
                }
            });
        });
    });

    describe("headTail", function () {
        it("should split array of uri parts", function () {
            var headTailPair = sproutid.headTail(['twitter', 'user', 'greg', 'id']),
                head = headTailPair[0],
                tail = headTailPair[1];

            expect(head).toBe('twitter');
            expect(tail).toBe('/user/greg/id');
        });
    });

    describe("separateUriHeadAndTail", function () {
        it("should split uri head from tail", function () {
            var headTailPair = sproutid.separateUriHeadAndTail('/twitter/user/greg/id'),
                head = headTailPair[0],
                tail = headTailPair[1];

            expect(head).toBe('twitter');
            expect(tail).toBe('/user/greg/id');
        });
    });

    describe("combineArrayLocationLabels", function () {
        var arrayHeadTailSplits = [
            [ 'user', [ '/name', 'name' ] ],
            [ 'user', [ '/id', 'user id' ] ],
            [ 'user', [ '/lang', 'language' ] ],
            [ 'text', [ '/', 'text' ] ],
            [ 'id', [ '/', 'twitter id' ] ],
            [ 'url', [ '/', 'url' ] ],
            [ 'followers_count', [ '/', 'follower count' ] ]
        ];

        it("should should join head tail splits by head element", function () {
            var headTailSplitObj = sproutid.combineArrayLocationLabels(arrayHeadTailSplits);

            expect(headTailSplitObj).toEqual({
                user: [['/name', 'name'], ['/id', 'user id'], ['/lang', 'language']],
                text: [[ '/', 'text' ]],
                id: [[ '/', 'twitter id' ]],
                url: [[ '/', 'url' ]],
                followers_count: [['/', 'follower count']]
            });
        });
    });

    describe("uriLabelsIntoColumnTree", function () {
        var uriLabelObject = {
            '/user/name': "name",
            '/user/id': "user id",
            '/user/lang': "language",
            '/text': "text",
            '/id': "twitter id",
            '/url': "url",
            '/followers_count': "follower count"
        };

        it("should turn uri label object into a labeld uri tree", function () {
            var labeledUriTree = sproutid.uriLabelsIntoColumnTree(uriLabelObject);

            expect(labeledUriTree).toEqual({
                user: {
                    name: 'name',
                    id : 'user id',
                    lang : 'language'
                },
                text: 'text',
                id : 'twitter id',
                url : 'url',
                followers_count: 'follower count'
            });
        });
    });
});