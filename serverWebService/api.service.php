<?php 
require './db_conn.php'; 
require __DIR__ . '/vendor/autoload.php'; 

header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Origin: *');

use Phroute\Phroute\RouteCollector;
use Phroute\Phroute\Dispatcher;
use Phroute\Phroute\Exception\HttpRouteNotFoundException;
use Phroute\Phroute\Exception\HttpMethodNotAllowedException;


$collector = new RouteCollector();

$collector->get("/getdata", function(){

    $dataBD = new conexionBD();

    return json_encode($dataBD->getDataAll());

});

$dispatch = new Dispatcher($collector->getData());
$rutaCompleta = $_SERVER["REQUEST_URI"];
$metodo = $_SERVER['REQUEST_METHOD'];
$cleanRoute = processInput($rutaCompleta);

try {
    echo $dispatch->dispatch($metodo, $cleanRoute); 
} catch (HttpRouteNotFoundException $e) {
    echo "Error: Ruta no encontrada";
} catch (HttpMethodNotAllowedException $e) {
    echo "Error: Ruta encontrada pero método no permitido";
}

function processInput($uri)
{
    return implode('/',
        array_slice(
            explode('/', $uri), 2));
}


?>