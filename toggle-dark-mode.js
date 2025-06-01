document.addEventListener('DOMContentLoaded', function() {
	// Ketika tombol toggle dark mode diklik
	document.getElementById('toggleDarkMode').addEventListener('click', function() {
		// Toggle class dark
		document.documentElement.classList.toggle('dark');
	});
});