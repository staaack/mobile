export type EmployeeRoles = 'Admin' | 'Super Admin' | 'Member';
export type Teams =
  | 'Consulting'
  | 'Marketing'
  | 'Innovation Hub'
  | 'Sales'
  | 'HR';
export type UserRoles =
  | 'Open Source Engineer'
  | 'Marketing manager'
  | 'Lead Open Source'
  | 'Sales Manager'
  | 'Recruitment Lead';

export interface Employee {
  email: string;
  role: EmployeeRoles;
}

export interface Department {
  id: string;
  team: Teams;
}

export interface Client {
  id: string;
  company: string;
  contact: string;
}

export interface Engineering {
  profileInfo: {
    id: string;
    role: string;
    currentProject: string;
  };
  dailyDistribution: {
    dailyRate: string;
    educationContribution: string;
    bonusPlan: string;
    telephone: string;
    internet: string;
    computer: string;
    officeContribution: string;
    car: string;
    gasCard: string;
    launchVoucher: string;
    ecoVoucher: string;
    rAndDContribution: string;
    marketingContribution: string;
    salary: string;
    hrAndProfileContribution: string;
  };
  hrInformation: {
    fixedRateBrutto: string;
    onss: string;
    echoCheque: string;
    gsm: string;
    car: string;
    
  };
}

export interface Company {
  employeeList: Array<Employee>;
  departments: Array<Employee>;
  clientsList: Array<Client>;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  team: Teams;
  role: UserRoles;
}

export interface Sales {
  financialData: {
    clientOrProject: string;
    category: string;
    invoiceNumber: string;
    amount: string;
    paid: any;
  };
  financialMetrics: {
    goalToReach: string;
    currentStatus: string;
    consultingRevenue: string;
    trainingRevnue: string;
    tendersRevenue: string;
  };
}

export interface ReducerActions {
  type: string;
  payload: { [key: string]: any };
}

export interface ReducerState {}
