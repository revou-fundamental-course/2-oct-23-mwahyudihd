function darkLight() {
  var element = document.body;
  var button1 = document.querySelector(".mode1");
  var button2 = document.querySelector(".mode2");
  var button3 = document.querySelector(".mode3");
  var button4 = document.querySelector(".mode4");
  var button5 = document.querySelector(".mode5");
  var tombol = document.getElementById("btn1");

  if (element.classList.contains("dark-mode")) {
    var navBar = document.getElementById("dark-nav");
    var back = document.getElementById("bg2");

    element.classList.remove("dark-mode");
    button1.classList.remove("dark-mode1");
    button2.classList.remove("dark-mode1");
    button3.classList.remove("dark-mode1");
    button4.classList.remove("dark-mode1");
    button5.classList.remove("dark-mode1");
    navBar.id = "dark-navc";
    back.id = "bg1";
    tombol.textContent = " Dark";
  } else {
    var navBar = document.getElementById("dark-navc");
    var back = document.getElementById("bg1");

    element.classList.add("dark-mode");
    button1.classList.add("dark-mode1");
    button2.classList.add("dark-mode1");
    button3.classList.add("dark-mode1");
    button4.classList.add("dark-mode1");
    button5.classList.add("dark-mode1");
    navBar.id = "dark-nav";
    back.id = "bg2";
    tombol.textContent = "Light";
  }
}

function konversiSuhu() {
  var inputFahrenheit = document.getElementById("fahrenheit").value;
  var celsius = ((inputFahrenheit - 32) * 5) / 9;
  var fixed = Math.round(celsius);

  document.getElementById("result-id").innerHTML =
    `(${inputFahrenheit} - 32) * 5 / 9 = ${celsius} Celsius` +
    `Hasil konversi: ${fixed} Celsius`;
}

function konversiSuhu1() {
  var inputCelsius = document.getElementById("celsius").value;
  var fahrenheit = (inputCelsius * 9) / 5 + 32;
  var fixed = Math.round(fahrenheit);

  document.getElementById("result-id").innerHTML =
    `(${inputCelsius} - 32) * 5 / 9 = ${fahrenheit} Fahrenheit` +
    `Hasil konversi: ${fixed} Fahrenheit`;
}

function resetInput() {
  document.getElementById("fahrenheit").value = "";
  document.getElementById("celsius").value = "";
  document.getElementById("result-id").innerHTML = "";
}

function toggleDisplayC() {
  var cell = document.getElementById("celsius"); // Ganti "elemenTampilan" dengan ID elemen yang ingin Anda ubah display-nya.
  var far = document.getElementById("fahrenheit");
  if (cell.style.display === "none" && far.style.display === "flex") {
    cell.style.display = "flex";
    far.style.display = "none"; // Atur display ke "block" untuk menampilkannya.
  } else {
    elem.style.display = "none";
    far.style.display = "flex"; // Atur display ke "none" untuk menyembunyikannya.
  }
}

function toggleDisplayF() {
  var cell = document.getElementById("celsius"); // Ganti "elemenTampilan" dengan ID elemen yang ingin Anda ubah display-nya.
  var far = document.getElementById("fahrenheit");
  if (cell.style.display === "flex" && far.style.display === "none") {
    cell.style.display = "none";
    far.style.display = "flex"; // Atur display ke "block" untuk menampilkannya.
  } else {
    cell.style.display = "flex";
    far.style.display = "none"; // Atur display ke "none" untuk menyembunyikannya.
  }
}

function toggleDisplayA() {
  var cel1 = document.getElementById("sub-a"); // Ganti "elemenTampilan" dengan ID elemen yang ingin Anda ubah display-nya.
  var far1 = document.getElementById("sub-b");
  if (cel1.style.display === "flex" || far1.style.display === "none") {
    cel1.style.display = "none";
    far1.style.display = "flex"; // Atur display ke "block" untuk menampilkannya.
  } else {
    cel1.style.display = "flex";
    far1.style.display = "none"; // Atur display ke "none" untuk menyembunyikannya.
  }
}

function toggleDisplayB() {
  var cel = document.getElementsById("sub-a"); // Ganti "elemenTampilan" dengan ID elemen yang ingin Anda ubah display-nya.
  var far2 = document.getElementsById("sub-b");
  if (cel.style.display === "none" || far2.style.display === "flex") {
    cel.style.display = "flex";
    far2.style.display = "none"; // Atur display ke "block" untuk menampilkannya.
  } else {
    cel.style.display = "none";
    far2.style.display = "flex"; // Atur display ke "none" untuk menyembunyikannya.
  }
}
function doble1() {
  toggleDisplayC();
  toggleDisplayA();
}
function doble2() {
  toggleDisplayF();
  toggleDisplayA();
}


