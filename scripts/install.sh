#!/usr/bin/bash
helm install -f k8s/values/postgres-values.yaml postgres charts/postgres
helm install -f k8s/values/restapi-values.yaml restapi charts/restapi