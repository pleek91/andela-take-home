# Take home for FE Specialist 
Demo: https://andela-candidate-pipeline.netlify.app/

## About

I created a simple candidate pipeline prototype visualization to show candidates as they progress through stages of interviews. 

Candidates can be filtered based on role, and each candate has an average score based on feedback from each interview. 

Clicking on a candidate opens a dialog with the candidates contact information, role they are applying for, and their average score.

I attempted to display good coding and organization patterns. Creating good typescript types where possible and making base components like the badge, card, and dialog components. 

I intended to show individual "Score Cards" for each candidate which would represent feedback from each interviewer. But for time I ended up just displaying the average score. 

## Stack
- Vue.js
- Tailwind
- Typescript
- Vite
- faker-js

## Production
Typescript, Vue, and Vite are production worthy choices. faker-js is used for seeding demo data. I chose to use Tailwind for rapid styling without building a design system or design tokens for a prototype.

Things I would add to build upon this prototype would be
- Ability to view, add, and edit score cards
- Ability to progress candidates through the pipeline
- Ability to search by candidate or role

## AI Usage
I used cursor's agent to help with some tailwind styling and leveraged its auto complete extensively.