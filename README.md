# Price Producer

A socket.io client to generate price data at regular interval

#### Setup
Download the dependencies
```
npm install
```

If you generate data to [Price Server](https://github.com/m41highway/test-backend) on local machine, start with 

```
node client http://localhost:5000
```

if you generate data to [Price Server](https://github.com/m41highway/test-backend) deployed on AWS EC2, start with 

```
node client http://ec2-18-191-186-71.us-east-2.compute.amazonaws.com:5000
```

You will see console logs like this
```
$ node client http://ec2-18-191-186-71.us-east-2.compute.amazonaws.com:5000
Price data is generating at every 10000 milliseconds
Established connection!
Publish 4.20 at Sat Sep 22 2018 06:24:39 GMT+0800 (HKT)
Publish 1.29 at Sat Sep 22 2018 06:24:49 GMT+0800 (HKT)
Publish 2.56 at Sat Sep 22 2018 06:24:59 GMT+0800 (HKT)
Publish 1.76 at Sat Sep 22 2018 06:25:09 GMT+0800 (HKT)
Publish 5.74 at Sat Sep 22 2018 06:25:19 GMT+0800 (HKT)
Publish 8.23 at Sat Sep 22 2018 06:25:29 GMT+0800 (HKT)
Publish 6.08 at Sat Sep 22 2018 06:25:39 GMT+0800 (HKT)
```


To test if Price Server on AWS is up, hit this URL
```
http://ec2-18-191-186-71.us-east-2.compute.amazonaws.com:5000/latestAveragePrice
```

And you will get a response like this if it is available
```
{
    "priceServerStatus": "ok"
}
```

By default, data is generated every 10 seconds, you may override by passing the second parameter, in this example, 300 milliseconds

```
node client http://localhost:5000 300
```










