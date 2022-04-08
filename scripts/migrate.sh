#!/usr/bin/bash
docker exec -it restapi npx -- prisma migrate dev
