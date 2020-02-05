export type TEmployeeRoles = 'Admin' | 'Super Admin' | 'Member';
export type TTeams =
  | 'Consulting'
  | 'Marketing'
  | 'Innovation Hub'
  | 'Sales'
  | 'HR';
export type TUserRoles =
  | 'Open Source Engineer'
  | 'Marketing manager'
  | 'Lead Open Source'
  | 'Sales Manager'
  | 'Recruitment Lead';

export interface TEmployee {
  email: string;
  role: TEmployeeRoles;
}

export interface TDepartment {
  id: string;
  team: TTeams;
}

export interface TClient {
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
  employeeList: Array<TEmployee>;
  departments: Array<TEmployee>;
  clientsList: Array<TClient>;
}

export interface TUser {
  id: string;
  firstName: string;
  lastName: string;
  team: TTeams;
  role: TUserRoles;
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

export interface TReducerActions {
  type: string;
  payload: { [key: string]: any };
}

export interface TReducerState {
  data: any;
}

export type TReducerDispatcher = {
  type: string;
  payload: any;
};
