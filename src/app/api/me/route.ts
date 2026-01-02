import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

type DecodedToken = {
  id: number;
  email: string;
  iat: number;
  exp: number;
};

export async function GET(req: NextRequest) {
  try {
    // 1️⃣ گرفتن توکن از کوکی
    const token = req.cookies.get("token")?.value;

    if (!token) {
      console.log("[/api/me] No token found");
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    console.log("[/api/me] Token found:", token);

    // 2️⃣ بررسی و decode کردن JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
    console.log("[/api/me] Decoded token:", decoded);

    return NextResponse.json(
      { authenticated: true, user: { id: decoded.id, email: decoded.email } },
      { status: 200 }
    );
  } catch (err) {
    console.error("[/api/me] JWT verify error:", err);
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }
}
