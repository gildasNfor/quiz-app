import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../axios/axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setQuiz } from "../redux/actions/quizActions";
import Category from "../components/Category";

const SetQuiz = () => {
  const history = useHistory();
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [quizName, setName] = useState("");
  const [timed, setTimed] = useState(false);
  const [duration, setDuration] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`categories`)
      .then(res => {
        console.log(res);
        setCategories(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const createQuiz = e => {
    e.preventDefault();

    axiosInstance
      .post(`/categories/`, { name: category })
      .then(res => {
        console.log(res);
        setQuiz(res.data.newQuiz);
        history.push("/set-question");
      })
      .catch(err => {
        console.log(err);
      });

    axiosInstance
      .post(`/quiz/`, {
        name: quizName,
        timed,
        category,
        duration: parseInt(duration),
      })
      .then(res => {
        console.log(res);
        history.push("/set-question");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const updateCategory = name => {
    setCategory(name);
  };

  const newCategory = e => {
    setCategory(e.target.value);
  };

  const setQuizName = e => {
    setName(e.target.value);
  };

  const setTimer = e => {
    setTimed(e.target.checked);
    console.log(e.target.checked);
  };

  const enterDuration = e => {
    setDuration(e.target.value);
  };
  return (
    <div>
      <div styles={{ display: "flex" }}>
        <input
          onChange={setQuizName}
          className="form-control"
          type="text"
          placeholder="Quiz name"
          value={quizName}
          required
        />
        <label>Select a category: </label>
        <div>
          {categories.map((category, index) => {
            return (
              category.name !== "uncategorized" && (
                <Category
                  key={index}
                  name={category.name}
                  updateCategory={updateCategory}
                />
              )
            );
          })}
        </div>
        <hr />
        <label>Input a new Category</label>
        <div>
          <input
            onChange={newCategory}
            className="form-control"
            type="text"
            value={category}
          />
        </div>
        <input
          onChange={setTimer}
          type="checkbox"
          id="timed"
          name=""
          value={timed}
        ></input>
        <label for="">timed</label>
        <br />
        {timed && (
          <>
            {" "}
            <label>Enter number of minutes</label>{" "}
            <input
              onChange={enterDuration}
              value={duration}
              type="text"
              placeholder="Input the number of minutes"
            />
          </>
        )}
      </div>
      <button onClick={createQuiz} className="btn btn-primary">
        Create Quiz
      </button>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    currentUser: auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setQuiz }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SetQuiz);
