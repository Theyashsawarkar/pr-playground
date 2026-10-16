// A tiny app, just so the PRs have something to change.
const greeting = "hello";
const target = "world";
const punctuation = "!";

function greet() {
  return `${greeting}, ${target}${punctuation}`;
}

module.exports = { greet };
