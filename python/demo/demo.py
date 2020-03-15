import requests
from bs4 import BeautifulSoup

header={''}
html = requests.get('',headers=header)
# print(html)
soup = BeautifulSoup(html,content,'html.parser')