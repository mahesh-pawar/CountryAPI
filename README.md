# CountryAPI
CountryAPI is a open source API to fetch country details by country name, currency code, phone code ISO 2 code & ISO 3 code.

## How to Setup CountryAPI

~~~ 
git clone https://github.com/mahesh-pawar/CountryAPI.git
cd CountryAPI
npm install
nodemon index
~~~  

## How to Use CountryAPI in the browser or via Postman -

~~~
Get All Country List:
http://localhost:3000/v1/countries?api_key=CountryAPI

By Country Name:
http://localhost:3000/v1/countries/name/india?api_key=CountryAPI

By Currency Code:
http://localhost:3000/v1/countries/currency/INR?api_key=CountryAPI

By Phone Code:
http://localhost:3000/v1/countries/phone/91?api_key=CountryAPI

By ISO 2 or ISO 3 Country Code: 
http://localhost:3000/v1/countries/code/IN?api_key=CountryAPI
or
http://localhost:3000/v1/countries/code/IND?api_key=CountryAPI
~~~
