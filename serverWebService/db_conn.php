<?php 

class conexionBD 
{

    var $conn;

    public function __construct()
    {
        $this->conn = new PDO('mysql:host=kp-instance.covti7j4d3q2.us-east-2.rds.amazonaws.com;dbname=db_project','admin','CAperez26');

    }

    public function getDataAll(){

        try {
            $sql = "select * from db_project.project";
            $stm = $this->conn->prepare($sql);
            $stm->execute();

            $r = $stm->fetchAll(PDO::FETCH_OBJ);

            return $r;

        } catch (Exception $e) {
            die($e->getMessage().' Linea:'.$e->getLine());
        }


        
    }



}

// $cone = new conexionBD();

// var_dump($cone->test_conection());

?>