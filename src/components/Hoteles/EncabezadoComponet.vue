<template>
    
   <div class="container-fluid encabezado">

     <nav class="navbar navbar-expand-lg bg-primary "  >
       <div class="container" >
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center  container-fluid" id="navbarSupportedContent">
            <ul class="navbar-nav  ">
              <li class="nav-item mx-2">
                
                <router-link to="/" class="nav-link active" id="a">Inicio</router-link>
              </li>
              <li class="nav-item mx-2">
                <router-link to="/Hoteles" class="nav-link active" id="a">Hoteles</router-link>
              </li>
              <li class="nav-item mx-2">
                <router-link to="/TipoHabitaciones" class="nav-link active" id="a">Tipo de Habitaciones</router-link>
              </li>
              <li class="nav-item mx-2">
                <router-link to="/Acomodaciones" class="nav-link active" id="a">Acomodaciones</router-link>
               
              </li>
              
              
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
    </template>

<style>
    



#a{
    color: white;
   
}

 a:hover{
    background-color: rgb(77, 176, 238);
 }

 .tabla-hotel{
    margin-top: 100PX;
 }

 .titulo-hotel{
    text-align: start;
    margin-bottom: 30px;
 }
 .crearHotel{
   margin-top: 20px;
 }

 .eliminarhotel:hover{
   background-color: white;

 }
 .eliminarhotel{
   background-color: white;
   color: red;
   text-decoration: none;

 }
 .encabezado{
  margin: 0;
  padding: 0px;
  
 }

 @media (msx-width: 100px) {
  .encabezado{
  margin-left: 0px;
  padding: 0px;
  
 }
 }

</style>