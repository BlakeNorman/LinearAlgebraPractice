import { useState, useEffect } from "react";

import Quiz from "./Quiz";
import TopicCheckbox from "./TopicCheckbox";
import Register from "./User/Register";
import Login from "./User/Login";

import syncQuestions from "./api/questions";
import { getAccessToken, logoutUser } from "./api/auth";
import { resetTopicMastery } from "./api/topics";
import { topicIDs } from "./TopicData";

export default function App() {
  const [authenticated, setAuthenticated] = useState(getAccessToken() !== null);

  const [showRegister, setShowRegister] = useState(false);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(false);

  function handleLogout() {
    logoutUser();
    setAuthenticated(false);
    setSelected([]);
    setPage(false);
  }

  async function handleResetMastery() {
    const confirmed = window.confirm(`Reset mastery for selected topics?`);

    if (!confirmed) {
      return;
    }

    try {
      await Promise.all(selected.map(topic => resetTopicMastery(topicIDs[topic])));
      alert("Mastery reset");
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    syncQuestions().catch(error => {
      console.error("Failed to sync questions", error);
    });
  }, []);

  if (!authenticated) {
    if (showRegister) {
      return (
        <div>
          <Register onRegistered={() => setShowRegister(false)} />

          <button className="basic-button" onClick={() => setShowRegister(false)}>
            Back to Login
          </button>
        </div>
      );
    }

    return (
      <div>
        <Login onLoggedIn={() => setAuthenticated(true)} />
        <button className="basic-button" onClick={() => setShowRegister(true)}>
          Create Account
        </button>
      </div>
    );
  }

  if (page === true) {
    return (
      <Quiz topics={selected} backToTopicSelection={() => setPage(false)} />
    );
  }

  return (
    <div>
      <h1>Select topic(s) from the following:</h1>
      <div className="topic-list">
        <TopicCheckbox
          topic={"Systems of Linear Equations"}
          selected={selected}
          setSelected={setSelected}
        />
        <TopicCheckbox
          topic={"Subspaces"}
          selected={selected}
          setSelected={setSelected}
        />
        <TopicCheckbox
          topic={"Linear Transformations"}
          selected={selected}
          setSelected={setSelected}
        />
        <TopicCheckbox
          topic={"Determinants"}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      {selected.length > 0 && (
        <>
          <button className="basic-button" onClick={() => setPage(true)}>
            Begin Quiz
          </button>
          <button className="basic-button" onClick={handleResetMastery}>
            Reset Mastery
          </button>
        </>
      )}
      <button className="basic-button" onClick={handleLogout}>
        Log Out
      </button>
    </div >
  );
}