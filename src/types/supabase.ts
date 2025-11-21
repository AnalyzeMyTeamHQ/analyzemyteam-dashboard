// Supabase Database Types
export interface Database {
  public: {
    Tables: {
      bots: {
        Row: {
          id: string;
          name: string;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
