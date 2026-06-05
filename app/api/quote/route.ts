import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, petType } = body;

    // In production, this would send an email via Resend, SendGrid, or similar
    // For now, log the lead (visible in Vercel logs / server console)
    console.log('New quote request received:', {
      name,
      phone,
      petType: petType || 'Not specified',
      timestamp: new Date().toISOString(),
      source: 'gentlepetcremation.com',
    });

    // TODO: Add real email sending here using env vars for API keys
    // Example: await resend.emails.send({ ... })

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you. Your quote request has been received. A local provider will contact you shortly.' 
    });
  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json({ success: false, message: 'Something went wrong. Please try again or call us.' }, { status: 500 });
  }
}
