"use client";

import React, { useState } from "react";
import Button from "../UI/Button";
import BasicModal from "../UI/Modal";
import WorkWithUsForm from "../WorkWithUsForm";
import { useTranslations } from "next-intl";

type Props = {
  open?: boolean;
  onClose?: () => void;
};

const WorkWithUs = (props: Props) => {
  const t = useTranslations('Home Page');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className=" mb-[60px] md:mb-[80px] lg:mb-[120px] xl:mb-[160px]">
      <div className=" flex justify-center ">
        <Button style="work-with-us" type="button" onClick={handleOpen}>
          <span className=" text-xl md:text-5xl lg:text-[64px] text-main hover:text-accent transition-all duration-300">
            {t('work-with-us')}
          </span>
        </Button>
        <BasicModal open={open} onClose={handleClose}>
          <WorkWithUsForm />
        </BasicModal>
      </div>
    </section>
  );
};

export default WorkWithUs;
