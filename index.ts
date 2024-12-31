interface VentilationInner {
    id: number;
    residence: string;
    floor: string;
    space: number | string;
    etc: string[];
}
interface Ventilation {
    vent: VentilationInner[];
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
            space: 30, etc : ['pet','cigarettes']
        },
        {
            id:25,
            residence : 'villa', floor : '1st',
            space: 8, etc : []
        }
    ]
}
interface QuestionName {
    key: string;
    value: string;
}
interface QuestionType {
    korean: string | string[];
    english: string | string[];
    group?: boolean;
}
interface Question {
    id: number;
    title: QuestionName;
    isMultiple: boolean;
    types: QuestionType[];
}
const question: Question[] = [
    {
        //선택 필수, id 표기 필수, 단일 선택
        id:1,
        title: {key:"residence", value: "주거형태를 선택해주세요."},
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
        title: {key:"floor", value: "주거층수를 선택해주세요."},
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
        title: {key:"space", value: "주거평형을 선택해주세요. (※ 1평 = 3.3㎡)"},
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
        title: {key:"etc", value: "기타사항을 선택해주세요."},
        isMultiple:true,
        types: [
            {korean: ["영유아", "어르신"], english: ["toddler", "elder"], group:true},
            {korean: "담배냄새유입", english: "cigarettes"},
            {korean: ["흡연자", "반려동물"], english: ["smoker", "pet"], group:true},
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
        step.innerHTML = `<h3>${question.id}. ${question.title.value}</h3><div class="types"></div>`;
    }else {
        step.innerHTML = `<h3>${question.title.value}</h3><div class="types"></div>`;
    }
    wrap.appendChild(step);
    //h3(title)과 .types 태그까지 생성 끝
    
    const types:NodeListOf<Element> = document.querySelectorAll(".types");
    
    question.types.forEach((type: QuestionType, typeIndex) => {
        const typeEnglish = type.english;
        const typeKorean = type.korean;
        const typeItem:HTMLDivElement = document.createElement("div");
        typeItem.classList.add("item");

        const stringProperty = (type:string | string[]):string => {
            return String(type).replace(",", "_");
        }
        const stringName = (type:string | string[]):string => {
            return String(type).replace(",", "/")
        }

        if(question.isMultiple){
            //다중 선택일 경우
            if(type.group){
                //group true인 경우
                typeItem.innerHTML = `<input type="checkbox" id="${stringProperty(typeEnglish)}" name="${question.title.key}"/><label for="${stringProperty(typeEnglish)}">${stringName(typeKorean)}</label>`;
            }else {
                typeItem.innerHTML = `<input type="checkbox" id="${type.english}" name="${question.title.key}"/><label for="${type.english}">${typeKorean}</label>`;
            }
        }else {
            //단일 선택일 경우
            if(type.group){
                //group true인 경우
                typeItem.innerHTML = `<input type="radio" id="${stringProperty(typeEnglish)}" name="${question.title.key}"/><label for="${stringProperty(typeEnglish)}">${stringName(typeKorean)}</label>`;
            }else {
                typeItem.innerHTML = `<input type="radio" id="${type.english}" name="${question.title.key}"/><label for="${type.english}">${typeKorean}</label>`;
            }
        }
        
        types[questionIndex].appendChild(typeItem);
    });

});


interface Selected {
    residence: string[];
    floor: string[];
    space: string[];
    etc: string[];
}

const findButton = document.getElementById("findButton") as HTMLElement;

findButton.addEventListener("click", function(){
    const inputChecked = document.querySelectorAll("input:checked") as NodeListOf<HTMLInputElement>; //선택된 input checked 가져오기
    const selected:Selected = {//내가 선택한 값들을 저장하는 객체배열 변수
        residence:[], floor:[], space:[], etc:[],
    };
    //깊은 복사를 해서 Ventilation와 result객체가 서로 독립적으로 동작할 수 있도록
    const result:Ventilation = JSON.parse(JSON.stringify(ventilation));

    inputChecked.forEach((input:HTMLInputElement)=>{
        const key = input.name as keyof Selected; //그냥 selected에 input.name을 박아버리면 tsc에서 string은 key값으로 참조할 수 없기때문에 불가, 라고 떠서 input.name은 Selected의 key값이라고 알려줘야함.

        if(input.id.search("_") !== -1 && selected[key] && !selected[key]?.includes(input.id)){ //selected[key]는 undefined일수도 아닐수도
            //input.id string에 _이 없으면 -1 반환

            input.id.split("_").forEach((split)=>{
                //_로 있는 것 분할하여 배열로 변환 및 forEach
                selected[key]?.push(split); //배열의 값 push
            });
        }else {
            //input.id string에 _이 있고, selected[input.name]에도 값이 없을 경우
            selected[key]?.push(input.id);
        }
    });
    //selected에 값이 없으면 담기

    //filter 시작
    result.vent.forEach((vent:VentilationInner)=>{
        //만약 vent 내부에 question[title[key]]를 키 값으로 돌려서 floor(string포함)거나 space(only number)면 변경
        if(vent.floor){
            //vent.floor이 string 포함이기 때문에..
            //숫자만 반환
            vent.floor = vent.floor.replace(/[^0-9]/g, "");
            if(Number(vent.floor) > 0 && Number(vent.floor) <= 9){
                vent.floor = "lowRise";
            }else if(Number(vent.floor) >= 10 && Number(vent.floor) <= 19){
                vent.floor = "midRise";
            }else if(Number(vent.floor) >= 20){
                vent.floor = "highRise";
            }else {
                console.log("해당없음");
            }
        }
        if(vent.space){
            //숫자만
            if(Number(vent.space) > 0 && Number(vent.space) <= 22){
                vent.space = "10-22";
            }else if(Number(vent.space) >= 23 && Number(vent.space) <= 40){
                vent.space = "30-40";
            }else if(Number(vent.space) >= 41){
                vent.space = "40plus";
            }else {
                console.log("해당없음");
            }
        }
    });

    Object.keys(selected).forEach((keys: string)=>{
        const key = keys as keyof Selected;

        selected[key]?.forEach((item: string)=>{
            //console.log(keys, item);
            if(key !== "etc"){
                /*
                * TODO:: 1. etc가 아닐 경우 상단의 floor와 space 처리를 여기서 진행할 수 있도록 작업 예정
                * */
                result.vent = result.vent.filter((vent:VentilationInner ): boolean => {
                    
                    return vent[key] === item;
                });
            }else{
                //includes로 result 에서 하나라도 true나오면 반환
                result.vent = result.vent.filter((vent: VentilationInner): boolean=>{
                    const etc = vent[key];

                    if(etc.length === 0){
                        //etc 배열의 length값이 0일 경우
                        //result에 etc 빈 배열인 항목이 포함되지 않도록 처리해야함
                        return vent !== vent;
                    }else {
                        //etc 배열의 length값이 0이 아닐 경우
                        return etc.some((item: string): boolean=>selected.etc.includes(item));
                    }
                });
            }
        });
    });
    console.log(result.vent);
});