
const mostrarPagoBtn = document.getElementById('mostrarPagoBtn');
const procesoPago = document.getElementById('pago');
mostrarPagoBtn.addEventListener('click', function() {
  if (procesoPago.style.display === 'none' || procesoPago.style.display === '') {
    procesoPago.style.display = 'block';  
  } else {
    procesoPago.style.display = 'none';   
  }
});
  