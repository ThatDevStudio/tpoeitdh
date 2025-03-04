export interface Candidate {
  active_through: number;
  candidate_id: string;
  candidate_inactive: boolean;
  candidate_status: string;
  cycles: number[];
  district: string;
  district_number: number;
  election_districts: string[];
  election_years: number[];
  federal_funds_flag: boolean;
  first_file_date: string;
  has_raised_funds: boolean;
  inactive_election_years: number[];
  incumbent_challenge: string;
  incumbent_challenge_full: string;
  last_f2_date: string;
  last_file_date: string;
  load_date: string;
  name: string;
  office: string;
  office_full: string;
  party: string;
  party_full: string;
  state: string;
}
