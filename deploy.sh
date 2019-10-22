docker image build -t secret .
docker stack deploy -c swarm.yml demo
