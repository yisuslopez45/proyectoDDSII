#!/bin/sh

set -e

until pg_isready -h "$POSTGRES_HOST" -p "$POSTGRES_PORT"; do
  echo "Postgres está abajo - sleeping"
  sleep 1
done

echo "Postgres is up - executing command"

exec "$@"
