
document.querySelector("#alerts").classList.add("invisible")

function asdf() {
    let card = document.querySelector("#card");
    let cvc = document.querySelector("#CVC");
    let amount = document.querySelector("#amount");
    let firstname = document.querySelector("#firstname");
    let lastname = document.querySelector("#lastname");
    let city = document.querySelector("#city");
    let preference = document.querySelector("#preference");
    let postcode = document.querySelector("#postcode");
    let radio1 = document.querySelector("#mastercardcheck");
    let radio2 = document.querySelector("#visacheck");
    let radio3 = document.querySelector("#empirecheck");
    let radio4 = document.querySelector("#rebelcheck");
    let message = document.querySelector("#message");

    function emptiness(elm) {
        if (elm.value.length == "0") {
            submit = false;
            elm.classList.add("is-invalid");
            document.querySelector("#alerts").classList.remove("invisible");
        }
        elm.classList.add("is-valid");
    }

    emptiness(card);
    emptiness(cvc);
    emptiness(amount);
    emptiness(firstname);
    emptiness(lastname);
    emptiness(city);
    emptiness(postcode);
    emptiness(message);

    if (preference.value == "0") {
        submit = false;
        preference.classList.add("is-invalid");
        document.querySelector("#alerts").classList.remove("invisible");
    }
    if (!(radio1.checked)&&!(radio2.checked)&&!radio3.checked&&!radio4.checked) {
        submit = false;
        radio1.classList.add("is-invalid");
        radio2.classList.add("is-invalid");
        radio3.classList.add("is-invalid");
        radio4.classList.add("is-invalid");
        document.querySelector("#alerts").classList.remove("invisible");
    }
    return false
}

    // function validacion() {
    //     let submit = true;

    //     ///get elements from the html

    //     let card = document.querySelector("#card");
    //     let cvc = document.querySelector("#CVC");
    //     let amount = document.querySelector("#amount");
    //     let firstname = document.querySelector("#firstname");
    //     let lastname = document.querySelector("#lastname");
    //     let city = document.querySelector("#city");
    //     let preference = document.querySelector("#preference");
    //     let postcode = document.querySelector("#postcode");
    //     let radio = document.querySelector("#radio");
    //     let message = document.querySelector("#message");

    //     ///validation that fields are not empty

    //     function emptiness(elm) {
    //         if (elm.value.length === 0) {
    //             submit = false;
    //             elm.classList.add("is-invalid");
    //             document.querySelector("#alerts").classList.remove("invisible");
    //         }
    //         elm.classList.add("is-valid");
    //     }

    //     emptiness(card);
    //     emptiness(cvc);
    //     emptiness(amount);
    //     emptiness(firstname);
    //     emptiness(lastname);
    //     emptiness(city);
    //     emptiness(postcode);
    //     emptiness(message);

    //     if (preference.value == "0") {
    //         submit = false;
    //         preference.classList.add("is-invalid");
    //         document.querySelector("#alerts").classList.remove("invisible");
    //     }
    //     else { preference.classList.add("is-valid") }

    //     if (radio.checked) {
    //         submit = false;
    //         radio.classList.add("is-invalid");
    //         document.querySelector("#alerts").classList.remove("invisible");
    //     }
    //     else { radio.classList.add("is-valid") }

    //     console.log("submit")
    //     return submit;

    // }