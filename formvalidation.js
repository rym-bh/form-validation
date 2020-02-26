
  function valider(){
    
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var adr = document.getElementById('adr').value;
    var email = document.getElementById('email').value;
    var passw = document.getElementById('passw').value;
    var commen = document.getElementById('commen').value;
    var teste1 = /\S+@\S+\.\S+/;
    var teste2=/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
    
    

  if ((firstname=="")||(lastname=="")||(adr=="")||(email=="")||(passw=="")||(commen=="")){
    alert('you have to type something ');}
       
    if(!teste1.test(email)){
        alert('invalidemail')
    }
    if(!teste2.test(passw)){
        alert(' Password should contain at least 8 characters, where at least one number, one lower case and one upper case and one special characters\n" ')
    }
    
    
   
}   
    
         
   
