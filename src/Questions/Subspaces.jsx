import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const subspacesQuestions = [
    {
        id: 1,
        topic: "Subspaces",
        type: "select-all",
        question: (
            <>
                Let {" "}
                <InlineMath math="\mathbb{Z}" />
                {" "} be the set of integers and let {" "}
                <InlineMath math="V" />
                {" "} be the real vector space {" "}
                <InlineMath math="\mathbb{R}." />
                {" "} We wish to determine if {" "}
                <InlineMath math="\mathbb{Z}" />
                {" "} is a subspace of {" "}
                <InlineMath math="V." />
                {" "} Which of the following are true?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="\mathbb{Z}" />
                    {" "} is a subspace of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="\mathbb{Z}" />
                    {" "} does not contain the zero vector of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="\mathbb{Z}" />
                    {" "} is not closed under vector addition.
                </>
            ),
            "D": (
                <>
                    <InlineMath math="\mathbb{Z}" />
                    {" "} is not closed under scalar multiplication.
                </>
            ),
        },
        correctAnswers: ["D"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 2,
        topic: "Subspaces",
        type: "select-all",
        question: (
            <>
                Let {" "}
                <InlineMath math="H" />
                {" "} be the set below and let {" "}
                <InlineMath math="V" />
                {" "} be the real vector space {" "}
                <InlineMath math="{\rm Mat}_{2}(\mathbb{R})" />.
                <BlockMath math="
                    H = 
                    \left\{ 
                    \begin{pmatrix}
                    a & b\\
                    c & d
                    \end{pmatrix}
                    \in {\rm Mat}_{2}(\mathbb{R})
                    \, \middle| \,
                    a \cdot b \cdot c \cdot d = 0
                    \right\}."
                />
                We wish to determine if {" "}
                <InlineMath math="H" />
                {" "} is a subspace of {" "}
                <InlineMath math="V." />
                {" "} Which of the following are true?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="H" />
                    {" "} is a subspace of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="H" />
                    {" "} does not contain the zero vector of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="H" />
                    {" "} is not closed under vector addition.
                </>
            ),
            "D": (
                <>
                    <InlineMath math="H" />
                    {" "} is not closed under scalar multiplication.
                </>
            ),
        },
        correctAnswers: ["C"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 3,
        topic: "Subspaces",
        type: "select-all",
        question: (
            <>
                Let <InlineMath math="H" /> be the set below and let <InlineMath math="V" />
                {" "} be the real vector space <InlineMath math="C^{2}(\mathbb{R})" />.
                <BlockMath math="
                    H = 
                    \left\{ 
                    f
                    \in C^{2}(\mathbb{R})
                    \, \middle| \,
                    f^{(2)}(x) = -f(x)
                    \right\}."
                />
                We wish to determine if <InlineMath math="H" /> is a subspace of <InlineMath math="V" />.
                Which of the following are true?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="H" />
                    {" "} is a subspace of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="H" />
                    {" "} does not contain the zero vector of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="H" />
                    {" "} is not closed under vector addition.
                </>
            ),
            "D": (
                <>
                    <InlineMath math="H" />
                    {" "} is not closed under scalar multiplication.
                </>
            ),
        },
        correctAnswers: ["A"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 4,
        topic: "Subspaces",
        type: "select-all",
        question: (
            <>
                Let
                <BlockMath math="
                    B = 
                    \left\{
                    (x,y,z) \in \mathbb{R}^{3}
                    \, \middle| \, 
                    x^{2} + y^{2} + z^{2} = 1
                    \right\}"
                />
                be the sphere of radius 1 centered at the origin and let {" "}
                <InlineMath math="V" />
                {" "} be the real vector space {" "}
                <InlineMath math="\mathbb{R}^{3}." />
                {" "} We wish to determine if {" "}
                <InlineMath math="B" />
                {" "} is a subspace of {" "}
                <InlineMath math="V." />
                {" "} Which of the following are true?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="B" />
                    {" "} is a subspace of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="B" />
                    {" "} does not contain the zero vector of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="B" />
                    {" "} is not closed under vector addition.
                </>
            ),
            "D": (
                <>
                    <InlineMath math="B" />
                    {" "} is not closed under scalar multiplication.
                </>
            ),
        },
        correctAnswers: ["B", "C", "D"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 5,
        topic: "Subspaces",
        type: "select-all",
        question: (
            <>
                Let {" "}
                <InlineMath math="H" />
                {" "} be the set below and let {" "}
                <InlineMath math="B" />
                {" "} be the matrix below.
                <BlockMath math="
                    H = 
                    \left\{
                    A \in {\rm Mat}_{2}(\mathbb{R})
                    \, \middle| \,
                    AB = BA
                    \right\},
                    \;\;
                    B = 
                    \begin{pmatrix}
                    1 & 2\\
                    1 & 3
                    \end{pmatrix}"
                />
                We wish to determine if {" "}
                <InlineMath math="H" />
                {" "} is a subspace of {" "}
                <InlineMath math="V = {\rm Mat}_{2}(\mathbb{R})." />
                {" "} Which of the following are true?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="H" />
                    {" "} is a subspace of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="H" />
                    {" "} does not contain the zero vector of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="H" />
                    {" "} is not closed under vector addition.
                </>
            ),
            "D": (
                <>
                    <InlineMath math="H" />
                    {" "} is not closed under scalar multiplication.
                </>
            ),
        },
        correctAnswers: ["A"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 6,
        topic: "Subspaces",
        type: "select-all",
        question: (
            <>
                Let {" "}
                <InlineMath math="H" />
                {" "} be the set below.
                <BlockMath math="
                    H = 
                    \left\{
                    A \in {\rm Mat}_{2}(\mathbb{R})
                    \, \middle| \,
                    A \text{ is invertible }
                    \right\}"
                />
                We wish to determine if {" "}
                <InlineMath math="H" />
                {" "} is a subspace of {" "}
                <InlineMath math="V = {\rm Mat}_{2}(\mathbb{R})." />
                {" "} Which of the following are true?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="H" />
                    {" "} is a subspace of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="H" />
                    {" "} does not contain the zero vector of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="H" />
                    {" "} is not closed under vector addition.
                </>
            ),
            "D": (
                <>
                    <InlineMath math="H" />
                    {" "} is not closed under scalar multiplication.
                </>
            ),
        },
        correctAnswers: ["B", "C", "D"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 7,
        topic: "Subspaces",
        type: "select-all",
        question: (
            <>
                Let {" "}
                <InlineMath math="A \in {\rm Mat}_{m \times n}(\mathbb{R})" />
                {" "} and let {" "}
                <InlineMath math="H" />
                {" "} be the solution set of {" "}
                <InlineMath math="A{\bf x} = {\bf 0}." />
                {" "} We wish to determine if {" "}
                <InlineMath math="H" />
                {" "} is a subspace of {" "}
                <InlineMath math="V = \mathbb{R}^{n}." />
                {" "} Which of the following are true?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="H" />
                    {" "} is a subspace of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="H" />
                    {" "} does not contain the zero vector of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="H" />
                    {" "} is not closed under vector addition.
                </>
            ),
            "D": (
                <>
                    <InlineMath math="H" />
                    {" "} is not closed under scalar multiplication.
                </>
            ),
        },
        correctAnswers: ["A"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 8,
        topic: "Subspaces",
        type: "select-all",
        question: (
            <>
                Let {" "}
                <InlineMath math="H = \mathbb{N} = \{0,1,2,\dots\}" />
                {" "} and let {" "}
                <InlineMath math="V" />
                {" "} be the real vector space {" "}
                <InlineMath math="\mathbb{R}." />
                {" "} We wish to determine if {" "}
                <InlineMath math="H" />
                {" "} is a subspace of {" "}
                <InlineMath math="V." />
                {" "} Which of the following are true?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="H" />
                    {" "} is a subspace of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="H" />
                    {" "} does not contain the zero vector of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="H" />
                    {" "} is not closed under vector addition.
                </>
            ),
            "D": (
                <>
                    <InlineMath math="H" />
                    {" "} is not closed under scalar multiplication.
                </>
            ),
        },
        correctAnswers: ["D"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 9,
        topic: "Subspaces",
        type: "select-all",
        question: (
            <>
                Let {" "}
                <InlineMath math="V" />
                {" "} be the real vector space {" "}
                <InlineMath math="\mathbb{P}_{5}(\mathbb{R})" />
                {" "} and let {" "}
                <InlineMath math="H = \{p \in \mathbb{P}_{5}(\mathbb{R}) \mid p^{\prime}(1) = 0\}." />
                {" "} We wish to determine if {" "}
                <InlineMath math="H" />
                {" "} is a subspace of {" "}
                <InlineMath math="V." />
                {" "} Which of the following are true?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    <InlineMath math="H" />
                    {" "} is a subspace of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "B": (
                <>
                    <InlineMath math="H" />
                    {" "} does not contain the zero vector of {" "}
                    <InlineMath math="V." />
                </>
            ),
            "C": (
                <>
                    <InlineMath math="H" />
                    {" "} is not closed under vector addition.
                </>
            ),
            "D": (
                <>
                    <InlineMath math="H" />
                    {" "} is not closed under scalar multiplication.
                </>
            ),
        },
        correctAnswers: ["A"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 10,
        topic: "Subspaces",
        type: "select-all",
        question: (
            <>
                Which of the following subsets of {" "}
                <InlineMath math="\mathbb{P}_{3}(\mathbb{R})" />
                {" "} are subspaces?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    The subset consisting of all polynomials of degree {" "}
                    <InlineMath math="2." />
                </>
            ),
            "B": (
                <>
                    The subset consisting of all polynomials with rational coefficients.
                </>
            ),
            "C": (
                <>
                    The subset consisting of all polynomials with non-negative coefficients.
                </>
            ),
            "D": (
                <>
                    The subset consisting of all polynomials with at least one real root.
                </>
            ),
            "E": (
                <>
                    The subset consisting of all polynomials {" "}
                    <InlineMath math="p" />
                    {" "} such that {" "}
                    <InlineMath math="p(-1) = p(1)." />
                </>
            ),
            "F": (
                <>
                    The subset consisting of all polynomials {" "}
                    <InlineMath math="p" />
                    {" "} such that {" "}
                    <InlineMath math="p(4) = 0." />
                </>
            ),
        },
        correctAnswers: ["E", "F"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 11,
        topic: "Subspaces",
        type: "select-all",
        question: (
            <>
                Which of the following subsets of {" "}
                <InlineMath math="{\rm Mat}_{3}(\mathbb{R})" />
                {" "} are subspaces?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    The subset consisting of all invertible matrices.
                </>
            ),
            "B": (
                <>
                    The subset consisting of all symmetric matrices.
                </>
            ),
            "C": (
                <>
                    The subset consisting of all matrices whose determinant is zero.
                </>
            ),
            "D": (
                <>
                    The subset consisting of all matrices whose trace is zero.
                </>
            ),
            "E": (
                <>
                    The subset consisting of all matrices {" "}
                    <InlineMath math="A" />
                    {" "} such that {" "}
                    <InlineMath math="A^{k} = 0_{3}" />
                    {" "} for some integer {" "}
                    <InlineMath math="k > 0." />
                </>
            ),
            "F": (
                <>
                    The subset consisting of all upper triangular matrices.
                </>
            ),
        },
        correctAnswers: ["B", "D", "F"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 12,
        topic: "Subspaces",
        type: "select-all",
        question: (
            <>
                Which of the following subsets of {" "}
                <InlineMath math="C(\mathbb{R})" />
                {" "} are subspaces?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    The subset consisting of all even real-valued functions.
                </>
            ),
            "B": (
                <>
                    The subset consisting of all odd real-valued functions.
                </>
            ),
            "C": (
                <>
                    The subset consisting of all functions {" "}
                    <InlineMath math="f" />
                    {" "} such that {" "}
                    <InlineMath math="f(x) \geq 0" />
                    {" "} for all {" "}
                    <InlineMath math="x." />
                </>
            ),
            "D": (
                <>
                    The subset consisting of all functions {" "}
                    <InlineMath math="f" />
                    {" "} such that {" "}
                    <InlineMath math="f(1) = 1." />
                </>
            ),
            "E": (
                <>
                    The subset consisting of all functions of the form {" "}
                    <InlineMath math="\dfrac{p(x)}{x^{2}+1}" />
                    {" "} such that {" "}
                    <InlineMath math="p" />
                    {" "} is a polynomial with real coefficients.
                </>
            ),
            "F": (
                <>
                    The subset consisting of the zero function and all functions {" "}
                    <InlineMath math="f" />
                    {" "} such that {" "}
                    <InlineMath math="f(x) = 0" />
                    {" "} if and only if {" "}
                    <InlineMath math="x = 0." />
                </>
            ),
        },
        correctAnswers: ["A", "B", "E"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 13,
        topic: "Subspaces",
        type: "select-all",
        question: (
            <>
                Which of the following subsets of {" "}
                <InlineMath math="\mathbb{R}^{3}" />
                {" "} are subspaces?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    The line: <InlineMath math="(3-2t, 6-2t, 9-2t)" />
                </>
            ),
            "B": (
                <>
                    The line: <InlineMath math="(3-2t, 6-4t, 9-6t)" />
                </>
            ),
            "C": (
                <>
                    The plane: <InlineMath math="3x-2y+z = 0" />
                </>
            ),
            "D": (
                <>
                    The plane: <InlineMath math="x+y+z = 1" />
                </>
            ),
            "E": (
                <>
                    The origin: <InlineMath math="\{(0,0,0)\}" />
                </>
            ),
            "F": (
                <>
                    All of <InlineMath math="\mathbb{R}^{3}" />
                </>
            )
        },
        correctAnswers: ["B", "C", "E", "F"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 14,
        topic: "Subspaces",
        type: "select-all",
        question: (
            <>
                Which of the following subsets of {" "}
                <InlineMath math="\mathbb{R}^{4}" />
                {" "} are subspaces?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    The subset consisting of all vectors {" "}
                    <InlineMath math="(x_{1},x_{2},x_{3},x_{4})" />
                    {" "} such that {" "}
                    <InlineMath math="x_{1}+x_{2}+x_{3}+x_{4}=0." />
                </>
            ),
            "B": (
                <>
                    The subset consisting of all vectors {" "}
                    <InlineMath math="(x_{1},x_{2},x_{3},x_{4})" />
                    {" "} such that {" "}
                    <InlineMath math="x_{1}x_{2}=0." />
                </>
            ),
            "C": (
                <>
                    The subset consisting of all vectors {" "}
                    <InlineMath math="(x_{1},x_{2},x_{3},x_{4})" />
                    {" "} such that {" "}
                    <InlineMath math="x_{1}=2x_{2}" />
                    {" "} and {" "}
                    <InlineMath math="x_{3}=-x_{4}." />
                </>
            ),
            "D": (
                <>
                    The subset consisting of all vectors whose components are all non-negative.
                </>
            ),
            "E": (
                <>
                    The subset consisting of all vectors {" "}
                    <InlineMath math="(x_{1},x_{2},x_{3},x_{4})" />
                    {" "} such that {" "}
                    <InlineMath math="x_{1}+x_{2}=1." />
                </>
            ),
            "F": (
                <>
                    The subset consisting of all vectors {" "}
                    <InlineMath math="(x_{1},x_{2},x_{3},x_{4})" />
                    {" "} such that {" "}
                    <InlineMath math="x_{1}-x_{2}+2x_{3}-x_{4}=0." />
                </>
            ),
        },
        correctAnswers: ["A", "C", "F"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 15,
        topic: "Subspaces",
        type: "select-all",
        question: (
            <>
                Let {" "}
                <InlineMath math="V=C^{2}([0,1])." />
                {" "} Which of the following subsets of {" "}
                <InlineMath math="V" />
                {" "} are subspaces?
            </>
        ),
        answerChoices: {
            "A": (
                <>
                    The set of all functions {" "}
                    <InlineMath math="f" />
                    {" "} satisfying {" "}
                    <InlineMath math="f''(x)=f(x)." />
                </>
            ),
            "B": (
                <>
                    The set of all functions {" "}
                    <InlineMath math="f" />
                    {" "} satisfying {" "}
                    <InlineMath math="f''(x) = f'(x)+1." />
                </>
            ),
            "C": (
                <>
                    The set of all functions {" "}
                    <InlineMath math="f" />
                    {" "} satisfying {" "}
                    <InlineMath math="f'(0) = 0." />
                </>
            ),
            "D": (
                <>
                    The set of all functions {" "}
                    <InlineMath math="f" />
                    {" "} satisfying {" "}
                    <InlineMath math="f''(x) + f'(x) \geq 0" />
                    {" "} for every {" "}
                    <InlineMath math="x\in[0,1]." />
                </>
            ),
            "E": (
                <>
                    The set of all functions {" "}
                    <InlineMath math="f" />
                    {" "} satisfying {" "}
                    <InlineMath math="f(0) + f(1) = 0." />
                </>
            ),
            "F": (
                <>
                    The set of all functions {" "}
                    <InlineMath math="f" />
                    {" "} satisfying {" "}
                    <InlineMath math="\int_{0}^{1}f(x)\,dx=1." />
                </>
            ),
        },
        correctAnswers: ["A", "C", "E"]
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 16,
        topic: "Subspaces",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="A" />
                {" "} be an {" "}
                <InlineMath math="m \times n" />
                {" "} matrix with real entries. Then the set of all solutions of {" "}
                <InlineMath math="A{\bf x} = {\bf b}" />
                {" "} is a subspace of {" "}
                <InlineMath math="\mathbb{R}^{n}." />
            </>
        ),
        correctAnswer: "False"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 17,
        topic: "Subspaces",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="V" />
                {" "} be a vector space and let {" "}
                <InlineMath math="W" />
                {" "} be a subspace of {" "}
                <InlineMath math="V." />
                {" "} Then there exists {" "}
                <InlineMath math="{\bf v}_{1},\dots,{\bf v_{r}} \in V" />
                {" "} such that {" "}
                <InlineMath math="W = {\rm Span}\{{\bf v}_{1},\dots,{\bf v_{r}}\}." />
            </>
        ),
        correctAnswer: "True"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 18,
        topic: "Subspaces",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="V" />
                {" "} be a vector space and let {" "}
                <InlineMath math="W" />
                {" "} be a subset of {" "}
                <InlineMath math="V." />
                {" "} If {" "}
                <InlineMath math="W" />
                {" "} is closed under scalar multiplication, then {" "}
                <InlineMath math="{\bf 0} \in W." />
            </>
        ),
        correctAnswer: "True"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 19,
        topic: "Subspaces",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="V" />
                {" "} be a vector space and let {" "}
                <InlineMath math="W" />
                {" "} and {" "}
                <InlineMath math="U" />
                {" "} be subspaces of {" "}
                <InlineMath math="V." />
                {" "} Then {" "}
                <InlineMath math="W \cup U" />
                {" "} is a subspace of {" "}
                <InlineMath math="V." />
            </>
        ),
        correctAnswer: "False"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 20,
        topic: "Subspaces",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="V" />
                {" "} be a vector space and let {" "}
                <InlineMath math="W" />
                {" "} and {" "}
                <InlineMath math="U" />
                {" "} be subspaces of {" "}
                <InlineMath math="V." />
                {" "} Then {" "}
                <InlineMath math="W \cap U" />
                {" "} is a subspace of {" "}
                <InlineMath math="V." />
            </>
        ),
        correctAnswer: "True"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 21,
        topic: "Subspaces",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="V" />
                {" "} be a vector space and let {" "}
                <InlineMath math="W" />
                {" "} and {" "}
                <InlineMath math="U" />
                {" "} be subspaces of {" "}
                <InlineMath math="V." />
                {" "} then {" "}
                <InlineMath math="
                    W + U = \{{\bf w} + {\bf u} 
                    \mid 
                    {\bf w} \in W, {\bf u} \in U\}
                "
                />
                {" "} is a subspace of {" "}
                <InlineMath math="V." />
            </>
        ),
        correctAnswer: "True"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 22,
        topic: "Subspaces",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="A \in {\rm Mat}_{m \times n}(\mathbb{R})." />
                {" "} Then the set of all solutions of {" "}
                <InlineMath math="A{\bf x} = {\bf 0}" />
                {" "} is a subspace of {" "}
                <InlineMath math="\mathbb{R}^{n}." />
            </>
        ),
        correctAnswer: "True"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 23,
        topic: "Subspaces",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="V" />
                {" "} be a vector space and let {" "}
                <InlineMath math="W, U," />
                {" "} and {" "}
                <InlineMath math="H" />
                {" "} be subspaces of {" "}
                <InlineMath math="V." />
                {" "} Then {" "}
                <InlineMath math="(W \cup U) \cap H" />
                {" "} is a subspace of {" "}
                <InlineMath math="V." />
            </>
        ),
        correctAnswer: "True"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 24,
        topic: "Subspaces",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="V" />
                {" "} be a vector space and let {" "}
                <InlineMath math="W" />
                {" "} be a subspace of {" "}
                <InlineMath math="V." />
                {" "} If {" "}
                <InlineMath math="U \subseteq W," />
                {" "} then {" "}
                <InlineMath math="U" />
                {" "} is a subspace of {" "}
                <InlineMath math="V." />
            </>
        ),
        correctAnswer: "False"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 25,
        topic: "Subspaces",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="V" />
                {" "} be a vector space and let {" "}
                <InlineMath math="W" />
                {" "} and {" "}
                <InlineMath math="U" />
                {" "} be subspaces of {" "}
                <InlineMath math="V" />
                {" "} such that {" "}
                <InlineMath math="U \subseteq W." />
                {" "} Then {" "}
                <InlineMath math="W \setminus U" />
                {" "} is a subspace of {" "}
                <InlineMath math="V." />
            </>
        ),
        correctAnswer: "False"
    },

    // #########################################################################################    
    // #########################################################################################   
    // #########################################################################################  

    {
        id: 26,
        topic: "Subspaces",
        type: "true-false",
        question: (
            <>
                Let {" "}
                <InlineMath math="V" />
                {" "} be a vector space and let {" "}
                <InlineMath math="W" />
                {" "} be a subspace of {" "}
                <InlineMath math="V." />
                {" "} If {" "}
                <InlineMath math="{\bf u}, {\bf v} \mathrel{\char`∉} W," />
                {" "} then {" "}
                <InlineMath math="{\bf u} + {\bf v} \mathrel{\char`∉} W." />
            </>
        ),
        correctAnswer: "False"
    },

]