function changeIcon() {
    document.body.classList.toggle("darkTheme");
    if (document.body.classList.contains("darkTheme")) {
        icon.name = "sunny-outline";
    }
    else icon.name = "moon-outline";
}

var icon = document.getElementById("sun");
icon.onclick = changeIcon()