let btnAbout = document.getElementById("btn-flat");
let aboutSection = document.getElementById("about--me--paragraph");

btnAbout.addEventListener("click", function () {
  aboutSection.innerHTML = `<div class="card-product">
      <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
      <div class="card-product-infos">
        <h2>About me</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>`;
});
