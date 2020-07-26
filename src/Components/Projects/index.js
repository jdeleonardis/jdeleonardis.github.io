import React from "react";
import "../../Styles/style.css";
import { RowOrCol } from "../Grid";

function Projects() {
  return (
    <div>
        <div className="card m-3">
            <RowOrCol value="row no-gutters align-items-center">
                <RowOrCol value="col-md-7">
                    <div className="card-body">
                        <h3 className="card-title">Student Management System For Online Learning (SMSOL)</h3>
                        <p className="card-text">The Student Management System For Online Learning app is the second group project completed at the Full Stack Bootcamp at UNC.  This application
                        allows a teacher to schedule a time for online tutoring with a student.  My responsibilities included the calendar functionality, including a modal that allows users
                        to update events; both sequelize models;  and all of the API routes used to insert, update, and delete calendar events and students.
                        </p>
                        <h4 className="card-title">Technologies used:</h4>
                        <p className="card-text technologies">FullCalendar, Sequelize, MySql, Express, Express-Handlebars, Node.js, Moment.js, Bootstrap, jQuery, Javascript, HTML, CSS
                        </p>
                        <a href="https://github.com/jdeleonardis/project2-smsol" target="_blank" rel="noopener noreferrer"><p className="card-text linkedWork">GitHub Repository</p></a>
                        <a href="https://jdeleonardis-project2-smsol.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p className="card-text linkedWork">Deployed Application</p></a>
                    </div>
                </RowOrCol>
                <RowOrCol value="col-md-5">
                    <a href="https://jdeleonardis-project2-smsol.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={require('../../Images/smsol.png')} className="card-img border shadow" alt="SMSOL"></img></a>
                </RowOrCol>        
            </RowOrCol>
        </div>

        <div className="card m-3">
            <RowOrCol value="row no-gutters align-items-center">
                <RowOrCol value="col-md-7">
                    <div className="card-body">
                        <h3 className="card-title">Eat Da Burger</h3>
                        <p className="card-text">At first glance, the Eat Da Burger app appears to be very simple.  You enter the name of a burger you want to eat, and save it.  Then,
                        you click the 'Devour It' button, and the burger moves to the 'Eaten' side of the page.  However, the deployed app makes use of several learned concepts,
                        including restful APIs (working with a mysql database), express handlebars, object relational mapper (ORM), and the model view controller (MVC) paradigm.
                        </p>
                        <h4 className="card-title">Technologies used:</h4>
                        <p className="card-text technologies">MySql, Express, Express-Handlebars, Node.js, jQuery, Javascript, HTML, CSS
                        </p>            
                        <a href="https://github.com/jdeleonardis/burger" target="_blank" rel="noopener noreferrer"><p className="card-text linkedWork">GitHub Repository</p></a>
                        <a href="https://jdeleonardis-burger-app.herokuapp.com/" target="_blank" rel="noopener noreferrer"><p className="card-text linkedWork">Deployed Application</p></a>
                    </div>
                </RowOrCol>
                <RowOrCol value="col-md-5">
                    <a href="https://jdeleonardis-burger-app.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={require('../../Images/Eat Da Burger.png')} className="card-img border shadow" alt="Eat Da Burger"></img></a>
                </RowOrCol>        
            </RowOrCol>
        </div>

        <div className="card m-3">
            <RowOrCol value="row no-gutters align-items-center">
                <RowOrCol value="col-md-7">
                    <div className="card-body">
                        <h3 className="card-title">Pantry Buddy</h3>
                        <p className="card-text">The Pantry Buddy app is the first group project completed at the Full Stack Bootcamp at UNC.  This application required selecting a CSS 
                        framework we had not used in className (Bulma), two external API calls (Spoonacular and NutritionIX), and another API library (Twitter Typeahead).  The application
                        allows a user to select ingredients in their pantry, retrieve a list of recipes based on those ingredients, and view nutritional information when recipes are clicked.
                        </p>
                        <h4 className="card-title">Technologies used:</h4>
                        <p className="card-text technologies">Bulma, External APIs Spoonacular and NutritionIX, Twitter Typeahead, Bloodhound.js, jQuery, Javascript, HTML, CSS
                        </p>            
                        <a href="https://github.com/jdeleonardis/project_1_pantry_buddy" target="_blank" rel="noopener noreferrer"><p className="card-text linkedWork">GitHub Repository</p></a>
                        <a href="https://jdeleonardis.github.io/project_1_pantry_buddy/" target="_blank" rel="noopener noreferrer"><p className="card-text linkedWork">Deployed Application</p></a>
                    </div>
                </RowOrCol>
                <RowOrCol value="col-md-5">
                    <a href="https://jdeleonardis.github.io/project_1_pantry_buddy/" target="_blank" rel="noopener noreferrer"><img src={require('../../Images/pantrybuddy.png')} className="card-img border shadow" alt="Pantry Buddy"></img></a>
                </RowOrCol>        
            </RowOrCol>
        </div>

        <div className="card m-3">
            <RowOrCol value="row no-gutters align-items-center">
                <RowOrCol value="col-md-7">
                    <div className="card-body">
                        <h3 className="card-title">Weather Dashboard</h3>
                        <p className="card-text">This application allows a user to enter a city name.  When that city is entered, the current forecast is displayed, as well as the 5 day forecast.
                        Additionally, the history of cities selected is saved to local storage, and the last city selected is automatically retrieved.  The application calls two different
                        endpoints on a free weather API.
                        </p>
                        <h4 className="card-title">Technologies used:</h4>
                        <p className="card-text technologies">Bootstrap, External API Open Weather Map, jQuery, Javascript, HTML, CSS
                        </p>                        
                        <a href="https://github.com/jdeleonardis/homework_6_weather_dashboard" target="_blank" rel="noopener noreferrer"><p className="card-text linkedWork">GitHub Repository</p></a>
                        <a href="https://jdeleonardis.github.io/homework_6_weather_dashboard/" target="_blank" rel="noopener noreferrer"><p className="card-text linkedWork">Deployed Application</p></a>
                    </div>
                </RowOrCol>
                <RowOrCol value="col-md-5">
                    <a href="https://jdeleonardis.github.io/homework_6_weather_dashboard/" target="_blank" rel="noopener noreferrer"><img src={require('../../Images/Weather Dashboard.png')} className="card-img border shadow" alt="Weather Dashboard"></img></a>
                </RowOrCol>        
            </RowOrCol>
        </div> 

        <div className="card m-3">
            <RowOrCol value="row no-gutters align-items-center">
                <RowOrCol value="col-md-7">
                    <div className="card-body">
                        <h3 className="card-title">Day Planner</h3>
                        <p className="card-text">The Day Planner allows a user to save their day's tasks to local storage.  The time blocks are color coded based on the block being in the past,
                        present, or future.  The moment.js library is used to determine the current date and time.
                        </p>
                        <h4 className="card-title">Technologies used:</h4>
                        <p className="card-text technologies">Bootstrap, Moment.js, jQuery, Javascript, HTML, CSS
                        </p>            
                        <a href="https://github.com/jdeleonardis/homework_5_day_planner" target="_blank" rel="noopener noreferrer"><p className="card-text linkedWork">GitHub Repository</p></a>
                        <a href="https://jdeleonardis.github.io/homework_5_day_planner/" target="_blank" rel="noopener noreferrer"><p className="card-text linkedWork">Deployed Application</p></a>
                    </div>
                </RowOrCol>
                <RowOrCol value="col-md-5">
                    <a href="https://jdeleonardis.github.io/homework_5_day_planner/" target="_blank" rel="noopener noreferrer"><img src={require('../../Images/Day Planner.png')} className="card-img border shadow" alt="Day Planner"></img></a>
                </RowOrCol>        
            </RowOrCol>
        </div>

        <div className="card m-3">
            <RowOrCol value="row no-gutters align-items-center">
                <RowOrCol value="col-md-7">
                    <div className="card-body">
                        <h3 className="card-title">Employee Summary</h3>
                        <p className="card-text">The Employee Summary application is actually a template engine testing the use of node.js and the npm inquirer and jest modules.
                        In addition, the application tests the knowledge of classNamees, inheritance, and some debugging of previously existing code.
                        </p>
                        <h4 className="card-title">Technologies used:</h4>
                        <p className="card-text technologies">Bootstrap, npm inquirer, npm jest, jQuery, Javascript, HTML, CSS
                        </p>                       
                        <a href="https://github.com/jdeleonardis/homework_10_employee_summary" target="_blank" rel="noopener noreferrer"><p className="card-text linkedWork">GitHub Repository</p></a>
                        <a href="https://jdeleonardis.github.io/homework_10_employee_summary/" target="_blank" rel="noopener noreferrer"><p className="card-text linkedWork">Deployed Application</p></a>
                    </div>
                </RowOrCol>
                <RowOrCol value="col-md-5">
                    <a href="https://jdeleonardis.github.io/homework_10_employee_summary/" target="_blank"rel="noopener noreferrer"><img src={require('../../Images/Team Generator.png')} className="card-img border shadow" alt="Team Generator"></img></a>
                </RowOrCol>        
            </RowOrCol>
        </div>  
    </div>  
  );
}

export default Projects;