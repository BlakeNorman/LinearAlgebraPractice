import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const linearTransformationsQuestions = [
    {
        id: 101,
        topic: "Linear Transformations",
        type: "multiple-choice",
        question: (
            <>
                Which of the following is <strong>not</strong> a linear transformation?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="T: \mathbb{R}^{3} \rightarrow \mathbb{R}^{2}" />
                    {" "} by {" "}
                    <InlineMath math="
                    T
                    \begin{pmatrix}
                    x_{1}\\
                    x_{2}\\
                    x_{3}
                    \end{pmatrix}
                    =
                    \begin{pmatrix}
                    0\\
                    0
                    \end{pmatrix}"
                    />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="T: \mathbb{R}^{2} \rightarrow \mathbb{R}" />
                    {" "} by {" "}
                    <InlineMath math="T({\bf x}) = {\bf x} \cdot {\bf u}" />
                    {" "} where {" "}
                    <InlineMath math="
                    {\bf u}
                    =
                    \begin{pmatrix}
                    7\\
                    -3
                    \end{pmatrix}
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="T: \mathbb{R}^{2} \rightarrow \mathbb{R}" />
                    {" "} by {" "}
                    <InlineMath math="
                    T
                    \begin{pmatrix}
                    x_{1}\\
                    x_{2}
                    \end{pmatrix}
                    =
                    7x_{1} - 3x_{2}
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="T: \mathbb{R} \rightarrow \mathbb{R}^{2}" />
                    {" "} by {" "}
                    <InlineMath math="
                    T(x)
                    =
                    \begin{pmatrix}
                    -x\\
                    2x
                    \end{pmatrix}
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="T: \mathbb{R}^{2} \rightarrow \mathbb{R}^{3}" />
                    {" "} by {" "}
                    <InlineMath math="
                    T
                    \begin{pmatrix}
                    x_{1}\\
                    x_{2}
                    \end{pmatrix}
                    =
                    \begin{pmatrix}
                    x_{1}\\
                    x_{2}\\
                    x_{1}x_{2}
                    \end{pmatrix}
                    " />
                </>
            ),
        },
        correctAnswer: "E"
    },
    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  
    {
        id: 102,
        topic: "Linear Transformations",
        type: "multiple-choice",
        question: (
            <>
                Which of the following is <strong>not</strong> a linear transformation?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="T:C(\mathbb{R}) \rightarrow \mathbb{R}" />
                    {" "} by {" "}
                    <InlineMath math="T(f) = f(-1)." />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="T:{\rm Mat}_{n}(\mathbb{R}) \rightarrow {\rm Mat}_{2}(\mathbb{R})" />
                    {" "} by {" "}
                    <InlineMath math="T(A) = AA^{T}." />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="T:{\rm Mat}_{n}(\mathbb{R}) \rightarrow {\rm Mat}_{n}(\mathbb{R})" />
                    {" "} by {" "}
                    <InlineMath math="T(A) = AB" />
                    {" "} where {" "}
                    <InlineMath math="B" />
                    {" "} is fixed.
                </>
            ),
            "D": (
                <>
                    <InlineMath math="T: \mathbb{R}^{2} \rightarrow \mathbb{R}" />
                    {" "} by {" "}
                    <InlineMath math="
                    T
                    \begin{pmatrix}
                    x\\
                    y
                    \end{pmatrix}
                    =
                    2x - 3y
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="T:\mathbb{P}_{n}(\mathbb{R}) \rightarrow \mathbb{R}" />
                    {" "} by {" "}
                    <InlineMath math="T(p(x)) = \int_{-3}^{2} p(x) \, dx." />
                </>
            ),
        },
        correctAnswer: "B"
    },
    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  
    {
        id: 103,
        topic: "Linear Transformations",
        type: "true-false",
        question: (
            <>
                If {" "}
                <InlineMath math="T:\mathbb{R}^{101} \rightarrow \mathbb{R}^{251}" />
                {" "} is a linear transformation, then the standard matrix associated to {" "}
                <InlineMath math="T" />
                {" "} is {" "}
                <InlineMath math="101 \times 251." />
            </>
        ),
        correctAnswer: "False"
    },
    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  
    {
        id: 104,
        topic: "Linear Transformations",
        type: "select-all",
        question: (
            <>
                Which of the following are linear transformations?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath
                        math="T:{\rm Mat}_{m \times n}(\mathbb{R}) \rightarrow {\rm Mat}_{n \times n}(\mathbb{R})"
                    />
                    {" "} by {" "}
                    <InlineMath math="T(A) = A - A^{T}." />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="T:{\rm Mat}_{n}(\mathbb{R}) \rightarrow {\rm Mat}_{n}(\mathbb{R})" />
                    {" "} by {" "}
                    <InlineMath math="T(A) = A + I_{n}" />
                    {" "} where {" "}
                    <InlineMath math="I_{n}" />
                    {" "} is the {" "}
                    <InlineMath math="n \times n" />
                    {" "} identity matrix.
                </>
            ),
            "C": (
                <>
                    <InlineMath
                        math="T:{\rm Mat}_{m \times n}(\mathbb{R}) \rightarrow {\rm Mat}_{n \times n}(\mathbb{R})"
                    />
                    {" "} by {" "}
                    <InlineMath math="T(A) = A^{T}." />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="T:{\rm Mat}_{n}(\mathbb{R}) \rightarrow {\rm Mat}_{n}(\mathbb{R})" />
                    {" "} by {" "}
                    <InlineMath math="T(A) = {\rm det}(A)." />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="T:{\rm Mat}_{n}(\mathbb{R}) \rightarrow {\rm Mat}_{n}(\mathbb{R})" />
                    {" "} by {" "}
                    <InlineMath math="T(A) = {\rm tr}(A)." />
                </>
            ),
        },
        correctAnswers: ["A", "C", "E"]
    },
    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  
    {
        id: 105,
        topic: "Linear Transformations",
        type: "select-all",
        question: (
            <>
                Which of the following are linear transformations?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath
                        math="T:C^{n}(\mathbb{R}) \rightarrow \mathbb{R}"
                    />
                    {" "} by {" "}
                    <InlineMath math="T(f) = f^{(n)}(1)." />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="T:C^{2}(\mathbb{R}) \rightarrow C(\mathbb{R})" />
                    {" "} by {" "}
                    <InlineMath math="T(f) = f^{\prime\prime} - f" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="T:C^{5}(\mathbb{R}) \rightarrow \mathbb{R}" />
                    {" "} by {" "}
                    <InlineMath math="T(f) = f^{(5)}(-1) + f^{\prime}(0) + 1" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="T:C(\mathbb{R}) \rightarrow \mathbb{R}" />
                    {" "} by {" "}
                    <InlineMath math="T(f) = e^{f(2)}" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="T:C(\mathbb{R}) \rightarrow \mathbb{R}" />
                    {" "} by {" "}
                    <InlineMath math="T(f) = \int_{-4}^{5} f(x) \, dx." />
                </>
            ),
        },
        correctAnswers: ["A", "B", "E"]
    },
    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  
    {
        id: 106,
        topic: "Linear Transformations",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:\mathbb{R}^{n} \rightarrow \mathbb{R}^{m}" />
                {" "} be a linear transformation. If {" "}
                <InlineMath math="m < n," />
                {" "} then {" "}
                <InlineMath math="T" />
                {" "} is not injective.
            </>
        ),
        correctAnswer: "True"
    },
    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  
    {
        id: 107,
        topic: "Linear Transformations",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:\mathbb{R}^{n} \rightarrow \mathbb{R}^{m}" />
                {" "} be a linear transformation. If {" "}
                <InlineMath math="m > n," />
                {" "} then {" "}
                <InlineMath math="T" />
                {" "} is not injective.
            </>
        ),
        correctAnswer: "False"
    },
    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  
    {
        id: 108,
        topic: "Linear Transformations",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:\mathbb{R}^{n} \rightarrow \mathbb{R}^{m}" />
                {" "} be a linear transformation. If {" "}
                <InlineMath math="m < n," />
                {" "} then {" "}
                <InlineMath math="T" />
                {" "} is not surjective.
            </>
        ),
        correctAnswer: "False"
    },
    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  
    {
        id: 109,
        topic: "Linear Transformations",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:\mathbb{R}^{n} \rightarrow \mathbb{R}^{m}" />
                {" "} be a linear transformation. If {" "}
                <InlineMath math="m > n," />
                {" "} then {" "}
                <InlineMath math="T" />
                {" "} is not surjective.
            </>
        ),
        correctAnswer: "True"
    },
    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  
    {
        id: 110,
        topic: "Linear Transformations",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:\mathbb{R}^{12} \rightarrow \mathbb{R}^{17}" />
                {" "} be a linear transformation with associated standard matrix {" "}
                <InlineMath math="A." />
                {" "} If {" "}
                <InlineMath math="{\rm dim}({\rm Nul}(A)) = 5" />
                {" "} then {" "}
                <InlineMath math="T" />
                {" "} is surjective.
            </>
        ),
        correctAnswer: "True"
    },
    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  
    {
        id: 111,
        topic: "Linear Transformations",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:\mathbb{R}^{n} \rightarrow \mathbb{R}^{m}" />
                {" "} be a linear transformation with associated standard matrix {" "}
                <InlineMath math="A." />
                {" "} If {" "}
                <InlineMath math="A" />
                {" "} is {" "}
                <InlineMath math="113 \times 224" />
                {" "} then {" "}
                <InlineMath math="n = 113." />
            </>
        ),
        correctAnswer: "False"
    },
    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  
    {
        id: 112,
        topic: "Linear Transformations",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:\mathbb{R}^{n} \rightarrow \mathbb{R}^{m}" />
                {" "} be a linear transformation with associated standard matrix {" "}
                <InlineMath math="A." />
                {" "} If {" "}
                <InlineMath math="A" />
                {" "} is {" "}
                <InlineMath math="97 \times 101" />
                {" "} then the codomain of {" "}
                <InlineMath math="T" />
                {" "} is {" "}
                <InlineMath math="\mathbb{R}^{97}." />
            </>
        ),
        correctAnswer: "True"
    },
    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  
    {
        id: 113,
        topic: "Linear Transformations",
        type: "multiple-choice",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:\mathbb{R}^{2} \rightarrow \mathbb{R}^{3}" />
                {" "} be a linear transformation defined by
                <BlockMath math="
                T
                    \begin{pmatrix}
                    x_{1}\\
                    x_{2}
                    \end{pmatrix}
                    =
                    \begin{pmatrix}
                    x_{1} - 3x_{2}\\
                    5x_{2} + 9x_{1}\\
                    x_{1}
                    \end{pmatrix}
                "
                />
                Determine the standard matrix associated to {" "}
                <InlineMath math="T." />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        1 & -3\\
                        9 & 5\\
                        1 & 0
                        \end{pmatrix}
                    "
                    />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        1 & -3\\
                        5 & 9\\
                        1 & 0
                        \end{pmatrix}
                    "
                    />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        1 & 5 & 1\\
                        -3 & 9 & 0
                        \end{pmatrix}
                    "
                    />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        1 & 9 & 0\\
                        -3 & 5 & 1
                        \end{pmatrix}
                    "
                    />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        -2\\
                        14\\
                        1
                        \end{pmatrix}
                    "
                    />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 114,
        topic: "Linear Transformations",
        type: "multiple-choice",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:\mathbb{R}^{4} \rightarrow \mathbb{R}^{3}" />
                {" "} be a linear transformation. If {" "}
                <InlineMath math="
                    {\rm ker}(T)
                    =
                    {\rm Span}
                    \left\{
                    \begin{pmatrix}
                    1\\
                    0\\
                    -1\\
                    2
                    \end{pmatrix},
                    \begin{pmatrix}
                    0\\
                    1\\
                    2\\
                    -1
                    \end{pmatrix}
                    \right\},
                " />
                {" "} then what is the dimension of the range of {" "}
                <InlineMath math="T" />
                {" "}?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="2" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="1" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="3" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="4" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="0" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 115,
        topic: "Linear Transformations",
        type: "multiple-choice",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:\mathbb{R}^{3} \rightarrow \mathbb{R}^{3}" />
                {" "} be a linear transformation such that
                <BlockMath math="
                    T
                    \begin{pmatrix}
                    1\\
                    0\\
                    0
                    \end{pmatrix}
                    =
                    \begin{pmatrix}
                    2\\
                    -1\\
                    3
                    \end{pmatrix},
                    \;\;
                    T
                    \begin{pmatrix}
                    0\\
                    1\\
                    0
                    \end{pmatrix}
                    =
                    \begin{pmatrix}
                    1\\
                    4\\
                    0
                    \end{pmatrix},
                    \;\;
                    T
                    \begin{pmatrix}
                    0\\
                    0\\
                    1
                    \end{pmatrix}
                    =
                    \begin{pmatrix}
                    -2\\
                    1\\
                    5
                    \end{pmatrix}.
                " />
                Determine {" "}
                <InlineMath math="
                    T
                    \begin{pmatrix}
                    1\\
                    2\\
                    -1
                    \end{pmatrix}
                " />
                {" "} .
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        6\\
                        6\\
                        -2
                        \end{pmatrix}
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        2\\
                        3\\
                        8
                        \end{pmatrix}
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        4\\
                        4\\
                        2
                        \end{pmatrix}
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        0\\
                        6\\
                        -7
                        \end{pmatrix}
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        8\\
                        -2\\
                        3
                        \end{pmatrix}
                    " />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 116,
        topic: "Linear Transformations",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:V \rightarrow W" />
                {" "} be a linear transformation. If {" "}
                <InlineMath math="{\rm dim}(V) = 7" />
                {" "} and {" "}
                <InlineMath math="{\rm dim}({\rm Im}(T)) = 7," />
                {" "} then {" "}
                <InlineMath math="T" />
                {" "} is injective.
            </>
        ),
        correctAnswer: "True"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 117,
        topic: "Linear Transformations",
        type: "multiple-choice",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:\mathbb{R}^{3} \rightarrow \mathbb{R}^{2}" />
                {" "} be a linear transformation. Which of the following statements must be true?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="T" />
                    {" "} is not injective.
                </>
            ),
            "B": (
                <>
                    <InlineMath math="T" />
                    {" "} is not surjective.
                </>
            ),
            "C": (
                <>
                    <InlineMath math="{\rm ker}(T) = \{0\}." />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="{\rm dim}({\rm Im}(T)) = 3" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="T" />
                    {" "} must be the zero transformation.
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 118,
        topic: "Linear Transformations",
        type: "select-all",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:V \rightarrow W" />
                {" "} and {" "}
                <InlineMath math="S:W \rightarrow U" />
                {" "} be linear transformations. Which of the following are necessarily linear transformations?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="S \circ T" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="T + I_V" />
                    {" "} where {" "}
                    <InlineMath math="I_{V}" />
                    {" "} is the identity transformation on {" "}
                    <InlineMath math="V." />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="T \circ S" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="TS" />
                    {" "} defined by {" "}
                    <InlineMath math="TS({\bf x}) = T({\bf x})S({\bf x})." />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="{\bf x} \mapsto T({\bf x}) + S(T({\bf x})" />
                </>
            ),
        },
        correctAnswers: ["A"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 119,
        topic: "Linear Transformations",
        type: "multiple-choice",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:\mathbb{P}_{3}(\mathbb{R}) \rightarrow \mathbb{R}^{2}" />
                {" "} be defined by
                <BlockMath math="
                    T(p)
                    =
                    \begin{pmatrix}
                    p(0)\\
                    p(1)
                    \end{pmatrix}.
                " />
                Which of the following polynomials is an element of {" "}
                <InlineMath math="{\rm ker}(T)" />
                {" "}?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="p(x)=x^{2}-x" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="p(x)=x^{2}+1" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="p(x)=x+1" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="p(x)=x^{3}+x" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="p(x)=x^{2}-1" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 120,
        topic: "Linear Transformations",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:V \rightarrow W" />
                {" "} be a linear transformation. If {" "}
                <InlineMath math="T" />
                {" "} is injective, then whenever {" "}
                <InlineMath math="T({\bf x}_1)=T({\bf x}_2)" />
                {" "} we must have {" "}
                <InlineMath math="{\bf x}_1 = {\bf x}_2." />
            </>
        ),
        correctAnswer: "True"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 121,
        topic: "Linear Transformations",
        type: "multiple-choice",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:\mathbb{R}^{2} \rightarrow \mathbb{R}^{2}" />
                {" "} be the linear transformation whose associated standard matrix is
                <BlockMath math="
                    A=
                    \begin{pmatrix}
                    3 & 1\\
                    2 & -1
                    \end{pmatrix}.
                " />
                Compute {" "}
                <InlineMath math="
                    T^{-1}
                    \begin{pmatrix}
                    7\\
                    3
                    \end{pmatrix}.
                " />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        2\\
                        1
                        \end{pmatrix}
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        1\\
                        2
                        \end{pmatrix}
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        3\\
                        1
                        \end{pmatrix}
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        1\\
                        -2
                        \end{pmatrix}
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        -2\\
                        1
                        \end{pmatrix}
                    " />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 122,
        topic: "Linear Transformations",
        type: "select-all",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:V \rightarrow W" />
                {" "} be a linear transformation. If {" "}
                <InlineMath math="T" />
                {" "} is surjective, then which of the following statements are necessarily true?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="{\rm Im}(T)=W" />
                    {" "} .
                </>
            ),
            "B": (
                <>
                    <InlineMath math="{\rm dim}(V) \geq {\rm dim}(W)" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="T" />
                    {" "} is injective.
                </>
            ),
            "D": (
                <>
                    <InlineMath math="{\rm ker}(T)=\{0\}." />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="{\rm dim}(V) < {\rm dim}(W)" />
                </>
            ),
        },
        correctAnswers: ["A", "B"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 123,
        topic: "Linear Transformations",
        type: "select-all",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:\mathbb{R}^{3} \rightarrow \mathbb{R}^{3}" />
                {" "} be defined by
                <BlockMath math="
                    T
                    \begin{pmatrix}
                    x\\
                    y\\
                    z
                    \end{pmatrix}
                    =
                    \begin{pmatrix}
                    x+y\\
                    y+z\\
                    -x+z
                    \end{pmatrix}.
                " />
                Which of the following vectors are members of {" "}
                <InlineMath math="{\rm ker}(T)?" />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        0\\
                        0\\
                        0
                        \end{pmatrix}
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        1\\
                        -1\\
                        1
                        \end{pmatrix}
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        1\\
                        0\\
                        -1
                        \end{pmatrix}
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        0\\
                        1\\
                        -1
                        \end{pmatrix}
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \begin{pmatrix}
                        -3\\
                        3\\
                        -3
                        \end{pmatrix}
                    " />
                </>
            ),
        },
        correctAnswers: ["A", "B", "E"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 124,
        topic: "Linear Transformations",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:V \rightarrow W" />
                {" "} be a linear transformation. If {" "}
                <InlineMath math="{\rm dim}(V)={\rm dim}(W)" />
                {" "} and {" "}
                <InlineMath math="T" />
                {" "} is injective, then {" "}
                <InlineMath math="T" />
                {" "} is also surjective.
            </>
        ),
        correctAnswer: "True"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 125,
        topic: "Linear Transformations",
        type: "multiple-choice",
        question: (
            <>
                Let {" "}
                <InlineMath math="T:\mathbb{P}_{2}(\mathbb{R}) \rightarrow \mathbb{P}_{2}(\mathbb{R})" />
                {" "} be defined by
                <BlockMath math="
                    T(p(x))=p(x)+p'(x).
                " />
                Which of the following is the image of {" "}
                <InlineMath math="p(x)=2x^{2}-3x+1" />
                {" "} under {" "}
                <InlineMath math="T?" />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="2x^{2}+x-2" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="2x^{2}-x+1" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="2x^{2}-3x+3" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="4x^{2}-6x+2" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="2x^{2}-5x+1" />
                </>
            ),
        },
        correctAnswer: "A"
    },

]