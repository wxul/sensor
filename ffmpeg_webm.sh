#!/bin/sh
ffmpeg -f video4linux2 -s 640x480 -r 25 -i /dev/video0 -f alsa -i pulse http://localhost:8090/feed1.ffm