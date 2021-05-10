createdb $1 -h $PGHOST -p $PGPORT -U $PGUSER
psql -h $PGHOST -p $PGPORT -U $PGUSER -d $1 -f pg-data.sql
export PGDATABASE=$1

