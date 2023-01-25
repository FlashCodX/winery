import { CommentType } from "@/typings";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
export const Comments = ({ comments }: { comments: CommentType[] }) => {
  const { container, commentsWrapper, info } = styles;

  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    const getPhoto = async () => {
      const { data } = await axios.get(
        `https://randomuser.me/api/?page=3&results=${
          comments.length + 1
        }&seed=abc&inc=picture`
      );

      setPhoto(data.results);
    };

    getPhoto();
  }, [comments.length]);

  if (!photo.length) return <p>Loading</p>;

  return (
    <div className={container}>
      <h1>Comments:</h1>
      <div className={commentsWrapper}>
        {/* Map all the comments of the selected wine */}
        {comments?.map((comment: CommentType, idx) => {
          {
            /*Destructre the object properties for simplicity */
          }
          const { id, username, content }: CommentType = comment;
          return (
            <article key={id}>
              <Image
                priority
                style={{ objectFit: "cover" }}
                width={50}
                height={50}
                src={photo[idx + 1]["picture"]["medium"]}
                alt=""
              />
              <div className={info}>
                <h1>{username}</h1>
                <p>{content}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
