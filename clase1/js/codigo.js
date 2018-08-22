<script type="text/javascript">
  function saludar(nombre){
    document.write(`Hola ${nombre}`);
  }
  saludar("Fidelin");

  document.write("<br>")

  function suma (numero1, numero2){
    return numero1+numero2
  }
  document.write(suma(30,50))

  document.write("<br>")
  document.write("<br>") /**/

  function suma (numero1, numero2){
    if (numero1>numero2){
        return numero1;
    }else {
      return numero2;
    }
  }
  document.write(suma(30,50))

  document.write("<br>")

  let num;
  let numeromaximo=function(valor1, valor2){
    if (valor1>valor2){
      return valor1;
    }else {
      return valor2;
    }
    document.write("el numero maximo es "+numeromaximo(2,7))
  }


</script>
