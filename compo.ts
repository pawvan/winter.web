let avgScore:HTMLElement|null = document.querySelector(".avg-score");
(async function (){
    async function getData():Promise<any[]>{
        const response:Response = await fetch("./data.json");
        const data: any[]=await response.json()
        return data;
    }
})
try{
const [one,two,three,four]:any[] = await getData();
const oneScore:number  = one.score

const twoScore:number = two.score

const threeScore:number  = three.score

const fourScore:number = four.score
const avg:number = Math.floor((oneScore+twoScore+threeScore+fourScore)/4)
if (avgScore)
    {
    avgScore.innerText =avg.toString();    
}}
catch(error){
    console.log("Error fetching or processing data:", error);
}
