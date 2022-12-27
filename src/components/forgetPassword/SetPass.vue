<template>
   
   <v-container class="mainOuterContainer "  >
  
   <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="forms"
    
  >
  <v-icon class="mainIcon ">
        mdi-key-variant
    </v-icon>
    <h1>Set new password</h1>
<p>Your new password must be different to previously used passwords</p>
    <v-text-field
      v-model="name"
  
      :rules="passwordRules"
      label="Password"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="passwordRules"
      label="Confirm Password"
      required
    ></v-text-field>

  

   

  

    <v-btn block class="btnReset" depressed>
    Reset Password
  </v-btn>

    <span class="d-flex nSpan mt-5" > 
<v-icon>
    mdi-arrow-left
   
</v-icon>
<p class="pt-4 pl-4">Back to log in</p>

    </span>
  </v-form>

   </v-container>
</template>
<script>
export default {
    name:'SetPass'
}
</script>
<style scoped>
.mainIcon{
    color: rgb(152, 45, 188);
    border-radius: 50%;
    background-color:rgba(239,227,253);
    padding: 8px;
    outline:8px solid rgb(247,243,254)
    
    }
    .outerWrapper{
       text-align: center;
        border: 1px solid black;
    
       width: 30%;
     height: fit-content;

       
       }
      .forms{
       
        text-align: center;
        width: 40%;
      }
      .nSpan{
        justify-content: center;
       
       
      }
      .mainOuterContainer{
        margin-left:35%;
        margin-top:10%
      }
      .btnReset{
        background-color:rgb(152, 45, 188) !important;
        color:white;
      }
     
</style>