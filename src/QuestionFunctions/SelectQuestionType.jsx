import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import TrueFalseQuestion from "./TrueFalseQuestion"
import SelectAllQuestion from "./SelectAllQuestion";

export default function Question({ question, onSubmit }) {
    if (question.type === "multiple-choice") {
        return <MultipleChoiceQuestion question={question} onSubmit={onSubmit} />;
    }

    else if (question.type === "true-false") {
        return <TrueFalseQuestion question={question} onSubmit={onSubmit} />;
    }

    else if (question.type === "select-all") {
        return <SelectAllQuestion question={question} onSubmit={onSubmit} />;
    }
}