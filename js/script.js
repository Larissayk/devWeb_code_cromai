//Form Validation MDBootstrap
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.getElementsByClassName("needs-validation");
      const Form = document.querySelector("form");
      // Loop over them and prevent submission
      const validation = Array.prototype.filter.call(forms, function(form) {
        Form.addEventListener(
          "submit",
          function(event) {
            // if (Form.checkValidity() === false) {
            //   console.log("invalido");
            //   event.preventDefault();
            //   event.stopPropagation();
            // }
            Form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// Sending the values to the API if form is valid
const Form = document.querySelector("form");
const formCalculator = Form.addEventListener("submit", event => {
  event.preventDefault();

  const cat_op = parseInt(document.querySelector("#cateto_op").value);
  const cat_adj = parseInt(document.querySelector("#cateto_adj").value);

  const catOP_email = document.querySelector("#valorCatOp");
  catOP_email.innerText = cat_op;
  const catAD_email = document.querySelector("#valorCatAd");
  catAD_email.innerText = cat_adj;

  const calculatorValues = {
    cat_op,
    cat_adj
  };
  console.log(calculatorValues);

  if (Form.checkValidity() == false) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    calculateHip(calculatorValues);
    $("#modalPush").modal("show");
  }
});

//Calculate Hypotenuse
const calculateHip = calculatorValues => {
  axios
    .post("https://atlas-231814.appspot.com/calcula", calculatorValues)
    .then(response => {
      const resultHip = response.data;
      const hypotenuse = resultHip.hip;
      console.log(`O valor do cálculo da hipotenusa é:`, hypotenuse);
      // Show result
      document.querySelector("#hipotenusa").value = hypotenuse;
      const hip = document.querySelector("#resultHip");
      hip.innerText = hypotenuse;

      console.log(hip);
    })
    .catch(error => console.error(error));
};

function clearInput() {
  console.log("limpar");
  Form.reset();
  Form.classList.remove("was-validated");
}


