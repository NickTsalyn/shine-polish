import React from 'react';
import Input from '../components/UI/Input';
import useFormStorage from '@/hooks/formStorage';
import {useForm} from 'react-hook-form';
import BasicSelect from './UI/Select';
import {usStates} from '@/data/booking-form/step_4';

type FormValues = {
 address: string;
 aptSuite: string;
 city: string;
 state: string;
 zipCode: string;
 selectedDate: string;
 time: string;
};

const AddressForm: React.FC = () => {
 const {form, handleInputChange} = useFormStorage(
  {
   address: '',
   aptSuite: '',
   city: '',
   state: '',
   zipCode: '',
   selectedDate: '',
   time: '',
  },
  'form'
 );
 const formData = useForm<FormValues>();

 return (
  <div className="w-full">
   <form className="flex flex-col gap-5 lg:gap-7">
    <div className=" flex gap-5  flex-col lg:flex-row min-w-[280px]">
     <div className="md:w-full lg:w-1/2 md:h-[48px] ">
      <Input
       type="text"
       style="form-input"
       placeholder="Address*"
       onChange={handleInputChange}
       value={form.address as string}
       name="address"
      />
     </div>
     <div className="md:w-full lg:w-1/2 md:h-[48px]">
      <Input
       type="text"
       style="form-input"
       placeholder="Apt/Suite#"
       onChange={handleInputChange}
       value={form.aptSuite as string}
       name="aptSuite"
      />
     </div>
    </div>
    <div className="flex gap-4  flex-col md:flex-row">
     <div className="md:w-4/6 lg:w-5/6 md:h-[48px] gap-5">
      <Input
       type="text"
       style="form-input"
       placeholder="City*"
       onChange={handleInputChange}
       value={form.city as string}
       name="city"
      />
     </div>
     <div className="md:w-[120px] md:h-[48px]">
      <BasicSelect
       name="state"
       placeholder="GA*"
       value={form.state as string}
       onChange={handleInputChange}
       items={usStates}
       style={{width: '120px'}}
      />
     </div>
     <div className="md:w-1/6 md:h-[48px]">
      <Input
       type="text"
       style="form-input"
       placeholder="Zip Code*"
       value={form.zipCode as number}
       onChange={handleInputChange}
       name="zipCode"
      />
     </div>
    </div>
   </form>
  </div>
 );
};

export default AddressForm;
