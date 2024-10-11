import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# SMTP server configuration
smtp_server = "mail.perscom-admin.support"
smtp_port = 587  # For TLS
smtp_user = "support@perscom-admin.support"
smtp_password = "1234"

# Email details
sender_email = "support@perscom-admin.support"
receiver_email = "ottersondavid5@gmail.com"
subject = "Test Email from Python"
body = "This is a test email sent from a Python script using your SMTP server."

# Create the email
message = MIMEMultipart()
message["From"] = sender_email
message["To"] = receiver_email
message["Subject"] = subject

# Add body to email
message.attach(MIMEText(body, "plain"))

try:
    # Connect to the SMTP server
    server = smtplib.SMTP(smtp_server, smtp_port)

    # Start TLS for security
    server.starttls()

    # Login to the server
    server.login(smtp_user, smtp_password)

    # Send email
    server.sendmail(sender_email, receiver_email, message.as_string())

    print("Email sent successfully!")

except Exception as e:
    print(f"Error sending email: {e}")

finally:
    # Close the connection
    server.quit()
