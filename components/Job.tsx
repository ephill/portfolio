import styles from "./Job.module.scss";
import classNames from "classnames";

export interface IJobProps {
  title: string;
  summary: string;
  role: string;
  responsibilities: string;
  image?: string;
  className?: string;
}

export const Job = ({
  title,
  summary,
  role,
  responsibilities,
  image,
  className,
}: IJobProps) => {
  return (
    <article className={classNames("px-8 py-4 flex flex-row", className)}>
      <div className={styles.main}>
        <h3 className="text-2xl font-medium">{title}</h3>
        <div>
          <h4 className="text-xl">Project summary</h4>
          <p>{summary}</p>
        </div>
        <div>
          <h4 className="text-xl">Role</h4>
          <p className="italic">{role}</p>
          <p>{responsibilities}</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        {image && <img src={image} />}
      </div>
    </article>
  );
};
