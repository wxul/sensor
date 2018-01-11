#!/bin/sh
## docs:https://ffmpeg.org/ffmpeg-all.html#video4linux2_002c-v4l2
ffmpeg -f v4l2 -r 25 -video_size hd720 -pix_fmt yuv420p -i /dev/video0 -b:v 500k -c:v h264_omx -an -f flv rtmp://127.0.0.1/hls/camera
