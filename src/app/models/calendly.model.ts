// calendly.model.ts
export interface Calendly {
  initPopupWidget: (options: { url: string }) => void;
}

// Extend the Window interface
declare global {
  interface Window {
    Calendly: Calendly;
  }
}
