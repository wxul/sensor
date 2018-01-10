#!/bin/sh
ffmpeg -re -f v4l2 -r 20 -video_size vga -pix_fmt yuv420p -i /dev/video0 -b:v 500k -c:v h264_omx -an -f flv http://127.0.0.1:8090/feed1.ffm