// A tiny app, just so the PRs have something to change.
const greeting = "hello";
const target = "tmux";
const punctuation = "!";

function greet() {
  return `${greeting}, ${target}${punctuation}`;
}

module.exports = { greet };
// staging build
