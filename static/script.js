const shareData = {
  title: "🇺🇦🇸🇰📖",
  text: "Ukrajinsko-Slovenský obrazkový slovník",
  url: "https://uaa.arcicode.com/?source=share",
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

function promptForUpdate() {
  console.log("promptForUpdate");
  return new Promise((resolve, reject) => {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = "Do you want newer version?";
    const btn = document.createElement("button");
    btn.innerText = "Update";
    btn.addEventListener("click", () => {
      toast.remove();
      resolve(true);
    });
    toast.appendChild(btn);
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
      resolve(false);
    }, 5000);
  });
}
