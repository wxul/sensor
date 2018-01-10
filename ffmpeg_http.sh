#!/bin/sh
ffmpeg -f v4l2 -r 30 -video_size 640x480 -pix_fmt yuv420p -i /dev/video0 -b:v 500k -c:v h264_omx -an -f mpeg1video http://127.0.0.1:8081/whosyourdaddy