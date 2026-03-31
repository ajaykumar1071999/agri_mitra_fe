export const GA_TRACKING_ID: string | undefined = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag: (command: 'config' | 'event', targetId: string, config?: Record<string, unknown>) => void;
  }
}

// Track page view
export const pageview = (url: string): void => {
  if (typeof window === 'undefined' || !window.gtag || !GA_TRACKING_ID) return;

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

type GtagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

// Track events
export const event = ({ action, category, label, value }: GtagEvent): void => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
