// Sending the values
const Form = document.querySelector("form");

const formCalculator = Form.addEventListener("submit", event => {
  event.preventDefault();

  const cat_op = parseInt(document.querySelector("#cateto_op").value);
  const cat_adj = parseInt(document.querySelector("#cateto_adj").value);

  const calculatorValues = {
    cat_op,
    cat_adj
  };
  console.log(calculatorValues);

  calculateHip(calculatorValues);
});

// function formValidation() {
//   const cat_oposto = document.getElementById("cateto_op");
//   const cat_adjascente = document.getElementById("cateto_adj");

//   const forms = document.getElementsByClassName("needs-validation");
//   // Loop over them and prevent submission
//   const validation = Array.prototype.filter.call(forms, function(form) {
//     form.addEventListener("submit", function(event) {
//       if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
//       form.classList.add("was-validated");
//     });
//   });
// }



// // Form Validation
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.getElementsByClassName("needs-validation");
      const cat_oposto = document.getElementById("cateto_op");
      const cat_adjascente = document.getElementById("cateto_adj");
      // Loop over them and prevent submission
      const validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

//Calculate Hipotenuse
const calculateHip = calculatorValues => {
  axios
    .post("https://atlas-231814.appspot.com/calcula", calculatorValues)
    .then(response => {
      const resultHip = response.data;
      const hypotenuse = resultHip.hip;
      console.log(`O valor do cálculo da hipotenusa é:`, hypotenuse);
      // Show result
      document.querySelector("#hipotenusa").value = hypotenuse;
    })
    .catch(error => console.error(error));
};



