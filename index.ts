interface Ventilation {
    vent: {
        id: number;
        residence: string;
        floor: string;
        space: number;
        etc: string[];
    }[];
}
const ventilation: Ventilation = {
    vent: [
        {
            id:1,
            residence : 'apartment', floor : '4th',
            space: 35, etc : ['smoker', 'pet', 'complex']
        },
        {
            id:2,
            residence : 'apartment', floor : '18th',
            space: 35, etc : ['toddler', 'cigarettes']
        },
        {
            id:3,
            residence : 'commercialHouse', floor : '1st',
            space: 15, etc : ['elder', 'smoker']
        },
        {
            id:4,
            residence : 'residential', floor : '37th',
            space: 45, etc : ['complex', 'pet']
        },
        {
            id:5,
            residence : 'apartment', floor : '27th',
            space: 30, etc : ['toddler', 'pet']
        },
        {
            id:6,
            residence : 'villa', floor : '16th',
            space: 24, etc : []
        },
        {
            id:7,
            residence : 'residential', floor : '7th',
            space: 35, etc : ['smoker']
        },
        {
            id:8,
            residence : 'apartment', floor : '30th',
            space: 40, etc : ['toddler', 'pet', 'cigarettes']
        },
        {
            id:9,
            residence : 'apartment', floor : '27th',
            space: 30, etc : ['toddler', 'pet']
        },
        {
            id:10,
            residence : 'commercialHouse', floor : '3rd',
            space: 35, etc : ['cigarettes', 'smoker']
        },
        {
            id:11,
            residence : 'villa', floor : '6th',
            space: 24, etc : ['elder']
        },
        {
            id:12,
            residence : 'apartment', floor : '45th',
            space: 50, etc : ['complex']
        },
        {
            id:13,
            residence : 'commercialHouse', floor : '1st',
            space: 32, etc : ['cigarettes']
        },
        {
            id:14,
            residence : 'apartment', floor : '27th',
            space: 30, etc : ['toddler', 'pet']
        },
        {
            id:15,
            residence : 'commercialHouse', floor : '2nd',
            space: 35, etc : ['cigarettes', 'smoker']
        },
        {
            id:16,
            residence : 'villa', floor : '6th',
            space: 24, etc : ['elder']
        },
        {
            id:17,
            residence : 'apartment', floor : '45th',
            space: 50, etc : ['complex']
        },
        {
            id:18,
            residence : 'commercialHouse', floor : '2nd',
            space: 39, etc : ['smoker', 'pet', 'complex', 'toddler']
        },
        {
            id:19,
            residence : 'commercialHouse', floor : '1st',
            space: 12, etc : ['toddler', 'pet', 'complex']
        },
        {
            id:20,
            residence : 'commercialHouse', floor : '1st',
            space: 8, etc : []
        },
        {
            id:21,
            residence : 'commercialHouse', floor : '3rd',
            space: 45, etc : ['cigarettes', 'elder']
        },
        {
            id:22,
            residence : 'apartment', floor : '45th',
            space: 50, etc : ['complex']
        },
        {
            id:23,
            residence : 'residential', floor : '38th',
            space: 50, etc : ['cigarettes']
        },
        {
            id:24,
            residence : 'villa', floor : '3rd',
            space: 30, etc : ['pet','elder']
        },
        {
            id:25,
            residence : 'villa', floor : '1st',
            space: 8, etc : []
        }
    ]
}
interface QuestionType {
    korean: string;
    english: string;
}
interface Question {
    id: number;
    title: string;
    isMultiple: boolean;
    types: QuestionType[];
}
const question: Question[] = [
    {
        //선택 필수, id 표기 필수, 단일 선택
        id:1,
        title: "주거형태를 선택해주세요.",
        isMultiple:false,
        types: [
            {korean: "아파트", english: "apartment"},
            {korean: "주상복합,오피스텔", english: "residential"},
            {korean: "연립/빌라/단독", english: "villa"},
            {korean: "상가주택", english: "commercialHouse"},
        ]
    },
    {
        //선택 필수, id 표기 필수, 단일 선택
        id:2,
        title: "주거층수를 선택해주세요.",
        isMultiple:false,
        types: [
            {korean: "저층(1~9F)", english: "lowRise" },
            {korean: "중층(10~19F)", english: "midRise" },
            {korean: "고층(20F~)", english: "highRise"}
        ]
    },
    {
        //선택 필수, id 표기 필수, 단일 선택
        id:3,
        title: "주거평형을 선택해주세요. (※ 1평 = 3.3㎡)",
        isMultiple:false,
        types: [
            {korean: "10평~22평대", english: "10-22"},
            {korean: "30평~40평대", english: "30-40"},
            {korean: "40평대 이상", english: "40plus"}
        ]
    },
    {
        //선택 필수 X, id 표기 X, 다중 선택
        id:4,
        title: "기타사항을 선택해주세요.",
        isMultiple:true,
        types: [
            {korean: "영유아", english: "toddler"},
            {korean: "어르신", english: "elder"},
            {korean: "담배냄새유입", english: "cigarettes"},
            {korean: "흡연자", english: "smoker"},
            {korean: "반려동물", english: "pet"},
            {korean: "복합기능", english: "complex"}
        ]
    }
]

const wrap = document.getElementById("question") as HTMLElement;

question.forEach((question: Question, questionIndex) => {
    const step:HTMLDivElement = document.createElement("div");//question 객체 갯수만큼 div 생성
    step.classList.add("step"); //생성된 div에 step class 추가
    
    if(question.id !== 4) {
        //id가 4가 아닐때
        step.innerHTML = `<h3>${question.id}. ${question.title}</h3><div class="types"></div>`;
    }else {
        step.innerHTML = `<h3>${question.title}</h3><div class="types"></div>`;
    }
    wrap.appendChild(step);
    //h3(title)과 .types 태그까지 생성 끝
    
    const types = document.querySelectorAll(".types");
    
    question.types.forEach((type: QuestionType, typeIndex) => {
        const typeItem:HTMLDivElement = document.createElement("div");
        typeItem.classList.add("item");
        
        if(question.isMultiple){
            //다중 선택일 경우
            typeItem.innerHTML = `<input type="checkbox" id="${type.english}" name="question${question.id}"/><label for="${type.english}">${type.korean}</label>`
        }else {
            //단일 선택일 경우
            typeItem.innerHTML = `<input type="radio" id="${type.english}" name="question${question.id}"/><label for="${type.english}">${type.korean}</label>`
        }
        
        
        types[questionIndex].appendChild(typeItem);
        
    });
});