document.getElementById('rsvpForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Obrigado, ${name}! Sua presença foi confirmada.`);
});

document.getElementById("dvAcompanhante").style.display 