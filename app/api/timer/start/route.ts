import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const interval = await prisma.interval.create({
      data: { start: new Date() },
    });
    return NextResponse.json(interval);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to start timer" },
      { status: 500 },
    );
  }
}
