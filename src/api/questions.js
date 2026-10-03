import { subspacesQuestions } from "../Questions/Subspaces";
import { linearTransformationsQuestions } from "../Questions/LinearTransformations";
import { determinantsQuestions } from "../Questions/Determinants";
import { systemsOfLinearEquationsQuestions } from "../Questions/SystemsOfLinearEquations";

async function syncQuestions() {

    const questionMetadata = [
        ...subspacesQuestions.map(question => ({
            id: question.id,
            topic: "Subspaces"
        })),
        ...linearTransformationsQuestions.map(question => ({
            id: question.id,
            topic: "Linear Transformations"
        })),
        ...determinantsQuestions.map(question => ({
            id: question.id,
            topic: "Determinants"
        })),
        ...systemsOfLinearEquationsQuestions.map(question => ({
            id: question.id,
            topic: "Systems of Linear Equations"
        }))
    ];

    const response = await fetch("http://localhost:8000/questions/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(questionMetadata)
    });

    if (!response.ok) {
        throw new Error("Failed to sync questions");
    }

    return response.json();
}

export default syncQuestions;