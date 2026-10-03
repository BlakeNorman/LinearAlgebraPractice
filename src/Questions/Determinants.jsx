import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const determinantsQuestions = [
    {
        id: 201,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Suppose {" "}
                <InlineMath math="A" />
                {" "} and {" "}
                <InlineMath math="B" />
                {" "} are {" "}
                <InlineMath math="3 \times 3" />
                {" "} matrices such that {" "}
                <InlineMath math="{\rm det}(A) = 3" />
                {" "} and {" "}
                <InlineMath math="{\rm det}(B) = \dfrac{1}{16}." />
                {" "} Compute {" "}
                <InlineMath math="{\rm det}\left( (3A^{-1})(4B)^{T} \right)." />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="\dfrac{9}{4}" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="\dfrac{1}{4}" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="\dfrac{4}{81}" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="\dfrac{1}{36}" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="\dfrac{1}{324}" />
                </>
            ),

        },
        correctAnswer: "C"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 202,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Let {" "}
                <BlockMath math="
                    A
                    =
                    \begin{pmatrix} 
                    a & b & c\\ 
                    d & e & f\\ 
                    g & h & i 
                    \end{pmatrix}
                    \; \text{and} \;
                    B
                    =
                    \begin{pmatrix} 
                    a-2d & b-2e & c-2f\\ 
                    3g & 3h & 3i\\ 
                    d-g & e-h & f-i 
                    \end{pmatrix}
                "
                />
                {" "} If {" "}
                <InlineMath math="{\rm det}(A) = 7," />
                {" "} then compute {" "}
                <InlineMath math="{\rm det}(B)." />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="-21" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="-63" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="21" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="63" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="-7" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  


    {
        id: 203,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Let {" "}
                <BlockMath math="
                    A
                    =
                    \begin{pmatrix} 
                    a & b & c\\ 
                    d & e & f\\ 
                    g & h & i 
                    \end{pmatrix}
                    \; \text{and} \;
                    B
                    =
                    \begin{pmatrix} 
                    2d+g & 2e+h & 2f+i\\ 
                    3d-a & 3e-b & 3f-c\\ 
                    a+g & b+h & c+i 
                    \end{pmatrix}
                "
                />
                {" "} If {" "}
                <InlineMath math="{\rm det}(A) = -4," />
                {" "} then compute {" "}
                <InlineMath math="{\rm det}(B)." />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="4" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="-4" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="8" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="-8" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="12" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 204,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Let {" "}
                <BlockMath math="
                    A
                    =
                    \begin{pmatrix} 
                    a & b & c\\ 
                    d & e & f\\ 
                    g & h & i 
                    \end{pmatrix}
                    \; \text{and} \;
                    B
                    =
                    \begin{pmatrix} 
                    5g & 5h & 5i\\ 
                    2d+a & 2e+b & 2f+c\\ 
                    a & b & c 
                    \end{pmatrix}
                "
                />
                {" "} If {" "}
                <InlineMath math="{\rm det}(A) = 3," />
                {" "} then compute {" "}
                <InlineMath math="{\rm det}(B)." />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="-30" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="-15" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="15" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="30" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="60" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 205,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Compute {" "}
                <BlockMath math="
                    {\rm det}
                    \begin{pmatrix}
                        1 & 2 & 4 & -1\\
                        0 & 3 & -1 & 2\\
                        3 & 5 & -1 & 0\\
                        0 & 1 & 1 & 2
                    \end{pmatrix}.
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="-68" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="-34" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="34" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="68" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="72" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 206,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Compute {" "}
                <BlockMath math="
                    {\rm det}
                    \begin{pmatrix}
                        2 & 3\\
                        -7 & 10
                    \end{pmatrix}.
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="41" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="31" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="-41" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="20" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="51" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 207,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Compute {" "}
                <BlockMath math="
                    {\rm det}
                    \begin{pmatrix}
                        0 & 1 & -1\\
                        0 & 2 & 1\\
                        2 & -4 & -2
                    \end{pmatrix}.
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="6" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="-6" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="4" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="-4" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="8" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 208,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Compute {" "}
                <InlineMath math="{\rm det}(A)" />
                {" "} where {" "}
                <BlockMath math="
                    A
                    =
                    \begin{pmatrix}
                        13 & 4\\
                        5 & 2
                    \end{pmatrix}
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="6" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="8" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="-6" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="16" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="-8" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 209,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Compute {" "}
                <InlineMath math="{\rm det}(A)" />
                {" "} where {" "}
                <BlockMath math="
                    A
                    =
                    \begin{pmatrix}
                        8 & 10\\
                        2 & -4
                    \end{pmatrix}
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="-52" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="-48" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="52" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="-28" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="48" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 210,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Compute {" "}
                <InlineMath math="{\rm det}(A)" />
                {" "} where {" "}
                <BlockMath math="
                    A
                    =
                    \begin{pmatrix}
                        4 & 5 & 1\\
                        2 & -4 & 3\\
                        1 & 1 & 2
                    \end{pmatrix}
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="-43" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="-41" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="43" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="41" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="-37" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 211,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Compute {" "}
                <InlineMath math="{\rm det}(A)" />
                {" "} where {" "}
                <BlockMath math="
                    A
                    =
                    \begin{pmatrix}
                        1 & 0 & 0 & 1\\
                        4 & 1 & 0 & -1\\
                        0 & 5 & 3 & -3\\
                        4 & 8 & 1 & 1
                    \end{pmatrix}
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="89" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="87" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="-89" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="79" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="-79" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 212,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Compute {" "}
                <InlineMath math="{\rm det}(A)" />
                {" "} where {" "}
                <BlockMath math="
                    A
                    =
                    \begin{pmatrix}
                        5 & 3 & 2 & 0\\
                        -1 & 4 & -3 & 1\\
                        0 & 3 & 2 & 0\\
                        1 & -2 & 4 & -5
                    \end{pmatrix}
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="-345" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="-335" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="345" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="-315" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="315" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 213,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Compute {" "}
                <InlineMath math="{\rm det}(A)" />
                {" "} where {" "}
                <BlockMath math="
                    A
                    =
                    \begin{pmatrix}
                        0 & 1 & 2 & 4\\
                        3 & 0 & -1 & 4\\
                        1 & 7 & 0 & 2\\
                        3 & 1 & 2 & 0
                    \end{pmatrix}
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="-410" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="-400" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="410" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="-390" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="390" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 214,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Compute {" "}
                <InlineMath math="{\rm det}(A^{2})" />
                {" "} where {" "}
                <BlockMath math="
                    A
                    =
                    \begin{pmatrix}
                        -2 & 12 & 13 & 91 & -6 & 23\\
                        0 & -1 & 56 & 7 & 18 & 4\\
                        0 & 0 & 3 & 44 & 57 & 89\\
                        0 & 0 & 0 & -2 & 10 & 8\\
                        0 & 0 & 0 & 0 & 1 & 9\\
                        0 & 0 & 0 & 0 & 0 & 1
                    \end{pmatrix}
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="144" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="72" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="-144" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="24" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="-72" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    {
        id: 215,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Compute {" "}
                <InlineMath math="{\rm det}(A^{3})" />
                {" "} where {" "}
                <BlockMath math="
                    A
                    =
                    \begin{pmatrix}
                        1 & 91 & 11 & -4 & 19 & -30\\
                        0 & 3 & 66 & 9 & 43 & 55\\
                        0 & 0 & 1 & 12 & 53 & -1\\
                        0 & 0 & 0 & -1 & 0 & 10\\
                        0 & 0 & 0 & 0 & -1 & 9\\
                        0 & 0 & 0 & 0 & -1 & 8
                    \end{pmatrix}
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="-27" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="27" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="-9" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="9" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="-81" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 216,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Compute {" "}
                <InlineMath math="{\rm det}(A^{2})" />
                {" "} where {" "}
                <BlockMath math="
                    A
                    =
                    \begin{pmatrix}
                        4 & 0 & 0 & 0 & 0 & 0\\
                        9 & -5 & 0 & 0 & 0 & 0\\
                        15 & 5 & 3 & 0 & 0 & 0\\
                        36 & 59 & 25 & -2 & 0 & 0\\
                        97 & 8 & 68 & 22 & 0 & 0\\
                        0 & 2 & 0 & 34 & 7 & 2
                    \end{pmatrix}
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="0" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="16" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="-16" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="64" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="-64" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 217,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Compute {" "}
                <InlineMath math="{\rm det}(A^{3})" />
                {" "} where {" "}
                <BlockMath math="
                    A
                    =
                    \begin{pmatrix}
                        4 & -5 & 0 & 0 & 0 & 0\\
                        5 & -5 & 0 & 0 & 0 & 0\\
                        31 & 5 & -1 & 0 & 0 & 0\\
                        10 & 16 & 67 & 1 & 0 & 0\\
                        0 & 40 & 5 & 88 & 1 & 0\\
                        17 & 2 & 80 & 12 & 71 & 1
                    \end{pmatrix}
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="-125" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="125" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="-25" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="25" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="-625" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 218,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Compute {" "}
                <InlineMath math="{\rm det}(A^{5})" />
                {" "} where {" "}
                <BlockMath math="
                    A
                    =
                    \begin{pmatrix}
                        1 & -2 & 3 & -4 & 5\\
                        -1 & 1 & -2 & 0 & 0\\
                        0 & 0 & 1 & 3 & 6\\
                        0 & 0 & 0 & -1 & 3\\
                        0 & 0 & 0 & 0 & -1
                    \end{pmatrix}
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="-1" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="1" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="-5" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="5" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="25" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 219,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Compute {" "}
                <InlineMath math="{\rm det}(A^{5})" />
                {" "} where {" "}
                <BlockMath math="
                    A
                    =
                    \begin{pmatrix}
                        2 & 9 & 38 & 40 & 58\\
                        0 & 1 & -2 & 4 & 12\\
                        0 & 0 & 1 & 13 & 18\\
                        0 & 0 & 0 & -1 & 9\\
                        0 & 0 & 0 & 0 & 1
                    \end{pmatrix}
                "
                />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="-32" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="32" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="-16" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="16" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="-64" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 220,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Suppose {" "}
                <InlineMath math="A,B \in {\rm Mat}_{3}(\mathbb{R})" />
                {" "} such that {" "}
                <InlineMath math="{\rm det}(A) = 10" />
                {" "} and {" "}
                <InlineMath math="{\rm det}(B) = 4." />
                {" "} Compute {" "}
                <InlineMath math="{\rm det}\left((2A)^{T}B^{-1}\right)" />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="20" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="5" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="40" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="80" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="\dfrac{5}{2}" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    {
        id: 221,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Suppose {" "}
                <InlineMath math="A,B \in {\rm Mat}_{2}(\mathbb{R})" />
                {" "} such that {" "}
                <InlineMath math="{\rm det}(A) = -5" />
                {" "} and {" "}
                <InlineMath math="{\rm det}(B) = 3." />
                {" "} Compute {" "}
                <InlineMath math="{\rm det}\left((4A)^{-1}(2B)^{2}\right)" />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="-\dfrac{9}{5}" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="\dfrac{9}{5}" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="-\dfrac{18}{5}" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="-\dfrac{3}{5}" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="\dfrac{18}{5}" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 222,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Suppose {" "}
                <InlineMath math="A,B,C \in {\rm Mat}_{2}(\mathbb{R})" />
                {" "} such that {" "}
                <InlineMath math="{\rm det}(A) = -5" />
                {", "} <InlineMath math="{\rm det}(B) = 3" />
                {", "} and {" "}
                <InlineMath math="{\rm det}(C) = 2." />
                {" "} Compute {" "}
                <InlineMath math="{\rm det}\left((3A)^{-1}(2B)^{T}C^{3}\right)" />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="-\dfrac{128}{15}" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="\dfrac{128}{15}" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="-\dfrac{64}{15}" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="-\dfrac{256}{15}" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="-\dfrac{32}{15}" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 223,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Suppose {" "}
                <InlineMath math="A,B,C \in {\rm Mat}_{3}(\mathbb{R})" />
                {" "} such that {" "}
                <InlineMath math="{\rm det}(A) = -1" />
                {", "} <InlineMath math="{\rm det}(B) = -2" />
                {", "} and {" "}
                <InlineMath math="{\rm det}(C) = 3." />
                {" "} Compute {" "}
                <InlineMath math="{\rm det}\left((3A)B^{T}C^{-1}\right)" />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="18" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="-18" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="6" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="-6" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="54" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 224,
        topic: "Determinants",
        type: "multiple-choice",
        question: (
            <>
                Let {" "}
                <BlockMath math="
                    A
                    =
                    \begin{pmatrix}
                        a & b & c\\
                        d & e & f\\
                        g & h & i
                    \end{pmatrix}
                    \; \text{and} \;
                    B
                    =
                    \begin{pmatrix}
                        g & 2(d-a) & a+g\\
                        h & 2(e-b) & b+h\\
                        i & 2(f-c) & c+i
                    \end{pmatrix}
                "
                />
                {" "} If {" "}
                <InlineMath math="{\rm det}(A) = k," />
                {" "} then find {" "}
                <InlineMath math="{\rm det}(B)." />
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="-2k" />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="2k" />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="-k" />
                </>
            ),
            "D": (
                <>
                    <InlineMath math="k" />
                </>
            ),
            "E": (
                <>
                    <InlineMath math="4k" />
                </>
            ),
        },
        correctAnswer: "A"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 225,
        topic: "Determinants",
        type: "true-false",
        question: (
            <>
                Suppose {" "}
                <InlineMath math="A \in {\rm Mat}_{n}(\mathbb{R})" />
                {" "} such that {" "}
                <InlineMath math="{\rm det}(A^{5}) = 0." />
                {" "} Then {" "}
                <InlineMath math="{\rm det}(A) = 0." />
            </>
        ),
        correctAnswer: "True"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 226,
        topic: "Determinants",
        type: "true-false",
        question: (
            <>
                Suppose {" "}
                <InlineMath math="A \in {\rm Mat}_{n}(\mathbb{R})" />
                {" "} such that {" "}
                <InlineMath math="{\rm det}(A^{6}) = 1." />
                {" "} Then {" "}
                <InlineMath math="{\rm det}(A) = 1." />
            </>
        ),
        correctAnswer: "False"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 227,
        topic: "Determinants",
        type: "true-false",
        question: (
            <>
                Suppose {" "}
                <InlineMath math="A \in {\rm Mat}_{n}(\mathbb{R})" />
                {" "} such that {" "}
                <InlineMath math="{\rm det}(A^{19}) = 1." />
                {" "} Then {" "}
                <InlineMath math="{\rm det}(A) = 1." />
            </>
        ),
        correctAnswer: "True"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 228,
        topic: "Determinants",
        type: "true-false",
        question: (
            <>
                Suppose {" "}
                <InlineMath math="A \in {\rm Mat}_{n}(\mathbb{R})" />
                {" "} such that {" "}
                <InlineMath math="A" />
                {" "} is invertible and {" "}
                <InlineMath math="{\rm det}(A) = 4." />
                {" "} Then {" "}
                <InlineMath math="{\rm det}(A^{-1}) = \dfrac{1}{4}." />
            </>
        ),
        correctAnswer: "True"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 228,
        topic: "Determinants",
        type: "true-false",
        question: (
            <>
                Suppose {" "}
                <InlineMath math="A,B \in {\rm Mat}_{n}(\mathbb{R})." />
                {" "} Then {" "}
                <InlineMath math="{\rm det}(A + B) = {\rm det}(A) + {\rm det}(B)." />
            </>
        ),
        correctAnswer: "False"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 229,
        topic: "Determinants",
        type: "true-false",
        question: (
            <>
                Suppose {" "}
                <InlineMath math="A,B \in {\rm Mat}_{n}(\mathbb{R})." />
                {" "} Then {" "}
                <InlineMath math="{\rm det}(AB) = {\rm det}(A) \cdot {\rm det}(B)." />
            </>
        ),
        correctAnswer: "False"
    },

    // #########################################################################################    
    // #########################################################################################   
    // ######################################################################################### 

    {
        id: 230,
        topic: "Determinants",
        type: "true-false",
        question: (
            <>
                Suppose {" "}
                <InlineMath math="A \in {\rm Mat}_{n}(\mathbb{R})." />
                {" "} Then {" "}
                <InlineMath math="{\rm det}(2A) = 2{\rm det}(A)." />
            </>
        ),
        correctAnswer: "False"
    },

]