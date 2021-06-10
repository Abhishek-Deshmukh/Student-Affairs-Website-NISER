#!/bin/bash

# edit stuff accordingly to rename file

counter=1

while [ $counter -le 49 ]
do
  from="src/contents/images/image"$((60 - $counter))".jpg"
  to="src/contents/images/image"$((69 - $counter))".jpg"
  ((counter++))
  # echo "mv" $from $to
  mv $from $to
done

echo "All done"
