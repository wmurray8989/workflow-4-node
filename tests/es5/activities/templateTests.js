"use strict";
var wf4node = require("../../../");
var ActivityExecutionEngine = wf4node.activities.ActivityExecutionEngine;
var _ = require("lodash");
var assert = require("assert");
describe("Template", function() {
  it("should parse object correctly", function(done) {
    var engine = new ActivityExecutionEngine({template: {declare: {
          a: "foo",
          b: ["zoo", {c: {"@func": {code: function() {
                  return 6;
                }}}}, "# 42"]
        }}});
    engine.invoke().then(function(result) {
      assert.ok(_.isPlainObject(result));
      assert.equal(result.a, "foo");
      assert.ok(_.isArray(result.b));
      assert.equal(result.b.length, 3);
      assert.equal(result.b[0], "zoo");
      assert.ok(_.isPlainObject(result.b[1]));
      assert.equal(result.b[1].c, 6);
      assert.equal(result.b[2], 42);
    }).nodeify(done);
  });
  it("should work when specialized", function(done) {
    var engine = new ActivityExecutionEngine({block: [{
        a: "foo",
        b: ["zoo", {c: {"@func": {code: function() {
                return 6;
              }}}}, "# 42"]
      }]});
    engine.invoke().then(function(result) {
      assert.ok(_.isPlainObject(result));
      assert.equal(result.a, "foo");
      assert.ok(_.isArray(result.b));
      assert.equal(result.b.length, 3);
      assert.equal(result.b[0], "zoo");
      assert.ok(_.isPlainObject(result.b[1]));
      assert.equal(result.b[1].c, 6);
      assert.equal(result.b[2], 42);
    }).nodeify(done);
  });
});
//# sourceMappingURL=data:application/json;base64,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QyxDQUFDLENBQUM7QUFDbEMsV0FBSyxNQUFNLEFBQUMsQ0FBQyxNQUFLLEVBQUUsQ0FBRyxNQUFJLENBQUMsQ0FBQztBQUM3QixXQUFLLEdBQUcsQUFBQyxDQUFDLENBQUEsUUFBUSxBQUFDLENBQUMsTUFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlCLFdBQUssTUFBTSxBQUFDLENBQUMsTUFBSyxFQUFFLE9BQU8sQ0FBRyxFQUFBLENBQUMsQ0FBQztBQUNoQyxXQUFLLE1BQU0sQUFBQyxDQUFDLE1BQUssRUFBRSxDQUFFLENBQUEsQ0FBQyxDQUFHLE1BQUksQ0FBQyxDQUFDO0FBQ2hDLFdBQUssR0FBRyxBQUFDLENBQUMsQ0FBQSxjQUFjLEFBQUMsQ0FBQyxNQUFLLEVBQUUsQ0FBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkMsV0FBSyxNQUFNLEFBQUMsQ0FBQyxNQUFLLEVBQUUsQ0FBRSxDQUFBLENBQUMsRUFBRSxDQUFHLEVBQUEsQ0FBQyxDQUFDO0FBQzlCLFdBQUssTUFBTSxBQUFDLENBQUMsTUFBSyxFQUFFLENBQUUsQ0FBQSxDQUFDLENBQUcsR0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQyxRQUFRLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQztFQUNwQixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFBQSIsImZpbGUiOiJhY3Rpdml0aWVzL3RlbXBsYXRlVGVzdHMuanMiLCJzb3VyY2VSb290IjoidGVzdHMvZXM2Iiwic291cmNlc0NvbnRlbnQiOlsidmFyIHdmNG5vZGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vXCIpO1xudmFyIEFjdGl2aXR5RXhlY3V0aW9uRW5naW5lID0gd2Y0bm9kZS5hY3Rpdml0aWVzLkFjdGl2aXR5RXhlY3V0aW9uRW5naW5lO1xudmFyIF8gPSByZXF1aXJlKFwibG9kYXNoXCIpO1xudmFyIGFzc2VydCA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG5cbmRlc2NyaWJlKFwiVGVtcGxhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgIGl0KFwic2hvdWxkIHBhcnNlIG9iamVjdCBjb3JyZWN0bHlcIiwgZnVuY3Rpb24gKGRvbmUpIHtcblxuICAgICAgICB2YXIgZW5naW5lID0gbmV3IEFjdGl2aXR5RXhlY3V0aW9uRW5naW5lKHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgZGVjbGFyZToge1xuICAgICAgICAgICAgICAgICAgICBhOiBcImZvb1wiLFxuICAgICAgICAgICAgICAgICAgICBiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcInpvb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJAZnVuY1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIjIDQyXCJcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZW5naW5lLmludm9rZSgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXG4gICAgICAgICAgICBhc3NlcnQub2soXy5pc1BsYWluT2JqZWN0KHJlc3VsdCkpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5hLCBcImZvb1wiKTtcbiAgICAgICAgICAgIGFzc2VydC5vayhfLmlzQXJyYXkocmVzdWx0LmIpKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXN1bHQuYi5sZW5ndGgsIDMpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5iWzBdLCBcInpvb1wiKTtcbiAgICAgICAgICAgIGFzc2VydC5vayhfLmlzUGxhaW5PYmplY3QocmVzdWx0LmJbMV0pKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXN1bHQuYlsxXS5jLCA2KTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChyZXN1bHQuYlsyXSwgNDIpO1xuICAgICAgICB9KS5ub2RlaWZ5KGRvbmUpO1xuICAgIH0pO1xuXG4gICAgaXQoXCJzaG91bGQgd29yayB3aGVuIHNwZWNpYWxpemVkXCIsIGZ1bmN0aW9uIChkb25lKSB7XG5cbiAgICAgICAgdmFyIGVuZ2luZSA9IG5ldyBBY3Rpdml0eUV4ZWN1dGlvbkVuZ2luZSh7XG4gICAgICAgICAgICBibG9jazogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYTogXCJmb29cIixcbiAgICAgICAgICAgICAgICAgICAgYjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ6b29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQGZ1bmNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIyA0MlwiXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVuZ2luZS5pbnZva2UoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGFzc2VydC5vayhfLmlzUGxhaW5PYmplY3QocmVzdWx0KSk7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwocmVzdWx0LmEsIFwiZm9vXCIpO1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKF8uaXNBcnJheShyZXN1bHQuYikpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5iLmxlbmd0aCwgMyk7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwocmVzdWx0LmJbMF0sIFwiem9vXCIpO1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKF8uaXNQbGFpbk9iamVjdChyZXN1bHQuYlsxXSkpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5iWzFdLmMsIDYpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5iWzJdLCA0Mik7XG4gICAgICAgIH0pLm5vZGVpZnkoZG9uZSk7XG4gICAgfSk7XG59KTsiXX0=
