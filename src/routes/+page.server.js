/** Rendered on every request, so the page shows which build and when it answered. */
export const load = () => ({ now: new Date().toISOString(), commit: process.env.SOURCE_COMMIT ?? 'unknown' });
