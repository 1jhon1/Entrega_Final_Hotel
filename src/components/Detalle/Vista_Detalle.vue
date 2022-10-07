<template>

<div class="container  text-center tabla-hotel" >
      
        
      <h1 class="titulo-hotel"><i class="bi bi-building mx-3"></i> Hotel</h1>
      <div class="row g-3">
        <div class="col text-start">
          <label for="exampleFormControlInput1" class="form-label ">Nombre del Hotel</label>
          <input v-model="hotel.name" type="text" class="form-control "  aria-label="NOMBRE">
        </div>
        <div class="col text-start">
          <label for="exampleFormControlInput1" class="form-label ">Nit</label>
          <input v-model="hotel.nit" type="text" class="form-control"  aria-label="Last name" >
        </div>
      </div>
      <div class="row g-3 py-5">
        <div class="col text-start">
          <label for="exampleFormControlInput1" class="form-label ">Dirrección</label>
          <input  v-model="hotel.address" type="text" class="form-control"  aria-label="First name" >
        </div>
        <div class="col text-start">
          <label for="exampleFormControlInput1" class="form-label ">Numero de Habitaciones</label>
          <input v-model="hotel.num_rooms" type="number" min="0" class="form-control"  aria-label="Last name" >
        </div>
      </div>

      
        <div class="row g-3 ">
          <div class="col-6 pb-4 text-start">
        <label for="exampleFormControlInput1" class="form-label ">Ciudad</label>
        <select class="form-select" aria-label="Default select example" v-model="hotel.city_id">
        <option v-for="ciudad in cities" :value="ciudad.id" :key="ciudad.id">{{ciudad.name}}</option>
 
        </select>

          </div>
        
         </div>
      
      
      <div class="container text-end">
          <a class="btn btn-success ActualizarDatos" @click="Actualizar" role="button">Actualizar Datos</a>   

          <div class="container text-start mb-3">
              <a class="eliminarhotel" @click="Eliminar" >Eliminar Hotel</a>
          </div>
      </div>
    
      <div class="col-6">
          <div v-if="info"  class="alert alert-success mt-3" role="alert">
            {{info}}
          </div>
          
        </div>
      
      </div>

</template>

 
<script>
import axios from 'axios'

export default{
  
  data: function () {
        return {
            errores: {
                nit: null
            },
            cities: [],
            hotel: {
                name: null,
                nit: null,
                address: null,
                num_rooms: null,
                city_id: null
            }
        }
    },
    mounted: function () {
        axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/' + this.$route.params.id)
            .then(response => {
                this.hotel.name = response.data.data.name;
                this.hotel.nit = response.data.data.nit;
                this.hotel.address = response.data.data.address;
                this.hotel.num_rooms = response.data.data.num_rooms;
                this.hotel.city_id = response.data.data.city.id;
                console.log(this.hotel);
            })
    },
    beforeMount() {
        axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/cities')
            .then(response => (this.cities = response.data))
    },
    methods:{
      Eliminar(){
        if (confirm('Esta seguro de eliminar el presente hotel?')) {
        axios({
            method: 'delete',
            url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/' + this.$route.params.id,
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
      
    
    Actualizar(){
      
            // this.errors = Objects
            this.error = false
            this.info = false
            axios({
                method: 'put',
                url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/' + this.$route.params.id,
                data: this.hotel,
                responseType: 'json', 
            }) 
            .then(response => {
                
                this.info = response.data.message
                this.errores = Object
                this.hotel = response.data.data
            })
            .catch(error => {
                this.errores = error.response.data.errors
                this.info = null
                // this.message = error.response.data.message
            })
            
    }
  }
}

  

</script>