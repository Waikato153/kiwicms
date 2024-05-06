import { redirect } from "next/navigation";

async function fetchTeam() {
    const res = await fetch("https://dogapi.dog/api/v2/breeds");

    console.log(res);

    if (!res.ok) return undefined;

    return res.json();
    
}

export default async function Profile({params} : {params: {id: string}}) {
    const team = await fetchTeam();
    //console.log(team);

}