#!/bin/bash

# Go to the folder containing the files to rename
cd ./img/

# Loop through each file
for file in *
do
  # Generate a random name using shuf
  new_name=$(shuf -zer -n5  {A..Z} {a..z} {0..9})

  # Rename the file using the new name
  mv "$file" "$new_name"
done
