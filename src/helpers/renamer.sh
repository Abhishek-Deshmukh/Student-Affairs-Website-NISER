#!/bin/bash

# edit stuff accordingly to rename file

counter=1

while [ $counter -le 53 ]
do
  from="src/contents/images/image"$((54 - $counter))".jpg"
  ((counter++))
  to="src/contents/images/image"$((60 - $counter))".jpg"
  mv $from $to
done

echo "All done"
