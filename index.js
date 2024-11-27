var productsitename = document.getElementById("sitename");
var productsiteurl = document.getElementById("siteurl");
var productwraaps = document.getElementById("wraaps");
var alert = document.getElementById("alert");

var Submit1 =  document.getElementById("Submit");
var updatebtn = document.getElementById("delete");
nameregex = /^[A-Za-z]$/;
allsite = [];

if (localStorage.getItem("siteid")) {
  allsite = JSON.parse(localStorage.getItem("siteid"));
  displaysite();
}

function addsite() {
  if(validall()==true){
     var siteid = {
    productsitename:productsitename.value,
    productsiteurl:productsiteurl.value,
  };
  allsite.push(siteid);
  localStorage.setItem("siteid", JSON.stringify(allsite));
  displaysite();

  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });
}else{

  Swal.fire({
    title: "Site Name or Url is not valid, Please follow the rules below :",
    text: "Site name must contain at least 3 characters",
    text: "Site URL must be a valid one",
     icon: "error"
  });
   
}

}
// var siteid = {
//   productsitename:productsitename.value,
//   productsiteurl:productsiteurl.value,
// };
// allsite.push(siteid);
// localStorage.setItem("siteid", JSON.stringify(allsite));
// displaysite();
// }




function displaysite() {
  var cartoonaa = "";

  for (var i = 0; i < allsite.length; i++) {
    cartoonaa += `
        
       <tr>
    <td>${i + 1}</td>
    <td>${allsite[i].productsitename}</td>
    <td><a class="btn text-light" style="background-color: #8A9E23;" target="_blank" href="${
      allsite[i].productsiteurl
    }"><i class="fa-regular fa-eye">Visit</a></td>
    <td>
     <button class="btn text-light m-3" style="background-color: red;" value="visit" onclick="deletesite(${i})"><i class="fa-solid fa-trash"></i>delete</button>
    </td>
</tr>     
        `;
  }
  document.getElementById("wraap").innerHTML = cartoonaa;
}

function deletesite(index) {
  allsite.splice(index, 1);
  localStorage.setItem("siteid", JSON.stringify(allsite));
  displaysite();
}

function cleardata() {
  productsitename.value = null;
  productsiteurl.value = null;
}



function validitionname(regex, inputvalue, alert, input) {
  if (regex.test(inputvalue) === true) {
    alert.classList.add("d-none");
    input.classList.add('is-valid')
    return true
  } else {
    alert.classList.remove("d-none");
    input.classList.add('is-invalid')

    return false
  }
}
function validitionurl(regex, inputvalue, alert, input) {
  if (regex.test(inputvalue) === true) {
    alert.classList.add("d-none");
    input.classList.add('is-valid')

    return true
  } else {
    alert.classList.remove("d-none");
    input.classList.add('is-invalid')

    return false
  }
}


function validall(){

  if(validitionname(/^[A-Za-z].*/,productsitename.value,namealert,productsitename)&&
  validitionurl(/^(http|https):\/\/.*/,productsiteurl.value,namealert,productsiteurl) )
{
  return true
  
}else{
  return false
  
}
}