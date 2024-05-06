import { redirect } from "next/navigation";

async function fetchTeam() {
    const res = await fetch("https://dogapi.dog/api/v2/breeds");

    if (!res.data) return undefined;

    return res.json();
    
}