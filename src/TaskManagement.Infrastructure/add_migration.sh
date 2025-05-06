migrationName=${1}

if [ -z "${migrationName}" ]; then
	read -p "Migration name: " migrationName
fi

dotnet ef migrations add $migrationName

read -p "Press ENTER to exit"