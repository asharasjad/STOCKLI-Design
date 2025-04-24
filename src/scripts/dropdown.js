document.addEventListener("DOMContentLoaded", () => {
  console.log("Dropdown script loaded.");

  const profileImage = document.getElementById("profileImage");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const loginButton = document.getElementById("loginButton");
  const loginModal = document.getElementById("loginModal");
  const closeModal = document.getElementById("closeModal");

  if (!profileImage || !dropdownMenu || !loginButton || !loginModal || !closeModal) {
    console.error("One or more elements are missing.");
    return;
  }

  console.log("Event listeners are being attached.");

  // Toggle dropdown menu
  profileImage.addEventListener("click", () => {
    console.log("Profile image clicked.");
    dropdownMenu.classList.toggle("hidden");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!dropdownMenu.contains(e.target) && e.target !== profileImage) {
      dropdownMenu.classList.add("hidden");
    }
  });

  // Show login modal
  loginButton.addEventListener("click", () => {
    console.log("Login button clicked.");
    dropdownMenu.classList.add("hidden");
    loginModal.classList.remove("hidden");
  });

  // Close login modal
  closeModal.addEventListener("click", () => {
    console.log("Close modal button clicked.");
    loginModal.classList.add("hidden");
  });

  // Close modal when clicking outside
  loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) {
      console.log("Clicked outside modal.");
      loginModal.classList.add("hidden");
    }
  });
});