document.getElementById('btPreguntar').addEventListener('click', function() {
    const pregunta = document.getElementById('pregunta').value;
    const respuesta = [
        "Yo digo no",
        "Claro que sí reina",
        "No lo veo claro, pregunta de nuevo...",
        "Yo no contaría con ello...",
        "Puede ser, el límite es tu imaginación...",
        "Por supuesto que SÍ"
    ];
  if(pregunta.trim() !== '') {
    const respuestaRandom = respuesta[Math.floor(Math.random() * respuesta.length)];
    document.getElementById('respuesta').innerText = respuestaRandom;
    document.getElementById('pregunta').value = '';
  } else {
    alert('Tienes que preguntar algo...');
  }
});