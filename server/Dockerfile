# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Copy the dependencies file to the working directory
COPY requirements.txt .

# Install Gunicorn and any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt gunicorn uvicorn

# Copy the current directory contents into the container at /app
COPY . .

# You can use .dockerignore file to ignore the Experiments folder
# Exclude the Experiments directory (make sure .dockerignore is in the context of the build)
# .dockerignore
# Experiments/

# Tell the port number the container should expose
EXPOSE 4007

# Run the application with Gunicorn with Uvicorn workers:
CMD ["gunicorn", "-w", "4", "-k", "uvicorn.workers.UvicornWorker", "-b", "0.0.0.0:4007", "main:app"]
