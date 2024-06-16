import React from "react";

interface DateTimeCleaningProps {
  form: {
    selectedDate: string | null;
    time: string | null;
  };
}

const DateTimeCleaning: React.FC<DateTimeCleaningProps> = ({ form }) => (
  <div className="flex flex-col gap-5 justify-center items-center md:flex-row md:justify-between md:items-end">
    <div className="w-[200px] md:w-[600px] lg:w-[800px] flex md:justify-between">
      <p className="text-accent text-[24px] lg:text-[28px] text-center">
        {form.selectedDate ? (
          <>
            Your cleaning date is:{" "}
            <span className="text-[#DE005D]">{form.selectedDate}</span>
          </>
        ) : (
          "You did not choose a date and time for cleaning."
        )}
        <br className="block md:hidden" />
        {form.time && (
          <>
            and time is: <span className="text-[#DE005D]">{form.time}</span>
          </>
        )}
      </p>
    </div>
  </div>
);

export default DateTimeCleaning;
