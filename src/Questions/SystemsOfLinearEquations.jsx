import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const systemsOfLinearEquationsQuestions = [
    {
        id: 301,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Suppose the solution of the linear system
                <BlockMath math="
                    \begin{align*}
                    ax + ay - z &= 1\\
                    x - ay - az &= -1\\
                    ax - y + az &= 1
                    \end{align*}
                "
                />
                is {" "}
                <InlineMath math="(x,y,z) = (a,b,a)." />
                {" "} If {" "}
                <InlineMath math="a" />
                {" "} is <strong>not</strong> an integer, then what is the value of {" "}
                <InlineMath math="a + b." />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="-\dfrac{3}{2}" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="-1" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="0" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="\dfrac{1}{2}" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="1" />
                </>
            ),

        },
        correctAnswer: "B"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 302,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Let {" "}
                <InlineMath math="A" />
                {" "} be an {" "}
                <InlineMath math="m \times n" />
                {" "} matrix with real entries.
                If {" "}
                <InlineMath math="{\bf x}_{1}" />
                {" "} and {" "}
                <InlineMath math="{\bf x}_{2}" />
                {" "} are two distinct solutions of {" "}
                <InlineMath math="A{\bf x} = {\bf b}," />
                {" "} then which of the following is necessarily true?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="{\bf x}_{1} = -{\bf x}_{2}." />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="{\bf x}_{1} + {\bf x}_{2}" />
                    {" "} is also a solution of {" "}
                    <InlineMath math="A{\bf x} = {\bf b}." />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="{\bf b} = {\bf 0}." />
                </>
            ),
            "D": (
                <>
                    There exists {" "}
                    <InlineMath math="{\bf x}_{3}" />
                    {" "} satisfying {" "}
                    <InlineMath math="{\bf x}_{3} \mathrel{\char`≠} {\bf x}_{1}" />
                    {" "} and {" "}
                    <InlineMath math="{\bf x}_{3} \mathrel{\char`≠} {\bf x}_{2}" />
                    {" "} such that {" "}
                    <InlineMath math="{\bf x}_{3}" />
                    {" "} is a solution of {" "}
                    <InlineMath math="A{\bf x} = {\bf b}." />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="A" />
                    {" "} has more columns than rows.
                </>
            ),

        },
        correctAnswer: "D"
    },
    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  
    {
        id: 303,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Determine the augmented matrix associated to the system of linear equations
                <BlockMath math="
                    \begin{align*}
                    5x_{1} + 6x_{2} - 3x_{4} &= 3\\
                    4x_{2} - x_{3} + 2x_{4} &= -1\\
                    2x_{1} + x_{2} + x_{4} &= 2
                    \end{align*}
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{cccc|c}
                        5 & 6 & 0 & -3 & 3\\
                        0 & 4 & -1 & 2 & -1\\
                        2 & 1 & 0 & 1 & 2
                        \end{array}
                        \hspace{-1mm} \right)
                    "
                    />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{ccc|c}
                        5 & 6 & -3 & 3\\
                        4 & -1 & 2 & -1\\
                        2 & 1 & 1 & 2
                        \end{array}
                        \hspace{-1mm} \right)
                    "
                    />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{cc|c}
                        5 & 4 & 2\\
                        6 & -1 & 1\\
                        -3 & 2 & 1\\
                        3 & -1 & 2
                        \end{array}
                        \hspace{-1mm} \right)
                    "
                    />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{cc|c}
                        5 & 0 & 2\\
                        6 & 4 & 1\\
                        0 & -1 & 0\\
                        -3 & 2 & 1\\
                        3 & -1 & 2
                        \end{array}
                        \hspace{-1mm} \right)
                    "
                    />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{ccccc|c}
                        5 & 6 & 0 & 0 & -3 & 3\\
                        0 & 4 & -1 & 0 & 2 & -1\\
                        2 & 1 & 0 & 0 & 1 & 2
                        \end{array}
                        \hspace{-1mm} \right)
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
        id: 304,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Determine the solution set of the system of linear equations
                <BlockMath math="
                    \begin{aligned}
                    x_{1} + 2x_{3} - 3x_{4} &= 5\\
                    2x_{1} + x_{2} + 3x_{3} - 6x_{4} &= 6\\
                    x_{2} - x_{3} + x_{5} &= -1
                    \end{aligned}
                " />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        5\\
                        -4\\
                        0\\
                        0\\
                        3
                        \end{pmatrix}
                        +
                        s
                        \begin{pmatrix}
                        -2\\
                        1\\
                        1\\
                        0\\
                        0
                        \end{pmatrix}
                        +
                        t
                        \begin{pmatrix}
                        3\\
                        0\\
                        0\\
                        1\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        5\\
                        -4\\
                        0\\
                        0\\
                        -3
                        \end{pmatrix}
                        +
                        s
                        \begin{pmatrix}
                        -2\\
                        1\\
                        1\\
                        0\\
                        0
                        \end{pmatrix}
                        +
                        t
                        \begin{pmatrix}
                        3\\
                        0\\
                        0\\
                        1\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        5\\
                        -4\\
                        0\\
                        0\\
                        3
                        \end{pmatrix}
                        +
                        s
                        \begin{pmatrix}
                        2\\
                        1\\
                        1\\
                        0\\
                        0
                        \end{pmatrix}
                        +
                        t
                        \begin{pmatrix}
                        3\\
                        0\\
                        0\\
                        1\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        5\\
                        -4\\
                        0\\
                        0\\
                        3
                        \end{pmatrix}
                        +
                        s
                        \begin{pmatrix}
                        -2\\
                        1\\
                        1\\
                        0\\
                        0
                        \end{pmatrix}
                        +
                        t
                        \begin{pmatrix}
                        -3\\
                        0\\
                        0\\
                        1\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        5\\
                        -4\\
                        0\\
                        0\\
                        3
                        \end{pmatrix}
                        +
                        s
                        \begin{pmatrix}
                        -2\\
                        1\\
                        -1\\
                        0\\
                        0
                        \end{pmatrix}
                        +
                        t
                        \begin{pmatrix}
                        3\\
                        0\\
                        0\\
                        1\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
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
        id: 305,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Determine the solution set of the system of linear equations
                <BlockMath math="
                    \begin{aligned}
                    x_{1} - x_{3} + 3x_{4} &= -4\\
                    2x_{1} + x_{2} - 2x_{3} + 8x_{4} &= -3\\
                    x_{2} + 2x_{3} + x_{5} &= 8
                    \end{aligned}
                " />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        -4\\
                        5\\
                        0\\
                        0\\
                        3
                        \end{pmatrix}
                        +
                        s
                        \begin{pmatrix}
                        1\\
                        0\\
                        1\\
                        0\\
                        0
                        \end{pmatrix}
                        +
                        t
                        \begin{pmatrix}
                        -3\\
                        -2\\
                        0\\
                        1\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        -4\\
                        5\\
                        0\\
                        0\\
                        -3
                        \end{pmatrix}
                        +
                        s
                        \begin{pmatrix}
                        1\\
                        0\\
                        1\\
                        0\\
                        0
                        \end{pmatrix}
                        +
                        t
                        \begin{pmatrix}
                        -3\\
                        -2\\
                        0\\
                        1\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        -4\\
                        5\\
                        0\\
                        0\\
                        3
                        \end{pmatrix}
                        +
                        s
                        \begin{pmatrix}
                        -1\\
                        0\\
                        1\\
                        0\\
                        0
                        \end{pmatrix}
                        +
                        t
                        \begin{pmatrix}
                        -3\\
                        -2\\
                        0\\
                        1\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        -4\\
                        5\\
                        0\\
                        0\\
                        3
                        \end{pmatrix}
                        +
                        s
                        \begin{pmatrix}
                        1\\
                        0\\
                        -1\\
                        0\\
                        0
                        \end{pmatrix}
                        +
                        t
                        \begin{pmatrix}
                        -3\\
                        -2\\
                        0\\
                        1\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        -4\\
                        5\\
                        0\\
                        0\\
                        3
                        \end{pmatrix}
                        +
                        s
                        \begin{pmatrix}
                        1\\
                        0\\
                        1\\
                        0\\
                        0
                        \end{pmatrix}
                        +
                        t
                        \begin{pmatrix}
                        3\\
                        -2\\
                        0\\
                        1\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
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
        id: 306,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Determine the solution set of the system of linear equations
                <BlockMath math="
                    \begin{aligned}
                    2x_{1} - x_{2} &= 7\\
                    x_{1} + 3x_{2} &= 9
                    \end{aligned}
                " />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        \dfrac{30}{7}\\
                        \dfrac{11}{7}
                        \end{pmatrix}
                        \right\}
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        4\\
                        1
                        \end{pmatrix}
                        \right\}
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        \dfrac{11}{7}\\
                        \dfrac{30}{7}
                        \end{pmatrix}
                        \right\}
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        3\\
                        2
                        \end{pmatrix}
                        \right\}
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        5\\
                        -3
                        \end{pmatrix}
                        \right\}
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
        id: 307,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Determine the solution set of the system of linear equations
                <BlockMath math="
                    \begin{aligned}
                    x_{1} + 2x_{2} - x_{3} &= 4\\
                    2x_{1} - x_{2} + 3x_{3} &= -1
                    \end{aligned}
                " />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        4-2s+s\\
                        s\\
                        s
                        \end{pmatrix}
                        \;\middle|\;
                        s\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        4-2s-s\\
                        s\\
                        s
                        \end{pmatrix}
                        \;\middle|\;
                        s\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        4+2s-s\\
                        s\\
                        s
                        \end{pmatrix}
                        \;\middle|\;
                        s\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        4-2s+s\\
                        -s\\
                        s
                        \end{pmatrix}
                        \;\middle|\;
                        s\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        4-2s+s\\
                        s\\
                        -s
                        \end{pmatrix}
                        \;\middle|\;
                        s\in\mathbb{R}
                        \right\}
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
        id: 308,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Determine the solution set of the system of linear equations
                <BlockMath math="
                    \begin{aligned}
                    x_{1} + x_{2} + x_{3} &= 6\\
                    2x_{1} - x_{2} + x_{3} &= 3\\
                    x_{1} + 2x_{2} - x_{3} &= 2
                    \end{aligned}
                " />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2\\
                        1\\
                        3
                        \end{pmatrix}
                        \right\}
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        1\\
                        2\\
                        3
                        \end{pmatrix}
                        \right\}
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        3\\
                        1\\
                        2
                        \end{pmatrix}
                        \right\}
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2\\
                        3\\
                        1
                        \end{pmatrix}
                        \right\}
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        1\\
                        3\\
                        2
                        \end{pmatrix}
                        \right\}
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
        id: 309,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Determine the solution set of the system of linear equations
                <BlockMath math="
                    \begin{aligned}
                    x_{1} + x_{2} - x_{3} + x_{4} &= 4\\
                    2x_{1} - x_{2} + 3x_{3} - x_{4} &= 1\\
                    x_{1} + 2x_{2} + x_{3} &= 5
                    \end{aligned}
                " />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2-s-t\\
                        1+s\\
                        t\\
                        1
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2+s+t\\
                        1+s\\
                        t\\
                        1
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2-s+t\\
                        1+s\\
                        t\\
                        1
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2-s-t\\
                        1-s\\
                        t\\
                        1
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2-s-t\\
                        1+s\\
                        -t\\
                        1
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
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
        id: 310,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Determine the solution set of the system of linear equations
                <BlockMath math="
                    \begin{aligned}
                    x_{1} + 2x_{2} - x_{3} + x_{4} - 2x_{5} &= 3\\
                    2x_{1} - x_{2} + 3x_{3} - x_{4} + x_{5} &= 1\\
                    x_{1} + x_{2} + x_{3} - 2x_{4} + x_{5} &= 4
                    \end{aligned}
                " />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        3-2s+t+u\\
                        s\\
                        t\\
                        u\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t,u\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        3-2s+t+u\\
                        s\\
                        t\\
                        u\\
                        1
                        \end{pmatrix}
                        \;\middle|\;
                        s,t,u\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        3+2s+t+u\\
                        s\\
                        t\\
                        u\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t,u\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        3-2s-t+u\\
                        s\\
                        t\\
                        u\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t,u\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                    3-2s+t+u\\
                        -s\\
                        t\\
                        u\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t,u\in\mathbb{R}
                        \right\}
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
        id: 311,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Determine the solution set of the system of linear equations
                <BlockMath math="
                    \begin{aligned}
                    x_{1} - x_{2} + 2x_{3} + x_{4} &= 7\\
                    2x_{1} + x_{2} - x_{3} + 3x_{4} &= 4\\
                    x_{1} + 2x_{2} + x_{3} - x_{4} &= 3\\
                    3x_{1} + x_{2} + x_{3} + 2x_{4} &= 10
                    \end{aligned}
                " />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2\\
                        1\\
                        2\\
                        1
                        \end{pmatrix}
                        \right\}
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        1\\
                        2\\
                        2\\
                        1
                        \end{pmatrix}
                        \right\}
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2\\
                        1\\
                        1\\
                        2
                        \end{pmatrix}
                        \right\}
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2\\
                        2\\
                        1\\
                        1
                        \end{pmatrix}
                        \right\}
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        1\\
                        1\\
                        2\\
                        2
                        \end{pmatrix}
                        \right\}
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
        id: 312,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Determine the solution set of the system of linear equations
                <BlockMath math="
                    \begin{aligned}
                    x_{1} + x_{2} - x_{3} + 2x_{4} - x_{5} + x_{6} &= 5\\
                    2x_{1} - x_{2} + x_{3} + x_{4} + 2x_{5} - x_{6} &= 1\\
                    x_{1} + 2x_{2} + x_{4} + x_{5} &= 4\\
                    x_{2} + x_{3} - x_{4} + x_{6} &= 2
                    \end{aligned}
                " />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        5-s+t\\
                        s\\
                        2-t\\
                        0\\
                        0\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        5+s+t\\
                        s\\
                        2-t\\
                        0\\
                        0\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        5-s-t\\
                        s\\
                        2-t\\
                        0\\
                        0\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        5-s+t\\
                        -s\\
                        2-t\\
                        0\\
                        0\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        5-s+t\\
                        s\\
                        2+t\\
                        0\\
                        0\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
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
        id: 313,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Determine the solution set of the system of linear equations
                <BlockMath math="
                    \begin{aligned}
                    x_{1} + 2x_{2} + x_{3} - x_{4} &= 6\\
                    2x_{1} - x_{2} + 3x_{3} + x_{4} &= 5\\
                    x_{1} + x_{2} + 2x_{3} + 2x_{4} &= 8\\
                    3x_{1} + 2x_{2} + 4x_{3} + x_{4} &= 13
                    \end{aligned}
                " />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        1\\
                        2\\
                        3\\
                        0
                        \end{pmatrix}
                        \right\}
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        1\\
                        3\\
                        2\\
                        0
                        \end{pmatrix}
                        \right\}
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2\\
                        1\\
                        3\\
                        0
                        \end{pmatrix}
                        \right\}
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        1\\
                        2\\
                        2\\
                        1
                        \end{pmatrix}
                        \right\}
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2\\
                        2\\
                        1\\
                        0
                        \end{pmatrix}
                        \right\}
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
        id: 314,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Determine the solution set of the system of linear equations
                <BlockMath math="
                    \begin{aligned}
                    x_{1} - x_{2} + x_{3} + x_{4} - x_{5} &= 2\\
                    2x_{1} + x_{2} - x_{3} + 2x_{4} + x_{5} &= 7\\
                    x_{1} + 2x_{2} + x_{3} - x_{4} + 2x_{5} &= 3
                    \end{aligned}
                " />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2+s-2t\\
                        1+s\\
                        t\\
                        0\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2-s-2t\\
                        1+s\\
                        t\\
                        0\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2+s+2t\\
                        1+s\\
                        t\\
                        0\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2+s-2t\\
                        1-s\\
                        t\\
                        0\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \left\{
                        \begin{pmatrix}
                        2+s-2t\\
                        1+s\\
                        -t\\
                        0\\
                        0
                        \end{pmatrix}
                        \;\middle|\;
                        s,t\in\mathbb{R}
                        \right\}
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
        id: 315,
        topic: "Systems of Linear Equations",
        type: "true-false",
        question: (
            <>
                If {" "}
                <InlineMath math="A \in {\rm Mat}_{m \times n}(\mathbb{R})" />
                {" "} where {" "}
                <InlineMath math="m < n," />
                {" "} then there is some {" "}
                <InlineMath math="{\bf b} \in \mathbb{R}^{m}" />
                {" "} such that {" "}
                <InlineMath math="A{\bf x} = {\bf b}" />
                {" "} is inconsistent.
            </>
        ),
        correctAnswer: "True"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 316,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Suppose the solution of the linear system
                <BlockMath math="
                    \begin{aligned}
                    ax + y - z &= 1\\
                    x - ay - z &= -\dfrac{5}{8}\\
                    x + z &= 1
                    \end{aligned}
                "
                />
                is {" "}
                <InlineMath math="(x,y,z) = (a,b,a)." />
                {" "} If {" "}
                <InlineMath math="a" />
                {" "} is <strong>not</strong> an integer, then what is the value of {" "}
                <InlineMath math="a+b?" />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="\dfrac{7}{4}" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="\dfrac{5}{4}" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="\dfrac{3}{2}" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="2" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="\dfrac{1}{2}" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 317,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Let {" "}
                <InlineMath math="A" />
                {" "} be an {" "}
                <InlineMath math="m \times n" />
                {" "} matrix with real entries. Suppose that {" "}
                <InlineMath math="{\bf x}_{1}" />
                {" "} and {" "}
                <InlineMath math="{\bf x}_{2}" />
                {" "} are two distinct solutions of {" "}
                <InlineMath math="A{\bf x}={\bf b}." />
                {" "} Which of the following is necessarily true?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="{\bf x}_{1}-{\bf x}_{2}" />
                    {" "} is a nonzero solution of {" "}
                    <InlineMath math="A{\bf x}={\bf 0}." />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="{\bf x}_{1}-{\bf x}_{2}" />
                    {" "} is a solution of {" "}
                    <InlineMath math="A{\bf x}={\bf b}." />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="{\bf x}_{1}+{\bf x}_{2}" />
                    {" "} is a solution of {" "}
                    <InlineMath math="A{\bf x}={\bf 0}." />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="{\bf b}={\bf 0}." />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="{\bf x}_{1}" />
                    {" "} and {" "}
                    <InlineMath math="{\bf x}_{2}" />
                    {" "} are linearly dependent.
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 318,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Determine the augmented matrix associated to the system of linear equations
                <BlockMath math="
                    \begin{aligned}
                    2x_{1} - 3x_{2} + x_{3} + 4x_{4} &= 7\\
                    x_{1} + x_{2} - 2x_{3} &= -1\\
                    -x_{1} + 4x_{2} + x_{4} &= 5
                    \end{aligned}
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{cccc|c}
                        2 & -3 & 1 & 4 & 7\\
                        1 & 1 & -2 & 0 & -1\\
                        -1 & 4 & 0 & 1 & 5
                        \end{array}
                        \hspace{-1mm} \right)
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{ccc|c}
                        2 & -3 & 1 & 7\\
                        1 & 1 & -2 & -1\\
                        -1 & 4 & 1 & 5
                        \end{array}
                        \hspace{-1mm} \right)
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{ccccc|c}
                        2 & -3 & 1 & 4 & 0 & 7\\
                        1 & 1 & -2 & 0 & 0 & -1\\
                        -1 & 4 & 0 & 1 & 0 & 5
                        \end{array}
                        \hspace{-1mm} \right)
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{cccc|c}
                        2 & 1 & -1 & 7 & 4\\
                        -3 & 1 & 4 & -1 & 1\\
                        1 & -2 & 0 & 5 & 1
                        \end{array}
                        \hspace{-1mm} \right)
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{cccc|c}
                        2 & -3 & 1 & 4 & 7\\
                        1 & 1 & 2 & 0 & -1\\
                        -1 & 4 & 0 & -1 & 5
                        \end{array}
                        \hspace{-1mm} \right)
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
        id: 319,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Suppose the solution of the linear system
                <BlockMath math="
                    \begin{aligned}
                    ax + y - z &= -\dfrac{5}{9}\\
                    x + ay + z &= \dfrac{10}{9}\\
                    x + z &= \dfrac{4}{3}
                    \end{aligned}
                "
                />
                is {" "}
                <InlineMath math="(x,y,z)=(a,b,a)." />
                {" "} If {" "}
                <InlineMath math="a" />
                {" "} is <strong>not</strong> an integer, then what is the value of {" "}
                <InlineMath math="a+b?" />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="\dfrac{1}{3}" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="-\dfrac{1}{3}" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="\dfrac{2}{3}" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="1" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="-1" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 320,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Let {" "}
                <InlineMath math="A" />
                {" "} be a matrix and suppose that {" "}
                <InlineMath math="{\bf x}_{1}" />
                {" "} and {" "}
                <InlineMath math="{\bf x}_{2}" />
                {" "} are solutions of {" "}
                <InlineMath math="A{\bf x}={\bf b}." />
                {" "} Which of the following is necessarily a solution of {" "}
                <InlineMath math="A{\bf x}={\bf b}" />
                {" "} for every {" "}
                <InlineMath math="c\in\mathbb{R}" />
                {" "}?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="c{\bf x}_{1}+(1-c){\bf x}_{2}" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="c{\bf x}_{1}+c{\bf x}_{2}" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="c{\bf x}_{1}-{\bf x}_{2}" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="{\bf x}_{1}+{\bf x}_{2}" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="c({\bf x}_{1}-{\bf x}_{2})" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 321,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Determine the augmented matrix associated to the system of linear equations
                <BlockMath math="
                    \begin{aligned}
                    3x_{1} + 2x_{2} - x_{3} &= 4\\
                    -x_{1} + 5x_{2} + 2x_{3} &= 1\\
                    2x_{1} - x_{2} + 4x_{3} &= -3\\
                    x_{1} + 3x_{2} - 2x_{3} &= 6
                    \end{aligned}
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{ccc|c}
                        3 & 2 & -1 & 4\\
                        -1 & 5 & 2 & 1\\
                        2 & -1 & 4 & -3\\
                        1 & 3 & -2 & 6
                        \end{array}
                        \hspace{-1mm} \right)
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{cccc|c}
                        3 & 2 & -1 & 0 & 4\\
                        -1 & 5 & 2 & 0 & 1\\
                        2 & -1 & 4 & 0 & -3\\
                        1 & 3 & -2 & 0 & 6
                        \end{array}
                        \hspace{-1mm} \right)
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{ccc|c}
                        3 & -1 & 2 & 4\\
                        2 & 5 & -1 & 1\\
                        -1 & 2 & 4 & -3\\
                        1 & 3 & -2 & 6
                        \end{array}
                        \hspace{-1mm} \right)
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{cc|c}
                        3 & 2 & 4\\
                        -1 & 5 & 1\\
                        2 & -1 & -3\\
                        1 & 3 & 6
                        \end{array}
                        \hspace{-1mm} \right)
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{ccc|c}
                        3 & 2 & 1 & 4\\
                        -1 & 5 & -2 & 1\\
                        2 & -1 & -4 & -3\\
                        1 & 3 & 2 & 6
                        \end{array}
                        \hspace{-1mm} \right)
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
        id: 322,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Let {" "}
                <InlineMath math="A" />
                {" "} be an {" "}
                <InlineMath math="m\times n" />
                {" "} matrix with real entries. Suppose that the system {" "}
                <InlineMath math="A{\bf x}={\bf b}" />
                {" "} has exactly one solution. Which of the following is necessarily true?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="A{\bf x}={\bf 0}" />
                    {" "} has exactly one solution.
                </>
            ),
            "B": (
                <>
                    <InlineMath math="A" />
                    {" "} must have more rows than columns.
                </>
            ),
            "C": (
                <>
                    <InlineMath math="{\bf b}={\bf 0}" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="A" />
                    {" "} must have more columns than rows.
                </>
            ),
            "E": (
                <>
                    <InlineMath math="A" />
                    {" "} must be a square matrix.
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 323,
        topic: "Systems of Linear Equations",
        type: "multiple-choice",
        question: (
            <>
                Determine the augmented matrix associated to the system of linear equations
                <BlockMath math="
                    \begin{aligned}
                    4x_{1} - x_{2} + 2x_{3} + 3x_{4} - 5x_{5} &= 8\\
                    2x_{1} + 3x_{2} - x_{3} + x_{4} + 2x_{5} &= -2
                    \end{aligned}
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{ccccc|c}
                        4 & -1 & 2 & 3 & -5 & 8\\
                        2 & 3 & -1 & 1 & 2 & -2
                        \end{array}
                        \hspace{-1mm} \right)
                    " />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{cccc|c}
                        4 & -1 & 2 & 3 & 8\\
                        2 & 3 & -1 & 1 & -2
                        \end{array}
                        \hspace{-1mm} \right)
                    " />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{ccccc|c}
                        4 & 2 & -1 & 3 & -5 & 8\\
                        2 & -1 & 3 & 1 & 2 & -2
                        \end{array}
                        \hspace{-1mm} \right)
                    " />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{cccccc|c}
                        4 & -1 & 2 & 3 & -5 & 0 & 8\\
                        2 & 3 & -1 & 1 & 2 & 0 & -2
                        \end{array}
                        \hspace{-1mm} \right)
                    " />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="
                        \left( \hspace{-1mm}
                        \begin{array}{ccccc|c}
                        4 & -1 & 2 & -3 & -5 & 8\\
                        2 & 3 & -1 & 1 & -2 & -2
                        \end{array}
                        \hspace{-1mm} \right) 
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
        id: 324,
        topic: "Systems of Linear Equations",
        type: "true-false",
        question: (
            <>
                A system of linear equations is consistent
                {" "} if and only if {" "}
                the rightmost column of the augmented matrix is not a pivot column.
            </>
        ),
        correctAnswer: "True"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 325,
        topic: "Systems of Linear Equations",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="A \in {\rm Mat}_{m \times n}(\mathbb{R}), {\bf b} \in \mathbb{R}^{m}," />
                {" "} and {" "}
                <InlineMath math="{\bf u} \in \mathbb{R}^{n}," />
                {" "} such that {" "}
                <InlineMath math="A{\bf u} = {\bf b}." />
                {" "} Then {" "}
                <InlineMath math="A{\bf x} = {\bf b}" />
                {" "} if and only if {" "}
                <InlineMath math="{\bf x} = {\bf u} + {\bf v}" />
                {" "} for some {" "}
                <InlineMath math="{\bf v} \in \mathbb{R}^{n}" />
                {" "} such that {" "}
                <InlineMath math="A{\bf v} = {\bf 0}." />
            </>
        ),
        correctAnswer: "True"
    },
]