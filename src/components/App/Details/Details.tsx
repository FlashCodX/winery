import styles from "./styles.module.css";
import Image from "next/image";

// Icons
import { HiLocationMarker, HiCurrencyDollar } from "react-icons/hi";
import { IoIosTime } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";

import { WineType } from "@/typings";
import { Comments } from "../Comments/Comments";

export const Details = ({ wine }: { wine: WineType }) => {
  // Return a loading state if there is no available data
  if (!wine.name) return <p>Loading</p>;

  // Destructuring of the wine Object for simplicity.
  const {
    name,
    region,
    description,
    year,
    winery,
    price,
    image,
    comments,
  }: WineType = wine;

  // CSS Classes for the component
  const { container, wineInfo } = styles;

  return (
    <section className={container}>
      {/*  */}
      <div className={wineInfo}>
        {/* Wine Name */}
        <h1>{name}</h1>

        {/* Wine Region */}
        <section>
          <HiLocationMarker />
          <p>{region}</p>
        </section>

        {/* Description */}
        <span>{description}</span>

        {/* Wine Year */}
        <section>
          <IoIosTime />
          <p>{year}</p>
        </section>

        {/* Winery */}
        <section>
          <AiFillHome />
          <p>{winery}</p>
        </section>

        {/* Wine Price */}
        <section>
          <HiCurrencyDollar />
          <p>{price}</p>
        </section>
        {/* Wine Comments */}
        <Comments comments={comments} />
      </div>
      {/* Wine Image */}
      <Image
        height={800}
        priority
        style={{ objectFit: "contain", margin: "auto" }}
        src={require(`../../../assets/wines/${image}`)}
        alt="wine"
      />
    </section>
  );
};
