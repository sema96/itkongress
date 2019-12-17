var db = new db("5df64a0abf46220df655db37", options);

setUrl('https://itkongress-aeff.restdb.io/rest/login');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'x-apikey' => '3e47496ea3a6849b94378931afc318ef238bf',
  'content-type' => 'application/json'
));

$request->setBody('{"username":"xyz","pw":"abc"}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
