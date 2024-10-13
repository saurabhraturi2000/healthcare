import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: Gender;
  occupation: string;
  // age: string;
  bloodGroup: string;
  chronicDiseases: string | undefined;
  address: string;
  allergies: string | undefined;
  pastMedicalHistory: string | undefined;
  emergencyContactName: string;
  emergencyContactNumber: string;
  familyMedicalHistory: string | undefined;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
  primaryPhysician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}
