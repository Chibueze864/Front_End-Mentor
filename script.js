function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  var otherDropDown = document.getElementsByClassName("dropdown-contentTwo");
  for (i = 0; i < otherDropDown.length; i++) {
    var others = otherDropDown[i];
    if (others.classList.contains("showTwo")) {
      others.classList.remove("showTwo");
    }
  }
}
function myFunctionTwo() {
  document.getElementById("myDropdownTwo").classList.toggle("showTwo");
  var otherDropDown = document.getElementsByClassName("dropdown-content");
  for (i = 0; i < otherDropDown.length; i++) {
    var others = otherDropDown[i];
    if (others.classList.contains("show")) {
      others.classList.remove("show");
    }
  }
}
function myFunctionThree() {
    document.getElementById("myDropdownThree").classList.toggle("showThree");
}  
function myFunctionFour(){
    document.getElementById("myDropdownFour").classList.toggle("showFour");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
    if (!event.target.matches(".dropbtnTwo")) {
    var dropdowns = document.getElementsByClassName("dropdown-contentTwo");

    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("showTwo")) {
        openDropdown.classList.remove("showTwo");
      }
    }
  }
};

