import asyncio
from fastapi import FastAPI
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from pydantic import BaseModel
import aiosmtplib
from fastapi.middleware.cors import CORSMiddleware


class EmailRequest(BaseModel):
    email: str
    name: str


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "*"
    ],  # Allow all origins, but you can restrict this to specific domains
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)


# Email sender details
SENDER_EMAIL = "support@hrc-mil.awsapps.com"
SENDER_PASSWORD = "Neriah2024@"  # Replace with your actual password
SMTP_SERVER = "smtp.mail.eu-west-1.awsapps.com"
SMTP_PORT = 465


async def send_email(email: str, subject: str, html_content: str):
    # Create a MIMEMultipart message
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = SENDER_EMAIL
    msg["To"] = email

    # Attach the HTML content
    html_part = MIMEText(html_content, "html")
    msg.attach(html_part)

    try:
        # Send the email using aiosmtplib
        await aiosmtplib.send(
            msg,
            hostname=SMTP_SERVER,
            port=SMTP_PORT,
            username=SENDER_EMAIL,
            password=SENDER_PASSWORD,
            use_tls=True,
        )
        print(f"Email successfully sent to {email}")
    except Exception as e:
        print(f"Error sending email to {email}: {e}")


async def delayed_email(email: str, name: str):
    await asyncio.sleep(3600)  # Wait for 1 hour (3600 seconds)
    # Use a subject and template for delayed email
    subject = "Welcome to Our Website!"
    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Department Support</title>
      </head>
      <body
        style="
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          padding: 20px;
        "
      >
        <table
          style="
            width: 100%;
            max-width: 600px;
            margin: auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          "
        >
          <tr>
            <td style="text-align: center">
              <h1 style="color: #004c97">Human Resources Command (HRC)</h1>
              <p style="font-size: 16px; color: #333">Dear {name},</p>
              <p style="font-size: 16px; color: #333">
                We are pleased to inform you that your process is moving forward
                smoothly. To continue, please follow the instructions below to
                connect with our support team for any assistance needed:
              </p>

              <h3 style="color: #004c97">Instructions:</h3>
              <ol
                style="
                  font-size: 16px;
                  color: #333;
                  text-align: left;
                  margin-left: 20%;
                "
              >
                <li>Open the Telegram App on your device.</li>
                <li>
                  Scan the QR Code below using your camera or a QR code scanner
                  within the app.
                </li>
                <li>
                  Once scanned, you will be automatically directed to our support
                  team. Follow the prompts to initiate contact and proceed with the
                  next steps.
                </li>
              </ol>

              <div style="margin: 20px auto">
                <img
                  src="[INSERT_BARCODE_URL_HERE]"
                  alt="Telegram QR Code"
                  style="
                    max-width: 200px;
                    border: 2px solid #004c97;
                    border-radius: 10px;
                  "
                />
              </div>

              <p style="font-size: 16px; color: #333">
                Should you encounter any difficulties or need further clarification,
                feel free to reach out to us directly through the Telegram channel,
                and our team will assist you promptly.
              </p>

              <p style="font-size: 16px; color: #333">
                Thank you for your cooperation and continued support.
              </p>
              <p style="font-size: 16px; color: #333">Sincerely,</p>
              <p style="font-size: 16px; color: #004c97; font-weight: bold">
                HRC Support Team
              </p>
              <p style="font-size: 14px; color: #777">
                U.S. Army Human Resources Command
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
    """
    await send_email(email, subject, html_content)


@app.post("/send-email")
async def handle_email_task(request: EmailRequest):
    email = request.email
    name = request.name

    if email:
        # Start the delayed task
        asyncio.create_task(delayed_email(email, name))
        # No need to return anything to the user
    else:
        print("Email not provided")


async def direct_email(email: str, name: str):
    # Use a subject and template for direct email
    subject = "Thank You for Registering!"
    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Application Submission Received</title>
      </head>
      <body
        style="
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        "
      >
        <div style="width: 100%; background-color: #f4f4f4; padding: 20px">
          <div
            style="
              max-width: 600px;
              background-color: white;
              margin: 0 auto;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            "
          >
            <div
              style="text-align: center; padding-bottom: 10px; margin-bottom: 20px"
            >
              <img
                src="https://perscom-bucket.s3.eu-west-1.amazonaws.com/header.png"
                alt="HRC SUPPORT"
                style="max-width: 100%; height: auto; border-bottom: 1px solid #ddd"
              />
            </div>
            <div style="color: #333; line-height: 1.6">
              <p style="margin: 0 0 20px">Dear {name},</p>

              <p style="margin: 0 0 20px">
                Thank you for submitting your application to the Human Resources
                Command (HRC) department.
              </p>

              <p style="margin: 0 0 20px">
                We are pleased to inform you that we have successfully received your
                submission, and our team is now in the process of reviewing it. You
                can expect to receive further communication regarding the status of
                your application via email within the next 48 hours.
              </p>

              <p style="margin: 0 0 20px">
                In the meantime, should you have any questions or require additional
                assistance, please do not hesitate to reach out to our support team.
              </p>

              <p style="margin: 0 0 20px">Best regards,</p>
              <p style="margin: 0 0 20px">The HRC Team</p>
            </div>
            <div
              style="
                text-align: center;
                color: #777;
                font-size: 14px;
                border-top: 1px solid #ddd;
                padding-top: 10px;
                margin-top: 20px;
              "
            >
              <p style="margin: 0">
                If you have any further inquiries, feel free to contact us at
                <span
                  style="color: #007bff; text-decoration: none"
                  >hrc-mil@perscom-admin.support.com</span
                >.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
    """
    await send_email(email, subject, html_content)


@app.post("/send-email-no-delay")
async def handle_direct_email(request: EmailRequest):
    email = request.email
    name = request.name

    if email:
        # Send email immediately in the background
        asyncio.create_task(direct_email(email, name))
        # No need to return anything to the user
    else:
        print("Email not provided")
