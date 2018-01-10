#!/bin/bash
ffmpeg -f v4l2 -r 10 -s 640x480 -i /dev/video0 -b:v 300k -c:v h264_omx -an -f segment -segment_time 2 -segment_wrap 3 -segment_list_size 3 -segment_list "/var/www/hls/stream.m3u8" "/var/www/hls/stream%03d.ts"
