import { cards } from "@/content/cheklist-data";
import BasicBreadcrumbs from "../UI/Breadcrumbs";
import { AboutUs } from "./AboutUs";

export const Checklist = () => {
  return (
    <section>
      <div className="container center lg:mb-[120px]">
        <div className="p-5">
          <h1 className="h3 text-main mb-3 md:mb-[18px] lg:mb-7">Checklists</h1>
          <BasicBreadcrumbs roomName="Checklist" />
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-2 auto-rows-auto gap-[60px]">
          <ul className="grid grid-cols-1 auto-rows-auto gap-[60px]">
            {cards.map((card, index) => {
              if (index <= 5) {
                return (
                  <li
                    key={index}
                    className="shadow-main-shadow w-full lg:max-w-[546px] xl:max-w-[760px] p-5 rounded-xl"
                  >
                    <div>
                      <h2 className="text-[18px] md:text-[24px] font-normal leading-[21.6px] md:leading-[28.8px] text-accent mb-[16px] md:mb-[20px] lg:mb-[24px] xl:mb-[32px] ">
                        {card.h2}
                      </h2>
                      {card.p && (
                        <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[24px] text-text">
                          {card.p}
                        </p>
                      )}
                      {card.li && (
                        <ul className="pl-5">
                          {card.li.map((list, index) => {
                            if (typeof list === "string") {
                              return (
                                <li key={index} className="list-disc ">
                                  <p className="text-text text-[16px] md:text-[20px] leading-[20px] md:leading-[24px]">
                                    {list}
                                  </p>
                                </li>
                              );
                            }
                            if (typeof list === "object" && list.h3 && list.list) {
                              return (
                                <li key={index}>
                                  <h3 className="text-text text-[16px] md:text-[20px] leading-[20px] md:leading-[24px] font-bold mt-[16px]">
                                    {list.h3}
                                  </h3>
                                  <ul>
                                    {list.list.map((sublist, subIndex) => (
                                      <li key={subIndex} className="">
                                        <p className="text-text text-[16px] md:text-[20px] leading-[20px] md:leading-[24px] list-disc list-inside">
                                          {sublist}
                                        </p>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              );
                            }
                          })}
                        </ul>
                      )}
                      {card.warning && (
                        <p className="text-accent mt-[20px]">
                          <strong>{card.warning}</strong>
                        </p>
                      )}
                    </div>
                  </li>
                );
              }
            })}
          </ul>
          <ul className="grid grid-cols-1  gap-[60px]">
            {cards.map((card, index) => {
              if (index > 5) {
                return (
                  <li
                    key={index}
                    className="shadow-main-shadow w-full lg:max-w-[546px] xl:max-w-[760px]  p-5 rounded-xl"
                  >
                    <div>
                      <h2 className="text-[18px] md:text-[24px] font-normal leading-[21.6px] md:leading-[28.8px] text-accent mb-[16px] md:mb-[20px] lg:mb-[24px] xl:mb-[32px] ">
                        {card.h2}
                      </h2>
                      {card.p && (
                        <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[24px] text-text">
                          {card.p}
                        </p>
                      )}
                      {card.li && (
                        <ul className="pl-5">
                          {card.li.map((list, index) => {
                            if (typeof list === "string") {
                              return (
                                <li key={index} className="list-disc row-span-1">
                                  <p className="text-text text-[16px] md:text-[20px] leading-[20px] md:leading-[24px]">
                                    {list}
                                  </p>
                                </li>
                              );
                            }
                            if (typeof list === "object" && list.h3 && list.list) {
                              return (
                                <li key={index} className="row-span-2">
                                  <h3 className="text-text text-[16px] md:text-[20px] leading-[20px] md:leading-[24px] font-bold mt-[16px]">
                                    {list.h3}
                                  </h3>
                                  <ul>
                                    {list.list.map((sublist, subIndex) => (
                                      <li key={subIndex} className=" list-disc ">
                                        <p className="text-text text-[16px] md:text-[20px] leading-[20px] md:leading-[24px] list-disc ">
                                          {sublist}
                                        </p>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              );
                            }
                          })}
                        </ul>
                      )}
                      {card.warning && <strong className="text-accent mt-[16px]">{card.warning}</strong>}
                    </div>
                  </li>
                );
              }
            })}
            <li className="row-span-2  min-h-[200px] md:min-h-[304px] lg:min-h-[625px] xl:min-h-[646px] w-full lg:max-w-[546px] xl:max-w-[760px] shadow-main-shadow p-5 ">
              <AboutUs />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Checklist;
