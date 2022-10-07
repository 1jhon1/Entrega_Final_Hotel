<template>

<div class="container  text-center tabla-hotel" >
      
        
      <h1 class="titulo-hotel"><i class="bi bi-building mx-3"></i>Hoteles</h1>
     
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NIT</th>
            <th scope="col">NOMBRES</th>
            <th scope="col">DIRRECCIÓN</th>
            <th scope="col">CIUDAD</th>
            <th scope="col">CAPACIDAD DE HAB</th>
            <th scope="col"></th>
            <th scope="col"><a class="btn btn-primary text-end crearHotel" @click="CrearHotell" role="button">Crear Hotel</a></th>
          </tr>
        </thead>
        <tbody>
          
            <tr v-for="hotel in hotels" :key="hotel.id">
                <td> {{hotel.id}} </td>
                <td> {{hotel.nit}} </td>
                <td> {{hotel.name}} </td>
                <td> {{hotel.address}} </td>
                <td> {{hotel.city.name}} </td>
                <td> {{hotel.num_rooms}} </td>
            <td><a class="btn btn-warning" @click="Detalle(hotel.id)" role="button">Detalle</a></td>
            <td><a class="btn btn-success" @click="Habitaciones(hotel.id)" role="button">Habitaciones</a></td>
          </tr>
 
            
     
          
        </tbody>
      </table>
      
    </div>
    
</template>

<script>
  import axios from 'axios'
  export default {
      beforeMount() {
          axios
              .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels')
              .then( response => (this.hotels = response.data.data) )
      },
      data() {
          return {
              hotels: []
          }
      },
      methods: {
        CrearHotell() {
              this.$router.push({ name: 'CrearHotel'})
          },
          viewHotel(id){
              alert(id)
          },

          Habitaciones(id){
            // this.$router.push({ name: 'Lista_Habitaciones'})
            window.location.href = '/ListaHabitaciones/'+id

          },
          Detalle(id){
            //  this.$router.push( '/VistaDetalle/'+id)
            window.location.href ='/VistaDetalle/'+id

          }



      },
  }
  </script>
  