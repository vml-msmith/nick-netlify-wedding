import styles from "./Hero.module.css";
import Image from "next/image";

export default function TogetherStory(props) {
  return (
    <div className="copy_content copy_content--wide">
      <div className="copy_image copy_image--together">
        <Image
          layout="fill"
          src={props.img}
          alt={props.img_alt}
          width={300}
          height={700}
          layout="responsive"
        />
      </div>
      <div className="copy">
        <div className="header_box">
          <h3>{props.title}</h3>
        </div>
        <>{props.children}</>
      </div>
    </div>
  );
}
