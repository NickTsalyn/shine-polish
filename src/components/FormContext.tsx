'use client'
import React, {createContext, useState, ReactNode} from 'react';

type FormContextValue = {
  form: any;
  setForm: React.Dispatch<React.SetStateAction<any>>;
};

export const FormContext = createContext<FormContextValue>({} as FormContextValue);

export const FormProvider = ({children}: {children: ReactNode}) => {
    const [form, setForm] = useState({
        homeAccess: '',
        aboutUs: '',
        specialInstructions: '',
    })

    return (
        <FormContext.Provider value={{form, setForm}}>
            {children}
        </FormContext.Provider>
    )
}

