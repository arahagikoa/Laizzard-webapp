import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import base64

class Mail:
    def __init__(self) -> None:
        with open("./laizzard.png", "rb") as img_file:
            img_data = img_file.read()

        img_base64 = base64.b64encode(img_data).decode("utf-8")
        image_width = 170
        image_height = 150

        self.adminMail = "kmlkrzeminski@gmail.com"
        self.adminPass = "hxfr tcys zguw mzgw"
        self.respondTemp = f"""
        <p>Szanowny Użytkowniku,</p>
        <p>Dziękujemy za nawiązanie kontaktu z Laizzard AI</p>
        <p>Twoja wiadomość została przekazana do zarządu, gdzie zostanie jej poświęcona należyta uwaga</p>
        <p>Jeden z naszych adminów skontaktuje się z Tobą najszybciej jak to będzie możliwe, w celu ustalenia dalszych kroków współpracy możesz w dowolnym momencie zaktualizować swoje dane lub usunąć je z bazy.</p>
        <p>Zachęcamy do zapoznania się z naszymi pozostałymi rozwiązaniami.</p>
        
        <p>Z wyrazami szacunku,<br>
        <strong>Zespół Laizzard AI</strong><br>
        <p>Ta wiadomość została wygenerowana automatycznie, prosimy na nią nie odpowiadać.</p>
        <strong>Laizzard AI</strong><br>
        email: <a href="mailto:biuro@laizzardAI.pl">biuro@laizzardAI.com</a><br>
        <a href="http://www.youtube.come">www.peopleofquality.pl</a></p>
        <p><img src="data:image/png;base64,{img_base64}" alt="Image" width="{image_width}" height="{image_height}"></p>
        """

    def send_automatic_mail(self, userMail) -> None:
        from_email = self.adminMail
        password = self.adminPass

        msg = MIMEMultipart()
        msg['Subject'] = "Laizzard AI - Dziękujemy za kontakt!"
        msg['From'] = from_email
        msg['To'] = userMail

        msg.attach(MIMEText(self.respondTemp, "html"))

        try:
            smtp_server = "smtp.gmail.com"
            port = 587
            server = smtplib.SMTP(smtp_server, port)
            server.starttls()
            server.login(from_email, password)
            server.sendmail(from_email, userMail, msg.as_string())
            print("Email sent successfully!")
        except Exception as e:
            print("Error sending email:", str(e))
        finally:
            server.quit()

    def get_data_email(self, busEmail, firstName, phoneNumber, note) -> None:
        from_email = self.adminMail
        password = self.adminPass

        msg = MIMEMultipart()
        msg['Subject'] = "LaizzardAI - Contact Form"
        msg['From'] = from_email
        msg['To'] = from_email

        data_text = f"""
        <p>Witaj Adminie,</p>
        <p>Przesyłam dane z najnowszego formularza kontaktowego:</p>
        <p>Email biznesowy: {busEmail}</p>
        <p>Imię: {firstName}</p>
        <p>Numer telefonu: {phoneNumber}</p>
        <p>Wiadomość: {note}</p>
        <p>LOL</p>
        """

        msg.attach(MIMEText(data_text, "html"))

        try:
            smtp_server = "smtp.gmail.com"
            port = 587
            server = smtplib.SMTP(smtp_server, port)
            server.starttls()
            server.login(from_email, password)
            server.sendmail(from_email, from_email, msg.as_string())
            print("Email sent successfully!")
        except Exception as e:
            print("Error sending email:", str(e))
        finally:
            server.quit()
