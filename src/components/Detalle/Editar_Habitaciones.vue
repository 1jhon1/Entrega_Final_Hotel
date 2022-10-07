<template>
  <div class="container  text-center tabla-hotel">


    <h1 class="titulo-hotel"><i class="bi bi-building mx-3"></i>habitación</h1>
    <div class="row g-3">
      <div class="row g-3 ">
        <div class="col-6">
          <label for="exampleFormControlInput1" class="form-label ">Tipo de Havitación</label>
          <select class="form-select text-start" aria-label="Default select example" v-model="hotel.room_type_id">
            <option v-for="tipoAcom in Acomodacion" :value="tipoAcom.id" :key="tipoAcom.id">{{tipoAcom.name}}</option>

          </select>

        </div>
        <div class="col-6">
          <label for="exampleFormControlInput1" class="form-label ">Acomodación</label>
          <select class="form-select" aria-label="Default select example" v-model="hotel.accommodation_id">
            <option v-for="room in romms" :value="room.id" :key="room.id">{{room.name}}</option>


          </select>
        </div>
      </div>
      <div class="row g-3">

        <div class="col-6">
          <label for="exampleFormControlInput1" class="form-label ">Cantidad</label>
          <input type="number" min="0" class="form-control" aria-label="Last name" v-model="hotel.quantity">
        </div>
      </div>




    </div>

    <div class="container text-end mb-3">
      <button class="btn btn-primary" @click="Actualizar" type="submit">Actualizar Habitación</button>

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
      .then(response => (this.hote = response.data))



  },

  data() {
    return {
      errores: {
        nit: null
      },
      info: null,
      Acomodacion:[],
      romms:[],
      hote:[],

      hotel: {
        hotel_id: this.$route.params.id,
        room_type_id: null,
        accommodation_id: null,
        quantity: null,


      },




    }

  },
  methods: {
    // Enviar2() {
    //   axios({
    //     method: 'post',
    //     url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms',
    //     data: this.hotel,
    //     responseType: 'json',
    //   })
    //     .then(response => {
    //       this.info = response.data.message

    //       this.hotel.hotel_id = null
    //       this.hotel.room_type_id = null
    //       this.hotel.accommodation_id = null
    //       this.hotel.quantity = null

    //     })
    //     .catch(error => {
    //       this.errores = error.response.data.errors

    //     })
    // },
    Actualizar(){
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