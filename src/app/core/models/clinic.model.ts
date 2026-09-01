export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  whatsapp?: string;
  youtube?: string;
  tiktok?: string;
}

export interface ContactInfo {
  phone: string;
  phoneRaw: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappRaw: string;
  email?: string;
}

export interface WorkingHours {
  daysAr: string;
  daysEn: string;
  hoursAr: string;
  hoursEn: string;
  noteAr?: string;
  noteEn?: string;
}

export interface ClinicConfig {
  clinicNameAr: string;
  clinicNameEn: string;
  doctorNameAr: string;
  doctorNameEn: string;
  taglineAr: string;
  taglineEn: string;
  shortDescriptionAr: string;
  shortDescriptionEn: string;
  contact: ContactInfo;
  social: SocialLinks;
  workingHours: WorkingHours[];
  defaultSeo: {
    siteName: string;
    siteUrl: string;
    defaultTitleAr: string;
    defaultTitleEn: string;
    defaultDescriptionAr: string;
    defaultDescriptionEn: string;
    ogImage: string;
    locale: string;
  };
}
