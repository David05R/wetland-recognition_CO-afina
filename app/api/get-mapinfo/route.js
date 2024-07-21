import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const result = await sql`SELECT "Site name", "Latitude", "Longitude", "Area (ha)", "Zone type", "Population Density Classification" FROM wetlands_colombia`
        return NextResponse.json({result}, {status: 200})
    } catch (error) {
        return NextResponse.json({error}, {status: 500})
    }
}
