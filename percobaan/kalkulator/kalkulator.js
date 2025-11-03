// Ambil elemen layar dan tombol
const expression = document.getElementById("expression");
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".key");

let currentInput = "";
let currentResult = "";

// Fungsi untuk memperbarui tampilan layar
function updateDisplay() {
  expression.textContent = currentInput || "0";
  result.textContent = currentResult || "0";
}

// Fungsi untuk menghitung hasil
function calculate() {
  try {
    currentResult = eval(currentInput);
    updateDisplay();
  } catch {
    result.textContent = "Error";
  }
}

// Fungsi untuk menghapus semua input
function clearAll() {
  currentInput = "";
  currentResult = "";
  updateDisplay();
}

// Fungsi untuk menghapus satu karakter
function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

// Saat tombol diklik
buttons.forEach((btn) => {
  const value = btn.dataset.value;
  const action = btn.dataset.action;

  btn.addEventListener("click", () => {
    if (action === "clear") return clearAll();
    if (action === "del") return deleteLast();
    if (action === "equals") return calculate();

    // Tambahkan angka/operator ke input
    if (value) {
      currentInput += value;
      updateDisplay();
    }
  });
});

// Tampilkan awal
updateDisplay();
