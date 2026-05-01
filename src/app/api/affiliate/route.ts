import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import Affiliate from '@/models/Affiliate';
import { authOptions } from '../auth/[...nextauth]/route';
export const dynamic = 'force-dynamic';
export async function POST(request: NextRequest) {
  try {
const session = await getServerSession(authOptions);    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const { productId } = await request.json();

    const email = session.user?.email;
    if (!email) {
      return NextResponse.json({ error: 'User email missing' }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const link = `${process.env.NEXTAUTH_URL}/product/${productId}?ref=${user.affiliateCode}`;

    const affiliate = new Affiliate({
      userId: user._id,
      productId,
      link,
    });

    await affiliate.save();

    return NextResponse.json({ link }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const email = session.user?.email;
    if (!email) {
      return NextResponse.json({ error: 'User email missing' }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const affiliates = await Affiliate.find({ userId: user._id });

    return NextResponse.json(affiliates);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}