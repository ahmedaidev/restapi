#!/usr/bin/bash
kubectl create secret generic password \
  --from-literal=POSTGRES_PASSWORD='postgres'
