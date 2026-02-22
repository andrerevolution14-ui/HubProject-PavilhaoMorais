'use client';

import Script from 'next/script';

const FB_PIXEL_ID = '660117493858562';

// Tipagem mínima para o fbq global
declare global {
    interface Window {
        fbq: (...args: unknown[]) => void;
        _fbq: unknown;
    }
}

// Função utilitária exportada para disparar eventos em qualquer componente
export function fbq(...args: unknown[]) {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq(...args);
    }
}

export default function FacebookPixel() {
    return (
        <>
            {/* Meta Pixel Script — carregado após a página estar interactiva */}
            <Script
                id="fb-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
                }}
            />
            {/* Fallback para browsers sem JavaScript */}
            <noscript>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                    alt=""
                />
            </noscript>
        </>
    );
}
