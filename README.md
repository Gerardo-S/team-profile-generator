# Team-Profile-Generator

## Description
This app is a Node CLI that generates an HTML webpage displaying summaries for team members in a software engineering team. Application prompts a Manager or User for information about team members. Team members consist of either Engineer's or Intern's including the Manager each with a unique set of basic information. The Engineer generated HTML will display their ID, Email, and GitHub link to profile. The Intern generated HTML will display their ID, Email, and designated school of attendance. Lastly, the Manager generated HTML includes their ID, Email, and Office number. 

## Usage and Instructions
1. Before launching application ensure npm init jason packages have been generated
2. Launch terminal or command line interface and install inquirer package
3. Invoke application with the command 
````node app.js````
then follow command prompts with necessary responses as shown in the animated gif below. 

### Generating Manager Profile
<img src="Assets\Images\Manager.gif" alt="Generated Manager Profile">

### Generating Engineer Profile
<img src="Assets\Images\Engineer.gif" alt="Generated Engineer Profile">

### Generating Intern Profile
<img src="Assets\Images\Intern.gif" alt="Generated Intern Profile">

### Webpage Image
<img src="Assets\Images\generatedTeam.PNG" alt="Generated Webpage">

## Tests
Tests using jest were used to provide a TDD approach to application. To conduct test run ````npm install jest````. Open profile tests located in test folder and run ````npm run test````.

### Links:
<a href="https://drive.google.com/file/d/1liXLyua2taILBlnrcB2dyFYafmFHDlmL/view">Click here for a video walk through</a><br>
Repo: <a href="https://github.com/Gerardo-S/team-profile-generator">https://github.com/Gerardo-S/team-profile-generator </a><br>