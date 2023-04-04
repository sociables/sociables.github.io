const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  if (email) {
    try {
      const db = firebase.firestore();
      await db.collection("waitlist").add({ email, timestamp: firebase.firestore.FieldValue.serverTimestamp() });
      
      alert("Thank you for signing up! We'll notify you when the app is available.");
      signupForm.reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("An error occurred. Please try again.");
    }
  } else {
    alert("Please enter a valid email address.");
  }
});
