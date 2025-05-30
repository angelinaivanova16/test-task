import { Button, Photos } from '@/components';
import s from './gallery.module.scss';

export const Gallery = () => {

  return (
    <section className={s.gallery}>
      <h2 className={s.title}>Less important title</h2>
      <Photos />
      <div className={s.btnContainer}>
        <Button
          name="Contact us"
          theme="primary"
        />
      </div>
    </section>
  );
};