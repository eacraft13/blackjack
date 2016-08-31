## Blackjack

### To run in development:
1. `$ docker-compose up`

### To run in production:
0.  AWS ECS setup
    1. `$ ecs-cli configure --region us-east-1 --cluster blackjack`
    2. `$ ecs-cli up --keypair [your key pair name] --capability-iam --size 2 --instance-type t2.micro`
1. `$ ecs-cli compose --file aws-compose.yml up`
