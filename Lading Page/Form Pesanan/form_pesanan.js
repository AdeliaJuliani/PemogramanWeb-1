document.addEventListener("DOMContentLoaded", function () {
    const shirtContainer = document.getElementById("shirtContainer");
    const addShirtButton = document.getElementById("addShirtButton");
    const maxShirts = 5;
    let shirtCount = 0;
  
    const prices = {
      "Falcon Force": 100000,
      "Tropical Twist": 200000,
      "Navy Gold Pixels": 150000,
      "Zigzag Zest": 250000,
      "Abstract Storm": 300000,
      "Batik Emas Nusantara": 120000,
      "Striped Fury": 180000,
      "Legenda Hijau": 270000,
      "Navy Stripe": 220000,
      "Tribal White Vibrance": 350000,
    };
  
    addShirtButton.addEventListener("click", function () {
      if (shirtCount < maxShirts) {
        shirtCount++;
        const shirtRow = document.createElement("div");
        shirtRow.className = "shirt-row";
  
        shirtRow.innerHTML = `
          <div class="form-group">
            <label for="shirtType">Jenis Baju</label>
            <select name="shirtType[]" class="shirtType" required>
              ${Object.keys(prices)
                .map(
                  (key) =>
                    `<option value="${key}" data-price="${prices[key]}">${key} - Rp${prices[key].toLocaleString()}</option>`
                )
                .join("")}
            </select>
          </div>
          <div class="form-group">
            <label for="shirtQty">Jumlah</label>
            <input type="number" name="shirtQty[]" class="shirtQty" min="1" placeholder="Jumlah" required>
          </div>
          <div class="form-group">
            <label for="size">Ukuran</label>
            <select name="size[]" class="size" required>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="XXXL">XXXL</option>
            </select>
          </div>
        `;
  
        shirtContainer.appendChild(shirtRow);
  
        updateSummary();
      } else {
        alert("Maksimal 5 jenis baju yang bisa dipesan.");
      }
    });
  
    shirtContainer.addEventListener("input", updateSummary);
  
    function updateSummary() {
      let totalOrder = 0;
  
      document.querySelectorAll(".shirt-row").forEach((row) => {
        const shirtType = row.querySelector(".shirtType").value;
        const qty = parseInt(row.querySelector(".shirtQty").value) || 0;
        totalOrder += prices[shirtType] * qty;
      });
  
      const voucherDiscount = totalOrder * 0.5;
      const finalAmount = totalOrder - voucherDiscount + 2000 + 5000;
  
      document.getElementById("totalOrder").textContent = `Rp${totalOrder.toLocaleString()}`;
      document.getElementById("voucherDiscount").textContent = `Rp${voucherDiscount.toLocaleString()}`;
      document.getElementById("finalAmount").textContent = `Rp${finalAmount.toLocaleString()}`;
    }
  });
  