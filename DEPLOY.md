# Deployment Instructions

This document provides instructions on how to deploy the application to a cloud provider.

## Heroku and Netlify

### Backend (Heroku)

1.  **Create a Heroku account:** If you don't have one, sign up at [heroku.com](https://heroku.com).
2.  **Install the Heroku CLI:** Follow the instructions at [devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli).
3.  **Log in to Heroku:** Open your terminal and run `heroku login`.
4.  **Create a new Heroku app:** Run `heroku create` in the `server` directory.
5.  **Set up MongoDB:**
    *   Add a MongoDB addon: `heroku addons:create mongolab:sandbox`
    *   Or, set the `ATLAS_URI` config var: `heroku config:set ATLAS_URI=<your-mongodb-uri>`
6.  **Push to Heroku:** Run `git subtree push --prefix server heroku main`.

### Frontend (Netlify)

1.  **Create a Netlify account:** If you don't have one, sign up at [netlify.com](https://netlify.com).
2.  **Install the Netlify CLI:** Run `npm install -g netlify-cli`.
3.  **Log in to Netlify:** Run `netlify login`.
4.  **Build the React app:** In the `client` directory, run `npm run build`.
5.  **Deploy to Netlify:** Run `netlify deploy --dir=client/build --prod`.
6.  **Set the API_URL environment variable:** In the Netlify UI, set the `API_URL` environment variable to the URL of your Heroku app.

## AWS Elastic Beanstalk

1.  **Create an AWS account:** If you don't have one, sign up at [aws.amazon.com](https://aws.amazon.com).
2.  **Install the AWS CLI and EB CLI:** Follow the instructions at [docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) and [docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html).
3.  **Configure the AWS CLI:** Run `aws configure`.
4.  **Create a new Elastic Beanstalk application:** Run `eb init -p "Node.js" --region <your-region> <your-app-name>`.
5.  **Set up a MongoDB database:**
    *   Use Amazon DocumentDB or set up a standalone MongoDB instance on an EC2 instance.
    *   Set the `ATLAS_URI` environment variable in the Elastic Beanstalk configuration.
6.  **Create a ZIP file of the application:**
    *   Create a `build` directory in the `client` directory: `npm run build --prefix client`
    *   Create a ZIP file containing the `server` directory and the `client/build` directory.
7.  **Deploy the ZIP file to Elastic Beanstalk:** Run `eb create <your-env-name>` and then `eb deploy`.
