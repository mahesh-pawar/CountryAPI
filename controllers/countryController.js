const countries = [
    {
        name: "Afghanistan",
        alpha_3_code: "AFG",
        phone_code: "93",
        currency_code: "AFN",
        timezone: "UTC+04:30",
        alpha_2_code: "AF"
    },
    {
        name: "Aland Islands",
        alpha_3_code: "ALA",
        phone_code: "358",
        currency_code: "EUR",
        timezone: "UTC+02:00",
        alpha_2_code: "AX"
    },
    {
        name: "Albania",
        alpha_3_code: "ALB",
        phone_code: "355",
        currency_code: "ALL",
        timezone: "UTC+01:00",
        alpha_2_code: "AL"
    },
    {
        name: "Algeria",
        alpha_3_code: "DZA",
        phone_code: "213",
        currency_code: "DZD",
        timezone: "UTC+01:00",
        alpha_2_code: "DZ"
    },
    {
        name: "American Samoa",
        alpha_3_code: "ASM",
        phone_code: "1684",
        currency_code: "USD",
        timezone: "UTC-11:00",
        alpha_2_code: "AS"
    },
    {
        name: "Andorra",
        alpha_3_code: "AND",
        phone_code: "376",
        currency_code: "EUR",
        timezone: "UTC+01:00",
        alpha_2_code: "AD"
    },
    {
        name: "Angola",
        alpha_3_code: "AGO",
        phone_code: "244",
        currency_code: "AOA",
        timezone: "UTC+01:00",
        alpha_2_code: "AO"
    },
    {
        name: "Anguilla",
        alpha_3_code: "AIA",
        phone_code: "1264",
        currency_code: "XCD",
        timezone: "UTC-04:00",
        alpha_2_code: "AI"
    },
    {
        name: "Antarctica",
        alpha_3_code: "ATA",
        phone_code: "672",
        currency_code: "AUD",
        timezone: "UTC-03:00",
        alpha_2_code: "AQ"
    },
    {
        name: "Antigua and Barbuda",
        alpha_3_code: "ATG",
        phone_code: "1268",
        currency_code: "XCD",
        timezone: "UTC-04:00",
        alpha_2_code: "AG"
    },
    {
        name: "Argentina",
        alpha_3_code: "ARG",
        phone_code: "54",
        currency_code: "ARS",
        timezone: "UTC-03:00",
        alpha_2_code: "AR"
    },
    {
        name: "Armenia",
        alpha_3_code: "ARM",
        phone_code: "374",
        currency_code: "AMD",
        timezone: "UTC+04:00",
        alpha_2_code: "AM"
    },
    {
        name: "Aruba",
        alpha_3_code: "ABW",
        phone_code: "297",
        currency_code: "AWG",
        timezone: "UTC-04:00",
        alpha_2_code: "AW"
    },
    {
        name: "Australia",
        alpha_3_code: "AUS",
        phone_code: "61",
        currency_code: "AUD",
        timezone: "UTC+05:00",
        alpha_2_code: "AU"
    },
    {
        name: "Austria",
        alpha_3_code: "AUT",
        phone_code: "43",
        currency_code: "EUR",
        timezone: "UTC+01:00",
        alpha_2_code: "AT"
    },
    {
        name: "Azerbaijan",
        alpha_3_code: "AZE",
        phone_code: "994",
        currency_code: "AZN",
        timezone: "UTC+04:00",
        alpha_2_code: "AZ"
    },
    {
        name: "Bahamas",
        alpha_3_code: "BHS",
        phone_code: "1242",
        currency_code: "BSD",
        timezone: "UTC-05:00",
        alpha_2_code: "BS"
    },
    {
        name: "Bahrain",
        alpha_3_code: "BHR",
        phone_code: "973",
        currency_code: "BHD",
        timezone: "UTC+03:00",
        alpha_2_code: "BH"
    },
    {
        name: "Bangladesh",
        alpha_3_code: "BGD",
        phone_code: "880",
        currency_code: "BDT",
        timezone: "UTC+06:00",
        alpha_2_code: "BD"
    },
    {
        name: "Barbados",
        alpha_3_code: "BRB",
        phone_code: "1246",
        currency_code: "BBD",
        timezone: "UTC-04:00",
        alpha_2_code: "BB"
    },
    {
        name: "Belarus",
        alpha_3_code: "BLR",
        phone_code: "375",
        currency_code: "BYN",
        timezone: "UTC+03:00",
        alpha_2_code: "BY"
    },
    {
        name: "Belgium",
        alpha_3_code: "BEL",
        phone_code: "32",
        currency_code: "EUR",
        timezone: "UTC+01:00",
        alpha_2_code: "BE"
    },
    {
        name: "Belize",
        alpha_3_code: "BLZ",
        phone_code: "501",
        currency_code: "BZD",
        timezone: "UTC-06:00",
        alpha_2_code: "BZ"
    },
    {
        name: "Benin",
        alpha_3_code: "BEN",
        phone_code: "229",
        currency_code: "XOF",
        timezone: "UTC+01:00",
        alpha_2_code: "BJ"
    },
    {
        name: "Bermuda",
        alpha_3_code: "BMU",
        phone_code: "1441",
        currency_code: "BMD",
        timezone: "UTC-04:00",
        alpha_2_code: "BM"
    },
    {
        name: "Bhutan",
        alpha_3_code: "BTN",
        phone_code: "975",
        currency_code: "BTN",
        timezone: "UTC+06:00",
        alpha_2_code: "BT"
    },
    {
        name: "Bolivia",
        alpha_3_code: "BOL",
        phone_code: "591",
        currency_code: "BOB",
        timezone: "UTC-04:00",
        alpha_2_code: "BO"
    },
    {
        name: "Bonaire, Sint Eustatius and Saba",
        alpha_3_code: "BES",
        phone_code: "5997",
        currency_code: "USD",
        timezone: "UTC-04:00",
        alpha_2_code: "BQ"
    },
    {
        name: "Bosnia and Herzegovina",
        alpha_3_code: "BIH",
        phone_code: "387",
        currency_code: "BAM",
        timezone: "UTC+01:00",
        alpha_2_code: "BA"
    },
    {
        name: "Botswana",
        alpha_3_code: "BWA",
        phone_code: "267",
        currency_code: "BWP",
        timezone: "UTC+02:00",
        alpha_2_code: "BW"
    },
    {
        name: "Bouvet Island",
        alpha_3_code: "BVT",
        phone_code: "",
        currency_code: "NOK",
        timezone: "UTC+01:00",
        alpha_2_code: "BV"
    },
    {
        name: "Brazil",
        alpha_3_code: "BRA",
        phone_code: "55",
        currency_code: "BRL",
        timezone: "UTC-05:00",
        alpha_2_code: "BR"
    },
    {
        name: "British Indian Ocean Territory",
        alpha_3_code: "IOT",
        phone_code: "246",
        currency_code: "USD",
        timezone: "UTC+06:00",
        alpha_2_code: "IO"
    },
    {
        name: "United States Minor Outlying Islands",
        alpha_3_code: "UMI",
        phone_code: "",
        currency_code: "USD",
        timezone: "UTC-11:00",
        alpha_2_code: "UM"
    },
    {
        name: "Virgin Islands (British)",
        alpha_3_code: "VGB",
        phone_code: "1284",
        currency_code: null, timezone: "UTC-04:00",
        alpha_2_code: "VG"
    },
    {
        name: "Virgin Islands (U.S.)",
        alpha_3_code: "VIR",
        phone_code: "1 340",
        currency_code: "USD",
        timezone: "UTC-04:00",
        alpha_2_code: "VI"
    },
    {
        name: "Brunei Darussalam",
        alpha_3_code: "BRN",
        phone_code: "673",
        currency_code: "BND",
        timezone: "UTC+08:00",
        alpha_2_code: "BN"
    },
    {
        name: "Bulgaria",
        alpha_3_code: "BGR",
        phone_code: "359",
        currency_code: "BGN",
        timezone: "UTC+02:00",
        alpha_2_code: "BG"
    },
    {
        name: "Burkina Faso",
        alpha_3_code: "BFA",
        phone_code: "226",
        currency_code: "XOF",
        timezone: "UTC",
        alpha_2_code: "BF"
    },
    {
        name: "Burundi",
        alpha_3_code: "BDI",
        phone_code: "257",
        currency_code: "BIF",
        timezone: "UTC+02:00",
        alpha_2_code: "BI"
    },
    {
        name: "Cambodia",
        alpha_3_code: "KHM",
        phone_code: "855",
        currency_code: "KHR",
        timezone: "UTC+07:00",
        alpha_2_code: "KH"
    },
    {
        name: "Cameroon",
        alpha_3_code: "CMR",
        phone_code: "237",
        currency_code: "XAF",
        timezone: "UTC+01:00",
        alpha_2_code: "CM"
    },
    {
        name: "Canada",
        alpha_3_code: "CAN",
        phone_code: "1",
        currency_code: "CAD",
        timezone: "UTC-08:00",
        alpha_2_code: "CA"
    },
    {
        name: "Cabo Verde",
        alpha_3_code: "CPV",
        phone_code: "238",
        currency_code: "CVE",
        timezone: "UTC-01:00",
        alpha_2_code: "CV"
    },
    {
        name: "Cayman Islands",
        alpha_3_code: "CYM",
        phone_code: "1345",
        currency_code: "KYD",
        timezone: "UTC-05:00",
        alpha_2_code: "KY"
    },
    {
        name: "Central African Republic",
        alpha_3_code: "CAF",
        phone_code: "236",
        currency_code: "XAF",
        timezone: "UTC+01:00",
        alpha_2_code: "CF"
    },
    {
        name: "Chad",
        alpha_3_code: "TCD",
        phone_code: "235",
        currency_code: "XAF",
        timezone: "UTC+01:00",
        alpha_2_code: "TD"
    },
    {
        name: "Chile",
        alpha_3_code: "CHL",
        phone_code: "56",
        currency_code: "CLP",
        timezone: "UTC-06:00",
        alpha_2_code: "CL"
    },
    {
        name: "China",
        alpha_3_code: "CHN",
        phone_code: "86",
        currency_code: "CNY",
        timezone: "UTC+08:00",
        alpha_2_code: "CN"
    },
    {
        name: "Christmas Island",
        alpha_3_code: "CXR",
        phone_code: "61",
        currency_code: "AUD",
        timezone: "UTC+07:00",
        alpha_2_code: "CX"
    },
    {
        name: "Cocos (Keeling) Islands",
        alpha_3_code: "CCK",
        phone_code: "61",
        currency_code: "AUD",
        timezone: "UTC+06:30",
        alpha_2_code: "CC"
    },
    {
        name: "Colombia",
        alpha_3_code: "COL",
        phone_code: "57",
        currency_code: "COP",
        timezone: "UTC-05:00",
        alpha_2_code: "CO"
    },
    {
        name: "Comoros",
        alpha_3_code: "COM",
        phone_code: "269",
        currency_code: "KMF",
        timezone: "UTC+03:00",
        alpha_2_code: "KM"
    },
    {
        name: "Congo",
        alpha_3_code: "COG",
        phone_code: "242",
        currency_code: "XAF",
        timezone: "UTC+01:00",
        alpha_2_code: "CG"
    },
    {
        name: "Congo (Democratic Republic of the)",
        alpha_3_code: "COD",
        phone_code: "243",
        currency_code: "CDF",
        timezone: "UTC+01:00",
        alpha_2_code: "CD"
    },
    {
        name: "Cook Islands",
        alpha_3_code: "COK",
        phone_code: "682",
        currency_code: "NZD",
        timezone: "UTC-10:00",
        alpha_2_code: "CK"
    },
    {
        name: "Costa Rica",
        alpha_3_code: "CRI",
        phone_code: "506",
        currency_code: "CRC",
        timezone: "UTC-06:00",
        alpha_2_code: "CR"
    },
    {
        name: "Croatia",
        alpha_3_code: "HRV",
        phone_code: "385",
        currency_code: "HRK",
        timezone: "UTC+01:00",
        alpha_2_code: "HR"
    },
    {
        name: "Cuba",
        alpha_3_code: "CUB",
        phone_code: "53",
        currency_code: "CUC",
        timezone: "UTC-05:00",
        alpha_2_code: "CU"
    },
    {
        name: "Cura\u00e7ao",
        alpha_3_code: "CUW",
        phone_code: "599",
        currency_code: "ANG",
        timezone: "UTC-04:00",
        alpha_2_code: "CW"
    },
    {
        name: "Cyprus",
        alpha_3_code: "CYP",
        phone_code: "357",
        currency_code: "EUR",
        timezone: "UTC+02:00",
        alpha_2_code: "CY"
    },
    {
        name: "Czech Republic",
        alpha_3_code: "CZE",
        phone_code: "420",
        currency_code: "CZK",
        timezone: "UTC+01:00",
        alpha_2_code: "CZ"
    },
    {
        name: "Denmark",
        alpha_3_code: "DNK",
        phone_code: "45",
        currency_code: "DKK",
        timezone: "UTC-04:00",
        alpha_2_code: "DK"
    },
    {
        name: "Djibouti",
        alpha_3_code: "DJI",
        phone_code: "253",
        currency_code: "DJF",
        timezone: "UTC+03:00",
        alpha_2_code: "DJ"
    },
    {
        name: "Dominica",
        alpha_3_code: "DMA",
        phone_code: "1767",
        currency_code: "XCD",
        timezone: "UTC-04:00",
        alpha_2_code: "DM"
    },
    {
        name: "Dominican Republic",
        alpha_3_code: "DOM",
        phone_code: "1809",
        currency_code: "DOP",
        timezone: "UTC-04:00",
        alpha_2_code: "DO"
    },
    {
        name: "Ecuador",
        alpha_3_code: "ECU",
        phone_code: "593",
        currency_code: "USD",
        timezone: "UTC-06:00",
        alpha_2_code: "EC"
    },
    {
        name: "Egypt",
        alpha_3_code: "EGY",
        phone_code: "20",
        currency_code: "EGP",
        timezone: "UTC+02:00",
        alpha_2_code: "EG"
    },
    {
        name: "El Salvador",
        alpha_3_code: "SLV",
        phone_code: "503",
        currency_code: "USD",
        timezone: "UTC-06:00",
        alpha_2_code: "SV"
    },
    {
        name: "Equatorial Guinea",
        alpha_3_code: "GNQ",
        phone_code: "240",
        currency_code: "XAF",
        timezone: "UTC+01:00",
        alpha_2_code: "GQ"
    },
    {
        name: "Eritrea",
        alpha_3_code: "ERI",
        phone_code: "291",
        currency_code: "ERN",
        timezone: "UTC+03:00",
        alpha_2_code: "ER"
    },
    {
        name: "Estonia",
        alpha_3_code: "EST",
        phone_code: "372",
        currency_code: "EUR",
        timezone: "UTC+02:00",
        alpha_2_code: "EE"
    },
    {
        name: "Ethiopia",
        alpha_3_code: "ETH",
        phone_code: "251",
        currency_code: "ETB",
        timezone: "UTC+03:00",
        alpha_2_code: "ET"
    },
    {
        name: "Falkland Islands (Malvinas)",
        alpha_3_code: "FLK",
        phone_code: "500",
        currency_code: "FKP",
        timezone: "UTC-04:00",
        alpha_2_code: "FK"
    },
    {
        name: "Faroe Islands",
        alpha_3_code: "FRO",
        phone_code: "298",
        currency_code: "DKK",
        timezone: "UTC+00:00",
        alpha_2_code: "FO"
    },
    {
        name: "Fiji",
        alpha_3_code: "FJI",
        phone_code: "679",
        currency_code: "FJD",
        timezone: "UTC+12:00",
        alpha_2_code: "FJ"
    },
    {
        name: "Finland",
        alpha_3_code: "FIN",
        phone_code: "358",
        currency_code: "EUR",
        timezone: "UTC+02:00",
        alpha_2_code: "FI"
    },
    {
        name: "France",
        alpha_3_code: "FRA",
        phone_code: "33",
        currency_code: "EUR",
        timezone: "UTC-10:00",
        alpha_2_code: "FR"
    },
    {
        name: "French Guiana",
        alpha_3_code: "GUF",
        phone_code: "594",
        currency_code: "EUR",
        timezone: "UTC-03:00",
        alpha_2_code: "GF"
    },
    {
        name: "French Polynesia",
        alpha_3_code: "PYF",
        phone_code: "689",
        currency_code: "XPF",
        timezone: "UTC-10:00",
        alpha_2_code: "PF"
    },
    {
        name: "French Southern Territories",
        alpha_3_code: "ATF",
        phone_code: "",
        currency_code: "EUR",
        timezone: "UTC+05:00",
        alpha_2_code: "TF"
    },
    {
        name: "Gabon",
        alpha_3_code: "GAB",
        phone_code: "241",
        currency_code: "XAF",
        timezone: "UTC+01:00",
        alpha_2_code: "GA"
    },
    {
        name: "Gambia",
        alpha_3_code: "GMB",
        phone_code: "220",
        currency_code: "GMD",
        timezone: "UTC+00:00",
        alpha_2_code: "GM"
    },
    {
        name: "Georgia",
        alpha_3_code: "GEO",
        phone_code: "995",
        currency_code: "GEL",
        timezone: "UTC-05:00",
        alpha_2_code: "GE"
    },
    {
        name: "Germany",
        alpha_3_code: "DEU",
        phone_code: "49",
        currency_code: "EUR",
        timezone: "UTC+01:00",
        alpha_2_code: "DE"
    },
    {
        name: "Ghana",
        alpha_3_code: "GHA",
        phone_code: "233",
        currency_code: "GHS",
        timezone: "UTC",
        alpha_2_code: "GH"
    },
    {
        name: "Gibraltar",
        alpha_3_code: "GIB",
        phone_code: "350",
        currency_code: "GIP",
        timezone: "UTC+01:00",
        alpha_2_code: "GI"
    },
    {
        name: "Greece",
        alpha_3_code: "GRC",
        phone_code: "30",
        currency_code: "EUR",
        timezone: "UTC+02:00",
        alpha_2_code: "GR"
    },
    {
        name: "Greenland",
        alpha_3_code: "GRL",
        phone_code: "299",
        currency_code: "DKK",
        timezone: "UTC-04:00",
        alpha_2_code: "GL"
    },
    {
        name: "Grenada",
        alpha_3_code: "GRD",
        phone_code: "1473",
        currency_code: "XCD",
        timezone: "UTC-04:00",
        alpha_2_code: "GD"
    },
    {
        name: "Guadeloupe",
        alpha_3_code: "GLP",
        phone_code: "590",
        currency_code: "EUR",
        timezone: "UTC-04:00",
        alpha_2_code: "GP"
    },
    {
        name: "Guam",
        alpha_3_code: "GUM",
        phone_code: "1671",
        currency_code: "USD",
        timezone: "UTC+10:00",
        alpha_2_code: "GU"
    },
    {
        name: "Guatemala",
        alpha_3_code: "GTM",
        phone_code: "502",
        currency_code: "GTQ",
        timezone: "UTC-06:00",
        alpha_2_code: "GT"
    },
    {
        name: "Guernsey",
        alpha_3_code: "GGY",
        phone_code: "44",
        currency_code: "GBP",
        timezone: "UTC+00:00",
        alpha_2_code: "GG"
    },
    {
        name: "Guinea",
        alpha_3_code: "GIN",
        phone_code: "224",
        currency_code: "GNF",
        timezone: "UTC",
        alpha_2_code: "GN"
    },
    {
        name: "Guinea-Bissau",
        alpha_3_code: "GNB",
        phone_code: "245",
        currency_code: "XOF",
        timezone: "UTC",
        alpha_2_code: "GW"
    },
    {
        name: "Guyana",
        alpha_3_code: "GUY",
        phone_code: "592",
        currency_code: "GYD",
        timezone: "UTC-04:00",
        alpha_2_code: "GY"
    },
    {
        name: "Haiti",
        alpha_3_code: "HTI",
        phone_code: "509",
        currency_code: "HTG",
        timezone: "UTC-05:00",
        alpha_2_code: "HT"
    },
    {
        name: "Heard Island and McDonald Islands",
        alpha_3_code: "HMD",
        phone_code: "",
        currency_code: "AUD",
        timezone: "UTC+05:00",
        alpha_2_code: "HM"
    },
    {
        name: "Holy See",
        alpha_3_code: "VAT",
        phone_code: "379",
        currency_code: "EUR",
        timezone: "UTC+01:00",
        alpha_2_code: "VA"
    },
    {
        name: "Honduras",
        alpha_3_code: "HND",
        phone_code: "504",
        currency_code: "HNL",
        timezone: "UTC-06:00",
        alpha_2_code: "HN"
    },
    {
        name: "Hong Kong",
        alpha_3_code: "HKG",
        phone_code: "852",
        currency_code: "HKD",
        timezone: "UTC+08:00",
        alpha_2_code: "HK"
    },
    {
        name: "Hungary",
        alpha_3_code: "HUN",
        phone_code: "36",
        currency_code: "HUF",
        timezone: "UTC+01:00",
        alpha_2_code: "HU"
    },
    {
        name: "Iceland",
        alpha_3_code: "ISL",
        phone_code: "354",
        currency_code: "ISK",
        timezone: "UTC",
        alpha_2_code: "IS"
    },
    {
        name: "India",
        alpha_3_code: "IND",
        phone_code: "91",
        currency_code: "INR",
        timezone: "UTC+05:30",
        alpha_2_code: "IN"
    },
    {
        name: "Indonesia",
        alpha_3_code: "IDN",
        phone_code: "62",
        currency_code: "IDR",
        timezone: "UTC+07:00",
        alpha_2_code: "ID"
    },
    {
        name: "C\u00f4te d\'Ivoire",
        alpha_3_code: "CIV",
        phone_code: "225",
        currency_code: "XOF",
        timezone: "UTC",
        alpha_2_code: "CI"
    },
    {
        name: "Iran (Islamic Republic of)",
        alpha_3_code: "IRN",
        phone_code: "98",
        currency_code: "IRR",
        timezone: "UTC+03:30",
        alpha_2_code: "IR"
    },
    {
        name: "Iraq",
        alpha_3_code: "IRQ",
        phone_code: "964",
        currency_code: "IQD",
        timezone: "UTC+03:00",
        alpha_2_code: "IQ"
    },
    {
        name: "Ireland",
        alpha_3_code: "IRL",
        phone_code: "353",
        currency_code: "EUR",
        timezone: "UTC",
        alpha_2_code: "IE"
    },
    {
        name: "Isle of Man",
        alpha_3_code: "IMN",
        phone_code: "44",
        currency_code: "GBP",
        timezone: "UTC+00:00",
        alpha_2_code: "IM"
    },
    {
        name: "Israel",
        alpha_3_code: "ISR",
        phone_code: "972",
        currency_code: "ILS",
        timezone: "UTC+02:00",
        alpha_2_code: "IL"
    },
    {
        name: "Italy",
        alpha_3_code: "ITA",
        phone_code: "39",
        currency_code: "EUR",
        timezone: "UTC+01:00",
        alpha_2_code: "IT"
    },
    {
        name: "Jamaica",
        alpha_3_code: "JAM",
        phone_code: "1876",
        currency_code: "JMD",
        timezone: "UTC-05:00",
        alpha_2_code: "JM"
    },
    {
        name: "Japan",
        alpha_3_code: "JPN",
        phone_code: "81",
        currency_code: "JPY",
        timezone: "UTC+09:00",
        alpha_2_code: "JP"
    },
    {
        name: "Jersey",
        alpha_3_code: "JEY",
        phone_code: "44",
        currency_code: "GBP",
        timezone: "UTC+01:00",
        alpha_2_code: "JE"
    },
    {
        name: "Jordan",
        alpha_3_code: "JOR",
        phone_code: "962",
        currency_code: "JOD",
        timezone: "UTC+03:00",
        alpha_2_code: "JO"
    },
    {
        name: "Kazakhstan",
        alpha_3_code: "KAZ",
        phone_code: "76",
        currency_code: "KZT",
        timezone: "UTC+05:00",
        alpha_2_code: "KZ"
    },
    {
        name: "Kenya",
        alpha_3_code: "KEN",
        phone_code: "254",
        currency_code: "KES",
        timezone: "UTC+03:00",
        alpha_2_code: "KE"
    },
    {
        name: "Kiribati",
        alpha_3_code: "KIR",
        phone_code: "686",
        currency_code: "AUD",
        timezone: "UTC+12:00",
        alpha_2_code: "KI"
    },
    {
        name: "Kuwait",
        alpha_3_code: "KWT",
        phone_code: "965",
        currency_code: "KWD",
        timezone: "UTC+03:00",
        alpha_2_code: "KW"
    },
    {
        name: "Kyrgyzstan",
        alpha_3_code: "KGZ",
        phone_code: "996",
        currency_code: "KGS",
        timezone: "UTC+06:00",
        alpha_2_code: "KG"
    },
    {
        name: "Lao People\'s Democratic Republic",
        alpha_3_code: "LAO",
        phone_code: "856",
        currency_code: "LAK",
        timezone: "UTC+07:00",
        alpha_2_code: "LA"
    },
    {
        name: "Latvia",
        alpha_3_code: "LVA",
        phone_code: "371",
        currency_code: "EUR",
        timezone: "UTC+02:00",
        alpha_2_code: "LV"
    },
    {
        name: "Lebanon",
        alpha_3_code: "LBN",
        phone_code: "961",
        currency_code: "LBP",
        timezone: "UTC+02:00",
        alpha_2_code: "LB"
    },
    {
        name: "Lesotho",
        alpha_3_code: "LSO",
        phone_code: "266",
        currency_code: "LSL",
        timezone: "UTC+02:00",
        alpha_2_code: "LS"
    },
    {
        name: "Liberia",
        alpha_3_code: "LBR",
        phone_code: "231",
        currency_code: "LRD",
        timezone: "UTC",
        alpha_2_code: "LR"
    },
    {
        name: "Libya",
        alpha_3_code: "LBY",
        phone_code: "218",
        currency_code: "LYD",
        timezone: "UTC+01:00",
        alpha_2_code: "LY"
    },
    {
        name: "Liechtenstein",
        alpha_3_code: "LIE",
        phone_code: "423",
        currency_code: "CHF",
        timezone: "UTC+01:00",
        alpha_2_code: "LI"
    },
    {
        name: "Lithuania",
        alpha_3_code: "LTU",
        phone_code: "370",
        currency_code: "EUR",
        timezone: "UTC+02:00",
        alpha_2_code: "LT"
    },
    {
        name: "Luxembourg",
        alpha_3_code: "LUX",
        phone_code: "352",
        currency_code: "EUR",
        timezone: "UTC+01:00",
        alpha_2_code: "LU"
    },
    {
        name: "Macao",
        alpha_3_code: "MAC",
        phone_code: "853",
        currency_code: "MOP",
        timezone: "UTC+08:00",
        alpha_2_code: "MO"
    },
    {
        name: "Macedonia (the former Yugoslav Republic of)",
        alpha_3_code: "MKD",
        phone_code: "389",
        currency_code: "MKD",
        timezone: "UTC+01:00",
        alpha_2_code: "MK"
    },
    {
        name: "Madagascar",
        alpha_3_code: "MDG",
        phone_code: "261",
        currency_code: "MGA",
        timezone: "UTC+03:00",
        alpha_2_code: "MG"
    },
    {
        name: "Malawi",
        alpha_3_code: "MWI",
        phone_code: "265",
        currency_code: "MWK",
        timezone: "UTC+02:00",
        alpha_2_code: "MW"
    },
    {
        name: "Malaysia",
        alpha_3_code: "MYS",
        phone_code: "60",
        currency_code: "MYR",
        timezone: "UTC+08:00",
        alpha_2_code: "MY"
    },
    {
        name: "Maldives",
        alpha_3_code: "MDV",
        phone_code: "960",
        currency_code: "MVR",
        timezone: "UTC+05:00",
        alpha_2_code: "MV"
    },
    {
        name: "Mali",
        alpha_3_code: "MLI",
        phone_code: "223",
        currency_code: "XOF",
        timezone: "UTC",
        alpha_2_code: "ML"
    },
    {
        name: "Malta",
        alpha_3_code: "MLT",
        phone_code: "356",
        currency_code: "EUR",
        timezone: "UTC+01:00",
        alpha_2_code: "MT"
    },
    {
        name: "Marshall Islands",
        alpha_3_code: "MHL",
        phone_code: "692",
        currency_code: "USD",
        timezone: "UTC+12:00",
        alpha_2_code: "MH"
    },
    {
        name: "Martinique",
        alpha_3_code: "MTQ",
        phone_code: "596",
        currency_code: "EUR",
        timezone: "UTC-04:00",
        alpha_2_code: "MQ"
    },
    {
        name: "Mauritania",
        alpha_3_code: "MRT",
        phone_code: "222",
        currency_code: "MRO",
        timezone: "UTC",
        alpha_2_code: "MR"
    },
    {
        name: "Mauritius",
        alpha_3_code: "MUS",
        phone_code: "230",
        currency_code: "MUR",
        timezone: "UTC+04:00",
        alpha_2_code: "MU"
    },
    {
        name: "Mayotte",
        alpha_3_code: "MYT",
        phone_code: "262",
        currency_code: "EUR",
        timezone: "UTC+03:00",
        alpha_2_code: "YT"
    },
    {
        name: "Mexico",
        alpha_3_code: "MEX",
        phone_code: "52",
        currency_code: "MXN",
        timezone: "UTC-08:00",
        alpha_2_code: "MX"
    },
    {
        name: "Micronesia (Federated States of)",
        alpha_3_code: "FSM",
        phone_code: "691",
        currency_code: null, timezone: "UTC+10:00",
        alpha_2_code: "FM"
    },
    {
        name: "Moldova (Republic of)",
        alpha_3_code: "MDA",
        phone_code: "373",
        currency_code: "MDL",
        timezone: "UTC+02:00",
        alpha_2_code: "MD"
    },
    {
        name: "Monaco",
        alpha_3_code: "MCO",
        phone_code: "377",
        currency_code: "EUR",
        timezone: "UTC+01:00",
        alpha_2_code: "MC"
    },
    {
        name: "Mongolia",
        alpha_3_code: "MNG",
        phone_code: "976",
        currency_code: "MNT",
        timezone: "UTC+07:00",
        alpha_2_code: "MN"
    },
    {
        name: "Montenegro",
        alpha_3_code: "MNE",
        phone_code: "382",
        currency_code: "EUR",
        timezone: "UTC+01:00",
        alpha_2_code: "ME"
    },
    {
        name: "Montserrat",
        alpha_3_code: "MSR",
        phone_code: "1664",
        currency_code: "XCD",
        timezone: "UTC-04:00",
        alpha_2_code: "MS"
    },
    {
        name: "Morocco",
        alpha_3_code: "MAR",
        phone_code: "212",
        currency_code: "MAD",
        timezone: "UTC",
        alpha_2_code: "MA"
    },
    {
        name: "Mozambique",
        alpha_3_code: "MOZ",
        phone_code: "258",
        currency_code: "MZN",
        timezone: "UTC+02:00",
        alpha_2_code: "MZ"
    },
    {
        name: "Myanmar",
        alpha_3_code: "MMR",
        phone_code: "95",
        currency_code: "MMK",
        timezone: "UTC+06:30",
        alpha_2_code: "MM"
    },
    {
        name: "Namibia",
        alpha_3_code: "NAM",
        phone_code: "264",
        currency_code: "NAD",
        timezone: "UTC+01:00",
        alpha_2_code: "NA"
    },
    {
        name: "Nauru",
        alpha_3_code: "NRU",
        phone_code: "674",
        currency_code: "AUD",
        timezone: "UTC+12:00",
        alpha_2_code: "NR"
    },
    {
        name: "Nepal",
        alpha_3_code: "NPL",
        phone_code: "977",
        currency_code: "NPR",
        timezone: "UTC+05:45",
        alpha_2_code: "NP"
    },
    {
        name: "Netherlands",
        alpha_3_code: "NLD",
        phone_code: "31",
        currency_code: "EUR",
        timezone: "UTC-04:00",
        alpha_2_code: "NL"
    },
    {
        name: "New Caledonia",
        alpha_3_code: "NCL",
        phone_code: "687",
        currency_code: "XPF",
        timezone: "UTC+11:00",
        alpha_2_code: "NC"
    },
    {
        name: "New Zealand",
        alpha_3_code: "NZL",
        phone_code: "64",
        currency_code: "NZD",
        timezone: "UTC-11:00",
        alpha_2_code: "NZ"
    },
    {
        name: "Nicaragua",
        alpha_3_code: "NIC",
        phone_code: "505",
        currency_code: "NIO",
        timezone: "UTC-06:00",
        alpha_2_code: "NI"
    },
    {
        name: "Niger",
        alpha_3_code: "NER",
        phone_code: "227",
        currency_code: "XOF",
        timezone: "UTC+01:00",
        alpha_2_code: "NE"
    },
    {
        name: "Nigeria",
        alpha_3_code: "NGA",
        phone_code: "234",
        currency_code: "NGN",
        timezone: "UTC+01:00",
        alpha_2_code: "NG"
    },
    {
        name: "Niue",
        alpha_3_code: "NIU",
        phone_code: "683",
        currency_code: "NZD",
        timezone: "UTC-11:00",
        alpha_2_code: "NU"
    },
    {
        name: "Norfolk Island",
        alpha_3_code: "NFK",
        phone_code: "672",
        currency_code: "AUD",
        timezone: "UTC+11:30",
        alpha_2_code: "NF"
    },
    {
        name: "Korea (Democratic People\'s Republic of)",
        alpha_3_code: "PRK",
        phone_code: "850",
        currency_code: "KPW",
        timezone: "UTC+09:00",
        alpha_2_code: "KP"
    },
    {
        name: "Northern Mariana Islands",
        alpha_3_code: "MNP",
        phone_code: "1670",
        currency_code: "USD",
        timezone: "UTC+10:00",
        alpha_2_code: "MP"
    },
    {
        name: "Norway",
        alpha_3_code: "NOR",
        phone_code: "47",
        currency_code: "NOK",
        timezone: "UTC+01:00",
        alpha_2_code: "NO"
    },
    {
        name: "Oman",
        alpha_3_code: "OMN",
        phone_code: "968",
        currency_code: "OMR",
        timezone: "UTC+04:00",
        alpha_2_code: "OM"
    },
    {
        name: "Pakistan",
        alpha_3_code: "PAK",
        phone_code: "92",
        currency_code: "PKR",
        timezone: "UTC+05:00",
        alpha_2_code: "PK"
    },
    {
        name: "Palau",
        alpha_3_code: "PLW",
        phone_code: "680",
        currency_code: "(none)",
        timezone: "UTC+09:00",
        alpha_2_code: "PW"
    },
    {
        name: "Palestine, State of",
        alpha_3_code: "PSE",
        phone_code: "970",
        currency_code: "ILS",
        timezone: "UTC+02:00",
        alpha_2_code: "PS"
    },
    {
        name: "Panama",
        alpha_3_code: "PAN",
        phone_code: "507",
        currency_code: "PAB",
        timezone: "UTC-05:00",
        alpha_2_code: "PA"
    },
    {
        name: "Papua New Guinea",
        alpha_3_code: "PNG",
        phone_code: "675",
        currency_code: "PGK",
        timezone: "UTC+10:00",
        alpha_2_code: "PG"
    },
    {
        name: "Paraguay",
        alpha_3_code: "PRY",
        phone_code: "595",
        currency_code: "PYG",
        timezone: "UTC-04:00",
        alpha_2_code: "PY"
    },
    {
        name: "Peru",
        alpha_3_code: "PER",
        phone_code: "51",
        currency_code: "PEN",
        timezone: "UTC-05:00",
        alpha_2_code: "PE"
    },
    {
        name: "Philippines",
        alpha_3_code: "PHL",
        phone_code: "63",
        currency_code: "PHP",
        timezone: "UTC+08:00",
        alpha_2_code: "PH"
    },
    {
        name: "Pitcairn",
        alpha_3_code: "PCN",
        phone_code: "64",
        currency_code: "NZD",
        timezone: "UTC-08:00",
        alpha_2_code: "PN"
    },
    {
        name: "Poland",
        alpha_3_code: "POL",
        phone_code: "48",
        currency_code: "PLN",
        timezone: "UTC+01:00",
        alpha_2_code: "PL"
    },
    {
        name: "Portugal",
        alpha_3_code: "PRT",
        phone_code: "351",
        currency_code: "EUR",
        timezone: "UTC-01:00",
        alpha_2_code: "PT"
    },
    {
        name: "Puerto Rico",
        alpha_3_code: "PRI",
        phone_code: "1787",
        currency_code: "USD",
        timezone: "UTC-04:00",
        alpha_2_code: "PR"
    },
    {
        name: "Qatar",
        alpha_3_code: "QAT",
        phone_code: "974",
        currency_code: "QAR",
        timezone: "UTC+03:00",
        alpha_2_code: "QA"
    },
    {
        name: "Republic of Kosovo",
        alpha_3_code: "KOS",
        phone_code: "383",
        currency_code: "EUR",
        timezone: "UTC+01:00",
        alpha_2_code: "XK"
    },
    {
        name: "R\u00e9union",
        alpha_3_code: "REU",
        phone_code: "262",
        currency_code: "EUR",
        timezone: "UTC+04:00",
        alpha_2_code: "RE"
    },
    {
        name: "Romania",
        alpha_3_code: "ROU",
        phone_code: "40",
        currency_code: "RON",
        timezone: "UTC+02:00",
        alpha_2_code: "RO"
    },
    {
        name: "Russian Federation",
        alpha_3_code: "RUS",
        phone_code: "7",
        currency_code: "RUB",
        timezone: "UTC+03:00",
        alpha_2_code: "RU"
    },
    {
        name: "Rwanda",
        alpha_3_code: "RWA",
        phone_code: "250",
        currency_code: "RWF",
        timezone: "UTC+02:00",
        alpha_2_code: "RW"
    },
    {
        name: "Saint Barth\u00e9lemy",
        alpha_3_code: "BLM",
        phone_code: "590",
        currency_code: "EUR",
        timezone: "UTC-04:00",
        alpha_2_code: "BL"
    },
    {
        name: "Saint Helena, Ascension and Tristan da Cunha",
        alpha_3_code: "SHN",
        phone_code: "290",
        currency_code: "SHP",
        timezone: "UTC+00:00",
        alpha_2_code: "SH"
    },
    {
        name: "Saint Kitts and Nevis",
        alpha_3_code: "KNA",
        phone_code: "1869",
        currency_code: "XCD",
        timezone: "UTC-04:00",
        alpha_2_code: "KN"
    },
    {
        name: "Saint Lucia",
        alpha_3_code: "LCA",
        phone_code: "1758",
        currency_code: "XCD",
        timezone: "UTC-04:00",
        alpha_2_code: "LC"
    },
    {
        name: "Saint Martin (French part)",
        alpha_3_code: "MAF",
        phone_code: "590",
        currency_code: "EUR",
        timezone: "UTC-04:00",
        alpha_2_code: "MF"
    },
    {
        name: "Saint Pierre and Miquelon",
        alpha_3_code: "SPM",
        phone_code: "508",
        currency_code: "EUR",
        timezone: "UTC-03:00",
        alpha_2_code: "PM"
    },
    {
        name: "Saint Vincent and the Grenadines",
        alpha_3_code: "VCT",
        phone_code: "1784",
        currency_code: "XCD",
        timezone: "UTC-04:00",
        alpha_2_code: "VC"
    },
    {
        name: "Samoa",
        alpha_3_code: "WSM",
        phone_code: "685",
        currency_code: "WST",
        timezone: "UTC+13:00",
        alpha_2_code: "WS"
    },
    {
        name: "San Marino",
        alpha_3_code: "SMR",
        phone_code: "378",
        currency_code: "EUR",
        timezone: "UTC+01:00",
        alpha_2_code: "SM"
    },
    {
        name: "Sao Tome and Principe",
        alpha_3_code: "STP",
        phone_code: "239",
        currency_code: "STD",
        timezone: "UTC",
        alpha_2_code: "ST"
    },
    {
        name: "Saudi Arabia",
        alpha_3_code: "SAU",
        phone_code: "966",
        currency_code: "SAR",
        timezone: "UTC+03:00",
        alpha_2_code: "SA"
    },
    {
        name: "Senegal",
        alpha_3_code: "SEN",
        phone_code: "221",
        currency_code: "XOF",
        timezone: "UTC",
        alpha_2_code: "SN"
    },
    {
        name: "Serbia",
        alpha_3_code: "SRB",
        phone_code: "381",
        currency_code: "RSD",
        timezone: "UTC+01:00",
        alpha_2_code: "RS"
    },
    {
        name: "Seychelles",
        alpha_3_code: "SYC",
        phone_code: "248",
        currency_code: "SCR",
        timezone: "UTC+04:00",
        alpha_2_code: "SC"
    },
    {
        name: "Sierra Leone",
        alpha_3_code: "SLE",
        phone_code: "232",
        currency_code: "SLL",
        timezone: "UTC",
        alpha_2_code: "SL"
    },
    {
        name: "Singapore",
        alpha_3_code: "SGP",
        phone_code: "65",
        currency_code: "BND",
        timezone: "UTC+08:00",
        alpha_2_code: "SG"
    },
    {
        name: "Sint Maarten (Dutch part)",
        alpha_3_code: "SXM",
        phone_code: "1721",
        currency_code: "ANG",
        timezone: "UTC-04:00",
        alpha_2_code: "SX"
    },
    {
        name: "Slovakia",
        alpha_3_code: "SVK",
        phone_code: "421",
        currency_code: "EUR",
        timezone: "UTC+01:00",
        alpha_2_code: "SK"
    },
    {
        name: "Slovenia",
        alpha_3_code: "SVN",
        phone_code: "386",
        currency_code: "EUR",
        timezone: "UTC+01:00",
        alpha_2_code: "SI"
    },
    {
        name: "Solomon Islands",
        alpha_3_code: "SLB",
        phone_code: "677",
        currency_code: "SBD",
        timezone: "UTC+11:00",
        alpha_2_code: "SB"
    },
    {
        name: "Somalia",
        alpha_3_code: "SOM",
        phone_code: "252",
        currency_code: "SOS",
        timezone: "UTC+03:00",
        alpha_2_code: "SO"
    },
    {
        name: "South Africa",
        alpha_3_code: "ZAF",
        phone_code: "27",
        currency_code: "ZAR",
        timezone: "UTC+02:00",
        alpha_2_code: "ZA"
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        alpha_3_code: "SGS",
        phone_code: "500",
        currency_code: "GBP",
        timezone: "UTC-02:00",
        alpha_2_code: "GS"
    },
    {
        name: "Korea (Republic of)",
        alpha_3_code: "KOR",
        phone_code: "82",
        currency_code: "KRW",
        timezone: "UTC+09:00",
        alpha_2_code: "KR"
    },
    {
        name: "South Sudan",
        alpha_3_code: "SSD",
        phone_code: "211",
        currency_code: "SSP",
        timezone: "UTC+03:00",
        alpha_2_code: "SS"
    },
    {
        name: "Spain",
        alpha_3_code: "ESP",
        phone_code: "34",
        currency_code: "EUR",
        timezone: "UTC",
        alpha_2_code: "ES"
    },
    {
        name: "Sri Lanka",
        alpha_3_code: "LKA",
        phone_code: "94",
        currency_code: "LKR",
        timezone: "UTC+05:30",
        alpha_2_code: "LK"
    },
    {
        name: "Sudan",
        alpha_3_code: "SDN",
        phone_code: "249",
        currency_code: "SDG",
        timezone: "UTC+03:00",
        alpha_2_code: "SD"
    },
    {
        name: "Suriname",
        alpha_3_code: "SUR",
        phone_code: "597",
        currency_code: "SRD",
        timezone: "UTC-03:00",
        alpha_2_code: "SR"
    },
    {
        name: "Svalbard and Jan Mayen",
        alpha_3_code: "SJM",
        phone_code: "4779",
        currency_code: "NOK",
        timezone: "UTC+01:00",
        alpha_2_code: "SJ"
    },
    {
        name: "Swaziland",
        alpha_3_code: "SWZ",
        phone_code: "268",
        currency_code: "SZL",
        timezone: "UTC+02:00",
        alpha_2_code: "SZ"
    },
    {
        name: "Sweden",
        alpha_3_code: "SWE",
        phone_code: "46",
        currency_code: "SEK",
        timezone: "UTC+01:00",
        alpha_2_code: "SE"
    },
    {
        name: "Switzerland",
        alpha_3_code: "CHE",
        phone_code: "41",
        currency_code: "CHF",
        timezone: "UTC+01:00",
        alpha_2_code: "CH"
    },
    {
        name: "Syrian Arab Republic",
        alpha_3_code: "SYR",
        phone_code: "963",
        currency_code: "SYP",
        timezone: "UTC+02:00",
        alpha_2_code: "SY"
    },
    {
        name: "Taiwan",
        alpha_3_code: "TWN",
        phone_code: "886",
        currency_code: "TWD",
        timezone: "UTC+08:00",
        alpha_2_code: "TW"
    },
    {
        name: "Tajikistan",
        alpha_3_code: "TJK",
        phone_code: "992",
        currency_code: "TJS",
        timezone: "UTC+05:00",
        alpha_2_code: "TJ"
    },
    {
        name: "Tanzania, United Republic of",
        alpha_3_code: "TZA",
        phone_code: "255",
        currency_code: "TZS",
        timezone: "UTC+03:00",
        alpha_2_code: "TZ"
    },
    {
        name: "Thailand",
        alpha_3_code: "THA",
        phone_code: "66",
        currency_code: "THB",
        timezone: "UTC+07:00",
        alpha_2_code: "TH"
    },
    {
        name: "Timor-Leste",
        alpha_3_code: "TLS",
        phone_code: "670",
        currency_code: "USD",
        timezone: "UTC+09:00",
        alpha_2_code: "TL"
    },
    {
        name: "Togo",
        alpha_3_code: "TGO",
        phone_code: "228",
        currency_code: "XOF",
        timezone: "UTC",
        alpha_2_code: "TG"
    },
    {
        name: "Tokelau",
        alpha_3_code: "TKL",
        phone_code: "690",
        currency_code: "NZD",
        timezone: "UTC+13:00",
        alpha_2_code: "TK"
    },
    {
        name: "Tonga",
        alpha_3_code: "TON",
        phone_code: "676",
        currency_code: "TOP",
        timezone: "UTC+13:00",
        alpha_2_code: "TO"
    },
    {
        name: "Trinidad and Tobago",
        alpha_3_code: "TTO",
        phone_code: "1868",
        currency_code: "TTD",
        timezone: "UTC-04:00",
        alpha_2_code: "TT"
    },
    {
        name: "Tunisia",
        alpha_3_code: "TUN",
        phone_code: "216",
        currency_code: "TND",
        timezone: "UTC+01:00",
        alpha_2_code: "TN"
    },
    {
        name: "Turkey",
        alpha_3_code: "TUR",
        phone_code: "90",
        currency_code: "TRY",
        timezone: "UTC+03:00",
        alpha_2_code: "TR"
    },
    {
        name: "Turkmenistan",
        alpha_3_code: "TKM",
        phone_code: "993",
        currency_code: "TMT",
        timezone: "UTC+05:00",
        alpha_2_code: "TM"
    },
    {
        name: "Turks and Caicos Islands",
        alpha_3_code: "TCA",
        phone_code: "1649",
        currency_code: "USD",
        timezone: "UTC-04:00",
        alpha_2_code: "TC"
    },
    {
        name: "Tuvalu",
        alpha_3_code: "TUV",
        phone_code: "688",
        currency_code: "AUD",
        timezone: "UTC+12:00",
        alpha_2_code: "TV"
    },
    {
        name: "Uganda",
        alpha_3_code: "UGA",
        phone_code: "256",
        currency_code: "UGX",
        timezone: "UTC+03:00",
        alpha_2_code: "UG"
    },
    {
        name: "Ukraine",
        alpha_3_code: "UKR",
        phone_code: "380",
        currency_code: "UAH",
        timezone: "UTC+02:00",
        alpha_2_code: "UA"
    },
    {
        name: "United Arab Emirates",
        alpha_3_code: "ARE",
        phone_code: "971",
        currency_code: "AED",
        timezone: "UTC+04",
        alpha_2_code: "AE"
    },
    {
        name: "United Kingdom of Great Britain and Northern Ireland",
        alpha_3_code: "GBR",
        phone_code: "44",
        currency_code: "GBP",
        timezone: "UTC-08:00",
        alpha_2_code: "GB"
    },
    {
        name: "United States of America",
        alpha_3_code: "USA",
        phone_code: "1",
        currency_code: "USD",
        timezone: "UTC-12:00",
        alpha_2_code: "US"
    },
    {
        name: "Uruguay",
        alpha_3_code: "URY",
        phone_code: "598",
        currency_code: "UYU",
        timezone: "UTC-03:00",
        alpha_2_code: "UY"
    },
    {
        name: "Uzbekistan",
        alpha_3_code: "UZB",
        phone_code: "998",
        currency_code: "UZS",
        timezone: "UTC+05:00",
        alpha_2_code: "UZ"
    },
    {
        name: "Vanuatu",
        alpha_3_code: "VUT",
        phone_code: "678",
        currency_code: "VUV",
        timezone: "UTC+11:00",
        alpha_2_code: "VU"
    },
    {
        name: "Venezuela (Bolivarian Republic of)",
        alpha_3_code: "VEN",
        phone_code: "58",
        currency_code: "VEF",
        timezone: "UTC-04:00",
        alpha_2_code: "VE"
    },
    {
        name: "Viet Nam",
        alpha_3_code: "VNM",
        phone_code: "84",
        currency_code: "VND",
        timezone: "UTC+07:00",
        alpha_2_code: "VN"
    },
    {
        name: "Wallis and Futuna",
        alpha_3_code: "WLF",
        phone_code: "681",
        currency_code: "XPF",
        timezone: "UTC+12:00",
        alpha_2_code: "WF"
    },
    {
        name: "Western Sahara",
        alpha_3_code: "ESH",
        phone_code: "212",
        currency_code: "MAD",
        timezone: "UTC+00:00",
        alpha_2_code: "EH"
    },
    {
        name: "Yemen",
        alpha_3_code: "YEM",
        phone_code: "967",
        currency_code: "YER",
        timezone: "UTC+03:00",
        alpha_2_code: "YE"
    },
    {
        name: "Zambia",
        alpha_3_code: "ZMB",
        phone_code: "260",
        currency_code: "ZMW",
        timezone: "UTC+02:00",
        alpha_2_code: "ZM"
    },
    {
        name: "Zimbabwe",
        alpha_3_code: "ZWE",
        phone_code: "263",
        currency_code: "BWP",
        timezone: "UTC+02:00",
        alpha_2_code: "ZW"
    }
];

