 
export async function GET() {
  const res = await fetch("https://explorer.unisat.io/fractal-mainnet/api/address/summary?address=bc1pqw9ncs4sna0ndh85ux5dhh9swueyjql23t4em8j0smywkqsngfmsn7gmua", {
    "cache": "no-store",
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "no-cache",
      "cf-token": "vcnf7le1ec151xdxushjshh5b",
      "fetch-mode": "no-cors",
      "fetch-site": "same-origin",
      "pragma": "no-cache",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-appid": "1adcd7969603261753f1812c9461cd36",
      "x-front-version": "126",
      "x-sign": "7b2dd631389ee1ff4b36d0f934c18ecc",
      "x-ts": "1726209251"
    },
    "referrer": "https://explorer.unisat.io/fractal-mainnet/address/bc1pqw9ncs4sna0ndh85ux5dhh9swueyjql23t4em8j0smywkqsngfmsn7gmua",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  })
  const data = await res.json()
 
  return Response.json({ data: data.data })
}
