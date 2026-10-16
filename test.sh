#!/usr/bin/env bash
# CI check: fails when any source file contains the word BROKEN.
if grep -rn 'BROKEN' src/; then echo "found BROKEN"; exit 1; fi
echo "ok"
