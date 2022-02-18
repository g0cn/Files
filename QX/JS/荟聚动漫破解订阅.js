/*
[rewrite_local]
# 苹果收据验证 
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/xx-xy/Files/master/QX/JS/%E8%8D%9F%E8%81%9A%E5%8A%A8%E6%BC%AB%E7%A0%B4%E8%A7%A3%E8%AE%A2%E9%98%85.js
#https://gitlab.com/api/v4/projects/33834676/repository/files/Scripts%2Fverify_receipt.js/raw?ref=main&private_token=glpat-twy3wPUahCyRvg79c3VR
[mitm]
hostname = buy.itunes.apple.com

*/





let body = $response.body;
console.log(body);
var obj = JSON.parse(body);

if (obj["receipt"]['bundle_id'] === 'com.hts.hjdm') { // 荟聚动漫
	obj["receipt"]['in_app'] = [{
		"quantity": "1",
		"purchase_date_ms": "1576575607000",
		"expires_date": "2099-10-19 05:14:18 Etc\/GMT",
		"expires_date_pst": "2099-10-18 22:14:18 America\/Los_Angeles",
		"is_in_intro_offer_period": "false",
		"transaction_id": "530000507343582",
		"is_trial_period": "false",
		"original_transaction_id": "530000507343582",
		"purchase_date": "2019-12-17 09:40:07 Etc\/GMT",
		"product_id": "com.hts.hjdm.removeAdsAR",
		"original_purchase_date_pst": "2019-12-17 01:40:09 America\/Los_Angeles",
		"original_purchase_date_ms": "1576575609000",
		"web_order_line_item_id": "530000176846821",
		"expires_date_ms": "4096019658000",
		"purchase_date_pst": "2019-12-17 01:40:07 America\/Los_Angeles",
		"original_purchase_date": "2019-12-17 09:40:09 Etc\/GMT"
	}]
	obj['pending_renewal_info'] = [{
		"product_id": "com.hts.hjdm.removeAdsAR",
		"original_transaction_id": "530000507343582",
		"auto_renew_product_id": "com.hts.hjdm.removeAdsAR",
		"auto_renew_status": "1"
	}]

	obj['latest_receipt_info'] = [{
		"quantity": "1",
		"purchase_date_ms": "1576575607000",
		"expires_date": "2099-10-19 05:14:18 Etc\/GMT",
		"expires_date_pst": "2099-10-18 22:14:18 America\/Los_Angeles",
		"is_in_intro_offer_period": "false",
		"transaction_id": "530000507343582",
		"is_trial_period": "false",
		"original_transaction_id": "530000507343582",
		"purchase_date": "2019-12-17 09:40:07 Etc\/GMT",
		"product_id": "com.hts.hjdm.removeAdsAR",
		"original_purchase_date_pst": "2019-12-17 01:40:09 America\/Los_Angeles",
		"subscription_group_identifier": "20508219",
		"original_purchase_date_ms": "1576575609000",
		"web_order_line_item_id": "530000176846821",
		"expires_date_ms": "4096019658000",
		"purchase_date_pst": "2019-12-17 01:40:07 America\/Los_Angeles",
		"original_purchase_date": "2019-12-17 09:40:09 Etc\/GMT"
	}]

	obj['latest_receipt'] = "MIIULwYJKoZIhvcNAQcCoIIUIDCCFBwCAQExCzAJBgUrDgMCGgUAMIID0AYJKoZIhvcNAQcBoIIDwQSCA70xggO5MAoCARQCAQEEAgwAMAsCARkCAQEEAwIBAzAMAgEOAgEBBAQCAgCfMA0CAQoCAQEEBRYDMTcrMA0CAQ0CAQEEBQIDAdTBMA4CAQECAQEEBgIEVor+ZTAOAgEJAgEBBAYCBFAyNTMwDgIBCwIBAQQGAgQHIo7OMA4CARACAQEEBgIEMbVAoDAUAgEAAgEBBAwMClByb2R1Y3Rpb24wFgIBAgIBAQQODAxjb20uaHRzLmhqZG0wFgIBAwIBAQQODAwyMDE5MTIxMzE3MDEwFgIBEwIBAQQODAwyMDE5MTIxMzE3MDEwGAIBBAIBAgQQ+ivmkIBGeFJsG\/okOrvoljAcAgEFAgEBBBQ6ZyiVJs+cxiplltTuXyElffzvZzAeAgEIAgEBBBYWFDIwMTktMTItMTdUMDk6NDA6MDlaMB4CAQwCAQEEFhYUMjAxOS0xMi0xN1QwOTo0MTozOFowHgIBEgIBAQQWFhQyMDE5LTEyLTE3VDA5OjQwOjA5WjBOAgEHAgEBBEZ1BAgpSlK4yY4uN3pWFgwFsfcOJ3n5t4ig3TtWmr0fuFOidS07NRejPzIc\/N9J1KHt5kiaXfIG058eXxSsDzBbNStVlXzUMGICAQYCAQEEWgfzeZ+aZBPiFD7s8z23IPIcf6bPLhz1sPmbSiRl8UfS6K4gfSa72NX0L17+R05uNsKj\/7fdmjz9F2H4uTL\/fNeE2vUXQ3tGRG18erBrC5XqMCPvkcf4oK+f0TCCAYYCARECAQEEggF8MYIBeDALAgIGrQIBAQQCDAAwCwICBrACAQEEAhYAMAsCAgayAgEBBAIMADALAgIGswIBAQQCDAAwCwICBrQCAQEEAgwAMAsCAga1AgEBBAIMADALAgIGtgIBAQQCDAAwDAICBqUCAQEEAwIBATAMAgIGqwIBAQQDAgEDMAwCAgaxAgEBBAMCAQAwDAICBrcCAQEEAwIBADAPAgIGrgIBAQQGAgRXe54LMBICAgavAgEBBAkCBwHiCEhFl+UwGgICBqcCAQEEEQwPNTMwMDAwNTA3MzQzNTgyMBoCAgapAgEBBBEMDzUzMDAwMDUwNzM0MzU4MjAfAgIGqAIBAQQWFhQyMDE5LTEyLTE3VDA5OjQwOjA3WjAfAgIGqgIBAQQWFhQyMDE5LTEyLTE3VDA5OjQwOjA5WjAfAgIGrAIBAQQWFhQyMDIwLTAxLTE3VDA5OjQwOjA3WjAjAgIGpgIBAQQaDBhjb20uaHRzLmhqZG0ucmVtb3ZlQWRzQVKggg5lMIIFfDCCBGSgAwIBAgIIDutXh+eeCY0wDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMTUxMTEzMDIxNTA5WhcNMjMwMjA3MjE0ODQ3WjCBiTE3MDUGA1UEAwwuTWFjIEFwcCBTdG9yZSBhbmQgaVR1bmVzIFN0b3JlIFJlY2VpcHQgU2lnbmluZzEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxEzARBgNVBAoMCkFwcGxlIEluYy4xCzAJBgNVBAYTAlVTMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApc+B\/SWigVvWh+0j2jMcjuIjwKXEJss9xp\/sSg1Vhv+kAteXyjlUbX1\/slQYncQsUnGOZHuCzom6SdYI5bSIcc8\/W0YuxsQduAOpWKIEPiF41du30I4SjYNMWypoN5PC8r0exNKhDEpYUqsS4+3dH5gVkDUtwswSyo1IgfdYeFRr6IwxNh9KBgxHVPM3kLiykol9X6SFSuHAnOC6pLuCl2P0K5PB\/T5vysH1PKmPUhrAJQp2Dt7+mf7\/wmv1W16sc1FJCFaJzEOQzI6BAtCgl7ZcsaFpaYeQEGgmJjm4HRBzsApdxXPQ33Y72C3ZiB7j7AfP4o7Q0\/omVYHv4gNJIwIDAQABo4IB1zCCAdMwPwYIKwYBBQUHAQEEMzAxMC8GCCsGAQUFBzABhiNodHRwOi8vb2NzcC5hcHBsZS5jb20vb2NzcDAzLXd3ZHIwNDAdBgNVHQ4EFgQUkaSc\/MR2t5+givRN9Y82Xe0rBIUwDAYDVR0TAQH\/BAIwADAfBgNVHSMEGDAWgBSIJxcJqbYYYIvs67r2R1nFUlSjtzCCAR4GA1UdIASCARUwggERMIIBDQYKKoZIhvdjZAUGATCB\/jCBwwYIKwYBBQUHAgIwgbYMgbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjA2BggrBgEFBQcCARYqaHR0cDovL3d3dy5hcHBsZS5jb20vY2VydGlmaWNhdGVhdXRob3JpdHkvMA4GA1UdDwEB\/wQEAwIHgDAQBgoqhkiG92NkBgsBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEADaYb0y4941srB25ClmzT6IxDMIJf4FzRjb69D70a\/CWS24yFw4BZ3+Pi1y4FFKwN27a4\/vw1LnzLrRdrjn8f5He5sWeVtBNephmGdvhaIJXnY4wPc\/zo7cYfrpn4ZUhcoOAoOsAQNy25oAQ5H3O5yAX98t5\/GioqbisB\/KAgXNnrfSemM\/j1mOC+RNuxTGf8bgpPyeIGqNKX86eOa1GiWoR1ZdEWBGLjwV\/1CKnPaNmSAMnBjLP4jQBkulhgwHyvj3XKablbKtYdaG6YQvVMpzcZm8w7HHoZQ\/Ojbb9IYAYMNpIr7N4YtRHaLSPQjvygaZwXG56AezlHRTBhL8cTqDCCBCIwggMKoAMCAQICCAHevMQ5baAQMA0GCSqGSIb3DQEBBQUAMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTAeFw0xMzAyMDcyMTQ4NDdaFw0yMzAyMDcyMTQ4NDdaMIGWMQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyjhUpstWqsgkOUjpjO7sX7h\/JpG8NFN6znxjgGF3ZF6lByO2Of5QLRVWWHAtfsRuwUqFPi\/w3oQaoVfJr3sY\/2r6FRJJFQgZrKrbKjLtlmNoUhU9jIrsv2sYleADrAF9lwVnzg6FlTdq7Qm2rmfNUWSfxlzRvFduZzWAdjakh4FuOI\/YKxVOeyXYWr9Og8GN0pPVGnG1YJydM05V+RJYDIa4Fg3B5XdFjVBIuist5JSF4ejEncZopbCj\/Gd+cLoCWUt3QpE5ufXN4UzvwDtIjKblIV39amq7pxY1YNLmrfNGKcnow4vpecBqYWcVsvD95Wi8Yl9uz5nd7xtj\/pJlqwIDAQABo4GmMIGjMB0GA1UdDgQWBBSIJxcJqbYYYIvs67r2R1nFUlSjtzAPBgNVHRMBAf8EBTADAQH\/MB8GA1UdIwQYMBaAFCvQaUeUdgn+9GuNLkCm90dNfwheMC4GA1UdHwQnMCUwI6AhoB+GHWh0dHA6Ly9jcmwuYXBwbGUuY29tL3Jvb3QuY3JsMA4GA1UdDwEB\/wQEAwIBhjAQBgoqhkiG92NkBgIBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEAT8\/vWb4s9bJsL4\/uE4cy6AU1qG6LfclpDLnZF7x3LNRn4v2abTpZXN+DAb2yriphcrGvzcNFMI+jgw3OHUe08ZOKo3SbpMOYcoc7Pq9FC5JUuTK7kBhTawpOELbZHVBsIYAKiU5XjGtbPD2m\/d73DSMdC0omhz+6kZJMpBkSGW1X9XpYh3toiuSGjErr4kkUqqXdVQCprrtLMK7hoLG8KYDmCXflvjSiAcp\/3OIK5ju4u+y6YpXzBWNBgs0POx1MlaTbq\/nJlelP5E3nJpmB6bz5tCnSAXpm4S6M9iGKxfh44YGuv9OQnamt86\/9OBqWZzAcUaVc7HGKgrRsDwwVHzCCBLswggOjoAMCAQICAQIwDQYJKoZIhvcNAQEFBQAwYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMB4XDTA2MDQyNTIxNDAzNloXDTM1MDIwOTIxNDAzNlowYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5JGpCR+R2x5HUOsF7V55hC3rNqJXTFXsixmJ3vlLbPUHqyIwAugYPvhQCdN\/QaiY+dHKZpwkaxHQo7vkGyrDH5WeegykR4tb1BY3M8vED03OFGnRyRly9V0O1X9fm\/IlA7pVj01dDfFkNSMVSxVZHbOU9\/acns9QusFYUGePCLQg98usLCBvcLY\/ATCMt0PPD5098ytJKBrI\/s61uQ7ZXhzWyz21Oq30Dw4AkguxIRYudNU8DdtiFqujcZJHU1XBry9Bs\/j743DN5qNMRX4fTGtQlkGJxHRiCxCDQYczioGxMFjsWgQyjGizjx3eZXP\/Z15lvEnYdp8zFGWhd5TJLQIDAQABo4IBejCCAXYwDgYDVR0PAQH\/BAQDAgEGMA8GA1UdEwEB\/wQFMAMBAf8wHQYDVR0OBBYEFCvQaUeUdgn+9GuNLkCm90dNfwheMB8GA1UdIwQYMBaAFCvQaUeUdgn+9GuNLkCm90dNfwheMIIBEQYDVR0gBIIBCDCCAQQwggEABgkqhkiG92NkBQEwgfIwKgYIKwYBBQUHAgEWHmh0dHBzOi8vd3d3LmFwcGxlLmNvbS9hcHBsZWNhLzCBwwYIKwYBBQUHAgIwgbYagbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjANBgkqhkiG9w0BAQUFAAOCAQEAXDaZTC14t+2Mm9zzd5vydtJ3ME\/BH4WDhRuZPUc38qmbQI4s1LGQEti+9HOb7tJkD8t5TzTYoj75eP9ryAfsfTmDi1Mg0zjEsb+aTwpr\/yv8WacFCXwXQFYRHnTTt4sjO0ej1W8k4uvRt3DfD0XhJ8rxbXjt57UXF6jcfiI1yiXV2Q\/Wa9SiJCMR96Gsj3OBYMYbWwkvkrL4REjwYDieFfU9JmcgijNq9w2Cz97roy\/5U2pbZMBjM3f3OgcsVuvaDyEO2rpzGU+12TZ\/wYdV2aeZuTJC+9jVcZ5+oVK3G72TQiQSKscPHbZNnF5jyEuAF1CqitXa5PzQCQc3sHV1ITGCAcswggHHAgEBMIGjMIGWMQswCQYDVQQGEwJVUzETMBEGA1UECgwKQXBwbGUgSW5jLjEsMCoGA1UECwwjQXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMxRDBCBgNVBAMMO0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zIENlcnRpZmljYXRpb24gQXV0aG9yaXR5AggO61eH554JjTAJBgUrDgMCGgUAMA0GCSqGSIb3DQEBAQUABIIBAA7ItZANyL+L7MGa5OZ3Zeio+OhQTHQZw9vdxCl5qs53H55l+Et2wT0YUVwToS8MGWG\/yfHPmilxnMlwyqe0gEgW9MwQTBdy5EZpaeCPck8jb3ANihlfqwh09HGMGod+h964JzvGnQEV2F7izWBwEB+5jfQnQnPtR7ljw0eZSCoZZrR6KbLZ3UGBxNzFyTNyZu9kqUvQWs7A2MA1FcC4+E9VH4TuURarr8OL3dBAo1jHbJPY8ilvXQY+DtO4PsvKhaAtPRiP5nxGBhc\/YCOSP6KH75dDmwb5+C4yHl1fmSWYLYPoh9QFOiX6Vg2AS7hVtxTc1suqOVig7mh\/uTSnoS8=";
}else if(obj["receipt"]['bundle_id'] === 'com.sugarmo.ScrollClip'){ // Picsew
	obj["receipt"]["in_app"][0]["product_id"] = "com.sugarmo.ScrollClip.pro";
}else if (body.indexOf("expires") != -1) {
	obj["receipt"]["in_app"][0]["expires_date"] = "2099-10-19 05:14:18 Etc/GMT";
	obj["receipt"]["in_app"][0]["expires_date_pst"] = "2099-10-18 22:14:18 America/Los_Angeles";
	obj["receipt"]["in_app"][0]["expires_date_ms"] = "4096019658000";
	obj["latest_receipt_info"][0]["expires_date"] = "2099-10-19 05:14:18 Etc/GMT";
	obj["latest_receipt_info"][0]["expires_date_pst"] = "2099-10-18 22:14:18 America/Los_Angeles";
	obj["latest_receipt_info"][0]["expires_date_ms"] = "4096019658000";
}
$done({
	body: JSON.stringify(obj)
});
