if psql -lqt | cut -d \| -f 1 | grep -qw $1; then
    # database exists
    # $? is 0
    echo db $1 exists
else
    # ruh-roh
    # $? is 1
    echo db does not exist, creating ...
    createdb $1
fi
