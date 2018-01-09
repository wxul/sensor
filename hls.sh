#!/bin/bash
raspivid  -n -ih -t 0 -ISO 800 -ex night -w 720 -h 405 -fps 25 -b 500000 -o -| ffmpeg -y -loglevel panic -i - -c:v copy -map 0 -f ssegment -segment_time 1 -segment_format mpegts -segment_list "/var/www/hls/stream.m3u8" -segment_list_size 80 -segment_wrap 80 -segment_list_flags +live -segment_list_type m3u8 "/var/www/hls/%03d.ts"
