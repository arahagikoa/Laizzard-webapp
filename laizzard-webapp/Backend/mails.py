import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import base64

class Mail:
    def __init__(self) -> None:
        with open("./Lizzard_3.png", "rb") as img_file:
            img_data = img_file.read()

        img_base64 = base64.b64encode(img_data).decode("utf-8")
        image_width = 170
        image_height = 150

        self.adminMail = "lizardai2024@gmail.com"
        self.adminPass = "fjno tddy izyv xprn"
        self.email = f"""
                Szanowni Państwo,
                Nazywamy się LizardAI (https://lizard-ai.com) i chcielibyśmy zaproponować Państwu współpracę biznesową. Specjalizujemy się w implementacji rozwiązań sztucznej inteligencji, wspierających automatyzację procesów biznesowych. Oferujemy również gotowe rozwiązania dostępne jako aplikacje internetowe, szczegółowo opisane na naszej stronie.

                Nasza oferta obejmuje:

                - Spersonalizowane chatboty do obsługi klienta
                - Trenowanie lokalnych modeli do analizy danych
                - Tworzenie dedykowanych rozwiązań AI
                - Konsultacje eksperckie w dziedzinie AI

                Nasze doświadczenie obejmuje:
                - rok pracy (04.2023 - 04.2024) nad projektem AI dla firmy  https://makeitright.pl, w którym rozwijaliśmy rozwiązanie AI do automatyzacji procesu rekrutacyjnego.
                - praca (05.2024 - aktualnie) dla firmy https://itsquad.pl na stanowiskach AI software developer, gdzie zajmujemy się trenowaniem lokalnych modeli AI do analizy dokumentów.

                Jesteśmy zespołem młodych, innowacyjnych specjalistów, którzy podchodzą do każdego projektu z kreatywnością i otwartością. Nasza całodobowa dostępność, konkurencyjne ceny oraz niezachwiane zaangażowanie w Państwa projekty wyróżniają nas na rynku. Co więcej, nasze doświadczenie akademickie w dziedzinie fizyki daje nam solidne podstawy do rozwiązywania nawet najbardziej skomplikowanych problemów technicznych.

                Zapraszamy do kontaktu:
                <a href="mailto:lizardai2024@gmail.com">lizardai2024@gmail.com</a><br>

                Z poważaniem,
                Zespół LizardAI
                <p><img src="data:image/png;base64,{img_base64}" alt="Image" width="{image_width}" height="{image_height}"></p>

        """
        self.respondTemp = f"""
        <p>Szanowny Użytkowniku,</p>
        <p>Dziękujemy za nawiązanie kontaktu z LizardAI</p>
        <p>Twoja wiadomość została przekazana do zarządu, gdzie zostanie jej poświęcona należyta uwaga</p>
        <p>Jeden z naszych adminów skontaktuje się z Tobą najszybciej jak to będzie możliwe, w celu ustalenia dalszych kroków współpracy możesz w dowolnym momencie zaktualizować swoje dane lub usunąć je z bazy.</p>
        <p>Zachęcamy do zapoznania się z naszymi pozostałymi rozwiązaniami.</p>
        
        <p>Z wyrazami szacunku,<br>
        <strong>Zespół LizardAI</strong><br>
        <p>Ta wiadomość została wygenerowana automatycznie, prosimy na nią nie odpowiadać.</p>
        <strong>Laizzard AI</strong><br>
        email: <a href="mailto:lizardai2024@gmail.com">lizardai2024@gmail.com</a><br>
        <a href="https://lizard-ai.com">www.lizard-ai.com</a></p>
        <p><img src="data:image/png;base64,{img_base64}" alt="Image" width="{image_width}" height="{image_height}"></p>
        """

    def send_automatic_mail(self, userMail) -> None:
        from_email = self.adminMail
        password = self.adminPass

        msg = MIMEMultipart()
        msg['Subject'] = "LizardAI - Dziękujemy za kontakt!"
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


#m = Mail()
#m.create_email_body(img_data)
#m.get_data_email("asd", "asd", "asd", "asdd")

#m.send_automatic_mail("krzeminski.kamil@interia.eu")