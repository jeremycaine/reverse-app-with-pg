echo pghost $PGHOST
echo $PGPORT
echo $PGUSER
echo $PGPASSWORD
psql -d ibmclouddb -f pg-data.sql
