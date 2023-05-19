function book() {
  const peoples = +document.getElementById("peoples").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const specialRequest = document.getElementById("special_request").value;

  fetch("https://sheet.best/api/sheets/d3f3fc62-5095-4bb0-8f9f-4bca8dd48dc8", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Peoples: peoples,
      Date: date,
      Time: time,
      Name: name,
      Email: email,
      Phone: phone,
      "Special Request": specialRequest,
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      // The response comes here
      console.log(data);
    })
    .catch((error) => {
      // Errors are reported there
      console.log(error);
    });
}

document.getElementById("submit-btn").addEventListener("click", book);
