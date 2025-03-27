// types/Event.ts
export interface Coordinator {
    name: string;
    contact: string | null;
    email: string | null;
  }
  
  export interface JudgingCriteria {
    [key: string]: string;
  }
  
  export interface EventDetailsType {
    event: string;
    eventName: string;
    category: string;
    eligibility?: string[];
    categories?: string[];
    registration?: string[];
    performance_Rules?: string[];
    judging_Criteria?: JudgingCriteria;
    disqualification?: string[];
    technical_Requirements?: string[];
    code_Of_Conduct?: string[];
    venue: string;
    entryFee: number | null;
    timing: string | null;
    faculty_Coordinator: Coordinator;
    student_Coordinator: Coordinator;
  }