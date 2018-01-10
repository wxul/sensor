#!/bin/sh
ffmpeg -f v4l2 -framerate 25 -video_size 640x480 -i /dev/video0 -f mpegts -codec:v h264_omx -s 640x480 -b:v 500k -bf 0 http://127.0.0.1:8081/whosyourdaddy