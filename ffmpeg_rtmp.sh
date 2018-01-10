#!/bin/sh
ffmpeg -f v4l2 -r 20 -video_size vga -pix_fmt yuv420p -i /dev/video0 -b:v 500k -c:v h264_omx -an -f flv rtmp://127.0.0.1/live/camera
