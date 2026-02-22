import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { eventName, eventId, eventSourceUrl, userData, customData } = body;

        const pixelId = process.env.FB_PIXEL_ID;
        const accessToken = process.env.FB_ACCESS_TOKEN;

        if (!pixelId || !accessToken) {
            console.error('FB_PIXEL_ID or FB_ACCESS_TOKEN not set in environment variables');
            return NextResponse.json({ error: 'Missing environment variables' }, { status: 500 });
        }

        // Meta Conversions API URL
        const url = `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`;

        // Payload para a Meta
        const payload = {
            data: [
                {
                    event_name: eventName,
                    event_time: Math.floor(Date.now() / 1000),
                    event_id: eventId,
                    event_source_url: eventSourceUrl,
                    action_source: 'website',
                    user_data: {
                        client_ip_address: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '127.0.0.1',
                        client_user_agent: req.headers.get('user-agent'),
                        // Hash de dados (se disponíveis)
                        ...userData
                    },
                    custom_data: customData,
                }
            ],
            // test_event_code: 'TESTXXXXX' // Descomentar para testar no Event Manager
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (!response.ok) {
            console.error('Meta CAPI Error:', result);
            return NextResponse.json({ error: result }, { status: response.status });
        }

        return NextResponse.json({ success: true, result });
    } catch (error) {
        console.error('CAPI Internal Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
