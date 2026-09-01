import { SocialLinks } from './clinic.model';
import { IconName } from './icon.model';

export interface EducationItem {
  degreeAr: string;
  degreeEn?: string;
  institutionAr: string;
  institutionEn?: string;
  year?: string;
  descriptionAr?: string;
  descriptionEn?: string;
}

export interface ExperienceItem {
  titleAr: string;
  titleEn?: string;
  organizationAr: string;
  organizationEn?: string;
  locationAr?: string;
  locationEn?: string;
  startDate?: string;
  endDate?: string;
  descriptionAr?: string;
  descriptionEn?: string;
}

export interface CertificationItem {
  nameAr: string;
  nameEn?: string;
  issuingOrganizationAr?: string;
  issuingOrganizationEn?: string;
  year?: string;
  credentialUrl?: string;
}

export interface CourseItem {
  titleAr: string;
  titleEn?: string;
  providerAr?: string;
  providerEn?: string;
  year?: string;
}

export interface ConferenceItem {
  titleAr: string;
  titleEn?: string;
  locationAr?: string;
  locationEn?: string;
  year?: string;
}

export interface DoctorAreaOfInterest {
  id: string;
  titleAr: string;
  titleEn?: string;
  descriptionAr: string;
  descriptionEn?: string;
  iconName: IconName;
  serviceSlug?: string;
}

export interface Doctor {
  id: string;
  nameAr: string;
  nameEn: string;
  titleAr: string;
  titleEn: string;
  safeTitleAr: string; // "طبيب أسنان يهتم بتقديم رعاية متكاملة لصحة الفم والأسنان"
  safeTitleEn: string;
  specializationAr: string; // "طب الفم وتقويم الأسنان"
  specializationEn: string;
  bioAr: string;
  bioEn: string;
  philosophyAr: string;
  philosophyEn: string;
  image?: string;
  specialtiesAr: string[];
  specialtiesEn: string[];
  areasOfInterest?: DoctorAreaOfInterest[];
  socialLinks?: SocialLinks;
  // Academic credentials and certifications (all optional to strictly prevent fake data)
  education?: EducationItem[];
  experience?: ExperienceItem[];
  certifications?: CertificationItem[];
  courses?: CourseItem[];
  conferences?: ConferenceItem[];
  memberships?: string[];
  experienceYears?: number;
}
