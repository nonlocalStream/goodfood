import os
import base64

f = open('encoded.txt', 'r')
data = f.readline()
while data != "":
	output = open(data[2:len(data) - 1], 'wb')
	output.write(base64.b64decode(f.readline().encode(encoding='UTF-8')))
	output.close()
	data = f.readline()

os.remove('encoded.txt')