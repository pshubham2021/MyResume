const express = require('express');
const path = require('path');

const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Data for the resume
const data = {
  name: "Shubham Prajapati",
  location: "Salempur, Uttar Pradesh, India",
  email: "shubhampjpt87@gmail.com",
  phone: "+917081659903,+919795836609",
  linkedin: "http://linkedin.com/in/shubham-prajapati-abc2020",
  summary: `
    "Passionate B.Tech graduate in Information Technology (Batch 2022) with a strong foundation in Java, C, and Python. A skilled full-stack web developer equipped with expertise in Node.js, Express.js, React.js, EJS, MySQL, and MongoDB.
    Throughout my academic journey and practical experiences, I have honed my coding skills and gained valuable insights into software development. I thrive on tackling complex problems and enjoy transforming ideas into functional and user-friendly applications.
    Beyond technical prowess, I am known for my exceptional interpersonal and communication skills. I am adept at collaborating with diverse teams, effectively articulating ideas, and bridging the gap between technical and non-technical stakeholders. I strongly believe in the power of effective communication to drive successful projects and foster positive work environments.
    As a passionate professional, I am always eager to stay updated with the latest trends and advancements in the field of technology. I actively seek opportunities to expand my knowledge and embrace new technologies to deliver innovative solutions.
    I am currently seeking new challenges and opportunities where I can apply my technical expertise, passion, and communication skills to contribute to the success of projects and organizations. Feel free to connect with me to discuss collaboration or any exciting opportunities."
  `,
  experience: [
    {
      title: "Python Intern",
      company: "NATIONAL INSTITUTE OF ELECTRONICS & INFORMATION TECHNOLOGY (NIELIT)",
      date: "Jun 2019 - Jul 2019 (2 months)",
      description: "Developed Python skills and created a Student Management System mini project with add, view, search, and remove student functions.",
      link: "https://github.com/pshubham2021/StudentManagementSyatem-Python-",
    },
  ],
  education: {
    institute: "Greater Noida Institute of Technology (GNIOT)",
    degree: "B.Tech, Information Technology",
    duration: "2018 - 2022",
  },
  licenses: [
    "Programming Foundations: Fundamentals - LinkedIn",
    "Programming Foundations: Databases - LinkedIn",
    "HTML Essential Training - LinkedIn",
    "CSS Essential Training - LinkedIn",
    "Learning Java - LinkedIn",
    "Programming In Python - NIELIT",
    "Full Stack Web Development - Udemy"
  ],
  skills: [
    "Application Programming Interfaces (API)",
    "Tkinter (Python)",
    "MySQL, NoSQL (MongoDB)",
    "Object-Oriented Programming (OOP)",
    "C (Programming Language)",
    "Python (Programming Language)",
    "HTML5,CSS3,EJS",
    "Java (Programming Language)",
    "JavaFX (Java)",
    "Front-End Development(React.js)",
    "NodeJS, ReactJS, PostgreSQL, Web3 and DApps",
  ],
};

// Route for the home page
app.get('/', (req, res) => {
  res.render('index', { data });
});

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
