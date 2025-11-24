export default defineNuxtPlugin(() => {
  if (process.client) {
    if (!document.getElementById("tawk-script")) {
      const tawk = document.createElement("script");
      tawk.id = "tawk-script";
      tawk.async = true;
      tawk.src = "https://embed.tawk.to/69233cd6025e0c19618d54d1/1jaoqbb7e";
      tawk.charset = "UTF-8";
      tawk.setAttribute("crossorigin", "*");

      document.body.appendChild(tawk);
    }
  }
});
