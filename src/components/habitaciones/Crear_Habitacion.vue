<template>
  <div class="container  text-center tabla-hotel">


    <h2 class="titulo-hotel" ><i class="bi bi-building" ><div id="nombreH"></div> </i> </h2>
    <h6 id="numHabi" class="container text-start mb-5" ></h6>           
    <div class="row g-3">
      <div class="row g-3 ">


        <div class="col-6 text-start">

          <label for="exampleFormControlInput1" class="form-label ">Tipo Habitación</label>
          <select class="form-select text-start" aria-label="Default select example" v-model="hotel.room_type_id">
            <option v-for="tipoAcom in Acomodacion" :value="tipoAcom.id" :key="tipoAcom.id">{{tipoAcom.name}}</option>

          </select>
          <div v-if="errores.room_type_id" style="color: red;">{{errores.room_type_id[0]}}</div>

        </div>

        <div class="col-6 text-start">
          <label for="exampleFormControlInput1" class="form-label ">Acomodación</label>
          <select class="form-select" aria-label="Default select example" v-model="hotel.accommodation_id">
            <option v-for="room in romms" :value="room.id" :key="room.id">{{room.name}}</option>


          </select>
          <div v-if="errores.accommodation_id" style="color: red;">{{errores.accommodation_id[0]}}</div>

        </div>



      </div>
      <div class="row g-3">

        <div class="col-6 text-start">
          <label for="exampleFormControlInput1" class="form-label ">Cantidad</label>
          <input type="number" min="0" class="form-control" v-model="hotel.quantity" aria-label="Last name" >
          <div v-if="errores.quantity" style="color: red;">{{errores.quantity[0]}}</div>
        </div>
      </div>




    </div>
    
    <div class="container text-end mb-3">
      <button class="btn btn-warning" @click="Enviar2" type="submit">Crear Habitación</button>
      
    </div>
    
    <div class="col-6">
        <div  class="alert alert-success mt-3" role="alert">
          {{errores.simple}}
        </div>
        
      </div>
    
  </div>
</template>

 
<script>
import axios from 'axios'
export default {
  beforeMount() {
    axios
      .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/room-types')
      .then(response => (this.Acomodacion = response.data))

      axios
        .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/accommodation-types')
        .then(response => (this.romms = response.data))

        axios
      .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+ this.$route.params.id)
      .then(response => {this.rooms = response.data
      document.getElementById("nombreH").innerText=this.rooms.data.name;
      document.getElementById("numHabi").innerText="Numero de Habitaciones: "+ this.rooms.data.num_rooms;

      
      
      
      
  })



  },
  
  data() {
    return {
      errores: {
        nit: null
      },
      info: null,
      Acomodacion:[],
      romms:[],

      hotel: {
        hotel_id: this.$route.params.id,
        room_type_id: null,
        accommodation_id: null,
        quantity: null,


      },




    }

  },
  methods: {
    Enviar2() {
      axios({
        method: 'post',
        url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms',
        data: this.hotel,
        responseType: 'json',
      })
        .then(response => {
          this.info = response.data.message

          this.hotel.hotel_id = null
          this.hotel.room_type_id = null
          this.hotel.accommodation_id = null
          this.hotel.quantity = null

        })
        .catch(error => {
          this.errores = error.response.data.errors

        })
    }
  },

}
</script>