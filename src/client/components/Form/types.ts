export interface FormProps {
  options: string[];
  onSubmit: (data: {
    name: string;
    email: string;
    selected: string[];
  }) => Promise<{ success?: string; errors?: string[]; error?: string }>;
  loading?: boolean;
  error?: string | null;
  success?: string | null;
  validationErrors?: string[];
}
