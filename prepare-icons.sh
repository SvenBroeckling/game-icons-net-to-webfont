#!/bin/sh

if [ ! -f "game-icons.net.svg.zip" ]; then
    echo "Download game-icons.net.svg.zip (all icons) from https://game-icons.net/ and place it in this directory."
    exit 1
fi

rm -rf icons
mkdir icons

echo "Unzipping game-icons.net.svg.zip..."
unzip game-icons.net.svg.zip -d icons > /dev/null

cd icons 
mv icons/license.txt .
mv icons/000000/transparent/1x1/* .
rm -rf icons

echo "Moving files..."

for f in *; do
    if [ -f "$f" ]; then
        continue  # skip files
    fi
    for i in $f/*.svg; do
        mv "$i" "$f-`basename $i .svg`.svg"
    done
done

find . -type d -empty -delete

cd ..

echo "Done."
