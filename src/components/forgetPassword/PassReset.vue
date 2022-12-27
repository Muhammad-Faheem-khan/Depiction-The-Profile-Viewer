<template>
   
    <v-container class="mainOuterContainer "  >
   
    <v-form
     ref="form"
     v-model="valid"
     lazy-validation
     class="forms"
     
   >
   <v-icon class="mainIcon ">
         mdi-checkbox-marked-circle-outline
     </v-icon>
     <h1 class="pt-4">Password reset</h1>
 <p>Your password has been successfully reset.
    Click below to log in magically
 </p>

 
     <v-btn block class="btnReset" depressed>
        Continue
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
     name:'PassReset'
 }
 </script>
 <style scoped>
 .mainIcon{
     /* color: rgb(152, 45, 188); */
     color:green;
     border-radius: 50%;
     background-color:rgba(206,251,215);
     padding: 8px;
     outline:8px solid rgb(235,253,240)
     
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