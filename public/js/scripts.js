"use strict";

function calculateBMI(event) {
  event.preventDefault();

  const age = document.getElementById("age")?.value || 0;
  const weight = document.getElementById("weight")?.value || 0;
  const height = document.getElementById("height")?.value || 0;

  window.location.href = `/${age}/${weight}/${height}`;
}

document.getElementById("calc").addEventListener("click", calculateBMI);
