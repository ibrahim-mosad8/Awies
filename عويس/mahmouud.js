window.addEventListener("load", function () {
    Swal.fire({
      title: "Welcome!",
      text: "Please enter your name to personalize this birthday card.",
      input: "text",
      inputPlaceholder: "Your name",
      confirmButtonText: "Submit",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        const name = result.value.trim();
        if (name) {
          document.getElementById(
            "greeting"
          ).textContent = `Surpries the king 👑 is back 😒💪, ${name}`;
          document.getElementById(
            "message"
          ).textContent = `I'm king, ${name}!`;
        } else {
          Swal.fire(
            "Oops!",
            "Name cannot be empty. Refresh the page to try again.",
            "error"
          );
        }
      }
    });
  });