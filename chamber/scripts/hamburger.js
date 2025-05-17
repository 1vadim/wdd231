function toggleMenu() {
	const navList = document.getElementById("animated");
	const menuToggle = document.getElementsByClassName("menu-toggle")[0];
	navList.classList.toggle("active");
menuToggle.classList.toggle("active");
}