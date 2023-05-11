window.onload = function() {
    var icon = document.getElementById("moon");
    icon.onclick = function() {
        document.body.classList.toggle("darkTheme");
        if (document.body.classList.contains("darkTheme")) {
            icon.name = "sunny-outline";
        }
    else icon.name = "moon-outline";
    }
}