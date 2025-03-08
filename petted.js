function pett() {
    let catImg = document.getElementById("cat");

    // Ubah gambar kucing dan teks
    if (catImg.src.includes("cat.png")) {
        catImg.src = "cat.gif";
    } else {
        catImg.src = "cat.png";
    }
}