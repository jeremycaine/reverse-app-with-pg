echo pghost $PGHOST
echo pgport $PGPORT
echo pguser $PGUSER
echo pgpassword $PGPASSWORD
psql -d ibmclouddb -f pg-data.sql
