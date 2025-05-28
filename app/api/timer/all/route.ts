import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const intervals = await prisma.interval.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(intervals);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch intervals" },
      { status: 500 },
    );
  }
}
