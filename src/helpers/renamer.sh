#!/bin/bash

# edit stuff accordingly to rename file

counter=1

while [ $counter -le 27 ]
do
  from="../contents/images/image"$((39 + $counter))".jpg"
  to="../contents/images/image"$((38 + $counter))".jpg"
  ((counter++))
  echo "mv" $from $to
  mv $from $to
done

echo "All done"
