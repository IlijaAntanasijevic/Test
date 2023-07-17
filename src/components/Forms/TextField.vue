<template>
  <div class="mb-3">
      <label v-if="label" class="form-label">{{label}}</label>
      <textarea v-if="multiline" :style="style" :rows="rowCount" v-model="localValue" class="form-control" :id="id"></textarea>
      <input :style="style" v-else :type="inputType" v-model="localValue"  :placeholder="placeholder" :id="id" class="form-control"/>
      <div v-if="error" class="alert alert-danger" role="alert">{{error}}</div>

  </div>
</template>
<script>
export default {
  name : "TextField",
  props: {
      label : {
          type: String,
          default : ""
      },
      inputType : {
          type: String,
          default: "text"
      },
      id : {
          type : String,
          required : false
      },
      error: {
          type: String
      },
      multiline: {
          type:  Boolean
      },
      rowCount : {
          type : String,
          default : "3"
      },
      value : {
          required : false,
          type: String
      },
      placeholder : {
        type: String,
        required: false
      }
  },
  data(){
      return{
          localValue: ""
      }
  },
  mounted(){
      this.localValue = this.value
  },
  computed: {
      style : function(){
          return this.error ? "background-color: 1px solid red" : ""
      }
  },
  watch: {
      localValue: function(){
          this.$emit("input",this.localValue);
      },
      value: function(){
          this.localValue = this.value;
      }
  }
}
</script>