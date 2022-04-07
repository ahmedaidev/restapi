#!/usr/bin/bash
docker exec -it restapi npm -- run migrate

# k exec restapi-depl-658c68f668-nznrj -- npm run migrate
