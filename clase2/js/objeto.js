suma();
resta();
multi();
divi();

function suma(){
  alert("suma");
  var nu1=parseInt(prompt("numero 1"));
  var nu2=parseInt(prompt("numero 2"));
   var res=nu1+nu2;

   alert("Resultado de  la suma:  "+res);
}

function resta(){
  alert("resta")
  var nu1=parseInt(prompt("numero 1"));
  var nu2=parseInt(prompt("numero 2"));
   var res=nu1-nu2;

   alert("Resultado de  la resta:  "+res);
}

function multi(){
  alert("multiplicacion")
  var nu1=parseInt(prompt("numero 1"));
  var nu2=parseInt(prompt("numero 2"));
   var res=nu1*nu2;

   alert("Resultado de  la multiplicacion:  "+res);
}

function divi(){
  alert("division")
  var nu1=parseInt(prompt("numero 1"));
  var nu2=parseInt(prompt("numero 2"));
   var res=nu1/nu2;

   alert("Resultado de  la divicion:  "+res);
}
