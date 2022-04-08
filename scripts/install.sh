#!/usr/bin/bash
helm install -f values/postgres-values.yaml postgres charts/postgres
helm install -f values/restapi-values.yaml restapi charts/restapi