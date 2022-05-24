// PLEDGE SUCCESS

const successModal = document.getElementsByClassName("modal__success")[0];
const btnClose = document.getElementById("btn-close");
const changedText = document.getElementsByClassName("text-success")[0];


//function to convert a num to string with a commas
//890849 => "890,849"

function toNumberString(num) {
    const numString = num.toString();
    let numDigits = numString.length;
    //897415589
    let output = "";
    while (numDigits > 0) {
      if (output.length === 0) {
        output = numString.substring(
          numDigits - 3,
          numDigits
        );
      } else {
        output =
        numString.substring(numDigits - 3, numDigits) +
          "," +
          output;
      }
      numDigits -= 3;
    }
    return output;
}

function incrementBackers() {

  const backersString = document.getElementById("backers").innerHTML;
  let backers = numFromNumString(backersString);
  const newBackers = backers + 1;

  document.getElementById("backers").innerHTML = toNumberString(newBackers);

}
function updateBackedAmount(num) {
    const backedString = document.getElementById("backed").innerHTML;
    let backed = numFromNumString(backedString);
    const newBackedAmount = backed + num;
    document.getElementById("backed").innerHTML = toNumberString(newBackedAmount);
    console.log(num);
}
function numFromNumString(numString) {
    return Number(numString.split(",").join(""))
}
//onSubmit open modal NO REWARD success

function openNoRewardSuccess() {
  console.log("NO REWARD");
  modal.style.display = "none";
  successModal.style.display = "block";
  window.scrollTo(0, 0);
  overlay.style.display = "block";
  changedText.innerHTML = " with no rewards";
  incrementBackers();
}

//onSubmit open modal success

function openModalSuccess(event, inputID) {
    console.log(inputID);
    
  event.preventDefault();

  let inputs = Number(document.getElementById(inputID).value);
  updateBackedAmount(inputs);
  incrementBackers();
  console.log(inputs);
  modal.style.display = "none";
  successModal.style.display = "block";
  window.scrollTo(0, 0);
  overlay.style.display = "block";
  changedText.innerHTML = " Bamboo Monitor Riser";

}

btnClose.onclick = function () {
  successModal.style.display = "none";
  overlay.style.display = "none";
};
