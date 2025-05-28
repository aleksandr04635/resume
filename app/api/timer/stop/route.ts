import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (typeof id !== "number") {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }
    const updated = await prisma.interval.update({
      where: { id },
      data: { end: new Date() },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to stop timer" },
      { status: 500 },
    );
  }
}
