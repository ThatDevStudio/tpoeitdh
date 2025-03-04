export interface Member {
  bioguideId: string;
  depiction: MemberDepication;
  district: string | null;
  name: string;
  partyName: string;
  state: string;
  terms: { item: MemberTerm[] };
  updateDate: string;
  url: string;
}

interface MemberDepication {
  attribution: string;
  imageUrl: string;
}

interface MemberTerm {
  chamber: string;
  endYear: number | null;
  startYear: number;
}
