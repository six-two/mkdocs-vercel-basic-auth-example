#!/bin/bash

# Switch to the script's directory (repo root)
cd -- "$( dirname -- "${BASH_SOURCE[0]}" )"

# Install dependencies
npm install
pip install -r requirements.txt

# Build the site
mkdocs build -d public
