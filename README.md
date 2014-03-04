# tol-uitest
A collection of tests for the TraderOnline websites.

## Requirements
These tests require `CasperJS` and `PhantomJS` which can be installed via:

```sh
npm install
```

## Executing the Tests
Once the dependencies are installed you can execute tests for all the sites via:

```sh
npm start
```

or a single site via:

```sh
npm run recmobile-cycle
```

Optionally, you can change the site domain to hit with environment variables `RECMOBILE_CYCLE_DOMAIN` or `COMMOBILE_TRUCK_DOMAIN` like below:

```sh
RECMOBILE_CYCLE_DOMAIN='http://localhost:8005' npm run recmobile-cycle
```


## Contributing
All code contributions - including those of people having commit access - must go through a pull request and approved by a core developer before being merged. This is to ensure proper review of the changes.

Fork the project, create a feature branch, and send us a pull request.
