import RPi.GPIO as GPIO
import time

pinE = 16
pin1 = 20
pin2 = 21

GPIO.setmode(GPIO.BCM)
time.sleep(1)

GPIO.setup(pinE, GPIO.OUT)
GPIO.setup(pin1, GPIO.OUT)
GPIO.setup(pin2, GPIO.OUT)

GPIO.output(pinE, GPIO.HIGH)
GPIO.output(pin1, GPIO.HIGH)
GPIO.output(pin2, GPIO.LOW)

time.sleep(3)

GPIO.cleanup()
