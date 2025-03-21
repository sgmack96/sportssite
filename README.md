I wanted to create a website using Cloudflare services.

Here is the overall first iteration whiteboard of the site.

![flow](https://github.com/user-attachments/assets/7e003c2c-48b3-49a4-abc8-974413e78c2f)

Landing Page:

- Setting up the landing page. Used an EC2 instance that pushes all code updates to github. Set up an landing page with basic html, css, express frontend. Was having trouble getting the API call to get NBA scores to appear on the front page of the landing site. The fetchScore.js function was working on my EC2 instance but it was not translating to the browser site. Turns out that the axios module works natively with node.js environments after download but extra steps are needed to work on browser. I needed to install Webpack with axios, and babel-loader to handle the modern JS features. I created a webpack.config.js file to specify the entry point fo the fetchScores.js scirpt and the output file bundle.js, which is now referenced in the html.
- Couldn't for the life of me figure out why my fetchScores.js outputs of the ESPN scoreboards weren't pushing to the browser. I added console.log checkpoints to the .js code but that was not appearing in the output browser, just the scores. Turns out since my html referenced the bundle.js function I needed to rerun the npx webpack so that it can rebundle the fetchScores.js as the updated version. To which I was able to see my console.log checkpoints in the browser dev console but also the scoreboard appeared in my html on the loading phase. W.

Auth server:
- created all functions under steviewondermack-site/steviewondermack-auth
- changed href in landing page index.html to link to login.html in the /auth folder
