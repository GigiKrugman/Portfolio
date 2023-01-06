let btnAbout = document.getElementById("btn-flat");
let aboutSection = document.getElementById("about--me--paragraph");

btnAbout.addEventListener("click", function () {
  aboutSection.innerHTML = `<div class="card-product">
      <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
      <div class="card-product-infos">
        <h2>Product name</h2>
        <p>
          Product description with <strong>relevant info</strong> only.
        </p>
      </div>
    </div>`;
});