// exports.index = (req, res) => {
//     let country_data = false
//     const { name } = req.query
//     const { iso2_code } = req.query
//     const { iso3_code } = req.query
//     const { phone_code } = req.query
//     const { currency_code } = req.query

//     if (name) {
//         country_details = countries.find(country => country.name.toLowerCase() === name.toLowerCase());
//         if (!country_details) {
//             return res.status(400).json({ success: true, error: 'Country not found' })
//         }

//         return res.json({ success: true, result: country_details })
//     }

//     if (iso2_code) {
//         country_details = countries.find(country => country.alpha_2_code === iso2_code.toUpperCase());
//         if (!country_details) {
//             return res.status(400).json({ success: true, error: 'Country not found' })
//         }

//         return res.json({ success: true, result: country_details })
//     }

//     if (iso3_code) {
//         country_details = countries.find(country => country.alpha_3_code === iso3_code.toUpperCase());
//         if (!country_data) {
//             return res.status(400).json({ success: true, error: 'Country not found' })
//         }

//         return res.json({ success: true, result: country_details })
//     }

//     if (phone_code) {
//         country_details = countries.find(country => country.phone_code == phone_code);
//         if (!country_details) {
//             return res.status(400).json({ success: true, error: `Resounce not found with phone code ${phone_code}.` })
//         }

