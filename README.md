# Linear Algebra Practice

A full-stack web application for practicing linear algebra through interactive quizzes with topic-based mastery tracking and multiple question formats. 

Mathematical expressions are rendered using KaTeX.

## Features

- User registration and login
- JWT-based authentication
- Topic-based question selection
- Multiple question types:
    - Multiple choice
    - True/False
    - Select all that apply
- Topic mastery tracking
- Question attempt tracking
- Automatic progression through quiz questions
- Reset mastery for selected topics
- Mathematical notation rendered with KaTeX
- REST API built with FastAPI
- SQLite database for persistent data storage
- Automated backend tests using pytest

## Technologies

Frontend

- React
- Vite
- JavaScript
- React KaTeX
- KaTeX
- CSS

Backend

- Python
- FastAPI
- SQLite
- Pydantic
- JWT authentication
- pytest

## Structure

```text
LinearAlgebraPracticeProblems/ 
├── backend/ 
│ ├── data/
│ │ ├── attempts.py 
│ │ ├── create_tables.py 
│ │ ├── init_db.py
│ │ ├── init.py 
│ │ ├── questions.py 
│ │ ├── topics.py 
│ │ └── user.py 
│ ├── models/ 
│ │ ├── attempts.py 
│ │ ├── errors.py 
│ │ ├── questions.py 
│ │ ├── topics.py 
│ │ └── user.py 
│ ├── service/ 
│ │ ├── attempts.py 
│ │ ├── questions.py 
│ │ ├── topics.py
│ │ └── user.py 
│ ├── tests/ 
│ │ ├── data/
│ │ │ ├── test_attempts_data.py 
│ │ │ ├── test_questions_data.py
│ │ │ └── test_topics_data.py 
│ │ ├── service/
│ │ │ ├── test_attempts_service.py 
│ │ │ ├── test_questions_service.py
│ │ │ └── test_topics_service.py 
│ │ └── web/ 
│ │ │ ├── test_attempts_web.py 
│ │ │ ├── test_questions_web.py
│ │ │ └── test_topics_web.py
│ ├── web/ 
│ │ ├── attempts.py 
│ │ ├── questions.py 
│ │ ├── topics.py
│ │ └── user.py 
│ └── main.py 
├── src/ 
│ ├── api/ 
│ │ ├── attempts.js 
│ │ ├── auth.js 
│ │ ├── questions.js 
│ │ └── topics.js 
│ ├── QuestionFunctions/ 
│ │ ├── MultipleChoiceQuestion.jsx 
│ │ ├── SelectAllQuestion.jsx 
│ │ ├── SelectQuestionType.jsx 
│ │ └── TrueFalseQuestion.jsx 
│ ├── Questions/ 
│ │ ├── Determinants.jsx 
│ │ ├── LinearTransformations.jsx 
│ │ ├── Subspaces.jsx 
│ │ └── SystemsOfLinearEquations.jsx 
│ ├── User/ 
│ │ ├── Login.jsx 
│ │ └── Register.jsx 
│ ├── App.jsx 
│ ├── index.css 
│ ├── main.jsx 
│ ├── Quiz.jsx 
│ ├── style.css 
│ ├── TopicCheckbox.jsx 
│ └── TopicData.js 
├── eslint.config.js
├── index.html 
├── package-lock.json 
├── package.json 
├── README.md 
└── vite.config.js
```

## Linear Algebra Topics

The current question bank includes the topics:

- Systems of Linear Equations
- Subspaces
- Linear Transformations
- Determinants

The question bank can be expanded by adding additional questions and topics.

## Question Types

Multiple Choice

Users select one answer from several choices.

True/False

Users determine whether a statement is always true or sometimes false.

Select All

Users select multiple answers from several choices.

## Mastery Tracking

The application tracks a user's performance by topic.

Correct answers increase mastery, while incorrect answers can reduce mastery.

When mastery of selected topics reaches 100%, the quiz ends. 

Users can select individual topics and reset their mastery when desired.

## Authentication

The backend uses JWT-based authentication.

After logging in, the frontend stores the authentication token and includes it in requests to protected API endpoints using the Authorization header.

Protected functionality includes user-specific quiz data and attempt tracking.

## Mathematical Notation

Mathematical expressions are rendered using KaTeX through react-katex.

For example:

<InlineMath math="\mathbb{R}^{n}" />

and display mathematics can be rendered with:

<BlockMath math="
    \begin{aligned}
    Ax &= b
    \end{aligned}
" />

This allows questions involving matrices, vectors, systems of equations, transformations, determinants, and other mathematical notation to be displayed cleanly in the browser.

## Running the Frontend

Clone the repository and navigate to the project directory:

git clone <repository-url>
cd LinearAlgebraPracticeProblems

Install the frontend dependencies:
npm install

Start the Vite development server:
npm run dev

The development server will provide a local URL, typically:
http://localhost:5173

## Running the Backend

Create and activate a Python virtual environment:
python -m venv .venv

On Windows PowerShell:
.\.venv\Scripts\Activate.ps1

Install the Python dependencies:
pip install -r requirements.txt

Create SQLite tables:
py -m backend.data.init_db

Start the FastAPI development server:
uvicorn backend.main:app --reload

The FastAPI application will typically be available at:
http://127.0.0.1:8000

FastAPI also provides interactive API documentation at:
http://127.0.0.1:8000/docs

## Running Tests

Backend tests are written using pytest.

From the project root, run:
pytest -v

To run a specific test file:
pytest -v path/to/test_file.py

The tests cover functionality such as database operations, users, questions, topics, and quiz attempts.

## API

The backend provides REST API endpoints for functionality such as:
- User registration
- User authentication
- Topic information
- Question information
- Quiz attempts
- User-specific data

The automatically generated FastAPI documentation can be used to explore the available endpoints and their request/response schemas:
http://127.0.0.1:8000/docs

## Database

The application uses SQLite for persistent storage.

The database contains information related to:
- Users
- Topics
- Questions
- Quiz attempts
- Mastery information

Foreign-key constraints are used to maintain relationships between related records.

## Future Improvements

Potential future additions include:
- Additional linear algebra topics
- A larger question bank
- More sophisticated mastery algorithms
- Difficulty levels
- Detailed explanations of solutions
- Performance analytics