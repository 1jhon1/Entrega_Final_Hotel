<template>

  <div class="container  text-center tabla-hotel">

    <h2 class="titulo-hotel" ><i class="bi bi-building" ><div id="nombreH"></div> </i> </h2>
    <h6 id="numHabi" class="container text-start mb-5" ></h6>


    <table class="table">
      <thead>
        <tr>
          <th scope="col">TIPO</th>
          <th scope="col">ACOMODACÓN</th>
          <th scope="col">CANTIDAD</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="hotel in hotels2" :key="hotel.id">
          <td>{{hotel.type.name}}</td>
          <td>{{hotel.accommodation.name}}</td>
          <td>{{hotel.quantity}}</td>



          <td><a class="btn btn-warning" @click="Editar_Habitacion()" role="button">Editar</a></td>
          <td><a class="btn btn-danger" @click="Eliminar" role="button">Eliminar</a></td>
        </tr>



      </tbody>
    </table>
    <div class="container text-start mb-4">

      <a class="btn btn-success  crearHotel" @click="CrearHabitacion()" role="button">Crear Habitaciones</a>
    </div>

  </div>

</template>

<script>
import axios from 'axios'
export default {

  
  
  beforeMount() {
    axios
      .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+ this.$route.params.id)
      .then(response => {this.rooms = response.data
      document.getElementById("nombreH").innerText=this.rooms.data.name;
      document.getElementById("numHabi").innerText="Numero de Habitaciones: "+ this.rooms.data.num_rooms;

      
      
      
      
  })


      axios
        .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/' + this.$route.params.id)
        .then(response => (this.hotels2 = response.data.data))

        
  },
 
  data() {
    return {
      rooms:[],
      hotels2:[]
    }
  },
  methods: {


    CrearHabitacion() {
      // this.$router.push({ name: 'Crear_Habitaciones'})
      //window.location.href = '/CrearHabitaciones/'+id
      this.$router.push({
        name: 'Crear_Habitaciones',
        params: {
          id: this.$route.params.id


        }



      })

    },
    Editar_Habitacion() {
      this.$router.push({
      name: 'Editar_Habitacion',
        params: {
          id: this.$route.params.id
        }
    })
  },

  
  Eliminar(){
        if (confirm('Esta seguro de eliminar la presente Habitación?')) {
        axios({
            method: 'delete',
            url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+this.$route.params.id,
            responseType: 'json', 
        }) 
        .then(response => {  
            this.info = response.data.message
            this.hotel = []
            this.ocultar = 'hidden'

        })
        .catch(error => {
            this.errores = error.response.data.errors
            this.info = null
        })


      }
      
    },

 
}
}
</script>

