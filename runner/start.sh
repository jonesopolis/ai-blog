#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
# Runner is installed in a path without spaces
RUNNER_DIR="/tmp/github-runner"

if [[ ! -f "$RUNNER_DIR/.runner" ]]; then
    echo "Runner not configured. Run setup.sh first."
    exit 1
fi

cd "$RUNNER_DIR"
./run.sh
