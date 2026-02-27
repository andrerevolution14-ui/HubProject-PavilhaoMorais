/**
 * Utilitário para disparar eventos da Meta (Pixel + Conversions API)
 * Inclui deduplicação automática via event_id
 */

export const trackMetaEvent = async (
    eventName: string,
    customData: Record<string, unknown> = {},
    userData: Record<string, unknown> = {}
) => {
    // 1. Gerar ID único para deduplicação (Pixel e CAPI devem ter o mesmo ID)
    const eventId = `event_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const eventSourceUrl = typeof window !== 'undefined' ? window.location.href : '';

    // Função para obter cookies
    const getCookie = (name: string) => {
        if (typeof document === 'undefined') return undefined;
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
        return undefined;
    };

    // Obter IDs da Meta
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    const enhancedUserData = {
        ...userData,
        fbp,
        fbc,
    };

    // 2. Disparar via Pixel (Browser)
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', eventName, {
            ...customData,
            eventID: eventId // Nota: Pixel usa eventID (case sensitive para deduplicação)
        }, { eventID: eventId });
    }

    // 3. Disparar via Conversions API (Servidor)
    try {
        await fetch('/api/facebook-capi', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                eventName,
                eventId,
                eventSourceUrl,
                userData: enhancedUserData,
                customData
            }),
        });
    } catch (error) {
        console.error('Erro ao enviar evento CAPI:', error);
    }
};
