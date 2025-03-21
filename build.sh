#!/bin/bash

# Create the output directory
mkdir -p build_output

# Copy files from Steviewondermack-landing/public to build_output
cp -r Steviewondermack-landing/public/* build_output/

# Copy files from Steviewondermack-auth/public to build_output/auth
mkdir -p build_output/auth
cp -r Steviewondermack-auth/public/* build_output/auth/
