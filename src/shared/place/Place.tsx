import React, { FC, useState } from 'react';
import cn from 'clsx';
import cls from './place.module.scss';
import { Button } from '../btn';
import { Input } from '../input/Input';
import { Modal } from '../modal';

type Props = {
  className?: string;
};

export const Place: FC<Props> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  return (
    <div className={cn(cls.place, [className])}>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button className={cls.btn} onClick={() => setOpen(true)}>
        Открыть
      </Button>
      <Modal visible={open} onClose={() => setOpen(false)}>
        {text}
      </Modal>
    </div>
  );
};
