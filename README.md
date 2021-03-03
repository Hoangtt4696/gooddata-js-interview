## GoodData Gross Profit

### Introduction

Project is to enhance the application using the [GoodData.UI](https://sdk.gooddata.com/gooddata-ui/).

### Prerequisites
Have `node.js` and `yarn` installed in your development environment.
  * If you do not have these tools installed, you can get them from https://nodejs.org/ and https://yarnpkg.com/ respectively.

### Initialization

1. Make a [fork of this repository and clone it](https://help.github.com/en/articles/fork-a-repo).
2. Run `cd gooddata-js-interview`.
3. Run `yarn install`.
4. Run `yarn start`.
5. Visit https://localhost:3000/account.html, and log in using your GoodData account credentials.
   - If you do not have a GoodData account yet, [create one](https://gooddata-examples.herokuapp.com/registration). After creating a GoodData account, you will be redirected to our GoodData.UI Live Examples. Feel free to get inspired there, but its not related to this homework.
6. Visit https://localhost:3000/, and make sure that two column charts are loaded like this:

### GoodData.UI Documentation

[GoodData.UI Documentation](https://sdk.gooddata.com/gooddata-ui/docs/about_gooddataui.html)

### Troubleshooting

###### Cloning the repo fails
* If cloning using SSH fails, try HTTPS instead: `git clone https://github.com/Hoangtt4696/gooddata-js-interview.git`.

###### Server https://developer.na.gooddata.com/ seems to be down.
* If you decided to work on this homework during the weekend, it is possible our platform may be down for several hours due to maintenance (typically on Saturdays). If https://developer.na.gooddata.com/ is down, try again in an hour or two. If you need more time to work on this homework, let us know.

###### Charts do not get loaded.
* Most likely, you are not logged in correctly. Check the Network tab in Google Chrome DevTools. If you see `HTTP 401 ERROR`, visit https://localhost:3000/account.html and log in properly.

##### You get the "Your connection is not private" error in Chrome
* To work around this, enable the [chrome://flags/#allow-insecure-localhost](chrome://flags/#allow-insecure-localhost) flag while working on the assignment. 

###### Anything else?
* Contact your recruiter for further information.

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
