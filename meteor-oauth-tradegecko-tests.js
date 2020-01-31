// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-oauth-tradegecko.js.
import { name as packageName } from "meteor/meteor-oauth-tradegecko";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-oauth-tradegecko - example', function (test) {
  test.equal(packageName, "meteor-oauth-tradegecko");
});
