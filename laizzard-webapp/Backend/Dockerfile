FROM python:3.9-bullseye

WORKDIR /APP/Backend

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libc6 \
    libgcc-s1 \
    libgssapi-krb5-2 \
    libssl1.1 \
    libstdc++6 \
    zlib1g \
    libpq-dev \
    libxml2-dev \
    libxslt1-dev \
    libldap2-dev \
    libsasl2-dev \
    build-essential \
    libgdiplus \
    curl \
    software-properties-common \
    libopenmpt0 \
    poppler-utils \
    tesseract-ocr \
    libtesseract-dev \
    wget \
 && rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y \
    tesseract-ocr-eng \  
    tesseract-ocr-fra \
    tesseract-ocr-ita \ 
    tesseract-ocr-pol \
    tesseract-ocr-deu \  
    # Add more languages as needed
 && rm -rf /var/lib/apt/lists/*
# Install .NET SDK


# Create directories and copy application code
RUN mkdir -p /APP/Backend
COPY . /APP/Backend


# Install Python dependencies
RUN pip install --no-cache-dir -r /APP/Backend/requirements.txt

# Install Gunicorn
RUN pip install gunicorn

# Expose port and define command to run the application
EXPOSE 80
ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=1
CMD ["gunicorn", "--bind=0.0.0.0:80", "--timeout", "600", "main:app"]
