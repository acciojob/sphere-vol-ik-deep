function volume_sphere(e) {
            const radius = parseFloat(document.getElementById("radius").value);
            if (!isNaN(radius) && radius >= 0) {
                const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
                document.getElementById("volume").value = volume.toFixed(2);
            } else {
                document.getElementById("volume").value = "Invalid input";
            }
	   e.preventDefault();
        }

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
