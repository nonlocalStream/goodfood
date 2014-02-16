import base64
import glob
import os

files = glob.glob('./*.jpg')

for file in files:
	with open(file, "rb") as image_file:
		encoded_string = base64.b64encode(image_file.read())

	f = open("encoded.txt", 'a')
	f.write(file + "\n")
	f.write(encoded_string.decode(encoding='UTF-8'))
	f.write('\n')
	os.remove(file)

f.close()

