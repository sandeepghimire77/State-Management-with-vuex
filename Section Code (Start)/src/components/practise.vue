<template>

<div>
  <ul>
    <li v-for = "name of names" > {{name}} </li>

  </ul>

 <input type = "text" v-model= " nam">



<button class = "btn btn-primary" @click = "append"> Add my family name </button >
</div>
</template>
<script>
export default {
     data () {
         return {
            names : ['gajaraj', 'archana', 'sandesh'],
            nam: ' '


      }
},
methods:  {
append() {


    return this.names.push(this.nam);
    }
}
}
</script>
