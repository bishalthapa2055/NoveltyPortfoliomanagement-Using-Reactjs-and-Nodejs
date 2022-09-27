import React from "react";
// import "./Aboutme.css";
// import "../Card/Card.css";
import Aboutme1 from "./Aboutme1";
import htmll from "../../image/htmll.jpg";
import css from "../../image/css1.jpg";
import react from "../../image/react.jpg";
import node from "../../image/node.jpg";
import mongo from "../../image/mongo.jpg";
import mysql from "../../image/mysql.jpg";
import python from "../../image/python.jpg";
import git from "../../image/git.jpg";
const Aboutme = () => {
  return (
    <>
      <main>
        <section class="card-row">
          <Aboutme1
            img={htmll}
            title="HTML"
            desc="The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
          />
          <Aboutme1
            img={css}
            title="CSS"
            desc="Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML ."
          />
          <Aboutme1
            img={react}
            title="REACT JS"
            desc="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components."
          />
          <Aboutme1
            img={node}
            title="NODE JS"
            desc="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser."
          />
          <Aboutme1
            img={mongo}
            title="MONGO DB"
            desc="MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas."
          />
          <Aboutme1
            img={mysql}
            title="MYSQL"
            desc="MySQL is a widely used relational database management system (RDBMS),is free and open-source and is ideal for both small and large applications. "
          />
          <Aboutme1
            img={python}
            title="PYTHON"
            desc="Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation."
          />
          <Aboutme1
            img={git}
            title="GITHUB"
            desc="GitHub, Inc., is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project."
          />
        </section>
      </main>
    </>
  );
};
export default Aboutme;
