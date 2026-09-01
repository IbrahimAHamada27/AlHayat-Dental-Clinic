/**
 * Strict sanitizer that removes any accidental Personal Identifiable Information (PII)
 * or sensitive healthcare fields before sending to external analytics providers.
 */
const FORBIDDEN_PII_KEYS = new Set([
  'name',
  'fullname',
  'full_name',
  'phone',
  'phonenumber',
  'phone_number',
  'email',
  'message',
  'notes',
  'clinicalnotes',
  'clinical_notes',
  'medical_history',
  'patient_name',
  'patient_id',
  'address',
  'national_id',
]);

export function sanitizeAnalyticsParams(
  rawParams?: Record<string, unknown>
): Record<string, string | number | boolean> {
  if (!rawParams || typeof rawParams !== 'object') {
    return {};
  }

  const clean: Record<string, string | number | boolean> = {};

  for (const [key, val] of Object.entries(rawParams)) {
    const lowerKey = key.toLowerCase();
    // Drop any forbidden PII keys
    if (FORBIDDEN_PII_KEYS.has(lowerKey)) {
      continue;
    }

    // Accept only string, number, or boolean values
    if (typeof val === 'string' && val.trim().length > 0) {
      clean[key] = val.trim();
    } else if (typeof val === 'number' && !isNaN(val)) {
      clean[key] = val;
    } else if (typeof val === 'boolean') {
      clean[key] = val;
    }
  }

  return clean;
}
