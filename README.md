<h1 align="center">E-Sports Duo</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
</p>

<br>


## 🧑‍💻 Project

This project helps gamers to find their duo before joining a game session.

User can list a set of games and choose one to publish an ad for. Other players can see the published ads and choose which one to connect to.

Once chosen, their discord ids become available for each other.

<br>

<p align="center">
    <strong>Web Client &nbsp; (ReactJS)</strong>
</p>
<p align="center">
    <img src="./images-demo/webclient.png" height="300"/>
    <br>
</p>
<p align="center">
    <b>Mobile Client &nbsp; (React Native)</b>
</p>
<p align="center">
    <img src="./images-demo/mobileclient-1.jpeg" height="300"/>
    <img src="./images-demo/mobileclient-3.jpeg" height="300"/>
    <img src="./images-demo/mobileclient-2.jpeg" height="300"/>
</p>

<br>

## ✨ Technologies
This project was developed in React using the following technologies

- [Node.js + Express](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/)
- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)

<br>

## 🚀 How to run:

- Clone this repository
- to start server
    - Navigate to backend folder `cd backend`
    - Run `npm install`
    - Run `npx prisma migrate dev` to create the database tables.
    - Run `npm run dev` to start the the server.
- to start webclient
    - Navigate to webclient folder `cd web-client`
    - Run `npm install`
    - Run `npm run dev`
- to start mobile client
    - Navigate to webclient folder `cd mobile-client`
    - Run `npm install`
    - Run `expo start`

All set! Both clients will communicate to the same backend.

The <strong>webclient</strong> is responsible to publish ads.<br>
The <strong>mobileclient</strong> is responsible to connect to an ad.
