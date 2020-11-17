fetch("./partials/_header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  })
  .catch((error) => {
    console.log(error);
  });

fetch("./partials/_footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  })
  .catch((error) => {
    console.log(error);
  });
