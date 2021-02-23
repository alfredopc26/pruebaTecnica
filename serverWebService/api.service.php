<?php 
require './db_conn.php'; //Clase de conexon a la BD
require __DIR__ . '/vendor/autoload.php'; 


//Permisos CORS para acceso a la API
header("Access-Control-Allow-Origin: http://localhost:4200");
header('Access-Control-Allow-Origin: *');

// Uso de la libreria PHROUTE
use Phroute\Phroute\RouteCollector;
use Phroute\Phroute\Dispatcher;
use Phroute\Phroute\Exception\HttpRouteNotFoundException;
use Phroute\Phroute\Exception\HttpMethodNotAllowedException;

// Instancia del RouteCollector
$collector = new RouteCollector();

$collector->get("/getdata", function(){

    //Instancia de la conexion a la BD
    $dataBD = new conexionBD();
    return json_encode($dataBD->getDataAll());

});

//Instancia del Dispatcher, obtiene los datos de la BD
$dispatch = new Dispatcher($collector->getData());

//Configuracion de la ruta 
$rutaCompleta = $_SERVER["REQUEST_URI"];
$metodo = $_SERVER['REQUEST_METHOD'];
$cleanRoute = processInput($rutaCompleta); //Necesitamos limpiar la URI

try {
    //Envio de los datos obtenidos desde la BD
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