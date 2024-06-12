import React from "react";
import { DatePikerCustomIcon, FrontDoorForm } from "@/global/images";
import Input from "../UI/Input";
import dayjs, { Dayjs } from "dayjs";
import CustomDesctopDatePicker from "../UI/DateTimePicker";

const Step4 = () => {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
    console.log("Selected date:", date);
    setIsCalendarOpen(false); // Закриваємо календар при виборі дати
  };

  const handleButtonClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  return (
    <div className="p-4 md:p-6 lg:p-9">
      <div className="flex mb-[72px] lg:mb-[92px]">
        <div className="flex flex-col md:mr-1 lg:mr-[164px]">
          <h1 className="h1 md:text-[36px] mb-[32px]">
            Where would you like us to clean?
          </h1>
          <form className="flex flex-col gap-5">
            <div className="md:w-[508px] lg:w-[774px] md:h-[40px] ">
              <Input
                type="text"
                style="form-input"
                placeholder="Adress*"
              ></Input>
            </div>
            <div className="md:w-[444px] lg:w-[672px] md:h-[40px] ">
              <Input
                type="text"
                style="form-input"
                placeholder="Apt/Suite#"
              ></Input>
            </div>
            <div className="md:w-[332px] lg:w-[504px] md:h-[40px] ">
              <Input type="text" style="form-input" placeholder="City*"></Input>
            </div>
            <div className="md:w-[228px] lg:w-[348px] md:h-[40px] ">
              <Input
                type="text"
                style="form-input"
                placeholder="Zip Code*"
              ></Input>
            </div>
          </form>
        </div>
        <div className="hidden md:block md:w-[174px] md:h-[307px]">
          <FrontDoorForm />
        </div>
      </div>
      <div>
        <h2 className="h1 md:text-[36px] mb-[32px]">
          When would you like us to clean?
        </h2>

        <div className="flex gap-3">
          <div className="w-[200px]">
            <p className="text-subtext text-4 lg:text-5 mb-5">
              Choose a date and time you would like to us to come.
            </p>
          </div>
          <div className="w-[100px]">
            <button
              type="button"
              onClick={handleButtonClick}
              className="btn btn-primary"
            >
              <DatePikerCustomIcon />
              <span>Choose Date</span>
            </button>
          </div>
        </div>
        <div className={`lg:flex gap-3 ${isCalendarOpen ? "block" : "hidden"}`}>
          <CustomDesctopDatePicker onChange={handleDateChange} />
        </div>

        <div className="w-[150px] justify-center">
          <p className="text-accent text-8 lg:text-10 text-center">
            {selectedDate
              ? `Your booking date: ${selectedDate.format("MM-DD-YYYY")}`
              : "You did not choose a date and time for cleaning."}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Step4;
