document.addEventListener('DOMContentLoaded', function() {
	// Variabel val yang akan menyimpan operasi
	let val = "";

	// Mengambil semua tombol operasi kecuali =
	document.querySelectorAll("button[type='button'][name='operator']").forEach((button) => {
		// Kondisi ketika tombol diklik
		button.addEventListener('click', function() {
			// Menambahkan value dari button ke variabel val
			val += button.value;

			// Kemudian menambahkannya ke value field
			document.getElementById('field').value = val;
		});
	});

	// Ketika form disubmit
	document.getElementById('calc').addEventListener('submit', function(e) {
		// Agar tidak auto reload
		e.preventDefault();

		// Operasi matematikanya
		const operation = document.getElementById('field').value;

		// Pengecekan dan penghitungannya
		if (operation.trim()) {
			try {
				document.getElementById('result').value = eval(operation);
			} catch (err) {
				document.getElementById('result').value = "Operasi error";
			}
		} else {
			document.getElementById('result').value = "Operasi error";
		}
	});
})