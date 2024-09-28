export interface Job {
  company: string;
  position: string;
  description: string;
  startdate: string;
  enddate: string;
}

export interface Resume {
  history: {
    title: string;
    job: Job[];
  },
  education: {
    title: string;
    description: string;
  }
}