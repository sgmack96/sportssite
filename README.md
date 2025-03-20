I wanted to create a website using Cloudflare services.

Here is the overall first iteration whiteboard of the site.

Flow Diagram Description
User Accesses Website

URL: steviewondermack.us/
Condition: User is not logged in.
Action: Redirect to the home page displaying general NBA news.
Feature: Log in link available.
Authentication Flow

URL: /auth
Action: Redirect to Cloudflare Worker for authentication.
Options: Log in or sign up.
Sign Up Process: User selects their favorite NBA team.
Storage: Favorite team stored in Cloudflare KV as user_id: favorite_team.
Post-Login Redirect

URL: /home
Tabs:
Favorite Team News: Prepopulated with news from the user's favorite team.
General NBA News: Displays general NBA news.
Betting Service

URL: /betting
Options:
Select Team: Displays the selected team's last 10 games, including their record and record against betting spreads.
League Data: Displays data from the last 10 games for the entire league, ranking teams based on their records against the spread.
Detailed Flow
Home Page (Not Logged In)

URL: steviewondermack.us/
Content: General NBA news.
Action: User clicks on log in link.
Authentication Page

URL: /auth
Content: Cloudflare Worker authentication.
Action: User logs in or signs up.
Sign Up: User selects favorite NBA team.
Storage: Favorite team stored in Cloudflare KV.
Home Page (Logged In)

URL: /home
Tabs:
Favorite Team News: News from user's favorite team.
General NBA News: General NBA news.
Betting Service Page

URL: /betting
Options:
Select Team: Displays last 10 games of the selected team, including record and betting spread record.
League Data: Displays last 10 games data for the entire league, ranking teams based on betting spread records.![flow](https://github.com/user-attachments/assets/7e003c2c-48b3-49a4-abc8-974413e78c2f)

