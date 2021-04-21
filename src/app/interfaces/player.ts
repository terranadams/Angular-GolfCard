export interface Player {
    name: string;
    holes: Array<{ score: number, tapped: boolean }>;
    out: number;
    in: number;
    total: number;
    message: string;
  }