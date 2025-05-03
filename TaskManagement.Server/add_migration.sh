migrationName=${1}
if [ -z "${migrationName}" ]; then
	read -p "Migration name: " migrationName
fi

dotnet ef migrations add $migrationName -o ./Models/Migrations
dotnet ef database update

read -p "Press ENTER to exit"