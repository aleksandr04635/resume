import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (typeof id !== "number") {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }
    const interval = await prisma.interval.findUnique({
      where: { id },
    });
    console.log("Interval to delete:", interval);
    if (interval) {
      console.log("before deletion");
      await prisma.interval.delete({
        where: { id },
      });
      console.log("after deletion");
      return NextResponse.json({ message: "Interval deleted", interval });
    } else {
      console.log("before not found");
      return NextResponse.json(
        { error: "Interval not found" },
        { status: 404 },
      );
    }

    //return NextResponse.json({ message: "deleted" });
    return NextResponse.json(interval);
    /*  return new NextResponse(
      JSON.stringify({ message: "deleted" }),
      // JSON.stringify({ error: "Failed to delete timer" }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    ); */
  } catch (error) {
    console.error(error);
    /*  return new NextResponse(
      JSON.stringify({ error: "Failed to delete timer" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    ); */
    return NextResponse.json(
      { error: "Failed to delete timer" },
      { status: 500 },
    );
  }
}
