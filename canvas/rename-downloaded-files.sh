#! /bin/bash

for i in *_*__*.*
do
	mv $i $(echo $i | sed -En 's/.+_.+__(.+)$/\1/p') 
done
