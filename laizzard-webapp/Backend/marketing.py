import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import base64
# Define email sender and receiver
sender = "lizardai2024@gmail.com"
receiver = "igor.jablonski03@gmail.com"

# Create the MIME message
msg = MIMEMultipart('alternative')
msg['Subject'] = "Propozycja Współpracy Biznesowej - LizardAI"
msg['From'] = sender
msg['To'] = receiver
with open("./Lizzard_3.png", "rb") as img_file:
            img_data = img_file.read()

img_base64 = base64.b64encode(img_data).decode("utf-8")
image_width = 170
image_height = 150
# HTML content
html = f"""
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Współpraca biznesowa</title>
</head>
<body>
    <p>Szanowni Państwo,</p>
    <p>
        Nazywamy się <strong>LizardAI</strong> (<a href="https://lizard-ai.com">https://lizard-ai.com</a>) i chcielibyśmy zaproponować Państwu współpracę biznesową. 
        Specjalizujemy się w implementacji rozwiązań sztucznej inteligencji, wspierających automatyzację procesów biznesowych. 
        Oferujemy również gotowe rozwiązania dostępne jako aplikacje internetowe, szczegółowo opisane na naszej stronie.
    </p>
    <p>Nasza oferta obejmuje:</p>
    <ul>
        <li>Spersonalizowane chatboty do obsługi klienta</li>
        <li>Trenowanie lokalnych modeli do analizy danych</li>
        <li>Tworzenie dedykowanych rozwiązań AI</li>
        <li>Konsultacje eksperckie w dziedzinie AI</li>
    </ul>
    <p>Nasze doświadczenie obejmuje:</p>
    <ul>
        <li>rok pracy (04.2023 - 04.2024) nad projektem AI dla firmy <a href="https://makeitright.pl">https://makeitright.pl</a>, w którym rozwijaliśmy rozwiązanie AI do automatyzacji procesu rekrutacyjnego.</li>
        <li>praca (05.2024 - aktualnie) dla firmy <a href="https://itsquad.pl">https://itsquad.pl</a> na stanowiskach AI software developer, gdzie zajmujemy się trenowaniem lokalnych modeli AI do analizy dokumentów.</li>
    </ul>
    <p>
        Jesteśmy zespołem młodych, innowacyjnych specjalistów, którzy podchodzą do każdego projektu z kreatywnością i otwartością. 
        Nasza całodobowa dostępność, konkurencyjne ceny oraz niezachwiane zaangażowanie w Państwa projekty wyróżniają nas na rynku. 
        Co więcej, nasze doświadczenie akademickie w dziedzinie fizyki daje nam solidne podstawy do rozwiązywania nawet najbardziej skomplikowanych problemów technicznych.
    </p>
    <p>Zapraszamy do kontaktu:</p>
    <p><a href="mailto:lizardai2024@gmail.com">lizardai2024@gmail.com</a></p>
    <p>Z poważaniem,<br>Zespół LizardAI</p>

</body>
</html>
"""

# Attach HTML content to the MIME message
'''
part = MIMEText(html, 'html')
msg.attach(part)

try:
    smtp_server = "smtp.gmail.com"
    port = 587
    server = smtplib.SMTP(smtp_server, port)
    server.starttls()
    server.login(sender, "fjno tddy izyv xprn")
    server.sendmail(sender, receiver, msg.as_string())
except Exception as e:
            print("Error sending email:", str(e))
finally:
    server.quit()

    '''