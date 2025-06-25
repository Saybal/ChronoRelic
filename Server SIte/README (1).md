
# 🏺 ChronoRelic — The Artifact Tracker

ChronoRelic is a full-stack MERN (MongoDB, Express, React, Node.js) web application that allows users to explore, add, and manage historical artifacts in a beautiful and intuitive interface. 
It includes secure authentication, private dashboards, and thematic design inspired by aged manuscripts and ancient relics.



![ChronoRelic-Logo](https://i.ibb.co/mCgkskv7/Chat-GPT-Image-Jun-14-2025-05-52-56-PM.png)


## Features

- 🔐 Authentication using Firebase
- 🖼️ Add, Update, Delete Artifacts (private route)
- 🔍 Search any artifact easily from Search bar.
- 🧭 Timeline of Civilizations section
- 🏛️ Weekly Curator’s Pick with background stories
- ❤️ Like artifacts and save them to your favorites
- 📜 Aesthetic and accessible UI inspired by ancient texts



## Screenshots

![ChronoRelic Search Bar](https://i.ibb.co/HDz2bFsD/image.png)
![ChronoRelic Authentication](https://i.ibb.co/9k4mXhf6/image.png)
![ChronoRelic Features Artifacts](https://i.ibb.co/B5Lvy4m5/image.png)
![ChronoRelic Timeline of Civilizations](https://i.ibb.co/Zpzpyw0w/image.png)
![ChronoRelic Weekly Curot's pick](https://i.ibb.co/SDCzwHWq/image.png)
![ChronoRelic Add Artifact](https://i.ibb.co/dxYBXVd/image.png)
![ChronoRelic My Artifacts](https://i.ibb.co/ynqFdNYs/image.png)
![ChronoRelic All Artifacts](https://i.ibb.co/8n6Zm2Td/image.png)


## Website Demo

[Visit Live Site »](https://assignment-11-15175.web.app/)


## Tech Stack

**Client:** React, Firebase Authentication, TailwindCSS, DaisyUI, Material CSS, SweetAlert, Lottie React, React-icons, Framer Motion. 

**Server:** Node, Express, MongoDB, Firebase JWT Token.


## Project Structure

- client/
  - Layouts
    - AutoScrolling.jsx
    - RootLayouts.jsx
  - module/
    - Authentication/
    - Pages/
      - Common/
        - All Artifacts/
        - Artifacts Details/
      - User Only/
        - Artifact Posting Form/
        - Liked Artifacts/
        - My Artifacts/
        - Artifact Update Page/

      
  - Routes/
    - Private Routes/
    - Routes.jsx
  - components/
    - Shared/
      - Home Page
        - Home Page Banner Slider/
        - Search Bar/
        - Featured Artifacts/
        - Timeline Section/
        - Curator's Pick/
      - Navbar/
      - Footer/
      - Loaders/
      - Error Page/
      - Hooks/
        - AuthProvider.jsx
        - AxiosBaseToken.jsx
  
- server/
  - .env
  - gitignore
  - index.js

- README.md (Added With client site)



## ⬇️ Installation

Run these commands at your cmd/terminal to clone my Project.. 

Client Site:
```bash
  git clone https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-Saybal.git
```

Server Site:
```bash
  git clone https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-Saybal.git
```

Install my-project with npm

```bash
  ## Open Your Folder
  
  npm create vite@latest my-project-name -- --template vue
  cd my-project
  npm Install
  npm run dev
```
You can read the document to install react in your prpoject
[React-vite](https://vite.dev/guide/)



## 🚀 Install Dependencies
🔥 Firebase Authentication
```bash
npm install firebase
```
For creating a firebase project visit -> [Firebase Project](https://console.firebase.google.com/)

🎨 TailwindCSS 
```bash
npm install tailwindcss @tailwindcss/vite
```
In vite.config.js

```bash
  import { defineConfig } from 'vite'
  import tailwindcss from '@tailwindcss/vite'
    export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    })
```

In index.css
```bash
@import "tailwindcss";
```
💎 DaisyUI (TailwindCSS Plugin)
```bash
npm i -D daisyui@latest
```
In index.css
```bash
@plugin "daisyui";
```

🧱 Material CSS (Materialize)

```bash
npm install materialize-css
```
🧊 SweetAlert2
```bash
npm install sweetalert2
```
🎞️ Lottie for React
```bash
npm install lottie-react
```

⭐ React Icons
```bash
npm install react-icons
```
🌀 Framer Motion
```bash
npm install framer-motion
```
⚙️ Start the Development Server
```bash
npm init -y
npm i express cors mongodb dotenv
```
Must check this link -> [MongoDB CRUD Operations](https://www.mongodb.com/docs/manual/crud/)
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_USER` = your_db_user

`DB_PASS` = your_db_pass


## Deployment

To deploy this project run

Client Site:

```bash
npm install -g firebase-tools // One time only
firebase login
firebase init

// Press Space Key to select an option
? Which Firebase features do you want to set up for this directory? 
 ◯ Firestore: Configure a database for your project
 ◯ Functions: Configure Cloud Functions for Firebase
❯◉ Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
 ◯ Storage: Configure a file storage bucket for your project
 ◯ Emulators: Set up local emulators for Firebase features
 ◯ Remote Config: Configure Remote Config for A/B testing and feature delivery

? Please select an option:
❯ Use an existing project //Select this
  Create a new project
  Add Firebase to an existing Google Cloud project
  Don't set up a default project

? Select a default Firebase project for this directory:
❯ your-project-id (Your Firebase Project Name)

? What do you want to use as your public directory? 
> dist

? Configure as a single-page app (rewrite all urls to /index.html)? 
> Yes

? Set up automatic builds and deploys with GitHub? (y/N) 
> N

? File dist/index.html already exists. Overwrite? 
> No

npm run build
firebase deploy

```

Server SIte:
```bash
npm install -g vercel
vercel login

```
Must add the vercel.json file inn your server site. You will get this file in my [server repository](https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-Saybal)

```bash
? Set up and deploy “your-folder-name”? [Y/n] 
> Y

? Which scope should it belong to? 
> your-username (personal)

? Link to existing project? [y/N] 
> N

? What’s your project’s name? 
> your-server-name

? In which directory is your code located? (default is .)
> .
```
Youy may see this message after building your server site:

![vercel](https://i.ibb.co/ffGmS5d/image.png)

Now, follow these screenshots:

1. Open your prpoject in vercel and then select the "Settings" option.

![Settings](https://i.ibb.co/4R8txbSW/image.png)

2. Select Environment Variable

![Environment](https://i.ibb.co/ccPpVt7m/image.png)

3. Now paste your environment variables here

![Variables](https://i.ibb.co/yc4kV1Y2/image.png)

After doing all these stuffs you may see that message again after running "vercel --prod" but do not worry! Your project will run smoothly 🤞🤞
### ⚡ Developed by [Saybal Roy](https://github.com/Saybal)
Inspired by history, designed with care.

