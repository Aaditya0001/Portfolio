const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Aaditya0001',
  title: 'AM',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aaditya Mehta',
  role: 'MS in Information Science @ University of Wisconsin - Madison',
  description:
    ' A Data Enthusiast who loves to solve complex problems with analytics, machine learning, and scalable data solutions. Dedicated to continuous learning, I am focused on staying ahead of industry trends to innovate and deliver impactful results.',
  resume: 'https://drive.google.com/file/d/1fcTF_wDXxf1tVfqrx0wcQbJN4FbaCSYv/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/aadityamehta01/',
    github: 'https://github.com/Aaditya0001',
  },
}

const education = [
  {
    institution: 'University of Wisconsin - Madison',
    degree: 'MS in Information Science',
    date: 'Sep 2023 - May 2025',
    gpa: 'GPA: 3.9/4.0',
  },
  {
    institution: 'University of Mumbai',
    degree: 'Electronics and Telecommunication Engineering (Minor in Data Science)',
    date: 'Sep 2019 - May 2023',
    gpa: 'GPA: 3.7/4.0',
  },
];

const experience = [
  {
    company: 'Baker’s Nest Private Limited',
    description: 'Worked as a Data Scientist on data cleaning, dashboard creation, and A/B testing to enhance data accessibility, optimize marketing strategies, and automate business processes.',
    location: 'Mumbai, India',
    date: 'Nov 2022 - Aug 2023',
  },
  {
    company: 'The Sparks Foundation',
    description: 'Worked as a Data Analytics Intern to analyze large datasets, developed real-time dashboards, and led initiatives to improve data accessibility, operational efficiency, and database integrity.',
    location: 'Singapore',
    date: 'Sep 2022 - Oct 2022',
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Data Science Job Salary Insights Unveiled through Tableau',
    description:
      'A comprehensive visualization project analyzing data science job salary trends across different roles, experience levels, and countries using Tableau. This project reveals key insights into compensation patterns within the data science industry, highlighting factors that influence salary distributions in this rapidly evolving field.',
    stack: ['Python', 'MySQL', 'Tableau','Scikit-Learn'],
    sourceCode: 'https://drive.google.com/file/d/1jeD_p8fOrK052JLoLkLERbgXppv5KNU-/view?usp=drive_link',
    livePreview: 'https://drive.google.com/file/d/1jeD_p8fOrK052JLoLkLERbgXppv5KNU-/view?usp=drive_link',
  },
  {
    name: 'Parkinson’s Disease Prediction using Gait Data Analysis',
    description:
      'A diagnostic system for Parkinsons disease detection through gait data analysis, built using Python and SQL. The project included creating comprehensive Tableau dashboards and statistical reports to enhance early detection capabilities for medical professionals.',
    stack: ['Python', 'MySQL', 'Tableau','Machine Learning'],
    sourceCode: 'https://drive.google.com/file/d/1mDIeDXtzKT6AzDAJy03H--82mSP7ngy4/view?usp=sharing',
    livePreview: 'https://drive.google.com/file/d/1mDIeDXtzKT6AzDAJy03H--82mSP7ngy4/view?usp=sharing',
  },
  {
    name: 'Airplane Price Forecasting using Machine Learning',
    description:
      'A machine learning solution for predicting airplane ticket prices using Random Forest algorithms. The project involved comprehensive data preprocessing to enhance data integrity and building an accurate predictive model to estimate airfare costs.',
    stack: ['Python', 'Predictive Modelling', 'Data Pipeline','Machine Learning', 'Tableau'],
    sourceCode: 'https://drive.google.com/file/d/1sL7tA-Uzl6AP3e2-uHvIL3s_mdC6QXsF/view?usp=sharing',
    livePreview: 'https://drive.google.com/file/d/1sL7tA-Uzl6AP3e2-uHvIL3s_mdC6QXsF/view?usp=sharing',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'SQL',
  'Tableau Certified',
  'Machine Learning',
  'Amazon Web Services(AWS) Certified',
  'Database Management',
  'R',
  'Scikit-Learn',
  'Pytorch',
  'Seaborn',
  'Snowflake',
  'PySpark',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'aadityam011@gmail.com',
}

export { header, about, education, experience, projects, skills, contact }
