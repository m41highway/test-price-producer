# test-price-producer

A socket.io client to generate price data at regular interval

## Setup

Download the dependencies
```
npm install
```

If you generate data to [Price Server](https://github.com/m41highway/test-backend) on local machine, start with 

```
node client http://localhost:5000
```

if you generate data to [Price Server](https://github.com/m41highway/test-backend) deployed to AWS EC2, start with 

```
node client http://ec2-18-216-35-114.us-east-2.compute.amazonaws.com:5000
```

By default, data is generated every 10 seconds, you may override by passing the second parameter

```
node client http://localhost:5000 300
```

It will generate data at 300 milliseconds