//         return res.json({ success: true, result: country_details })
//     }

//     if (currency_code) {
//         country_details = countries.find(country => country.currency_code == currency_code.toUpperCase());
//         if (!country_details) {
//             return res.status(400).json({ success: true, error: `Resounce not found with currency code ${currency_code}.` })
//         }

//         return res.json({ success: true, result: country_details })
//     }

//     res.json({ success: true, result: countries })
// };

exports.index = (req, res) => {
    res.json({ success: true, result: countries })
};

exports.name = (req, res) => {

    let country_details = false
    const name = req.params.name.trim();
    
    if (name) {
        country_details = countries.find(country => country.name.toLowerCase() === name.toLowerCase());
        if (!country_details) {
            return res.status(400).json({ success: true, error: `Resource not found with name ${name}.` })
        }

        return res.json({ success: true, result: country_details })
    }  
    
    res.status(400).json({ success: true, error: `Resource not found with name ${name}.` });
};

exports.currency = (req, res) => {
    
    let country_details = false
    const currency = req.params.currency.trim();

    if (currency) {
        country_details = countries.find(country => country.currency_code == currency.toUpperCase());
        if (!country_details) {
            return res.status(400).json({ success: true, error: `Resounce not found with currency code ${currency}.` })
        }

        return res.json({ success: true, result: country_details })
    }

    return res.status(400).json({ success: true, error: `Resounce not found with currency code ${currency}.` })

};

