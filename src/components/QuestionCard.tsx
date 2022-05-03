import React from "react";
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer?: AnswerObject;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {
          answers.map((answer) => (
            <ButtonWrapper
              key={answer}
              correct={userAnswer !== undefined ? userAnswer.correctAnswer === answer : false} // <---- ERROR HERE WHY? I DUNNO
              userClicked={userAnswer !== undefined ? userAnswer.answer === answer : false}
            >
              <button
                disabled={userAnswer ? true : false}
                value={answer}
                onClick={callback}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </button>
            </ButtonWrapper>
          ))
        }
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
