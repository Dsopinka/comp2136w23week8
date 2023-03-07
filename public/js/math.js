"use strict";

const $ = (selector) => document.querySelector(selector);
const division = () => {
  let division1 = $("#division_1").value;
  let division2 = $("#division_2").value;
  let result = division1 / division2;

  $("#division_result").value = result;
  $("#int_division_result").value = parseInt(result);
  $("#floor_division_result").value = Math.floor(result);
  $("#ceiling_division_result").value = Math.ceil(result);
  $("#rounded_division_result").value = Math.round(result);
};
const modulo = () => {
  let modulo1 = $("#modulo_1").value;
  let modulo2 = $("#modulo_2").value;

  $("#modulo_result").value = modulo1 % modulo2;
};

const forLoopIteration = () => {
  let limit = $("#for_limit").value;
  let counter = parseFloat($("#for_counter").value);
  let increment = parseFloat($("#for_increment").value);
  let direction = $("#for_increment_direction").value;
  if (direction === "positive") {
    counter = counter + increment;
  } else {
    counter = counter - increment;
  }
  for (let iterator = 0; iterator < limit; iterator++) {
    counter = counter + increment;
  }
  $("#for_result").value = counter;
};

//Add all calculation functions
document.addEventListener("DOMContentLoaded", () => {
  $("#division_btn").addEventListener("click", division);
  $("#modulo_btn").addEventListener("click", modulo);
  $("#for_loop_btn").addEventListener("click", forLoopIteration);
});
