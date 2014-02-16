import urllib
import urllib2

#url = 'http://www.ocf.berkeley.edu/~lichuqia/flask3/add'
url= "http://127.0.0.1:5000/add"

# Prepare the data
f = open('encoded.txt', 'r')
data = f.readline()
while data != "":
	img = f.readline()
	values = {'name' : 'Yizow', 'lat' : '3', 'lon' : '1', 'time' : data[2:len(data) - 4], 'img' : img[:len(img) - 1]}
	payload = urllib.urlencode(values)

	# Send HTTP POST request
	req = urllib2.Request(url, payload)
	response = urllib2.urlopen(req)

	data = f.readline()

	html = response.read()
	print html

f.close()
