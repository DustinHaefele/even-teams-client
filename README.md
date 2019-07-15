
# Even-Teams

This is a web app that is designed to be used by anyone who plays pick-up team sports or games.  It allows the user to enter all of the players who are playing and it will split them into two even teams based on the skill levels entered by the user.

## Getting Started

To get this project up and running on your machine to do any testing or development just pull it down to your machine.  It is connected to a server and database that is hosted on heroku. Source code for the server can be found here. (https://github.com/DustinHaefele/even-teams-server).  A development version of this page connected to the server here (https://even-teams.now.sh/) You can play around with it by logging in with UserName: HarryPotter Password: Password1!


### Installing

All the dependencies are listed in the package.json.  

To install them just run.  

```
npm install
```

## Testing

This app has a smoke test written for each component and page. 

To run these tests just run

```
npm test
```


## Built With

* [React](https://reactjs.org/)
* [Create React App](https://github.com/facebook/create-react-app).
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
* [react-fontawesome](https://github.com/FortAwesome/react-fontawesome)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)

## Application Layout

When you navigate to the page you will find youself at this landing page.

![image](https://user-images.githubusercontent.com/45601251/61236302-eb371f00-a6f4-11e9-8273-11a03ff5de0d.png)

From there you can either login or register by clicking the links and filling out the form.  After you are logged in it will take you to your groups page.

![image](https://user-images.githubusercontent.com/45601251/61236505-64cf0d00-a6f5-11e9-9499-ff94964739a5.png)

Here you can either select a group you created before or create a new group.  Once you have selected a group it will take you to that group page.

![image](https://user-images.githubusercontent.com/45601251/61236630-b081b680-a6f5-11e9-8648-e168d81633c1.png)

On the group page you can add as many players as you want and give them a skill level and once you are ready you can click make even teams and the Even-Teams Algorithm will do it's work to make the most even teams mathmatically possible.

![image](https://user-images.githubusercontent.com/45601251/61236845-3bfb4780-a6f6-11e9-9971-384c217f2569.png)

## Authors

* **Dustin Haefele**

## Acknowledgments

* Thanks to my Wednesday Night Volleyball people, and our inability to choose teams for inspiring the idea!

