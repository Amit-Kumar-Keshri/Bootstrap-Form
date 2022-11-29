// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

 var stateList = [
   { Country: "India", State: "Maharashtra" },
   { Country: "India", State: "Delhi" },
   { Country: "India", State: "Punjab" },
   { Country: "United States", State: "Alabama" },
   { Country: "United States", State: "Arizona" },
   { Country: "United States", State: "California" },
   { Country: "Other", State: "Other"},
 ];

 jQuery(document).ready(function () {
   jQuery("#country").change(function () {
     if (jQuery("#country").val() == "Other") {
       jQuerjQuery(".cntry").show();
       const option = "<option val='Other'>Other</option>";
       jQuery("#states").append(option);
     } else {
       jQuery("#states").html("<option selected>Choose State</option>");
       const state = stateList.filter(
         (m) => m.Country == jQuery("#country").val()
       );
       state.forEach((element) => {
         const option =
           "<option val='" + element.State + "'>" + element.State + "</option>";
         jQuery("#states").append(option);
       });
     }
   });
 });
