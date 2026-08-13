import os
import urllib.request
import time

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

images = {
    "public/images/marrakech_main.jpg": "https://images.unsplash.com/photo-1597211684565-dca64d72bdce?w=800",
    "public/images/chefchaouen_main.jpg": "https://images.unsplash.com/photo-1553524790-2ee75b632906?w=800",
    "public/images/dakhla_main.jpg": "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=800"
}

for path, url in images.items():
    if os.path.exists(path) and os.path.getsize(path) > 0:
        continue
    print(f"Downloading {path}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response, open(path, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Success: {path}")
        time.sleep(2)
    except Exception as e:
        print(f"Failed {path}: {e}")
