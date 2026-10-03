from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import uvicorn

from backend.web import topics, questions, attempts, user
 
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(topics.router)
app.include_router(questions.router)
app.include_router(attempts.router)
app.include_router(user.router)

if __name__ == "__main__":
    uvicorn.run("main:app", reload=True) 