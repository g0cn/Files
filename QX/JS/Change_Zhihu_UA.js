/*

[rewrite_local]

#重写UA
^https:\/\/www\.zhihu\.com\/.* - script-response-body https://gist.githubusercontent.com/coolzjy/9cfab4bf2e00a42c8dd9e368ab323534/raw/8c3fbf137015869b9c86e69f5bfc002eee228a95/change-zhihu-user-agent.js

[mitm]

hostname=www.zhihu.com
*/

(function () {
  const headers = $response.headers;

  for (let key in headers) {
    if (key.toUpperCase() === 'CONTENT-TYPE' && !headers[key].includes('text/html')) {
      $done({});
      return;
    }
    if (key.toUpperCase() === 'CONTENT-SECURITY-POLICY') {
      delete headers[key];
    }
  }
  
  const body = $response.body.replace('<head>',
    '<head>' +
    '<script>delete navigator; window.navigator = { userAgent: "Mozilla/5.0 (iPad; CPU OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1" }</script>' +
    '<style>.ContentItem-actions>*:nth-child(3),.ContentItem-actions>*:nth-child(4){display:none}</style>');
  $done({ headers, body })
})()
