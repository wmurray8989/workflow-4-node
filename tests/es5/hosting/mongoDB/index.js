"use strict";
var wf4node = require("../../../../");
var MongoDDPersistence = wf4node.hosting.mongoDB.MongoDDPersistence;
var hostingTestCommon = require("../hostingTestCommon");
var Serializer = require("backpack-node").system.Serializer;
var connStr = process.env.TEST_MONGODB_CONN;
var persistence = connStr ? new MongoDDPersistence({connection: connStr}) : null;
if (persistence) {
  describe("WorkflowHost", function() {
    describe("With MongoDBPersistence", function() {
      it("should run basic hosting example in non-lazy mode", function(done) {
        var hostOptions = {
          persistence: persistence,
          lazyPersistence: false,
          serializer: null,
          alwaysLoadState: true
        };
        hostingTestCommon.doBasicHostTest(hostOptions).nodeify(done);
      });
      it("should run basic hosting example in lazy mode", function(done) {
        var hostOptions = {
          persistence: persistence,
          lazyPersistence: true,
          serializer: null,
          alwaysLoadState: true
        };
        hostingTestCommon.doBasicHostTest(hostOptions).nodeify(done);
      });
      it("should run correlated calculator example in non-lazy mode", function(done) {
        var hostOptions = {
          persistence: persistence,
          lazyPersistence: false,
          serializer: null,
          alwaysLoadState: true
        };
        hostingTestCommon.doCalculatorTest(hostOptions).nodeify(done);
      });
      it("should run correlated calculator example in lazy mode", function(done) {
        var hostOptions = {
          persistence: persistence,
          lazyPersistence: true,
          serializer: null,
          alwaysLoadState: true
        };
        hostingTestCommon.doCalculatorTest(hostOptions).nodeify(done);
      });
      it("should run correlated calculator example with a serializer", function(done) {
        var hostOptions = {
          persistence: persistence,
          lazyPersistence: true,
          serializer: new Serializer(),
          alwaysLoadState: true
        };
        hostingTestCommon.doCalculatorTest(hostOptions).nodeify(done);
      });
    });
  });
}
//# sourceMappingURL=data:application/json;base64,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YyxDQUFHLEtBQUc7QUFDcEIsbUJBQVMsQ0FBRyxJQUFJLFdBQVMsQUFBQyxFQUFDO0FBQzNCLHdCQUFjLENBQUcsS0FBRztBQUFBLFFBQ3hCLENBQUM7QUFDRCx3QkFBZ0IsaUJBQWlCLEFBQUMsQ0FBQyxXQUFVLENBQUMsUUFBUSxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUM7TUFDakUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047QUFBQSIsImZpbGUiOiJob3N0aW5nL21vbmdvREIvaW5kZXguanMiLCJzb3VyY2VSb290IjoidGVzdHMvZXM2Iiwic291cmNlc0NvbnRlbnQiOlsidmFyIHdmNG5vZGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vXCIpO1xudmFyIE1vbmdvRERQZXJzaXN0ZW5jZSA9IHdmNG5vZGUuaG9zdGluZy5tb25nb0RCLk1vbmdvRERQZXJzaXN0ZW5jZTtcbnZhciBob3N0aW5nVGVzdENvbW1vbiA9IHJlcXVpcmUoXCIuLi9ob3N0aW5nVGVzdENvbW1vblwiKTtcbnZhciBTZXJpYWxpemVyID0gcmVxdWlyZShcImJhY2twYWNrLW5vZGVcIikuc3lzdGVtLlNlcmlhbGl6ZXI7XG5cbnZhciBjb25uU3RyID0gcHJvY2Vzcy5lbnYuVEVTVF9NT05HT0RCX0NPTk47XG52YXIgcGVyc2lzdGVuY2UgPSBjb25uU3RyID8gbmV3IE1vbmdvRERQZXJzaXN0ZW5jZSh7Y29ubmVjdGlvbjogY29ublN0cn0pIDogbnVsbDtcblxuaWYgKHBlcnNpc3RlbmNlKSB7XG4gICAgZGVzY3JpYmUoXCJXb3JrZmxvd0hvc3RcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBkZXNjcmliZShcIldpdGggTW9uZ29EQlBlcnNpc3RlbmNlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGl0KFwic2hvdWxkIHJ1biBiYXNpYyBob3N0aW5nIGV4YW1wbGUgaW4gbm9uLWxhenkgbW9kZVwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIHZhciBob3N0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGVuY2U6IHBlcnNpc3RlbmNlLFxuICAgICAgICAgICAgICAgICAgICBsYXp5UGVyc2lzdGVuY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVyOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBhbHdheXNMb2FkU3RhdGU6IHRydWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGhvc3RpbmdUZXN0Q29tbW9uLmRvQmFzaWNIb3N0VGVzdChob3N0T3B0aW9ucykubm9kZWlmeShkb25lKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcInNob3VsZCBydW4gYmFzaWMgaG9zdGluZyBleGFtcGxlIGluIGxhenkgbW9kZVwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIHZhciBob3N0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGVuY2U6IHBlcnNpc3RlbmNlLFxuICAgICAgICAgICAgICAgICAgICBsYXp5UGVyc2lzdGVuY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGFsd2F5c0xvYWRTdGF0ZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaG9zdGluZ1Rlc3RDb21tb24uZG9CYXNpY0hvc3RUZXN0KGhvc3RPcHRpb25zKS5ub2RlaWZ5KGRvbmUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwic2hvdWxkIHJ1biBjb3JyZWxhdGVkIGNhbGN1bGF0b3IgZXhhbXBsZSBpbiBub24tbGF6eSBtb2RlXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhvc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZW5jZTogcGVyc2lzdGVuY2UsXG4gICAgICAgICAgICAgICAgICAgIGxhenlQZXJzaXN0ZW5jZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGFsd2F5c0xvYWRTdGF0ZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaG9zdGluZ1Rlc3RDb21tb24uZG9DYWxjdWxhdG9yVGVzdChob3N0T3B0aW9ucykubm9kZWlmeShkb25lKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcInNob3VsZCBydW4gY29ycmVsYXRlZCBjYWxjdWxhdG9yIGV4YW1wbGUgaW4gbGF6eSBtb2RlXCIsIGZ1bmN0aW9uIChkb25lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhvc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZW5jZTogcGVyc2lzdGVuY2UsXG4gICAgICAgICAgICAgICAgICAgIGxhenlQZXJzaXN0ZW5jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplcjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgYWx3YXlzTG9hZFN0YXRlOiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBob3N0aW5nVGVzdENvbW1vbi5kb0NhbGN1bGF0b3JUZXN0KGhvc3RPcHRpb25zKS5ub2RlaWZ5KGRvbmUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwic2hvdWxkIHJ1biBjb3JyZWxhdGVkIGNhbGN1bGF0b3IgZXhhbXBsZSB3aXRoIGEgc2VyaWFsaXplclwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIHZhciBob3N0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGVuY2U6IHBlcnNpc3RlbmNlLFxuICAgICAgICAgICAgICAgICAgICBsYXp5UGVyc2lzdGVuY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZXI6IG5ldyBTZXJpYWxpemVyKCksXG4gICAgICAgICAgICAgICAgICAgIGFsd2F5c0xvYWRTdGF0ZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaG9zdGluZ1Rlc3RDb21tb24uZG9DYWxjdWxhdG9yVGVzdChob3N0T3B0aW9ucykubm9kZWlmeShkb25lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0iXX0=
