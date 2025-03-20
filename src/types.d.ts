declare module 'react-hook-form' {
  export const useForm: <T = any>(options?: any) => {
    register: any;
    handleSubmit: any;
    formState: { errors: any };
    reset: any;
    watch: any;
    setValue: any;
    getValues: any;
    control: any;
  };
} 