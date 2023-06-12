const body = document.querySelector("body");
const mode1 = document.querySelector(".mode1");
const mode2 = document.querySelector(".mode2");
const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const inputbtn = document.querySelector(".inputbtn");
const input = document.querySelector(".input");
const inputt = document.querySelector("input");
const select = document.querySelector("select");
const region = document.querySelector("#region");
const loader = document.querySelector(".loader");
const contires = document.querySelector(".contires");

const api_link = "https://restcountries.com/v3.1/all"

const getData = async (api) => {
	const req = await fetch(api)
	const data = await req.json()
	useDate(data);
	loader.classList.add("active");
}

getData(api_link);

const useDate = (data) => {
	data.forEach((item) => {
		contires.innerHTML += `<div class="country">
					<img src="${item.flags.png}" alt="flag" height="160px" </img>
					<h3>${item.name.common}</h3>
					<p> <span>Popolation:&nbsp;&nbsp</span>${item.population}</p>
					<p class="regions"> <span>Region:&nbsp;&nbsp;&nbsp</span>
					<span id="countryregion">${item.region}</span></p>
					<p> <span>Capital:&nbsp;&nbsp;&nbsp</span> ${item.capital}</p>
		</div>`
	})
}


mode1.addEventListener("click", () => {
	mode1.style.display = "none";
	mode2.style.display = "flex";
	navbar.classList.add("navbar2");
	header.classList.add("header2");
	const country = document.querySelectorAll(".country");
	country.forEach((item) => {
		item.classList.add("country2");
	});
	input.classList.add("inputbtn2");
	inputbtn.classList.add("inputbtn2")
	select.classList.add("select2");
})


mode2.addEventListener("click", () => {
	mode2.style.display = "none";
	mode1.style.display = "flex";
	navbar.classList.remove("navbar2");
	header.classList.remove("header2");
	const country = document.querySelectorAll(".country");
	country.forEach((item) => {
		item.classList.remove("country2");
	});
	input.classList.remove("inputbtn2")
	inputbtn.classList.remove("inputbtn2")
	select.classList.remove("select2");
})


inputt.addEventListener("input", () => {
	const search = inputt.value.toLowerCase().trim();
	contires.childNodes.forEach((item) => {
			console.log(item);
	 let countryName = item.querySelector("h3").textContent.toLowerCase();
	//  console.log(countryName);

	if (!countryName.includes(search)) {
		item.classList.add("hidden");
	}else{
		item.classList.remove("hidden");
	}
	region.value = "All";
});
});

region.addEventListener("change", () => {
	const regionEl = region.value;

	contires.childNodes.forEach((item) => {

		let regionName = item.querySelector("#countryregion").textContent;
		console.log(regionName);

		if (regionEl =="All") {
			item.classList.remove("hidden");
		}else if (!regionName.includes(regionEl)) {
			item.classList.add("hidden");
		}	else{
			item.classList.remove("hidden");
		}

		inputt.value=""

	});
})
