import prisma from "./db";

// Importing wetlands in protected areas
export async function getProtectedAreas() {
    try {
        const data = await prisma.wetlands.findMany({
            where: {
                Zone_type: "Protected Area",
            }
        });
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data from protected areas');
    }
}

// Importing wetlands in Urban areas
export async function getUrbanAreas() {
    try {
        const data = await prisma.wetlands.findMany({
            where: {
                Zone_type: "Urban Area",
            }
        });
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data from urban areas');
    }
}

// Importing wetlands in Other areas
export async function getOtherAreas() {
    try {
        const data = await prisma.wetlands.findMany({
            where: {
                Zone_type: "Other",
            }
        });
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch data from other areas');
    }
}

// Importing map data
export async function getMapData() {
    try {
        const data = await prisma.wetlands.findMany({
            select: {
                Site_name: true,
                Latitude: true,
                Longitude: true,
                Ramsar_Site_No_: true,
            }
        })
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch map data');
    }
}
