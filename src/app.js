// A tiny app, just so the PRs have something to change.
const greeting = "hi there";
const target = "world";
const punctuation = "!";

function greet() {
  return `${greeting}, ${target}${punctuation}`;
}

module.exports = { greet };
