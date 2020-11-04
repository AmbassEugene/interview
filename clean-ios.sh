#!/bin/bash -e
echo "<-- ---------------------------------------------------- -->"
echo "<-- This will take sometime to get done, please wait..  -->"
rm -rf ~/Library/Developer/Xcode/DerivedData
rm -rf ios/build/
rm -rf node_modules/
npm i
cd ios/
# rm Podfile.lock
rm -rf Pods/
pod install
cd ..
echo "<-- iOS build cleaned, use  ./run to rebuild -->"
echo "<-- ---------------------------------------------------- -->"
