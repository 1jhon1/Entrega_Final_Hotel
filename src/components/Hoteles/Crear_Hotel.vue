 <template>

<div class="container  text-center tabla-hotel" >
      
        
      <h1 class="titulo-hotel"><i class="bi bi-building mx-3"></i>Crear un nuevo Hotel</h1>
      <div class="row g-3">
        <div class="col text-start">
          <label for="exampleFormControlInput1" class="form-label ">Nombre del Hotel</label>
          <input v-model="hotel.name" type="text" class="form-control"   aria-label="NOMBRE" >
          <div v-if="errores.name" style="color: red;">{{errores.name[0]}}</div>
        </div>
        <div class="col text-start">
          <label for="exampleFormControlInput1" class="form-label ">Nit</label>
          <input type="text" class="form-control" v-model="hotel.nit"  aria-label="Last name" required>
          <div v-if="errores.nit" style="color: red;">{{errores.nit[0]}}</div>
        </div>
      </div>
      <div class="row g-3 py-5">
        <div class="col text-start">
          <label for="exampleFormControlInput1" class="form-label ">Dirreción</label>
          <input type="text" class="form-control"  v-model="hotel.address"  aria-label="First name" required>
          <div v-if="errores.address" style="color: red;">{{errores.address[0]}}</div>
        </div>
        <div class="col text-start">
          <label for="exampleFormControlInput1" class="form-label ">Numero de Habitaciones</label>
          <input type="number" min="0" class="form-control" v-model="hotel.num_rooms" aria-label="Last name" required>
          <div v-if="errores.num_rooms" style="color: red;">{{errores.num_rooms[0]}}</div>
        </div>
      </div>

      
        <div class="row g-3 ">
          <div class="col-6 pb-4 text-start">
            <label for="exampleFormControlInput1" class="form-label ">Ciudad</label>
            <select class="form-select" aria-label="Default select example" v-model="hotel.city_id">
              <option v-for="ciudad in cities" :value="ciudad.id" :key="ciudad.id">{{ ciudad.name }}</option>
             
            </select>
            <div v-if="errores.city_id" style="color: red;">{{errores.city_id[0]}}</div>
            
          </div>
        
      </div>
      
   
      <div class="container text-end mb-3">
        <button class="btn btn-warning" @click="Enviar" type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Crear Hotel</button>
 
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
    export default {
        beforeMount() {
            axios
                .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/cities')
                .then( response => (this.cities = response.data) )
        },
        data() {
            return {
                errores: {
                    nit: null
                },
                info: null,
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
        methods: {
            Enviar() {
                axios({
                    method: 'post',
                    url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels',
                    data: this.hotel,
                    responseType: 'json',
                }) 
                .then(response => {  
                    this.info = response.data.message
                    
                    this.hotel.name = null
                    this.hotel.nit = null
                    this.hotel.address = null
                    this.hotel.num_rooms = null
                    this.hotel.city_id = null
                    
                })
                .catch(error => {
                    this.errores = error.response.data.errors
                    
                })            
            }
        },
    }
    </script>