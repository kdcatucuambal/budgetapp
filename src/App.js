import { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";
function App() {
  //define state
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, updateQuestion] = useState(true);
  const [spends, setSpends] = useState([]);
  const [spend, setSpend] = useState({});
  //Analize this 
  const [cretaeSpend, setCreateSpend] = useState(false);

  //UseEffect that update the remaining
  useEffect(() => {
    if (cretaeSpend) {
      const remainingBudget = remaining - Number(spend.quantity);
      //Add new budget
      setSpends([...spends, spend]);
      //restar
      setRemaining(remainingBudget);
      setCreateSpend(false);
    }
  }, [spend, cretaeSpend, spends, remaining]);

  return (
    <div className="container mt-4">
      <header>
        <h1 className="text-center text-white">Weekly Spending</h1>
      </header>
      {showQuestion ? (
        <Question
          setBudget={setBudget}
          setRemaining={setRemaining}
          updateQuestion={updateQuestion}
        />
      ) : (
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-6">
                <Form
                  remaining={remaining}
                  setSpend={setSpend}
                  setCreateSpend={setCreateSpend}
                />
              </div>
              <div className="col-12 col-md-6">
                <List spends={spends} />
                <BudgetControl
                  budget={budget}
                  remaining={remaining}
                ></BudgetControl>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