exports.phone = (req, res) => {
    
    let country_details = false
    const phone = req.params.phone.trim();

    if (phone) {
        country_details = countries.find(country => country.phone_code == phone);
        if (!country_details) {
            return res.status(400).json({ success: true, error: `Resounce not found with phone code ${phone}.` })
        }

        return res.json({ success: true, result: country_details })
    }

    res.status(400).json({ success: true, error: `Resounce not found with phone code ${phone}.` });
};


exports.iso2 = (req, res) => {

    let country_details = false
    const iso2 = req.params.iso2.trim();

    if (iso2) {
        country_details = countries.find(country => country.alpha_2_code === iso2.toUpperCase());
        if (!country_details) {
            return res.status(400).json({ success: true, error: `Resounce not found with ISO 2 code ${iso2}.` })
        }

        return res.json({ success: true, result: country_details })
    }

    res.status(400).json({ success: true, error: `Resounce not found with ISO 2 code ${iso2}.` })
};


exports.iso3 = (req, res) => {

    let country_details = false
    const iso3 = req.params.iso3.trim();

    if (iso3) {
        country_details = countries.find(country => country.alpha_3_code === iso3.toUpperCase());
        if (!country_details) {
            return res.status(400).json({ success: true, error: `Resounce not found with ISO 3 code ${iso3}.` })
        }

        return res.json({ success: true, result: country_details })
    }

    res.status(400).json({ success: true, error: `Resounce not found with ISO 3 code ${iso3}.` })
};