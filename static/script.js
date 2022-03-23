const shareData = {
  title: "🇺🇦🇸🇰📖",
  text: "Ukrajinsko-Slovenský obrazkový slovník",
  url: "https://uaa.arcicode.com/",
};

const btn = document.querySelector("a.share");
if (btn) {
  if (navigator.share) {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Error: " + err);
      }
    });
  }
} else {
  console.error("btn not found", btn);
}
