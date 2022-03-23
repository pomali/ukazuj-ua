const shareData = {
  title: "🇺🇦🇸🇰📖",
  text: "Ukrajinsko-Slovenský obrazkový slovník",
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("a.share");
if (btn) {
  if (navigator.share) {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        await navigator.share(shareData);
        console.log("MDN shared successfully");
      } catch (err) {
        console.log("Error: " + err);
      }
    });
  }
} else {
  console.error("btn not found", btn);
}
