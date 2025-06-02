export type CampRegistrationFormProps = {
  initialName?: string;
  initialEmail?: string;
  initialActivities?: string[];
  onSubmit?: (data: CampRegistrationFormData) => void;
};

export type CampRegistrationFormData = {
  name: string;
  email: string;
  activities: string[];
};
