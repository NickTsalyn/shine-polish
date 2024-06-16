import React from "react";

interface DateTimeCleaningProps {
  form: {
    selectedDate: string | null;
    time: string | null;
  };
}

const DateTimeCleaning: React.FC<DateTimeCleaningProps> = ({ form }) => (
  <div className="">
    <p className="text-accent text-[24px] lg:text-[28px] text-center lg:text-start">
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
          <br className="hidden md:block lg:hidden" /> at:{" "}
          <span className="text-[#DE005D]">{form.time}</span>
        </>
      )}
    </p>
  </div>
);

export default DateTimeCleaning;
