# NOTE - Use Git Bash to run this script if you're using Windows

# This script installs the required tool for updating migrations
# and sets up the database container

dotnet tool install --global dotnet-ef

docker pull postgres
docker volume create taskmanagement_db
docker run --name postgres_container -e POSTGRES_PASSWORD=1234 -d -p 5432:5432 -v taskmanagement_db:/var/lib/postgresql/data postgres

dotnet ef database update

read -p "Press ENTER to exit"
