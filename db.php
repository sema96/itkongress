<?php
class RestDB{

public function insert(){

  $post_vars=['username'=>'Tony','pw'=>'hey','e-mail'=>'yo','status'=>'ok','id'=>'kp'];
  $url="https://itkongress-aeff.restdb.io/rest/login";
  $ch=curl_init($url);
  curl_setpot($ch,CURLOPT_HTTPHEADER,array('Content-Type: application/json','x-apikey: 3e47496ea3a6849b94378931afc318ef238bf'));
  curl_setpot($ch,CURLOPT_CUSTOMREQUEST,'POST');
  curl_setpot($ch,CURLOPT_POSTFIELDS,json_encode($post_vars));
  curl_setpot($ch,CURLOPT_RETURNTRANSFER,TRUE);
  $return_data=curl_exec($ch);
  curl_close($ch);
  return json_decode($return_data,TRUE);
}
$RestDb= new RestDb();
$results=$RestDb->insert();
